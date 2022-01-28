import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

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
const IN_PROGRESS = "in_progress";

const App = () => {
  const [selectedTab, setSelectedTab] = useState(IN_PROGRESS);
  const [changeInBottomTab, setChangeInBottomTab] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedTab !== IN_PROGRESS) {
      document.title = selectedTab;
      navigate("/" + selectedTab.toLowerCase());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeInBottomTab]);

  useEffect(() => {
    document.title = selectedTab;
  }, [selectedTab]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{ flexGrow: 1 }} component="div">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home setSelectedTab={setSelectedTab} />}
          />
          <Route
            exact
            path="/home"
            element={<Home setSelectedTab={setSelectedTab} />}
          />
          <Route path="/courses">
            <Route
              exact
              path=":id"
              element={<Course setSelectedTab={setSelectedTab} />}
            />
            <Route
              exact
              index
              element={<Courses setSelectedTab={setSelectedTab} />}
            />
          </Route>
          <Route
            exact
            path="/assignments"
            element={<Assignments setSelectedTab={setSelectedTab} />}
          />
          <Route
            exact
            path="/notifications"
            element={<Notifications setSelectedTab={setSelectedTab} />}
          />
          <Route path="/account">
            <Route
              exact
              path="signin"
              element={<Signin setSelectedTab={setSelectedTab} />}
            />
            <Route
              exact
              path="signup"
              element={<Signup setSelectedTab={setSelectedTab} />}
            />
            <Route
              exact
              index
              element={<Account setSelectedTab={setSelectedTab} />}
            />
          </Route>
          <Route
            path="*"
            element={<NotExist setSelectedTab={setSelectedTab} />}
          />
        </Routes>
      </Box>
      <ShareButton />
      <BottomNavigation
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        changeInBottomTab={changeInBottomTab}
        setChangeInBottomTab={setChangeInBottomTab}
      />
    </Box>
  );
};

export default App;
