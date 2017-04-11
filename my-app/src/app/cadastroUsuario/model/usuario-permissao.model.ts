export class UsuarioPermissaoModel{
    constructor(
       public ccnpj : string,
       public usuario : string,
       public telefone : string,
       public whatsapp : string,
       public email : string,
       public senha : string,
       public confirmacao : string,
       public observacao :string
    ){}
}