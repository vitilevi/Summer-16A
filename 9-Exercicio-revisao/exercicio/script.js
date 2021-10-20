const fetchJoke = async () => {
  const obj = {
    headers: {
      accept: 'application/json',
    },
  }

  // try {
  //   const response = await fetch('https://icanhazdadjoke.com/', obj);
  //   const value = await response.json();
  //   console.log(value.joke)
  //   return value.joke;
  // } catch (error) {
  //   console.log(error)
  // }
  
  return fetch('https://icanhazdadjoke.com/', obj)
    .then((response) => response.json())
    .then((value) => value.joke)
    .catch((error) => console.log(error));
}

const createJokeElement = (joke) => {
  const getPiadasSection = document.querySelector('#piadas');
  const phrase = document.createElement('h2');
  phrase.innerText = joke;
  phrase.classList.add('piada');
  getPiadasSection.appendChild(phrase);
  return phrase;
}

const buildJoke = async () => {
  const joke = await fetchJoke();
  return createJokeElement(joke);
}

const saveToLocalStorage = () => {
  const piadas = {};
  const jokes = document.querySelectorAll('.piada');
  jokes.forEach((joke, index) => {
    piadas[`joke${index + 1}`] = joke.innerText;
  });
  localStorage.setItem('jokes', JSON.stringify(piadas));
}

const getFromLocalStorage = () => {
  const jokeList = JSON.parse(localStorage.getItem('jokes'));
  if (jokeList) {
    Object.values(jokeList).forEach((joke) => {
      createJokeElement(joke)
    });
  }
}

const clearLocalStorage = () => {
  localStorage.removeItem('jokes');
  window.location.reload();
}

window.onload = async () => {
  const newJokeBtn = document.querySelector('#new-joke');
  const saveBtn = document.querySelector('#save');
  const cleanBtn = document.querySelector('#clean');
  await buildJoke();
  getFromLocalStorage();
  newJokeBtn.addEventListener('click', buildJoke);
  saveBtn.addEventListener('click', saveToLocalStorage);
  cleanBtn.addEventListener('click', clearLocalStorage);
}