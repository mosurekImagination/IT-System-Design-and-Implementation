import { Component, OnInit } from "@angular/core";
import { RaportEntrustmentPresenter } from "src/shared/presenter-models/RaportEntrustmentPresenter";
import { EntrustmentStatus, Entrustment } from "src/shared/models/Entrustment";
import { ApiService } from "src/app/core/api.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-current-entrustments",
  templateUrl: "./current-entrustments.component.html",
  styleUrls: ["./current-entrustments.component.scss"]
})
export class CurrentEntrustmentsComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // TODO : WHY THIS DOESNT WORK ?!
    this.apiService
      .get<Entrustment[]>(`raport/free`)
      .pipe(
        map(
          (entrustment: Entrustment) =>
            ({
              courseName: entrustment.courseId.code,
              form: entrustment.courseId.courseType,
              hours: entrustment.hours,
              message: entrustment.answer,
              status: entrustment.entrustmentStatus
            } as RaportEntrustmentPresenter)
        )
      )
      .subscribe(result => (this.dataSource = tempData));
  }

  displayedColumns = ["col1", "col2", "col3", "col4", "col5"];
  dataSource: RaportEntrustmentPresenter[] = tempData;
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
