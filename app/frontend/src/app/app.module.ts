import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './core/material.module';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: "AIzaSyDRRv6g8E_s0qYPoLO53bozDl7HYfo27g8",
  authDomain: "psi2020.firebaseapp.com",
  databaseURL: "https://psi2020.firebaseio.com",
  projectId: "psi2020",
  storageBucket: "psi2020.appspot.com",
  messagingSenderId: "368690625148",
  appId: "1:368690625148:web:b31f91a5faa15d47cb27f9"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CommonModule,
    CoreModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

