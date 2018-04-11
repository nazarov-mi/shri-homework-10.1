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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = new _emitter2.default();

/* eslint-disable-next-line no-console */
var handler = function handler() {
  return console.log('emitted');
};

emitter.on('event', handler);
emitter.emit('event');
emitter.off('event', handler);
emitter.emit('event');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Класс реализует механизма подписки на события
 * @class
 */
var Emitter = function () {

	/**
  * Создаёт экземпляр Emitter
  * @constructs
  */
	function Emitter() {
		_classCallCheck(this, Emitter);

		this._listeners = new Map();
	}

	/**
  * Подписывает функцию обратного вызова на события определённого типа,
  * если она не была подписана ранее
  * @param  {String} event - тип события
  * @param  {Function} handler - функция обратного вызова
  * @return {Emitter} Возвращает текущий экземпляр класса
  */


	_createClass(Emitter, [{
		key: "on",
		value: function on(event, handler) {
			var handlers = void 0;

			if (this._listeners.has(event)) {
				handlers = this._listeners.get(event);
			} else {
				handlers = new Set();
				this._listeners.set(event, handlers);
			}

			handlers.add(handler);

			return this;
		}

		/**
   * Отписывает функцию обратного вызова от событий определённого типа
   * @param  {String} event - тип события
   * @param  {Function} handler - функция обратного вызова
   * @return {Emitter} Возвращает текущий экземпляр класса
   */

	}, {
		key: "off",
		value: function off(event, handler) {
			if (this._listeners.has(event)) {
				var handlers = this._listeners.get(event);

				handlers.delete(handler);

				if (handlers.size === 0) {
					this._listeners.delete(event);
				}
			}

			return this;
		}

		/**
   * Вызывает все функции обратного вызова,
   * подписанные на событие определённого типа
   * @param  {String} event - тип события
   * @return {Emitter} Возвращает текущий экземпляр класса
   */

	}, {
		key: "emit",
		value: function emit(event) {
			if (this._listeners.has(event)) {
				var handlers = this._listeners.get(event);
				var iterator = handlers[Symbol.iterator]();
				var next = void 0;

				/* eslint-disable-next-line no-cond-assign */
				while ((next = iterator.next()) && !next.done) {
					next.value(); // Вызываем функцию обратного вызова
				}
			}

			return this;
		}
	}]);

	return Emitter;
}();

module.exports = Emitter;

/***/ })
/******/ ]);