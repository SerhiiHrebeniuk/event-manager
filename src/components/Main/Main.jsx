import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Dashboard />
    </div>
  );
};

export default Main;
