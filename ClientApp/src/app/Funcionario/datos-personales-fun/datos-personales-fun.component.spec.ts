import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesFunComponent } from './datos-personales-fun.component';

describe('DatosPersonalesFunComponent', () => {
  let component: DatosPersonalesFunComponent;
  let fixture: ComponentFixture<DatosPersonalesFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPersonalesFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
