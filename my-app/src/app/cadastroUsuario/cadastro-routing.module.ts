import { NgModule } from '@angular/core';

import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { LoginComponent } from './../login/login.component';

import { RouterModule, Routes } from '@angular/router';

const cadasRouting : Routes =[
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'login/cadastro',
        component : CadastroUsuarioComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(cadasRouting)
    ],
    exports :[
        RouterModule
    ]
})
export class CadastroRoutinModule{}