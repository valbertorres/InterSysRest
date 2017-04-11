import { Component, OnInit } from '@angular/core';

import { UsuarioPermissaoModel } from '../model/usuario-permissao.model';

@Component({
  moduleId : module.id,
  selector: 'app-usuario-permissao',
  templateUrl: './usuario-permissao.component.html',
  styleUrls: ['./usuario-permissao.component.css']
})
export class UsuarioPermissaoComponent implements OnInit {

  private usuarioPermissao;
  private sucesso : boolean;
  constructor( ) {}

  ngOnInit() {
     this.usuarioPermissao = new UsuarioPermissaoModel('','','','','','','','');
  }

  /*getFindAllLogin(){
    return this.loginService.getFindAll()
    .then((login : UsuarioPermissaoModel[]) =>{
        const array = [];
        for(let key in login) array.push(login[key]);
        this.usuarioPermissao = array;
        console.log(this.usuarioPermissao);
    })
  }*/

  log(){
    console.log(this.usuarioPermissao.ccnpj);
  }

}
