import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroComponentComponent } from './home-intro-component.component';

describe('HomeIntroComponentComponent', () => {
  let component: HomeIntroComponentComponent;
  let fixture: ComponentFixture<HomeIntroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIntroComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIntroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
