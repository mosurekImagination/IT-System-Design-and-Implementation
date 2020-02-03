import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrustmentDetailsComponent } from './entrustment-details.component';

describe('EntrustmentDetailsComponent', () => {
  let component: EntrustmentDetailsComponent;
  let fixture: ComponentFixture<EntrustmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrustmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrustmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
