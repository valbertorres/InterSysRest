import { NgModule } from '@angular/core';

import { CadastroUsuarioComponent } from './cadastro-usuario.component'; 
import { CadastroRoutinModule } from './cadastro-routing.module';
import { LoginComponent } from './../login/login.component';

import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CadastroRoutinModule,
        CommonModule
    ],
     declarations:[
         CadastroUsuarioComponent,
         LoginComponent
     ],
     exports:[
         CadastroUsuarioComponent,
         LoginComponent
     ]
})
export class Cadastromodule{

}