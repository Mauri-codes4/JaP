const DATA = [
  { name: "Laura", lastname: "Hightower" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Joaquina", lastname: "Hand" },
  { name: "Maria", lastname: "White" },
];

// Escribe el código necesario aquí
const container = document.getElementById('container');

function MostrarData(){
  DATA.forEach(person => {
    const paragraph = document.createElement('p')
    paragraph.textContent = `${person.name} ${person.lastname}`;
    container.appendChild(paragraph);
  });
}

document.addEventListener('DOMContentLoaded', MostrarData);
//
