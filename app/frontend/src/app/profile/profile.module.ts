import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { MaterialModule } from '../core/material.module';

@NgModule({
  declarations: [MainProfileComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MainProfileComponent]
})
export class ProfileModule { }
