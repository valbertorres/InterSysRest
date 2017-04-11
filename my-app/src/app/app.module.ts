import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'pikaday/css/pikaday.css';
import 'moment/moment.js';

import { CadastroService } from './service/cadastro.service';
import { LoginService } from './service/login.service';
import { CadastroCtrlService } from './service/cadastro-ctrl.service';

import { ValidarCpfCnpj} from './cadastroUsuario/validar-cpf-cnpj.service';

import { FocusDirective } from './directive/focus.directive';
import { DataDirective } from './directive/data.directive';
import { MascaraDirective } from './directive/mascara.directive';
import { UsuarioPermissaoComponent } from './cadastroUsuario/usuario-permissao/usuario-permissao.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastroUsuario/cadastro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    FocusDirective,
    LoginComponent,
    MascaraDirective,
    UsuarioPermissaoComponent,
    DataDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [
    CadastroService,
    ValidarCpfCnpj,
    LoginService,
    CadastroCtrlService
  ],
  bootstrap: [AppComponent],
  exports : [
    FormsModule
  ]
})
export class AppModule { }
