import actionType from "../actionType.js";
import { showDate, dateTimePickerDate } from "../../common/date.js";
import { produce } from "immer";

// --------------------Immer.js ---------------------

const initState = {
  user: [
    { name: "John", id: "A111111111", gender: "male" },
    { name: "Mary", id: "A122222222", gender: "female" },
    { name: "Howard", id: "A133333333", gender: "male" },
    { name: "James", id: "A144444444", gender: "male" },
    { name: "Mark", id: "A155555555", gender: "male" },
    { name: "Bryant", id: "A166666666", gender: "male" },
    { name: "Willams", id: "A1777777777", gender: "male" },
    { name: "Jack", id: "A1888888888", gender: "male" },
  ],
};

export const userReducer = (state = initState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionType.ADD_USER:
        draft.user.push(action.payload);
        break;
      case actionType.DELETE_USER:
        draft.user.splice(action.payload, 1);
        break;
      case actionType.UPDATE_USER:
        console.log(action.payload);
        draft.user[action.payload.index] = action.payload.data
        break;
      default:
    }
  });
};
