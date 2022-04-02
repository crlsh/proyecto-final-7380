import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAgregarComponent } from './btn-agregar.component';

describe('BtnAgregarComponent', () => {
  let component: BtnAgregarComponent;
  let fixture: ComponentFixture<BtnAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
