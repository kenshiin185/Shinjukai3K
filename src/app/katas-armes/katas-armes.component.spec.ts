import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatasArmesComponent } from './katas-armes.component';

describe('KatasArmesComponent', () => {
  let component: KatasArmesComponent;
  let fixture: ComponentFixture<KatasArmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatasArmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatasArmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
