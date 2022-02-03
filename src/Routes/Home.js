import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BackgroundImage from "../assets/background_image.png";
import Logo from "../assets/logo.png";
import Fab from "@mui/material/Fab";
import Info from "@mui/icons-material/InfoOutlined";

const Home = () => {
  return (
    <Box
      sx={{
        align: "center",
        backgroundImage: `linear-gradient(rgba(127,0,0,0.75),rgba(0,0,127,0.75)), url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#FEFEFE" }}>
          <Box
            component="img"
            sx={{
              height: 64,
              mx: 2,
            }}
            alt="MITRA Logo"
            src={Logo}
          />
          <Typography
            variant="h6"
            component="h1"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            MITRA Learning App
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography sx={{ m: 2, color: "white" }} align="center" variant="h5">
        Hone you technical skills and ace in your career!
      </Typography>
      <Button
        color="primary"
        sx={{ m: 2 }}
        variant="contained"
        component={Link}
        to="/courses"
      >
        Start Learning Now
      </Button>
      <Fab
        color="primary"
        size="medium"
        aria-label="about"
        component={Link}
        to="/about"
        // bottom nav height is 56 so above 25 units the share fab will in the ui
        sx={{ position: "fixed", bottom: 81, left: 25, zIndex: 10000 }}
      >
        <Info />
      </Fab>
    </Box>
  );
};

export default Home;
