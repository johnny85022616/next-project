import actionType from "../actionType.js";
import { apiUsersGet } from "../../axios/users.js";

export const createUserActionCreator = (data) => {
  return {
    type: actionType.ADD_USER,
    payload: data,
  };
};

export const deleteUserActionCreator = (dataNumber) => {
  return {
    type: actionType.DELETE_USER,
    payload: dataNumber,
  };
};

export const updateUserActionCreator = (data , index) => {
  return {
    type: actionType.UPDATE_USER,
    payload: {data , index},
  };
};
