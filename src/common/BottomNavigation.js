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
      sx={{ zIndex: 1100, position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNav
        showLabels
        value={selectedTab}
        onChange={(event, newValue) => {
          setChangeInBottomTab(changeInBottomTab + 1);
          setSelectedTab(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Courses" icon={<CoursesIcon />} />
        <BottomNavigationAction label="Assignments" icon={<AssignmentIcon />} />
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon />}
        />
        <BottomNavigationAction label="Account" icon={<AccountIcon />} />
      </BottomNav>
    </Paper>
  );
};

export default BottomNavigation;
