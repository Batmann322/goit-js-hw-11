import{a as p,i,S as d}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="43937771-7a09e506748022e7cd8e25746";function h(s){return p.get(`https://pixabay.com/api/?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>t.data.hits).catch(t=>console.error(t))}function m(s,t){if(s.length===0){i.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=s.map(r=>`
    <div class="image-card">
      <a href="${r.largeImageURL}"><img src="${r.webformatURL}" alt="${r.tags}" title=""/></a>
      <div class="image-info">
        <p><span>Перегляди: </span>${r.views}</p>
        <p><span>Загрузки: </span>${r.downloads}</p>
        <p><span>Лайки: </span>${r.likes}</p>
        <p><span>Коменти: </span>${r.comments}</p>
      </div>
    </div>
  `).join("");t.innerHTML=n}const c=document.querySelector("#loader"),l=document.querySelector("#search-input"),u=document.querySelector("#gallery"),y=document.querySelector("#search-form");y.addEventListener("submit",s=>{s.preventDefault(),u.innerHTML="";const t=l.value.trim();if(!t){i.warning({title:"Warning",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.classList.remove("hidden");const n=new d(".image-card a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.7});h(t).then(r=>{c.classList.add("hidden"),m(r,u),n.refresh(),l.value=""}).catch(r=>{console.error(r),i.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
