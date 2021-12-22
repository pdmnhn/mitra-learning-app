import GoogleLoginButton from "react-google-button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const boxChildStyle = { m: 2 };

const Signup = () => {
  const navigate = useNavigate();
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
        onClick={() => {
          navigate("/account/signin");
        }}
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
