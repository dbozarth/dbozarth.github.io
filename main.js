(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_main_details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company/main/details/details.component */ "./src/app/company/main/details/details.component.ts");
/* harmony import */ var _company_main_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company/main/edit/edit.component */ "./src/app/company/main/edit/edit.component.ts");
/* harmony import */ var _company_site_details_site_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company/site/details/site-details.component */ "./src/app/company/site/details/site-details.component.ts");
/* harmony import */ var _company_site_edit_site_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/site/edit/site-edit.component */ "./src/app/company/site/edit/site-edit.component.ts");
/* harmony import */ var _company_site_jobs_add_job_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company/site/jobs/add/job-add.component */ "./src/app/company/site/jobs/add/job-add.component.ts");
/* harmony import */ var _company_site_jobs_edit_edit_job_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company/site/jobs/edit/edit-job.component */ "./src/app/company/site/jobs/edit/edit-job.component.ts");
/* harmony import */ var _company_site_jobs_show_show_job_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company/site/jobs/show/show-job.component */ "./src/app/company/site/jobs/show/show-job.component.ts");
/* harmony import */ var _company_site_jobs_lists_list_jobs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company/site/jobs/lists/list-jobs.component */ "./src/app/company/site/jobs/lists/list-jobs.component.ts");











var routes = [
    { path: 'company', component: _company_main_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
    { path: 'company/edit/:id', component: _company_main_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'company/site/:id', component: _company_site_details_site_details_component__WEBPACK_IMPORTED_MODULE_5__["SiteDetailsComponent"] },
    { path: 'company/site/edit/:id', component: _company_site_edit_site_edit_component__WEBPACK_IMPORTED_MODULE_6__["SiteEditComponent"] },
    { path: 'company/site/job/add/:id', component: _company_site_jobs_add_job_add_component__WEBPACK_IMPORTED_MODULE_7__["JobAddComponent"] },
    { path: 'company/site/job/edit/:id', component: _company_site_jobs_edit_edit_job_component__WEBPACK_IMPORTED_MODULE_8__["EditJobComponent"] },
    { path: 'company/site/job/show/:id', component: _company_site_jobs_show_show_job_component__WEBPACK_IMPORTED_MODULE_9__["ShowJobComponent"] },
    { path: 'company/site/job/list/:id', component: _company_site_jobs_lists_list_jobs_component__WEBPACK_IMPORTED_MODULE_10__["ListJobsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-bg {\n  background-color: inherit;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<app-sidenav></app-sidenav>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'uikit-firebase-admin';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_ngb_date_firestore_adapter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/ngb-date-firestore-adapter.service */ "./src/app/services/ngb-date-firestore-adapter.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/angular-material.module */ "./src/app/modules/angular-material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _static_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./static/navbar/navbar.component */ "./src/app/static/navbar/navbar.component.ts");
/* harmony import */ var _static_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./static/sidenav/sidenav.component */ "./src/app/static/sidenav/sidenav.component.ts");
/* harmony import */ var _static_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./static/footer/footer.component */ "./src/app/static/footer/footer.component.ts");
/* harmony import */ var _company_main_details_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./company/main/details/details.component */ "./src/app/company/main/details/details.component.ts");
/* harmony import */ var _company_main_edit_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./company/main/edit/edit.component */ "./src/app/company/main/edit/edit.component.ts");
/* harmony import */ var _company_main_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company/main/settings/settings.component */ "./src/app/company/main/settings/settings.component.ts");
/* harmony import */ var _company_main_documents_documents_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./company/main/documents/documents.component */ "./src/app/company/main/documents/documents.component.ts");
/* harmony import */ var _company_site_details_site_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./company/site/details/site-details.component */ "./src/app/company/site/details/site-details.component.ts");
/* harmony import */ var _company_site_edit_site_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./company/site/edit/site-edit.component */ "./src/app/company/site/edit/site-edit.component.ts");
/* harmony import */ var _company_site_jobs_add_job_add_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./company/site/jobs/add/job-add.component */ "./src/app/company/site/jobs/add/job-add.component.ts");
/* harmony import */ var _company_site_jobs_edit_edit_job_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./company/site/jobs/edit/edit-job.component */ "./src/app/company/site/jobs/edit/edit-job.component.ts");
/* harmony import */ var _company_site_jobs_show_show_job_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./company/site/jobs/show/show-job.component */ "./src/app/company/site/jobs/show/show-job.component.ts");
/* harmony import */ var _company_site_jobs_lists_list_jobs_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./company/site/jobs/lists/list-jobs.component */ "./src/app/company/site/jobs/lists/list-jobs.component.ts");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "./src/app/my-nav/my-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _static_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _static_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__["SidenavComponent"],
                _static_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _company_main_details_details_component__WEBPACK_IMPORTED_MODULE_17__["DetailsComponent"],
                _company_main_edit_edit_component__WEBPACK_IMPORTED_MODULE_18__["EditComponent"],
                _company_main_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"],
                _company_main_documents_documents_component__WEBPACK_IMPORTED_MODULE_20__["DocumentsComponent"],
                _company_site_details_site_details_component__WEBPACK_IMPORTED_MODULE_21__["SiteDetailsComponent"],
                _company_site_edit_site_edit_component__WEBPACK_IMPORTED_MODULE_22__["SiteEditComponent"],
                _company_site_jobs_add_job_add_component__WEBPACK_IMPORTED_MODULE_23__["JobAddComponent"],
                _company_site_jobs_edit_edit_job_component__WEBPACK_IMPORTED_MODULE_24__["EditJobComponent"],
                _company_site_jobs_show_show_job_component__WEBPACK_IMPORTED_MODULE_25__["ShowJobComponent"],
                _company_site_jobs_lists_list_jobs_component__WEBPACK_IMPORTED_MODULE_26__["ListJobsComponent"],
                _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_27__["MyNavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_12__["AngularMaterialModule"],
                _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_28__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
            ],
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDateAdapter"], useClass: _services_ngb_date_firestore_adapter_service__WEBPACK_IMPORTED_MODULE_10__["NgbDateFirestoreAdapter"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/company/main/details/details.component.css":
/*!************************************************************!*\
  !*** ./src/app/company/main/details/details.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-bg-f {\n  background: linear-gradient(to left, #f5f5f5, #eff1f3);\n}\n\n.nav-tabs .nav-link.active {\n  color: #170558;\n}\n\n.footer-bg {\n  background-color: #fdfdfd;\n}\n\na:hover {\n  color: dimgray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9tYWluL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L21haW4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJnLWYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2Y1ZjVmNSwgI2VmZjFmMyk7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICMxNzA1NTg7XG59XG5cbi5mb290ZXItYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IGRpbWdyYXk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/company/main/details/details.component.html":
/*!*************************************************************!*\
  !*** ./src/app/company/main/details/details.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-medium-bottom\" *ngFor=\"let main of mainCompany\">\n    <div class=\"uk-card uk-card-default\">\n        <div class=\"uk-card-header bg-info\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons pr-1\">place</i>Main Company - {{main.company_name}}</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Main Campus Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_city}}, {{main.main_state}}, {{main.main_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Main Phone: {{main.main_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Main Email: {{main.main_email}}</li>\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Ship To Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.shipping_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.shipping_city}}, {{main.shipping_state}}, {{main.shipping_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.shipping_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{main.shipping_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{main.shipping_email}}</li>\n\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Main Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_contact_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_contact_email}}</li>\n\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Human Resources Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_hr_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_hr_contact_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_hr_contact_email}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-footer d-flex justify-content-between footer-bg\">\n            <a routerLink=\"/company/edit/{{main.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-create ml-1 mr-1\"></i>edit</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>jobs</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"container uk-margin-medium-bottom\" *ngFor=\"let site of sites\">\n    <div class=\"uk-card uk-card-default\">\n        <div class=\"uk-card-header bg-info\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons pr-1\">place</i>Site Location - {{site.site_name}}</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Campus Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_city}}, {{site.site_state}}, {{site.site_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{site.site_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{site.site_email}}</li>\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Ship To Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_city}}, {{site.site_ship_to_state}}, {{site.site_ship_to_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{site.site_ship_to_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{site.site_ship_to_email}}</li>\n\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Main Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_first_name}} {{site.site_contact_last_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_email}}</li>\n\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Maintenance Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_email}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-footer d-flex justify-content-between footer-bg\">\n            <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-create ml-1 mr-1\"></i>edit</a>\n            <a routerLink=\"/company/site/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>jobs</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/main/details/details.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/company/main/details/details.component.ts ***!
  \***********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/site.service */ "./src/app/services/site.service.ts");



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(ss) {
        this.ss = ss;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.getMains().subscribe(function (mainCompany) {
            _this.mainCompany = mainCompany;
        });
        this.ss.getSites().subscribe(function (sites) {
            _this.sites = sites;
        });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/company/main/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/company/main/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_2__["SiteService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/company/main/documents/documents.component.css":
/*!****************************************************************!*\
  !*** ./src/app/company/main/documents/documents.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvbWFpbi9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/company/main/documents/documents.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/company/main/documents/documents.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  documents works!\n</p>\n"

/***/ }),

/***/ "./src/app/company/main/documents/documents.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/company/main/documents/documents.component.ts ***!
  \***************************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__(/*! ./documents.component.html */ "./src/app/company/main/documents/documents.component.html"),
            styles: [__webpack_require__(/*! ./documents.component.css */ "./src/app/company/main/documents/documents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/company/main/edit/edit.component.css":
/*!******************************************************!*\
  !*** ./src/app/company/main/edit/edit.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvbWFpbi9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/company/main/edit/edit.component.html":
/*!*******************************************************!*\
  !*** ./src/app/company/main/edit/edit.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-small-bottom\">\n  <div class=\"uk-card uk-card-default\">\n    <div class=\"uk-card-header bg-info\">\n        <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n            <div class=\"uk-width-expand\">\n                <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons uk-text-white mr-1\">my_location</i>Main Campus Details - Edit</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"uk-card-body\">\n      <small class=\"uk-text-muted\">Please make required changes and submit to to save them.</small>\n      <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Campus Location Details</h6>\n        <form #mainForm=\"ngForm\" (ngSubmit)=\"onSubmit(mainForm)\">\n          <div class=\"form-group\">\n            <label for=\"company_name\">Company Name</label>\n            <input\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                name=\"company_name\"\n                #company_name=\"ngModel\"\n                [ngClass]=\"{'is-invalid':company_name.errors && company_name.touched}\"\n                [(ngModel)]=\"main.company_name\"\n                minlength=\"5\"\n                required\n            >\n\n            <div [hidden]=\"!company_name.errors?.required\" class=\"invalid-feedback\">\n              You must provide a value!\n            </div>\n            <div [hidden]=\"!company_name.errors?.minlength\" class=\"invalid-feedback\">\n                Value must be 5 characters minimum please!\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"main_address\">Main Address</label>\n              <input\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  name=\"main_address\"\n                  #main_address=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':main_address.errors && main_address.touched}\"\n                  [(ngModel)]=\"main.main_address\"\n                  minlength=\"10\"\n                  required\n              >\n\n              <div [hidden]=\"!main_address.errors?.required\" class=\"invalid-feedback\">\n                You must provide a value!\n              </div>\n              <div [hidden]=\"!main_address.errors?.minlength\" class=\"invalid-feedback\">\n                  Value must be 10 characters minimum please!\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"main_address_2\">Main Address 2</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control form-control-sm\"\n                    name=\"main_address_2\"\n                    #main_address_2=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':main_address_2.errors && main_address_2.touched}\"\n                    [(ngModel)]=\"main.main_address_2\"\n                    minlength=\"10\"\n                    required\n                >\n\n                <div [hidden]=\"!main_address_2.errors?.required\" class=\"invalid-feedback\">\n                  You must provide a value!\n                </div>\n                <div [hidden]=\"!main_address_2.errors?.minlength\" class=\"invalid-feedback\">\n                    Value must be 10 characters minimum please!\n                </div>\n              </div>\n\n            <div class=\"form-row\">\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"main_city\">Main City</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control form-control-sm\"\n                        name=\"main_city\"\n                        #main_city=\"ngModel\"\n                        [ngClass]=\"{'is-invalid':main_city.errors && main_city.touched}\"\n                        [(ngModel)]=\"main.main_city\"\n                        minlength=\"5\"\n                        required\n                    >\n\n                    <div [hidden]=\"!main_city.errors?.required\" class=\"invalid-feedback\">\n                      You must provide a value!\n                    </div>\n                    <div [hidden]=\"!main_city.errors?.minlength\" class=\"invalid-feedback\">\n                        Value must be 5 characters minimum please!\n                    </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                      <label for=\"main_state\">Main State</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"main_state\"\n                          #main_state=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':main_state.errors && main_state.touched}\"\n                          [(ngModel)]=\"main.main_state\"\n                          minlength=\"2\"\n                          required\n                      >\n\n                      <div [hidden]=\"!main_state.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!main_state.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 2 characters minimum please!\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"main_zip\">Main Zip Code</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"main_zip\"\n                            #main_zip=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':main_zip.errors && main_zip.touched}\"\n                            [(ngModel)]=\"main.main_zip\"\n                            minlength=\"5\"\n                            required\n                        >\n\n                        <div [hidden]=\"!main_zip.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!main_zip.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 5 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"main_country\">Main Country</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"main_country\"\n                              #main_country=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':main_country.errors && main_country.touched}\"\n                              [(ngModel)]=\"main.main_country\"\n                              minlength=\"2\"\n                              required\n                          >\n\n                          <div [hidden]=\"!main_country.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!main_country.errors?.minlength\" class=\"invalid-feedback\">\n                              Value must be 2 characters minimum please!\n                          </div>\n                      </div>\n                    </div>\n            </div>\n\n            <div class=\"form-row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <label for=\"main_phone\"><i class=\"icon ion-md-call mr-1\"></i>Main Phone</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"main_phone\"\n                          #main_phone=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':main_phone.errors && main_phone.touched}\"\n                          [(ngModel)]=\"main.main_phone\"\n                          minlength=\"10\"\n                          pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                          required\n                      >\n\n                      <div [hidden]=\"!main_phone.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!main_phone.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 10 characters minimum please!\n                      </div>\n                      <div [hidden]=\"!main_phone.errors?.pattern\" class=\"invalid-feedback\">\n                          Value must be a valid phone! (123)123-4567 or 123-123-4567 or 1231234567\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"main_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main Email</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"main_email\"\n                            #main_email=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':main_email.errors && main_email.touched}\"\n                            [(ngModel)]=\"main.main_email\"\n                            pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                            required\n                        >\n\n                        <div [hidden]=\"!main_email.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!main_email.errors?.pattern\" class=\"invalid-feedback\">\n                            Value must be a valid email address!\n                        </div>\n                    </div>\n                  </div>\n              </div>\n              <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Campus Shipping Details</h6>\n\n                <div class=\"form-group\">\n                    <label for=\"shipping_address\">Shipping Address</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control form-control-sm\"\n                        name=\"shipping_address\"\n                        #shipping_address=\"ngModel\"\n                        [ngClass]=\"{'is-invalid':shipping_address.errors && shipping_address.touched}\"\n                        [(ngModel)]=\"main.shipping_address\"\n                        minlength=\"10\"\n                        required\n                    >\n\n                    <div [hidden]=\"!shipping_address.errors?.required\" class=\"invalid-feedback\">\n                      You must provide a value!\n                    </div>\n                    <div [hidden]=\"!shipping_address.errors?.minlength\" class=\"invalid-feedback\">\n                        Value must be 10 characters minimum please!\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"shipping_address_2\">Shipping Address 2</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"shipping_address_2\"\n                          #shipping_address_2=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':shipping_address_2.errors && shipping_address_2.touched}\"\n                          [(ngModel)]=\"main.shipping_address_2\"\n                          minlength=\"10\"\n                          required\n                      >\n\n                      <div [hidden]=\"!shipping_address_2.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!shipping_address_2.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 10 characters minimum please!\n                      </div>\n                    </div>\n\n                  <div class=\"form-row\">\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"shipping_city\">Shipping City</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"shipping_city\"\n                              #shipping_city=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':shipping_city.errors && shipping_city.touched}\"\n                              [(ngModel)]=\"main.shipping_city\"\n                              minlength=\"5\"\n                              required\n                          >\n\n                          <div [hidden]=\"!shipping_city.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!shipping_city.errors?.minlength\" class=\"invalid-feedback\">\n                              Value must be 5 characters minimum please!\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"shipping_state\">Shipping State</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"shipping_state\"\n                                #shipping_state=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':shipping_state.errors && shipping_state.touched}\"\n                                [(ngModel)]=\"main.shipping_state\"\n                                minlength=\"2\"\n                                required\n                            >\n\n                            <div [hidden]=\"!shipping_state.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!shipping_state.errors?.minlength\" class=\"invalid-feedback\">\n                                Value must be 2 characters minimum please!\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                              <label for=\"shipping_zip\">Shipping Zip Code</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"shipping_zip\"\n                                  #shipping_zip=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':shipping_zip.errors && shipping_zip.touched}\"\n                                  [(ngModel)]=\"main.shipping_zip\"\n                                  minlength=\"5\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!shipping_zip.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!shipping_zip.errors?.minlength\" class=\"invalid-feedback\">\n                                  Value must be 5 characters minimum please!\n                              </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <label for=\"shipping_country\">Shipping Country</label>\n                                <input\n                                    type=\"text\"\n                                    class=\"form-control form-control-sm\"\n                                    name=\"shipping_country\"\n                                    #shipping_country=\"ngModel\"\n                                    [ngClass]=\"{'is-invalid':shipping_country.errors && shipping_country.touched}\"\n                                    [(ngModel)]=\"main.shipping_country\"\n                                    minlength=\"2\"\n                                    required\n                                >\n\n                                <div [hidden]=\"!shipping_country.errors?.required\" class=\"invalid-feedback\">\n                                  You must provide a value!\n                                </div>\n                                <div [hidden]=\"!shipping_country.errors?.minlength\" class=\"invalid-feedback\">\n                                    Value must be 2 characters minimum please!\n                                </div>\n                            </div>\n                          </div>\n                  </div>\n\n                  <div class=\"form-row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"shipping_phone\"><i class=\"icon ion-md-call mr-1\"></i>Shipping Phone</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"shipping_phone\"\n                                #shipping_phone=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':shipping_phone.errors && shipping_phone.touched}\"\n                                [(ngModel)]=\"main.shipping_phone\"\n                                minlength=\"10\"\n                                pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                                required\n                            >\n\n                            <div [hidden]=\"!shipping_phone.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!shipping_phone.errors?.minlength\" class=\"invalid-feedback\">\n                                Value must be 10 characters minimum please!\n                            </div>\n                            <div [hidden]=\"!shipping_phone.errors?.pattern\" class=\"invalid-feedback\">\n                                Value must be a valid phone! (123)123-4567 or 123-123-4567 or 1231234567\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                              <label for=\"shipping_email\"><i class=\"icon ion-md-mail mr-1\"></i>Shipping Email</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"shipping_email\"\n                                  #shipping_email=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':shipping_email.errors && shipping_email.touched}\"\n                                  [(ngModel)]=\"main.shipping_email\"\n                                  pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!shipping_email.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!shipping_email.errors?.pattern\" class=\"invalid-feedback\">\n                                  Value must be a valid email address!\n                              </div>\n                          </div>\n                        </div>\n                    </div>\n\n              <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">person</i>Campus Contact Details</h6>\n            <div class=\"form-row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                      <label for=\"main_contact\"><i class=\"icon ion-md-person mr-1\"></i>Main Contact Full Name</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"main_contact\"\n                          #main_contact=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':main_contact.errors && main_contact.touched}\"\n                          [(ngModel)]=\"main.main_contact\"\n                          minlength=\"5\"\n                          required\n                      >\n\n                      <div [hidden]=\"!main_contact.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!main_contact.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 5 characters minimum please!\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label for=\"main_contact_phone\"><i class=\"icon ion-md-call mr-1\"></i>Main Contact Phone</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"main_contact_phone\"\n                            #main_contact_phone=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':main_contact_phone.errors && main_contact_phone.touched}\"\n                            [(ngModel)]=\"main.main_contact_phone\"\n                            pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                            required\n                        >\n\n                        <div [hidden]=\"!main_contact_phone.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!main_contact_phone.errors?.pattern\" class=\"invalid-feedback\">\n                            Please use a valid phone number... (321) 234-4567 | 321-234-4567 | 3212344567\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <label for=\"main_contact_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main Contact Email</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"main_contact_email\"\n                              #main_contact_email=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':main_contact_email.errors && main_contact_email.touched}\"\n                              [(ngModel)]=\"main.main_contact_email\"\n                              pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                              required\n                          >\n\n                          <div [hidden]=\"!main_contact_email.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!main_contact_email.errors?.pattern\" class=\"invalid-feedback\">\n                              Please provide a valid email!\n                          </div>\n                      </div>\n                    </div>\n              </div>\n\n              <div class=\"form-row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label for=\"main_hr_contact\"><i class=\"icon ion-md-person mr-1\"></i>HR Contact Full Name</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"main_hr_contact\"\n                            #main_hr_contact=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':main_hr_contact.errors && main_hr_contact.touched}\"\n                            [(ngModel)]=\"main.main_hr_contact\"\n                            minlength=\"5\"\n                            required\n                        >\n\n                        <div [hidden]=\"!main_hr_contact.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!main_hr_contact.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 5 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <label for=\"main_hr_contact_phone\"><i class=\"icon ion-md-call mr-1\"></i>Main HR Contact Phone</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"main_hr_contact_phone\"\n                              #main_hr_contact_phone=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':main_hr_contact_phone.errors && main_hr_contact_phone.touched}\"\n                              [(ngModel)]=\"main.main_hr_contact_phone\"\n                              pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                              required\n                          >\n\n                          <div [hidden]=\"!main_hr_contact_phone.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!main_hr_contact_phone.errors?.pattern\" class=\"invalid-feedback\">\n                              Please use a valid phone number... (321) 234-4567 | 321-234-4567 | 3212344567\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"main_hr_contact_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main HR Contact Email</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"main_hr_contact_email\"\n                                #main_hr_contact_email=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':main_hr_contact_email.errors && main_hr_contact_email.touched}\"\n                                [(ngModel)]=\"main.main_hr_contact_email\"\n                                pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                required\n                            >\n\n                            <div [hidden]=\"!main_hr_contact_email.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!main_hr_contact_email.errors?.pattern\" class=\"invalid-feedback\">\n                                Please provide a valid email!\n                            </div>\n                        </div>\n                      </div>\n                </div>\n\n          <input type=\"submit\" value=\"Submit Changes\" class=\"btn btn-info btn-block mt-4\">\n        </form>\n    </div>\n    <div class=\"uk-card-footer\">\n        <div class=\"uk-card-header bg-primary-dark uk-margin-small-bottom uk-padding-small\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                  <div class=\"row d-flex align-content-center\">\n                    <div class=\"col-md-10\">\n                        <h5 class=\"uk-margin-remove-bottom uk-margin-remove-left uk-text-bold text-white\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>Site Location List</h5>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a routerLink=\"/company/edit/{{main.id}}\" class=\"uk-button uk-button-text text-white uk-margin-medium-right\"><i class=\"icon ion-md-add-circle-outline ml-1 mr-1\"></i>site</a>\n                    </div>\n                  </div>\n\n                </div>\n            </div>\n        </div>\n        <ul class=\"uk-list uk-list-divider\">\n            <li *ngFor=\"let site of sites\" class=\"uk-margin-small-left\">\n              <div class=\"row d-flex align-content-center\">\n                <div class=\"col-md-10 ext-uppercase justify-content-end\">\n                    <a routerLink=\"/company/site/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>{{site.site_name}}</a>\n\n                </div>\n                <div class=\"col-md-2 justify-content-end\">\n                    <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-medium-right\"><i class=\"icon ion-md-create mr-1\"></i>edit</a>\n                </div>\n              </div>\n\n            </li>\n        </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/main/edit/edit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/company/main/edit/edit.component.ts ***!
  \*****************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/site.service */ "./src/app/services/site.service.ts");




var EditComponent = /** @class */ (function () {
    function EditComponent(ss, router, route) {
        this.ss = ss;
        this.router = router;
        this.route = route;
        this.main = {
            company_name: '',
            main_address: '',
            main_address_2: '',
            main_city: '',
            main_state: '',
            main_zip: '',
            main_phone: '',
            main_email: '',
            main_country: '',
            main_contact_email: '',
            main_contact: '',
            main_contact_phone: '',
            main_hr_contact: '',
            main_hr_contact_email: '',
            main_hr_contact_phone: '',
            shipping_address: '',
            shipping_address_2: '',
            shipping_city: '',
            shipping_state: '',
            shipping_zip: '',
            shipping_country: '',
            shipping_phone: '',
            shipping_email: '',
            shipping_contact: ''
        };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.ss.getMain(this.id).subscribe(function (mains) { return _this.main = mains; });
        this.ss.getSites().subscribe(function (sites) {
            _this.sites = sites;
        });
    };
    EditComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            console.log('Not valid');
        }
        else {
            value.id = this.id;
            this.ss.updateMain(value);
            this.router.navigate(['/company']);
        }
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/company/main/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/company/main/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/company/main/settings/settings.component.css":
/*!**************************************************************!*\
  !*** ./src/app/company/main/settings/settings.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvbWFpbi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/main/settings/settings.component.html":
/*!***************************************************************!*\
  !*** ./src/app/company/main/settings/settings.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/company/main/settings/settings.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/company/main/settings/settings.component.ts ***!
  \*************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/company/main/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/company/main/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/company/site/details/site-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company/site/details/site-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-icon {\n  font-size: 24px;\n}\n\n.footer-bg {\n  background-color: rgb(251, 251, 251);\n}\n\n.badge-waiting-parts {\n  background-color: coral;\n  color: white;\n}\n\n.badge-waiting-schedule {\n  background-color: rgb(194, 98, 63);\n  color: white;\n}\n\n.badge-paused {\n  background-color: rgb(245, 223, 22);\n  color: darkslategray;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.dd-menu {\n  min-width: 250px;\n}\n\n.dd-button {\n  min-width: 200px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9zaXRlL2RldGFpbHMvc2l0ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9kZXRhaWxzL3NpdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZm9vdGVyLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjUxLCAyNTEpO1xufVxuXG4uYmFkZ2Utd2FpdGluZy1wYXJ0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWRnZS13YWl0aW5nLXNjaGVkdWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgOTgsIDYzKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFkZ2UtcGF1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjIzLCAyMik7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRkLW1lbnUge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uZGQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/company/site/details/site-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/company/site/details/site-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-medium-bottom\">\n    <div class=\"card uk-margin-medium-bottom\">\n        <div class=\"uk-card-header bg-info\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons pr-1\">place</i>Site Location - {{site.site_name}}</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Campus Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_city}}, {{site.site_state}}, {{site.site_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{site.site_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{site.site_email}}</li>\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Ship To Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_city}}, {{site.site_ship_to_state}}, {{site.site_ship_to_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{site.site_ship_to_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{site.site_ship_to_email}}</li>\n\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Main Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_email}}</li>\n\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Maintenance Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_email}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-footer d-flex justify-content-around footer-bg\">\n            <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-create ml-1 mr-1\"></i>edit</a>\n            <a routerLink=\"/company/site/job/list/{{site.id}}\"  class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>jobs</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <ul uk-accordion>\n                <li>\n                    <a class=\"uk-accordion-title\"><i class=\"material-icons pr-1 text-primary\">assignment</i>Jobs List</a><hr>\n                    <div class=\"uk-accordion-content\">\n                        <div class=\"d-flex justify-content-center\">\n                            <div class=\"btn-group\">\n                                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-offset=\"5,10\">\n                                    <i class=\"icon ion-md-pin text-white mr-2\"></i>Site Job Management\n                                </button>\n                                <div class=\"dropdown-menu dd-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\">\n                                  <h6 class=\"dropdown-header\">Job Actions</h6>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-add-circle text-primary mr-2\"></i>New Job</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-pulse text-danger mr-2\"></i>View Site Job Stats</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-settings text-secondary mr-2\"></i>Site Job Settings</a>\n                                  <h6 class=\"dropdown-header\">Document Actions</h6>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-print text-success mr-2\"></i>View/Print Job Reports</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-cloud-upload text-danger mr-2\"></i>Upload Files</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-eye text-danger mr-2\"></i>View Documents</a>\n                                </div>\n                              </div>\n                          </div>\n                        <hr class=\"uk-margin-small-bottom\">\n                        <ul uk-accordion>\n                            <li *ngFor=\"let job of jobs\" class=\"uk-open\">\n                                <a class=\"uk-accordion-title uk-text-small uk-text-uppercase pointer\">\n                                  <section *ngIf=\"job.job_status === 'Started'\">\n                                    <span class=\"badge badge-success mt-2 mb-2 mr-3 shadow-sm\">\n                                        <i class=\"icon ion-md-construct mr-1\"></i>\n                                        WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                    </span>\n                                    <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Paused'\">\n                                      <span class=\"badge badge-paused mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Wait Parts'\">\n                                      <span class=\"badge badge-waiting-parts mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Wait Sched'\">\n                                      <span class=\"badge badge-waiting-schedule mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Closed'\">\n                                      <span class=\"badge badge-secondary mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Completed'\">\n                                      <span class=\"badge badge-danger mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                </a>\n                                <div class=\"uk-accordion-content\">\n                                    <div class=\"uk-section pt-3 pb-4\">\n                                        <div class=\"uk-container\">\n\n                                            <div class=\"uk-grid-match uk-child-width-1-3@m\" uk-grid>\n                                                <div>\n                                                    <ul class=\"uk-list\">\n                                                        <li class=\"uk-text-small\"><strong>Title: </strong>{{job.job_title}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Asset: </strong>{{job.job_asset}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Status: </strong>{{job.job_status}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Type: </strong>{{job.job_type}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Asigned To: </strong>{{job.job_worker}}</li>\n                                                        <li class=\"uk-text-small\" *ngIf=\"job.scheduled_date\"><strong>Scheduled Start Date: </strong>{{ job.scheduled_date.seconds * 1000 | date: 'fullDate' }}</li>\n                                                        <li class=\"uk-text-small\" *ngIf=\"!job.scheduled_date\"><strong>Scheduled Start Date: </strong>No date set</li>\n                                                        <li *ngIf=\"job.worker_status === 'On The Job'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-timer text-success ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                                        <li *ngIf=\"job.worker_status === 'Lunch'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                                        <li *ngIf=\"job.worker_status === 'Punched Out'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-alarm text-danger ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                                        <li *ngIf=\"job.worker_status == 'Break'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                                        <li *ngIf=\"job.worker_status == 'Paused'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-primary ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                                        <li *ngIf=\"job.worker_status === ''\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-help text-info ml-2 mr-2\"></i>Unknown</li>\n                                                    </ul>\n\n                                                </div>\n                                                <div>\n                                                    <p><strong>Description:  </strong>{{job.job_description}}</p>\n                                                    <p><strong>Assignment Notes:  </strong>{{job.job_notes}}</p>\n                                                </div>\n                                                <div>\n                                                    <p><strong>Completion Notes:  </strong>{{job.job_completion_notes}}</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"mt-3\">\n                                              <div class=\"btn-group mb-sm-2 mb-md-0 uk-margin-small-bottom\">\n                                                  <button class=\"btn btn-secondary dropdown-toggle dd-button\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-offset=\"5,10\">\n                                                      <i class=\"icon ion-md-walk text-white mr-2\"></i>Job Actions\n                                                  </button>\n                                                  <div class=\"dropdown-menu dd-menu\" aria-labelledby=\"dropdownMenu2\">\n                                                    <h6 class=\"dropdown-header\">Job Actions</h6>\n                                                    <a class=\"dropdown-item\"><i class=\"icon ion-md-eye text-primary mr-2\"></i>Job Details</a>\n                                                    <a class=\"dropdown-item\"><i class=\"icon ion-md-trash text-danger mr-2\"></i>Delete Job</a>\n                                                    <a routerLink=\"/company/site/job/edit/{{job.id}}\"class=\"dropdown-item\"><i class=\"icon ion-md-create text-secondary mr-2\"></i>Edit Job</a>\n                                                    <a routerLink=\"/company/site/job/edit/{{job.id}}\"class=\"dropdown-item\"><i class=\"icon ion-md-eye text-info mr-2\"></i>View Asset Details</a>\n                                                  </div>\n                                                </div>\n                                                <div class=\"btn-group ml-md-3 ml-sm-0\">\n                                                  <button class=\"btn btn-info dropdown-toggle dd-button\" type=\"button\" id=\"dropdownMenu3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-offset=\"5,10\">\n                                                      <i class=\"icon ion-md-walk text-white mr-2\"></i>Worker Actions\n                                                  </button>\n                                                  <div class=\"dropdown-menu dd-menu\" aria-labelledby=\"dropdownMenu3\">\n                                                    <h6 class=\"dropdown-header\">Worker Actions</h6>\n                                                    <a class=\"dropdown-item\" *ngIf=\"job.worker_status != 'On The Job'\" (click)=\"clockOn(job)\"><i class=\"icon ion-md-clock text-success mr-2\"></i>Clock On</a>\n                                                    <a class=\"dropdown-item\" (click)=\"clockOff(job)\" *ngIf=\"job.worker_status != 'Punched Out'\"><i class=\"icon ion-md-clock text-danger mr-2\"></i>Clock Off</a>\n                                                    <a class=\"dropdown-item\" (click)=\"lunchBreak(job)\" *ngIf=\"job.worker_status != 'Lunch'\"><i class=\"icon ion-md-nutrition text-danger mr-2\"></i>Lunch Break</a>\n                                                    <a class=\"dropdown-item\" (click)=\"pauseJob(job)\" *ngIf=\"job.worker_status != 'Paused'\"><i class=\"icon ion-md-pause text-primary mr-2\"></i>Pause Job</a>\n                                                    <a class=\"dropdown-item\" (click)=\"pauseWaitingParts(job)\" *ngIf=\"job.job_status != 'Wait Parts'\"><i class=\"icon ion-md-rocket text-secondary mr-2\"></i>Clock Off ~ Waiting Parts</a>\n                                                    <a class=\"dropdown-item\" (click)=\"clockComplete(job)\" *ngIf=\"job.worker_status != 'Punched Out'\"><i class=\"icon ion-md-rocket text-secondary mr-2\"></i>Clock Off & Complete Job</a>\n                                                  </div>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <hr>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n                <li>\n                    <a class=\"uk-accordion-title\"><i class=\"material-icons mr-1 text-primary\">view_list</i>Asset List</a><hr>\n                    <div class=\"uk-accordion-content\">\n                        <div class=\"d-flex justify-content-center\">\n                            <div class=\"btn-group\">\n                                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-offset=\"5,10\">\n                                    <i class=\"icon ion-md-pin text-white mr-2\"></i>Site Asset Management\n                                </button>\n                                <div class=\"dropdown-menu dd-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\">\n                                  <h6 class=\"dropdown-header\">Job Actions</h6>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-add-circle text-primary mr-2\"></i>New Job</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-pulse text-danger mr-2\"></i>View Site Job Stats</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-settings text-secondary mr-2\"></i>Site Job Settings</a>\n                                  <h6 class=\"dropdown-header\">Document Actions</h6>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-print text-success mr-2\"></i>View/Print Job Reports</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-cloud-upload text-danger mr-2\"></i>Upload Files</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-eye text-danger mr-2\"></i>View Documents</a>\n                                </div>\n                              </div>\n                          </div>\n                        <hr class=\"uk-margin-small-bottom\">\n                        <ul uk-accordion>\n                            <li *ngFor=\"let asset of assets\" class=\"uk-open\">\n                                <a class=\"uk-accordion-title uk-text-small uk-text-uppercase pointer\">\n                                    <span class=\"badge badge-info mr-3 mt-2 mb-2 shadow-sm\">\n                                        <i class=\"icon ion-md-construct mr-1\"></i>\n                                        Asset#&nbsp;{{asset.asset_number}} - {{asset.asset_make}} - {{asset.asset_model}}\n                                    </span>\n                                </a>\n                                <div class=\"uk-accordion-content\">\n                                    <div class=\"uk-section pt-3 pb-4\">\n                                        <div class=\"uk-container\">\n\n                                            <div class=\"uk-grid-match uk-child-width-1-3@m\" uk-grid>\n                                                <div>\n                                                    <ul class=\"uk-list\">\n                                                        <li class=\"uk-text-small\"><strong>Asset Number: </strong>{{asset.asset_number}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Asset Make: </strong>{{asset.asset_make}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Asset Model: </strong>{{asset.asset_model}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Asset Serial Number: </strong>{{asset.asset_serial_number}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Asset Type: </strong>{{asset.asset_type}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Asset Location: </strong>{{asset.asset_location}}</li>\n                                                        <li class=\"uk-text-small\" *ngIf=\"asset.asset_warranty_end_date\"><strong>Warranty End Date: </strong>{{ asset.asset_warranty_end_date.seconds * 1000 | date: 'fullDate' }}</li>\n                                                        <li class=\"uk-text-small\" *ngIf=\"!asset.asset_warranty_end_date\"><strong>Warranty End Date: </strong>No date set</li>\n                                                        <li *ngIf=\"asset.asset_has_extended_warranty\" class=\"uk-text-small\"><strong>Has Extended Warranty?: </strong><i class=\"icon ion-md-timer text-success ml-2 mr-2\"></i>{{asset.asset_has_extended_warranty}}</li>\n                                                        <li *ngIf=\"asset.asset_sku\" class=\"uk-text-small\"><strong>SKU: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{asset.asset_sku}}</li>\n                                                    </ul>\n\n                                                </div>\n                                                <div>\n                                                    <p><strong>Asset Description:  </strong>{{asset.asset_description}}</p>\n                                                </div>\n                                                <div>\n                                                    <p><strong>Asset Notes:  </strong>{{asset.asset_notes}}</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"mt-3\">\n                                              <div class=\"btn-group mb-sm-2 mb-md-0 uk-margin-small-bottom\">\n                                                  <button class=\"btn btn-secondary dropdown-toggle dd-button\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-offset=\"5,10\">\n                                                      <i class=\"icon ion-md-walk text-white mr-2\"></i>Asset Actions\n                                                  </button>\n                                                  <div class=\"dropdown-menu dd-menu\" aria-labelledby=\"dropdownMenu2\">\n                                                    <h6 class=\"dropdown-header\">Asset Actions</h6>\n                                                    <a class=\"dropdown-item\"><i class=\"icon ion-md-eye text-primary mr-2\"></i>Asset Details</a>\n                                                    <a class=\"dropdown-item\"><i class=\"icon ion-md-trash text-danger mr-2\"></i>Delete Asset</a>\n                                                    <a routerLink=\"/company/site/job/edit/{{job.id}}\"class=\"dropdown-item\"><i class=\"icon ion-md-create text-secondary mr-2\"></i>Edit Asset</a>\n                                                    <h6 class=\"dropdown-header\">Job Actions</h6>\n                                                    <a class=\"dropdown-item\"><i class=\"icon ion-md-construct text-primary mr-2\"></i>New Asset Job</a>\n                                                    <a class=\"dropdown-item\"><i class=\"icon ion-md-build text-danger mr-2\"></i>New Asset PM</a>\n                                                  </div>\n                                                </div>\n                                                <div class=\"btn-group ml-md-3 ml-sm-0\">\n                                                  <button class=\"btn btn-info dropdown-toggle dd-button\" type=\"button\" id=\"dropdownMenu3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-offset=\"5,10\">\n                                                      <i class=\"icon ion-md-walk text-white mr-2\"></i>Worker Actions\n                                                  </button>\n                                                  <div class=\"dropdown-menu dd-menu\" aria-labelledby=\"dropdownMenu3\">\n                                                    <h6 class=\"dropdown-header\">Worker Actions</h6>\n                                                    <a class=\"dropdown-item\" *ngIf=\"job.worker_status != 'On The Job'\" (click)=\"clockOn(job)\"><i class=\"icon ion-md-clock text-success mr-2\"></i>Clock On</a>\n                                                    <a class=\"dropdown-item\" (click)=\"clockOff(job)\" *ngIf=\"job.worker_status != 'Punched Out'\"><i class=\"icon ion-md-clock text-danger mr-2\"></i>Clock Off</a>\n                                                    <a class=\"dropdown-item\" (click)=\"lunchBreak(job)\" *ngIf=\"job.worker_status != 'Lunch'\"><i class=\"icon ion-md-nutrition text-danger mr-2\"></i>Lunch Break</a>\n                                                    <a class=\"dropdown-item\" (click)=\"pauseJob(job)\" *ngIf=\"job.worker_status != 'Paused'\"><i class=\"icon ion-md-pause text-primary mr-2\"></i>Pause Job</a>\n                                                    <a class=\"dropdown-item\" (click)=\"pauseWaitingParts(job)\" *ngIf=\"job.job_status != 'Wait Parts'\"><i class=\"icon ion-md-rocket text-secondary mr-2\"></i>Clock Off ~ Waiting Parts</a>\n                                                    <a class=\"dropdown-item\" (click)=\"clockComplete(job)\" *ngIf=\"job.worker_status != 'Punched Out'\"><i class=\"icon ion-md-rocket text-secondary mr-2\"></i>Clock Off & Complete Job</a>\n                                                  </div>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <hr>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n                <li>\n                    <a class=\"uk-accordion-title\" href=\"#\">Item 3</a>\n                    <div class=\"uk-accordion-content\">\n                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>\n                    </div>\n                </li>\n            </ul>\n          </div>\n        </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/company/site/details/site-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/site/details/site-details.component.ts ***!
  \****************************************************************/
/*! exports provided: SiteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDetailsComponent", function() { return SiteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/job.service */ "./src/app/services/job.service.ts");





var SiteDetailsComponent = /** @class */ (function () {
    function SiteDetailsComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            site_id: '',
            worker_status: ''
        };
    }
    SiteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.ss.getSite(this.id).subscribe(function (site) {
            _this.site = site;
        });
        this.ss.getJobs(this.id).subscribe(function (jobs) {
            _this.jobs = jobs;
            console.log(_this.jobs);
        });
        this.ss.getAssets(this.id).subscribe(function (assets) {
            _this.assets = assets;
            console.log(_this.assets);
        });
    };
    SiteDetailsComponent.prototype.clockOn = function (job) {
        this.job = job;
        this.job.worker_status = 'On The Job';
        this.job.job_status = 'Started';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent.prototype.clockOff = function (job) {
        this.job = job;
        this.job.worker_status = 'Punched Out';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent.prototype.lunchBreak = function (job) {
        this.job = job;
        this.job.worker_status = 'Lunch';
        this.job.job_status = 'Paused';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent.prototype.clockComplete = function (job) {
        this.job = job;
        this.job.worker_status = 'Punched Out';
        this.job.job_status = 'Completed';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent.prototype.pauseJob = function (job) {
        this.job = job;
        this.job.worker_status = 'Paused';
        this.job.job_status = 'Paused';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent.prototype.pauseWaitingParts = function (job) {
        this.job = job;
        this.job.worker_status = 'Punched Out';
        this.job.job_status = 'Wait Parts';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-details',
            template: __webpack_require__(/*! ./site-details.component.html */ "./src/app/company/site/details/site-details.component.html"),
            styles: [__webpack_require__(/*! ./site-details.component.css */ "./src/app/company/site/details/site-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SiteDetailsComponent);
    return SiteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/company/site/edit/site-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/company/site/edit/site-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9lZGl0L3NpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/site/edit/site-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/company/site/edit/site-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-small-bottom\">\n    <div class=\"uk-card uk-card-default\">\n      <div class=\"uk-card-header bg-info\">\n          <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n              <div class=\"uk-width-expand\">\n                  <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons uk-text-white mr-1\">my_location</i>{{site.site_name}} Campus Details - Edit</h5>\n              </div>\n          </div>\n      </div>\n      <div class=\"uk-card-body\">\n        <small class=\"uk-text-muted\">Please make required changes and submit to to save them.</small>\n        <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Campus Location Details</h6>\n          <form #siteForm=\"ngForm\" (ngSubmit)=\"onSubmit(siteForm)\">\n            <div class=\"form-group\">\n              <label for=\"site_name\">Site Name</label>\n              <input\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  name=\"site_name\"\n                  #site_name=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':site_name.errors && site_name.touched}\"\n                  [(ngModel)]=\"site.site_name\"\n                  minlength=\"5\"\n                  required\n              >\n\n              <div [hidden]=\"!site_name.errors?.required\" class=\"invalid-feedback\">\n                You must provide a value!\n              </div>\n              <div [hidden]=\"!site_name.errors?.minlength\" class=\"invalid-feedback\">\n                  Value must be 5 characters minimum please!\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"site_address\">Site Address</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control form-control-sm\"\n                    name=\"site_address\"\n                    #site_address=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':site_address.errors && site_address.touched}\"\n                    [(ngModel)]=\"site.site_address\"\n                    minlength=\"10\"\n                    required\n                >\n\n                <div [hidden]=\"!site_address.errors?.required\" class=\"invalid-feedback\">\n                  You must provide a value!\n                </div>\n                <div [hidden]=\"!site_address.errors?.minlength\" class=\"invalid-feedback\">\n                    Value must be 10 characters minimum please!\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"site_address_2\">Site Address 2</label>\n                  <input\n                      type=\"text\"\n                      class=\"form-control form-control-sm\"\n                      name=\"site_address_2\"\n                      #site_address_2=\"ngModel\"\n                      [ngClass]=\"{'is-invalid':site_address_2.errors && site_address_2.touched}\"\n                      [(ngModel)]=\"site.site_address_2\"\n                      minlength=\"10\"\n                      required\n                  >\n\n                  <div [hidden]=\"!site_address_2.errors?.required\" class=\"invalid-feedback\">\n                    You must provide a value!\n                  </div>\n                  <div [hidden]=\"!site_address_2.errors?.minlength\" class=\"invalid-feedback\">\n                      Value must be 10 characters minimum please!\n                  </div>\n                </div>\n\n              <div class=\"form-row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                      <label for=\"site_city\">Site City</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"site_city\"\n                          #site_city=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':site_city.errors && site_city.touched}\"\n                          [(ngModel)]=\"site.site_city\"\n                          minlength=\"5\"\n                          required\n                      >\n\n                      <div [hidden]=\"!site_city.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!site_city.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 5 characters minimum please!\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"site_state\">Site State</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"site_state\"\n                            #site_state=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':site_state.errors && site_state.touched}\"\n                            [(ngModel)]=\"site.site_state\"\n                            minlength=\"2\"\n                            required\n                        >\n\n                        <div [hidden]=\"!site_state.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!site_state.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 2 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"site_zip\">Site Zip Code</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"site_zip\"\n                              #site_zip=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':site_zip.errors && site_zip.touched}\"\n                              [(ngModel)]=\"site.site_zip\"\n                              minlength=\"5\"\n                              required\n                          >\n\n                          <div [hidden]=\"!site_zip.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!site_zip.errors?.minlength\" class=\"invalid-feedback\">\n                              Value must be 5 characters minimum please!\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"site_country\">Site Country</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"site_country\"\n                                #site_country=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':site_country.errors && site_country.touched}\"\n                                [(ngModel)]=\"site.site_country\"\n                                minlength=\"2\"\n                                required\n                            >\n\n                            <div [hidden]=\"!site_country.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!site_country.errors?.minlength\" class=\"invalid-feedback\">\n                                Value must be 2 characters minimum please!\n                            </div>\n                        </div>\n                      </div>\n              </div>\n\n              <div class=\"form-row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"site_phone\"><i class=\"icon ion-md-call mr-1\"></i>Site Phone</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"site_phone\"\n                            #site_phone=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':site_phone.errors && site_phone.touched}\"\n                            [(ngModel)]=\"site.site_phone\"\n                            minlength=\"10\"\n                            pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                            required\n                        >\n\n                        <div [hidden]=\"!site_phone.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!site_phone.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 10 characters minimum please!\n                        </div>\n                        <div [hidden]=\"!site_phone.errors?.pattern\" class=\"invalid-feedback\">\n                            Value must be a valid phone! (123)123-4567 or 123-123-4567 or 1231234567\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                          <label for=\"site_email\"><i class=\"icon ion-md-mail mr-1\"></i>Site Email</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"site_email\"\n                              #site_email=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':site_email.errors && site_email.touched}\"\n                              [(ngModel)]=\"site.site_email\"\n                              pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                              required\n                          >\n\n                          <div [hidden]=\"!site_email.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!site_email.errors?.pattern\" class=\"invalid-feedback\">\n                              Value must be a valid email address!\n                          </div>\n                      </div>\n                    </div>\n                </div>\n                <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Campus Shipping Details</h6>\n\n                  <div class=\"form-group\">\n                      <label for=\"site_ship_to_address\">Shipping Address</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"site_ship_to_address\"\n                          #site_ship_to_address=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':site_ship_to_address.errors && site_ship_to_address.touched}\"\n                          [(ngModel)]=\"site.site_ship_to_address\"\n                          minlength=\"10\"\n                          required\n                      >\n\n                      <div [hidden]=\"!site_ship_to_address.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!site_ship_to_address.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 10 characters minimum please!\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"site_ship_to_address_2\">Shipping Address 2</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"site_ship_to_address_2\"\n                            #site_ship_to_address_2=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':site_ship_to_address_2.errors && site_ship_to_address_2.touched}\"\n                            [(ngModel)]=\"site.site_ship_to_address_2\"\n                            minlength=\"10\"\n                            required\n                        >\n\n                        <div [hidden]=\"!site_ship_to_address_2.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!site_ship_to_address_2.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 10 characters minimum please!\n                        </div>\n                      </div>\n\n                    <div class=\"form-row\">\n                      <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"site_ship_to_city\">Shipping City</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"site_ship_to_city\"\n                                #site_ship_to_city=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':site_ship_to_city.errors && site_ship_to_city.touched}\"\n                                [(ngModel)]=\"site.site_ship_to_city\"\n                                minlength=\"5\"\n                                required\n                            >\n\n                            <div [hidden]=\"!site_ship_to_city.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!site_ship_to_city.errors?.minlength\" class=\"invalid-feedback\">\n                                Value must be 5 characters minimum please!\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                              <label for=\"site_ship_to_state\">Shipping State</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"site_ship_to_state\"\n                                  #site_ship_to_state=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':site_ship_to_state.errors && site_ship_to_state.touched}\"\n                                  [(ngModel)]=\"site.site_ship_to_state\"\n                                  minlength=\"2\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!site_ship_to_state.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!site_ship_to_state.errors?.minlength\" class=\"invalid-feedback\">\n                                  Value must be 2 characters minimum please!\n                              </div>\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <label for=\"site_ship_to_zip\">Shipping Zip Code</label>\n                                <input\n                                    type=\"text\"\n                                    class=\"form-control form-control-sm\"\n                                    name=\"site_ship_to_zip\"\n                                    #site_ship_to_zip=\"ngModel\"\n                                    [ngClass]=\"{'is-invalid':site_ship_to_zip.errors && site_ship_to_zip.touched}\"\n                                    [(ngModel)]=\"site.site_ship_to_zip\"\n                                    minlength=\"5\"\n                                    required\n                                >\n\n                                <div [hidden]=\"!site_ship_to_zip.errors?.required\" class=\"invalid-feedback\">\n                                  You must provide a value!\n                                </div>\n                                <div [hidden]=\"!site_ship_to_zip.errors?.minlength\" class=\"invalid-feedback\">\n                                    Value must be 5 characters minimum please!\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                              <div class=\"form-group\">\n                                  <label for=\"site_ship_to_country\">Shipping Country</label>\n                                  <input\n                                      type=\"text\"\n                                      class=\"form-control form-control-sm\"\n                                      name=\"site_ship_to_country\"\n                                      #site_ship_to_country=\"ngModel\"\n                                      [ngClass]=\"{'is-invalid':site_ship_to_country.errors && site_ship_to_country.touched}\"\n                                      [(ngModel)]=\"site.site_ship_to_country\"\n                                      minlength=\"2\"\n                                      required\n                                  >\n\n                                  <div [hidden]=\"!site_ship_to_country.errors?.required\" class=\"invalid-feedback\">\n                                    You must provide a value!\n                                  </div>\n                                  <div [hidden]=\"!site_ship_to_country.errors?.minlength\" class=\"invalid-feedback\">\n                                      Value must be 2 characters minimum please!\n                                  </div>\n                              </div>\n                            </div>\n                    </div>\n\n                    <div class=\"form-row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                              <label for=\"site_ship_to_phone\"><i class=\"icon ion-md-call mr-1\"></i>Shipping Phone</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"site_ship_to_phone\"\n                                  #site_ship_to_phone=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':site_ship_to_phone.errors && site_ship_to_phone.touched}\"\n                                  [(ngModel)]=\"site.site_ship_to_phone\"\n                                  minlength=\"10\"\n                                  pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!site_ship_to_phone.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!site_ship_to_phone.errors?.minlength\" class=\"invalid-feedback\">\n                                  Value must be 10 characters minimum please!\n                              </div>\n                              <div [hidden]=\"!site_ship_to_phone.errors?.pattern\" class=\"invalid-feedback\">\n                                  Value must be a valid phone! (123)123-4567 or 123-123-4567 or 1231234567\n                              </div>\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"site_ship_to_email\"><i class=\"icon ion-md-mail mr-1\"></i>Shipping Email</label>\n                                <input\n                                    type=\"text\"\n                                    class=\"form-control form-control-sm\"\n                                    name=\"site_ship_to_email\"\n                                    #site_ship_to_email=\"ngModel\"\n                                    [ngClass]=\"{'is-invalid':site_ship_to_email.errors && site_ship_to_email.touched}\"\n                                    [(ngModel)]=\"site.site_ship_to_email\"\n                                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                    required\n                                >\n\n                                <div [hidden]=\"!site_ship_to_email.errors?.required\" class=\"invalid-feedback\">\n                                  You must provide a value!\n                                </div>\n                                <div [hidden]=\"!site_ship_to_email.errors?.pattern\" class=\"invalid-feedback\">\n                                    Value must be a valid email address!\n                                </div>\n                            </div>\n                          </div>\n                      </div>\n\n                <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">person</i>Campus Contact Details</h6>\n              <div class=\"form-row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label for=\"site_contact\"><i class=\"icon ion-md-person mr-1\"></i>Main Contact</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"site_contact\"\n                            #site_contact=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':site_contact.errors && site_contact.touched}\"\n                            [(ngModel)]=\"site.site_contact\"\n                            minlength=\"5\"\n                            required\n                        >\n\n                        <div [hidden]=\"!site_contact.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!site_contact.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 5 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <label for=\"site_contact_phone\"><i class=\"icon ion-md-call mr-1\"></i>Main Contact Phone</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"site_contact_phone\"\n                              #site_contact_phone=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':site_contact_phone.errors && site_contact_phone.touched}\"\n                              [(ngModel)]=\"site.site_contact_phone\"\n                              pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                              required\n                          >\n\n                          <div [hidden]=\"!site_contact_phone.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!site_contact_phone.errors?.pattern\" class=\"invalid-feedback\">\n                              Please use a valid phone number... (321) 234-4567 | 321-234-4567 | 3212344567\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"site_contact_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main Contact Email</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"site_contact_email\"\n                                #site_contact_email=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':site_contact_email.errors && site_contact_email.touched}\"\n                                [(ngModel)]=\"site.site_contact_email\"\n                                pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                required\n                            >\n\n                            <div [hidden]=\"!site_contact_email.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!site_contact_email.errors?.pattern\" class=\"invalid-feedback\">\n                                Please provide a valid email!\n                            </div>\n                        </div>\n                      </div>\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <label for=\"site_maintenance_contact\"><i class=\"icon ion-md-person mr-1\"></i>Maintenance Contact</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"site_maintenance_contact\"\n                              #site_maintenance_contact=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':site_maintenance_contact.errors && site_maintenance_contact.touched}\"\n                              [(ngModel)]=\"site.site_maintenance_contact\"\n                              minlength=\"5\"\n                              required\n                          >\n\n                          <div [hidden]=\"!site_maintenance_contact.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!site_maintenance_contact.errors?.minlength\" class=\"invalid-feedback\">\n                              Value must be 5 characters minimum please!\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"site_maintenance_phone\"><i class=\"icon ion-md-call mr-1\"></i>Maintenance Contact Phone</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"site_maintenance_phone\"\n                                #site_maintenance_phone=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':site_maintenance_phone.errors && site_maintenance_phone.touched}\"\n                                [(ngModel)]=\"site.site_maintenance_phone\"\n                                pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                                required\n                            >\n\n                            <div [hidden]=\"!site_maintenance_phone.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!site_maintenance_phone.errors?.pattern\" class=\"invalid-feedback\">\n                                Please use a valid phone number... (321) 234-4567 | 321-234-4567 | 3212344567\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                              <label for=\"site_maintenance_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main HR Contact Email</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"site_maintenance_email\"\n                                  #site_maintenance_email=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':site_maintenance_email.errors && site_maintenance_email.touched}\"\n                                  [(ngModel)]=\"site.site_maintenance_email\"\n                                  pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!site_maintenance_email.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!site_maintenance_email.errors?.pattern\" class=\"invalid-feedback\">\n                                  Please provide a valid email!\n                              </div>\n                          </div>\n                        </div>\n                  </div>\n\n            <input type=\"submit\" value=\"Submit Changes\" class=\"btn btn-info btn-block mt-4\">\n          </form>\n      </div>\n      <div class=\"uk-card-footer\">\n          <!-- <div class=\"uk-card-header bg-primary-dark uk-margin-small-bottom uk-padding-small\">\n              <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                  <div class=\"uk-width-expand\">\n                    <div class=\"row d-flex align-content-center\">\n                      <div class=\"col-md-10\">\n                          <h5 class=\"uk-margin-remove-bottom uk-margin-remove-left uk-text-bold text-white\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>Site Location List</h5>\n                      </div>\n                      <div class=\"col-md-2\">\n                          <a routerLink=\"/company/edit/{{main.id}}\" class=\"uk-button uk-button-text text-white uk-margin-medium-right\"><i class=\"icon ion-md-add-circle-outline ml-1 mr-1\"></i>site</a>\n                      </div>\n                    </div>\n\n                  </div>\n              </div>\n          </div>\n          <ul class=\"uk-list uk-list-divider\">\n              <li *ngFor=\"let site of sites\" class=\"uk-margin-small-left\">\n                <div class=\"row d-flex align-content-center\">\n                  <div class=\"col-md-10 ext-uppercase justify-content-end\">\n                      <a routerLink=\"/company/site/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>{{site.site_name}}</a>\n\n                  </div>\n                  <div class=\"col-md-2 justify-content-end\">\n                      <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-medium-right\"><i class=\"icon ion-md-create mr-1\"></i>edit</a>\n                  </div>\n                </div>\n\n              </li>\n          </ul> -->\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/company/site/edit/site-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/company/site/edit/site-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: SiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteEditComponent", function() { return SiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/site.service */ "./src/app/services/site.service.ts");




var SiteEditComponent = /** @class */ (function () {
    function SiteEditComponent(ss, route, router) {
        this.ss = ss;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_address_2: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_address_2: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
    }
    SiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.ss.getSite(this.id).subscribe(function (site) {
            _this.site = site;
        });
    };
    SiteEditComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            console.log('Not valid');
        }
        else {
            value.id = this.id;
            this.ss.updateSite(value);
            this.router.navigate(["/company/site/" + this.id]);
        }
    };
    SiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-edit',
            template: __webpack_require__(/*! ./site-edit.component.html */ "./src/app/company/site/edit/site-edit.component.html"),
            styles: [__webpack_require__(/*! ./site-edit.component.css */ "./src/app/company/site/edit/site-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SiteEditComponent);
    return SiteEditComponent;
}());



/***/ }),

/***/ "./src/app/company/site/jobs/add/job-add.component.css":
/*!*************************************************************!*\
  !*** ./src/app/company/site/jobs/add/job-add.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-min-w {\n  min-width: 125px;\n}\n.outline-killer {\n  outline: none !important;\n  border: 0 !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9zaXRlL2pvYnMvYWRkL2pvYi1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9qb2JzL2FkZC9qb2ItYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1taW4tdyB7XG4gIG1pbi13aWR0aDogMTI1cHg7XG59XG4ub3V0bGluZS1raWxsZXIge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/company/site/jobs/add/job-add.component.html":
/*!**************************************************************!*\
  !*** ./src/app/company/site/jobs/add/job-add.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container uk-margin-small-bottom\">\n    <div class=\"uk-card uk-card-default\">\n      <div class=\"card-header bg-info\">\n          <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n              <div class=\"uk-width-expand\">\n                  <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>{{site.site_name}} - Add Job</h5>\n              </div>\n          </div>\n      </div>\n      <div class=\"uk-card-body pt-3\">\n          <h3 class=\"mt-0 pt-0\">Job Details</h3>\n          <hr>\n          <form #jobForm=\"ngForm\" (ngSubmit)=\"onSubmit(jobForm)\" class=\"was-validated\">\n            <div class=\"form-group\">\n              <label for=\"job_title\">Job Title</label>\n              <input\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  name=\"job_title\"\n                  #job_title=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':job_title.errors && job_title.touched}\"\n                  [(ngModel)]=\"job.job_title\"\n                  minlength=\"5\"\n                  maxlength=\"25\"\n                  required\n              >\n              <input\n                  type=\"hidden\"\n                  class=\"form-control form-control-sm\"\n                  name=\"site_id\"\n                  #site_id=\"ngModel\"\n                  [(ngModel)]=\"job.site_id\"\n              >\n\n              <div [hidden]=\"!job_title.errors?.required\" class=\"invalid-feedback\">\n                You must provide a title! (Max Characters = 25)\n              </div>\n              <div [hidden]=\"!job_title.errors?.minlength\" class=\"invalid-feedback\">\n                  Value must be 5 characters minimum please!\n              </div>\n              <div [hidden]=\"!job_title.errors?.maxlength\" class=\"invalid-feedback\">\n                  Value must be 25 characters maximum please!\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"job_description\">Job Description</label>\n                <textarea\n                    type=\"text\"\n                    rows=\"3\"\n                    class=\"form-control form-control-sm\"\n                    name=\"job_description\"\n                    #job_description=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':job_description.errors && job_description.touched}\"\n                    [(ngModel)]=\"job.job_description\"\n                    minlength=\"10\"\n                    required\n                ></textarea>\n\n                <div [hidden]=\"!job_description.errors?.required\" class=\"invalid-feedback\">\n                  You must provide a description! (Please be descriptive)\n                </div>\n                <div [hidden]=\"!job_description.errors?.minlength\" class=\"invalid-feedback\">\n                    Value must be 10 characters minimum please!\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"job_status\">Job Status</label>\n                    <select\n                      class=\"form-control form-control-sm\"\n                      id=\"job_status\"\n                      name=\"job_status\"\n                      #job_status\n                      [(ngModel)]=\"job.job_status\"\n                      required\n                    >\n                      <option></option>\n                      <option *ngFor=\"let status of jobStatus\">{{status.list_value}}</option>\n                    </select>\n\n                    <div class=\"invalid-feedback\">\n                      You must choose a value!\n                    </div>\n\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"job_worker\">Worker Assignment</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"job_worker\"\n                            #job_worker=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':job_worker.errors && job_worker.touched}\"\n                            [(ngModel)]=\"job.job_worker\"\n                            minlength=\"2\"\n                            required\n                        >\n\n                        <div [hidden]=\"!job_worker.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!job_worker.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 2 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label for=\"job_type\">Job Type</label>\n                        <select\n                          class=\"form-control form-control-sm\"\n                          id=\"job_type\"\n                          name=\"job_type\"\n                          #job_type\n                          [(ngModel)]=\"job.job_type\"\n                          required\n                        >\n                          <option></option>\n                          <option *ngFor=\"let type of jobType\">{{type.list_value}}</option>\n                        </select>\n\n                        <div class=\"invalid-feedback\">\n                          You must choose a value!\n                        </div>\n\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"job_asset\">Asset</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"job_asset\"\n                              #job_asset=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':job_asset.errors && job_asset.touched}\"\n                              [(ngModel)]=\"job.job_asset\"\n                              required\n                          >\n                          <input\n                              hidden=\"true\"\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"scheduled_date\"\n                              #scheduled_date=\"ngModel\"\n                              [(ngModel)]=\"invisibleDate\"\n                          >\n                          <div [hidden]=\"!job_asset.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                          </div>\n                      </div>\n                  </div>\n                </div>\n                <h3 class=\"mt-0 pt-0\">Scheduling Details</h3>\n                <hr>\n                <!-- <p>{{invisibleDate | date }}</p> -->\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Select Date\" (ngModel)=\"date\" (dateChange)=\"addEvent($event)\" name=\"date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                </mat-form-field>\n\n\n\n                <div class=\"d-flex justify-content-center\">\n                  <button type=\"submit\" value=\"Save Job\" class=\"btn btn-primary mt-4 mr-2 mr-sm-3 mr-md-4 icon-min-w\"><i class=\"icon ion-md-save mr-1\"></i>save job</button>\n                  <button routerLink=\"/company/site/edit/{{site.id}}\" type=\"button\" class=\"btn btn-secondary uk-button mt-4 icon-min-w\"><i class=\"icon ion-md-undo mr-1\"></i>cancel job</button>\n                </div>\n          </form>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/company/site/jobs/add/job-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/company/site/jobs/add/job-add.component.ts ***!
  \************************************************************/
/*! exports provided: JobAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobAddComponent", function() { return JobAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");






var JobAddComponent = /** @class */ (function () {
    function JobAddComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.date = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].Timestamp;
        this.serializedDate = new Date();
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            worker_status: '',
            site_id: ''
        };
    }
    JobAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.job.site_id = this.id;
        this.ss.getSite(this.id).subscribe(function (site) {
            _this.site = site;
        });
        this.js.getJobTypes().subscribe(function (jobType) {
            _this.jobType = jobType;
        });
        this.js.getJobStatus().subscribe(function (jobStatus) {
            _this.jobStatus = jobStatus;
        });
    };
    JobAddComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            return null;
        }
        else {
            this.js.newJob(value);
        }
        this.router.navigate(["/company/site/" + this.site.id]);
    };
    JobAddComponent.prototype.addEvent = function (event) {
        this.invisibleDate = event.value;
    };
    JobAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-add',
            template: __webpack_require__(/*! ./job-add.component.html */ "./src/app/company/site/jobs/add/job-add.component.html"),
            styles: [__webpack_require__(/*! ./job-add.component.css */ "./src/app/company/site/jobs/add/job-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_4__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JobAddComponent);
    return JobAddComponent;
}());



/***/ }),

/***/ "./src/app/company/site/jobs/edit/edit-job.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company/site/jobs/edit/edit-job.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9qb2JzL2VkaXQvZWRpdC1qb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/company/site/jobs/edit/edit-job.component.html":
/*!****************************************************************!*\
  !*** ./src/app/company/site/jobs/edit/edit-job.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-small-bottom\">\n    <div class=\"uk-card uk-card-default\">\n      <div class=\"uk-card-header bg-info\">\n          <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n              <div class=\"uk-width-expand\">\n                  <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>Editing Job - {{job.job_title}}</h5>\n              </div>\n          </div>\n      </div>\n      <div class=\"uk-card-body\">\n        <small class=\"uk-text-muted\">Please make required changes and submit to to save them.</small>\n        <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\"></i>Job Details</h6>\n          <form #jobForm=\"ngForm\" (ngSubmit)=\"onSubmit(jobForm)\">\n            <div class=\"form-group\">\n              <label for=\"job_title\">Job Title</label>\n              <input\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  name=\"job_title\"\n                  #job_title=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':job_title.errors && job_title.touched}\"\n                  [(ngModel)]=\"job.job_title\"\n                  minlength=\"5\"\n                  maxlength=\"25\"\n                  required\n              >\n              <input\n                  type=\"hidden\"\n                  class=\"form-control form-control-sm\"\n                  name=\"site_id\"\n                  #site_id=\"ngModel\"\n                  [(ngModel)]=\"job.site_id\"\n              >\n              <input\n                  type=\"hidden\"\n                  class=\"form-control form-control-sm\"\n                  name=\"job_id\"\n                  #job_id=\"ngModel\"\n                  [(ngModel)]=\"job.id\"\n              >\n\n              <div [hidden]=\"!job_title.errors?.required\" class=\"invalid-feedback\">\n                You must provide a value!\n              </div>\n              <div [hidden]=\"!job_title.errors?.minlength\" class=\"invalid-feedback\">\n                  Value must be 5 characters minimum please!\n              </div>\n              <div [hidden]=\"!job_title.errors?.maxlength\" class=\"invalid-feedback\">\n                  Value must be 25 characters maximum please!\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"job_description\">Job Description</label>\n                <textarea\n                    type=\"text\"\n                    rows=\"3\"\n                    class=\"form-control form-control-sm\"\n                    name=\"job_description\"\n                    #job_description=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':job_description.errors && job_description.touched}\"\n                    [(ngModel)]=\"job.job_description\"\n                    minlength=\"10\"\n                    required\n                ></textarea>\n\n                <div [hidden]=\"!job_description.errors?.required\" class=\"invalid-feedback\">\n                  You must provide a value!\n                </div>\n                <div [hidden]=\"!job_description.errors?.minlength\" class=\"invalid-feedback\">\n                    Value must be 10 characters minimum please!\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"job_description\">Job Notes</label>\n                <textarea\n                    type=\"text\"\n                    rows=\"3\"\n                    class=\"form-control form-control-sm\"\n                    name=\"job_notes\"\n                    #job_notes=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':job_notes.errors && job_notes.touched}\"\n                    [(ngModel)]=\"job.job_notes\"\n                    minlength=\"10\"\n                    required\n                ></textarea>\n\n                <div [hidden]=\"!job_notes.errors?.required\" class=\"invalid-feedback\">\n                  You must provide a value!\n                </div>\n                <div [hidden]=\"!job_notes.errors?.minlength\" class=\"invalid-feedback\">\n                    Value must be 10 characters minimum please!\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                      <label for=\"job_status\">Job Status</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"job_status\"\n                          #job_status=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':job_status.errors && job_status.touched}\"\n                          [(ngModel)]=\"job.job_status\"\n                          minlength=\"5\"\n                          required\n                      >\n\n                      <div [hidden]=\"!job_status.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!job_status.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 5 characters minimum please!\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"job_worker\">Worker Assignment</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"job_worker\"\n                            #job_worker=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':job_worker.errors && job_worker.touched}\"\n                            [(ngModel)]=\"job.job_worker\"\n                            minlength=\"2\"\n                            required\n                        >\n\n                        <div [hidden]=\"!job_worker.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!job_worker.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 2 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"job_type\">Job Type</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"job_type\"\n                              #job_type=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':job_type.errors && job_type.touched}\"\n                              [(ngModel)]=\"job.job_type\"\n                              required\n                          >\n                          <div [hidden]=\"!job_type.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                          </div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"job_asset\">Asset</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"job_asset\"\n                              #job_asset=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':job_asset.errors && job_asset.touched}\"\n                              [(ngModel)]=\"job.job_asset\"\n                              required\n                          >\n                          <div [hidden]=\"!job_asset.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                          </div>\n                      </div>\n                  </div>\n                </div>\n\n            <input type=\"submit\" value=\"Submit Changes\" class=\"btn btn-info btn-block mt-4\">\n          </form>\n      </div>\n      <div class=\"uk-card-footer\">\n          <!-- <div class=\"uk-card-header bg-primary-dark uk-margin-small-bottom uk-padding-small\">\n              <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                  <div class=\"uk-width-expand\">\n                    <div class=\"row d-flex align-content-center\">\n                      <div class=\"col-md-10\">\n                          <h5 class=\"uk-margin-remove-bottom uk-margin-remove-left uk-text-bold text-white\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>Site Location List</h5>\n                      </div>\n                      <div class=\"col-md-2\">\n                          <a routerLink=\"/company/edit/{{main.id}}\" class=\"uk-button uk-button-text text-white uk-margin-medium-right\"><i class=\"icon ion-md-add-circle-outline ml-1 mr-1\"></i>site</a>\n                      </div>\n                    </div>\n\n                  </div>\n              </div>\n          </div>\n          <ul class=\"uk-list uk-list-divider\">\n              <li *ngFor=\"let site of sites\" class=\"uk-margin-small-left\">\n                <div class=\"row d-flex align-content-center\">\n                  <div class=\"col-md-10 ext-uppercase justify-content-end\">\n                      <a routerLink=\"/company/site/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>{{site.site_name}}</a>\n\n                  </div>\n                  <div class=\"col-md-2 justify-content-end\">\n                      <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-medium-right\"><i class=\"icon ion-md-create mr-1\"></i>edit</a>\n                  </div>\n                </div>\n\n              </li>\n          </ul> -->\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/company/site/jobs/edit/edit-job.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company/site/jobs/edit/edit-job.component.ts ***!
  \**************************************************************/
/*! exports provided: EditJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditJobComponent", function() { return EditJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");





var EditJobComponent = /** @class */ (function () {
    function EditJobComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            site_id: '',
        };
    }
    EditJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobId = this.route.snapshot.params.id;
        this.id = this.job.site_id;
        this.js.getJob(this.jobId).subscribe(function (job) {
            _this.job = job;
        });
    };
    EditJobComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            return null;
        }
        else {
            value.id = this.jobId;
            this.js.updateJob(value);
        }
        this.router.navigate(["/company/site/" + this.job.site_id]);
    };
    EditJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-job',
            template: __webpack_require__(/*! ./edit-job.component.html */ "./src/app/company/site/jobs/edit/edit-job.component.html"),
            styles: [__webpack_require__(/*! ./edit-job.component.css */ "./src/app/company/site/jobs/edit/edit-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditJobComponent);
    return EditJobComponent;
}());



/***/ }),

/***/ "./src/app/company/site/jobs/lists/list-jobs.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company/site/jobs/lists/list-jobs.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge-waiting-parts {\n  background-color: coral;\n  color: white;\n}\n\n.badge-waiting-schedule {\n  background-color: rgb(194, 98, 63);\n  color: white;\n}\n\n.badge-paused {\n  background-color: rgb(245, 223, 22);\n  color: darkslategray;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9zaXRlL2pvYnMvbGlzdHMvbGlzdC1qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS9zaXRlL2pvYnMvbGlzdHMvbGlzdC1qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2Utd2FpdGluZy1wYXJ0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWRnZS13YWl0aW5nLXNjaGVkdWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgOTgsIDYzKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFkZ2UtcGF1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjIzLCAyMik7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/company/site/jobs/lists/list-jobs.component.html":
/*!******************************************************************!*\
  !*** ./src/app/company/site/jobs/lists/list-jobs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-medium-bottom\">\n    <div class=\"card\">\n        <div class=\"uk-card-header bg-primary-dark\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons pr-1\">place</i>{{site.site_name}} - Jobs List</h5>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"uk-card-body\">\n            <button routerLink=\"/company/site/{{site.id}}\" type=\"button\" class=\"btn btn-info mb-4\">back</button>\n            <ul uk-accordion class=\"mt-2\">\n                <li *ngFor=\"let job of jobs\" class=\"uk-open\">\n                    <a class=\"uk-accordion-title uk-text-small uk-text-uppercase pointer\">\n                      <section *ngIf=\"job.job_status === 'Started'\">\n                        <span class=\"badge badge-success mr-3\">\n                            <i class=\"icon ion-md-construct mr-1\"></i>\n                            {{job.job_number}} - {{job.job_status}}\n                        </span>\n                        {{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n                      <section *ngIf=\"job.job_status === 'Paused'\">\n                          <span class=\"badge badge-paused mr-3\">\n                              <i class=\"icon ion-md-construct mr-1\"></i>\n                              {{job.job_number}} - {{job.job_status}}\n                          </span>{{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n                      <section *ngIf=\"job.job_status === 'Waiting Parts'\">\n                          <span class=\"badge badge-waiting-parts mr-3\">\n                              <i class=\"icon ion-md-construct mr-1\"></i>\n                              {{job.job_number}} - {{job.job_status}}\n                          </span>{{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n                      <section *ngIf=\"job.job_status === 'Waiting Schedule'\">\n                          <span class=\"badge badge-waiting-schedule mr-3\">\n                              <i class=\"icon ion-md-construct mr-1\"></i>\n                              {{job.job_number}} - {{job.job_status}}\n                          </span>{{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n                      <section *ngIf=\"job.job_status === 'Closed'\">\n                          <span class=\"badge badge-secondary mr-sm-5 mr-md-3\">\n                              <i class=\"icon ion-md-construct mr-1\"></i>\n                              {{job.job_number}} - {{job.job_status}}\n                          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n\n                    </a>\n                    <div class=\"uk-accordion-content\">\n                        <div class=\"uk-section pt-3 pb-4\">\n                            <div class=\"uk-container\">\n\n                                <div class=\"uk-grid-match uk-child-width-1-3@m\" uk-grid>\n                                    <div>\n                                        <ul class=\"uk-list\">\n                                            <li class=\"uk-text-small\"><strong>Title: </strong>{{job.job_title}}</li>\n                                            <li class=\"uk-text-small\"><strong>Asset: </strong>{{job.job_asset}}</li>\n                                            <li class=\"uk-text-small\"><strong>Status: </strong>{{job.job_status}}</li>\n                                            <li class=\"uk-text-small\"><strong>Type: </strong>{{job.job_type}}</li>\n                                            <li class=\"uk-text-small\"><strong>Asigned To: </strong>{{job.job_worker}}</li>\n                                            <li *ngIf=\"job.worker_status === 'On The Job'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-timer text-success ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                            <li *ngIf=\"job.worker_status === 'Lunch'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                            <li *ngIf=\"job.worker_status === 'Punched Out'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-alarm text-danger ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                            <li *ngIf=\"job.worker_status === 'Break'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                            <li *ngIf=\"job.worker_status === ''\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-help text-info ml-2 mr-2\"></i>Unknown</li>\n                                        </ul>\n                                    </div>\n                                    <div>\n                                        <p><strong>Description:  </strong>{{job.job_description}}</p>\n                                    </div>\n                                    <div>\n                                        <p><strong>Logs/Notes:  </strong>{{job.job_notes}}</p>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                </li>\n            </ul>\n\n        </div>\n        <div class=\"card-footer d-flex justify-content-around footer-bg\">\n            <a routerLink=\"/company/site/job/add/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-add-circle ml-1 mr-1\"></i>add job</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n\n\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/company/site/jobs/lists/list-jobs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/site/jobs/lists/list-jobs.component.ts ***!
  \****************************************************************/
/*! exports provided: ListJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListJobsComponent", function() { return ListJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");





var ListJobsComponent = /** @class */ (function () {
    function ListJobsComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            site_id: '',
            worker_status: '',
            job_number: ''
        };
    }
    ListJobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.ss.getSite(this.id).subscribe(function (site) {
            _this.site = site;
        });
        this.ss.getJobs(this.id).subscribe(function (jobs) {
            _this.jobs = jobs;
        });
    };
    ListJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-jobs',
            template: __webpack_require__(/*! ./list-jobs.component.html */ "./src/app/company/site/jobs/lists/list-jobs.component.html"),
            styles: [__webpack_require__(/*! ./list-jobs.component.css */ "./src/app/company/site/jobs/lists/list-jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListJobsComponent);
    return ListJobsComponent;
}());



/***/ }),

/***/ "./src/app/company/site/jobs/show/show-job.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company/site/jobs/show/show-job.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9qb2JzL3Nob3cvc2hvdy1qb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/company/site/jobs/show/show-job.component.html":
/*!****************************************************************!*\
  !*** ./src/app/company/site/jobs/show/show-job.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-medium-bottom\">\n    <div class=\"card uk-margin-medium-bottom\">\n        <div class=\"card-header bg-info\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"icon ion-md-construct text-white mr-2\"></i>Job Details and Stats - {{job.job_title}}</h5>\n                </div>\n            </div>\n        </div>\n            <div class=\"uk-section pt-4 pb-4\">\n                <div class=\"uk-container\">\n                    <span *ngIf=\"!isLoading\" uk-spinner=\"ratio: 4.5\"></span>\n\n                    <h3>Job Details</h3>\n                    <hr>\n\n                    <div class=\"uk-grid-match uk-child-width-1-3@m\" uk-grid>\n                        <div>\n                            <ul class=\"uk-list\">\n                                <li class=\"uk-text-small\"><strong>Title: </strong>{{job.job_title}}</li>\n                                <li class=\"uk-text-small\"><strong>Asset: </strong>{{job.job_asset}}</li>\n                                <li class=\"uk-text-small\"><strong>Status: </strong>{{job.job_status}}</li>\n                                <li class=\"uk-text-small\"><strong>Type: </strong>{{job.job_type}}</li>\n                                <li class=\"uk-text-small\"><strong>Asigned To: </strong>{{job.job_worker}}</li>\n                                <li *ngIf=\"job.worker_status === 'On The Job'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-timer text-success ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                <li *ngIf=\"job.worker_status === 'Lunch'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                <li *ngIf=\"job.worker_status === 'Punched Out'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-alarm text-danger ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                <li *ngIf=\"job.worker_status === 'Break'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                <li *ngIf=\"job.worker_status === ''\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-help text-info ml-2 mr-2\"></i>Unknown</li>\n                            </ul>\n                        </div>\n                        <div>\n                            <p><strong>Description:  </strong>{{job.job_description}}</p>\n                        </div>\n                        <div>\n                            <p><strong>Logs/Notes:  </strong>{{job.job_notes}}</p>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        <div class=\"card-footer d-flex justify-content-around footer-bg mt-3\">\n            <a routerLink=\"/company/site/job/edit/{{job.id}}\" class=\"uk-button uk-button-text mr-5 ml-5\"><i class=\"icon ion-md-create ml-1 mr-1\"></i>edit</a>\n            <a href=\"#\" class=\"uk-button uk-button-text mr-5 ml-5\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>jobs</a>\n            <a href=\"#\" class=\"uk-button uk-button-text mr-5 ml-5\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text mr-5 ml-5\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/company/site/jobs/show/show-job.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company/site/jobs/show/show-job.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowJobComponent", function() { return ShowJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");





var ShowJobComponent = /** @class */ (function () {
    function ShowJobComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            site_id: '',
            worker_status: '',
        };
    }
    ShowJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = false;
        console.log(this.isLoading);
        this.jobId = this.route.snapshot.params.id;
        this.id = this.job.site_id;
        this.js.getJob(this.jobId).subscribe(function (job) {
            _this.job = job;
        });
        this.isLoading = true;
        console.log(this.isLoading);
    };
    ShowJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-job',
            template: __webpack_require__(/*! ./show-job.component.html */ "./src/app/company/site/jobs/show/show-job.component.html"),
            styles: [__webpack_require__(/*! ./show-job.component.css */ "./src/app/company/site/jobs/show/show-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShowJobComponent);
    return ShowJobComponent;
}());



/***/ }),

/***/ "./src/app/modules/angular-material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/angular-material.module.ts ***!
  \****************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");





//
// Form Controls
//










// import { MatMomentDateModule } from '@angular/material-moment-adapter';
//
// Navigation
//



//
// Layout
//









//
// Buttons & Indicators
//







//
// Popups & Modals
//




//
// Data Table
//



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                // MatMomentDateModule,
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.example-container {\n  height: 500px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n   -webkit-user-select: none;\n      -moz-user-select: none;\n       -ms-user-select: none;\n           user-select: none;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.menu-button {\n  transition: 300ms ease-in-out;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n\n.menu-button.rotated {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.submenu {\n  overflow-y: hidden;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  padding-left: 30px;\n}\n\n.submenu.expanded {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktbmF2L215LW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtHQUNHLHlCQUFpQjtNQUFqQixzQkFBaUI7T0FBakIscUJBQWlCO1dBQWpCLGlCQUFpQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QiwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0VBQWhDLDhEQUFnQztFQUNoQyw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL215LW5hdi9teS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5leGFtcGxlLXNpZGVuYXYge1xuICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1lbnUtYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuLm1lbnUtYnV0dG9uLnJvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLnN1Ym1lbnUge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG4uc3VibWVudS5leHBhbmRlZCB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"example-toolbar\">\n\t<button mat-icon-button (click)=\"isExpanded = !isExpanded\"><mat-icon>menu</mat-icon></button>\n\t<h1 class=\"example-app-name\">Nested Menus</h1>\n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\" >\n\t<mat-sidenav #sidenav class=\"example-sidenav\" mode=\"side\" opened=\"true\" (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\">\n\t\t<mat-nav-list>\n\t\t\t<mat-list-item (click)=\"showSubmenu = !showSubmenu\" class=\"parent\">\n\t\t\t\t<span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Parent Menu</span>\n\t\t\t\t<mat-icon mat-list-icon>home</mat-icon>\n\t\t\t\t<mat-icon class=\"menu-button\" [ngClass]=\"{'rotated' : showSubmenu}\" *ngIf=\"isExpanded || isShowing\">expand_more</mat-icon>\n\t\t\t</mat-list-item>\n\t\t\t<div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\" *ngIf=\"isShowing || isExpanded\">\n\t\t\t\t<a mat-list-item href=\"...\">Submenu Item 1</a>\n\t\t\t\t<a mat-list-item href=\"...\">Submenu Item 2</a>\n\t\t\t\t<mat-list-item (click)=\"showSubSubMenu = !showSubSubMenu\" class=\"parent\">\n\t\t\t\t\t<span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Nested Menu</span>\n\t\t\t\t\t<mat-icon class=\"menu-button\" [ngClass]=\"{'rotated' : showSubSubMenu}\" *ngIf=\"isExpanded || isShowing\">expand_more</mat-icon>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<div class=\"submenu\" [ngClass]=\"{'expanded' : showSubSubMenu}\" *ngIf=\"isShowing || isExpanded\">\n\t\t\t\t\t<mat-list-item>SubSubmenu Item 1</mat-list-item>\n\t\t\t\t\t<mat-list-item>SubSubmenu Item 2</mat-list-item>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-nav-list>\n    <mat-nav-list>\n</mat-nav-list>\n\t</mat-sidenav>\n\n\t<div class=\"example-sidenav-content\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n\n</mat-sidenav-container>\n\n\n<!-- <mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\">Link 1</a>\n      <a mat-list-item href=\"#\">Link 2</a>\n      <a mat-list-item href=\"#\">Link 3</a>\n    </mat-nav-list>\n    <mat-menu #animals=\"matMenu\">\n      <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n    </mat-menu>\n\n    <mat-menu #vertebrates=\"matMenu\">\n      <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n      <button mat-menu-item>Birds</button>\n      <button mat-menu-item>Mammals</button>\n    </mat-menu>\n\n    <mat-menu #invertebrates=\"matMenu\">\n      <button mat-menu-item>Insects</button>\n      <button mat-menu-item>Molluscs</button>\n      <button mat-menu-item>Crustaceans</button>\n      <button mat-menu-item>Corals</button>\n      <button mat-menu-item>Arachnids</button>\n      <button mat-menu-item>Velvet worms</button>\n      <button mat-menu-item>Horseshoe crabs</button>\n    </mat-menu>\n\n    <mat-menu #fish=\"matMenu\">\n      <button mat-menu-item>Baikal oilfish</button>\n      <button mat-menu-item>Bala shark</button>\n      <button mat-menu-item>Ballan wrasse</button>\n      <button mat-menu-item>Bamboo shark</button>\n      <button mat-menu-item>Banded killifish</button>\n    </mat-menu>\n\n    <mat-menu #amphibians=\"matMenu\">\n      <button mat-menu-item>Sonoran desert toad</button>\n      <button mat-menu-item>Western toad</button>\n      <button mat-menu-item>Arroyo toad</button>\n      <button mat-menu-item>Yosemite toad</button>\n    </mat-menu>\n\n    <mat-menu #reptiles=\"matMenu\">\n      <button mat-menu-item>Banded Day Gecko</button>\n      <button mat-menu-item>Banded Gila Monster</button>\n      <button mat-menu-item>Black Tree Monitor</button>\n      <button mat-menu-item>Blue Spiny Lizard</button>\n      <button mat-menu-item disabled>Velociraptor</button>\n    </mat-menu>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"mb-3 shadow-6\">\n      <span><button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button></span>\n      <span>uikit-firebase-admin</span>\n\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container> -->\n\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isExpanded = false;
        this.showSubmenu = false;
        this.isShowing = false;
        this.showSubSubMenu = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MyNavComponent.prototype.mouseenter = function () {
        if (!this.isExpanded) {
            this.isShowing = true;
        }
    };
    MyNavComponent.prototype.mouseleave = function () {
        if (!this.isExpanded) {
            this.isShowing = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"])
    ], MyNavComponent.prototype, "sidenav", void 0);
    MyNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/my-nav/my-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var JobService = /** @class */ (function () {
    function JobService(afs) {
        this.afs = afs;
        this.jobCollection = this.afs.collection('site_jobs', function (ref) { return ref.orderBy('job_title'); });
        this.siteCollection = this.afs.collection('site_locations', function (ref) { return ref.orderBy('site_name'); });
        this.jobTypeCollection = this.afs.collection('job_type_list');
        this.jobStatusCollection = this.afs.collection('job_status_list');
    }
    JobService.prototype.getSites = function () {
        this.sites = this.siteCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.sites;
    };
    JobService.prototype.getSite = function (id) {
        this.siteDoc = this.afs.doc("site_locations/" + id);
        this.site = this.siteDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.site;
    };
    JobService.prototype.getJob = function (id) {
        this.jobDoc = this.afs.doc("site_jobs/" + id);
        this.job = this.jobDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.job;
    };
    JobService.prototype.getJobs = function () {
        this.jobs = this.jobCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.jobs;
    };
    JobService.prototype.newJob = function (job) {
        this.jobCollection.add(job);
    };
    JobService.prototype.updateJob = function (job) {
        this.jobDoc = this.afs.doc("site_jobs/" + job.id);
        this.jobDoc.update(job);
    };
    JobService.prototype.getJobTypes = function () {
        this.jobTypes = this.jobTypeCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.jobTypes;
    };
    JobService.prototype.getJobStatus = function () {
        this.jobStatuses = this.jobStatusCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.jobStatuses;
    };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/services/ngb-date-firestore-adapter.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/ngb-date-firestore-adapter.service.ts ***!
  \****************************************************************/
/*! exports provided: NgbDateFirestoreAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateFirestoreAdapter", function() { return NgbDateFirestoreAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




/**
 * NgbDateAdapter implementation that allows using Firebase Firestore TimeStamp as a user date model.
 * https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
 */
var NgbDateFirestoreAdapter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgbDateFirestoreAdapter, _super);
    function NgbDateFirestoreAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
       * Converts Firestore TimeStamp to a NgbDateStruct
       */
    NgbDateFirestoreAdapter.prototype.fromModel = function (ts) {
        if (ts instanceof firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].Timestamp) {
            return {
                year: ts.toDate().getFullYear(),
                month: ts.toDate().getMonth() + 1,
                day: ts.toDate().getDate()
            };
        }
        else
            return null;
    };
    /**
     * Converts a NgbDateStruct to a Firestore TimeStamp
     */
    NgbDateFirestoreAdapter.prototype.toModel = function (ngbDate) {
        var jsDate = new Date(ngbDate.year ? ngbDate.year : new Date().getFullYear(), ngbDate.month ? ngbDate.month - 1 : new Date().getMonth() - 1, ngbDate.day ? ngbDate.day : new Date().getDate(), 12);
        return firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].Timestamp.fromDate(jsDate);
    };
    NgbDateFirestoreAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NgbDateFirestoreAdapter);
    return NgbDateFirestoreAdapter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"]));



/***/ }),

/***/ "./src/app/services/site.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/site.service.ts ***!
  \******************************************/
/*! exports provided: SiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteService", function() { return SiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SiteService = /** @class */ (function () {
    function SiteService(afs, route) {
        this.afs = afs;
        this.route = route;
        this.siteCollection = this.afs.collection('site_locations', function (ref) { return ref.orderBy('site_name'); });
        this.mainCollection = this.afs.collection('main_company', function (ref) { return ref.orderBy('company_name'); });
        this.jobCollection = this.afs.collection('site_jobs', function (ref) { return ref.orderBy('job_title'); });
    }
    SiteService.prototype.getSites = function () {
        this.sites = this.siteCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.sites;
    };
    SiteService.prototype.getMains = function () {
        this.mains = this.mainCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.mains;
    };
    SiteService.prototype.getJobs = function (id) {
        this.jobsCollection = this.afs.collection('site_jobs', function (ref) { return ref.where('site_id', '==', id); });
        this.jobs = this.jobsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.jobs;
    };
    SiteService.prototype.getMain = function (id) {
        this.mainDoc = this.afs.doc("main_company/" + id);
        this.main = this.mainDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.main;
    };
    SiteService.prototype.getSite = function (id) {
        this.siteDoc = this.afs.doc("site_locations/" + id);
        this.site = this.siteDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.site;
    };
    SiteService.prototype.getAssets = function (id) {
        this.assetCollection = this.afs.collection('site_assets', function (ref) { return ref.where('asset_site_id', '==', id); });
        this.assets = this.assetCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.assets;
    };
    SiteService.prototype.updateMain = function (main) {
        this.mainDoc = this.afs.doc("main_company/" + main.id);
        this.mainDoc.update(main);
    };
    SiteService.prototype.updateSite = function (site) {
        this.siteDoc = this.afs.doc("site_locations/" + site.id);
        this.siteDoc.update(site);
    };
    SiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SiteService);
    return SiteService;
}());



/***/ }),

/***/ "./src/app/static/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/static/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/static/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/static/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/static/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/static/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/static/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/static/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/static/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/static/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"uk-navbar-container bk-color uk-light uk-box-shadow-large uk-margin-medium-bottom\" uk-navbar>\n    <div class=\"uk-navbar-left uk-margin-large-left\">\n        <a class=\"uk-navbar-toggle\" uk-toggle=\"target: #offcanvas-nav\"><span class=\"uk-icon uk-margin-small-left\" uk-icon=\"icon: menu\"></span></a>\n        <a class=\"uk-navbar-item uk-logo\" href=\"#\">overzien</a>\n    </div>\n\n        <div class=\"uk-navbar-right uk-visible@m uk-margin-large-right\">\n\n        <ul class=\"uk-navbar-nav\">\n            <li>\n                <a href=\"#\">\n                    <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: mail\"></span>\n                    Features\n                </a>\n            </li>\n        </ul>\n\n        <div class=\"uk-navbar-item\">\n            <div><span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: cog\"></span><a href=\"#\">My Settings</a></div>\n        </div>\n        <div class=\"uk-navbar-item\">\n          <div><span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: sign-in\"></span><a href=\"#\">Login</a></div>\n        </div>\n        <div class=\"uk-navbar-item\">\n          <div><span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: sign-out\"></span><a href=\"#\">Logout</a></div>\n        </div>\n        <div class=\"uk-navbar-item\">\n        <div class=\"uk-width-auto\">\n          <img class=\"uk-comment-avatar\" width=\"20\" height=\"20\" src=\"../../../assets/images/dude.png\"><a class=\"uk-link-reset\" href=\"#\" class=\"uk-text-small uk-margin-small-left\">John Doe</a>\n      </div></div>\n\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/static/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/static/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bk-color {\n  background: linear-gradient(to left, #0e334b, #012e5a); }\n\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%; }\n\nmat-sidenav {\n  width: 250px; }\n\na {\n  text-decoration: none;\n  color: white; }\n\na:hover,\na:active {\n  color: lightgray; }\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer; }\n\n.icon {\n  display: inline-block;\n  height: 14px;\n  font-size: 14px;\n  text-align: center;\n  vertical-align: middle; }\n\n.label {\n  display: inline-block;\n  line-height: 14px;\n  font-size: 14px;\n  text-align: center;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb25ib3phcnRoL0RvY3VtZW50cy9VaUtpdF9GaXJlYmFzZS91aWtpdC1maXJlYmFzZS1hZG1pbi9zcmMvYXBwL3N0YXRpYy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQXNELEVBQUE7O0FBRXhEO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFHZDs7RUFFRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJrLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwZTMzNGIsICMwMTJlNWEpO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlcixcbmE6YWN0aXZlIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm5hdmlnYXRpb24taXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/static/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/static/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "toggleSidenav", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/static/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/static/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/static/sidenav/sidenav.component.css":
/*!******************************************************!*\
  !*** ./src/app/static/sidenav/sidenav.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bk-color {\n  background: linear-gradient(to left, #000833, #060e16);\n}\n\n.cm-anchor {\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJrLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDA4MzMsICMwNjBlMTYpO1xufVxuXG4uY20tYW5jaG9yIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/static/sidenav/sidenav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/static/sidenav/sidenav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"offcanvas-nav\" uk-offcanvas=\"mode: slide; overlay: true; container: true\">\n\n    <div class=\"uk-offcanvas-bar bk-color\">\n        <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n\n        <article class=\"uk-comment uk-margin-medium-top\">\n            <header class=\"uk-comment-header uk-grid-medium uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-auto\">\n                    <img class=\"uk-comment-avatar\" width=\"40\" height=\"40\" src=\"../../../assets/images/dude.png\">\n                </div>\n                <div class=\"uk-width-expand\">\n                    <h6 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" href=\"#\" class=\"uk-text-small\">John Doe</a></h6>\n                    <ul class=\"uk-subnav uk-subnav-divider uk-margin-remove-top\">\n                        <li><a href=\"#\" class=\"uk-text-small\"><span class=\"uk-icon uk-margin-auto\" uk-icon=\"icon: mail\"></span></a></li>\n                        <li><a href=\"#\" class=\"uk-text-small\"><span class=\"uk-icon uk-margin-auto\" uk-icon=\"icon: cog\"></span></a></li>\n                        <li><a href=\"#\" class=\"uk-text-small\"><span class=\"uk-icon uk-margin-auto\" uk-icon=\"icon: sign-out\"></span></a></li>\n                    </ul>\n                </div>\n            </header>\n        </article>\n\n        <hr>\n\n        <ul uk-accordion>\n            <li class=\"uk-close\">\n                <a routerLink=\"/company\" class=\"uk-accordion-title uk-text-small\" href=\"#\">My Company</a>\n                <div class=\"uk-accordion-content uk-margin-small-left\">\n                    <ul class=\"uk-list uk-text-small\">\n                      <li><a routerLink=\"/company/edit\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: table\"></span>Edit Company</a></li>\n                      <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: thumbnails\"></span>User Management</a></li>\n                    </ul>\n                </div>\n            </li>\n            <li>\n                <a class=\"uk-accordion-title uk-text-small\" href=\"#\">Production</a>\n                <div class=\"uk-accordion-content\">\n                    <ul class=\"uk-list uk-text-small uk-margin-small-left\">\n                        <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: file-text\"></span>Quotes</a></li>\n                        <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: arrow-right\"></span>Incoming</a></li>\n                        <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: play\"></span>WIP</a></li>\n                        <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: arrow-left\"></span>Outgoing</a></li>\n                    </ul>\n                </div>\n            </li>\n            <li>\n                <a class=\"uk-accordion-title uk-text-small\" href=\"#\">Asset Maintenance</a>\n                <div class=\"uk-accordion-content\">\n                    <div class=\"uk-width-1-2@s uk-width-2-5@m\">\n                        <ul class=\"uk-list uk-text-small uk-margin-small-left\">\n                            <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><i class=\"icon ion-ios-build uk-margin-small-right uk-margin-small-left\"></i>Break Fix</a></li>\n                            <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><i class=\"icon ion-ios-construct uk-margin-small-right uk-margin-small-left\"></i>PMM</a></li>\n                            <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><i class=\"icon ion-ios-clipboard uk-margin-small-right uk-margin-small-left\"></i>WIP</a></li>\n                            <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><i class=\"icon ion-ios-speedometer uk-margin-small-right uk-margin-small-left\"></i>Charts</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </li>\n        </ul>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/static/sidenav/sidenav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/static/sidenav/sidenav.component.ts ***!
  \*****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/static/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/static/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCUofVQ1dhk_AHm0v8H7g-t1ns0Saxckn8',
        authDomain: 'uikit-fb.firebaseapp.com',
        databaseURL: 'https://uikit-fb.firebaseio.com',
        projectId: 'uikit-fb',
        storageBucket: 'uikit-fb.appspot.com',
        messagingSenderId: '1079399741132'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/donbozarth/Documents/UiKit_Firebase/uikit-firebase-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map