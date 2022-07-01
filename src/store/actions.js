import * as actions from "./actionTypes";

export const addEvent = (task, id) => ({
  type: actions.EVENT_ADD,
  payload: task,
  id
});

export const editEvent = (title, description) => ({
  type: actions.EDIT_EVENT,
  payload: title,
  description
});

export const removeEvent = (id) => ({
  type: actions.EVENT_REMOVE,
  payload: id
});