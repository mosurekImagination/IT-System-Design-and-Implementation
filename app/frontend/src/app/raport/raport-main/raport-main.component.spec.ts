import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportMainComponent } from './raport-main.component';

describe('RaportMainComponent', () => {
  let component: RaportMainComponent;
  let fixture: ComponentFixture<RaportMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaportMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
