const renderCat = document.getElementById("renderCat");
const URL = 'https://api.thecatapi.com/v1/images/search';
const URLDog = 'https://api.thedogapi.com/v1/images/search';
const btnNext = document.getElementById('siguente').addEventListener('click', next);
const btnBack = document.getElementById('anterior').addEventListener('click', back);
const btnNextDog = document.getElementById('siguenteDog').addEventListener('click', nextDog);
const btnBackDog = document.getElementById('anteriorDog').addEventListener('click', backDog);

let atras = '';
let actual = '';

let atrasDog = '';
let actualDog = '';

function next() {
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      const img = document.getElementById('gatos');
      atras = actual; // Guarda la URL actual en 'atras' antes de actualizarla
      actual = data[0].url; // Actualiza la URL actual
      img.src = actual; // Actualiza la fuente de la imagen
    })
    .catch(error => console.error('Error fetching cat image:', error));
}

function back() {
  const img = document.getElementById('gatos');
  img.src = atras; // Establece la fuente de la imagen como la URL anterior
  // Intercambia los valores de 'atras' y 'actual' para la próxima vez
  [atras, actual] = [actual, atras];
  console.log(atras);
}


function nextDog() {
  fetch(URLDog)
    .then(res => res.json())
    .then(data => {
      const img = document.getElementById('Dog');
      atrasDog = actualDog; // Guarda la URL actual en 'atras' antes de actualizarla
      actualDog = data[0].url; // Actualiza la URL actual
      img.src = actualDog; // Actualiza la fuente de la imagen
    })
    .catch(error => console.error('Error fetching cat image:', error));
}

function backDog() {
  const img = document.getElementById('Dog');
  img.src = atrasDog; // Establece la fuente de la imagen como la URL anterior
  // Intercambia los valores de 'atras' y 'actual' para la próxima vez
  [atrasDog, actualDog] = [actualDog, atrasDog];
  console.log(atrasDog);
}


