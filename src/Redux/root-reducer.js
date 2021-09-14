import { combineReducers } from "redux";
import basketReducer from "./Reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["data"],
};

const rootReducer = combineReducers({
  data: basketReducer,
});
export default persistReducer(persistConfig, rootReducer);
// export default rootReducer;
