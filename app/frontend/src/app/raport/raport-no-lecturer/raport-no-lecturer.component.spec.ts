import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportNoLecturerComponent } from './raport-no-lecturer.component';

describe('RaportNoLecturerComponent', () => {
  let component: RaportNoLecturerComponent;
  let fixture: ComponentFixture<RaportNoLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaportNoLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportNoLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
