import { Component,OnInit , Input} from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CadastroUsuarioComponent } from './../cadastroUsuario/cadastro-usuario.component';
import { LoginModel } from './login.model';
import { Cadastro } from '../cadastroUsuario/model/cadastro.model';
import{ ValidarCpfCnpj } from '../cadastroUsuario/validar-cpf-cnpj.service';

import { LoginService } from '../service/login.service';
import { CadastroService } from '../service/cadastro.service';

import { Fields } from '../cadastroUsuario/model/fields.model';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls : [
        'login.css'
    ]
})
  

export class LoginComponent implements OnInit {
    

   cadastroForm : FormGroup;
   private tests = [
            't',
            't2'
        ]

    constructor( 
        private validarCpfCnpj : ValidarCpfCnpj,
        private loginService : LoginService,
        private cadastroService : CadastroService
    ) { }

    ngOnInit() {
     this.initForm();
     }

     log(){
        // console.log(this.cadastroForm.value);
     }
     signame = ['11.111.111/1111-11'];
     formBuildValidator(control : FormControl):{[s:string]:boolean}{
         if(this.signame.indexOf(control.value)!==-1)return{'validatorTeste':true};
         return null; 
     }

     initForm(){
         let ccnpj ='';
         let servico ='';
         let cpf ='';
         let senha = '';

         this.cadastroForm = new FormGroup({
             fields : new FormGroup({
                 'ccnpj':new FormControl(ccnpj , [Validators.required, this.formBuildValidator.bind(this), 
                 Validators.pattern(/^[1-9]+[0-9]*$/)]),
             }),
             'cpf' : new FormControl(cpf, Validators.required),
             'senha':new FormControl(senha, Validators.required)
         })
     }

  

}

 

