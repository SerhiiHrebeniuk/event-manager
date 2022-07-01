import React, { useState, useMemo, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeEvent } from "../../store/actions";
import spacetime from "spacetime";

import UpdateEventItem from "../UpdateEventItem/UpdateEventItem";

import Edit from "../../assets/img/edit.svg";
import Save from "../../assets/img/save.svg";
import Delete from "../../assets/img/delete.svg";

import "./EventItem.scss";

const EventItem = ({ task, updateStatus }) => {
  const { id, title, description } = task;
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [tz] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [datetime, setDatetime] = useState(spacetime.now());

  const ref = useRef(null);

  useMemo(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.goto(tzValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tz]);

  useEffect(() => {
    document.addEventListener("click", handleCloseOutside, true);
    return () => {
      document.removeEventListener("click", handleCloseOutside, true);
    };
  });

  const handleOptions = () => {
    setOpen(!open);
  };

  const handleClick = (e) => {
    setOpenEdit((current) => !current);
    setOpen(!open);
  };

  const handleCloseOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(!open);
    }
  };

  const card = document.querySelector('eventCard');

  console.log(card)

  return (
    <>
      <div className="eventCard">
        <div className="eventCard__info">
          <div className="eventCard__info__title">{title}</div>
          <div className="eventCard__info__description">{description}</div>
        </div>
        <div className="eventCard__options">
          <div className="editMenu" onClick={handleOptions}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="eventCard__date">
            <pre>{datetime.unixFmt("h:mm a - dd MMM YYYY")}</pre>
          </div>
        </div>
        {open ? (
          <div
            className="eventCard__btn"
            onClick={handleCloseOutside}
            ref={ref}>
            <button className="btn edit" onClick={handleClick}>
              <img className="btn btnImg" src={Edit} alt="" />
              Edit
            </button>
            {(task && task.status === "Unpublished") ? (
              <button className="btn published" key={id} onClick={() => {updateStatus(id, "Published")}}>
              <img className="btn btnImg" src={Save} alt="" />
              Published
            </button>
            ) : (
              <button className="btn published" key={id} onClick={() => {updateStatus(id, "Unpublished")}}>
              <img className="btn btnImg" src={Save} alt="" />
              UnPublished
            </button>
            )}
            <button
              className="btn delete"
              onClick={() => dispatch(removeEvent(id))}>
              <img className="btn btnImg" src={Delete} alt="" />
              Delete
            </button>
          </div>
        ) : (
          openEdit && (
            <UpdateEventItem
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              task={task}
            />
          )
        )}
      </div>
    </>
  );
};

export default EventItem;
