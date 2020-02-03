import { CourseTranslation } from "./CourseTranslation";

export interface Course {
  id: number;
  code: string;
  courseType: string;
  translation: Array<CourseTranslation>;
}

export enum CourseType {
  PROJEKT = "Projekt",
  LABORATORIA = "Laboratoria",
  CWICZENIA = "Ćwiczenia",
  WYKLAD = "Wykład",
  PRAKTYKI = "Praktyki"
}
