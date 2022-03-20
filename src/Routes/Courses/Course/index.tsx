import { Link, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import NotExist from "../../../components/NotExist";
import { useEffect } from "react";
import { initCourseModules } from "../../../store/reducers/modules";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

const Course = () => {
  const id = useParams().courseId as string;
  const dispatch = useAppDispatch();
  const course = useAppSelector((state) =>
    state.courses.courses.find((c) => c.id === id)
  );
  const modules = useAppSelector((state) => state.modules[id]?.modules);
  const status = useAppSelector((state) => state.modules[id]?.status);

  useEffect(() => {
    if (!modules) {
      dispatch(initCourseModules(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === undefined || status === "loading") {
    return <Loading />;
  }

  if (!course || !modules) {
    return <NotExist />;
  }

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
            {course.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack spacing={2} m={2} sx={{ pt: "50px", my: 4 }}>
        {modules.map((m, index) => (
          <Card
            variant="outlined"
            key={m.id}
            sx={{ backgroundColor: "secondary.main", color: "white" }}
          >
            <CardActionArea component={Link} to={`/courses/${id}/${m.id}`}>
              <CardContent>
                <Typography variant="h5">{`${index + 1}. ${
                  m.title
                }`}</Typography>
                <Typography variant="body2">{m.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Course;
