import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";

import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { User } from "src/shared/models/User";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
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
  }


  async emailPasswordSignIn(email: string, password: string){
    const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    // return this.updateUserData(credential.user);
  }

  async signOut(){
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/'])
  }


}
