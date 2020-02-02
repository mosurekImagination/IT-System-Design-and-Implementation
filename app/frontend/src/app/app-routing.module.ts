import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainProfileComponent } from "./profile/main-profile/main-profile.component";
import { EditPreferencesComponent } from "./profile/edit-preferences/edit-preferences.component";
import { EntrustmentPropositionsComponent } from "./profile/entrustment-propositions/entrustment-propositions.component";
import { EntrustmentDetailsComponent } from "./profile/entrustment-details/entrustment-details.component";

const routes: Routes = [
  {
    path: "profile/editPreferences",
    component: EditPreferencesComponent,
    pathMatch: "full"
  },
  {
    path: "profile/entrustmentPropositions",
    component: EntrustmentPropositionsComponent,
    pathMatch: "full"
  },
  {
    path: "profile/entrustmentDetails/:id",
    component: EntrustmentDetailsComponent,
    pathMatch: "full"
  },
  { path: "profile", component: MainProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
