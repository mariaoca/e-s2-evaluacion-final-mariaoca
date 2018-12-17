'use strict';

const search = document.querySelector('#search');
const btnSearch = document.querySelector('.btn_search');
const dates = document.querySelector('.dates_list');
const apiUrl = `http://api.tvmaze.com/search/shows?q=`;

function takeName(e) {
    e.preventDefault()
    dates.innerHTML = '';
    const name = search.value;
    console.log(name, 'hola');
    fetch(apiUrl + name)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {

                const list = document.createElement('li');
                list.classList.add('list_series');


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

                dates.appendChild(list);
                list.addEventListener('click',addFavorite);
            }
        });
}
function addFavorite(e) {
    const seriesList = e.currentTarget;
    seriesList.classList.toggle('favorite_item');
}
btnSearch.addEventListener('click', takeName);        
