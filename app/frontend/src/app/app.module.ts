import { BrowserModule } from "@angular/platform-browser";
import { NgModule, TRANSLATIONS, LOCALE_ID } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { CoreModule } from "./core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { I18n } from "@ngx-translate/i18n-polyfill";
import { MaterialModule } from "./core/material.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainProfileComponent } from "./profile/main-profile/main-profile.component";
import { ProfileModule } from "./profile/profile.module";
import { RaportModule } from "./raport/raport.module";

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
  declarations: [AppComponent],
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
    FormsModule,
    ReactiveFormsModule,
    ProfileModule,
    RaportModule
  ],
  exports: [ReactiveFormsModule],
  providers: [I18n],
  bootstrap: [AppComponent]
})
export class AppModule {}
