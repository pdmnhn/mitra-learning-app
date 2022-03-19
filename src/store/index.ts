import userReducer from "./reducers/user";
import coursesReducer from "./reducers/courses";
import modulesReducer from "./reducers/modules";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
    modules: modulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
