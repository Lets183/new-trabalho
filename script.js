
const usuarios = {
      "Leticia": "000",
      "Nicole": "111",
      "Rayane": "222",
    };
function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;


  if (usuarios[usuario] && usuario[usuario] === senha) {
    window.location.href = "index2.html"; 
  } else {
    document.getElementById("erro").innerText = "Usuário ou senha incorretos!";
  }
}