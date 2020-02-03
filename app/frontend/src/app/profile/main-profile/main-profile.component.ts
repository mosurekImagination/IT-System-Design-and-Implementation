import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: "app-main-profile",
  templateUrl: "./main-profile.component.html",
  styleUrls: ["./main-profile.component.scss"]
})
export class MainProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
