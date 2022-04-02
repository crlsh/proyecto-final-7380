import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpformComponent } from './xpform.component';

describe('XpformComponent', () => {
  let component: XpformComponent;
  let fixture: ComponentFixture<XpformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
