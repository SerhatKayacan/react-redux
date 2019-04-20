import { ADD_REMINDER, DELETE_REMINDER } from "../constants";

const reminder = action => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text, //action.text : action.text
    dueDate
  };
};

const removebyId = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log("Yeni Reducer Reminders", reminders);
  return reminders;
};

const reminders = (stat = [], action) => {
  //bu bizim store'umuz
  //state=[] (store ilk olarak boş bi dizi)
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [
        ...stat,
        reminder(action)
      ]; /*stat(store) dizisinin elemanlarını(objeler) al, 
      sonuna yeni gelen elemanı( {id:math.random, text:text, duedate:duedate} ) ekle   */
      console.log("yeni görev eklendi", reminders);
      return reminders;
    /*artık reminders'ı(yani storedaki data) istediğimiz bi
        componentte props ile kullanabiliriz */
    case DELETE_REMINDER:
      reminders = removebyId(stat, action.id);
      return reminders;

    default:
      return stat;
  }
};

export default reminders;
/*
Give the Reducer an Initial State
Remember that the reducer’s job is to take the current state and an action and return the new state.

It has another job, too: It should return the initial state the first time it’s called. 
function reducer(state = initialState, action) {......}
Another rule about reducers is that they must be pure functions. 
This means that they can’t modify their arguments, and they can’t have side effects.
*/
