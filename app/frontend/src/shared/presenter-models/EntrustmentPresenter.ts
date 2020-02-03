import { EntrustmentStatus } from "../models/Entrustment";

export interface EntrustmentPresenter {
  entrustmentId: number;
  courseName: string;
  form: string;
  hours: number;
  status: EntrustmentStatus;
}
