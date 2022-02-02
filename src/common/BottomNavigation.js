import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import BottomNav from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CoursesIcon from "@mui/icons-material/LocalLibrary";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountIcon from "@mui/icons-material/AccountCircle";

const BottomNavigation = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const pathname = location.pathname.split("/")[1];
    if (pathname) {
      setSelectedTab(pathname);
    } else {
      setSelectedTab("home");
    }
  }, [location]);
  return (
    <Paper
      sx={{ zIndex: 1000, position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNav
        showLabels
        value={selectedTab}
        onChange={(event, newValue) => {
          setSelectedTab(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/home"
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/courses"
          label="Courses"
          value="courses"
          icon={<CoursesIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/notifications"
          label="Notifications"
          value="notifications"
          icon={<NotificationsIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/account"
          label="Account"
          value="account"
          icon={<AccountIcon />}
        />
      </BottomNav>
    </Paper>
  );
};

export default BottomNavigation;
