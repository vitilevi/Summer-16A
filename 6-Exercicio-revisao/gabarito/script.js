const span = document.querySelector('#nome');
const okBtn = document.querySelector('#form-ok');

okBtn.addEventListener('click', function() {
  const nomeInput = document.querySelector('#nome-input');
  const passwordInput = document.querySelector('#password-input')
  if(nomeInput.value === "teste" && passwordInput.value === "123456") {
    alert('Olá pessoa, seja bem-vinda');
    nomeInput.value = "";
    passwordInput.value = "";
  } else {
    alert('Senha ou usuário errados');
    nomeInput.value = "";
    passwordInput.value = "";
  }
});
