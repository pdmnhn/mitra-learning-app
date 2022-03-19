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
  date: string;
}

export interface ModuleType {
  id: string;
  title: string;
  description: string;
  filePath: string;
  videoId: string;
  date: string;
}
