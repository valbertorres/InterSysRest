import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Response ,  RequestOptions} from '@angular/http'
import 'rxjs/Rx';

import { Cadastro } from '../CadastroUsuario/model/cadastro.model';
import { CadastroCtrlService } from './cadastro-ctrl.service';


@Injectable()
export class CadastroService{
    private urlCadastro = 'http://186.202.61.22:8135/datasnap/rest/service/cliente/audsped0001/1/500//0//';
    private urlCreat = 'http://186.202.61.22:8135/datasnap/rest/service/cliente/';


 private text : string[];
 private cadastro:Cadastro;

private headers : Headers = new Headers({
  'Content-Type':'application/json'
});

createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ')
  }



    constructor(
      private http:Http,
      private cadastroCtrlService : CadastroCtrlService
       ){}
    
    getFindAll(): Promise<Cadastro[]>{
      return this.http.get(this.urlCadastro)
      .toPromise()
      .then(response => response.json().result[0] as Cadastro[])
      .catch(this.handleError)
    }

    getFindAllTeste(){
      this.http.get(this.urlCadastro)
      .map(
        (response : Response)=>{
          const cadastro : Cadastro[] = response.json();
          for(let cad of cadastro){
            if(!cad['fields']){
              cad['fields']=[];
            }
          }
          return cadastro;
        }
      ).subscribe(
        (cadastro : Cadastro[])=>{
          this.cadastroCtrlService.setCadastro(cadastro);
          console.log(cadastro);
        }
      )
      
    }

   /* getCnpj(ccnpj : string) : Promise<Cadastro>{
      return this.getFindAll()
      .then((cadastro ) =>{
        return cadastro.find((cadastro=>  cadastro.ccnpj === ccnpj
        ))
      });
    }*/

    getTeste(){
      let teste : number[];
      return this.http.get(this.urlCadastro)
      .map(
        (response : Response)=>{
          const array = response.json().result[0];
          for(const server of array){
            teste = server;
          }
          return teste;
        }
      )
    }

    createCadastro():Promise<any>{
      let s = {"type":"VOcadcli.TVOcadcli","id":1,"fields":{"ccnpj":"02\u002e299\u002e715\u002f0001-12"}}
       return this.http.put(this.urlCreat, s, {headers : this.headers})
      .toPromise()
      .then((response : Response)=>{
        console.log("objt salvo ", response.json().result[0] as any[])
        return response.json().result[0] as any;
      })
      .catch(this.handleError)
    }

    put(){
      let urlInter = 'http://186.202.61.22:8135/datasnap/rest/service/cliente/';
      let url = 'https://intersys-c915f.firebaseio.com/data.json'
      let s = {"type":"VOcadcli.TVOcadcli","id":1,"fields":{"ccnpj":"02\u002e299\u002e715\u002f0001-12"}}
      const body= JSON.stringify(s);
      const headers = new Headers();
      headers.append('Content-Type','application/json');
      console.log("passou aqui ");
      return this.http.post(urlInter,body,{headers : headers})
      .map((data : Response)=> data.json());
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



   create(): Observable<any> {
     let s = "type:VOcadcli.TVOcadcli,id:1,fields:{ccnpj:02\u002e299\u002e715\u002f0001-12";
     let urlInter = 'http://186.202.61.22:8135/datasnap/rest/service/cliente/';
     let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' ,'X-Requested-With': 'XMLHttpRequest'});
     let options = new RequestOptions({ headers: headers });

    return this.http.post(urlInter, JSON.stringify(s) , options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

      private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }


}