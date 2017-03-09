import { NgModule } from '@angular/core';

import { CadastroUsuarioComponent } from './cadastro-usuario.component'; 
import { CadastroRoutinModule } from './cadastro-routing.module';
import { LoginComponent } from './../login/login.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CadastroRoutinModule,
        CommonModule,
        FormsModule
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