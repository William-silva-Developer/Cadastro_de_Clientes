import { Injectable } from '@angular/core';
import { Cliente } from '../INTERFACES/Cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:3000/cliente');
  }
}
