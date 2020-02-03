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
import { ApiService } from "src/app/core/api.service";
import { KnowledgeArea } from "src/shared/models/KnowledgeArea";
import { AuthService } from "src/app/core/auth.service";

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
  currentKnowledgeAreas: string[] = [];
  allKnowledgeAreas: string[] = [];
  selectedArray: KnowledgeArea[];

  changesMade: boolean = false;

  startCurrentKA: KnowledgeArea[];
  allKA: KnowledgeArea[];

  @ViewChild("kaInput") kaInput: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.apiService.get<KnowledgeArea[]>(`knowledge/all`).subscribe(allKAs => {
      console.log(allKAs);
      this.allKA = allKAs;
      this.allKnowledgeAreas = allKAs.map(ka => ka.name);
    });

    this.apiService
      .get<KnowledgeArea[]>(`knowledge/lecturer/${this.auth.currentId}`)
      .subscribe(currentKAs => {
        console.log(currentKAs);
        this.startCurrentKA = currentKAs;
        this.currentKnowledgeAreas = currentKAs.map(ka => ka.name);
        this.selectedArray = currentKAs;
        this.filterAllAreas(this.currentKnowledgeAreas);
      });

    this.filteredKAs = this.knowledgeAreasCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allKnowledgeAreas.slice()
      )
    );
  }

  private filterAllAreas(currentAreas: string[]) {
    this.allKnowledgeAreas.filter(ka => !currentAreas.some(x => x == ka));
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

    let newKA = this.allKA.find(item => item.name === selected);
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
