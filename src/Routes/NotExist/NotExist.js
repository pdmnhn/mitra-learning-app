import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const NotExist = () => {
  document.title = "Page not found";
  return (
    <Box sx={style}>
      <Typography variant="h1" align="center">
        404
      </Typography>
      <Typography variant="h2" align="center">
        Ouch, this page doesn't exist!
      </Typography>
      <Button variant="contained" component={Link} to="/home" sx={{ m: 2 }}>
        Go to Home
      </Button>
    </Box>
  );
};

export default NotExist;
