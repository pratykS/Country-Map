import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="headline">
        <h4 title="title"> Country Map </h4>
      </div>
      <button title="user">
        <span role="img" aria-label="user">
          👤
        </span>{" "}
        Hi, Pratik
      </button>
    </div>
  );
};

export default Topbar;
