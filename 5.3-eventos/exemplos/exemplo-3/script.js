// exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function createDaysList() {
  const daysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const listItem = document.createElement('li');
    const day = dezDaysList[index];
    listItem.innerText = day;
    listItem.classList.add('day');
    if (day === 24 || day === 25 || day === 31) {
      listItem.classList.add('holiday');
    } if (day === 4 || day === 11 || day === 18 || day === 25) {
      listItem.classList.add('friday');
    }
    daysList.appendChild(listItem);
  }
}
createDaysList();

// exercicio 2
function createHolidayButton(string) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = string;
  buttonContainer.appendChild(button);
}
createHolidayButton('Feriados');

// exercicio 3
function changeHolidayBackground() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === 'white') {
        getHolidays[index].style.backgroundColor = 'unset';
      } else {
        getHolidays[index].style.backgroundColor = 'white';
      }
    }
  })
}
changeHolidayBackground();

// exercicio 4
function createSextou(sextouString) {
  const sextouButton = document.createElement('button');
  const getButtonContainer = document.querySelector('.buttons-container');
  sextouButton.innerText = sextouString;
  sextouButton.setAttribute('id', 'btn-friday');
  getButtonContainer.appendChild(sextouButton);
}
createSextou('Sexta-feira');

// exercicio 5
function changeFridayText() {
  const fridayButton = document.querySelector('#btn-friday');
  const fridayDayList = document.querySelectorAll('.friday');
  const fridayText = '#Sextouu!';
  const fridaysArray = [];
  for (let index = 0; index < fridayDayList.length; index += 1) {
    fridaysArray.push(fridayDayList[index].innerText);
  }

  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridayDayList.length; index += 1) {
      if (fridayDayList[index].innerText === fridayText) {
        fridayDayList[index].innerText = fridaysArray[index];
      } else {
        fridayDayList[index].innerText = fridayText;
      }
    }
  })
}
changeFridayText();

// exercicio 6
function changeTextSize() {
  const dayList = document.querySelectorAll('.day');
  for (let index = 0; index < dayList.length; index += 1) {
    dayList[index].addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '3.5em';
    });

    dayList[index].addEventListener('mouseleave', function(event) {
      event.target.style.fontSize = 'unset';
    })
  }
}
changeTextSize();

// exercicio 7
function createTask(string) {
  let task = document.createElement('span');
  task.innerHTML = string;
  let getMyTasks = document.querySelector('.my-tasks');
  getMyTasks.appendChild(task);
}
createTask('cozinhar');

// exercicio 8
function createColorSubtitle(color) {
  let colorTask = document.createElement('div');
  colorTask.className = 'task';
  colorTask.style.backgroundColor = color;
  let getMyTasks = document.querySelector('.my-tasks');
  getMyTasks.appendChild(colorTask);
}
createColorSubtitle('red');

// exercicio 9
function changeSelectedTask() {
  let tasks = document.querySelector('.task');
  tasks.addEventListener('click', function(event) {
    if (event.target.classList.length === 1) {
      event.target.classList.add('selected');
    } else {
      event.target.classList.remove('selected');
    }
  })
}
changeSelectedTask();

// exercicio 10
function changeBackgroundColorToSelectedTask() {
  let days = document.querySelectorAll('.day');
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('click', function(event) {
      let selectedTask = document.querySelector('.selected');
      let color = selectedTask.style.backgroundColor;
      if (event.target.style.color === color) {
        event.target.style.color = 'rgb(119,119,119)';
      } else {
        event.target.style.color = color;
      }
    });
  }
}
changeBackgroundColorToSelectedTask();

// bonus
function addAppointment(event) {
  let text = document.querySelector('#task-input');
  if (event.keyCode === 13 || event.type === 'click') {
    if (text.value.length === 0) {
      alert('Erro!');
    } else {
      let getList = document.querySelector('.task-list');
      let listItem = document.createElement('li');
      listItem.innerHTML = text.value;  
      getList.appendChild(listItem);
    }
  }
}

function createEventListeners() {
  let button = document.querySelector('#btn-add');
  button.addEventListener('click', addAppointment);
  let inputText = document.querySelector('#task-input');
  inputText.addEventListener('keyup', addAppointment);
}
createEventListeners();