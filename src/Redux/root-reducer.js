import { combineReducers } from "redux";
import basketReducer from "./Reducer";
const rootReducer = combineReducers({
  data: basketReducer,
});
export default rootReducer;
