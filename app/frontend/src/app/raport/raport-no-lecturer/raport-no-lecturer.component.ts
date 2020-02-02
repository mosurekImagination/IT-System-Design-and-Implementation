import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/auth.service";
import { Router } from "@angular/router";
import { NoLecturerPresenter } from "src/shared/presenter-models/NoLecturerPresenter";

@Component({
  selector: "app-raport-no-lecturer",
  templateUrl: "./raport-no-lecturer.component.html",
  styleUrls: ["./raport-no-lecturer.component.scss"]
})
export class RaportNoLecturerComponent implements OnInit {
  displayedColumns = [
    "col1",
    "col2",
    "col3",
    "col4",
    "col5",
    "col6",
    "col7",
    "col8"
  ];
  dataSource = tempData;
  constructor() {}

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
    knowledgeArea: "Bazy danych",
    leftToGive: 10,
    semester: 3,
    year: 2
  } as NoLecturerPresenter,
  {
    code: "ABC-123",
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 5,
    knowledgeArea: "Bazy danych",
    leftToGive: 10,
    semester: 3,
    year: 2
  } as NoLecturerPresenter,
  {
    code: "ABC-123",
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 5,
    knowledgeArea: "Bazy danych",
    leftToGive: 10,
    semester: 3,
    year: 2
  } as NoLecturerPresenter,
  {
    code: "ABC-123",
    courseName: "Podstawy baz danych",
    form: "Ćwiczenia",
    hours: 5,
    knowledgeArea: "Bazy danych",
    leftToGive: 10,
    semester: 3,
    year: 2
  } as NoLecturerPresenter
];

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];
