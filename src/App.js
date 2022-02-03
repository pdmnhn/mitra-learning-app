import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";

import { AppContext } from "./utils/AppContext";
import { useContext } from "react";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Courses from "./Routes/Courses";
import Course from "./Routes/Courses/Course";
import Notifications from "./Routes/Notifications";
import Account from "./Routes/Account";
import SignIn from "./Routes/Account/SignIn";
import SignUp from "./Routes/Account/SignUp";
import ForgotPassword from "./Routes/Account/ForgotPassword";
import NotExist from "./Routes/NotExist";

import BottomNavigation from "./common/BottomNavigation";
import ShareButton from "./common/ShareButton";

const App = () => {
  const { user } = useContext(AppContext);

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses">
            <Route path=":id" element={<Course />} />
            <Route index element={<Courses />} />
          </Route>
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/account">{redirect()}</Route>
          <Route path="*" element={<NotExist />} />
        </Routes>
      </Box>
      <ShareButton />
      <BottomNavigation />
    </Box>
  );
};

export default App;
