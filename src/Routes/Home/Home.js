import { useParams } from "react-router-dom";

import Welcome from "./Welcome";
import Courses from "../Courses/Courses";
import Assignments from "../Assignments/Assignments";
import Notifications from "../Notifications/Notifications";
import Account from "../Account/Account";
import NotExist from "../NotExist/NotExist";
import bottomTabs from "../../common/tabs";
const components = [Welcome, Courses, Assignments, Notifications, Account];

const Home = ({ setSelectedTab }) => {
  let { page } = useParams();
  if (page === undefined) {
    page = "home";
  }
  let ComponenetToRender;
  if (page in bottomTabs.nameToNumber) {
    const tab = bottomTabs.nameToNumber[page];
    document.title = bottomTabs.numberToName[tab];
    setSelectedTab(tab);
    ComponenetToRender = components[tab];
  } else {
    ComponenetToRender = NotExist;
    document.title = "404";
  }
  return <ComponenetToRender setSelectedTab={setSelectedTab} />;
};

export default Home;
