import { Component, OnInit } from "@angular/core";
import { ApiService } from "./core/api.service";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./core/auth.service";
import { TimeoutError } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService, private auth: AuthService) {}

  emailText: string;
  passwordText: string;
  passwordHidden = true;
  hide = true;
  

  ngOnInit(): void {
  }

  signIn() {
    const verify = this.verifyInputs();
    console.log(`Email: ${this.emailText}`)
    console.log(`Password: ${this.passwordText}`)
    this.auth.emailPasswordSignIn(this.emailText, this.passwordText);
  }

  private verifyInputs(): Boolean {
    return true;
  }
}
