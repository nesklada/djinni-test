!function(){"use strict";function e(e,t){return Math.random()*(t-e)+e}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var A=0,n=new Array(t);A<t;A++)n[A]=e[A];return n}function A(e){var t="js_textClamp",A=document.querySelectorAll(".".concat(t));if(A){var n=["btn-reset","btn-text"];e&&(A=Array.prototype.slice.call(A,A.length-e)),A.forEach((function(e){if(i(e)){var A,a,o=r("Show more...",n);A=o,(a=e).parentNode.insertBefore(A,a.nextSibling),o.addEventListener("click",(function(A){e.classList.remove(t),o.remove()}))}}))}}var n,a,r=function(e,A){var n,a,r=document.createElement("button");return(n=r.classList).add.apply(n,function(e){if(Array.isArray(e))return t(e)}(a=A)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,A){if(e){if("string"==typeof e)return t(e,A);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,A):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r.textContent=e,r.setAttribute("type","button"),r},i=function(e){return e.scrollHeight>e.clientHeight},o="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nostrum modi, explicabo quia nemo facere quas velit obcaecati laboriosam, eaque debitis totam sint. Molestias, dignissimos excepturi possimus esse debitis labore.",c={page:1,limit:8,target:document.getElementById("js_infiniteCards")},d="themeIsDark_123dj1j23k";(function(){function e(e){document.documentElement.classList.add(e)}var t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=",t.onload=function(){e("avif")},t.onerror=function(){var t,A;t=function(t){e(t?"webp":"jpng")},(A=new Image).onload=function(){var e=A.width>0&&A.height>0;t(e)},A.onerror=function(){t(!1)},A.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="}})(),A(),c.target&&(n=c.target.lastChild.previousSibling,(a=new IntersectionObserver((function(t){if(!t[0].isIntersecting)return!1;a.unobserve(n),c.page++,fetch("https://picsum.photos/v2/list?page=".concat(c.page,"&limit=").concat(c.limit)).then((function(e){return e.json()})).then((function(t){if(t&&t.length){var A=["col-12","col-md-6","mb-4","d-flex","flex-column"];t.forEach((function(t){var n,a=document.createElement("div");(n=a.classList).add.apply(n,A),a.appendChild(function(t){var A=o.slice(0,e(o.length/e(2,6),o.length)),n=document.createElement("div"),a=document.createElement("img"),r=document.createElement("div"),i=document.createElement("div"),c=document.createElement("h4"),d=document.createElement("p"),l=document.createElement("div"),s=document.createElement("button"),u=document.createElement("button");return n.classList.add("card"),r.classList.add("card-media"),a.classList.add("card-media-item"),i.classList.add("card-body"),c.classList.add("card-title"),d.classList.add("card-text","js_textClamp"),l.classList.add("card-footer"),s.classList.add("btn","btn-warning"),u.classList.add("btn","btn-outline","btn-outline-secondary"),n.appendChild(r),r.appendChild(a),n.appendChild(i),n.appendChild(l),i.appendChild(c),i.appendChild(d),l.appendChild(s),l.appendChild(u),a.loading="lazy",a.src=t.download_url,c.innerText=t.author,d.innerText=A,s.innerText="Save to collection",u.innerText="Share",n}(t)),c.target.appendChild(a)}))}})).then((function(){A(c.limit),n=c.target.lastChild.previousSibling,a.observe(n)}))}))).observe(n)),function(){var e=document.getElementById("js_themeSwitcher"),t=localStorage.getItem(d);function A(e){var t=e.checked||e.target.checked;document.body.setAttribute("data-theme",t?"dark":""),localStorage.setItem(d,t?1:0)}t&&1==+t&&(e.checked=!0,A(e)),e.addEventListener("change",A)}()}();