function logar() {

    var email = inpt_email.value;
    var senha = inpt_senha.value;

     if (email.indexOf('@') < 0 || email.indexOf('.com') < 0) {

        alert('Email inválido.');

    } else if (senha.length < 2) {

        alert('Senha inválida.');
 
    } else {

        window.location.href = 'Home.html';
    }
}


function cadastro() {

    var email = inpt_email.value;
    var senha = inpt_senha.value;
    var re_senha = inpt_re_senha.value;

    if (email.indexOf('@') < 0 || email.indexOf('.com') < 0) {

        alert('Email inválido. Verifique se tem "@" e ".com"');

    } else if (senha.length < 2) {
        alert('Senha inválida. Verifique se a senha tem mais que dois caracteres');

    } else if (re_senha !== senha) {
        alert('As senhas não conferem.');

    } else {
        alert('Cadastro realizado com sucesso.');
        window.location.href = 'Index.html';
    }
}








