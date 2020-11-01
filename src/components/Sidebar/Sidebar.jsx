import React, { useState } from "react";
import { setTheme } from "../../store/actions";
import { connect } from "react-redux";
import "./Sidebar.css";

const sidebarOptions = [
  { label: "Dark", value: "dark-v10", icon: "🌑" },
  { label: "Light", value: "light-v10", icon: "☀️" },
  { label: "Streets", value: "streets-v11", icon: "🛣️" },
  { label: "Satellite", value: "satellite-v9", icon: "🚀" },
];

const Sidebar = (props) => {
  const { setTheme } = props;

  const onClickHandler = (e) => {
    setTheme(e.target.value);
  };

  const [expand, setExpand] = useState(false);

  const sidebarExpand = () => {
    expand ? setExpand(false) : setExpand(true);
  };

  return (
    <React.Fragment>
      <span
        onClick={sidebarExpand}
        className={expand ? "sidebarExpandedIcon" : "sidebarExpandIcon"}
      >
        {expand ? "<" : ">"}
      </span>
      <div className={expand ? "sidebarExpand" : "sidebar"}>
        {sidebarOptions.map((sb, i) => {
          return (
            <button
              key={i}
              onClick={onClickHandler}
              value={sb.value}
              title={sb.label}
            >
              {expand ? `${sb.icon} ${sb.label}` : sb.icon}
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  mapData: state.mapData,
});

const mapDispatchToProps = {
  setTheme: (theme) => setTheme(theme),
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
