import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { KnowledgeAreaPresenter } from "src/shared/presenter-models/KnowledgeAreaPresenter";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-preferences",
  templateUrl: "./edit-preferences.component.html",
  styleUrls: ["./edit-preferences.component.scss"]
})
export class EditPreferencesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  knowledgeAreasCtrl = new FormControl();
  filteredKAs: Observable<string[]>;
  currentKnowledgeAreas: string[] = cka.map(cka => cka.name);
  allKnowledgeAreas: string[] = dka.map(dka => dka.name);
  selectedArray: KnowledgeAreaPresenter[] = cka;

  everything: KnowledgeAreaPresenter[];

  changesMade: boolean = false;

  @ViewChild("kaInput") kaInput: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor(private router: Router) {
    this.filteredKAs = this.knowledgeAreasCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allKnowledgeAreas.slice()
      )
    );
  }

  ngOnInit() {
    this.everything = dka.concat(cka);
  }

  add(event: MatChipInputEvent): void {
    // Maybe it will be useful ?
  }

  remove(knowledgeArea: string): void {
    console.log(knowledgeArea);
    const index = this.currentKnowledgeAreas.indexOf(knowledgeArea);
    const selectedFind = this.selectedArray.find(
      item => item.name === knowledgeArea
    );
    const selectedIndex = this.selectedArray.indexOf(selectedFind);

    if (index >= 0) {
      this.currentKnowledgeAreas.splice(index, 1);
      // const toAdd = this.everything.find(item => item.name === fruit)
      this.allKnowledgeAreas.push(knowledgeArea);
      this.selectedArray.splice(selectedIndex, 1);
    }

    this.knowledgeAreasCtrl.setValue(null);
    this.changesMade = true;
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.addToSelectedArray(event.option.value);
    this.currentKnowledgeAreas.push(event.option.viewValue);
    const allKAIndex = this.allKnowledgeAreas.indexOf(event.option.value);
    if (allKAIndex >= 0) {
      this.allKnowledgeAreas.splice(allKAIndex, 1);
    }
    this.kaInput.nativeElement.value = "";
    this.knowledgeAreasCtrl.setValue(null);

    this.changesMade = true;
  }

  private addToSelectedArray(selected: string) {
    console.log(selected);

    let newKA = this.everything.find(item => item.name === selected);
    this.selectedArray.push(newKA);
    console.log(this.selectedArray);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allKnowledgeAreas.filter(
      fruit => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private _accept() {
    console.log("ACCEPT clicked");
    console.log(this.selectedArray);
    //map it and post it
    //progress bar hidden then shown when posting
    this.router.navigate(["/profile"]);
  }
}

const dka: KnowledgeAreaPresenter[] = [
  {
    id: 1,
    name: "Bazy danych"
  } as KnowledgeAreaPresenter,
  {
    id: 2,
    name: "Sztuczna Inteligencja"
  } as KnowledgeAreaPresenter,
  {
    id: 3,
    name: "Projektowanie systemów"
  } as KnowledgeAreaPresenter,
  {
    id: 4,
    name: "Inteligencja biznesowa"
  } as KnowledgeAreaPresenter,
  {
    id: 5,
    name: "Wspomaganie oprogramowania"
  } as KnowledgeAreaPresenter,
  {
    id: 6,
    name: "Niesztuczna inteligencja"
  } as KnowledgeAreaPresenter,
  {
    id: 7,
    name: "Projektowanie Android"
  } as KnowledgeAreaPresenter,
  {
    id: 8,
    name: "Aplikacje Webowe"
  } as KnowledgeAreaPresenter
];

const cka: KnowledgeAreaPresenter[] = [
  {
    id: 9,
    name: "Mobilne sieci niewyobrażalne"
  } as KnowledgeAreaPresenter,
  {
    id: 10,
    name: "Ciekawe teorie kwantowe"
  } as KnowledgeAreaPresenter,
  {
    id: 11,
    name: "Ogólne wzory matematyczne"
  } as KnowledgeAreaPresenter,
  {
    id: 12,
    name: "Siedem grzegów głównych"
  } as KnowledgeAreaPresenter
];
