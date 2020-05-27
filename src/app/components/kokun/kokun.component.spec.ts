import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokunComponent } from './kokun.component';

describe('KokunComponent', () => {
  let component: KokunComponent;
  let fixture: ComponentFixture<KokunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
