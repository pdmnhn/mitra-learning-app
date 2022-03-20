import userReducer from "./reducers/user";
import coursesReducer from "./reducers/courses";
import modulesReducer from "./reducers/modules";
import notificationsReducer from "./reducers/notifications";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
    modules: modulesReducer,
    notifications: notificationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
