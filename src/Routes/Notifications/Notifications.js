import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Notifications = ({ setSelectedTab }) => {
  useEffect(() => {
    setSelectedTab("Notifications");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography align="center" variant="h5">
        No new notifications!
      </Typography>
    </Box>
  );
};

export default Notifications;
