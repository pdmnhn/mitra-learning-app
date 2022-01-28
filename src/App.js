import { Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";

import Home from "./Routes/Home";
import Courses from "./Routes/Courses";
import Course from "./Routes/Courses/Course";
import Assignments from "./Routes/Assignments";
import Notifications from "./Routes/Notifications";
import Account from "./Routes/Account";
import SignIn from "./Routes/Account/SignIn";
import SignUp from "./Routes/Account/SignUp";
import NotExist from "./Routes/NotExist";

import BottomNavigation from "./common/BottomNavigation";
import ShareButton from "./common/ShareButton";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{ flexGrow: 1, overflowY: "auto" }} component="div">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses">
            <Route path=":id" element={<Course />} />
            <Route index element={<Courses />} />
          </Route>
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/account">
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route index element={<Account />} />
          </Route>
          <Route path="*" element={<NotExist />} />
        </Routes>
      </Box>
      <ShareButton />
      <BottomNavigation />
    </Box>
  );
};

export default App;
