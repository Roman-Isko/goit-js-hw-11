import{a as u,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="50364756-88b1a7bffdb2f2af78bd92cba",p="https://pixabay.com/api/";async function y(o){return(await u.get(p,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(r=>`
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
    `).join("");l.insertAdjacentHTML("beforeend",s),g.refresh()}function b(){l.innerHTML=""}function L(){d.classList.remove("is-hidden")}function w(){d.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();if(!s){n.warning({message:"Please enter a search term."});return}b(),L();try{const r=await y(s);r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!"}):h(r.hits)}catch{n.error({message:"Something went wrong. Try again later."})}finally{w(),c.reset()}});
//# sourceMappingURL=index.js.map
