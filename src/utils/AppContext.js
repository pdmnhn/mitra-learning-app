import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getAllDocumentsFromACollection,
  getDocument,
} from "../firebase/database";

export const AppContext = createContext();

const auth = getAuth();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userFromFirestore = await getDocument("users", authUser.uid);
        setUser(userFromFirestore);
      } else {
        setUser(null);
      }
    });

    const getCourses = async () => {
      setCourses(
        await getAllDocumentsFromACollection("courses", "started", "desc")
      );
    };

    getCourses();
  }, []);

  const value = { user, courses };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
