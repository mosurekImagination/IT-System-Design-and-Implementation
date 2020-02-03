import { Course } from "./Course";

export interface CourseTranslation {
  id: number;
  course: Course;
  languageCode: LanguageCode;
  name: string;
}

export enum LanguageCode {
  EN = "en",
  PL = "pl"
}
