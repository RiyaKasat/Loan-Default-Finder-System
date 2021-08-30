import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadFinalComponent } from './file-upload-final.component';

describe('FileUploadFinalComponent', () => {
  let component: FileUploadFinalComponent;
  let fixture: ComponentFixture<FileUploadFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
