!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(){var n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=r.tag,o=void 0===i?"div":i,a=r.classList,c=void 0===a?null:a,l=r.attrs,u=void 0===l?null:l,s=r.text,d=void 0===s?null:s,f=document.createElement(o);return null!=c&&c.length&&(Array.isArray(c)?(n=f.classList).add.apply(n,e(c)):f.classList.add(c)),u&&"object"===t(u)&&Object.keys(u).forEach((function(t){f.setAttribute(t,u[t])})),d&&(f.innerText=d),f}function i(t,e){return Math.random()*(e-t)+t}function o(t,e){e.parentNode.insertBefore(t,e.nextSibling)}const a=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},c="object"==typeof global&&global&&global.Object===Object&&global;var l="object"==typeof self&&self&&self.Object===Object&&self;const u=c||l||Function("return this")(),s=function(){return u.Date.now()};var d=/\s/,f=/^\s+/;const p=u.Symbol;var m=Object.prototype,b=m.hasOwnProperty,v=m.toString,h=p?p.toStringTag:void 0,y=Object.prototype.toString,g=p?p.toStringTag:void 0;var j=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,L=/^0o[0-7]+$/i,w=parseInt;const x=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?function(t){var e=b.call(t,h),n=t[h];try{t[h]=void 0;var r=!0}catch(t){}var i=v.call(t);return r&&(e?t[h]=n:delete t[h]),i}(t):function(t){return y.call(t)}(t)}(t)}(t))return NaN;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&d.test(t.charAt(e)););return e}(t)+1).replace(f,""):t}(t);var n=S.test(t);return n||L.test(t)?w(t.slice(2),n?2:8):j.test(t)?NaN:+t};var A=Math.max,C=Math.min,O="js_textClamp",T=O+"Toggler",E="hide",$=window.innerWidth;function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=document.querySelectorAll(".".concat(O));if(e){var n=Array.prototype.slice.call(e,t?e.length-t:0);n.forEach((function(t){var e=t.parentNode.querySelector("."+T),n=q(t);if(e)n?e.classList.remove(E):e.classList.add(E);else if(n){var i=r({tag:"button",classList:["btn-reset","btn-text",T],text:"Show more...",attrs:{type:"button"}});o(i,t),i.addEventListener("click",(function(e){t.classList.remove(O),i.remove()}))}}))}}var k,N,M,q=function(t){return t.scrollHeight>t.clientHeight},W="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nostrum modi, explicabo quia nemo facere quas velit obcaecati laboriosam, eaque debitis totam sint. Molestias, dignissimos excepturi possimus esse debitis labore.",_={page:1,limit:8,$out:document.getElementById("js_infiniteCards")},B=function(t){return t?t.lastChild.previousSibling:null},z=document.getElementById("js_themeSwitcher");function H(t){z.checked=t||!1,U(z)}function U(t){var e=(t.target?t.target.checked:t.checked)||!1;document.body.setAttribute("data-theme",e?"dark":"")}setTimeout(I,300),window.addEventListener("resize",function(t,e,n){var r,i,o,c,l,u,d=0,f=!1,p=!1,m=!0;function b(e){var n=r,o=i;return r=i=void 0,d=e,c=t.apply(o,n)}function v(t){return d=t,l=setTimeout(y,e),f?b(t):c}function h(t){var n=t-u;return void 0===u||n>=e||n<0||p&&t-d>=o}function y(){var t=s();if(h(t))return g(t);l=setTimeout(y,function(t){var n=e-(t-u);return p?C(n,o-(t-d)):n}(t))}function g(t){return l=void 0,m&&r?b(t):(r=i=void 0,c)}function j(){var t=s(),n=h(t);if(r=arguments,i=this,u=t,n){if(void 0===l)return v(u);if(p)return clearTimeout(l),l=setTimeout(y,e),b(u)}return void 0===l&&(l=setTimeout(y,e)),c}return e=x(e)||0,a(n)&&(f=!!n.leading,o=(p="maxWait"in n)?A(x(n.maxWait)||0,e):o,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==l&&clearTimeout(l),d=0,r=u=i=l=void 0},j.flush=function(){return void 0===l?c:g(s())},j}((function(){$!==window.innerWidth&&($=window.innerWidth,I())}),200)),_.$out&&(N=B(_.$out),(M=new IntersectionObserver((function(t){if(!t[0].isIntersecting)return!1;M.unobserve(N),_.page++,fetch("https://picsum.photos/v2/list?page=".concat(_.page,"&limit=").concat(_.limit)).then((function(t){return t.json()})).then((function(t){t&&t.length&&t.forEach((function(t){var e=r({classList:["col-12","col-md-6","mb-4","d-flex","flex-column"]});e.appendChild(function(t){var e=W.slice(0,i(W.length/i(2,6),W.length)),n=r({tag:"figure",classList:"card"}),o=r({tag:"img",classList:"card-media-item",attrs:{loading:"lazy",src:t.download_url,alt:t.author}}),a=r({classList:"card-media"}),c=r({classList:"card-body"}),l=r({tag:"h4",classList:"card-title",text:t.author}),u=r({tag:"p",classList:["card-text","js_textClamp"],text:e}),s=r({classList:"card-footer"}),d=r({tag:"button",classList:["btn","btn-warning"],attrs:{type:"button"},text:"Save to collection"}),f=r({tag:"button",classList:["btn","btn-outline","btn-outline-secondary"],attrs:{type:"button"},text:"Share"});return n.appendChild(a).appendChild(o),n.appendChild(c),n.appendChild(s),c.appendChild(l),c.appendChild(u),s.appendChild(d),s.appendChild(f),n}(t)),_.$out.appendChild(e)}))})).then((function(){I(_.limit),(N=B(_.$out))&&M.observe(N)}))}))).observe(N)),H((k=window.matchMedia("(prefers-color-scheme: dark)")).matches),k.addEventListener("change",(function(t){H(t.matches)})),z.addEventListener("change",U)}();