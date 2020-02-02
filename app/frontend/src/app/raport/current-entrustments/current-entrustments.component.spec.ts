import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEntrustmentsComponent } from './current-entrustments.component';

describe('CurrentEntrustmentsComponent', () => {
  let component: CurrentEntrustmentsComponent;
  let fixture: ComponentFixture<CurrentEntrustmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentEntrustmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentEntrustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
