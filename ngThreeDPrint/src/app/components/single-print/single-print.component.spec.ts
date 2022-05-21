import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePrintComponent } from './single-print.component';

describe('SinglePrintComponent', () => {
  let component: SinglePrintComponent;
  let fixture: ComponentFixture<SinglePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
