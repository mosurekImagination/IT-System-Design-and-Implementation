import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith, switchMap, take } from "rxjs/operators";
import { KnowledgeAreaPresenter } from "src/shared/presenter-models/KnowledgeAreaPresenter";
import { Router } from "@angular/router";
import { ApiService } from "src/app/core/api.service";
import { KnowledgeArea } from "src/shared/models/KnowledgeArea";
import { AuthService } from "src/app/core/auth.service";
import { MatSnackBar } from "@angular/material";
import { Lecturer } from "src/shared/models/Lecturer";

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

  progressVisible: boolean = false;

  changesMade: boolean = false;

  startCurrentKA: KnowledgeArea[];
  allKA: KnowledgeArea[];

  @ViewChild("kaInput") kaInput: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.filteredKAs = this.knowledgeAreasCtrl.valueChanges.pipe(
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allKnowledgeAreas.slice()
      )
    );
  }

  ngOnInit() {
    this.apiService.get<KnowledgeArea[]>(`knowledge/all`).subscribe(allKAs => {
      console.log(allKAs);
      this.allKA = allKAs;
      this.allKnowledgeAreas = allKAs.map(ka => ka.name);
    });

    // this.apiService
    //   .get<KnowledgeArea[]>(`knowledge/lecturer/${this.auth.currentId}`)
    this.auth.currentLecturer$.subscribe(lecturer => {
      console.log(lecturer.knowledgeArea);
      this.startCurrentKA = lecturer.knowledgeArea;
      this.currentKnowledgeAreas = lecturer.knowledgeArea.map(ka => ka.name);
      this.selectedArray = lecturer.knowledgeArea;
      this.filterAllAreas(this.currentKnowledgeAreas);
    });

    this.knowledgeAreasCtrl.setValue(null);
  }

  private filterAllAreas(currentAreas: string[]) {
    this.allKnowledgeAreas = this.allKnowledgeAreas.filter(
      ka => !currentAreas.find(x => x == ka)
    );
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
    this.filterAllAreas(this.currentKnowledgeAreas);
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
    this.filterAllAreas(this.currentKnowledgeAreas);
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
    this.progressVisible = true;
    console.log("ACCEPT clicked");
    console.log(this.selectedArray);

    this.auth.currentLecturer$.pipe(take(1)).subscribe(user => {
      console.log("start api call");

      let toPut = user;
      toPut.knowledgeArea = this.selectedArray;
      console.log("toput");
      console.log(toPut);
      this.apiService
        .put<Lecturer>(`lecturer/update`, toPut)
        .pipe(take(1))
        .subscribe(response => {
          console.log("updated");
          console.log(response);
          console.log("Put success");
          this.openSnackbar("Zaktualizowano!");
          this.progressVisible = false;
          this.router.navigate(["/profile"]);
          this.auth.currentLecturer$.next(response);
        });
    });
  }

  private openSnackbar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 4000
    });
  }
}
