import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElimUsuarioComponent } from './edit-elim-usuario.component';

describe('EditElimUsuarioComponent', () => {
  let component: EditElimUsuarioComponent;
  let fixture: ComponentFixture<EditElimUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElimUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElimUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
