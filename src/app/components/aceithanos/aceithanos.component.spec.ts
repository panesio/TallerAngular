import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceithanosComponent } from './aceithanos.component';

describe('AceithanosComponent', () => {
  let component: AceithanosComponent;
  let fixture: ComponentFixture<AceithanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceithanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceithanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
