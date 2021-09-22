const entrarBtn = document.querySelector('#form-entrar');
const nomeInput = document.querySelector('#name-input');
const senhaInput = document.querySelector('#password-input');
const content = document.querySelector('.main-wrapper');
const dataSpan = document.querySelector('#data');

const usuario = "teste";
const senha = "123456";

function appendData() {
  const createDate = new Date();
  const day = createDate.getDate();
  const month = createDate.getMonth();
  const year = createDate.getFullYear()
  const ano = `${day}/${month + 1}/${year}`
  dataSpan.innerText = ano;
  console.log(ano)
}

function checkData() {
  const inputNome = nomeInput.value.trim();
  const inputSenha = senhaInput.value.trim();
  if(inputNome === usuario && inputSenha === senha) {
    alert('Login efetuado');
    nomeInput.value = "";
    senhaInput.value = "";
    content.style.display = "flex";
    appendData()
  } else {
    alert('Nome ou senha errados.');
  }
}

entrarBtn.addEventListener('click', checkData)