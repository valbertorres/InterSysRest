import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers} from '@angular/http';
import { Usuario } from './cadastro.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class CadastroService{
 private cadastroUrl:string = 'http://192.168.0.104:8135/AUDSPED/AUDITORIA/TpVOcadcli/VOcadcli/audsped0001/1/500//0';
 
 private usuario :Usuario;
 private text : string[];

    constructor(private http:Http ){}
    
    getFindAll(){
      return this.http.get(this.cadastroUrl)
      .map((res : Response) => res.json().result[0]);
    }

    getContato():Promise<Usuario[]>{
      return this.http.get(this.cadastroUrl)
      .toPromise()
      .then(response => response.json().result[0] as Usuario[])
      .catch()
    }

    getFindId(usuario2 : Usuario):Promise<Usuario>{
      return this.getContato()
      .then((usuario: Usuario[]) =>
        usuario.find(usuario=>usuario.ccnpj === usuario2.ccnpj))
    }

    create(cadastro : Usuario[]){
        const body =JSON.stringify(cadastro);
        const headers = new Headers();
        headers.append('Content-Typ','application/json');
       return this.http.put(this.cadastroUrl,body,{headers : headers})
       .map((data :Response) =>data.json())
    }

    private handleError(err:any):Promise<any>{
        console.log('erro',err);
        return Promise.reject(err.message || err);
    }

}