import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get<T>(`${environment.api_url}${path}`, { params })
      .pipe(tap(response => console.log(response)));
  }

  put<T>(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put<T>(
        `${environment.api_url}${path}`,
        JSON.stringify(body),
        this.httpOptions
      )
      .pipe(tap(response => console.log(response)));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body), {
        observe: "response"
      })
      .pipe(tap(response => console.log(response)));
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${environment.api_url}${path}`)
      .pipe(tap(response => console.log(response)));
  }
}

class Lecturer {
  id: number;
  token: string;
  name: string;
  surname: string;
  title: Title;
  pesel: number;
}

enum Title {
  MAGISTER
}
