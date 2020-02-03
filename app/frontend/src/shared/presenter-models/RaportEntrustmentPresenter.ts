import { EntrustmentStatus } from "../models/Entrustment";

export interface RaportEntrustmentPresenter {
  courseId: number;
  courseName: string;
  form: string;
  hours: number;
  status: EntrustmentStatus;
  message: string;
}
