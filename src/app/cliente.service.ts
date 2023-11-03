import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  //Esta URL obtiene el listado de todos los clientes en el backend
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  //este metodo nos sirve para registrar un cliente
  registrarCliente(cliente:Cliente) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cliente);
  }

  //este metodo sirve para actualizar el cliente
  actualizarCliente(id:number,cliente:Cliente) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cliente);
  }

  //este metodo sirve para obtener o buscar un cliente por su id
  obtenerClientePorId(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }

  //este metodo sirve para eliminar un cliente por su id
  eliminarCliente(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
