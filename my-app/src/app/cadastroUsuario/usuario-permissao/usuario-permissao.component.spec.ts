import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPermissaoComponent } from './usuario-permissao.component';

describe('UsuarioPermissaoComponent', () => {
  let component: UsuarioPermissaoComponent;
  let fixture: ComponentFixture<UsuarioPermissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPermissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPermissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
