import { Component, OnInit } from "@angular/core";
import { RaportEntrustmentPresenter } from "src/shared/presenter-models/RaportEntrustmentPresenter";
import { EntrustmentStatus } from "src/shared/models/Entrustment";

@Component({
  selector: "app-current-entrustments",
  templateUrl: "./current-entrustments.component.html",
  styleUrls: ["./current-entrustments.component.scss"]
})
export class CurrentEntrustmentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns = ["col1", "col2", "col3", "col4", "col5"];
  dataSource = tempData;
}

const tempData: RaportEntrustmentPresenter[] = [
  {
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 4,
    status: EntrustmentStatus.ACCEPTED,
    message: "Juz sie nie moge doczekac prowadzenia tych zajec"
  } as RaportEntrustmentPresenter,
  {
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 4,
    status: EntrustmentStatus.ACCEPTED,
    message: "Juz sie nie moge doczekac prowadzenia tych zajec"
  } as RaportEntrustmentPresenter,
  {
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 4,
    status: EntrustmentStatus.ACCEPTED,
    message: "Juz sie nie moge doczekac prowadzenia tych zajec"
  } as RaportEntrustmentPresenter,
  {
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 4,
    status: EntrustmentStatus.ACCEPTED,
    message:
      "Juz sie nie moge doczekac prowadzenia tych zajec  moge doczekac prowadzenia tych zajec  moge doczekac prowadzenia tych zajec"
  } as RaportEntrustmentPresenter
];
