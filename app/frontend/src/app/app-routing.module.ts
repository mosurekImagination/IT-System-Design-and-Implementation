import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainProfileComponent } from './profile/main-profile/main-profile.component';


const routes: Routes = [
  {path : 'profile', component: MainProfileComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
