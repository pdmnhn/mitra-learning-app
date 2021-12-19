import GoogleLoginButton from "react-google-button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
          onClick={() => {
            navigate("/account/signin");
          }}
          color="secondary"
          variant="contained"
        >
          Already have an account?
        </Button>
      </Grid>
      <Grid item>
        <TextField label="Name" variant="outlined" type="text" required />
      </Grid>
      <Grid item>
        <TextField label="Email" variant="outlined" type="email" required />
      </Grid>
      <Grid item>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
        />
      </Grid>

      <Grid item>
        <Button variant="contained">Sign up</Button>
      </Grid>
    </Grid>
  );
};

export default Signup;
