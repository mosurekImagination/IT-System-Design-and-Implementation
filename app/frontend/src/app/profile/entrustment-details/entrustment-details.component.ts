import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material";
import { DialogComponent, DialogData } from "./dialog/dialog.component";
import { EntrustmentDetailsPresenter } from "src/shared/presenter-models/EntrustmentDetailsPresenter";
import { ApiService } from "src/app/core/api.service";
import {
  Entrustment,
  mapEntrustmentStatus,
  EntrustmentStatus
} from "src/shared/models/Entrustment";
import { map, tap } from "rxjs/operators";
import { EntrustmentPresenter } from "src/shared/presenter-models/EntrustmentPresenter";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-entrustment-details",
  templateUrl: "./entrustment-details.component.html",
  styleUrls: ["./entrustment-details.component.scss"]
})
export class EntrustmentDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private apiService: ApiService
  ) {}

  entrustmentId: number;
  message: string;
  entrustment: EntrustmentDetailsPresenter = null;
  entrustmentReal: Entrustment;

  optionSelected: number = 0; // 0 - not selected / 1 - reject / 2 - accept

  ngOnInit() {
    this.entrustmentId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.apiService
      .get<Entrustment>(`entrustment/id/${this.entrustmentId}`)
      .pipe(
        tap(ent => (this.entrustmentReal = ent)),
        map((ent: Entrustment) => {
          return {
            courseName: ent.courseId.translation.find(
              trl => trl.languageCode == environment.language
            ).name,
            code: ent.courseId.code,
            form: ent.courseId.courseType
          } as EntrustmentDetailsPresenter;
        })
      )
      .subscribe(result => {
        console.log(result);
        this.entrustment = result;
      });
  }

  private acceptClicked() {
    this.optionSelected = 2;
  }

  private rejectClicked() {
    this.optionSelected = 1;
  }

  private finalAcceptClicked() {
    console.log(`Final accept clicked with decistion: ${this.optionSelected}`);
    const newStatus =
      this.optionSelected == 2
        ? EntrustmentStatus.ACCEPTED
        : EntrustmentStatus.REJECTED;
    this.entrustmentReal.entrustmentStatus = mapEntrustmentStatus(newStatus);

    const dialogRef = this.dialog.open(DialogComponent, {
      width: "1000px",
      data: { entrustment: this.entrustmentReal } as DialogData
    });
  }
}
