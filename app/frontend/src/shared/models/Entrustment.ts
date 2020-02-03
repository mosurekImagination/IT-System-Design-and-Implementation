import { Lecturer } from "./Lecturer";
import { Course } from "./Course";

export interface Entrustment {
  id: number;
  answer: string;
  entrustmentStatus: string;
  hours: number;
  lecturers: Array<Lecturer>;
  courseId: Course;
}

export enum EntrustmentStatus {
  NEW = "Nowe",
  REJECTED = "Odrzucone",
  ACCEPTED = "Zaakceptowane",
  PROPOSED = "Zaproponowane"
}
