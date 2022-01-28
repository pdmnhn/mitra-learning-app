import { useEffect } from "react";

import Signup from "./Signup/Signup";

const Account = ({ setSelectedTab }) => {
  document.title = "Account";
  useEffect(() => {
    setSelectedTab("Account");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Signup setSelectedTab={setSelectedTab} />;
};

export default Account;
