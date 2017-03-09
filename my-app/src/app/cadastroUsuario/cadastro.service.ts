import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions,Jsonp , URLSearchParams} from '@angular/http';
import { Usuario } from './cadastro.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class CadastroService{
 private cadastroUrl:string = 'http://186.202.61.22:8135/AUDSPED/AUDITORIA/TpVOcadcli/VOcadcli/audsped0001/1/500//0';
 
 private usuario :Usuario[];
 private text : string[];

    constructor(private http:Http, 
      private jsonp : Jsonp ){}

  getCadastro():Promise<Usuario[]>{
        return this.http.get(this.cadastroUrl)
        .toPromise()
        .then(responser => responser.json().result as any[])
        .catch(err => console.log("erro ao carregar o getCadastro"))
    }

    getFindAll(){
      return this.http.get(this.cadastroUrl)
      .map((response:Response)=><string[]> response.json())
      .subscribe(
        (result : string[]) =>{
          this.text = result
          console.log(this.text)
        }
      );
    }

    



 private extractData(res: Response) {
    let body = res.json();
    return body.result || { };
  }
}