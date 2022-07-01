import React from "react";
import TimeZone from "../TimeZone/TimeZone";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>Event Manager</h1>
      <TimeZone />
    </div>
  );
};

export default Header;
