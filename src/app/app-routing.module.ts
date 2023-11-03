import { EmpleadoDetallesComponent } from './cliente-detalles/empleado-detalles.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';

const routes: Routes = [
  {path : 'empleados',component:ListaClientesComponent},
  {path:'',redirectTo:'clientes',pathMatch:'full'},
  {path : 'registrar-cliente',component : RegistrarClienteComponent},
  {path : 'actualizar-cliente/:id',component : ActualizarClienteComponent},
  {path : 'empleado-detalles/:id',component : EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
