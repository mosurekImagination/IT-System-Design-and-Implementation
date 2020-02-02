import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainProfileComponent } from "./main-profile/main-profile.component";
import { MaterialModule } from "../core/material.module";
import { EntrustmentPropositionsComponent } from "./entrustment-propositions/entrustment-propositions.component";
import { EditPreferencesComponent } from "./edit-preferences/edit-preferences.component";
import { RouterModule } from "@angular/router";
import { EntrustmentDetailsComponent } from "./entrustment-details/entrustment-details.component";
import { DialogComponent } from "./entrustment-details/dialog/dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MainProfileComponent,
    EntrustmentPropositionsComponent,
    EditPreferencesComponent,
    EntrustmentDetailsComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainProfileComponent,
    EntrustmentPropositionsComponent,
    EditPreferencesComponent,
    EntrustmentDetailsComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent]
})
export class ProfileModule {}
