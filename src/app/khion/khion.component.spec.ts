import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhionComponent } from './khion.component';

describe('KhionComponent', () => {
  let component: KhionComponent;
  let fixture: ComponentFixture<KhionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
