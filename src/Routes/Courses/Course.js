import { useState, useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import { useParams } from "react-router-dom";
import NotExist from "../NotExist";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Course = () => {
  const { courses } = useContext(AppContext);
  const { id } = useParams();
  let course;
  for (const c of courses) {
    if (c.id === id) {
      course = c;
      break;
    }
  }
  const [tab, setTab] = useState(0);

  if (!course) {
    return <NotExist />;
  }

  return (
    <>
      <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="fullWidth"
          value={tab}
          onChange={(event, value) => {
            setTab(value);
          }}
        >
          <Tab label="Videos" />
          <Tab label="Files" />
          <Tab label="Assignments" />
        </Tabs>
      </Box>
    </>
  );
};

export default Course;
