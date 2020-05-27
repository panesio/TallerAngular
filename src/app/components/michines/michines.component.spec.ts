import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MichinesComponent } from './michines.component';

describe('MichinesComponent', () => {
  let component: MichinesComponent;
  let fixture: ComponentFixture<MichinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
