import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs } from "../../utils/firebase/database";
import { ModuleType } from "../../utils/types";

const Course = () => {
  const { id } = useParams();
  const [modules, setModules] = useState<ModuleType[]>([]);

  useEffect(() => {
    const getData = async () => {
      setModules(
        (await getDocs(`courses/${id}/modules`, "date", "desc")) as ModuleType[]
      );
    };
    getData();
  }, [id]);

  return <div>{JSON.stringify(modules)}</div>;
};

export default Course;
