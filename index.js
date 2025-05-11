import{a as d,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="your_api_key_here",y="https://pixabay.com/api/";async function p(s){return(await d.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
            loading="lazy"
          />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function L(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search term."});return}b(),L();try{const r=await p(o);r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!"}):h(r.hits)}catch{n.error({message:"Something went wrong. Try again later."})}finally{w(),l.reset()}});
//# sourceMappingURL=index.js.map
