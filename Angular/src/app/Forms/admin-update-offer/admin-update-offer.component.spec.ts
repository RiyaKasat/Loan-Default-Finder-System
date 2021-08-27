import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateOfferComponent } from './admin-update-offer.component';

describe('AdminUpdateOfferComponent', () => {
  let component: AdminUpdateOfferComponent;
  let fixture: ComponentFixture<AdminUpdateOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
