import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KumiteComponent } from './kumite.component';

describe('KumiteComponent', () => {
  let component: KumiteComponent;
  let fixture: ComponentFixture<KumiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KumiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KumiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
