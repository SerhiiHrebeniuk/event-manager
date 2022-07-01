import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Add from "../../assets/img/add.svg";

import Published from "../Published/Published";
import Unpublished from "../Unpublished/Unpublished";
import AddNewEvent from "../AddNewEvent/AddNewEvent";

import "./Dashboard.scss";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen((current) => !current);
  };

  console.log(open);

  return (
    <div className="dashboard">
      <div className="event">
        <div className="eventpage">
          <NavLink
            to="published"
            className={({ isActive }) =>
              isActive ? "publishedActive" : "publishedNoActive"
            }>
            Published
          </NavLink>
          <NavLink
            to="unpublished"
            className={({ isActive }) =>
              isActive ? "unpublishedActive" : "unpublishedNoActive"
            }>
            Unpublished
          </NavLink>
        </div>
        <button onClick={handleClick}>
          <img src={Add} alt="" />
          Add Event
        </button>
      </div>
      {open && <AddNewEvent open={open} setOpen={setOpen} />}
      <Routes>
        <Route path="published" element={<Published />} />
        <Route path="unpublished" element={<Unpublished />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
