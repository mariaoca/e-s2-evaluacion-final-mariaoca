'use strict';

const search = document.querySelector('#search');
const btnSearch = document.querySelector('.btn_search');
const dates = document.querySelector('.dates');
const apiUrl = `http://api.tvmaze.com/search/shows?q=`;
const seriesList = document.querySelector('.list_series');

function takeName() {
    const name = search.value;
    fetch(apiUrl + name)
        .then(response => response.json())
        .then(data => {
            let items = '';
            for (let i = 0; i < data.length; i++) {
                const nameSeries = data[i].show.name;
                const imageSeries = data[i].show.image;
                const imgNull = `https://via.placeholder.com/210x295/cccccc/666666/?text=TV`;
                if (imageSeries === null) {
                    items += `<li class="list_series_null">
                    <image src = "${imgNull}" class="img">
                    <h2 class="title_series">${nameSeries}</h2>
                    </li>`;
                } else {
                    items += `<li class="list_series"> 
                    <image src ="${imageSeries.medium}" class="img">
                    <h2 class ="title_series">${nameSeries}</h2>
                    </li>`;
                }
            }
            dates.innerHTML = items;

        })
}
btnSearch.addEventListener('click', takeName);

//Recoger texto de búsqueda en el input
//Buscar en la API la búsqueda
//mostrar resultados con foto y título
//marcar como favorito
//guardar en LocalStorage los favoritos

