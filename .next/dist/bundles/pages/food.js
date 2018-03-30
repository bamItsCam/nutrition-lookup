module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navbar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "C:\\Users\\hollowaycc1\\Documents\\GitHub\\lol-api\\components\\Navbar.jsx";



var Navbar = function Navbar() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 4
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
			{ href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 5
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"a",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 6
					}
				},
				"Home"
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
			{ href: "about", __source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"a",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 9
					}
				},
				"About"
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
			{ href: "food", __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"a",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 12
					}
				},
				"Food"
			)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./components/SearchResult.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
var _jsxFileName = 'C:\\Users\\hollowaycc1\\Documents\\GitHub\\lol-api\\components\\SearchResult.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SearchResult = function (_Component) {
	_inherits(SearchResult, _Component);

	function SearchResult() {
		_classCallCheck(this, SearchResult);

		var _this = _possibleConstructorReturn(this, (SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call(this));

		_this.getNutrition = _this.getNutrition.bind(_this);
		_this.mouseHover = _this.mouseHover.bind(_this);
		_this.state = {
			mouseState: "auto"
		};
		return _this;
	}

	_createClass(SearchResult, [{
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
				{ href: '/nutrition?ndbno=' + this.props.result.ndbno, __source: {
						fileName: _jsxFileName,
						lineNumber: 17
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'tr',
					{ style: { cursor: this.state.mouseState }, onMouseOver: this.mouseHover, __source: {
							fileName: _jsxFileName,
							lineNumber: 18
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 19
							}
						},
						this.props.result.name
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 20
							}
						},
						this.props.result.group
					)
				)
			);
		}
	}, {
		key: 'mouseHover',
		value: function mouseHover() {
			// change the mouse style to infer this is a clickable object
			this.setState({
				mouseState: "pointer"
			});
		}
	}, {
		key: 'getNutrition',
		value: function getNutrition() {
			console.log("hit!");
			// todo: redirect to template page that fills in data from usda api, need to look into react's template/dyanmic url thingy
		}
	}]);

	return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SearchResult);

/***/ }),

/***/ "./pages/food.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Navbar__ = __webpack_require__("./components/Navbar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SearchResult__ = __webpack_require__("./components/SearchResult.jsx");
var _jsxFileName = 'C:\\Users\\hollowaycc1\\Documents\\GitHub\\lol-api\\pages\\food.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Food = function (_Component) {
	_inherits(Food, _Component);

	function Food() {
		_classCallCheck(this, Food);

		var _this = _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this));

		_this.handleFoodSearch = _this.handleFoodSearch.bind(_this);
		_this.generateSearchResults = _this.generateSearchResults.bind(_this);
		_this.state = {
			user: null,
			searchResults: null
		};
		return _this;
	}

	_createClass(Food, [{
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				'div',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 24
					}
				},
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 25
						}
					},
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						'title',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 26
							}
						},
						'LOL API Test'
					),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { href: '/static/main.css', rel: 'stylesheet', __source: {
							fileName: _jsxFileName,
							lineNumber: 27
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Navbar__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 29
					}
				}),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'div',
					{ className: 'field is-grouped', __source: {
							fileName: _jsxFileName,
							lineNumber: 30
						}
					},
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						'p',
						{ className: 'control is-expanded', __source: {
								fileName: _jsxFileName,
								lineNumber: 31
							}
						},
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('input', { className: 'input', type: 'text', ref: 'food', placeholder: 'Search for food!', __source: {
								fileName: _jsxFileName,
								lineNumber: 32
							}
						})
					),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						'p',
						{ className: 'control', __source: {
								fileName: _jsxFileName,
								lineNumber: 34
							}
						},
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							'a',
							{ className: 'button is-info', onClick: this.handleFoodSearch, __source: {
									fileName: _jsxFileName,
									lineNumber: 35
								}
							},
							'Search'
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'table',
					{ className: 'table is-hoverable', __source: {
							fileName: _jsxFileName,
							lineNumber: 40
						}
					},
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('thead', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 41
						}
					}),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						'tbody',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 44
							}
						},
						this.generateSearchResults()
					)
				)
			);
		}
	}, {
		key: 'handleFoodSearch',
		value: function handleFoodSearch() {
			var _this2 = this;

			var searchEndpoint = "https://api.nal.usda.gov/ndb/search/";

			var params = {
				api_key: "yBOTv6MZUbeX72vydCGuqRwnxbH6uY9YyVVefbnS",
				q: __WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.findDOMNode(this.refs.food).value.trim(),
				max: 50,
				ds: "Standard Reference",
				format: "json"
			};

			var paramString = "";
			Object.keys(params).forEach(function (key) {
				return paramString = paramString + "&" + key + "=" + params[key];
			});

			console.log(paramString);

			var request = searchEndpoint + "?" + paramString;

			console.log(request);

			__WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(request).then(function (response) {
				return _this2.setState({
					searchResults: response.data.list != null ? response.data.list.item : null
				}), console.log(response.data.list.item);
			});
		}
	}, {
		key: 'generateSearchResults',
		value: function generateSearchResults() {
			if (this.state.searchResults != null) {
				return this.state.searchResults.map(function (result) {
					return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SearchResult__["a" /* default */], {
						key: result.ndbno,
						result: result,
						__source: {
							fileName: _jsxFileName,
							lineNumber: 85
						}
					});
				});
			} else {
				return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('tr', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 92
					}
				});
			}
		}
	}]);

	return Food;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Food);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/food.jsx");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });
//# sourceMappingURL=food.js.map