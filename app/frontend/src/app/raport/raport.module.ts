import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material.module";
import { RouterModule } from "@angular/router";
import { RaportMainComponent } from "./raport-main/raport-main.component";

@NgModule({
  declarations: [RaportMainComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [RaportMainComponent]
})
export class RaportModule {}
