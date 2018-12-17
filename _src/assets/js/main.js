'use strict';

const search = document.querySelector('#search');
const btnSearch = document.querySelector('.btn_search');
const dates = document.querySelector('.dates');
const apiUrl = `http://api.tvmaze.com/search/shows?q=`;

function takeName (){
    const name = search.value;
    fetch(apiUrl + name)
    .then(response => response.json())
    .then(data=>{
        for(let i=0; i<data.length; i++){
        const nameSeries = data[i].show.name;
        
        }
        // const showImage = 
       
     })
}
btnSearch.addEventListener('click',takeName);
//Recoger texto de búsqueda en el input
//Buscar en la API la búsqueda
//mostrar resultados con foto y título
//marcar como favorito
//guardar en LocalStorage los favoritos

