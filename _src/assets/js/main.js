'use strict';
let arrayFavorito = [];
const search = document.querySelector('#search');
const btnSearch = document.querySelector('.btn_search');
const dates = document.querySelector('.dates_list');
const apiUrl = `http://api.tvmaze.com/search/shows?q=`;

function takeName(e) {
    dates.innerHTML = '';
    const name = search.value;
    console.log(name, 'hola');
    fetch(apiUrl + name)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {

                const list = document.createElement('li');
                list.classList.add('list_series');
                list.setAttribute('id', data[i].show.id);


                const img = document.createElement('img');
               

                const title = document.createElement('h2');
                const nameSeries = document.createTextNode(data[i].show.name);
                title.classList.add('title_series');
                title.appendChild(nameSeries);

                if ( data[i].show.image=== null) {
                    img.src = `https://via.placeholder.com/210x295/cccccc/666666/?text=TV`;
                } else {
                    img.src = data[i].show.image.medium;
                }

                list.appendChild(img);
                list.appendChild(title);
                if(localStorage.getItem(list.id) == 'favorito'){
                    list.classList.toggle('favorite_item');
                }
                dates.appendChild(list);
                list.addEventListener('click',addFavorite);
            }
        });
}
function addFavorite(e) {
    const seriesFav = e.currentTarget;
    const id = document.createTextNode(`${data[i].show.id}`);
    const savedFavoritos = JSON.parse(localStorage.getItem('favoritos'));
     savedFavoritos.indexOf(id);
    if(localStorage.getItem(seriesFav.id) == 'favorito'){
        localStorage.removeItem(seriesFav.id);
    } else{
    localStorage.setItem('favorito',JSON.stringify(arrayFavorito));
    }
    seriesFav.classList.toggle('favorite_item');
}
btnSearch.addEventListener('click', takeName);  




