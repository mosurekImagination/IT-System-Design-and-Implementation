export interface Course {
  id: number;
  code: string;
  courseType: string;
}

export enum CourseType {
  PROJEKT,
  LABORATORIA,
  CWICZENIA,
  WYKLAD,
  PRAKTYKI
}
