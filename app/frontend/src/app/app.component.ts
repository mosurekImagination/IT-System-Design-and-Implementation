import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private apiService: ApiService){}
  
  title = 'ng-powierzenia3000';

  ngOnInit(): void {
    this.apiService.get("auth/me").subscribe(response => this.title = response.field);
  }
}
