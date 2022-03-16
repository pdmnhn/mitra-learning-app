import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getDocument,
  getAllDocumentsFromACollection,
} from "../firebase/database";

export const AppContext = createContext();

const auth = getAuth();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  onAuthStateChanged(auth, async (authUser) => {
    if (authUser) {
      const userFromFirestore = await getDocument("users", authUser.uid);
      setUser(userFromFirestore);
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    const getCourses = async () => {
      setCourses(
        await getAllDocumentsFromACollection("courses", "date", "desc")
      );
    };
    getCourses();
  }, []);

  const value = { user, courses };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
