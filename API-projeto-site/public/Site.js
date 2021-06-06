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

var acontecimentos = [];

function resultado() {

    var opcao1 = select1.value;
    var opcao2 = select2.value;
    var opcao3 = select3.value;
    var opcao4 = select4.value;

    var text = '';

    if (opcao1 == 'Yasuo' && opcao2 == 'Malzahar' && opcao3 == 'Garen' && opcao4 == 'Azir') {
        msg.innerHTML = `Parabéns, você acertou todos os nomes.`;
        var text = 'Parabéns, você acertou todos os nomes.';
        acontecimentos.push(text);

    } else if (opcao1 == 'Yasuo' && opcao2 == 'Malzahar' && opcao3 == 'Garen') {
        msg.innerHTML = `Somente o primeiro, segundo e terceiro campeão estão corretos.`;
        var text = 'Somente o primeiro, segundo e terceiro campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao1 == 'Yasuo' && opcao2 == 'Malzahar' && opcao4 == 'Azir') {
        msg.innerHTML = `Somente o primeiro, segundo e quarto campeão estão corretos.`;
        var text = 'Somente o primeiro, segundo e quarto campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao1 == 'Yasuo' && opcao3 == 'Garen' && opcao4 == 'Azir') {
        msg.innerHTML = `Somente o primeiro, terceiro e quarto campeão estão corretos.`;
        var text = 'Somente o primeiro, terceiro e quarto campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao2 == 'Malzahar' && opcao1 == 'Yasuo' && opcao3 == 'Garen') {
        msg.innerHTML = `Somente o primeiro, segundo e terceiro campeão estão corretos.`;
        var text = 'Somente o primeiro, segundo e terceiro campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao2 == 'Malzahar' && opcao1 == 'Yasuo' && opcao4 == 'Azir') {
        msg.innerHTML = `Somente o primeiro, segundo e quarto campeão estão corretos.`;
        var text = 'Somente o primeiro, segundo e quarto campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao2 == 'Malzahar' && opcao3 == 'Garen' && opcao4 == 'Azir') {
        msg.innerHTML = `Somente o segundo, terceiro e quarto campeão estão corretos.`;
        var text = 'Somente o segundo, terceiro e quarto campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao3 == 'Garen' && opcao2 == 'Malzahar' && opcao1 == 'Yasuo') {
        msg.innerHTML = `Somente o primeiro, segundo e terceiro campeão estão corretos.`;
        var text = 'Somente o primeiro, segundo e terceiro campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao3 == 'Garen' && opcao2 == 'Malzahar' && opcao4 == 'Azir') {
        msg.innerHTML = `Somente o segundo, terceiro e quarto campeão estão corretos.`;
        var text = 'Somente o segundo, terceiro e quarto campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao3 == 'Garen' && opcao1 == 'Yasuo' && opcao4 == 'Azir') {
        msg.innerHTML = `Somente o primeiro, terceiro e quarto campeão estão corretos.`;
        var text = 'Somente o primeiro, terceiro e quarto campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao4 == 'Azir' && opcao2 == 'Malzahar' && opcao3 == 'Garen') {
        msg.innerHTML = `Somente o segundo, terceiro e quarto campeão estão corretos.`;
        var text = 'Somente o segundo, terceiro e quarto campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao4 == 'Azir' && opcao2 == 'Malzahar' && opcao1 == 'Yasuo') {
        msg.innerHTML = `Somente o primeiro, segundo e quarto campeão estão corretos.`;
        var text = 'Somente o primeiro, segundo e quarto campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao4 == 'Azir' && opcao3 == 'Garen' && opcao1 == 'Yasuo') {
        msg.innerHTML = `Somente o primeiro, terceiro e quarto campeão estão corretos.`;
        var text = 'Somente o primeiro, terceiro e quarto campeão estão corretos.';
        acontecimentos.push(text);

    } else if (opcao1 == 'Yasuo' && opcao2 == 'Malzahar') {
        msg.innerHTML = `Somente o primeiro e o segundo nome estão corretos.`;
        var text = 'Somente o primeiro e o segundo nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao1 == 'Yasuo' && opcao3 == 'Garen') {
        msg.innerHTML = `Somente o primeiro e o terceiro nome estão corretos.`;
        var text = 'Somente o primeiro e o terceiro nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao1 == 'Yasuo' && opcao4 == 'Azir') {
        msg.innerHTML = `Somente o primeiro e o quarto nome estão corretos.`;
        var text = 'Somente o primeiro e o quarto nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao2 == 'Malzahar' && opcao1 == 'Yasuo') {
        msg.innerHTML = `Somente o primeiro e o segundo nome estão corretos.`;
        var text = 'Somente o primeiro e o segundo nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao2 == 'Malzahar' && opcao3 == 'Garen') {
        msg.innerHTML = `Somente o segundo e o terceiro nome estão corretos.`;
        var text = 'Somente o segundo e o terceiro nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao2 == 'Malzahar' && opcao4 == 'Azir') {
        msg.innerHTML = `Somente o segundo e o quarto nome estão corretos.`;
        var text = 'Somente o segundo e o quarto nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao3 == 'Garen' && opcao1 == 'Yasuo') {
        msg.innerHTML = `Somente o primeiro e o terceiro nome estão corretos.`;
        var text = 'Somente o primeiro e o terceiro nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao3 == 'Garen' && opcao2 == 'Malzahar') {
        msg.innerHTML = `Somente o segundo e o terceiro nome estão corretos.`;
        var text = 'Somente o segundo e o terceiro nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao3 == 'Garen' && opcao4 == 'Azir') {
        msg.innerHTML = `Somente o terceiro e o quarto nome estão corretos.`;
        var text = 'Somente o terceiro e o quarto nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao4 == 'Azir' && opcao1 == 'Yasuo') {
        msg.innerHTML = `Somente o primeiro e o quarto nome estão corretos.`;
        var text = 'Somente o primeiro e o quarto nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao4 == 'Azir' && opcao2 == 'Malzahar') {
        msg.innerHTML = `Somente o segundo e o quarto nome estão corretos.`;
        var text = 'Somente o segundo e o quarto nome estão corretos.';
        acontecimentos.push(text);

    } else if (opcao4 == 'Azir' && opcao3 == 'Garen') {
        msg.innerHTML = `Somente o terceiro e o quarto nome está corretos.`;
        var text = 'Somente o terceiro e o quarto nome está corretos.';
        acontecimentos.push(text);

    } else if (opcao1 == 'Yasuo') {
        msg.innerHTML = `Somente o primeiro campeão está correto.`;
        var text = 'Somente o primeiro campeão está correto.';
        acontecimentos.push(text);

    } else if (opcao2 == 'Malzahar') {
        msg.innerHTML = `Somente o segundo campeão está correto.`;
        var text = 'Somente o segundo campeão está correto.';
        acontecimentos.push(text);

    } else if (opcao3 == 'Garen') {
        msg.innerHTML = `Somente o terceiro campeão está correto.`;
        var text = 'Somente o terceiro campeão está correto.';
        acontecimentos.push(text);

    } else if (opcao4 == 'Azir') {
        msg.innerHTML = `Somente o quarto campeão está correto.`;
        var text = 'Somente o quarto campeão está correto.';
        acontecimentos.push(text);

    } else {
        msg.innerHTML = `Todos os nomes estão incorretos.`;

    }
}

function historico() {

    msg.innerHTML = "";

    for (var cont = 0; cont < acontecimentos.length; cont++) {

        msg.innerHTML += `${cont + 1}° ${acontecimentos[cont]}<br>`;

    }

}

function imagem_de_fundo() {

    var sorteador = parseInt(Math.random() * 3);

    if (sorteador == 0) {

        imagem_fundo.style.backgroundImage = "url('Imagens/sett_fundo.jpg')";

    } else if (sorteador == 1) {

        imagem_fundo.style.backgroundImage = "url('Imagens/zed_fundo.jpg')";

    } else if (sorteador == 2) {

        imagem_fundo.style.backgroundImage = "url('Imagens/kindred_fundo.jpg')";

    }

}
