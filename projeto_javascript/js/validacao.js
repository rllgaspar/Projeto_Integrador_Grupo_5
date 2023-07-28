function validar(){
    var nome = formuser.nome.value;
    var email = formuser.email.value;
    var tel = formuser.tel.value;
   

    if ( nome == ""){
        alert('Digite seu nome');
        formuser.nome.focus();
        return false
    }
    if(nome.length <= 2){
        alert('Digite um nome válido');
        foruser.nome.focus();
        return false;
    }
    if(email == "" ){
        alert('Digite seu email');
        foruser.email.focus();
        return false
    }
    if( email.indexOf('@') == -1 ){
        alert('Digite um email válido');
        foruser.email.focus();
        return false
    }
    if(tel == ""){
        alert('Digite seu telefone');
        foruser.tel.focus();
        return false
    }
    if(tel.length <8 ){
        alert('Digite um número de telefone válido');
        foruser.tel.focus();
        return false
    }
    
    
}