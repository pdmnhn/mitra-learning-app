import { useParams } from "react-router-dom";
import NotExist from "../NotExist/NotExist";

import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

const Account = ({ setSelectedTab }) => {
  document.title = "Account";
  setSelectedTab(4);

  const { page } = useParams();

  if (page === "signin") {
    return <Signin />;
  } else if (page === "signup" || page === "account") {
    return <Signup />;
  } else {
    return <NotExist />;
  }
};

export default Account;
