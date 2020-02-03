import { Component, OnInit } from "@angular/core";
import { Entrustment, EntrustmentStatus } from "src/shared/models/Entrustment";
import { EntrustmentPresenter } from "src/shared/presenter-models/EntrustmentPresenter";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/api.service";
import { AuthService } from "src/app/core/auth.service";
import { switchMap, map } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { CourseType } from "src/shared/models/Course";

@Component({
  selector: "app-entrustment-propositions",
  templateUrl: "./entrustment-propositions.component.html",
  styleUrls: ["./entrustment-propositions.component.scss"]
})
export class EntrustmentPropositionsComponent implements OnInit {
  displayedColumns = ["col1", "col2", "col3", "col4"];
  dataSource: EntrustmentPresenter[];
  constructor(
    private apiService: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiService
      .get<Entrustment[]>(`raport/list/${this.auth.currentId}`)
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
                entrustmentId: ent.id,
                status: ent.entrustmentStatus
              } as EntrustmentPresenter)
          );
        })
      )
      .subscribe(result => {
        console.log(result);
        this.dataSource = result;
      });
  }

  private acceptEntrustment(entrustmentId: number) {
    console.log(`ACCEPT clicked, id: ${entrustmentId}`);
    //this.sendAcceptEntrustment()
  }

  private rejectEntrustment(entrustmentId: number) {
    console.log(`REJECT clicked, id: ${entrustmentId}`);
    //this.sendRejectEntrustment()
  }

  private entrustmentInfo(entrustmentId: number) {
    console.log(`INFO clicked, id: ${entrustmentId}`);
    this.router.navigate(["/profile/entrustmentDetails", entrustmentId]);
  }

  private sendAcceptEntrustment(entrustment: Entrustment) {
    // API Update call
  }

  private sendRejectEntrustment(entrustment: Entrustment) {
    // API Update call
  }
}

const tempData: EntrustmentPresenter[] = [
  {
    entrustmentId: 1,
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    groups: 1,
    hours: 30,
    status: EntrustmentStatus.NEW
  } as EntrustmentPresenter,
  {
    entrustmentId: 2,
    courseName: "Podstawy baz danych",
    form: "Wykład",
    groups: 1,
    hours: 15,
    status: EntrustmentStatus.PROPOSED
  } as EntrustmentPresenter
];
