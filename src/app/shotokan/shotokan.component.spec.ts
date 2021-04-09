import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotokanComponent } from './shotokan.component';

describe('ShotokanComponent', () => {
  let component: ShotokanComponent;
  let fixture: ComponentFixture<ShotokanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotokanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotokanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
