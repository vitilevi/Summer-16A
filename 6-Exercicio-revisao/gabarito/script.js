const span = document.querySelector('#nome');
const okBtn = document.querySelector('#form-ok');

okBtn.addEventListener('click', function() {
  const formInput = document.querySelector('#nome-input');
  if(formInput.value.length < 3) {
    alert('Insira um nome válido!');
  } else {
    span.innerHTML = `Olá, ${formInput.value}`;
    formInput.value = "";
  }
});
