/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // 1. Declarar el listado de tareas
  const todos = [
    {
      "name": "Jhon",
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "pic": "https://imagenes.noticiasrcn.com/ImgNoticias/meme%20del%20mono%20insatisfecho.jpeg?VersionId=PJ1PGFFyJEM6V4hrSH0Gmcprvqy0x_ck",
    },
    {
      "name": "Ringo",
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false,
      "pic": "https://i.pinimg.com/236x/ef/34/86/ef34862c33c40f9ce27eaf47e8bdf973.jpg"
    },
    {
      "name": "George",
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false,
      "pic": "https://petslife.com.mx/wp-content/uploads/2022/08/memes-2.jpg"
    },
    {
      "name": "George",
      "id": 4,
      "title": "et porro tempora",
      "completed": true,
      "pic": " https://i.chzbgr.com/original/8383144448/h7DFB14D7/bromas-perros-memes-animales-8383144448"
    },/* 
    {
      "name": "Jhon",
      "id": 5,
      "title": "laboriosam mollitia et enim quasi",
      "completed": false
    },
    {
      "name": "Paul",
      "id": 6,
      "title": "qui ullam ratione quibusdam",
      "completed": false
    },
    {
      "name": "Ringo",
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "name": "Paul",
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "name": "Jhon",
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "name": "George",
      "id": 10,
      "title": "illo est ratione doloremque quia",
      "completed": true
    }, */
  ]
  // 2. Declarar la variable donde voy a armar el html entero
  let todosHTML = ''
  // 2. Recorrer el array con un .map()
  todos.map((item, id) => {
    todosHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${item.pic}" class="card-img-top img-thumbnail" style="height: 30vw; object-fit: cover" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Con el ID: ${item.id} </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> 
    `
  })
  todosHTML += ''
  console.log(todosHTML);

  // n. Capturar el elemento html en una variable
  const listado = document.querySelector('#pills-home')
  listado.innerHTML = todosHTML


 /*  const listado = document.querySelector('#pills-home')
  listado.innerHTML = todosHTML */

};
