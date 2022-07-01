import React, { useState } from "react";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";
import "./AddNewEvent.scss";

const AddNewEvent = ({ open, setOpen }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [status] = useState('Unpublished');
  const dispatch = useDispatch();

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const handleEventDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleEventSubmit = () => {
    dispatch(
      actions.addEvent({
        id: uuid(),
        title: eventTitle,
        description: eventDescription,
        status: status,
      })
    );
    setEventTitle("");
    setEventDescription("");
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div className="addContainer">
      <form>
        <input
          className="form_input"
          placeholder="Event Name"
          value={eventTitle}
          onChange={(e) => handleEventTitleChange(e)}
        />
        <textarea
          className="form_textarea"
          placeholder="Event description"
          value={eventDescription}
          onChange={(e) => handleEventDescriptionChange(e)}
        />
      </form>
      <div className="formBtn">
        <button className="btn" onClick={handleEventSubmit}>
          Save
        </button>
        <button className="btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddNewEvent;
