import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrustmentPropositionsComponent } from './entrustment-propositions.component';

describe('EntrustmentPropositionsComponent', () => {
  let component: EntrustmentPropositionsComponent;
  let fixture: ComponentFixture<EntrustmentPropositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrustmentPropositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrustmentPropositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
