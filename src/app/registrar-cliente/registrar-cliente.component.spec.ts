import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEmpleadoComponent } from './registrar-cliente.component';

describe('RegistrarEmpleadoComponent', () => {
  let component: RegistrarEmpleadoComponent;
  let fixture: ComponentFixture<RegistrarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
