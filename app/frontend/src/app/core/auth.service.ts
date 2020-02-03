import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";

import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { User } from "src/shared/models/User";
import { Lecturer } from "src/shared/models/Lecturer";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<User>;
  currentLecturer$: Observable<Lecturer>;
  currentId: number;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private apiService: ApiService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`Users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

    this.user$.subscribe(user => {
      if (user && user.role == "lecturer") {
        this.currentLecturer$ = this.apiService.get<Lecturer>(
          `lecturer/id/${user.databaseId}`
        );
        this.currentId = user.databaseId;
        console.log(`USER ID: ${this.currentId}`);
      }
    });
  }

  async emailPasswordSignIn(email: string, password: string) {
    const credential = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(["/"]);
  }
}
