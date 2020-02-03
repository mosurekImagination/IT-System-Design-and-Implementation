import { Component, OnInit } from "@angular/core";
import {
  Entrustment,
  EntrustmentStatus,
  mapEntrustmentStatus
} from "src/shared/models/Entrustment";
import { EntrustmentPresenter } from "src/shared/presenter-models/EntrustmentPresenter";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/api.service";
import { AuthService } from "src/app/core/auth.service";
import { switchMap, map, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { CourseType } from "src/shared/models/Course";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-entrustment-propositions",
  templateUrl: "./entrustment-propositions.component.html",
  styleUrls: ["./entrustment-propositions.component.scss"]
})
export class EntrustmentPropositionsComponent implements OnInit {
  displayedColumns = ["col1", "col2", "col3", "col4"];
  dataSource: EntrustmentPresenter[];

  entrustments: Entrustment[];

  constructor(
    private apiService: ApiService,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.apiService
      .get<Entrustment[]>(`raport/list/${this.auth.currentId}`)
      .pipe(
        tap(entrustments => (this.entrustments = entrustments)),
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

    const toPut = this.entrustments.find(ent => ent.id == entrustmentId);
    console.log(toPut);
    toPut.entrustmentStatus = mapEntrustmentStatus(EntrustmentStatus.ACCEPTED);

    this.apiService
      .put<Entrustment>(`entrustment/update`, toPut)
      .subscribe(response => {
        console.log("Put success");
        this.openSnackbar("Zaakceptowano!");
      });
  }

  private rejectEntrustment(entrustmentId: number) {
    console.log(`REJECT clicked, id: ${entrustmentId}`);

    const toPut = this.entrustments.find(ent => ent.id == entrustmentId);
    console.log(toPut);
    toPut.entrustmentStatus = mapEntrustmentStatus(EntrustmentStatus.REJECTED);

    this.apiService
      .put<Entrustment>(`entrustment/update`, toPut)
      .subscribe(response => {
        console.log("Put success");
        this.openSnackbar("Odrzucono!");
      });
  }

  private entrustmentInfo(entrustmentId: number) {
    console.log(`INFO clicked, id: ${entrustmentId}`);
    this.router.navigate(["/profile/entrustmentDetails", entrustmentId]);
  }

  private openSnackbar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 2000
    });
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
