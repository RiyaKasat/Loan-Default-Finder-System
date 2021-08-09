import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorLoanComponent } from './calculator-loan.component';

describe('CalculatorLoanComponent', () => {
  let component: CalculatorLoanComponent;
  let fixture: ComponentFixture<CalculatorLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
