/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var application_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(application_1.Application, null), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var animation_1 = __webpack_require__(4);
	var playables_1 = __webpack_require__(12);
	var fullList_1 = __webpack_require__(19);
	var Application = (function (_super) {
	    __extends(Application, _super);
	    function Application() {
	        _super.apply(this, arguments);
	    }
	    Application.prototype.render = function () {
	        return React.createElement("div", null, React.createElement("section", {className: "list-to-play"}, React.createElement("h1", null, "Playable List"), React.createElement(playables_1.ListToPlay, null)), React.createElement("section", {className: "animation"}, React.createElement("h1", null, "Animation"), React.createElement(animation_1.Animation, null)), React.createElement("section", {className: "full-list"}, React.createElement("h1", null, "Choosing List"), React.createElement(fullList_1.FullList, null)));
	    };
	    return Application;
	}(React.Component));
	exports.Application = Application;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var dancingControls_1 = __webpack_require__(5);
	var Animation = (function (_super) {
	    __extends(Animation, _super);
	    function Animation() {
	        _super.call(this);
	        this.state = {
	            isPlaying: dancingControls_1.default.isPlaying(),
	            selectedStyle: dancingControls_1.default.getSelectedStyle()
	        };
	    }
	    Animation.prototype.componentWillMount = function () {
	        dancingControls_1.default.addChangeListener(this.onChange.bind(this));
	    };
	    Animation.prototype.componentWillUnmount = function () {
	        dancingControls_1.default.removeChangeListener(this.onChange.bind(this));
	    };
	    Animation.prototype.onChange = function () {
	        this.setState({
	            isPlaying: dancingControls_1.default.isPlaying(),
	            selectedStyle: dancingControls_1.default.getSelectedStyle()
	        });
	    };
	    Animation.prototype.render = function () {
	        var classPlaying = this.state.isPlaying ? 'play' : 'stop';
	        var gifRef = this.state.selectedStyle ? this.state.selectedStyle.href : null;
	        return React.createElement("div", null, React.createElement("iframe", {src: gifRef, className: classPlaying}));
	    };
	    return Animation;
	}(React.Component));
	exports.Animation = Animation;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var events = __webpack_require__(6);
	var appDispatcher_1 = __webpack_require__(7);
	/**
	 * Mocked values for dancing styles
	 */
	var isPlaying = false;
	var CHANGE_EVENT = 'change';
	var actualStyle;
	/**
	 * I am in charge of informing the component a change event
	 */
	var PlayingActions = (function (_super) {
	    __extends(PlayingActions, _super);
	    function PlayingActions() {
	        _super.apply(this, arguments);
	    }
	    PlayingActions.prototype.addChangeListener = function (cb) {
	        this.on(CHANGE_EVENT, cb);
	    };
	    PlayingActions.prototype.removeChangeListener = function (cb) {
	        this.removeListener(CHANGE_EVENT, cb);
	    };
	    PlayingActions.prototype.isPlaying = function () {
	        return isPlaying;
	    };
	    PlayingActions.prototype.toggleAnimation = function (dancingStyle) {
	        isPlaying = !isPlaying;
	        if (isPlaying) {
	            actualStyle = dancingStyle;
	        }
	    };
	    PlayingActions.prototype.getSelectedStyle = function () {
	        return actualStyle;
	    };
	    PlayingActions.prototype.emitChange = function () {
	        this.emit(CHANGE_EVENT);
	    };
	    return PlayingActions;
	}(events.EventEmitter));
	var playingStore = new PlayingActions();
	appDispatcher_1.default.register(function (action) {
	    switch (action.type) {
	        case "toggleDancing":
	            playingStore.toggleAnimation(action.data);
	            break;
	        default:
	    }
	    playingStore.emitChange();
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = playingStore;


/***/ },
/* 6 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var flux = __webpack_require__(8);
	var appDispatcher = new flux.Dispatcher();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = appDispatcher;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	module.exports.Dispatcher = __webpack_require__(9);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 *
	 * @preventMunge
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var invariant = __webpack_require__(11);
	
	var _prefix = 'ID_';
	
	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */
	
	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);
	
	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }
	
	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */
	
	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };
	
	  /**
	   * Removes a callback based on its token.
	   */
	
	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };
	
	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */
	
	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };
	
	  /**
	   * Dispatches a payload to all registered callbacks.
	   */
	
	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };
	
	  /**
	   * Is this Dispatcher currently dispatching.
	   */
	
	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };
	
	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */
	
	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };
	
	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */
	
	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };
	
	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	
	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };
	
	  return Dispatcher;
	})();
	
	module.exports = Dispatcher;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var playable_1 = __webpack_require__(13);
	var dancingStyles_1 = __webpack_require__(18);
	var ListToPlay = (function (_super) {
	    __extends(ListToPlay, _super);
	    function ListToPlay() {
	        _super.call(this);
	        this.state = {
	            stylesLearnt: dancingStyles_1.default.getDancingLearnt(),
	            existingStyles: dancingStyles_1.default.getDancingStyles()
	        };
	    }
	    ListToPlay.prototype.componentWillMount = function () {
	        dancingStyles_1.default.addChangeListener(this.onChange.bind(this));
	    };
	    ListToPlay.prototype.componentWillUnmount = function () {
	        dancingStyles_1.default.removeChangeListener(this.onChange);
	    };
	    ListToPlay.prototype.onChange = function () {
	        this.setState({
	            stylesLearnt: dancingStyles_1.default.getDancingLearnt(),
	            existingStyles: dancingStyles_1.default.getDancingStyles()
	        });
	    };
	    ListToPlay.prototype.render = function () {
	        var styles = this.state.stylesLearnt.map(function (style, index) {
	            return (React.createElement(playable_1.Playable, {href: style.href, song: style.song, style: style.style, key: index}));
	        });
	        return React.createElement("ul", null, styles);
	    };
	    return ListToPlay;
	}(React.Component));
	exports.ListToPlay = ListToPlay;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var learningActions_1 = __webpack_require__(14);
	var dancingControls_1 = __webpack_require__(5);
	var playActions_1 = __webpack_require__(16);
	var Playable = (function (_super) {
	    __extends(Playable, _super);
	    function Playable() {
	        _super.apply(this, arguments);
	    }
	    Playable.prototype.forgetDancingStyle = function () {
	        learningActions_1.default.forgetDancingStyle(this.props);
	    };
	    Playable.prototype.togglePlay = function () {
	        playActions_1.default.toggleAnimation(this.props);
	    };
	    Playable.prototype.render = function () {
	        var isPlayingNow = dancingControls_1.default.isPlaying() && dancingControls_1.default.getSelectedStyle().style === this.props.style;
	        var textButton = "Play!";
	        if (isPlayingNow) {
	            textButton = "Stop!";
	        }
	        return React.createElement("li", null, this.props.song, React.createElement("button", {onClick: this.togglePlay.bind(this)}, textButton), React.createElement("button", {onClick: this.forgetDancingStyle.bind(this)}, "Remove"));
	    };
	    return Playable;
	}(React.Component));
	exports.Playable = Playable;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var appDispatcher_1 = __webpack_require__(7);
	var CommonAction_1 = __webpack_require__(15);
	var LearningActions = (function () {
	    function LearningActions() {
	    }
	    LearningActions.prototype.forgetDancingStyle = function (dancingStyle) {
	        appDispatcher_1.default.dispatch(new CommonAction_1.default("forgetDancingStyle", dancingStyle));
	    };
	    LearningActions.prototype.learnDancingStyle = function (dancingStyle) {
	        appDispatcher_1.default.dispatch(new CommonAction_1.default("learnDancingStyle", dancingStyle));
	    };
	    LearningActions.prototype.setPlayingStyle = function (dancingStyle) {
	        appDispatcher_1.default.dispatch(new CommonAction_1.default("setPlayingStyle", dancingStyle));
	    };
	    return LearningActions;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new LearningActions();


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	var CommonAction = (function () {
	    function CommonAction(type, msg) {
	        this.type = type;
	        this.msg = msg;
	    }
	    return CommonAction;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CommonAction;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var appDispatcher_1 = __webpack_require__(7);
	var PlayAction_1 = __webpack_require__(17);
	var PlayActions = (function () {
	    function PlayActions() {
	    }
	    PlayActions.prototype.toggleAnimation = function (dancingStyle) {
	        appDispatcher_1.default.dispatch(new PlayAction_1.default("toggleDancing", dancingStyle));
	    };
	    return PlayActions;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new PlayActions();


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	var PlayAction = (function () {
	    function PlayAction(type, dancingStyle) {
	        this.type = type;
	        this.data = dancingStyle;
	    }
	    return PlayAction;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PlayAction;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var events = __webpack_require__(6);
	var appDispatcher_1 = __webpack_require__(7);
	/**
	 * Mocked values for dancing styles
	 */
	var dancingStyles = {
	    existingStyles: [{
	            "style": "metal",
	            "song": "motorhead",
	            "href": "//giphy.com/embed/Lsqqem0OD4xCU"
	        }, {
	            "style": "rock",
	            "song": "RockSchool",
	            "href": "//giphy.com/embed/b09xElu8in7Lq"
	        }, {
	            "style": "salsa",
	            "song": "dogSalsa",
	            "href": "//giphy.com/embed/qYBwkyptCLXaw"
	        }],
	    stylesLearnt: []
	};
	var selectedStyle;
	var CHANGE_EVENT = 'change';
	/**
	 * I am in charge of informing the component a change event
	 */
	var DancingStylesStore = (function (_super) {
	    __extends(DancingStylesStore, _super);
	    function DancingStylesStore() {
	        _super.apply(this, arguments);
	    }
	    DancingStylesStore.prototype.addChangeListener = function (cb) {
	        this.on(CHANGE_EVENT, cb);
	    };
	    DancingStylesStore.prototype.removeChangeListener = function (cb) {
	        this.removeListener(CHANGE_EVENT, cb);
	    };
	    DancingStylesStore.prototype.forgetDancingStyle = function (dancingStyle) {
	        var newStylesLearnt = dancingStyles.stylesLearnt.filter(function (styleLearnt) { return styleLearnt.style !== dancingStyle.style; });
	        var newExistingStyles = dancingStyles.existingStyles.concat(dancingStyle);
	        dancingStyles = {
	            stylesLearnt: newStylesLearnt,
	            existingStyles: newExistingStyles
	        };
	    };
	    DancingStylesStore.prototype.learnDancingStyle = function (dancingStyle) {
	        var newExistingStyles = dancingStyles.existingStyles.filter(function (existingStyle) { return existingStyle.style !== dancingStyle.style; });
	        var newStylesLearnt = dancingStyles.stylesLearnt.concat(dancingStyle);
	        dancingStyles = {
	            stylesLearnt: newStylesLearnt,
	            existingStyles: newExistingStyles
	        };
	    };
	    DancingStylesStore.prototype.emitChange = function () {
	        this.emit(CHANGE_EVENT);
	    };
	    DancingStylesStore.prototype.getDancingStyles = function () {
	        return dancingStyles.existingStyles;
	    };
	    DancingStylesStore.prototype.getDancingLearnt = function () {
	        return dancingStyles.stylesLearnt;
	    };
	    DancingStylesStore.prototype.getExistingStyles = function () {
	        return {
	            stylesLearnt: this.getDancingLearnt(),
	            existingStyle: this.getDancingStyles()
	        };
	    };
	    return DancingStylesStore;
	}(events.EventEmitter));
	var dancingStylesStore = new DancingStylesStore();
	appDispatcher_1.default.register(function (action) {
	    switch (action.type) {
	        case "learnDancingStyle":
	            dancingStylesStore.learnDancingStyle(action.msg);
	            break;
	        case "forgetDancingStyle":
	            dancingStylesStore.forgetDancingStyle(action.msg);
	            break;
	        default:
	    }
	    dancingStylesStore.emitChange();
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = dancingStylesStore;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var listItem_1 = __webpack_require__(20);
	var learningActions_1 = __webpack_require__(14);
	var dancingStyles_1 = __webpack_require__(18);
	var FullList = (function (_super) {
	    __extends(FullList, _super);
	    function FullList() {
	        _super.call(this);
	        this.state = {
	            stylesLearnt: dancingStyles_1.default.getDancingLearnt(),
	            existingStyles: dancingStyles_1.default.getDancingStyles()
	        };
	    }
	    FullList.prototype.componentWillMount = function () {
	        dancingStyles_1.default.addChangeListener(this.onChange.bind(this));
	    };
	    FullList.prototype.componentWillUnmount = function () {
	        dancingStyles_1.default.removeChangeListener(this.onChange.bind(this));
	    };
	    FullList.prototype.onChange = function () {
	        this.setState({
	            stylesLearnt: dancingStyles_1.default.getDancingLearnt(),
	            existingStyles: dancingStyles_1.default.getDancingStyles()
	        });
	    };
	    FullList.prototype.learnDancingStyle = function (style) {
	        return function () {
	            learningActions_1.default.learnDancingStyle(style);
	        };
	    };
	    FullList.prototype.render = function () {
	        var _this = this;
	        var styles = this.state.existingStyles.map(function (style, index) {
	            return (React.createElement(listItem_1.ListItem, {liText: style.song, onLiClick: _this.learnDancingStyle(style), key: index}));
	        });
	        return React.createElement("ul", null, styles);
	    };
	    return FullList;
	}(React.Component));
	exports.FullList = FullList;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	/**
	 * Representational component
	 */
	var ListItem = (function (_super) {
	    __extends(ListItem, _super);
	    function ListItem() {
	        _super.apply(this, arguments);
	    }
	    ListItem.prototype.render = function () {
	        return React.createElement("li", {onClick: this.props.onLiClick}, this.props.liText);
	    };
	    return ListItem;
	}(React.Component));
	exports.ListItem = ListItem;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map