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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "./pages/nutrition.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Navbar__ = __webpack_require__("./components/Navbar.jsx");
var _jsxFileName = 'C:\\Users\\hollowaycc1\\Documents\\GitHub\\lol-api\\pages\\nutrition.jsx';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Nutrition = function (_Component) {
	_inherits(Nutrition, _Component);

	function Nutrition() {
		_classCallCheck(this, Nutrition);

		var _this = _possibleConstructorReturn(this, (Nutrition.__proto__ || Object.getPrototypeOf(Nutrition)).call(this));

		_this.state = {
			name: null,
			measure: null,
			nutrition: {
				cals: null,
				proteins: null,
				fats: null,
				carbs: null
			}
		};
		return _this;
	}

	_createClass(Nutrition, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// make sure props exist, otherwise we don't know the query to use
			if (this.props) {
				var searchEndpoint = "https://api.nal.usda.gov/ndb/nutrients/";
				var params = {
					api_key: "yBOTv6MZUbeX72vydCGuqRwnxbH6uY9YyVVefbnS",
					ndbno: this.props.url.query.ndbno,
					format: "json",
					// to get a list of nutrients, browse to
					//https://api.nal.usda.gov/ndb/list?format=json&lt=n&max=300&api_key=yBOTv6MZUbeX72vydCGuqRwnxbH6uY9YyVVefbnS
					nutrients: ["203", "204", "205", "208"]
				};

				var paramString = "";
				Object.keys(params).forEach(function (key) {
					if (_typeof(params[key]) == "object") {
						// step through and create a param for each value in the object (used for the nutrients field)
						Object.keys(params[key]).forEach(function (nid) {
							paramString = paramString + "&" + key + "=" + params[key][nid];
						});
					} else {
						paramString = paramString + "&" + key + "=" + params[key];
					}
				});

				var request = searchEndpoint + "?" + paramString;

				__WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(request).then(function (response) {
					return _this2.setFoodState(response.data.report.foods != null ? response.data.report.foods[0] : null);
				});
			}
		}
	}, {
		key: 'setFoodState',
		value: function setFoodState(food) {
			var nutrients = new Map();
			Object.keys(food.nutrients).forEach(function (key) {
				return nutrients.set(food.nutrients[key].nutrient.toLowerCase(), food.nutrients[key].value + " " + food.nutrients[key].unit);
			});
			console.log(food);
			this.setState({
				name: food.name,
				measure: food.measure,
				nutrition: {
					proteins: nutrients.get("protein"),
					carbs: nutrients.get("carbohydrate, by difference"),
					fats: nutrients.get("total lipid (fat)"),
					cals: nutrients.get("energy")
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 76
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 77
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'title',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 78
							}
						},
						'LOL API Test'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/static/main.css', rel: 'stylesheet', __source: {
							fileName: _jsxFileName,
							lineNumber: 79
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Navbar__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 81
					}
				}),
				this.renderNutrition()
			);
		}
	}, {
		key: 'renderNutrition',
		value: function renderNutrition() {
			if (this.state.name != null) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'tile is-ancestor', __source: {
							fileName: _jsxFileName,
							lineNumber: 90
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'tile is-vertical is-parent is-6', __source: {
								fileName: _jsxFileName,
								lineNumber: 91
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'tile is-child box', __source: {
									fileName: _jsxFileName,
									lineNumber: 92
								}
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'p',
								{ 'class': 'title', __source: {
										fileName: _jsxFileName,
										lineNumber: 93
									}
								},
								this.state.name
							)
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'tile is-child box', __source: {
									fileName: _jsxFileName,
									lineNumber: 95
								}
							},
							'Serving Size: ',
							this.state.measure
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'tile is-vertical is-parent is-6', __source: {
								fileName: _jsxFileName,
								lineNumber: 99
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'tile is-child box', __source: {
									fileName: _jsxFileName,
									lineNumber: 100
								}
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'p',
								{ className: 'subtitle', __source: {
										fileName: _jsxFileName,
										lineNumber: 101
									}
								},
								'Calories'
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'p',
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 102
									}
								},
								this.state.nutrition.cals
							)
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'tile is-child box', __source: {
									fileName: _jsxFileName,
									lineNumber: 104
								}
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'p',
								{ className: 'subtitle', __source: {
										fileName: _jsxFileName,
										lineNumber: 105
									}
								},
								'Proteins'
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'p',
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 106
									}
								},
								this.state.nutrition.proteins
							)
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'tile is-child box', __source: {
									fileName: _jsxFileName,
									lineNumber: 108
								}
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'p',
								{ className: 'subtitle', __source: {
										fileName: _jsxFileName,
										lineNumber: 109
									}
								},
								'Carbs'
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'p',
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 110
									}
								},
								this.state.nutrition.carbs
							)
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							{ className: 'tile is-child box', __source: {
									fileName: _jsxFileName,
									lineNumber: 112
								}
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'p',
								{ className: 'subtitle', __source: {
										fileName: _jsxFileName,
										lineNumber: 113
									}
								},
								'Fats'
							),
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'p',
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 114
									}
								},
								this.state.nutrition.fats
							)
						)
					)
				);
			} else {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 122
					}
				});
			}
		}
	}]);

	return Nutrition;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nutrition);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/nutrition.jsx");


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

/***/ })

/******/ });
//# sourceMappingURL=nutrition.js.map