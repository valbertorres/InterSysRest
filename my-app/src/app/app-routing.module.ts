import { NgModule } from '@angular/core'

import { RouterModule,Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const appRputing : Routes = [
    {path : '',redirectTo : '/login',pathMatch : 'full'},
    { path:'login',component :  LoginComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRputing)
    ],
    exports :[
        RouterModule
    ]
})
export class AppRoutingModule{

    
}