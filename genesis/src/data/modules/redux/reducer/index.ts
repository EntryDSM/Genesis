import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';

import applicantReducer from "./applicant";
import authReducer from "./auth";
import signinReducer from "./signin";
import statisticsReducer from "./statistics";
import scheduleReducer from "./schedule";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  applicant: applicantReducer,
  auth: authReducer,
  signin: signinReducer,
  statistics: statisticsReducer,
  schedule: scheduleReducer,
  modal: modalReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
