import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Response } from '@angular/http'

import { LoginModel } from '../login/login.model';

@Injectable()
export class LoginService{

    private urlLogin = 'http://186.202.61.22:8135/datasnap/rest/service/cadcli_usuarios/audsped0001/1/500/0/0';
    
    private headers : Headers = new Headers({
        'Content-typ':'aplication/json'
    });

    constructor( private http : Http){}

    getFindAll():Promise<LoginModel[]>{
        return this.http.get(this.urlLogin)
        .toPromise()
        .then(response => response.json().result[0] as LoginModel[])
        .catch(this.handleError);
    }

    getCcnpj(cucpf : string ) : Promise<LoginModel>{
        return this.getFindAll()
        .then((loginModel : LoginModel[]) =>{
            return loginModel.find((loginModel)=>{
                return loginModel.cucpf === cucpf;
            });
        });
    }

     private handleError (error: Response | any) {
            let errMsg: string;
            if (error instanceof Response) {
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            } else {
                errMsg = error.message ? error.message : error.toString();
            }
            console.error(errMsg);
            return Observable.throw(errMsg);
        }

}