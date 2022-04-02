import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpComponent } from './xp.component';

describe('XpComponent', () => {
  let component: XpComponent;
  let fixture: ComponentFixture<XpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
