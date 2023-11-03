import  swal  from 'sweetalert2';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes:Cliente[];

  constructor(private clienteServicio:ClienteService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  actualizarCliente(id:number){
    this.router.navigate(['actualizar-cliente',id]);
  }

  private obtenerClientes(){
    this.clienteServicio.obtenerListaDeClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }

    eliminarCliente(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar al cliente",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.clienteServicio.eliminarCliente(id).subscribe(dato => {
            console.log(dato);
            this.obtenerClientes();
            swal(
              'Cliente eliminado',
              'El cliente ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }


  verDetallesDelCliente(id:number){
    this.router.navigate(['cliente-detalles',id]);
  }
}
