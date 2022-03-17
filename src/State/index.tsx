import { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, getDocs } from "../utils/firebase/database";
import { CourseType, UserType } from "../utils/types";

interface ContextType {
  user: UserType | null;
  courses: CourseType[];
}

export const AppContext = createContext<ContextType>({
  user: null,
  courses: [],
});

const auth = getAuth();

interface Props {
  children: ReactNode;
}

export const ContextProvider = (props: Props) => {
  const [user, setUser] = useState<UserType | null>({
    email: "",
    id: "",
    name: "",
    registerNumber: "",
  });
  const [courses, setCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userFromFirestore = await getDoc("users", authUser.uid);
        setUser(userFromFirestore as UserType);
        console.log(userFromFirestore);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      const coursesFromFireStore = await getDocs("courses", "date", "desc");
      setCourses(coursesFromFireStore as CourseType[]);
      console.log(coursesFromFireStore);
    };
    getCourses();
  }, []);

  const value = { user, courses };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
