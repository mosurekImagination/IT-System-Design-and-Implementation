import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material.module";
import { RouterModule } from "@angular/router";
import { RaportMainComponent } from "./raport-main/raport-main.component";
import { RaportNoLecturerComponent } from "./raport-no-lecturer/raport-no-lecturer.component";
import { CurrentEntrustmentsComponent } from "./current-entrustments/current-entrustments.component";

@NgModule({
  declarations: [
    RaportMainComponent,
    RaportNoLecturerComponent,
    CurrentEntrustmentsComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [RaportMainComponent]
})
export class RaportModule {}
