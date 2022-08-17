import { ReturnDate } from "./translateDate";

export const dateObjectToString = (dateObject: ReturnDate) => {
  return `${dateObject.year}-${dateObject.month}-${dateObject.day}T${dateObject.hour}:${dateObject.minute}:${dateObject.second}`;
};
