import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourSectionComponent } from './know-your-section.component';

describe('KnowYourSectionComponent', () => {
  let component: KnowYourSectionComponent;
  let fixture: ComponentFixture<KnowYourSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowYourSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYourSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
