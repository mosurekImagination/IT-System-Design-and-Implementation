import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/auth.service";
import { Router } from "@angular/router";
import { NoLecturerPresenter } from "src/shared/presenter-models/NoLecturerPresenter";
import { ApiService } from "src/app/core/api.service";

@Component({
  selector: "app-raport-no-lecturer",
  templateUrl: "./raport-no-lecturer.component.html",
  styleUrls: ["./raport-no-lecturer.component.scss"]
})
export class RaportNoLecturerComponent implements OnInit {
  displayedColumns = ["col1", "col2", "col3", "col4", "col5"];
  dataSource = tempData;
  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const tempData: NoLecturerPresenter[] = [
  {
    code: "ABC-123",
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 5,
    knowledgeArea: "Bazy danych"
  } as NoLecturerPresenter,
  {
    code: "ABC-123",
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 5,
    knowledgeArea: "Bazy danych"
  } as NoLecturerPresenter,
  {
    code: "ABC-123",
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 5,
    knowledgeArea: "Bazy danych"
  } as NoLecturerPresenter,
  {
    code: "ABC-123",
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 5,
    knowledgeArea: "Bazy danych"
  } as NoLecturerPresenter
];
