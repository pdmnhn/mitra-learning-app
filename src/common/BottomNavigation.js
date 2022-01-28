import Paper from "@mui/material/Paper";
import BottomNav from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CoursesIcon from "@mui/icons-material/LocalLibrary";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountIcon from "@mui/icons-material/AccountCircle";

const BottomNavigation = ({
  selectedTab,
  setSelectedTab,
  changeInBottomTab,
  setChangeInBottomTab,
}) => {
  return (
    <Paper
      sx={{ zIndex: 1000, position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNav
        showLabels
        value={selectedTab}
        onChange={(event, newValue) => {
          setChangeInBottomTab(!changeInBottomTab);
          setSelectedTab(newValue);
        }}
      >
        <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Courses"
          value="Courses"
          icon={<CoursesIcon />}
        />
        <BottomNavigationAction
          label="Assignments"
          value="Assignments"
          icon={<AssignmentIcon />}
        />
        <BottomNavigationAction
          label="Notifications"
          value="Notifications"
          icon={<NotificationsIcon />}
        />
        <BottomNavigationAction
          label="Account"
          value="Account"
          icon={<AccountIcon />}
        />
      </BottomNav>
    </Paper>
  );
};

export default BottomNavigation;
