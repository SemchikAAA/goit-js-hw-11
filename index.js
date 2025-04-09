import{a as m,S as p,i as s}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="49684635-7a6aa23e2b6de301ea62c53b0";function h(i){return m.get(`${g}`,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");var L=new p(".gallery-link",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:d,downloads:f})=>`<li class="gallery-item">
    <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${e}"
    />
   </a>
    <div class="info">
      <p>Likes: ${t}</p>
      <p>Views: ${n}</p>
      <p>Comments: ${d}</p>
      <p>Downloads: ${f}</p>
    </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){l.innerHTML=""}function v(){u.classList.remove("hiden")}function c(){setTimeout(()=>{u.classList.add("hiden")},1e3)}const $=document.querySelector(".form");$.addEventListener("submit",q);function q(i){i.preventDefault(),v();const r=i.currentTarget.elements["search-text"].value.trim();if(r===""){s.info({title:"Caution",message:"You forgot important data",position:"topLeft"}),c();return}h(r).then(o=>{o.data.hits.length||s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const a=o.data.hits;S(),b(a)}).catch(o=>console.log(o)).finally(c())}
//# sourceMappingURL=index.js.map
