import { Component, OnInit } from '@angular/core';
import { CadastroUsuarioComponent } from './../cadastroUsuario/cadastro-usuario.component';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls : [
        'login.css'
    ]
})
export class LoginComponent implements OnInit {

    private cad : CadastroUsuarioComponent;
    constructor() { }

    ngOnInit() { }

  

}

