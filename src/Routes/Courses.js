import { Link } from "react-router-dom";
import Data from "../dummyData/courses";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Courses = () => {
  return (
    <Stack spacing={2} m={2}>
      {Data.map((item) => {
        return (
          <Card variant="outlined" key={item.id}>
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={`/courses/${item.id}`} size="small">
                Open Course
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Courses;
