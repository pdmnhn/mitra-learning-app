import { useContext } from "react";
import { AppContext } from "../../StateManagement/AppContext";
import { useParams } from "react-router-dom";
import NotExist from "../NotExist";

const Course = () => {
  const { courseModules, loading } = useContext(AppContext);
  const { id } = useParams();
  if (loading) {
    return <div>loading...</div>;
  } else if (courseModules[id]) {
    return <div>{JSON.stringify(courseModules[id])}</div>;
  } else {
    return <NotExist />;
  }
};

export default Course;
