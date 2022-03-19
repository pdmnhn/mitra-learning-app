import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc } from "../../utils/firebase/database";
import { UserType } from "../../utils/types";

type status = "loading" | "loaded";

interface store {
  user: UserType | null;
  status: status;
}

const initialState: store = { status: "loading", user: null };

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },
    setStatus: (state, action: PayloadAction<status>) => {
      state.status = action.payload;
    },
  },
});

const { setUser, setStatus } = user.actions;

export const initUser = () => {
  return async (dispatch: Dispatch) => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (authUser) => {
      dispatch(setStatus("loading"));
      if (authUser) {
        const doc = (await getDoc("users", authUser.uid)) as UserType;
        dispatch(setUser(doc));
      } else {
        dispatch(setUser(null));
      }
      dispatch(setStatus("loaded"));
    });
  };
};

export default user.reducer;
