!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var A=0,n=new Array(e);A<e;A++)n[A]=t[A];return n}function n(){var A,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.tag,o=void 0===a?"div":a,r=n.classList,i=void 0===r?null:r,c=n.attrs,l=void 0===c?null:c,s=n.text,u=void 0===s?null:s,d=document.createElement(o);return null!=i&&i.length&&(Array.isArray(i)?(A=d.classList).add.apply(A,e(i)):d.classList.add(i)),l&&"object"===t(l)&&Object.keys(l).forEach((function(t){d.setAttribute(t,l[t])})),u&&(d.innerText=u),d}function a(t,e){return Math.random()*(e-t)+t}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e="js_textClamp",A=document.querySelectorAll(".".concat(e));if(A){var a=Array.prototype.slice.call(A,A.length-t);a.forEach((function(t){if(r(t)){var A=n({tag:"button",classList:["btn-reset","btn-text"],text:"Show more...",attrs:{type:"button"}});i(A,t),A.addEventListener("click",(function(n){t.classList.remove(e),A.remove()}))}}))}}var r=function(t){return t.scrollHeight>t.clientHeight};function i(t,e){e.parentNode.insertBefore(t,e.nextSibling)}var c,l,s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nostrum modi, explicabo quia nemo facere quas velit obcaecati laboriosam, eaque debitis totam sint. Molestias, dignissimos excepturi possimus esse debitis labore.",u={page:1,limit:8,target:document.getElementById("js_infiniteCards")},d="themeIsDark_123dj1j23k";(function(){function t(t){document.documentElement.classList.add(t)}var e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=",e.onload=function(){t("avif")},e.onerror=function(){var e,A;e=function(e){t(e?"webp":"jpng")},(A=new Image).onload=function(){var t=A.width>0&&A.height>0;e(t)},A.onerror=function(){e(!1)},A.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="}})(),o(),u.target&&(c=u.target.lastChild.previousSibling,(l=new IntersectionObserver((function(t){if(!t[0].isIntersecting)return!1;l.unobserve(c),u.page++,fetch("https://picsum.photos/v2/list?page=".concat(u.page,"&limit=").concat(u.limit)).then((function(t){return t.json()})).then((function(t){t&&t.length&&t.forEach((function(t){var e=n({classList:["col-12","col-md-6","mb-4","d-flex","flex-column"]});e.appendChild(function(t){var e=s.slice(0,a(s.length/a(2,6),s.length)),A=n({classList:"card"}),o=n({tag:"img",classList:"card-media-item",attrs:{loading:"lazy",src:t.download_url}}),r=n({classList:"card-media"}),i=n({classList:"card-body"}),c=n({tag:"h4",classList:"card-title",text:t.author}),l=n({tag:"p",classList:["card-text","js_textClamp"],text:e}),u=n({classList:"card-footer"}),d=n({tag:"button",classList:["btn","btn-warning"],attrs:{type:"button"},text:"Save to collection"}),m=n({tag:"button",classList:["btn","btn-outline","btn-outline-secondary"],attrs:{type:"button"},text:"Share"});return A.appendChild(r).appendChild(o),A.appendChild(i),A.appendChild(u),i.appendChild(c),i.appendChild(l),u.appendChild(d),u.appendChild(m),A}(t)),u.target.appendChild(e)}))})).then((function(){o(u.limit),c=u.target.lastChild.previousSibling,l.observe(c)}))}))).observe(c)),function(){var t=document.getElementById("js_themeSwitcher"),e=localStorage.getItem(d);function A(t){var e=t.checked||t.target.checked;document.body.setAttribute("data-theme",e?"dark":""),localStorage.setItem(d,e?1:0)}e&&1==+e&&(t.checked=!0,A(t)),t.addEventListener("change",A)}()}();