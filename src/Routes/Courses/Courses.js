import { useNavigate, useParams } from "react-router-dom";
import Course from "./Course/Course";
import Data from "../../dummyData/courses";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Courses = ({ setSelectedTab }) => {
  document.title = "Courses";
  setSelectedTab(1);
  const { id } = useParams();
  const navigate = useNavigate();
  if (id) {
    return <Course id={id} />;
  } else {
    return (
      <Grid container spacing={2} sx={{ p: 2 }}>
        {Data.map((item) => {
          return (
            <Grid item xs={6} key={item.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      navigate(`/courses/${item.id}`);
                    }}
                    size="small"
                  >
                    Open Course
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
};

export default Courses;
