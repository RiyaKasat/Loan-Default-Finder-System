import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderBoardComponent } from './lender-board.component'; 

describe('LenderBoardComponent', () => {
  let component: LenderBoardComponent;
  let fixture: ComponentFixture<LenderBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenderBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
