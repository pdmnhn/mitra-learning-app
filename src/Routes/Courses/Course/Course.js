import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../../../dummyData/courses";
import NotExist from "../../NotExist/NotExist";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Course = ({ setSelectedTab }) => {
  useEffect(() => {
    setSelectedTab("Courses");
  });
  const { id } = useParams();
  let course;
  for (const c of Data) {
    if (c.id === id) {
      course = c;
      break;
    }
  }
  const [tab, setTab] = useState(0);

  if (!course) {
    return <NotExist setSelectedTab={setSelectedTab} />;
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
