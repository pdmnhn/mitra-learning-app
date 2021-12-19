import GoogleLoginButton from "react-google-button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <Grid
      rowSpacing={4}
      sx={{ width: "100%", height: "100%" }}
      direction="column"
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <GoogleLoginButton />
      </Grid>
      <Grid item>
        <Button
          onClick={(event) => {
            navigate("/account/signup");
          }}
          color="secondary"
          variant="contained"
        >
          Don't have an account yet?
        </Button>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          required
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          required
        />
      </Grid>
      <Grid item>
        <Link component={RouterLink} to="/account/forgot-password">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Button variant="contained">Sign in</Button>
      </Grid>
    </Grid>
  );
};

export default Signin;
