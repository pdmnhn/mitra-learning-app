import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";

import Home from "./Home";
import Courses from "./Courses";
import Account from "./Account";

import BottomNavigation from "./BottomNavigation";
import bottomTabs from "./data/tabs";

const IN_PROGRESS = "in_progress";

const App = () => {
  const [selectedTab, setSelectedTab] = useState(IN_PROGRESS);
  const [changeInBottomTab, setChangeInBottomTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedTab !== IN_PROGRESS) {
      document.title = bottomTabs.numberToName[selectedTab];
      navigate(`/${bottomTabs.numberToName[selectedTab].toLowerCase()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeInBottomTab]);

  return (
    <Box
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{ flexGrow: 1 }} component="div">
        <Routes>
          <Route path="/" element={<Home setSelectedTab={setSelectedTab} />} />
          <Route
            path="/:page"
            element={<Home setSelectedTab={setSelectedTab} />}
          />
          <Route
            path="/courses/:id"
            element={<Courses setSelectedTab={setSelectedTab} />}
          />
          <Route
            path="/account/:page"
            element={<Account setSelectedTab={setSelectedTab} />}
          />
        </Routes>
      </Box>
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
