!function(){var e,t,o,n,d;new Swiper(".mySwiper",{spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}});"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),document.getElementById("modal-buy-now-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-buy-now-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-read-more-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-read-more-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-location-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-location-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-franchise-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-franchise-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-ingredients-top-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-ingredients-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-ingredients-mid-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-ingredients-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-ingredients-bot-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-ingredients-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),d=function(){var e="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),o.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",d),n.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),o.classList.remove("is-open"),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.31deabb9.js.map
