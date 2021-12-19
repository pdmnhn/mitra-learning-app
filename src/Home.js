import { useParams } from "react-router-dom";

import Welcome from "./Welcome";
import Courses from "./Courses";
import Assignments from "./Assignments";
import Notifications from "./Notifications";
import Account from "./Account";
import NotExist from "./NotExist";
import bottomTabs from "./data/tabs";
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
