validation.init('#my-form');

document.querySelector('#btn').addEventListener('click', function(e) {
  e.preventDefault();
  console.log(validation.validate());
})