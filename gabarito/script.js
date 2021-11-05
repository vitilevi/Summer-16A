const fetchJoke = () => {
  const header = {
    headers: {
      accept: 'application/json',
    }
  }
  return fetch('https://icanhazdadjoke.com/', header)
    .then((response) => response.json())
    .then((result) => result.joke)
}

const createJokeElement = (joke) => {
  const bodyPiadas = document.querySelector('#piadas');
  const h1 = document.createElement('h1');
  h1.innerText = joke;
  h1.classList.add('piada');
  bodyPiadas.appendChild(h1);
  return h1;
}

const buildJoke = async () => {
  const joke = await fetchJoke();
  createJokeElement(joke);
}

const getFromLocalStorage = () => {
  const piadas = localStorage.getItem('piadas');
  if (piadas) {
    const parsedPiadas = JSON.parse(piadas);
    Object.keys(parsedPiadas).forEach((piada) => {
      createJokeElement(parsedPiadas[piada])
    })
  }
}

const saveToLocalStorage = () => {
  const objJoke = {};
  const getAllJokes = document.querySelectorAll('.piada');
  getAllJokes.forEach((joke, index) => {
    const jokeText = joke.innerText;
    objJoke[`joke${index}`] = jokeText;
  })
  localStorage.setItem('piadas', JSON.stringify(objJoke));
}

const cleanLocalStorage = () => {
  localStorage.removeItem('piadas');
  window.location.reload()
}

window.onload = async () => {
  const newJokeBtn = document.querySelector('#new-joke');
  const saveBtn = document.querySelector('#save');
  const cleanBtn = document.querySelector('#clean');
  await buildJoke();
  getFromLocalStorage()
  cleanBtn.addEventListener('click', cleanLocalStorage);
  newJokeBtn.addEventListener('click', buildJoke);
  saveBtn.addEventListener('click', saveToLocalStorage);
}