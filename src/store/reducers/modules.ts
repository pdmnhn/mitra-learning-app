import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { getDocs } from "../../utils/firebase/database";
import { ModuleType } from "../../utils/types";

type StatusType = "loading" | "loaded";

type StateType = {
  [id: string]: {
    status: StatusType;
    modules: ModuleType[];
  };
};

const initialState: StateType = {};

const modules = createSlice({
  initialState: initialState,
  name: "modules",
  reducers: {
    addCourseModules: (
      state,
      action: PayloadAction<{ id: string; modules: ModuleType[] }>
    ) => {
      state[action.payload.id].modules = action.payload.modules;
    },
    setStatus: (
      state,
      action: PayloadAction<{ id: string; status: StatusType }>
    ) => {
      if (!state[action.payload.id]) {
        state[action.payload.id] = { status: "loading", modules: [] };
      }
      state[action.payload.id].status = action.payload.status;
    },
  },
});

const { addCourseModules, setStatus } = modules.actions;

export const initCourseModules = (courseId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setStatus({ id: courseId, status: "loading" }));
    const courseModules = await getDocs(
      `courses/${courseId}/modules`,
      "date",
      "asc"
    );
    dispatch(addCourseModules({ id: courseId, modules: courseModules }));
    dispatch(setStatus({ id: courseId, status: "loaded" }));
  };
};

export default modules.reducer;
