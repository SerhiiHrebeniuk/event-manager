import * as actions from "./actionTypes";

const initState = [];

export default function reducer(state = initState, action) {
  let newState;
  switch (action.type) {
    case actions.EVENT_ADD:
      newState = [...state];
      newState.push(action.payload);
      return newState;

    case actions.EDIT_EVENT:
      newState = [...state];
      let index = -1;
      for (let i = 0; i < newState.length; i++) {
        index++;
        if (newState[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newState[index] = action.payload;
        return newState;
      }
      break;

    case actions.EVENT_REMOVE:
      newState = [...state];
      newState = newState.filter((todo) => todo.id !== action.payload);
      return newState;

    default:
      return state;
  }
}