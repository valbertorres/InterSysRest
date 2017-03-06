import { NgModule } from '@angular/core'

import { RouterModule,Routes } from '@angular/router';

const appRputing : Routes = [
    {
        path : '',
        redirectTo : '/login',
        pathMatch : 'full'
    }
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