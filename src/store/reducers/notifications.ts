import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { getDocs } from "../../utils/firebase/database";
import { NotificationType } from "../../utils/types";

type status = "loading" | "loaded";

interface StoreType {
  notifications: NotificationType[];
  status: status;
}

const initialState: StoreType = {
  notifications: [],
  status: "loading",
};

const notifications = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    setNotifications: (state, action: PayloadAction<NotificationType[]>) => {
      state.notifications = action.payload;
    },
    setStatus: (state, action: PayloadAction<status>) => {
      state.status = action.payload;
    },
  },
});

const { setNotifications, setStatus } = notifications.actions;

export const initNotifications = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setStatus("loading"));
    const docs = (await getDocs(
      "notifications",
      "date",
      "desc"
    )) as NotificationType[];
    dispatch(setNotifications(docs));
    dispatch(setStatus("loaded"));
  };
};

export default notifications.reducer;
