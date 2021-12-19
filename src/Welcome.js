import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ m: 2 }} align="center" variant="h5">
        Hone you technical skills and ace in your career!
      </Typography>
      <Button
        sx={{ m: 2 }}
        variant="contained"
        onClick={() => {
          navigate("/courses");
        }}
      >
        Start Learning Now!
      </Button>
    </Box>
  );
};

export default Welcome;
