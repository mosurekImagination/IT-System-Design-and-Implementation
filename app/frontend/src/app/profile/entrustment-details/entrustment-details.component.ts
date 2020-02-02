import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "./dialog/dialog.component";

@Component({
  selector: "app-entrustment-details",
  templateUrl: "./entrustment-details.component.html",
  styleUrls: ["./entrustment-details.component.scss"]
})
export class EntrustmentDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  entrustmentId: number;
  message: string;
  entrustment: EntrustmentDetailsPresenter = null;

  optionSelected: number = 0; // 0 - not selected / 1 - reject / 2 - accept

  ngOnInit() {
    this.entrustmentId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.entrustment = tempData;
  }

  private acceptClicked() {
    this.optionSelected = 2;
  }

  private rejectClicked() {
    this.optionSelected = 1;
  }

  private finalAcceptClicked() {
    console.log(`Final accept clicked with decistion: ${this.optionSelected}`);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "1000px"
    });
  }
}

const tempData: EntrustmentDetailsPresenter = {
  courseName: "Podstawy baz danych",
  code: "ABC-123",
  form: "Ćwiczenia",
  year: "II",
  semester: 4
} as EntrustmentDetailsPresenter;

export interface EntrustmentDetailsPresenter {
  courseName: string;
  code: string;
  form: string;
  year: string;
  semester: number;
}
