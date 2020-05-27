import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RencorososComponent } from './rencorosos.component';

describe('RencorososComponent', () => {
  let component: RencorososComponent;
  let fixture: ComponentFixture<RencorososComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RencorososComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RencorososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
