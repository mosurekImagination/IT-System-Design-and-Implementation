import { Component, OnInit } from "@angular/core";
import { RaportEntrustmentPresenter } from "src/shared/presenter-models/RaportEntrustmentPresenter";
import { EntrustmentStatus, Entrustment } from "src/shared/models/Entrustment";
import { ApiService } from "src/app/core/api.service";
import { map, switchMap } from "rxjs/operators";
import { CourseType } from "src/shared/models/Course";
import { CourseTranslation } from "src/shared/models/CourseTranslation";
import { environment } from "src/environments/environment";

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
      .get<Entrustment[]>(`raport/all`)
      .pipe(
        map((entrustments: Entrustment[]) => {
          return entrustments.map(
            (ent: Entrustment) =>
              ({
                courseName: ent.courseId.translation.find(
                  trl => trl.languageCode == environment.language
                ).name,
                form: CourseType[ent.courseId.courseType],
                hours: ent.hours,
                message: ent.answer,
                status: EntrustmentStatus[ent.entrustmentStatus]
              } as RaportEntrustmentPresenter)
          );
        })
      )
      .subscribe(result => {
        console.log(result);
        this.dataSource = result;
      });
  }

  displayedColumns = ["col1", "col2", "col3", "col4", "col5"];
  dataSource: RaportEntrustmentPresenter[];
}
