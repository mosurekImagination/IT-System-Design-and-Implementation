import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/auth.service";
import { Router } from "@angular/router";
import { NoLecturerPresenter } from "src/shared/presenter-models/NoLecturerPresenter";
import { ApiService } from "src/app/core/api.service";
import { Entrustment, EntrustmentStatus } from "src/shared/models/Entrustment";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { CourseType } from "src/shared/models/Course";
import { RaportEntrustmentPresenter } from "src/shared/presenter-models/RaportEntrustmentPresenter";

@Component({
  selector: "app-raport-no-lecturer",
  templateUrl: "./raport-no-lecturer.component.html",
  styleUrls: ["./raport-no-lecturer.component.scss"]
})
export class RaportNoLecturerComponent implements OnInit {
  displayedColumns = ["col1", "col2", "col3", "col4"];
  dataSource: NoLecturerPresenter[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .get<Entrustment[]>(`raport/free`)
      .pipe(
        map((entrustments: Entrustment[]) => {
          return entrustments.map(
            (ent: Entrustment) =>
              ({
                courseName: ent.courseId.translation.find(
                  trl => trl.languageCode == environment.language
                ).name,
                code: ent.courseId.code,
                form: CourseType[ent.courseId.courseType],
                hours: ent.hours
              } as NoLecturerPresenter)
          );
        })
      )
      .subscribe(result => {
        console.log(result);
        this.dataSource = result;
      });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
