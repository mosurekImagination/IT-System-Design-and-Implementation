import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { ApiService } from "src/app/core/api.service";
import { Entrustment } from "src/shared/models/Entrustment";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private router: Router,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.apiService
      .put<Entrustment>(`entrustment/update`, this.data.entrustment)
      .subscribe(response => {
        console.log("Put success");
        this.openSnackbar("Wysłano!");
      });

    this.router.navigate(["/profile"]);
    this.dialogRef.close();
  }

  private openSnackbar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 4000
    });
  }
}

export interface DialogData {
  entrustment: Entrustment;
}
