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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --theme-color: rgb(40, 74, 156);\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  color: #fff;\n  min-height: 100vh;\n  margin: 0;\n  background-color: #efefef;\n}\n\n#container {\n  min-height: 100vh;\n  width: 1600px;\n  margin: 0 auto;\n  background-color: var(--theme-color);\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  flex-basis: 150px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  border-bottom: 1px solid #fff;\n  background-color: #0f1f84;\n}\n\n#main {\n  flex: 6;\n  padding: 50px;\n}\n\nh2 {\n  margin: 0;\n}\n\nnav {\n  display: flex;\n  gap: 20px;\n}\n\nbutton {\n  border: 0;\n  background-color: #fff;\n  padding: 10px 25px;\n  color: var(--theme-color);\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.featured-dish-section,\n.testimonials-section,\n.contact-section {\n  margin: 50px 0px;\n  border: 1px solid #fff;\n  padding: 25px;\n}\n\n.testimonial {\n  margin: 10px 0;\n}\n\n.testimonial-name {\n  font-weight: bold;\n}\n\n.testimonial-comment {\n  margin: 5px 0 10px 20px;\n  font-style: italic;\n}\n\n.contact-section {\n}\n\n.history-section,\n.mission-section,\n.team-section {\n  margin-top: 20px;\n  padding: 25px;\n  border: 1px solid #fff;\n}\n\n.team-member {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 0;\n  gap: 50px;\n}\n\n.member-name {\n  font-weight: bold;\n  flex-basis: 200px;\n  flex: 1;\n}\n\n.member-img {\n  max-width: 300px;\n}\n\n.member-role {\n  color: hsla(0, 0%, 90%, 0.773);\n  flex-basis: 200px;\n}\n\n.menu-section {\n  margin: 40px 100px;\n  border: 1px solid #fff;\n  padding: 25px;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n\n.item-name {\n  font-weight: bold;\n}\n\n.item-price {\n  color: hsla(0, 9%, 94%, 0.821);\n  font-weight: bold;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-webpack-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-webpack-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-webpack-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-webpack-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-webpack-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-webpack-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-webpack-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-webpack-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-webpack-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-webpack-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/generateAbout.js":
/*!******************************!*\
  !*** ./src/generateAbout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateAbout: () => (/* binding */ generateAbout)\n/* harmony export */ });\n/* harmony import */ var _staff_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff.jpg */ \"./src/staff.jpg\");\n\n\nconst generateAbout = () => {\n  let div = document.createElement(\"div\");\n  div.className = \"page\";\n\n  // About Us title\n  let aboutTitle = document.createElement(\"h1\");\n  aboutTitle.textContent = \"About Us\";\n  div.appendChild(aboutTitle);\n\n  // Restaurant history\n  let historySection = document.createElement(\"div\");\n  historySection.className = \"history-section\";\n\n  let historyTitle = document.createElement(\"h2\");\n  historyTitle.textContent = \"Our History\";\n  historySection.appendChild(historyTitle);\n\n  let historyContent = document.createElement(\"p\");\n  historyContent.textContent =\n    \"Gourmet Delights was founded in 2005 by Chef John Doe, with the vision of creating a unique dining experience that combines fine dining with the comfort of home. Over the years, we have grown into a beloved spot for food enthusiasts.\";\n  historySection.appendChild(historyContent);\n\n  div.appendChild(historySection);\n\n  // Mission section\n  let missionSection = document.createElement(\"div\");\n  missionSection.className = \"mission-section\";\n\n  let missionTitle = document.createElement(\"h2\");\n  missionTitle.textContent = \"Our Mission\";\n  missionSection.appendChild(missionTitle);\n\n  let missionContent = document.createElement(\"p\");\n  missionContent.textContent =\n    \"Our mission is to provide an unforgettable dining experience through exceptional service, a warm and inviting atmosphere, and the highest quality cuisine. We strive to make every visit to Gourmet Delights a memorable one.\";\n  missionSection.appendChild(missionContent);\n\n  div.appendChild(missionSection);\n\n  // Team section\n  let teamSection = document.createElement(\"div\");\n  teamSection.className = \"team-section\";\n\n  let teamTitle = document.createElement(\"h2\");\n  teamTitle.textContent = \"Meet the Team\";\n  teamSection.appendChild(teamTitle);\n\n  // Sample team members\n  let teamMembers = [\n    { name: \"John Doe\", role: \"Head Chef\", image: \"Staff.jpg\" },\n    { name: \"Jane Smith\", role: \"General Manager\", image: \"Staff.jpg\" },\n    { name: \"Emily Johnson\", role: \"Pastry Chef\", image: \"Staff.jpg\" },\n  ];\n\n  teamMembers.forEach((member) => {\n    let teamMember = document.createElement(\"div\");\n    teamMember.className = \"team-member\";\n\n    let memberName = document.createElement(\"span\");\n    memberName.className = \"member-name\";\n    memberName.textContent = member.name;\n\n    let memberImage = document.createElement(\"img\");\n    memberImage.className = \"member-img\";\n    memberImage.src = _staff_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    let memberRole = document.createElement(\"span\");\n    memberRole.className = \"member-role\";\n    memberRole.textContent = member.role;\n\n    teamMember.appendChild(memberName);\n    teamMember.appendChild(memberImage);\n    teamMember.appendChild(memberRole);\n    teamSection.appendChild(teamMember);\n  });\n\n  div.appendChild(teamSection);\n\n  return div;\n};\n\n\n\n\n//# sourceURL=webpack://odin-webpack-restaurant/./src/generateAbout.js?");

/***/ }),

/***/ "./src/generateHome.js":
/*!*****************************!*\
  !*** ./src/generateHome.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHome: () => (/* binding */ generateHome)\n/* harmony export */ });\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n// homePageModule.js\n\n\n\nconst generateHome = () => {\n  let div = document.createElement(\"div\");\n  div.className = \"page\";\n\n  // Restaurant name\n  let restaurantName = document.createElement(\"h1\");\n  restaurantName.textContent = \"Gourmet Delights\";\n  div.appendChild(restaurantName);\n\n  const restaurant = new Image();\n  restaurant.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  div.appendChild(restaurant);\n\n  // Welcome message\n  let welcomeMessage = document.createElement(\"p\");\n  welcomeMessage.textContent =\n    \"Welcome to Gourmet Delights! We are excited to offer you a unique dining experience where fine dining meets the comfort of home. Enjoy our carefully crafted dishes and excellent service.\";\n  div.appendChild(welcomeMessage);\n\n  // Featured Dish\n  let featuredDishSection = document.createElement(\"div\");\n  featuredDishSection.className = \"featured-dish-section\";\n\n  let featuredDishTitle = document.createElement(\"h2\");\n  featuredDishTitle.textContent = \"Featured Dish\";\n  featuredDishSection.appendChild(featuredDishTitle);\n\n  let featuredDishContent = document.createElement(\"p\");\n  featuredDishContent.textContent =\n    \"Our featured dish this month is the exquisite Grilled Salmon with Lemon Butter Sauce, served with a side of roasted vegetables. A perfect blend of flavors that will delight your taste buds!\";\n  featuredDishSection.appendChild(featuredDishContent);\n\n  div.appendChild(featuredDishSection);\n\n  // Customer Testimonials\n  let testimonialsSection = document.createElement(\"div\");\n  testimonialsSection.className = \"testimonials-section\";\n\n  let testimonialsTitle = document.createElement(\"h2\");\n  testimonialsTitle.textContent = \"Customer Testimonials\";\n  testimonialsSection.appendChild(testimonialsTitle);\n\n  let testimonials = [\n    {\n      name: \"Alice\",\n      comment: \"Absolutely loved the ambiance and the food was amazing!\",\n    },\n    {\n      name: \"Bob\",\n      comment:\n        \"A wonderful dining experience with friendly staff and delicious dishes.\",\n    },\n  ];\n\n  testimonials.forEach((testimonial) => {\n    let testimonialDiv = document.createElement(\"div\");\n    testimonialDiv.className = \"testimonial\";\n\n    let testimonialName = document.createElement(\"span\");\n    testimonialName.className = \"testimonial-name\";\n    testimonialName.textContent = testimonial.name;\n\n    let testimonialComment = document.createElement(\"p\");\n    testimonialComment.className = \"testimonial-comment\";\n    testimonialComment.textContent = testimonial.comment;\n\n    testimonialDiv.appendChild(testimonialName);\n    testimonialDiv.appendChild(testimonialComment);\n    testimonialsSection.appendChild(testimonialDiv);\n  });\n\n  div.appendChild(testimonialsSection);\n\n  // Contact Information\n  let contactSection = document.createElement(\"div\");\n  contactSection.className = \"contact-section\";\n\n  let contactTitle = document.createElement(\"h2\");\n  contactTitle.textContent = \"Contact Us\";\n  contactSection.appendChild(contactTitle);\n\n  let contactContent = document.createElement(\"p\");\n  contactContent.innerHTML =\n    \"123 Culinary Lane, Flavor Town, USA<br>Phone: (123) 456-7890<br>Email: info@gourmetdelights.com\";\n  contactSection.appendChild(contactContent);\n\n  div.appendChild(contactSection);\n\n  return div;\n};\n\n\n\n\n//# sourceURL=webpack://odin-webpack-restaurant/./src/generateHome.js?");

/***/ }),

/***/ "./src/generateMenu.js":
/*!*****************************!*\
  !*** ./src/generateMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenu: () => (/* binding */ generateMenu)\n/* harmony export */ });\nconst generateMenu = () => {\n  let div = document.createElement(\"div\");\n  div.className = \"page\";\n\n  // Menu title\n  let menuTitle = document.createElement(\"h1\");\n  menuTitle.textContent = \"Our Menu\";\n  div.appendChild(menuTitle);\n\n  // Create a section for a menu category\n  const createMenuSection = (title, items) => {\n    let section = document.createElement(\"div\");\n    section.className = \"menu-section\";\n\n    let sectionTitle = document.createElement(\"h2\");\n    sectionTitle.textContent = title;\n    section.appendChild(sectionTitle);\n\n    items.forEach((item) => {\n      let menuItem = document.createElement(\"div\");\n      menuItem.className = \"menu-item\";\n\n      let itemName = document.createElement(\"span\");\n      itemName.className = \"item-name\";\n      itemName.textContent = item.name;\n\n      let itemPrice = document.createElement(\"span\");\n      itemPrice.className = \"item-price\";\n      itemPrice.textContent = item.price;\n\n      menuItem.appendChild(itemName);\n      menuItem.appendChild(itemPrice);\n      section.appendChild(menuItem);\n    });\n\n    return section;\n  };\n\n  // Sample menu items for each category\n  let appetizers = [\n    { name: \"Bruschetta\", price: \"$8\" },\n    { name: \"Stuffed Mushrooms\", price: \"$10\" },\n  ];\n\n  let mainCourses = [\n    { name: \"Grilled Salmon\", price: \"$25\" },\n    { name: \"Steak au Poivre\", price: \"$30\" },\n  ];\n\n  let desserts = [\n    { name: \"Cheesecake\", price: \"$12\" },\n    { name: \"Chocolate Mousse\", price: \"$10\" },\n  ];\n\n  // Create and append sections to the menu page\n  div.appendChild(createMenuSection(\"Appetizers\", appetizers));\n  div.appendChild(createMenuSection(\"Main Courses\", mainCourses));\n  div.appendChild(createMenuSection(\"Desserts\", desserts));\n\n  return div;\n};\n\n\n\n\n//# sourceURL=webpack://odin-webpack-restaurant/./src/generateMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateHome */ \"./src/generateHome.js\");\n/* harmony import */ var _generateMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateMenu */ \"./src/generateMenu.js\");\n/* harmony import */ var _generateAbout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateAbout */ \"./src/generateAbout.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst main = document.querySelector(\"#main\");\n\nconst mainButton = document.querySelector(\"#home-button\");\nmainButton.addEventListener(\"click\", () => {\n  clearMain();\n  const homePage = (0,_generateHome__WEBPACK_IMPORTED_MODULE_0__.generateHome)();\n  main.appendChild(homePage);\n});\n\nconst menuButton = document.querySelector(\"#menu-button\");\nmenuButton.addEventListener(\"click\", () => {\n  clearMain();\n  const menuPage = (0,_generateMenu__WEBPACK_IMPORTED_MODULE_1__.generateMenu)();\n  main.appendChild(menuPage);\n});\n\nconst aboutButton = document.querySelector(\"#about-button\");\naboutButton.addEventListener(\"click\", () => {\n  clearMain();\n  const aboutPage = (0,_generateAbout__WEBPACK_IMPORTED_MODULE_2__.generateAbout)();\n  main.appendChild(aboutPage);\n});\n\nconst clearMain = () => {\n  main.innerHTML = \"\";\n};\n\nconst homePage = (0,_generateHome__WEBPACK_IMPORTED_MODULE_0__.generateHome)();\nmain.appendChild(homePage);\n\n\n//# sourceURL=webpack://odin-webpack-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/restaurant.jpg\";\n\n//# sourceURL=webpack://odin-webpack-restaurant/./src/restaurant.jpg?");

/***/ }),

/***/ "./src/staff.jpg":
/*!***********************!*\
  !*** ./src/staff.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/staff.jpg\";\n\n//# sourceURL=webpack://odin-webpack-restaurant/./src/staff.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;