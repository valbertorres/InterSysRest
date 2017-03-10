import { Component,OnInit } from '@angular/core';

import { CadastroService } from './cadastro.service';
import { Observable }       from 'rxjs/Observable';
import { Location } from '@angular/common';

import { Response } from '@angular/http';

import { Usuario } from './cadastro.model'




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
   cadastro : Usuario;

    
        constructor(
            private cadastroService : CadastroService,
            private location : Location
        ){} 

        ngOnInit(){
            this.getCadastro();
        }

            getCadastro(){
                this.cadastroService.getFindAll()
                .subscribe(
                    data => {
                        const myAray =[];
                        for(let key in data){
                            myAray.push(data[key]);
                        }
                        this.usuario = myAray;
                    }
                )
            }

            getTeste(){
                return this.cadastroService.getContato()
                .then((usuario : Usuario[])=>{
                    const array = [];
                    for(let key in usuario){
                        array.push(usuario[key]);
                    }
                    this.usuario = array
                })
            }

            bustaId(usuario : Usuario):void{
                this.cadastroService.getFindId(usuario)
                .then((cadastro :Usuario)=>{
                    console.log(cadastro)
                })
            }

            salva(){
                
                this.cadastroService.create(this.usuario)
                .subscribe(
                    data => console.log(data),
                    error => console.error("erro")
                )
            }

            
}



