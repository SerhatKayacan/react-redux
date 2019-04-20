import { ADD_REMINDER, DELETE_REMINDER } from "../constants";

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER, //type'ını ADD_REMINDER YAP  action'a type ekliyoruz(sonra reducers'a gidecek)
    text, //değiştirmeden geri gönder
    dueDate
  };
  console.log("action dan gelen ", action);
  return action;
};

export const deleteReminder = id => {
  const action = {
    type: DELETE_REMINDER,
    id
  };
  console.log("delete action dan gelen", action);
  return action;
};
