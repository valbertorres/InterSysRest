import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Response } from '@angular/http'
import { Subject } from 'rxjs/Subject';

import { Cadastro } from '../cadastroUsuario/model/cadastro.model';

@Injectable()
export class CadastroCtrlService{

    

    onCadastroChange : Subject<Cadastro[]>;
        private cadastro : Cadastro[];

        setCadastro(cadastro : Cadastro[]){
            this.cadastro = cadastro;
            this.onCadastroChange.next(cadastro.slice());
        }

        getCadastro(){
            return this.cadastro.slice();
        }
}