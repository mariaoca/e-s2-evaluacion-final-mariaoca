'use strict';

const search = document.querySelector('#search');
const btnSearch = document.querySelector('.btn_search');
const dates = document.querySelector('.dates_list');
const apiUrl = `http://api.tvmaze.com/search/shows?q=`;
const results = document.querySelector('.results');

function ocultar(){
    dates.classList.toggle('hidden');
}
results.addEventListener('click',ocultar);
function takeName(e) {
    dates.innerHTML = '';
    const name = search.value;
    fetch(apiUrl + name)
        .then(response => response.json())
        .then(data => {
            console.log(data);
           results.innerHTML = data.length; 
        

            for (let i = 0; i < data.length; i++) {

                const list = document.createElement('li');
                list.classList.add('list_series');
                list.setAttribute('id', data[i].show.id);


                const img = document.createElement('img');
               

                const title = document.createElement('h2');
                const nameSeries = document.createTextNode(data[i].show.name);
                title.classList.add('title_series');
                const language = document.createElement('p');
                const lang = document.createTextNode(data[i].show.language);
                title.appendChild(nameSeries);
                language.appendChild(lang);

                if ( data[i].show.image=== null) {
                    img.src = `https://via.placeholder.com/210x295/cccccc/666666/?text=TV`;
                } else {
                    img.src = data[i].show.image.medium;
                }

                list.appendChild(img);
                list.appendChild(title);
                list.appendChild(language);
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
    if(localStorage.getItem(seriesFav.id) == 'favorito'){
        localStorage.removeItem(seriesFav.id);
    } else{
    localStorage.setItem(seriesFav.id, 'favorito')
    }
    seriesFav.classList.toggle('favorite_item');
}
btnSearch.addEventListener('click', takeName);      


