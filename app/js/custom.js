/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/_init.js":
/*!*************************!*\
  !*** ./app/js/_init.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_config_avifWebpBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/config/avifWebpBackground */ \"./app/js/component/config/avifWebpBackground.js\");\n/* harmony import */ var _component_js_infiniteCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/js_infiniteCards */ \"./app/js/component/js_infiniteCards.js\");\n/* harmony import */ var _component_js_textClamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/js_textClamp */ \"./app/js/component/js_textClamp.js\");\n/* harmony import */ var _component_js_themeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/js_themeSwitcher */ \"./app/js/component/js_themeSwitcher.js\");\n\n\n\n\n\n(function () {\n  (0,_component_config_avifWebpBackground__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_component_js_textClamp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_component_js_infiniteCards__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_component_js_themeSwitcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})();\n\n//# sourceURL=webpack://myproject/./app/js/_init.js?");

/***/ }),

/***/ "./app/js/component/config/avifWebpBackground.js":
/*!*******************************************************!*\
  !*** ./app/js/component/config/avifWebpBackground.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  function htmlClass(attr) {\n    document.documentElement.classList.add(attr);\n  }\n\n  var avif = new Image();\n  avif.src = \"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=\";\n\n  avif.onload = function () {\n    htmlClass(\"avif\");\n  };\n\n  avif.onerror = function () {\n    checkWebp(function (isWebp) {\n      if (isWebp) {\n        htmlClass(\"webp\");\n        return;\n      }\n\n      htmlClass(\"jpng\");\n    });\n  };\n\n  function checkWebp(cbFn) {\n    var img = new Image();\n\n    img.onload = function () {\n      var result = img.width > 0 && img.height > 0;\n      cbFn(result);\n    };\n\n    img.onerror = function () {\n      cbFn(false);\n    };\n\n    img.src = \"data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==\";\n  }\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/config/avifWebpBackground.js?");

/***/ }),

/***/ "./app/js/component/config/localStorageAnchors.js":
/*!********************************************************!*\
  !*** ./app/js/component/config/localStorageAnchors.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\nvar theme = 'themeIsDark_123dj1j23k';\n\n//# sourceURL=webpack://myproject/./app/js/component/config/localStorageAnchors.js?");

/***/ }),

/***/ "./app/js/component/config/randomInt.js":
/*!**********************************************!*\
  !*** ./app/js/component/config/randomInt.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ randomInt)\n/* harmony export */ });\nfunction randomInt(min, max) {\n  return Math.random() * (max - min) + min;\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/config/randomInt.js?");

/***/ }),

/***/ "./app/js/component/js_infiniteCards.js":
/*!**********************************************!*\
  !*** ./app/js/component/js_infiniteCards.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_randomInt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/randomInt */ \"./app/js/component/config/randomInt.js\");\n/* harmony import */ var _js_textClamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_textClamp */ \"./app/js/component/js_textClamp.js\");\n\n\nvar state = {\n  page: 1,\n  limit: 8,\n  target: document.getElementById('js_infiniteCards')\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  if (!state.target) {\n    return;\n  }\n\n  infiniteScroll();\n}\n\nfunction infiniteScroll() {\n  var obserTarget = state.target.lastChild.previousSibling;\n  var observer = new IntersectionObserver(function (entries) {\n    if (!entries[0].isIntersecting) {\n      return false;\n    }\n\n    observer.unobserve(obserTarget);\n    state.page++;\n    setCardsToRow(state.target).then(function () {\n      (0,_js_textClamp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.limit);\n      obserTarget = state.target.lastChild.previousSibling;\n      observer.observe(obserTarget);\n    });\n  });\n  observer.observe(obserTarget);\n  console.log(state.target.querySelectorAll('div:last-child'));\n}\n\nfunction getCards() {\n  return fetch(\"https://picsum.photos/v2/list?page=\".concat(state.page, \"&limit=\").concat(state.limit)).then(function (data) {\n    return data.json();\n  });\n}\n\nfunction setCardsToRow() {\n  return getCards().then(function (data) {\n    var colClasses = ['col-12', 'col-md-6', 'mb-4', 'd-flex', 'flex-column'];\n    data.forEach(function (card) {\n      var _colNode$classList;\n\n      var colNode = document.createElement('div');\n\n      (_colNode$classList = colNode.classList).add.apply(_colNode$classList, colClasses);\n\n      colNode.appendChild($card(card));\n      state.target.appendChild(colNode);\n    });\n  });\n}\n\nfunction $card(data) {\n  var loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nostrum modi, explicabo quia nemo facere quas velit obcaecati laboriosam, eaque debitis totam sint. Molestias, dignissimos excepturi possimus esse debitis labore.';\n  var pText = loremText.slice(0, (0,_config_randomInt__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(loremText.length / (0,_config_randomInt__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, 6), loremText.length));\n  var $card = document.createElement('div');\n  var $img = document.createElement('img');\n  var $media = document.createElement('div');\n  var $body = document.createElement('div');\n  var $title = document.createElement('h4');\n  var $p = document.createElement('p');\n  var $footer = document.createElement('div');\n  var $btnSave = document.createElement('button');\n  var $btnShare = document.createElement('button');\n  $card.classList.add('card');\n  $media.classList.add('card-media');\n  $img.classList.add('card-media-item');\n  $body.classList.add('card-body');\n  $title.classList.add('card-title');\n  $p.classList.add('card-text', 'js_textClamp');\n  $footer.classList.add('card-footer');\n  $btnSave.classList.add('btn', 'btn-warning');\n  $btnShare.classList.add('btn', 'btn-outline-secondary');\n  $card.appendChild($media);\n  $media.appendChild($img);\n  $card.appendChild($body);\n  $card.appendChild($footer);\n  $body.appendChild($title);\n  $body.appendChild($p);\n  $footer.appendChild($btnSave);\n  $footer.appendChild($btnShare);\n  $img.loading = 'lazy';\n  $img.src = data.download_url;\n  $title.innerText = data.author;\n  $p.innerText = pText;\n  $btnSave.innerText = 'Save to collection';\n  $btnShare.innerText = 'Share';\n  return $card;\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/js_infiniteCards.js?");

/***/ }),

/***/ "./app/js/component/js_textClamp.js":
/*!******************************************!*\
  !*** ./app/js/component/js_textClamp.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(fromIndex) {\n  var target = 'js_textClamp';\n  var targets = document.querySelectorAll(\".\".concat(target));\n\n  if (!targets) {\n    return;\n  }\n\n  var togglerLabel = 'Show more...';\n  var togglerClasses = ['btn-reset', 'btn-text'];\n\n  if (fromIndex) {\n    targets = Array.prototype.slice.call(targets, targets.length - fromIndex);\n  }\n\n  targets.forEach(function (elem) {\n    if (!isTextClamped(elem)) {\n      return;\n    }\n\n    var control = toggler(togglerLabel, togglerClasses);\n    insertAfter(control, elem);\n    control.addEventListener('click', function (e) {\n      elem.classList.remove(target);\n      control.remove();\n    });\n  });\n}\n\nvar toggler = function toggler(label, btnClasses) {\n  var _btn$classList;\n\n  var btn = document.createElement('button');\n\n  (_btn$classList = btn.classList).add.apply(_btn$classList, _toConsumableArray(btnClasses));\n\n  btn.textContent = label;\n  btn.setAttribute('type', 'button');\n  return btn;\n};\n\nvar isTextClamped = function isTextClamped(elm) {\n  return elm.scrollHeight > elm.clientHeight;\n};\n\nfunction insertAfter(newNode, existingNode) {\n  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/js_textClamp.js?");

/***/ }),

/***/ "./app/js/component/js_themeSwitcher.js":
/*!**********************************************!*\
  !*** ./app/js/component/js_themeSwitcher.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_localStorageAnchors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/localStorageAnchors */ \"./app/js/component/config/localStorageAnchors.js\");\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var toggler = document.getElementById('js_themeSwitcher');\n  var localStorageTheme = localStorage.getItem(_config_localStorageAnchors__WEBPACK_IMPORTED_MODULE_0__.theme);\n  var isDark = localStorageTheme && +localStorageTheme === 1;\n\n  if (isDark) {\n    toggler.checked = true;\n    onChange(toggler);\n  }\n\n  toggler.addEventListener('change', onChange);\n\n  function onChange(e) {\n    var isDark = e.checked || e.target.checked;\n    document.body.setAttribute('data-theme', isDark ? 'dark' : '');\n    localStorage.setItem(_config_localStorageAnchors__WEBPACK_IMPORTED_MODULE_0__.theme, isDark ? 1 : 0);\n  }\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/js_themeSwitcher.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/js/_init.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=custom.js.map
