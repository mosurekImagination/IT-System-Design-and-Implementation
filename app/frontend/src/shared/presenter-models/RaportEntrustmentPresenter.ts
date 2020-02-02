import { EntrustmentStatus } from "../models/Entrustment";

export interface RaportEntrustmentPresenter {
  courseName: string;
  form: string;
  hours: number;
  status: EntrustmentStatus;
  message: string;
}
