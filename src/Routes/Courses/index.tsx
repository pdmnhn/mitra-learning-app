import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useAppSelector } from "../../utils/hooks";
import Loading from "../../components/Loading";
import CardActionArea from "@mui/material/CardActionArea";

const Courses = () => {
  const courses = useAppSelector((state) => state.courses.courses);
  const status = useAppSelector((state) => state.courses.status);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <Stack spacing={2} m={2}>
      {courses.map((item) => {
        return (
          <Card
            variant="outlined"
            sx={{ backgroundColor: "primary.main", color: "white" }}
            key={item.id}
          >
            <CardActionArea component={Link} to={`/courses/${item.id}`}>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Courses;
