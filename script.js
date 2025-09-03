document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagem-erro');

    mensagemErro.classList.add('hidden');

    const credenciais = {
        "Leticia": "000",
        "Rayane": "111",
        "Nicole": "222"
    };

    if (credenciais[usuario] === senha) {
        window.location.href = 'produtos.html';
    } else {
        mensagemErro.textContent = 'Usuário ou senha incorretos.';
        mensagemErro.classList.remove('hidden');
    }
});
