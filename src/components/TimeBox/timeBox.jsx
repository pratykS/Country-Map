import React, { useEffect, useState } from "react";
import timespace from "@mapbox/timespace";
import "./timeBox.css";

const dayMapping = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const TimeBox = (props) => {
  const { latitude, longitude } = props;

  const getLocationTime = (coordinate) => {
    return timespace.getFuzzyLocalTimeFromPoint(Date.now(), coordinate);
  };

  const timer = getLocationTime([longitude, latitude]);

  const [time, setTime] = useState(timer);

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  });

  const tick = () => {
    setTime(getLocationTime([longitude, latitude]));
  };

  const day = time ? time.format("dddd") : dayMapping[new Date().getUTCDay()];
  const timeString = time
    ? time.format("hh:mm:ss A")
    : new Date().toLocaleTimeString();
  const dateString = time
    ? time.format("YYYY/MM/DD")
    : new Date().toLocaleDateString();

  return (
    <React.Fragment>
      <div className="timehourcontainer">
        <span className="humanReadable">{day}</span>
        <span className="humanReadable">{dateString}</span>
        <span className="humanReadable"> {timeString}</span>
      </div>
    </React.Fragment>
  );
};

export default TimeBox;
