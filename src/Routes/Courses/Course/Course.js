import { useState } from "react";

import Data from "../../../dummyData/courses";
import NotExist from "../../NotExist/NotExist";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Course = ({ id }) => {
  const course = Data.filter((item) => id === item.id);
  const [value, setValue] = useState(0);

  if (!course) {
    return <NotExist />;
  }

  return (
    <>
      <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={(event, value) => {
            setValue(value);
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
