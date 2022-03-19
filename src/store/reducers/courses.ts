import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getDocs } from "../../utils/firebase/database";
import { CourseType } from "../../utils/types";

type status = "loading" | "loaded";

interface store {
  status: status;
  courses: CourseType[];
}
const initialState: store = {
  status: "loading",
  courses: [],
};

const courses = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {
    init: (state, action: PayloadAction<CourseType[]>) => {
      state.courses = action.payload;
    },
    setStatus: (state, action: PayloadAction<status>) => {
      state.status = action.payload;
    },
  },
});

const { init, setStatus } = courses.actions;

export const initCourses = () => {
  return async (dispatch: Dispatch) => {
    const docs: CourseType[] = await getDocs("courses", "date", "desc");
    dispatch(init(docs));
    dispatch(setStatus("loaded"));
  };
};

export default courses.reducer;
