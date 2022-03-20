import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import NotExist from "../../../components/NotExist";
import { useAppSelector, useAppDispatch } from "../../../utils/hooks";
import { initCourseModules } from "../../../store/reducers/modules";
import { getFileURL } from "../../../utils/firebase/storage";
import Button from "@mui/material/Button";

const Module = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const courseId = params.courseId as string,
    moduleId = params.moduleId as string;
  const course = useAppSelector((state) =>
    state.courses.courses.find((c) => c.id === courseId)
  );
  const module = useAppSelector((state) =>
    state.modules[courseId]?.modules.find((m) => m.id === moduleId)
  );
  const status = useAppSelector((state) => state.modules[courseId]?.status);
  const [fileURL, setFileURL] = useState<string>("");

  useEffect(() => {
    if (!module) {
      dispatch(initCourseModules(courseId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (module) {
      getFileURL(module.filePath).then((url) => setFileURL(url));
    }
  });

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "loaded" && (!course || !module)) {
    return <NotExist />;
  }

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton component={Link} to={`/courses/${courseId}`}>
            <ArrowBackIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
            {module?.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          pt: "50px",
          mt: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${module?.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={module?.videoId}
        />
        {fileURL && (
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            size="large"
            href={fileURL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<PictureAsPdfIcon />}
          >
            {module?.title}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Module;
