import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import Home from "./Routes/Home";
import Courses from "./Routes/Courses";
import Course from "./Routes/Courses/Course";
import Module from "./Routes/Courses/Course/Module";
import Notifications from "./Routes/Notifications";
import Account from "./Routes/Account";
import SignIn from "./Routes/Account/SignIn";
import SignUp from "./Routes/Account/SignUp";
import ForgotPassword from "./Routes/Account/ForgotPassword";
import NotExist from "./components/NotExist";
import BottomNavigation from "./components/BottomNavigation";
import ShareButton from "./components/ShareButton";
import { useAppSelector, useAppDispatch } from "./hooks";
import { initUser } from "./store/reducers/user";
import { initCourses } from "./store/reducers/courses";
import Loading from "./components/Loading";

const App = () => {
  const user = useAppSelector((state) => state.user.user);
  const loading = useAppSelector(
    (state) =>
      state.user.status === "loading" || state.courses.status === "loading"
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initUser());
    dispatch(initCourses());
  }, [dispatch]);

  const redirect = () => {
    if (user) {
      return (
        <>
          <Route path="signin" element={<Navigate replace to="/account" />} />
          <Route path="signup" element={<Navigate replace to="/account" />} />
          <Route
            path="forgot-password"
            element={<Navigate replace to="/account" />}
          />
          <Route index element={<Account />} />
        </>
      );
    } else {
      return (
        <>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route index element={<Navigate replace to="/account/signup" />} />
        </>
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          marginBottom: "56px", // padding bottom 56 px to unhide the contents hidden by the bottom nav bar whose height is 56 px
        }}
        component="div"
      >
        {loading && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Loading />} />
          </Routes>
        )}
        {!loading && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses">
              <Route
                path=":courseId/:moduleId"
                element={user ? <Module /> : <Navigate replace to="/account" />}
              />
              <Route
                path=":courseId"
                element={user ? <Course /> : <Navigate replace to="/account" />}
              />
              <Route index element={<Courses />} />
            </Route>
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/account">{redirect()}</Route>
            <Route path="*" element={<NotExist />} />
          </Routes>
        )}
      </Box>
      <ShareButton />
      <BottomNavigation />
    </Box>
  );
};

export default App;
