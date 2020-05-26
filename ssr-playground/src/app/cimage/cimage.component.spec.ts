import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimageComponent } from './cimage.component';

describe('CimageComponent', () => {
  let component: CimageComponent;
  let fixture: ComponentFixture<CimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
