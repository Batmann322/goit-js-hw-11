import{a as p,i as l,S as f}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="43937771-7a09e506748022e7cd8e25746";function m(s){return p.get(`https://pixabay.com/api/?key=${h}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.data.hits).catch(r=>console.error(r))}function g(s,r){if(s.length===0){l.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=s.map(o=>`
    <div class="image-card">
      <a href="${o.largeImageURL}"><img src="${o.webformatURL}" alt="${o.tags}" title=""/></a>
      <div class="image-info">
        <p><span>Перегляди: </span>${o.views}</p>
        <p><span>Загрузки: </span>${o.downloads}</p>
        <p><span>Лайки: </span>${o.likes}</p>
        <p><span>Коменти: </span>${o.comments}</p>
      </div>
    </div>
  `).join("");r.innerHTML=n}const y=document.querySelector("#search-form"),u=document.querySelector("#search-input"),a=document.querySelector("#gallery"),d=document.querySelector("#loader");let c;y.addEventListener("submit",s=>{s.preventDefault();const r=u.value.trim();if(!r){l.warning({title:"Warning",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}d.classList.remove("hidden"),m(r).then(n=>{if(d.classList.add("hidden"),a.innerHTML="",g(n,a),a.querySelectorAll(".image-card a").length>0){if(c=new f(".image-card a",{}),s.target.nodeName!=="IMG")return;c?c.refresh():console.error("Lightbox is not initialized.")}else console.error("No images found for lightbox to handle.");u.value=""}).catch(n=>{console.error(n),l.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
