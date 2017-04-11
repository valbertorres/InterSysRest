import { 
    Component, 
    OnInit, 
    Input,
    Renderer,
    ElementRef,
    EventEmitter 
} from '@angular/core';

import { 
    FormGroup, 
    FormGroupName, 
    FormControlName,
    FormControl, 
    Validators,
    FormBuilder
    } from '@angular/forms';

import { CadastroService } from '../service/cadastro.service';
import { CadastroCtrlService } from '../service/cadastro-ctrl.service';
import { Observable }       from 'rxjs/Observable';
import { Location } from '@angular/common';

import { Response } from '@angular/http';

import { Cadastro } from './model/cadastro.model'
import { Fields } from './model/fields.model';

import { LoginModel } from '../login/login.model';
import * as $ from 'jquery';

import { Subscription } from 'rxjs/Subscription';


declare var jQuery : any;

@Component({
    moduleId: module.id,
    selector : 'cadastro-usuario',
    templateUrl : 'cadastro-usuario.component.html',
    styleUrls :[
        'cadastro.css'
    ]
})
export class CadastroUsuarioComponent implements OnInit{
   
   @Input('input') input : string;

private subscription : Subscription;

    public myFocusEvent = new EventEmitter<boolean>();
    private dataPikaday : any;
    private dataPikaday2: any;

    private inputFocused = true;
   private cadastro : Cadastro;
   private cadastro2 : Cadastro[];
   private fields2 : Fields;
   private fields : Fields[];
   private loginModel;
   private cadastroForm : FormGroup;

   private servicosCheck =[
       'Auditoria de Estorque',
       'Analise de Balanco',
       'Comparatio Fiscal',
       'Todos'
   ];

    constructor(
            private cadastroService : CadastroService,
            private location : Location,
            private element : ElementRef,
            private cadastroCtrlService : CadastroCtrlService,
            private formBuild : FormBuilder
        ){} 

        ngOnInit(){
            this.onInitForm();
            this.get();
        }

        get(){
            this.cadastroService.getFindAll()
            .then(
                (cadastro : Cadastro[])=>{
                    this.cadastro2 = cadastro;
                    console.log(cadastro);
                }
            )
            
        }
        
        validarData(){
            if(this.dataPikaday>= this.dataPikaday2){
                console.log("data invalida!");
            } else{
                console.log("data valida")
            }
        }

        setMyFocusEvent(myFocusEvent:boolean){
            this.myFocusEvent.emit(myFocusEvent);
        }


      

    log():void{
        console.log(this.cadastroForm.value.fields);
        this.cadastroForm.reset();
       
       
    }

    onInitForm():void{
        let type = 'cliente';
        let id='5';
        let senha ='';
        let dataPikaday = '';
        let dataPikaday2='';
        let servicoCotado ='';
        let ccnpj ='';
        let cidade = '';
        let auditoria= ''; 
        let analise ='';
        let comparatio ='';
        let todos = '';

        this.cadastroForm =  this.formBuild.group({
         'type' : [type],
         'id': [id],   
         'fields': this.formBuild.group({  
            'senha' : [senha, Validators.required],
            'dataPikaday': new FormControl(dataPikaday, Validators.required),
            'dataPikaday2' : new FormControl(dataPikaday2, Validators.required),
            'ccnpj' : new FormControl(ccnpj, Validators.required),
            'cidade' : new FormControl(cidade, Validators.required),
            'auditoria' : new FormControl(auditoria),
            'analise' : new FormControl(analise),
            'comparativo' : new FormControl(comparatio),
            'todos' : new FormControl(todos)})

        })
    }
            
}