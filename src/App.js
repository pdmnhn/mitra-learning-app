import { Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";

import Home from "./Routes/Home/Home";
import Courses from "./Routes/Courses/Courses";
import Course from "./Routes/Courses/Course/Course";
import Assignments from "./Routes/Assignments/Assignments";
import Notifications from "./Routes/Notifications/Notifications";
import Account from "./Routes/Account/Account";
import Signin from "./Routes/Account/Signin/Signin";
import Signup from "./Routes/Account/Signup/Signup";
import NotExist from "./Routes/NotExist/NotExist";

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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/courses">
            <Route exact path=":id" element={<Course />} />
            <Route exact index element={<Courses />} />
          </Route>
          <Route exact path="/assignments" element={<Assignments />} />
          <Route exact path="/notifications" element={<Notifications />} />
          <Route path="/account">
            <Route exact path="signin" element={<Signin />} />
            <Route exact path="signup" element={<Signup />} />
            <Route exact index element={<Account />} />
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
