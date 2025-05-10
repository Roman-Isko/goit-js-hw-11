import{a as d,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="your_api_key_here",p="https://pixabay.com/api/";async function y(s){return(await d.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a");function g(s){const o=s.map(r=>`
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
        <div>
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </a>`).join("");l.innerHTML=o,h.refresh()}function L(){l.innerHTML=""}function w(){u.classList.add("visible")}function v(){u.classList.remove("visible")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search term."});return}L(),w();try{const r=await y(o);r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!"}):g(r.hits)}catch{n.error({message:"Something went wrong. Try again later."})}finally{v(),c.reset()}});
//# sourceMappingURL=index.js.map
