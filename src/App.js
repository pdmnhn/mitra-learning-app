import { useState } from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarIcon from "@mui/icons-material/Today";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountIcon from "@mui/icons-material/AccountCircle";

function App() {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MIT Robotics Association
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Assignment"
            icon={<AssignmentIcon />}
          />
          <BottomNavigationAction label="Calendar" icon={<CalendarIcon />} />
          <BottomNavigationAction
            label="Notifications"
            icon={<NotificationsIcon />}
          />
          <BottomNavigationAction label="Account" icon={<AccountIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default App;
