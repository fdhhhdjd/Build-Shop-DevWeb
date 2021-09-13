import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
//save Baskets
import { persistStore } from "redux-persist";
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
// export const store = createStore(
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
// export const persistor = persistStore(store);
// export default { store, persistor };
export default store;
