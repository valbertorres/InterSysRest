import { Component,OnInit } from '@angular/core';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

import { CadastroService } from './cadastro.service';
import { Usuario } from './cadastro.model';
import { Observable }       from 'rxjs/Observable';
import { Location } from '@angular/common';




@Component({
    moduleId: module.id,
    selector : 'cadastro-usuario',
    templateUrl : 'cadastro-usuario.component.html',
    styleUrls :[
        'cadastro.css'
    ]
})
export class CadastroUsuarioComponent implements OnInit{
   usuario : Usuario[]=[];
   lista : any[]=[];
    
        constructor(
            private cadastroService : CadastroService,
            private location : Location
        ){}
   
           
        ngOnInit(){
            this.get();
            this.getFidAll();
        }

        get(){
           this.cadastroService.getCadastro()
            .then((cadastro : any[]) =>{
                this.usuario = cadastro
                console.log(this.usuario);
            })
            .catch(err => console.log(err)
            )};

            getFidAll(){
                this.cadastroService.getFindAll();
            }
}




