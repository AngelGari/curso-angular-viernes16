import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'ang-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public usuarioRegistro: Usuario = new Usuario(null, null,null);
  public listaUsuarios: Array<Usuario> = [];

  constructor() { 
    console.log("constructor ejecutado");
  }

  ngOnInit() {
    console.log("componente ejecutado");
  }

  registroUsuario(usuario:Usuario) {
    this.listaUsuarios.push(usuario);
  }


}
