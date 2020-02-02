import { EntrustmentStatus } from "../models/Entrustment";

export interface EntrustmentPresenter {
  entrustmentId: number;
  courseName: string;
  form: string;
  groups: number;
  hours: number;
  status: EntrustmentStatus;
}
