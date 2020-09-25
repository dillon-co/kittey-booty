import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileHelperComponent } from './file-helper.component';

describe('FileHelperComponent', () => {
  let component: FileHelperComponent;
  let fixture: ComponentFixture<FileHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
