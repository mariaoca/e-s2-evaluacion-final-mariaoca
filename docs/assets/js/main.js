"use strict";const search=document.querySelector("#search"),btnSearch=document.querySelector(".btn_search"),dates=document.querySelector(".dates_list"),apiUrl="http://api.tvmaze.com/search/shows?q=";function takeName(e){dates.innerHTML="";const t=search.value;fetch(apiUrl+t).then(e=>e.json()).then(e=>{for(let t=0;t<e.length;t++){const a=document.createElement("li");a.classList.add("list_series"),a.setAttribute("id",e[t].show.id);const c=document.createElement("img"),o=document.createElement("h2"),s=document.createTextNode(e[t].show.name);o.classList.add("title_series"),o.appendChild(s),null===e[t].show.image?c.src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV":c.src=e[t].show.image.medium,a.appendChild(c),a.appendChild(o),"favorito"==localStorage.getItem(a.id)&&a.classList.toggle("favorite_item"),dates.appendChild(a),a.addEventListener("click",addFavorite)}})}function addFavorite(e){const t=e.currentTarget;"favorito"==localStorage.getItem(t.id)?localStorage.removeItem(t.id):localStorage.setItem(t.id,"favorito"),t.classList.toggle("favorite_item")}btnSearch.addEventListener("click",takeName);