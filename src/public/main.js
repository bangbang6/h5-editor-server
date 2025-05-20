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

/***/ "./node_modules/lego-components/dist/lego-components.css":
/*!***************************************************************!*\
  !*** ./node_modules/lego-components/dist/lego-components.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mw-h5-server/./node_modules/lego-components/dist/lego-components.css?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lego_components_dist_lego_components_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lego-components/dist/lego-components.css */ \"./node_modules/lego-components/dist/lego-components.css\");\n/* harmony import */ var _js_check_channel_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/check-channel/index */ \"./src/assets/js/check-channel/index.js\");\n/* harmony import */ var _js_statistic_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/statistic/index */ \"./src/assets/js/statistic/index.js\");\n/* harmony import */ var _js_bind_events_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/bind-events/index */ \"./src/assets/js/bind-events/index.js\");\n/* harmony import */ var _js_wx_jssdk_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/wx-jssdk/index */ \"./src/assets/js/wx-jssdk/index.js\");\n/**\n * @description 静态资源，入口文件。将会被 webpack 打包，配置在 build-assets 目录\n * @author 双越\n */\n\n// 业务组件库样式\n\n\n// 检查 channel 参数\n\n\n// 数据统计\n\n\n// 绑定事件\n\n\n// 微信 jssk\n\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/js/bind-events/index.js":
/*!********************************************!*\
  !*** ./src/assets/js/bind-events/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jumpTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jumpTo */ \"./src/assets/js/bind-events/jumpTo.js\");\n/**\n * @description 绑定事件\n * @author 双越\n */\n\n\n\n// 事件信息列表\nvar _window = window,\n  _window$EVENT_INFO_LI = _window.EVENT_INFO_LIST,\n  EVENT_INFO_LIST = _window$EVENT_INFO_LI === void 0 ? [] : _window$EVENT_INFO_LI;\nfunction bindEvent() {\n  EVENT_INFO_LIST.forEach(function () {\n    var eventInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // eventInfo 数据格式 {id: \"345\", actionType: \"to\", url: \"http://www.baidu.com\"}\n    var id = eventInfo.id,\n      actionType = eventInfo.actionType,\n      url = eventInfo.url;\n    if (!actionType || !url) return;\n\n    // 绑定事件\n    var elemId = \"component-\".concat(id); // 元素 id 有前缀\n    var elem = document.getElementById(elemId);\n    elem.addEventListener(\"click\", function () {\n      if (actionType === \"to\") {\n        (0,_jumpTo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url); // 跳转 url\n      }\n      // 还可以继续扩展其他的 actionType\n    });\n  });\n}\nbindEvent();\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/bind-events/index.js?");

/***/ }),

/***/ "./src/assets/js/bind-events/jumpTo.js":
/*!*********************************************!*\
  !*** ./src/assets/js/bind-events/jumpTo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n/**\n * @description 跳转事件\n * @author 双越\n */\n\nvar _window = window,\n  location = _window.location;\n\n/**\n * 生成 url 拼接 querystring\n * @param {string} url url\n * @param {string} querystring querystring\n */\nfunction genUrlWithQuery(url, querystring) {\n  // 当前页面没有 url 参数\n  if (!querystring) {\n    return url;\n  }\n\n  // 考虑 hash\n  var _url$split = url.split(\"#\"),\n    _url$split2 = _slicedToArray(_url$split, 2),\n    urlWithoutHash = _url$split2[0],\n    _url$split2$ = _url$split2[1],\n    hash = _url$split2$ === void 0 ? \"\" : _url$split2$;\n\n  // 当前页面有 url 参数\n  var urlWithQuery = \"\";\n  if (urlWithoutHash.indexOf(\"?\") < 0) {\n    // 目标 url 无参数\n    urlWithQuery = \"\".concat(urlWithoutHash, \"?\").concat(querystring);\n  } else {\n    // 目标 url 有参数\n    urlWithQuery = \"\".concat(urlWithoutHash, \"&\").concat(querystring);\n  }\n\n  // 拼接 hash\n  if (hash) return \"\".concat(urlWithQuery, \"#\").concat(hash);\n  return urlWithQuery;\n}\n\n/**\n * 跳转 url ，带着当前的 url 参数\n * @param {string} url url\n */\nfunction jumpTo() {\n  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  if (!url) return;\n  var search = location.search;\n  var querystring = search.slice(1); // 去掉开头的 ?\n\n  var targetUrl = genUrlWithQuery(url, querystring);\n  location.href = targetUrl;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jumpTo);\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/bind-events/jumpTo.js?");

/***/ }),

/***/ "./src/assets/js/check-channel/index.js":
/*!**********************************************!*\
  !*** ./src/assets/js/check-channel/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./src/assets/js/utils.js\");\n/**\n * @description 检查 channel\n * @author 双越\n */\n\n\nvar channel = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getChannel)();\nvar _window = window,\n  PAGE_TYPE = _window.PAGE_TYPE,\n  alert = _window.alert;\nfunction checkCheck() {\n  if (channel) return;\n  if (PAGE_TYPE !== \"publish\") return; // 非线上的发布页面，则不检查\n\n  var info = \"页面 url 没有 channel ，会影响分渠道统计的数据\";\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__.isPrd) {\n    // 线上环境仅提醒，不影响页面正常浏览\n    console.warn(info);\n    return;\n  }\n\n  // 其他情况，直接 alert\n  alert(info);\n}\ncheckCheck();\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/check-channel/index.js?");

/***/ }),

/***/ "./src/assets/js/conf.js":
/*!*******************************!*\
  !*** ./src/assets/js/conf.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventStatServer: () => (/* binding */ eventStatServer)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/assets/js/utils.js\");\n/**\n * @description 配置\n * @author 双越\n */\n\n\n\n// 自定义事件统计 server\nvar _eventStatServer = \"http://182.92.xxx.xxx:8083/event.png\";\nif (_utils__WEBPACK_IMPORTED_MODULE_0__.isPrd) {\n  _eventStatServer = \"https://statistic.imooc-lego.com/event.png\";\n}\nvar eventStatServer = _eventStatServer;\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/conf.js?");

/***/ }),

/***/ "./src/assets/js/statistic/index.js":
/*!******************************************!*\
  !*** ./src/assets/js/statistic/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _statPV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statPV */ \"./src/assets/js/statistic/statPV.js\");\n/**\n * @description 统计\n * @author 双越\n */\n\n\n\n// 统计 pv ，包括 channel\n(0,_statPV__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/statistic/index.js?");

/***/ }),

/***/ "./src/assets/js/statistic/sendEvent.js":
/*!**********************************************!*\
  !*** ./src/assets/js/statistic/sendEvent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../conf */ \"./src/assets/js/conf.js\");\n\n\n/**\n * 发送 event 统计\n * @param {object} data data\n */\nfunction sendEvent() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  // 拼接参数\n  var keys = Object.keys(data);\n  var arr = keys.map(function (key) {\n    return \"\".concat(key, \"=\").concat(data[key]);\n  });\n  if (arr.length === 0) {\n    return; // 没有参数，则不发送\n  }\n\n  // 拼接 url\n  var url = \"\".concat(_conf__WEBPACK_IMPORTED_MODULE_0__.eventStatServer, \"?\").concat(arr.join(\"&\"));\n\n  // 发送请求\n  // const img = document.createElement(\"img\");\n  // img.src = url;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEvent);\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/statistic/sendEvent.js?");

/***/ }),

/***/ "./src/assets/js/statistic/statPV.js":
/*!*******************************************!*\
  !*** ./src/assets/js/statistic/statPV.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/assets/js/utils.js\");\n/* harmony import */ var _sendEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendEvent */ \"./src/assets/js/statistic/sendEvent.js\");\n/**\n * @description 统计 PV\n * @author 双越\n */\n\n\n\n\n/**\n * @description 统计 pv 和渠道 pv\n */\nfunction statPV() {\n  var action = \"pv\";\n  if (window.PAGE_TYPE === \"404\") {\n    action = \"404\";\n  }\n  if (window.PAGE_TYPE === \"preview\") {\n    action = \"preview\";\n  }\n  if (window.PAGE_TYPE === \"template\") {\n    action = \"template\";\n  }\n\n  // 获取 id 和 channel\n  var id = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWorkId)();\n  var channel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getChannel)();\n\n  // 发送统计\n  (0,_sendEvent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    category: \"h5\",\n    action: action,\n    label: id,\n    value: channel\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statPV);\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/statistic/statPV.js?");

/***/ }),

/***/ "./src/assets/js/utils.js":
/*!********************************!*\
  !*** ./src/assets/js/utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getChannel: () => (/* binding */ getChannel),\n/* harmony export */   getRegStr: () => (/* binding */ getRegStr),\n/* harmony export */   getWorkId: () => (/* binding */ getWorkId),\n/* harmony export */   isPrd: () => (/* binding */ isPrd)\n/* harmony export */ });\n/**\n * @description 工具函数\n * @author 双越\n */\n\n/**\n * 根据正则表达式来获取匹配的文字\n * @param {string} str str\n * @param {RegExp} reg reg\n */\nfunction getRegStr(str, reg) {\n  if (!str) return \"\";\n  var arr = str.match(reg) || [];\n  return arr[1] || \"\";\n}\n\n/**\n * @description 获取 url 参数的 id\n */\nfunction getWorkId() {\n  var _window = window,\n    location = _window.location;\n  var id = getRegStr(location.pathname, /\\/(\\w+)?-\\w+/);\n  return id;\n}\n\n/**\n * @description 获取 url 参数的 channel\n */\nfunction getChannel() {\n  var _window2 = window,\n    location = _window2.location;\n  var channel = getRegStr(location.search, /channel=(\\w+)/);\n  return channel;\n}\n\n// ENV： webpack 配置的环境变量\nvar isPrd = \"dev\" === \"production\"; // eslint-disable-line\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/utils.js?");

/***/ }),

/***/ "./src/assets/js/wx-jssdk/index.js":
/*!*****************************************!*\
  !*** ./src/assets/js/wx-jssdk/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ \"./src/assets/js/wx-jssdk/share.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n/**\n * @description 微信 jssdk 配置\n * @author 双越\n */\n\n\nvar _window = window,\n  location = _window.location,\n  wx = _window.wx,\n  WX_JSSDK_MAIN_CONF = _window.WX_JSSDK_MAIN_CONF;\n\n// 配置\nfunction main() {\n  console.log(\"WX_JSSDK_MAIN_CONF\", WX_JSSDK_MAIN_CONF);\n  // 有些页面不用微信 jssdk ，如 404 error\n  if (WX_JSSDK_MAIN_CONF == null || wx == null) return;\n\n  // 配置\n  wx.config(_objectSpread({\n    debug: location.search.indexOf(\"wx_js_sdk_debug\") > 0,\n    // query 中有 wx_js_sdk_debug ，则为 debug 模式\n    jsApiList: [\"updateAppMessageShareData\", \"updateTimelineShareData\"]\n  }, WX_JSSDK_MAIN_CONF));\n\n  // 错误监控\n  wx.error(function (err) {\n    console.error(\"wx jssdk error\", err);\n  });\n\n  // 各个功能\n  wx.ready(function () {\n    (0,_share__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(wx); // 设置分享\n  });\n}\nmain();\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/wx-jssdk/index.js?");

/***/ }),

/***/ "./src/assets/js/wx-jssdk/share.js":
/*!*****************************************!*\
  !*** ./src/assets/js/wx-jssdk/share.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @description 微信分享\n * @author 双越\n */\n\nvar _window = window,\n  MAIN_SHARE_CONF = _window.MAIN_SHARE_CONF,\n  location = _window.location;\n\n// 设置微信分享\nfunction setWxShare(wx) {\n  if (wx == null || MAIN_SHARE_CONF == null) return;\n  var title = MAIN_SHARE_CONF.title,\n    desc = MAIN_SHARE_CONF.desc,\n    imgUrl = MAIN_SHARE_CONF.imgUrl;\n\n  // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容\n  wx.updateAppMessageShareData({\n    title: title,\n    desc: desc,\n    link: location.href,\n    imgUrl: imgUrl\n    // success: () => {}\n  });\n\n  // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容\n  wx.updateTimelineShareData({\n    title: title,\n    link: location.href,\n    imgUrl: imgUrl\n    // success: () => {}\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWxShare);\n\n//# sourceURL=webpack://mw-h5-server/./src/assets/js/wx-jssdk/share.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/index.js");
/******/ 	
/******/ })()
;