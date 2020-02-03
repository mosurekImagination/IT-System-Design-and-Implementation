export interface Course {
  id: number;
  code: string;
  courseType: string;
}

export enum CourseType {
  PROJEKT = "Projekt",
  LABORATORIA = "Laboriatoria",
  CWICZENIA = "Ćwiczenia",
  WYKLAD = "Wykład",
  PRAKTYKI = "Praktyki"
}
