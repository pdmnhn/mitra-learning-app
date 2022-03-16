import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllDocumentsFromACollection } from "../../firebase/database";
import NotExist from "../NotExist";

const Course = () => {
  const { id } = useParams();
  const [state, setState] = useState();

  useEffect(() => {
    console.log(id);
    const getData = async () => {
      setState(
        await getAllDocumentsFromACollection(
          `courses/${id}/modules`,
          "date",
          "desc"
        )
      );
    };
    getData();
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export default Course;
