/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_enumify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_enumify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_enumify__);


class Command extends __WEBPACK_IMPORTED_MODULE_0_enumify__["Enum"] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = Command;

Command.initEnum(["Activate", "Deactivate", "Dispose"]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_enumify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_enumify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_enumify__);


class State extends __WEBPACK_IMPORTED_MODULE_0_enumify__["Enum"] {}
/* harmony export (immutable) */ __webpack_exports__["a"] = State;

State.initEnum(["Inactive", "Active", "Disposed"]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Command__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__State__ = __webpack_require__(1);



class Transition {

  constructor(originalState, command, finalState) {
    if (!(originalState instanceof __WEBPACK_IMPORTED_MODULE_1__State__["a" /* State */]))
      throw new Error("Invalid original state!");
    if (!(command instanceof __WEBPACK_IMPORTED_MODULE_0__Command__["a" /* Command */]))
      throw new Error("Invalid command!");
    if (!(finalState instanceof __WEBPACK_IMPORTED_MODULE_1__State__["a" /* State */]))
      throw new Error("Invalid final state!");
    this._originalState = originalState;
    this._command = command;
    this._finalState = finalState;
  }

  get originalState() {
    return this._originalState;
  }

  get command() {
    return this._command;
  }

  get finalState() {
    return this._finalState;
  }

  equals(other) {
    return other instanceof Transition &&
      other.originalState === this.originalState &&
      other.command === command &&
      other.finalState === this.finalState;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Transition;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.copyProperties = copyProperties;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INITIALIZED = Symbol();

/**
 * This is an abstract class that is not intended to be
 * used directly. Extend it to turn your class into an enum
 * (initialization is performed via `MyClass.initEnum()`).
 */

var Enum = exports.Enum = function () {
    /**
     * `initEnum()` closes the class. Then calling this constructor
     * throws an exception.
     * 
     * If your subclass has a constructor then you can control
     * what properties are added to `this` via the argument you
     * pass to `super()`. No arguments are fine, too.
     */

    function Enum() {
        var instanceProperties = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

        _classCallCheck(this, Enum);

        // new.target would be better than this.constructor,
        // but isn’t supported by Babel
        if ({}.hasOwnProperty.call(this.constructor, INITIALIZED)) {
            throw new Error('Enum classes can’t be instantiated');
        }
        if ((typeof instanceProperties === 'undefined' ? 'undefined' : _typeof(instanceProperties)) === 'object' && instanceProperties !== null) {
            copyProperties(this, instanceProperties);
        }
    }
    /**
     * Set up the enum, close the class.
     * 
     * @param arg Either an object whose properties provide the names
     * and values (which must be mutable objects) of the enum constants.
     * Or an Array whose elements are used as the names of the enum constants
     * The values are create by instantiating the current class.
     */

    _createClass(Enum, [{
        key: 'toString',

        /**
         * Default `toString()` method for enum constant.
         */
        value: function toString() {
            return this.constructor.name + '.' + this.name;
        }
    }], [{
        key: 'initEnum',
        value: function initEnum(arg) {
            Object.defineProperty(this, 'enumValues', {
                value: [],
                configurable: false,
                writable: false,
                enumerable: true
            });
            if (Array.isArray(arg)) {
                this._enumValuesFromArray(arg);
            } else {
                this._enumValuesFromObject(arg);
            }
            Object.freeze(this.enumValues);
            this[INITIALIZED] = true;
            return this;
        }
    }, {
        key: '_enumValuesFromArray',
        value: function _enumValuesFromArray(arr) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    this._pushEnumValue(new this(), key);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: '_enumValuesFromObject',
        value: function _enumValuesFromObject(obj) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var key = _step2.value;

                    var value = new this(obj[key]);
                    this._pushEnumValue(value, key);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: '_pushEnumValue',
        value: function _pushEnumValue(enumValue, name) {
            enumValue.name = name;
            enumValue.ordinal = this.enumValues.length;
            Object.defineProperty(this, name, {
                value: enumValue,
                configurable: false,
                writable: false,
                enumerable: true
            });
            this.enumValues.push(enumValue);
        }

        /**
         * Given the name of an enum constant, return its value.
         */

    }, {
        key: 'enumValueOf',
        value: function enumValueOf(name) {
            return this.enumValues.find(function (x) {
                return x.name === name;
            });
        }

        /**
         * Make enum classes iterable
         */

    }, {
        key: Symbol.iterator,
        value: function value() {
            return this.enumValues[Symbol.iterator]();
        }
    }]);

    return Enum;
}();

function copyProperties(target, source) {
    // Ideally, we’d use Reflect.ownKeys() here,
    // but I don’t want to depend on a polyfill
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = Object.getOwnPropertyNames(source)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var key = _step3.value;

            var desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return target;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Event_AbstractNotifyPropertyChangedEventTarget__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Command__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__State__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Transition__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStateMachine; });






class StateMachine extends __WEBPACK_IMPORTED_MODULE_0__Event_AbstractNotifyPropertyChangedEventTarget__["a" /* AbstractNotifyPropertyChangedEventTarget */] {

  constructor(intialState) {
    this._currentState = initialState;
  }

  get currentState() {
    return this._currentState;
  }

  set currentState(state) {
    this._currentState = state;
    onPropertyChanged("currentState");
  }

  defineTransition(transition) {
    (this._transitions = this._transitions || []).push(transition);
    return this;
  }

  moveNext(command) {
    this._transitions = this._transitions || [];
    var nextStates = this._transitions.slice(0).filter((t) => t.originalState !== this._currentState || t.command !== command).map((t) => t.finalState);
    if (nextStates.length !== 0)
      currentState = nextStates.pop();
    return this;
  }

  onPropertyChanged(propertyName) {
    super.onPropertyChanged(propertyName);
    if (propertyName === "currentState")
      onStateTransitioned(this.currentState);
  }

  onStateTransitioned(newState) {
    this.dispatchEvent("StateTransitioned", newState);
  }

}

let AppStateMachine = new StateMachine(__WEBPACK_IMPORTED_MODULE_2__State__["a" /* State */].Inactive);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AbstractEventTarget {

  constructor() {
    if (this.constructor.name === "AbstractEventTarget") {
      throw new Error(`Can't instantiate ${this.constructor.name}`);
    }
  }

  addEventListener(event, callback) {
    this._callbacks = this._callbacks || {};
    (this._callbacks[event] = this._callbacks[event] || []).push(callback);
    return this;
  }

  removeEventListener(event = null, callback = null) {
    this._callbacks = this._callbacks || {};
    if (!event) {
      // all
      this._callbacks = {};
    } else if (!callback) {
      // remove all event-specific handlers
      delete this._callbacks[event];
    } else {
      // remove specific handler
      var callbacks = this._callbacks[event];
      this._callbacks[event] = callback.filter((cb) => cb === callback);
    }
    return this;
  }

  dispatchEvent(event) {
    var self = this;
    var args = Array.from(arguments).slice(1);
    this._callbacks = this._callbacks || {};
    (this._callbacks[event] = this._callbacks[event] || []).slice(0).forEach((cb) => cb.apply(self, args));
    return this;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AbstractEventTarget;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractEventTarget__ = __webpack_require__(5);


class AbstractNotifyPropertyChangedEventTarget extends __WEBPACK_IMPORTED_MODULE_0__AbstractEventTarget__["a" /* AbstractEventTarget */] {

  constructor() {
    if (this.constructor.name === "AbstractNotifyPropertyChangedEventTarget") {
      throw new Error(`Can't instantiate ${this.constructor.name}`);
    }
    this.addEventListener("PropertyChanged", this.onPropertyChanged);
  }

  onPropertyChanged(propertyName) {
    this.dispatchEvent("PropertyChanged", propertyName);
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = AbstractNotifyPropertyChangedEventTarget;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FiniteStateMachine_Command__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FiniteStateMachine_Transition__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FiniteStateMachine_StateMachine__ = __webpack_require__(4);





class Application {

  constructor() {
    __WEBPACK_IMPORTED_MODULE_3__FiniteStateMachine_StateMachine__["a" /* AppStateMachine */].defineTransition(new __WEBPACK_IMPORTED_MODULE_2__FiniteStateMachine_Transition__["a" /* Transition */](__WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Inactive, __WEBPACK_IMPORTED_MODULE_0__FiniteStateMachine_Command__["a" /* Command */].Activate, __WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Active));
    __WEBPACK_IMPORTED_MODULE_3__FiniteStateMachine_StateMachine__["a" /* AppStateMachine */].defineTransition(new __WEBPACK_IMPORTED_MODULE_2__FiniteStateMachine_Transition__["a" /* Transition */](__WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Inactive, __WEBPACK_IMPORTED_MODULE_0__FiniteStateMachine_Command__["a" /* Command */].Dispose, __WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Disposed));
    __WEBPACK_IMPORTED_MODULE_3__FiniteStateMachine_StateMachine__["a" /* AppStateMachine */].defineTransition(new __WEBPACK_IMPORTED_MODULE_2__FiniteStateMachine_Transition__["a" /* Transition */](__WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Active, __WEBPACK_IMPORTED_MODULE_0__FiniteStateMachine_Command__["a" /* Command */].Deactivate, __WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Inactive));
    __WEBPACK_IMPORTED_MODULE_3__FiniteStateMachine_StateMachine__["a" /* AppStateMachine */].defineTransition(new __WEBPACK_IMPORTED_MODULE_2__FiniteStateMachine_Transition__["a" /* Transition */](__WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Active, __WEBPACK_IMPORTED_MODULE_0__FiniteStateMachine_Command__["a" /* Command */].Dispose, __WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Disposed));
    __WEBPACK_IMPORTED_MODULE_3__FiniteStateMachine_StateMachine__["a" /* AppStateMachine */].addEventListener("StateChanged", this.onStateChanged);
  }

  get rootElement() {
    return this._rootElement;
  }

  initialize(rootElement) {
    this._rootElement = rootElement;
  }

  onStateChanged(newState) {
    switch (newState) {
      case __WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Inactive:
        // TODO: logics when app is inactive.
        break;
      case __WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Active:
        // TODO: logics when app is active.
        break;
      case __WEBPACK_IMPORTED_MODULE_1__FiniteStateMachine_State__["a" /* State */].Disposed:
        // TODO: logics when app is disposed.
        break;
      default:
        throw new Error("State out of range!");
    }
  }

}

// Bootstrap
let app = new Application();
document.addEventListener("loadend", (e) => app.initialize(document.getElementById("app")));


/***/ })
/******/ ]);