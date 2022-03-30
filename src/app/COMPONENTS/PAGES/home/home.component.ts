
import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/INTERFACES/Cliente';

import { ClienteService} from 'src/app/SERVICES/cliente.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes: Cliente [] = [];

  constructor(private service: ClienteService) {

  }

  ngOnInit(): void {

    this.service.getClientes().subscribe({
      next: (clientes: Cliente[]) => this.clientes = clientes,
      error: (erro) => console.log(erro),
      complete: () => console.log('Requisicão finalizada')

    });


  }

}
