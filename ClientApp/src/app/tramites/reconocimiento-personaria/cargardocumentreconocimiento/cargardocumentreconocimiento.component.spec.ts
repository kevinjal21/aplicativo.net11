import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargardocumentreconocimientoComponent } from './cargardocumentreconocimiento.component';

describe('CargardocumentreconocimientoComponent', () => {
  let component: CargardocumentreconocimientoComponent;
  let fixture: ComponentFixture<CargardocumentreconocimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargardocumentreconocimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargardocumentreconocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
