import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatasSupComponent } from './katas-sup.component';

describe('KatasSupComponent', () => {
  let component: KatasSupComponent;
  let fixture: ComponentFixture<KatasSupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatasSupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatasSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
