import GoogleLoginButton from "react-google-button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const boxChildStyle = { m: 2 };

const Signin = () => {
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
      <GoogleLoginButton style={{ margin: 2 }} />
      <Button
        sx={boxChildStyle}
        onClick={(event) => {
          navigate("/account/signup");
        }}
        color="secondary"
        variant="contained"
      >
        Don't have an account yet?
      </Button>
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
      <Link component={RouterLink} to="/account/forgot-password">
        Forgot password?
      </Link>
      <Button sx={boxChildStyle} variant="contained">
        Sign in
      </Button>
    </Box>
  );
};

export default Signin;
