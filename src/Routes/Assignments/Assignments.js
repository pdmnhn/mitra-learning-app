import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Assignments = ({ setSelectedTab }) => {
  useEffect(() => {
    setSelectedTab("Assignments");
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
        Nothing due!
      </Typography>
    </Box>
  );
};

export default Assignments;
