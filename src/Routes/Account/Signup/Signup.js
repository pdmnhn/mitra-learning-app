import GoogleLoginButton from "react-google-button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const boxChildStyle = { m: 2 };

const Signup = ({ setSelectedTab }) => {
  useEffect(() => {
    setSelectedTab("Account");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GoogleLoginButton />
      <Button
        sx={boxChildStyle}
        component={Link}
        to="/account/signin"
        color="secondary"
        variant="contained"
      >
        Already have an account?
      </Button>
      <TextField
        sx={boxChildStyle}
        label="Name"
        variant="outlined"
        type="text"
        required
      />
      <TextField
        sx={boxChildStyle}
        label="Email"
        variant="outlined"
        type="email"
        required
      />
      <TextField
        sx={boxChildStyle}
        label="Password"
        variant="outlined"
        type="password"
        required
      />

      <Button variant="contained">Sign up</Button>
    </Box>
  );
};

export default Signup;
