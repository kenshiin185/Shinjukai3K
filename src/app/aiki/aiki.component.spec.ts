import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AikiComponent } from './aiki.component';

describe('AikiComponent', () => {
  let component: AikiComponent;
  let fixture: ComponentFixture<AikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
