import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "todo",
  storage,
};

const rootReducer = combineReducers({ itemReducer });

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
