import { Timestamp } from "firebase/firestore";

export interface UserType {
  id: string;
  name: string;
  registerNumber: string;
  email: string;
}

export interface CourseType {
  id: string;
  title: string;
  description: string;
  date: Timestamp;
}

export interface ModuleType {
  id: string;
  title: string;
  description: string;
  filePath: string;
  videoId: string;
  date: Timestamp;
}
