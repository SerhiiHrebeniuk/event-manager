import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";

import "./UpdateEventItem.scss";

const UpdateEventItem = ({ openEdit, setOpenEdit, task }) => {
  const { title, description, id } = task;
  const dispatch = useDispatch();
  const [eventTitleEdit, setEventTitleEdit] = useState(title);
  const [eventDescriptionEdit, setEventDescriptionEdit] = useState(description);

  const handleEventTitleEditChange = (e) => {
    setEventTitleEdit(e.target.value);
  };

  const handleEventDescriptionEditChange = (e) => {
    setEventDescriptionEdit(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      actions.editEvent({
        id: task.id,
        title: eventTitleEdit,
        description: eventDescriptionEdit,
        status: task.status,
      })
    );
    setOpenEdit(!openEdit);
  };

  const handleClose = () => {
    setOpenEdit(!openEdit);
  };

  return (
    <div className="UpdateContainer">
      <form>
        <input
          className="form_input"
          placeholder="Event Name"
          value={eventTitleEdit}
          onChange={(e) => handleEventTitleEditChange(e)}
        />
        <textarea
          className="form_textarea"
          placeholder="Event description"
          value={eventDescriptionEdit}
          onChange={(e) => handleEventDescriptionEditChange(e)}
        />
      </form>
      <div className="formBtn">
        <button className="btn" key={id} onClick={handleSubmit}>
          Save
        </button>
        <button className="btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UpdateEventItem;
