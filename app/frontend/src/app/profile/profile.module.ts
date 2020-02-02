import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainProfileComponent } from "./main-profile/main-profile.component";
import { MaterialModule } from "../core/material.module";
import { EntrustmentPropositionsComponent } from "./entrustment-propositions/entrustment-propositions.component";
import { EditPreferencesComponent } from "./edit-preferences/edit-preferences.component";
import { RouterModule } from "@angular/router";
import { EntrustmentDetailsComponent } from "./entrustment-details/entrustment-details.component";

@NgModule({
  declarations: [
    MainProfileComponent,
    EntrustmentPropositionsComponent,
    EditPreferencesComponent,
    EntrustmentDetailsComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    MainProfileComponent,
    EntrustmentPropositionsComponent,
    EditPreferencesComponent,
    EntrustmentDetailsComponent
  ]
})
export class ProfileModule {}
