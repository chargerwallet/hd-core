'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var semver = require('semver');
var hdShared = require('@chargerwallet/hd-shared');
var axios = require('axios');
var lodash = require('lodash');
var ByteBuffer = require('bytebuffer');
var BigNumber = require('bignumber.js');
var utils = require('@noble/hashes/utils');
var blake2s = require('@noble/hashes/blake2s');
var hdTransport = require('@chargerwallet/hd-transport');
var sha256 = require('@noble/hashes/sha256');
var JSZip = require('jszip');
var sha3 = require('@noble/hashes/sha3');
var rippleKeypairs = require('ripple-keypairs');
var blake2b = require('@noble/hashes/blake2b');
var buffer = require('buffer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var semver__default = /*#__PURE__*/_interopDefaultLegacy(semver);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var ByteBuffer__default = /*#__PURE__*/_interopDefaultLegacy(ByteBuffer);
var BigNumber__default = /*#__PURE__*/_interopDefaultLegacy(BigNumber);
var JSZip__default = /*#__PURE__*/_interopDefaultLegacy(JSZip);

const inject = ({ call, cancel, dispose, eventEmitter, init, updateSettings, uiResponse, }) => {
    const api = Object.assign({ on: (type, fn) => {
            eventEmitter.on(type, fn);
        }, emit: () => { }, off: (type, fn) => {
            eventEmitter.removeListener(type, fn);
        }, removeAllListeners: type => {
            eventEmitter.removeAllListeners(type);
        }, init,
        call,
        dispose,
        uiResponse,
        cancel,
        updateSettings }, createCoreApi(call));
    return api;
};
const createCoreApi = (call) => ({
    getLogs: () => call({ method: 'getLogs' }),
    searchDevices: () => call({ method: 'searchDevices' }),
    getFeatures: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'getFeatures' })),
    getChargerwalletFeatures: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'getChargerwalletFeatures' })),
    checkFirmwareRelease: connectId => call({ connectId, method: 'checkFirmwareRelease' }),
    checkBLEFirmwareRelease: connectId => call({ connectId, method: 'checkBLEFirmwareRelease' }),
    checkTransportRelease: () => call({ method: 'checkTransportRelease' }),
    checkBridgeStatus: () => call({ method: 'checkBridgeStatus' }),
    checkBridgeRelease: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'checkBridgeRelease' })),
    checkBootloaderRelease: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'checkBootloaderRelease' })),
    checkAllFirmwareRelease: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'checkAllFirmwareRelease' })),
    cipherKeyValue: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'cipherKeyValue' })),
    testInitializeDeviceDuration: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'testInitializeDeviceDuration' })),
    deviceBackup: connectId => call({ connectId, method: 'deviceBackup' }),
    deviceChangePin: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceChangePin' })),
    deviceFlags: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceFlags' })),
    deviceRebootToBoardloader: connectId => call({ connectId, method: 'deviceRebootToBoardloader' }),
    deviceRebootToBootloader: connectId => call({ connectId, method: 'deviceRebootToBootloader' }),
    deviceRecovery: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceRecovery' })),
    deviceReset: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceReset' })),
    deviceSettings: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceSettings' })),
    deviceUpdateReboot: connectId => call({ connectId, method: 'deviceUpdateReboot' }),
    deviceUploadResource: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceUploadResource' })),
    deviceSupportFeatures: connectId => call({ connectId, method: 'deviceSupportFeatures' }),
    deviceVerify: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceVerify' })),
    deviceWipe: connectId => call({ connectId, method: 'deviceWipe' }),
    deviceFullyUploadResource: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceFullyUploadResource' })),
    deviceUpdateBootloader: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceUpdateBootloader' })),
    getPassphraseState: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'getPassphraseState' })),
    deviceCancel: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceCancel' })),
    deviceLock: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'deviceLock' })),
    getNextU2FCounter: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'getNextU2FCounter' })),
    setU2FCounter: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'setU2FCounter' })),
    allNetworkGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'allNetworkGetAddress' })),
    evmGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'evmGetAddress' })),
    evmGetPublicKey: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'evmGetPublicKey' })),
    evmSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'evmSignMessage' })),
    evmSignMessageEIP712: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'evmSignMessageEIP712' })),
    evmSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'evmSignTransaction' })),
    evmSignTypedData: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'evmSignTypedData' })),
    evmVerifyMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'evmVerifyMessage' })),
    btcGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'btcGetAddress' })),
    btcGetPublicKey: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'btcGetPublicKey' })),
    btcSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'btcSignMessage' })),
    btcSignPsbt: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'btcSignPsbt' })),
    btcSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'btcSignTransaction' })),
    btcVerifyMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'btcVerifyMessage' })),
    starcoinGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'starcoinGetAddress' })),
    starcoinGetPublicKey: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'starcoinGetPublicKey' })),
    starcoinSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'starcoinSignMessage' })),
    starcoinSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'starcoinSignTransaction' })),
    starcoinVerifyMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'starcoinVerifyMessage' })),
    nemGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nemGetAddress' })),
    nemSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nemSignTransaction' })),
    solGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'solGetAddress' })),
    solSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'solSignTransaction' })),
    stellarGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'stellarGetAddress' })),
    stellarSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'stellarSignTransaction' })),
    firmwareUpdate: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'firmwareUpdate' })),
    firmwareUpdateV2: (connectId, params) => call(Object.assign(Object.assign({}, params), { connectId, method: 'firmwareUpdateV2' })),
    requestWebUsbDevice: () => call({ method: 'requestWebUsbDevice' }),
    tronGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'tronGetAddress' })),
    tronSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'tronSignMessage' })),
    tronSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'tronSignTransaction' })),
    confluxGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'confluxGetAddress' })),
    confluxSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'confluxSignMessage' })),
    confluxSignMessageCIP23: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'confluxSignMessageCIP23' })),
    confluxSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'confluxSignTransaction' })),
    nearGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nearGetAddress' })),
    nearSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nearSignTransaction' })),
    aptosGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'aptosGetAddress' })),
    aptosGetPublicKey: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'aptosGetPublicKey' })),
    aptosSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'aptosSignMessage' })),
    aptosSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'aptosSignTransaction' })),
    algoGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'algoGetAddress' })),
    algoSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'algoSignTransaction' })),
    cosmosGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'cosmosGetAddress' })),
    cosmosGetPublicKey: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'cosmosGetPublicKey' })),
    cosmosSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'cosmosSignTransaction' })),
    xrpGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'xrpGetAddress' })),
    xrpSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'xrpSignTransaction' })),
    suiGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'suiGetAddress' })),
    suiGetPublicKey: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'suiGetPublicKey' })),
    suiSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'suiSignMessage' })),
    suiSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'suiSignTransaction' })),
    cardanoGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'cardanoGetAddress' })),
    cardanoGetPublicKey: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'cardanoGetPublicKey' })),
    cardanoSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'cardanoSignTransaction' })),
    cardanoSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'cardanoSignMessage' })),
    filecoinGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'filecoinGetAddress' })),
    filecoinSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'filecoinSignTransaction' })),
    polkadotGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'polkadotGetAddress' })),
    polkadotSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'polkadotSignTransaction' })),
    kaspaGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'kaspaGetAddress' })),
    kaspaSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'kaspaSignTransaction' })),
    nexaGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nexaGetAddress' })),
    nexaSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nexaSignTransaction' })),
    nostrGetPublicKey: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nostrGetPublicKey' })),
    nostrSignEvent: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nostrSignEvent' })),
    nostrEncryptMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nostrEncryptMessage' })),
    nostrDecryptMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nostrDecryptMessage' })),
    nostrSignSchnorr: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nostrSignSchnorr' })),
    lnurlAuth: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'lnurlAuth' })),
    nervosGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nervosGetAddress' })),
    nervosSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'nervosSignTransaction' })),
    dnxGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'dnxGetAddress' })),
    dnxSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'dnxSignTransaction' })),
    tonGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'tonGetAddress' })),
    tonSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'tonSignMessage' })),
    tonSignProof: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'tonSignProof' })),
    scdoGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'scdoGetAddress' })),
    scdoSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'scdoSignMessage' })),
    scdoSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'scdoSignTransaction' })),
    alephiumGetAddress: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'alephiumGetAddress' })),
    alephiumSignMessage: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'alephiumSignMessage' })),
    alephiumSignTransaction: (connectId, deviceId, params) => call(Object.assign(Object.assign({}, params), { connectId, deviceId, method: 'alephiumSignTransaction' })),
});

const lowLevelInject = ({ call, cancel, dispose, eventEmitter, init, uiResponse, updateSettings, addHardwareGlobalEventListener, }) => {
    const api = Object.assign({ addHardwareGlobalEventListener, removeAllListeners: type => {
            eventEmitter.removeAllListeners(type);
        }, init,
        call,
        dispose,
        uiResponse,
        cancel,
        updateSettings, emit: () => { } }, createCoreApi(call));
    return api;
};

var events = {exports: {}};

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
events.exports = EventEmitter;
events.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

const eventEmitter = new events.exports();
const topLevelInject = () => {
    let lowLevelApi;
    const call = (params) => {
        if (!lowLevelApi)
            return Promise.resolve(undefined);
        return lowLevelApi.call(params);
    };
    const api = Object.assign(Object.assign({ on: (type, fn) => {
            eventEmitter.on(type, fn);
        }, emit: (eventName, ...args) => {
            eventEmitter.emit(eventName, ...args);
        }, off: (type, fn) => {
            eventEmitter.emit(type, fn);
        }, init: (settings, hardwareLowLeverApi) => {
            var _a;
            lowLevelApi = hardwareLowLeverApi;
            return (_a = lowLevelApi === null || lowLevelApi === void 0 ? void 0 : lowLevelApi.init(settings)) !== null && _a !== void 0 ? _a : Promise.resolve(false);
        }, call }, createCoreApi(call)), { removeAllListeners: type => {
            eventEmitter.removeAllListeners(type);
            lowLevelApi === null || lowLevelApi === void 0 ? void 0 : lowLevelApi.removeAllListeners(type);
        }, dispose: () => lowLevelApi === null || lowLevelApi === void 0 ? void 0 : lowLevelApi.dispose(), uiResponse: response => lowLevelApi === null || lowLevelApi === void 0 ? void 0 : lowLevelApi.uiResponse(response), cancel: (connectId) => lowLevelApi === null || lowLevelApi === void 0 ? void 0 : lowLevelApi.cancel(connectId), updateSettings: settings => { var _a; return (_a = lowLevelApi === null || lowLevelApi === void 0 ? void 0 : lowLevelApi.updateSettings(settings)) !== null && _a !== void 0 ? _a : Promise.resolve(false); } });
    return api;
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const httpRequest$1 = (url, type = 'text') => __awaiter(void 0, void 0, void 0, function* () {
    const headers = {};
    if (url.indexOf('ngrok-free.app') > -1) {
        headers['ngrok-skip-browser-warning'] = true;
    }
    const response = yield axios__default["default"].request({
        url,
        withCredentials: false,
        responseType: type === 'binary' ? 'arraybuffer' : 'json',
        headers,
    });
    if (+response.status === 200) {
        if (type === 'json') {
            return response.data;
        }
        if (type === 'binary') {
            return response.data;
        }
        return response.data;
    }
    throw new Error(`httpRequest error: ${url} ${response.statusText}`);
});

const httpRequest = (url, type) => httpRequest$1(url, type);
const getTimeStamp = () => new Date().getTime();

const VER_NUMS = 3;
const versionRegex = new RegExp(/^[0-9]{1,3}(\.[0-9]{1,3}){0,2}$/);
const isValidVersionString = (version) => versionRegex.test(version);
const isValidVersionArray = (version) => {
    if (!Array.isArray(version)) {
        return false;
    }
    if (version.length === 0 || version.length > VER_NUMS) {
        return false;
    }
    if (version[0] === 0) {
        return false;
    }
    for (let i = 0; i < version.length; i++) {
        if (typeof version[i] !== 'number' || version[i] < 0) {
            return false;
        }
    }
    return true;
};
const normalizeVersionArray = (version) => {
    if (version.length === VER_NUMS) {
        return version;
    }
    const partialVersion = [...version];
    for (let i = version.length; i < VER_NUMS; i++) {
        partialVersion.push(0);
    }
    return partialVersion;
};
const versionSplit = (version) => {
    if (!isValidVersionString(version)) {
        return [0, 0, 0];
    }
    return version.split('.').map(v => Number(v));
};
const versionCompare = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string' && a === b) {
        return 0;
    }
    const pa = typeof a === 'string' ? versionSplit(a) : a;
    const pb = typeof b === 'string' ? versionSplit(b) : b;
    const vpa = isValidVersionArray(pa);
    const vpb = isValidVersionArray(pb);
    if (!vpa && !vpb) {
        return 0;
    }
    if (!vpa && vpb) {
        return -1;
    }
    if (vpa && !vpb) {
        return 1;
    }
    const npa = normalizeVersionArray(pa);
    const npb = normalizeVersionArray(pb);
    for (let i = 0; i < VER_NUMS; i++) {
        if (npa[i] > npb[i])
            return 1;
        if (npb[i] > npa[i])
            return -1;
    }
    return 0;
};

function patchFeatures(response) {
    if (response.type !== 'Features') {
        return response;
    }
    if (response.message.major_version < 1) {
        response.message.major_version = 1;
    }
    return response;
}

exports.EChargerWalletDeviceMode = void 0;
(function (EChargerWalletDeviceMode) {
    EChargerWalletDeviceMode["bootloader"] = "bootloader";
    EChargerWalletDeviceMode["normal"] = "normal";
    EChargerWalletDeviceMode["notInitialized"] = "notInitialized";
    EChargerWalletDeviceMode["backupMode"] = "backupMode";
})(exports.EChargerWalletDeviceMode || (exports.EChargerWalletDeviceMode = {}));
const DeviceModelToTypes = {
    model_mini: ['classic', 'classic1s', 'mini'],
    model_touch: ['touch', 'pro'],
    model_classic: ['classic', 'classic1s'],
};
const DeviceTypeToModels = {
    classic: ['model_classic', 'model_mini'],
    classic1s: ['model_classic', 'model_mini'],
    mini: ['model_mini'],
    touch: ['model_touch'],
    pro: ['model_touch'],
    unknown: [],
};

const getDeviceType = (features) => {
    if (!features || typeof features !== 'object') {
        return 'unknown';
    }
    switch (features.chargerwallet_device_type) {
        case 'CLASSIC':
            return 'classic';
        case 'CLASSIC1S':
            return 'classic1s';
        case 'MINI':
            return 'mini';
        case 'TOUCH':
            return 'touch';
        case 'PRO':
            return 'pro';
        default:
            if (!lodash.isEmpty(features.chargerwallet_serial_no)) {
                return 'unknown';
            }
    }
    const serialNo = getDeviceUUID(features);
    if (lodash.isEmpty(serialNo) && features.bootloader_mode === true && features.model === '1') {
        return 'classic';
    }
    if (lodash.isEmpty(serialNo))
        return 'unknown';
    const miniFlag = serialNo.slice(0, 2);
    if (miniFlag.toLowerCase() === 'bi')
        return 'classic';
    if (miniFlag.toLowerCase() === 'cl')
        return 'classic';
    if (miniFlag.toLowerCase() === 'mi')
        return 'mini';
    if (miniFlag.toLowerCase() === 'tc')
        return 'touch';
    if (miniFlag.toLowerCase() === 'pr')
        return 'pro';
    return 'unknown';
};
const getDeviceTypeByBleName = (name) => {
    if (!name)
        return 'unknown';
    if (name.startsWith('BixinKey'))
        return 'classic';
    if (name.startsWith('K'))
        return 'classic';
    if (name.startsWith('T'))
        return 'touch';
    if (name.startsWith('Touch'))
        return 'touch';
    if (name.startsWith('Pro'))
        return 'pro';
    return 'unknown';
};
const getDeviceBleName = (features) => {
    if (features == null)
        return null;
    return features.chargerwallet_ble_name || features.ble_name || null;
};
const getDeviceUUID = (features) => {
    const serialNo = features.chargerwallet_serial_no || features.chargerwallet_serial || features.serial_no;
    return serialNo !== null && serialNo !== void 0 ? serialNo : '';
};
const getDeviceLabel = (features) => {
    if (!features)
        return null;
    const deviceType = getDeviceType(features);
    if (deviceType == null)
        return null;
    if (typeof features.label === 'string' && !lodash.isEmpty(features.label)) {
        return features.label;
    }
    const bleName = getDeviceBleName(features);
    if (!lodash.isEmpty(bleName))
        return bleName;
    return `ChargerWallet ${deviceType.charAt(0).toUpperCase() + deviceType.slice(1)}`;
};
const getMethodVersionRange = (features, getVersionRange) => {
    const deviceType = getDeviceType(features);
    let versionRange = getVersionRange(deviceType);
    if (versionRange) {
        return versionRange;
    }
    const modelFallbacks = ['model_classic', 'model_mini', 'model_touch'];
    for (const model of modelFallbacks) {
        if (DeviceModelToTypes[model].includes(deviceType)) {
            versionRange = getVersionRange(model);
            if (versionRange) {
                return versionRange;
            }
        }
    }
    return versionRange;
};

const getDeviceFirmwareVersion = (features) => {
    var _a, _b;
    if (!features)
        return [0, 0, 0];
    if (semver__default["default"].valid(features.chargerwallet_firmware_version)) {
        return (_a = features.chargerwallet_firmware_version) === null || _a === void 0 ? void 0 : _a.split('.');
    }
    if (semver__default["default"].valid(features.chargerwallet_version)) {
        return (_b = features.chargerwallet_version) === null || _b === void 0 ? void 0 : _b.split('.');
    }
    return [0, 0, 0];
};
const getDeviceBLEFirmwareVersion = (features) => {
    const bleVer = (features === null || features === void 0 ? void 0 : features.chargerwallet_ble_version) || (features === null || features === void 0 ? void 0 : features.ble_ver);
    if (!bleVer) {
        return null;
    }
    if (!semver__default["default"].valid(bleVer)) {
        return null;
    }
    return bleVer.split('.');
};
const getDeviceBootloaderVersion = (features) => {
    var _a, _b, _c, _d, _e;
    if (!features)
        return [0, 0, 0];
    if (semver__default["default"].valid(features.chargerwallet_boot_version)) {
        return (_a = features.chargerwallet_boot_version) === null || _a === void 0 ? void 0 : _a.split('.');
    }
    if (!features.bootloader_version) {
        if (features.bootloader_mode) {
            return [
                (_b = features === null || features === void 0 ? void 0 : features.major_version) !== null && _b !== void 0 ? _b : 0,
                (_c = features === null || features === void 0 ? void 0 : features.minor_version) !== null && _c !== void 0 ? _c : 0,
                (_d = features === null || features === void 0 ? void 0 : features.patch_version) !== null && _d !== void 0 ? _d : 0,
            ];
        }
        return [0, 0, 0];
    }
    if (semver__default["default"].valid(features.bootloader_version)) {
        return (_e = features.bootloader_version) === null || _e === void 0 ? void 0 : _e.split('.');
    }
    return [0, 0, 0];
};
const getDeviceBoardloaderVersion = (features) => {
    var _a;
    if (semver__default["default"].valid(features === null || features === void 0 ? void 0 : features.chargerwallet_board_version)) {
        return (_a = features === null || features === void 0 ? void 0 : features.chargerwallet_board_version) === null || _a === void 0 ? void 0 : _a.split('.');
    }
    return [0, 0, 0];
};

const HD_HARDENED = 0x80000000;
const toHardened = (n) => (n | HD_HARDENED) >>> 0;
const fromHardened = (n) => (n & ~HD_HARDENED) >>> 0;
const PATH_NOT_VALID = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'Not a valid path');
const PATH_NEGATIVE_VALUES = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'Path cannot contain negative values');
const getHDPath = (path) => {
    const parts = path.toLowerCase().split('/');
    if (parts[0] !== 'm')
        throw PATH_NOT_VALID;
    return parts
        .filter((p) => p !== 'm' && p !== '')
        .map((p) => {
        let hardened = false;
        if (p.substr(p.length - 1) === "'") {
            hardened = true;
            p = p.substr(0, p.length - 1);
        }
        let n = parseInt(p);
        if (Number.isNaN(n)) {
            throw PATH_NOT_VALID;
        }
        else if (n < 0) {
            throw PATH_NEGATIVE_VALUES;
        }
        if (hardened) {
            n = toHardened(n);
        }
        return n;
    });
};
const isMultisigPath = (path) => Array.isArray(path) && path[0] === toHardened(48);
const isSegwitPath = (path) => Array.isArray(path) && path[0] === toHardened(49);
const isTaprootPath = (path) => Array.isArray(path) && (path[0] === toHardened(86) || path[0] === toHardened(10025));
const getScriptType = (path) => {
    if (!Array.isArray(path) || path.length < 1)
        return 'SPENDADDRESS';
    const p1 = fromHardened(path[0]);
    switch (p1) {
        case 48:
            return 'SPENDMULTISIG';
        case 49:
            return 'SPENDP2SHWITNESS';
        case 84:
            return 'SPENDWITNESS';
        case 86:
        case 10025:
            return 'SPENDTAPROOT';
        default:
            return 'SPENDADDRESS';
    }
};
const getOutputScriptType = (path) => {
    if (!Array.isArray(path) || path.length < 1)
        return 'PAYTOADDRESS';
    if (path[0] === 49) {
        return 'PAYTOP2SHWITNESS';
    }
    const p = fromHardened(path[0]);
    switch (p) {
        case 48:
            return 'PAYTOMULTISIG';
        case 49:
            return 'PAYTOP2SHWITNESS';
        case 84:
            return 'PAYTOWITNESS';
        case 86:
        case 10025:
            return 'PAYTOTAPROOT';
        default:
            return 'PAYTOADDRESS';
    }
};
const serializedPath = (path) => {
    const pathStr = path
        .map((p) => {
        if (p & HD_HARDENED) {
            return `${p & ~HD_HARDENED}'`;
        }
        return p;
    })
        .join('/');
    return `m/${pathStr}`;
};
const validatePath = (path, length = 0, base = false) => {
    let valid;
    if (typeof path === 'string') {
        valid = getHDPath(path);
    }
    else if (Array.isArray(path)) {
        valid = path.map((p) => {
            const n = parseInt(p);
            if (Number.isNaN(n)) {
                throw PATH_NOT_VALID;
            }
            else if (n < 0) {
                throw PATH_NEGATIVE_VALUES;
            }
            return n;
        });
    }
    else {
        valid = undefined;
    }
    if (!valid)
        throw PATH_NOT_VALID;
    if (length > 0 && valid.length < length)
        throw PATH_NOT_VALID;
    return base ? valid.splice(0, 3) : valid;
};

var nested$1 = {
	AlephiumGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			include_public_key: {
				type: "bool",
				id: 3
			},
			target_group: {
				type: "uint32",
				id: 4
			}
		}
	},
	AlephiumAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			},
			public_key: {
				type: "bytes",
				id: 2
			},
			derived_path: {
				rule: "repeated",
				type: "uint32",
				id: 3,
				options: {
					packed: false
				}
			}
		}
	},
	AlephiumSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			data_initial_chunk: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			data_length: {
				type: "uint32",
				id: 3
			}
		}
	},
	AlephiumSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			address: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	AlephiumTxRequest: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			public_key: {
				type: "bytes",
				id: 2
			},
			signature: {
				type: "bytes",
				id: 3
			}
		}
	},
	AlephiumTxAck: {
		fields: {
			data_chunk: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	AlephiumBytecodeRequest: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			public_key: {
				type: "bytes",
				id: 2
			},
			signature: {
				type: "bytes",
				id: 3
			}
		}
	},
	AlephiumBytecodeAck: {
		fields: {
			bytecode_data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	AlephiumSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				type: "bytes",
				id: 2
			},
			message_type: {
				type: "bytes",
				id: 3
			}
		}
	},
	AlephiumMessageSignature: {
		fields: {
			signature: {
				type: "bytes",
				id: 1
			},
			address: {
				type: "string",
				id: 2
			}
		}
	},
	AlgorandGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 3
			}
		}
	},
	AlgorandAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	AlgorandSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	AlgorandSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	AptosGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	AptosAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	AptosSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	AptosSignedTx: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	AptosSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			payload: {
				rule: "required",
				type: "AptosMessagePayload",
				id: 2
			}
		},
		nested: {
			AptosMessagePayload: {
				fields: {
					address: {
						type: "string",
						id: 2
					},
					chain_id: {
						type: "string",
						id: 3
					},
					application: {
						type: "string",
						id: 4
					},
					nonce: {
						rule: "required",
						type: "string",
						id: 5
					},
					message: {
						rule: "required",
						type: "string",
						id: 6
					}
				}
			}
		}
	},
	AptosMessageSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			address: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	BinanceGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	BinanceAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	BinanceGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	BinancePublicKey: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BinanceSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			msg_count: {
				type: "uint32",
				id: 2
			},
			account_number: {
				type: "sint64",
				id: 3
			},
			chain_id: {
				type: "string",
				id: 4
			},
			memo: {
				type: "string",
				id: 5
			},
			sequence: {
				type: "sint64",
				id: 6
			},
			source: {
				type: "sint64",
				id: 7
			}
		}
	},
	BinanceTxRequest: {
		fields: {
		}
	},
	BinanceTransferMsg: {
		fields: {
			inputs: {
				rule: "repeated",
				type: "BinanceInputOutput",
				id: 1
			},
			outputs: {
				rule: "repeated",
				type: "BinanceInputOutput",
				id: 2
			}
		},
		nested: {
			BinanceInputOutput: {
				fields: {
					address: {
						type: "string",
						id: 1
					},
					coins: {
						rule: "repeated",
						type: "BinanceCoin",
						id: 2
					}
				}
			},
			BinanceCoin: {
				fields: {
					amount: {
						type: "sint64",
						id: 1
					},
					denom: {
						type: "string",
						id: 2
					}
				}
			}
		}
	},
	BinanceOrderMsg: {
		fields: {
			id: {
				type: "string",
				id: 1
			},
			ordertype: {
				type: "BinanceOrderType",
				id: 2
			},
			price: {
				type: "sint64",
				id: 3
			},
			quantity: {
				type: "sint64",
				id: 4
			},
			sender: {
				type: "string",
				id: 5
			},
			side: {
				type: "BinanceOrderSide",
				id: 6
			},
			symbol: {
				type: "string",
				id: 7
			},
			timeinforce: {
				type: "BinanceTimeInForce",
				id: 8
			}
		},
		nested: {
			BinanceOrderType: {
				values: {
					OT_UNKNOWN: 0,
					MARKET: 1,
					LIMIT: 2,
					OT_RESERVED: 3
				}
			},
			BinanceOrderSide: {
				values: {
					SIDE_UNKNOWN: 0,
					BUY: 1,
					SELL: 2
				}
			},
			BinanceTimeInForce: {
				values: {
					TIF_UNKNOWN: 0,
					GTE: 1,
					TIF_RESERVED: 2,
					IOC: 3
				}
			}
		}
	},
	BinanceCancelMsg: {
		fields: {
			refid: {
				type: "string",
				id: 1
			},
			sender: {
				type: "string",
				id: 2
			},
			symbol: {
				type: "string",
				id: 3
			}
		}
	},
	BinanceSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	InputScriptType: {
		values: {
			SPENDADDRESS: 0,
			SPENDMULTISIG: 1,
			EXTERNAL: 2,
			SPENDWITNESS: 3,
			SPENDP2SHWITNESS: 4,
			SPENDTAPROOT: 5
		}
	},
	OutputScriptType: {
		values: {
			PAYTOADDRESS: 0,
			PAYTOSCRIPTHASH: 1,
			PAYTOMULTISIG: 2,
			PAYTOOPRETURN: 3,
			PAYTOWITNESS: 4,
			PAYTOP2SHWITNESS: 5,
			PAYTOTAPROOT: 6
		}
	},
	DecredStakingSpendType: {
		values: {
			SSGen: 0,
			SSRTX: 1
		}
	},
	AmountUnit: {
		values: {
			BITCOIN: 0,
			MILLIBITCOIN: 1,
			MICROBITCOIN: 2,
			SATOSHI: 3
		}
	},
	MultisigRedeemScriptType: {
		fields: {
			pubkeys: {
				rule: "repeated",
				type: "HDNodePathType",
				id: 1
			},
			signatures: {
				rule: "repeated",
				type: "bytes",
				id: 2
			},
			m: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			nodes: {
				rule: "repeated",
				type: "HDNodeType",
				id: 4
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 5,
				options: {
					packed: false
				}
			}
		},
		nested: {
			HDNodePathType: {
				fields: {
					node: {
						rule: "required",
						type: "HDNodeType",
						id: 1
					},
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 2,
						options: {
							packed: false
						}
					}
				}
			}
		}
	},
	GetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			ecdsa_curve_name: {
				type: "string",
				id: 2
			},
			show_display: {
				type: "bool",
				id: 3
			},
			coin_name: {
				type: "string",
				id: 4,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 5,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			ignore_xpub_magic: {
				type: "bool",
				id: 6
			}
		}
	},
	PublicKey: {
		fields: {
			node: {
				rule: "required",
				type: "HDNodeType",
				id: 1
			},
			xpub: {
				rule: "required",
				type: "string",
				id: 2
			},
			root_fingerprint: {
				type: "uint32",
				id: 3
			}
		}
	},
	GetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			coin_name: {
				type: "string",
				id: 2,
				options: {
					"default": "Bitcoin"
				}
			},
			show_display: {
				type: "bool",
				id: 3
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 4
			},
			script_type: {
				type: "InputScriptType",
				id: 5,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			ignore_xpub_magic: {
				type: "bool",
				id: 6
			}
		}
	},
	Address: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	GetOwnershipId: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			coin_name: {
				type: "string",
				id: 2,
				options: {
					"default": "Bitcoin"
				}
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 3
			},
			script_type: {
				type: "InputScriptType",
				id: 4,
				options: {
					"default": "SPENDADDRESS"
				}
			}
		}
	},
	OwnershipId: {
		fields: {
			ownership_id: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	SignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			coin_name: {
				type: "string",
				id: 3,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 4,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			no_script_type: {
				type: "bool",
				id: 5
			},
			is_bip322_simple: {
				type: "bool",
				id: 10,
				options: {
					"default": false
				}
			}
		}
	},
	MessageSignature: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	VerifyMessage: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			coin_name: {
				type: "string",
				id: 4,
				options: {
					"default": "Bitcoin"
				}
			}
		}
	},
	SignTx: {
		fields: {
			outputs_count: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			inputs_count: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			coin_name: {
				type: "string",
				id: 3,
				options: {
					"default": "Bitcoin"
				}
			},
			version: {
				type: "uint32",
				id: 4,
				options: {
					"default": 1
				}
			},
			lock_time: {
				type: "uint32",
				id: 5,
				options: {
					"default": 0
				}
			},
			expiry: {
				type: "uint32",
				id: 6
			},
			overwintered: {
				type: "bool",
				id: 7,
				options: {
					deprecated: true
				}
			},
			version_group_id: {
				type: "uint32",
				id: 8
			},
			timestamp: {
				type: "uint32",
				id: 9
			},
			branch_id: {
				type: "uint32",
				id: 10
			},
			amount_unit: {
				type: "AmountUnit",
				id: 11,
				options: {
					"default": "BITCOIN"
				}
			},
			decred_staking_ticket: {
				type: "bool",
				id: 12,
				options: {
					"default": false
				}
			}
		}
	},
	TxRequest: {
		fields: {
			request_type: {
				type: "RequestType",
				id: 1
			},
			details: {
				type: "TxRequestDetailsType",
				id: 2
			},
			serialized: {
				type: "TxRequestSerializedType",
				id: 3
			}
		},
		nested: {
			RequestType: {
				values: {
					TXINPUT: 0,
					TXOUTPUT: 1,
					TXMETA: 2,
					TXFINISHED: 3,
					TXEXTRADATA: 4,
					TXORIGINPUT: 5,
					TXORIGOUTPUT: 6
				}
			},
			TxRequestDetailsType: {
				fields: {
					request_index: {
						type: "uint32",
						id: 1
					},
					tx_hash: {
						type: "bytes",
						id: 2
					},
					extra_data_len: {
						type: "uint32",
						id: 3
					},
					extra_data_offset: {
						type: "uint32",
						id: 4
					}
				}
			},
			TxRequestSerializedType: {
				fields: {
					signature_index: {
						type: "uint32",
						id: 1
					},
					signature: {
						type: "bytes",
						id: 2
					},
					serialized_tx: {
						type: "bytes",
						id: 3
					}
				}
			}
		}
	},
	TxAck: {
		options: {
			deprecated: true
		},
		fields: {
			tx: {
				type: "TransactionType",
				id: 1
			}
		},
		nested: {
			TransactionType: {
				fields: {
					version: {
						type: "uint32",
						id: 1
					},
					inputs: {
						rule: "repeated",
						type: "TxInputType",
						id: 2
					},
					bin_outputs: {
						rule: "repeated",
						type: "TxOutputBinType",
						id: 3
					},
					lock_time: {
						type: "uint32",
						id: 4
					},
					outputs: {
						rule: "repeated",
						type: "TxOutputType",
						id: 5
					},
					inputs_cnt: {
						type: "uint32",
						id: 6
					},
					outputs_cnt: {
						type: "uint32",
						id: 7
					},
					extra_data: {
						type: "bytes",
						id: 8
					},
					extra_data_len: {
						type: "uint32",
						id: 9
					},
					expiry: {
						type: "uint32",
						id: 10
					},
					overwintered: {
						type: "bool",
						id: 11,
						options: {
							deprecated: true
						}
					},
					version_group_id: {
						type: "uint32",
						id: 12
					},
					timestamp: {
						type: "uint32",
						id: 13
					},
					branch_id: {
						type: "uint32",
						id: 14
					}
				},
				nested: {
					TxInputType: {
						fields: {
							address_n: {
								rule: "repeated",
								type: "uint32",
								id: 1,
								options: {
									packed: false
								}
							},
							prev_hash: {
								rule: "required",
								type: "bytes",
								id: 2
							},
							prev_index: {
								rule: "required",
								type: "uint32",
								id: 3
							},
							script_sig: {
								type: "bytes",
								id: 4
							},
							sequence: {
								type: "uint32",
								id: 5,
								options: {
									"default": 4294967295
								}
							},
							script_type: {
								type: "InputScriptType",
								id: 6,
								options: {
									"default": "SPENDADDRESS"
								}
							},
							multisig: {
								type: "MultisigRedeemScriptType",
								id: 7
							},
							amount: {
								type: "uint64",
								id: 8
							},
							decred_tree: {
								type: "uint32",
								id: 9
							},
							witness: {
								type: "bytes",
								id: 13
							},
							ownership_proof: {
								type: "bytes",
								id: 14
							},
							commitment_data: {
								type: "bytes",
								id: 15
							},
							orig_hash: {
								type: "bytes",
								id: 16
							},
							orig_index: {
								type: "uint32",
								id: 17
							},
							decred_staking_spend: {
								type: "DecredStakingSpendType",
								id: 18
							},
							script_pubkey: {
								type: "bytes",
								id: 19
							}
						}
					},
					TxOutputBinType: {
						fields: {
							amount: {
								rule: "required",
								type: "uint64",
								id: 1
							},
							script_pubkey: {
								rule: "required",
								type: "bytes",
								id: 2
							},
							decred_script_version: {
								type: "uint32",
								id: 3
							}
						}
					},
					TxOutputType: {
						fields: {
							address: {
								type: "string",
								id: 1
							},
							address_n: {
								rule: "repeated",
								type: "uint32",
								id: 2,
								options: {
									packed: false
								}
							},
							amount: {
								rule: "required",
								type: "uint64",
								id: 3
							},
							script_type: {
								type: "OutputScriptType",
								id: 4,
								options: {
									"default": "PAYTOADDRESS"
								}
							},
							multisig: {
								type: "MultisigRedeemScriptType",
								id: 5
							},
							op_return_data: {
								type: "bytes",
								id: 6
							},
							orig_hash: {
								type: "bytes",
								id: 10
							},
							orig_index: {
								type: "uint32",
								id: 11
							}
						}
					}
				}
			}
		}
	},
	TxInput: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			script_sig: {
				type: "bytes",
				id: 4
			},
			sequence: {
				type: "uint32",
				id: 5,
				options: {
					"default": 4294967295
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 6,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 7
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 8
			},
			decred_tree: {
				type: "uint32",
				id: 9
			},
			witness: {
				type: "bytes",
				id: 13
			},
			ownership_proof: {
				type: "bytes",
				id: 14
			},
			commitment_data: {
				type: "bytes",
				id: 15
			},
			orig_hash: {
				type: "bytes",
				id: 16
			},
			orig_index: {
				type: "uint32",
				id: 17
			},
			decred_staking_spend: {
				type: "DecredStakingSpendType",
				id: 18
			},
			script_pubkey: {
				type: "bytes",
				id: 19
			}
		}
	},
	TxOutput: {
		fields: {
			address: {
				type: "string",
				id: 1
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 3
			},
			script_type: {
				type: "OutputScriptType",
				id: 4,
				options: {
					"default": "PAYTOADDRESS"
				}
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 5
			},
			op_return_data: {
				type: "bytes",
				id: 6
			},
			orig_hash: {
				type: "bytes",
				id: 10
			},
			orig_index: {
				type: "uint32",
				id: 11
			}
		}
	},
	PrevTx: {
		fields: {
			version: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			lock_time: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			inputs_count: {
				rule: "required",
				type: "uint32",
				id: 6
			},
			outputs_count: {
				rule: "required",
				type: "uint32",
				id: 7
			},
			extra_data_len: {
				type: "uint32",
				id: 9,
				options: {
					"default": 0
				}
			},
			expiry: {
				type: "uint32",
				id: 10
			},
			version_group_id: {
				type: "uint32",
				id: 12
			},
			timestamp: {
				type: "uint32",
				id: 13
			},
			branch_id: {
				type: "uint32",
				id: 14
			}
		}
	},
	PrevInput: {
		fields: {
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			script_sig: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			sequence: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			decred_tree: {
				type: "uint32",
				id: 9
			}
		}
	},
	PrevOutput: {
		fields: {
			amount: {
				rule: "required",
				type: "uint64",
				id: 1
			},
			script_pubkey: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			decred_script_version: {
				type: "uint32",
				id: 3
			}
		}
	},
	TxAckInput: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckInputWrapper",
				id: 1
			}
		},
		nested: {
			TxAckInputWrapper: {
				fields: {
					input: {
						rule: "required",
						type: "TxInput",
						id: 2
					}
				}
			}
		}
	},
	TxAckOutput: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckOutputWrapper",
				id: 1
			}
		},
		nested: {
			TxAckOutputWrapper: {
				fields: {
					output: {
						rule: "required",
						type: "TxOutput",
						id: 5
					}
				}
			}
		}
	},
	TxAckPrevMeta: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "PrevTx",
				id: 1
			}
		}
	},
	TxAckPrevInput: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckPrevInputWrapper",
				id: 1
			}
		},
		nested: {
			TxAckPrevInputWrapper: {
				fields: {
					input: {
						rule: "required",
						type: "PrevInput",
						id: 2
					}
				}
			}
		}
	},
	TxAckPrevOutput: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckPrevOutputWrapper",
				id: 1
			}
		},
		nested: {
			TxAckPrevOutputWrapper: {
				fields: {
					output: {
						rule: "required",
						type: "PrevOutput",
						id: 3
					}
				}
			}
		}
	},
	TxAckPrevExtraData: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckPrevExtraDataWrapper",
				id: 1
			}
		},
		nested: {
			TxAckPrevExtraDataWrapper: {
				fields: {
					extra_data_chunk: {
						rule: "required",
						type: "bytes",
						id: 8
					}
				}
			}
		}
	},
	GetOwnershipProof: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			coin_name: {
				type: "string",
				id: 2,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 3,
				options: {
					"default": "SPENDWITNESS"
				}
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 4
			},
			user_confirmation: {
				type: "bool",
				id: 5,
				options: {
					"default": false
				}
			},
			ownership_ids: {
				rule: "repeated",
				type: "bytes",
				id: 6
			},
			commitment_data: {
				type: "bytes",
				id: 7,
				options: {
					"default": ""
				}
			}
		}
	},
	OwnershipProof: {
		fields: {
			ownership_proof: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	AuthorizeCoinJoin: {
		options: {
			"(unstable)": true
		},
		fields: {
			coordinator: {
				rule: "required",
				type: "string",
				id: 1
			},
			max_total_fee: {
				rule: "required",
				type: "uint64",
				id: 2
			},
			fee_per_anonymity: {
				type: "uint32",
				id: 3,
				options: {
					"default": 0
				}
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 4,
				options: {
					packed: false
				}
			},
			coin_name: {
				type: "string",
				id: 5,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 6,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			amount_unit: {
				type: "AmountUnit",
				id: 11,
				options: {
					"default": "BITCOIN"
				}
			}
		}
	},
	GetPublicKeyMultiple: {
		fields: {
			addresses: {
				rule: "repeated",
				type: "BIP32Address",
				id: 1
			},
			ecdsa_curve_name: {
				type: "string",
				id: 2
			},
			show_display: {
				type: "bool",
				id: 3
			},
			coin_name: {
				type: "string",
				id: 4,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 5,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			ignore_xpub_magic: {
				type: "bool",
				id: 6
			}
		},
		nested: {
			BIP32Address: {
				fields: {
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 1,
						options: {
							packed: false
						}
					}
				}
			}
		}
	},
	PublicKeyMultiple: {
		fields: {
			xpubs: {
				rule: "repeated",
				type: "string",
				id: 1
			}
		}
	},
	SignPsbt: {
		fields: {
			psbt: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			coin_name: {
				type: "string",
				id: 2,
				options: {
					"default": "Bitcoin"
				}
			}
		}
	},
	SignedPsbt: {
		fields: {
			psbt: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	FirmwareErase: {
		fields: {
			length: {
				type: "uint32",
				id: 1
			}
		}
	},
	FirmwareRequest: {
		fields: {
			offset: {
				type: "uint32",
				id: 1
			},
			length: {
				type: "uint32",
				id: 2
			}
		}
	},
	FirmwareUpload: {
		fields: {
			payload: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			hash: {
				type: "bytes",
				id: 2
			}
		}
	},
	SelfTest: {
		fields: {
			payload: {
				type: "bytes",
				id: 1
			}
		}
	},
	FirmwareErase_ex: {
		fields: {
			length: {
				type: "uint32",
				id: 1
			}
		}
	},
	RebootType: {
		values: {
			Normal: 0,
			Boardloader: 1,
			BootLoader: 2
		}
	},
	Reboot: {
		fields: {
			reboot_type: {
				rule: "required",
				type: "RebootType",
				id: 1
			}
		}
	},
	FirmwareUpdateEmmc: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			},
			reboot_on_success: {
				type: "bool",
				id: 2
			}
		}
	},
	CardanoDerivationType: {
		values: {
			LEDGER: 0,
			ICARUS: 1,
			ICARUS_TREZOR: 2
		}
	},
	CardanoAddressType: {
		values: {
			BASE: 0,
			BASE_SCRIPT_KEY: 1,
			BASE_KEY_SCRIPT: 2,
			BASE_SCRIPT_SCRIPT: 3,
			POINTER: 4,
			POINTER_SCRIPT: 5,
			ENTERPRISE: 6,
			ENTERPRISE_SCRIPT: 7,
			BYRON: 8,
			REWARD: 14,
			REWARD_SCRIPT: 15
		}
	},
	CardanoNativeScriptType: {
		values: {
			PUB_KEY: 0,
			ALL: 1,
			ANY: 2,
			N_OF_K: 3,
			INVALID_BEFORE: 4,
			INVALID_HEREAFTER: 5
		}
	},
	CardanoNativeScriptHashDisplayFormat: {
		values: {
			HIDE: 0,
			BECH32: 1,
			POLICY_ID: 2
		}
	},
	CardanoTxOutputSerializationFormat: {
		values: {
			ARRAY_LEGACY: 0,
			MAP_BABBAGE: 1
		}
	},
	CardanoCertificateType: {
		values: {
			STAKE_REGISTRATION: 0,
			STAKE_DEREGISTRATION: 1,
			STAKE_DELEGATION: 2,
			STAKE_POOL_REGISTRATION: 3
		}
	},
	CardanoPoolRelayType: {
		values: {
			SINGLE_HOST_IP: 0,
			SINGLE_HOST_NAME: 1,
			MULTIPLE_HOST_NAME: 2
		}
	},
	CardanoTxAuxiliaryDataSupplementType: {
		values: {
			NONE: 0,
			GOVERNANCE_REGISTRATION_SIGNATURE: 1
		}
	},
	CardanoGovernanceRegistrationFormat: {
		values: {
			CIP15: 0,
			CIP36: 1
		}
	},
	CardanoTxSigningMode: {
		values: {
			ORDINARY_TRANSACTION: 0,
			POOL_REGISTRATION_AS_OWNER: 1,
			MULTISIG_TRANSACTION: 2,
			PLUTUS_TRANSACTION: 3
		}
	},
	CardanoTxWitnessType: {
		values: {
			BYRON_WITNESS: 0,
			SHELLEY_WITNESS: 1
		}
	},
	CardanoBlockchainPointerType: {
		fields: {
			block_index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			tx_index: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			certificate_index: {
				rule: "required",
				type: "uint32",
				id: 3
			}
		}
	},
	CardanoNativeScript: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoNativeScriptType",
				id: 1
			},
			scripts: {
				rule: "repeated",
				type: "CardanoNativeScript",
				id: 2
			},
			key_hash: {
				type: "bytes",
				id: 3
			},
			key_path: {
				rule: "repeated",
				type: "uint32",
				id: 4,
				options: {
					packed: false
				}
			},
			required_signatures_count: {
				type: "uint32",
				id: 5
			},
			invalid_before: {
				type: "uint64",
				id: 6
			},
			invalid_hereafter: {
				type: "uint64",
				id: 7
			}
		}
	},
	CardanoGetNativeScriptHash: {
		fields: {
			script: {
				rule: "required",
				type: "CardanoNativeScript",
				id: 1
			},
			display_format: {
				rule: "required",
				type: "CardanoNativeScriptHashDisplayFormat",
				id: 2
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 3
			}
		}
	},
	CardanoNativeScriptHash: {
		fields: {
			script_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CardanoAddressParametersType: {
		fields: {
			address_type: {
				rule: "required",
				type: "CardanoAddressType",
				id: 1
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			address_n_staking: {
				rule: "repeated",
				type: "uint32",
				id: 3,
				options: {
					packed: false
				}
			},
			staking_key_hash: {
				type: "bytes",
				id: 4
			},
			certificate_pointer: {
				type: "CardanoBlockchainPointerType",
				id: 5
			},
			script_payment_hash: {
				type: "bytes",
				id: 6
			},
			script_staking_hash: {
				type: "bytes",
				id: 7
			}
		}
	},
	CardanoGetAddress: {
		fields: {
			show_display: {
				type: "bool",
				id: 2,
				options: {
					"default": false
				}
			},
			protocol_magic: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			network_id: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			address_parameters: {
				rule: "required",
				type: "CardanoAddressParametersType",
				id: 5
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 6
			}
		}
	},
	CardanoAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	CardanoGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 3
			}
		}
	},
	CardanoPublicKey: {
		fields: {
			xpub: {
				rule: "required",
				type: "string",
				id: 1
			},
			node: {
				rule: "required",
				type: "HDNodeType",
				id: 2
			}
		}
	},
	CardanoSignTxInit: {
		fields: {
			signing_mode: {
				rule: "required",
				type: "CardanoTxSigningMode",
				id: 1
			},
			protocol_magic: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			network_id: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			inputs_count: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			outputs_count: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			fee: {
				rule: "required",
				type: "uint64",
				id: 6
			},
			ttl: {
				type: "uint64",
				id: 7
			},
			certificates_count: {
				rule: "required",
				type: "uint32",
				id: 8
			},
			withdrawals_count: {
				rule: "required",
				type: "uint32",
				id: 9
			},
			has_auxiliary_data: {
				rule: "required",
				type: "bool",
				id: 10
			},
			validity_interval_start: {
				type: "uint64",
				id: 11
			},
			witness_requests_count: {
				rule: "required",
				type: "uint32",
				id: 12
			},
			minting_asset_groups_count: {
				rule: "required",
				type: "uint32",
				id: 13
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 14
			},
			include_network_id: {
				type: "bool",
				id: 15,
				options: {
					"default": false
				}
			},
			script_data_hash: {
				type: "bytes",
				id: 16
			},
			collateral_inputs_count: {
				rule: "required",
				type: "uint32",
				id: 17
			},
			required_signers_count: {
				rule: "required",
				type: "uint32",
				id: 18
			},
			has_collateral_return: {
				type: "bool",
				id: 19,
				options: {
					"default": false
				}
			},
			total_collateral: {
				type: "uint64",
				id: 20
			},
			reference_inputs_count: {
				type: "uint32",
				id: 21,
				options: {
					"default": 0
				}
			}
		}
	},
	CardanoTxInput: {
		fields: {
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoTxOutput: {
		fields: {
			address: {
				type: "string",
				id: 1
			},
			address_parameters: {
				type: "CardanoAddressParametersType",
				id: 2
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 3
			},
			asset_groups_count: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			datum_hash: {
				type: "bytes",
				id: 5
			},
			format: {
				type: "CardanoTxOutputSerializationFormat",
				id: 6,
				options: {
					"default": "ARRAY_LEGACY"
				}
			},
			inline_datum_size: {
				type: "uint32",
				id: 7,
				options: {
					"default": 0
				}
			},
			reference_script_size: {
				type: "uint32",
				id: 8,
				options: {
					"default": 0
				}
			}
		}
	},
	CardanoAssetGroup: {
		fields: {
			policy_id: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			tokens_count: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoToken: {
		fields: {
			asset_name_bytes: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			amount: {
				type: "uint64",
				id: 2
			},
			mint_amount: {
				type: "sint64",
				id: 3
			}
		}
	},
	CardanoTxInlineDatumChunk: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CardanoTxReferenceScriptChunk: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CardanoPoolOwner: {
		fields: {
			staking_key_path: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			staking_key_hash: {
				type: "bytes",
				id: 2
			}
		}
	},
	CardanoPoolRelayParameters: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoPoolRelayType",
				id: 1
			},
			ipv4_address: {
				type: "bytes",
				id: 2
			},
			ipv6_address: {
				type: "bytes",
				id: 3
			},
			host_name: {
				type: "string",
				id: 4
			},
			port: {
				type: "uint32",
				id: 5
			}
		}
	},
	CardanoPoolMetadataType: {
		fields: {
			url: {
				rule: "required",
				type: "string",
				id: 1
			},
			hash: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	CardanoPoolParametersType: {
		fields: {
			pool_id: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			vrf_key_hash: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			pledge: {
				rule: "required",
				type: "uint64",
				id: 3
			},
			cost: {
				rule: "required",
				type: "uint64",
				id: 4
			},
			margin_numerator: {
				rule: "required",
				type: "uint64",
				id: 5
			},
			margin_denominator: {
				rule: "required",
				type: "uint64",
				id: 6
			},
			reward_account: {
				rule: "required",
				type: "string",
				id: 7
			},
			metadata: {
				type: "CardanoPoolMetadataType",
				id: 10
			},
			owners_count: {
				rule: "required",
				type: "uint32",
				id: 11
			},
			relays_count: {
				rule: "required",
				type: "uint32",
				id: 12
			}
		}
	},
	CardanoTxCertificate: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoCertificateType",
				id: 1
			},
			path: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			pool: {
				type: "bytes",
				id: 3
			},
			pool_parameters: {
				type: "CardanoPoolParametersType",
				id: 4
			},
			script_hash: {
				type: "bytes",
				id: 5
			},
			key_hash: {
				type: "bytes",
				id: 6
			}
		}
	},
	CardanoTxWithdrawal: {
		fields: {
			path: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 2
			},
			script_hash: {
				type: "bytes",
				id: 3
			},
			key_hash: {
				type: "bytes",
				id: 4
			}
		}
	},
	CardanoGovernanceRegistrationDelegation: {
		fields: {
			voting_public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			weight: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoGovernanceRegistrationParametersType: {
		fields: {
			voting_public_key: {
				type: "bytes",
				id: 1
			},
			staking_path: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			reward_address_parameters: {
				rule: "required",
				type: "CardanoAddressParametersType",
				id: 3
			},
			nonce: {
				rule: "required",
				type: "uint64",
				id: 4
			},
			format: {
				type: "CardanoGovernanceRegistrationFormat",
				id: 5,
				options: {
					"default": "CIP15"
				}
			},
			delegations: {
				rule: "repeated",
				type: "CardanoGovernanceRegistrationDelegation",
				id: 6
			},
			voting_purpose: {
				type: "uint64",
				id: 7
			}
		}
	},
	CardanoTxAuxiliaryData: {
		fields: {
			governance_registration_parameters: {
				type: "CardanoGovernanceRegistrationParametersType",
				id: 1
			},
			hash: {
				type: "bytes",
				id: 2
			}
		}
	},
	CardanoTxMint: {
		fields: {
			asset_groups_count: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	CardanoTxCollateralInput: {
		fields: {
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoTxRequiredSigner: {
		fields: {
			key_hash: {
				type: "bytes",
				id: 1
			},
			key_path: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			}
		}
	},
	CardanoTxReferenceInput: {
		fields: {
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoTxItemAck: {
		fields: {
		}
	},
	CardanoTxAuxiliaryDataSupplement: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoTxAuxiliaryDataSupplementType",
				id: 1
			},
			auxiliary_data_hash: {
				type: "bytes",
				id: 2
			},
			governance_signature: {
				type: "bytes",
				id: 3
			}
		}
	},
	CardanoTxWitnessRequest: {
		fields: {
			path: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			}
		}
	},
	CardanoTxWitnessResponse: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoTxWitnessType",
				id: 1
			},
			pub_key: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			chain_code: {
				type: "bytes",
				id: 4
			}
		}
	},
	CardanoTxHostAck: {
		fields: {
		}
	},
	CardanoTxBodyHash: {
		fields: {
			tx_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CardanoSignTxFinished: {
		fields: {
		}
	},
	CardanoSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 3
			},
			network_id: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			address_type: {
				type: "CardanoAddressType",
				id: 5
			}
		}
	},
	CardanoMessageSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			key: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	Success: {
		fields: {
			message: {
				type: "string",
				id: 1,
				options: {
					"default": ""
				}
			}
		}
	},
	Failure: {
		fields: {
			code: {
				type: "FailureType",
				id: 1
			},
			message: {
				type: "string",
				id: 2
			}
		},
		nested: {
			FailureType: {
				values: {
					Failure_UnexpectedMessage: 1,
					Failure_ButtonExpected: 2,
					Failure_DataError: 3,
					Failure_ActionCancelled: 4,
					Failure_PinExpected: 5,
					Failure_PinCancelled: 6,
					Failure_PinInvalid: 7,
					Failure_InvalidSignature: 8,
					Failure_ProcessError: 9,
					Failure_NotEnoughFunds: 10,
					Failure_NotInitialized: 11,
					Failure_PinMismatch: 12,
					Failure_WipeCodeMismatch: 13,
					Failure_InvalidSession: 14,
					Failure_FirmwareError: 99
				}
			}
		}
	},
	ButtonRequest: {
		fields: {
			code: {
				type: "ButtonRequestType",
				id: 1
			},
			pages: {
				type: "uint32",
				id: 2
			}
		},
		nested: {
			ButtonRequestType: {
				values: {
					ButtonRequest_Other: 1,
					ButtonRequest_FeeOverThreshold: 2,
					ButtonRequest_ConfirmOutput: 3,
					ButtonRequest_ResetDevice: 4,
					ButtonRequest_ConfirmWord: 5,
					ButtonRequest_WipeDevice: 6,
					ButtonRequest_ProtectCall: 7,
					ButtonRequest_SignTx: 8,
					ButtonRequest_FirmwareCheck: 9,
					ButtonRequest_Address: 10,
					ButtonRequest_PublicKey: 11,
					ButtonRequest_MnemonicWordCount: 12,
					ButtonRequest_MnemonicInput: 13,
					_Deprecated_ButtonRequest_PassphraseType: 14,
					ButtonRequest_UnknownDerivationPath: 15,
					ButtonRequest_RecoveryHomepage: 16,
					ButtonRequest_Success: 17,
					ButtonRequest_Warning: 18,
					ButtonRequest_PassphraseEntry: 19,
					ButtonRequest_PinEntry: 20
				}
			}
		}
	},
	ButtonAck: {
		fields: {
		}
	},
	PinMatrixRequest: {
		fields: {
			type: {
				type: "PinMatrixRequestType",
				id: 1
			}
		},
		nested: {
			PinMatrixRequestType: {
				values: {
					PinMatrixRequestType_Current: 1,
					PinMatrixRequestType_NewFirst: 2,
					PinMatrixRequestType_NewSecond: 3,
					PinMatrixRequestType_WipeCodeFirst: 4,
					PinMatrixRequestType_WipeCodeSecond: 5,
					PinMatrixRequestType_BackupFirst: 6,
					PinMatrixRequestType_BackupSecond: 7
				}
			}
		}
	},
	PinMatrixAck: {
		fields: {
			pin: {
				rule: "required",
				type: "string",
				id: 1
			},
			new_pin: {
				type: "string",
				id: 2
			}
		}
	},
	PassphraseRequest: {
		fields: {
			_on_device: {
				type: "bool",
				id: 1,
				options: {
					deprecated: true
				}
			}
		}
	},
	PassphraseAck: {
		fields: {
			passphrase: {
				type: "string",
				id: 1
			},
			_state: {
				type: "bytes",
				id: 2,
				options: {
					deprecated: true
				}
			},
			on_device: {
				type: "bool",
				id: 3
			}
		}
	},
	Deprecated_PassphraseStateRequest: {
		options: {
			deprecated: true
		},
		fields: {
			state: {
				type: "bytes",
				id: 1
			}
		}
	},
	Deprecated_PassphraseStateAck: {
		options: {
			deprecated: true
		},
		fields: {
		}
	},
	HDNodeType: {
		fields: {
			depth: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			fingerprint: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			child_num: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			chain_code: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			private_key: {
				type: "bytes",
				id: 5
			},
			public_key: {
				rule: "required",
				type: "bytes",
				id: 6
			}
		}
	},
	BixinPinInputOnDevice: {
		fields: {
		}
	},
	ConfluxGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			chain_id: {
				type: "uint32",
				id: 3
			}
		}
	},
	ConfluxAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	ConfluxSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			nonce: {
				type: "bytes",
				id: 2
			},
			gas_price: {
				type: "bytes",
				id: 3
			},
			gas_limit: {
				type: "bytes",
				id: 4
			},
			to: {
				type: "string",
				id: 5
			},
			value: {
				type: "bytes",
				id: 6
			},
			epoch_height: {
				type: "bytes",
				id: 7
			},
			storage_limit: {
				type: "bytes",
				id: 8
			},
			data_initial_chunk: {
				type: "bytes",
				id: 9
			},
			data_length: {
				type: "uint32",
				id: 10
			},
			chain_id: {
				type: "uint32",
				id: 11
			}
		}
	},
	ConfluxTxRequest: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			signature_v: {
				type: "uint32",
				id: 2
			},
			signature_r: {
				type: "bytes",
				id: 3
			},
			signature_s: {
				type: "bytes",
				id: 4
			}
		}
	},
	ConfluxTxAck: {
		fields: {
			data_chunk: {
				type: "bytes",
				id: 1
			}
		}
	},
	ConfluxSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				type: "bytes",
				id: 2
			}
		}
	},
	ConfluxMessageSignature: {
		fields: {
			signature: {
				type: "bytes",
				id: 2
			},
			address: {
				type: "string",
				id: 3
			}
		}
	},
	ConfluxSignMessageCIP23: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			domain_hash: {
				type: "bytes",
				id: 2
			},
			message_hash: {
				type: "bytes",
				id: 3
			}
		}
	},
	CosmosGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			hrp: {
				type: "string",
				id: 2
			},
			show_display: {
				type: "bool",
				id: 3
			}
		}
	},
	CosmosAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	CosmosSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	CosmosSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CipherKeyValue: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			key: {
				rule: "required",
				type: "string",
				id: 2
			},
			value: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			encrypt: {
				type: "bool",
				id: 4
			},
			ask_on_encrypt: {
				type: "bool",
				id: 5
			},
			ask_on_decrypt: {
				type: "bool",
				id: 6
			},
			iv: {
				type: "bytes",
				id: 7
			}
		}
	},
	CipheredKeyValue: {
		fields: {
			value: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	IdentityType: {
		fields: {
			proto: {
				type: "string",
				id: 1
			},
			user: {
				type: "string",
				id: 2
			},
			host: {
				type: "string",
				id: 3
			},
			port: {
				type: "string",
				id: 4
			},
			path: {
				type: "string",
				id: 5
			},
			index: {
				type: "uint32",
				id: 6,
				options: {
					"default": 0
				}
			}
		}
	},
	SignIdentity: {
		fields: {
			identity: {
				rule: "required",
				type: "IdentityType",
				id: 1
			},
			challenge_hidden: {
				type: "bytes",
				id: 2,
				options: {
					"default": ""
				}
			},
			challenge_visual: {
				type: "string",
				id: 3,
				options: {
					"default": ""
				}
			},
			ecdsa_curve_name: {
				type: "string",
				id: 4
			}
		}
	},
	SignedIdentity: {
		fields: {
			address: {
				type: "string",
				id: 1
			},
			public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 3
			}
		}
	},
	GetECDHSessionKey: {
		fields: {
			identity: {
				rule: "required",
				type: "IdentityType",
				id: 1
			},
			peer_public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			ecdsa_curve_name: {
				type: "string",
				id: 3
			}
		}
	},
	ECDHSessionKey: {
		fields: {
			session_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			public_key: {
				type: "bytes",
				id: 2
			}
		}
	},
	CosiCommit: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			data: {
				type: "bytes",
				id: 2
			}
		}
	},
	CosiCommitment: {
		fields: {
			commitment: {
				type: "bytes",
				id: 1
			},
			pubkey: {
				type: "bytes",
				id: 2
			}
		}
	},
	CosiSign: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			data: {
				type: "bytes",
				id: 2
			},
			global_commitment: {
				type: "bytes",
				id: 3
			},
			global_pubkey: {
				type: "bytes",
				id: 4
			}
		}
	},
	CosiSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BatchGetPublickeys: {
		fields: {
			ecdsa_curve_name: {
				type: "string",
				id: 1,
				options: {
					"default": "ed25519"
				}
			},
			paths: {
				rule: "repeated",
				type: "Path",
				id: 2
			}
		},
		nested: {
			Path: {
				fields: {
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 1,
						options: {
							packed: false
						}
					}
				}
			}
		}
	},
	EcdsaPublicKeys: {
		fields: {
			public_keys: {
				rule: "repeated",
				type: "bytes",
				id: 1
			}
		}
	},
	DebugLinkDecision: {
		fields: {
			yes_no: {
				type: "bool",
				id: 1
			},
			swipe: {
				type: "DebugSwipeDirection",
				id: 2
			},
			input: {
				type: "string",
				id: 3
			},
			x: {
				type: "uint32",
				id: 4
			},
			y: {
				type: "uint32",
				id: 5
			},
			wait: {
				type: "bool",
				id: 6
			},
			hold_ms: {
				type: "uint32",
				id: 7
			}
		},
		nested: {
			DebugSwipeDirection: {
				values: {
					UP: 0,
					DOWN: 1,
					LEFT: 2,
					RIGHT: 3
				}
			}
		}
	},
	DebugLinkLayout: {
		fields: {
			lines: {
				rule: "repeated",
				type: "string",
				id: 1
			}
		}
	},
	DebugLinkReseedRandom: {
		fields: {
			value: {
				type: "uint32",
				id: 1
			}
		}
	},
	DebugLinkRecordScreen: {
		fields: {
			target_directory: {
				type: "string",
				id: 1
			}
		}
	},
	DebugLinkGetState: {
		fields: {
			wait_word_list: {
				type: "bool",
				id: 1
			},
			wait_word_pos: {
				type: "bool",
				id: 2
			},
			wait_layout: {
				type: "bool",
				id: 3
			}
		}
	},
	DebugLinkState: {
		fields: {
			layout: {
				type: "bytes",
				id: 1
			},
			pin: {
				type: "string",
				id: 2
			},
			matrix: {
				type: "string",
				id: 3
			},
			mnemonic_secret: {
				type: "bytes",
				id: 4
			},
			node: {
				type: "HDNodeType",
				id: 5
			},
			passphrase_protection: {
				type: "bool",
				id: 6
			},
			reset_word: {
				type: "string",
				id: 7
			},
			reset_entropy: {
				type: "bytes",
				id: 8
			},
			recovery_fake_word: {
				type: "string",
				id: 9
			},
			recovery_word_pos: {
				type: "uint32",
				id: 10
			},
			reset_word_pos: {
				type: "uint32",
				id: 11
			},
			mnemonic_type: {
				type: "BackupType",
				id: 12
			},
			layout_lines: {
				rule: "repeated",
				type: "string",
				id: 13
			}
		}
	},
	DebugLinkStop: {
		fields: {
		}
	},
	DebugLinkLog: {
		fields: {
			level: {
				type: "uint32",
				id: 1
			},
			bucket: {
				type: "string",
				id: 2
			},
			text: {
				type: "string",
				id: 3
			}
		}
	},
	DebugLinkMemoryRead: {
		fields: {
			address: {
				type: "uint32",
				id: 1
			},
			length: {
				type: "uint32",
				id: 2
			}
		}
	},
	DebugLinkMemory: {
		fields: {
			memory: {
				type: "bytes",
				id: 1
			}
		}
	},
	DebugLinkMemoryWrite: {
		fields: {
			address: {
				type: "uint32",
				id: 1
			},
			memory: {
				type: "bytes",
				id: 2
			},
			flash: {
				type: "bool",
				id: 3
			}
		}
	},
	DebugLinkFlashErase: {
		fields: {
			sector: {
				type: "uint32",
				id: 1
			}
		}
	},
	DebugLinkEraseSdCard: {
		fields: {
			format: {
				type: "bool",
				id: 1
			}
		}
	},
	DebugLinkWatchLayout: {
		fields: {
			watch: {
				type: "bool",
				id: 1
			}
		}
	},
	DnxGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	DnxAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	DnxSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			inputs_count: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			to_address: {
				rule: "required",
				type: "string",
				id: 3
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 4
			},
			fee: {
				rule: "required",
				type: "uint64",
				id: 5
			},
			payment_id: {
				type: "bytes",
				id: 6
			}
		}
	},
	DnxInputRequest: {
		fields: {
			request_index: {
				type: "uint32",
				id: 1
			},
			tx_key: {
				type: "DnxTxKey",
				id: 2
			},
			computed_key_image: {
				type: "DnxComputedKeyImage",
				id: 3
			}
		},
		nested: {
			DnxTxKey: {
				fields: {
					ephemeral_tx_sec_key: {
						type: "bytes",
						id: 1
					},
					ephemeral_tx_pub_key: {
						type: "bytes",
						id: 2
					}
				}
			},
			DnxComputedKeyImage: {
				fields: {
					key_image: {
						type: "bytes",
						id: 1
					}
				}
			}
		}
	},
	DnxInputAck: {
		fields: {
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			global_index: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			tx_pubkey: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			prev_out_pubkey: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 5
			}
		}
	},
	DnxRTSigsRequest: {
		fields: {
		}
	},
	DnxSignedTx: {
		fields: {
			signatures: {
				rule: "repeated",
				type: "bytes",
				id: 1
			},
			output_keys: {
				rule: "repeated",
				type: "bytes",
				id: 2
			}
		}
	},
	EmmcFixPermission: {
		fields: {
		}
	},
	EmmcPath: {
		fields: {
			exist: {
				rule: "required",
				type: "bool",
				id: 1
			},
			size: {
				rule: "required",
				type: "uint64",
				id: 2
			},
			year: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			month: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			day: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			hour: {
				rule: "required",
				type: "uint32",
				id: 6
			},
			minute: {
				rule: "required",
				type: "uint32",
				id: 7
			},
			second: {
				rule: "required",
				type: "uint32",
				id: 8
			},
			readonly: {
				rule: "required",
				type: "bool",
				id: 9
			},
			hidden: {
				rule: "required",
				type: "bool",
				id: 10
			},
			system: {
				rule: "required",
				type: "bool",
				id: 11
			},
			archive: {
				rule: "required",
				type: "bool",
				id: 12
			},
			directory: {
				rule: "required",
				type: "bool",
				id: 13
			}
		}
	},
	EmmcPathInfo: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EmmcFile: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			},
			offset: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			len: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			data: {
				type: "bytes",
				id: 4
			},
			data_hash: {
				type: "uint32",
				id: 5
			},
			processed_byte: {
				type: "uint32",
				id: 6
			}
		}
	},
	EmmcFileRead: {
		fields: {
			file: {
				rule: "required",
				type: "EmmcFile",
				id: 1
			},
			ui_percentage: {
				type: "uint32",
				id: 2
			}
		}
	},
	EmmcFileWrite: {
		fields: {
			file: {
				rule: "required",
				type: "EmmcFile",
				id: 1
			},
			overwrite: {
				rule: "required",
				type: "bool",
				id: 2
			},
			append: {
				rule: "required",
				type: "bool",
				id: 3
			},
			ui_percentage: {
				type: "uint32",
				id: 4
			}
		}
	},
	EmmcFileDelete: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EmmcDir: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			},
			child_dirs: {
				type: "string",
				id: 2
			},
			child_files: {
				type: "string",
				id: 3
			}
		}
	},
	EmmcDirList: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EmmcDirMake: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EmmcDirRemove: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EosGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	EosPublicKey: {
		fields: {
			wif_public_key: {
				rule: "required",
				type: "string",
				id: 1
			},
			raw_public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	EosSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			chain_id: {
				type: "bytes",
				id: 2
			},
			header: {
				type: "EosTxHeader",
				id: 3
			},
			num_actions: {
				type: "uint32",
				id: 4
			}
		},
		nested: {
			EosTxHeader: {
				fields: {
					expiration: {
						rule: "required",
						type: "uint32",
						id: 1
					},
					ref_block_num: {
						rule: "required",
						type: "uint32",
						id: 2
					},
					ref_block_prefix: {
						rule: "required",
						type: "uint32",
						id: 3
					},
					max_net_usage_words: {
						rule: "required",
						type: "uint32",
						id: 4
					},
					max_cpu_usage_ms: {
						rule: "required",
						type: "uint32",
						id: 5
					},
					delay_sec: {
						rule: "required",
						type: "uint32",
						id: 6
					}
				}
			}
		}
	},
	EosTxActionRequest: {
		fields: {
			data_size: {
				type: "uint32",
				id: 1
			}
		}
	},
	EosTxActionAck: {
		fields: {
			common: {
				type: "EosActionCommon",
				id: 1
			},
			transfer: {
				type: "EosActionTransfer",
				id: 2
			},
			delegate: {
				type: "EosActionDelegate",
				id: 3
			},
			undelegate: {
				type: "EosActionUndelegate",
				id: 4
			},
			refund: {
				type: "EosActionRefund",
				id: 5
			},
			buy_ram: {
				type: "EosActionBuyRam",
				id: 6
			},
			buy_ram_bytes: {
				type: "EosActionBuyRamBytes",
				id: 7
			},
			sell_ram: {
				type: "EosActionSellRam",
				id: 8
			},
			vote_producer: {
				type: "EosActionVoteProducer",
				id: 9
			},
			update_auth: {
				type: "EosActionUpdateAuth",
				id: 10
			},
			delete_auth: {
				type: "EosActionDeleteAuth",
				id: 11
			},
			link_auth: {
				type: "EosActionLinkAuth",
				id: 12
			},
			unlink_auth: {
				type: "EosActionUnlinkAuth",
				id: 13
			},
			new_account: {
				type: "EosActionNewAccount",
				id: 14
			},
			unknown: {
				type: "EosActionUnknown",
				id: 15
			}
		},
		nested: {
			EosAsset: {
				fields: {
					amount: {
						type: "sint64",
						id: 1
					},
					symbol: {
						type: "uint64",
						id: 2
					}
				}
			},
			EosPermissionLevel: {
				fields: {
					actor: {
						type: "uint64",
						id: 1
					},
					permission: {
						type: "uint64",
						id: 2
					}
				}
			},
			EosAuthorizationKey: {
				fields: {
					type: {
						rule: "required",
						type: "uint32",
						id: 1
					},
					key: {
						type: "bytes",
						id: 2
					},
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 3,
						options: {
							packed: false
						}
					},
					weight: {
						rule: "required",
						type: "uint32",
						id: 4
					}
				}
			},
			EosAuthorizationAccount: {
				fields: {
					account: {
						type: "EosPermissionLevel",
						id: 1
					},
					weight: {
						type: "uint32",
						id: 2
					}
				}
			},
			EosAuthorizationWait: {
				fields: {
					wait_sec: {
						type: "uint32",
						id: 1
					},
					weight: {
						type: "uint32",
						id: 2
					}
				}
			},
			EosAuthorization: {
				fields: {
					threshold: {
						type: "uint32",
						id: 1
					},
					keys: {
						rule: "repeated",
						type: "EosAuthorizationKey",
						id: 2
					},
					accounts: {
						rule: "repeated",
						type: "EosAuthorizationAccount",
						id: 3
					},
					waits: {
						rule: "repeated",
						type: "EosAuthorizationWait",
						id: 4
					}
				}
			},
			EosActionCommon: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					name: {
						type: "uint64",
						id: 2
					},
					authorization: {
						rule: "repeated",
						type: "EosPermissionLevel",
						id: 3
					}
				}
			},
			EosActionTransfer: {
				fields: {
					sender: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					quantity: {
						type: "EosAsset",
						id: 3
					},
					memo: {
						type: "string",
						id: 4
					}
				}
			},
			EosActionDelegate: {
				fields: {
					sender: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					net_quantity: {
						type: "EosAsset",
						id: 3
					},
					cpu_quantity: {
						type: "EosAsset",
						id: 4
					},
					transfer: {
						type: "bool",
						id: 5
					}
				}
			},
			EosActionUndelegate: {
				fields: {
					sender: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					net_quantity: {
						type: "EosAsset",
						id: 3
					},
					cpu_quantity: {
						type: "EosAsset",
						id: 4
					}
				}
			},
			EosActionRefund: {
				fields: {
					owner: {
						type: "uint64",
						id: 1
					}
				}
			},
			EosActionBuyRam: {
				fields: {
					payer: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					quantity: {
						type: "EosAsset",
						id: 3
					}
				}
			},
			EosActionBuyRamBytes: {
				fields: {
					payer: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					bytes: {
						type: "uint32",
						id: 3
					}
				}
			},
			EosActionSellRam: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					bytes: {
						type: "uint64",
						id: 2
					}
				}
			},
			EosActionVoteProducer: {
				fields: {
					voter: {
						type: "uint64",
						id: 1
					},
					proxy: {
						type: "uint64",
						id: 2
					},
					producers: {
						rule: "repeated",
						type: "uint64",
						id: 3,
						options: {
							packed: false
						}
					}
				}
			},
			EosActionUpdateAuth: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					permission: {
						type: "uint64",
						id: 2
					},
					parent: {
						type: "uint64",
						id: 3
					},
					auth: {
						type: "EosAuthorization",
						id: 4
					}
				}
			},
			EosActionDeleteAuth: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					permission: {
						type: "uint64",
						id: 2
					}
				}
			},
			EosActionLinkAuth: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					code: {
						type: "uint64",
						id: 2
					},
					type: {
						type: "uint64",
						id: 3
					},
					requirement: {
						type: "uint64",
						id: 4
					}
				}
			},
			EosActionUnlinkAuth: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					code: {
						type: "uint64",
						id: 2
					},
					type: {
						type: "uint64",
						id: 3
					}
				}
			},
			EosActionNewAccount: {
				fields: {
					creator: {
						type: "uint64",
						id: 1
					},
					name: {
						type: "uint64",
						id: 2
					},
					owner: {
						type: "EosAuthorization",
						id: 3
					},
					active: {
						type: "EosAuthorization",
						id: 4
					}
				}
			},
			EosActionUnknown: {
				fields: {
					data_size: {
						rule: "required",
						type: "uint32",
						id: 1
					},
					data_chunk: {
						type: "bytes",
						id: 2
					}
				}
			}
		}
	},
	EosSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EthereumDefinitionType: {
		values: {
			NETWORK: 0,
			TOKEN: 1
		}
	},
	EthereumNetworkInfo: {
		fields: {
			chain_id: {
				rule: "required",
				type: "uint64",
				id: 1
			},
			symbol: {
				rule: "required",
				type: "string",
				id: 2
			},
			slip44: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			name: {
				rule: "required",
				type: "string",
				id: 4
			},
			icon: {
				type: "string",
				id: 101
			},
			primary_color: {
				type: "uint64",
				id: 102
			}
		}
	},
	EthereumTokenInfo: {
		fields: {
			address: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			chain_id: {
				rule: "required",
				type: "uint64",
				id: 2
			},
			symbol: {
				rule: "required",
				type: "string",
				id: 3
			},
			decimals: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			name: {
				rule: "required",
				type: "string",
				id: 5
			}
		}
	},
	EthereumDefinitions: {
		fields: {
			encoded_network: {
				type: "bytes",
				id: 1
			},
			encoded_token: {
				type: "bytes",
				id: 2
			}
		}
	},
	EthereumSignTypedDataChargerWallet: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			primary_type: {
				rule: "required",
				type: "string",
				id: 2
			},
			metamask_v4_compat: {
				type: "bool",
				id: 3,
				options: {
					"default": true
				}
			},
			chain_id: {
				type: "uint64",
				id: 4
			}
		}
	},
	EthereumTypedDataStructRequestChargerWallet: {
		fields: {
			name: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EthereumTypedDataStructAckChargerWallet: {
		fields: {
			members: {
				rule: "repeated",
				type: "EthereumStructMemberChargerWallet",
				id: 1
			}
		},
		nested: {
			EthereumStructMemberChargerWallet: {
				fields: {
					type: {
						rule: "required",
						type: "EthereumFieldTypeChargerWallet",
						id: 1
					},
					name: {
						rule: "required",
						type: "string",
						id: 2
					}
				}
			},
			EthereumFieldTypeChargerWallet: {
				fields: {
					data_type: {
						rule: "required",
						type: "EthereumDataTypeChargerWallet",
						id: 1
					},
					size: {
						type: "uint32",
						id: 2
					},
					entry_type: {
						type: "EthereumFieldTypeChargerWallet",
						id: 3
					},
					struct_name: {
						type: "string",
						id: 4
					}
				}
			},
			EthereumDataTypeChargerWallet: {
				values: {
					UINT: 1,
					INT: 2,
					BYTES: 3,
					STRING: 4,
					BOOL: 5,
					ADDRESS: 6,
					ARRAY: 7,
					STRUCT: 8
				}
			}
		}
	},
	EthereumTypedDataValueRequestChargerWallet: {
		fields: {
			member_path: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			}
		}
	},
	EthereumTypedDataValueAckChargerWallet: {
		fields: {
			value: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	EthereumSignTypedData: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			primary_type: {
				rule: "required",
				type: "string",
				id: 2
			},
			metamask_v4_compat: {
				type: "bool",
				id: 3,
				options: {
					"default": true
				}
			},
			definitions: {
				type: "EthereumDefinitions",
				id: 4
			}
		}
	},
	EthereumTypedDataStructRequest: {
		fields: {
			name: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EthereumTypedDataStructAck: {
		fields: {
			members: {
				rule: "repeated",
				type: "EthereumStructMember",
				id: 1
			}
		},
		nested: {
			EthereumStructMember: {
				fields: {
					type: {
						rule: "required",
						type: "EthereumFieldType",
						id: 1
					},
					name: {
						rule: "required",
						type: "string",
						id: 2
					}
				}
			},
			EthereumFieldType: {
				fields: {
					data_type: {
						rule: "required",
						type: "EthereumDataType",
						id: 1
					},
					size: {
						type: "uint32",
						id: 2
					},
					entry_type: {
						type: "EthereumFieldType",
						id: 3
					},
					struct_name: {
						type: "string",
						id: 4
					}
				}
			},
			EthereumDataType: {
				values: {
					UINT: 1,
					INT: 2,
					BYTES: 3,
					STRING: 4,
					BOOL: 5,
					ADDRESS: 6,
					ARRAY: 7,
					STRUCT: 8
				}
			}
		}
	},
	EthereumTypedDataValueRequest: {
		fields: {
			member_path: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			}
		}
	},
	EthereumTypedDataValueAck: {
		fields: {
			value: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	EthereumGetPublicKeyChargerWallet: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			chain_id: {
				type: "uint64",
				id: 3
			}
		}
	},
	EthereumPublicKeyChargerWallet: {
		fields: {
			node: {
				rule: "required",
				type: "HDNodeType",
				id: 1
			},
			xpub: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	EthereumGetAddressChargerWallet: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			chain_id: {
				type: "uint64",
				id: 3
			}
		}
	},
	EthereumAddressChargerWallet: {
		fields: {
			_old_address: {
				type: "bytes",
				id: 1,
				options: {
					deprecated: true
				}
			},
			address: {
				type: "string",
				id: 2
			}
		}
	},
	EthereumSignTxChargerWallet: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			nonce: {
				type: "bytes",
				id: 2,
				options: {
					"default": ""
				}
			},
			gas_price: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			gas_limit: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			to: {
				type: "string",
				id: 11,
				options: {
					"default": ""
				}
			},
			value: {
				type: "bytes",
				id: 6,
				options: {
					"default": ""
				}
			},
			data_initial_chunk: {
				type: "bytes",
				id: 7,
				options: {
					"default": ""
				}
			},
			data_length: {
				type: "uint32",
				id: 8,
				options: {
					"default": 0
				}
			},
			chain_id: {
				rule: "required",
				type: "uint64",
				id: 9
			},
			tx_type: {
				type: "uint32",
				id: 10
			}
		}
	},
	EthereumSignTxEIP1559ChargerWallet: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			nonce: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			max_gas_fee: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			max_priority_fee: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			gas_limit: {
				rule: "required",
				type: "bytes",
				id: 5
			},
			to: {
				type: "string",
				id: 6,
				options: {
					"default": ""
				}
			},
			value: {
				rule: "required",
				type: "bytes",
				id: 7
			},
			data_initial_chunk: {
				type: "bytes",
				id: 8,
				options: {
					"default": ""
				}
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 9
			},
			chain_id: {
				rule: "required",
				type: "uint64",
				id: 10
			},
			access_list: {
				rule: "repeated",
				type: "EthereumAccessListChargerWallet",
				id: 11
			}
		},
		nested: {
			EthereumAccessListChargerWallet: {
				fields: {
					address: {
						rule: "required",
						type: "string",
						id: 1
					},
					storage_keys: {
						rule: "repeated",
						type: "bytes",
						id: 2
					}
				}
			}
		}
	},
	EthereumTxRequestChargerWallet: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			signature_v: {
				type: "uint32",
				id: 2
			},
			signature_r: {
				type: "bytes",
				id: 3
			},
			signature_s: {
				type: "bytes",
				id: 4
			}
		}
	},
	EthereumTxAckChargerWallet: {
		fields: {
			data_chunk: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	EthereumSignMessageChargerWallet: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			chain_id: {
				type: "uint64",
				id: 3
			}
		}
	},
	EthereumMessageSignatureChargerWallet: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			address: {
				rule: "required",
				type: "string",
				id: 3
			}
		}
	},
	EthereumVerifyMessageChargerWallet: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			address: {
				rule: "required",
				type: "string",
				id: 4
			},
			chain_id: {
				type: "uint64",
				id: 5
			}
		}
	},
	EthereumSignTypedHashChargerWallet: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			domain_separator_hash: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			message_hash: {
				type: "bytes",
				id: 3
			},
			chain_id: {
				type: "uint64",
				id: 4
			}
		}
	},
	EthereumTypedDataSignatureChargerWallet: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			address: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	EthereumSignMessageEIP712: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			domain_hash: {
				type: "bytes",
				id: 2
			},
			message_hash: {
				type: "bytes",
				id: 3
			}
		}
	},
	EthereumGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	EthereumPublicKey: {
		fields: {
			node: {
				rule: "required",
				type: "HDNodeType",
				id: 1
			},
			xpub: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	EthereumGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			encoded_network: {
				type: "bytes",
				id: 3
			}
		}
	},
	EthereumAddress: {
		fields: {
			_old_address: {
				type: "bytes",
				id: 1,
				options: {
					deprecated: true
				}
			},
			address: {
				type: "string",
				id: 2
			}
		}
	},
	EthereumSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			nonce: {
				type: "bytes",
				id: 2,
				options: {
					"default": ""
				}
			},
			gas_price: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			gas_limit: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			to: {
				type: "string",
				id: 11,
				options: {
					"default": ""
				}
			},
			value: {
				type: "bytes",
				id: 6,
				options: {
					"default": ""
				}
			},
			data_initial_chunk: {
				type: "bytes",
				id: 7,
				options: {
					"default": ""
				}
			},
			data_length: {
				type: "uint32",
				id: 8,
				options: {
					"default": 0
				}
			},
			chain_id: {
				rule: "required",
				type: "uint64",
				id: 9
			},
			tx_type: {
				type: "uint32",
				id: 10
			},
			definitions: {
				type: "EthereumDefinitions",
				id: 12
			}
		}
	},
	EthereumSignTxEIP1559: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			nonce: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			max_gas_fee: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			max_priority_fee: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			gas_limit: {
				rule: "required",
				type: "bytes",
				id: 5
			},
			to: {
				type: "string",
				id: 6,
				options: {
					"default": ""
				}
			},
			value: {
				rule: "required",
				type: "bytes",
				id: 7
			},
			data_initial_chunk: {
				type: "bytes",
				id: 8,
				options: {
					"default": ""
				}
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 9
			},
			chain_id: {
				rule: "required",
				type: "uint64",
				id: 10
			},
			access_list: {
				rule: "repeated",
				type: "EthereumAccessList",
				id: 11
			},
			definitions: {
				type: "EthereumDefinitions",
				id: 12
			}
		},
		nested: {
			EthereumAccessList: {
				fields: {
					address: {
						rule: "required",
						type: "string",
						id: 1
					},
					storage_keys: {
						rule: "repeated",
						type: "bytes",
						id: 2
					}
				}
			}
		}
	},
	EthereumTxRequest: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			signature_v: {
				type: "uint32",
				id: 2
			},
			signature_r: {
				type: "bytes",
				id: 3
			},
			signature_s: {
				type: "bytes",
				id: 4
			}
		}
	},
	EthereumTxAck: {
		fields: {
			data_chunk: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	EthereumSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			encoded_network: {
				type: "bytes",
				id: 3
			}
		}
	},
	EthereumMessageSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			address: {
				rule: "required",
				type: "string",
				id: 3
			}
		}
	},
	EthereumVerifyMessage: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			address: {
				rule: "required",
				type: "string",
				id: 4
			}
		}
	},
	EthereumSignTypedHash: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			domain_separator_hash: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			message_hash: {
				type: "bytes",
				id: 3
			},
			encoded_network: {
				type: "bytes",
				id: 4
			}
		}
	},
	EthereumTypedDataSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			address: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	FilecoinGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			testnet: {
				type: "bool",
				id: 3
			}
		}
	},
	FilecoinAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	FilecoinSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			testnet: {
				type: "bool",
				id: 3
			}
		}
	},
	FilecoinSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	KaspaGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			prefix: {
				type: "string",
				id: 3,
				options: {
					"default": "kaspa"
				}
			},
			scheme: {
				type: "string",
				id: 4,
				options: {
					"default": "schnorr"
				}
			}
		}
	},
	KaspaAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	KaspaSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			scheme: {
				type: "string",
				id: 3,
				options: {
					"default": "schnorr"
				}
			},
			prefix: {
				type: "string",
				id: 4,
				options: {
					"default": "kaspa"
				}
			},
			input_count: {
				type: "uint32",
				id: 5,
				options: {
					"default": 1
				}
			}
		}
	},
	KaspaTxInputRequest: {
		fields: {
			request_index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			signature: {
				type: "bytes",
				id: 2
			}
		}
	},
	KaspaTxInputAck: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_message: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	KaspaSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	LnurlAuth: {
		fields: {
			domain: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			data: {
				rule: "required",
				type: "bytes",
				id: 3
			}
		}
	},
	LnurlAuthResp: {
		fields: {
			publickey: {
				type: "string",
				id: 1
			},
			path: {
				type: "string",
				id: 2
			},
			signature: {
				type: "bytes",
				id: 3
			}
		}
	},
	BackupType: {
		values: {
			Bip39: 0,
			Slip39_Basic: 1,
			Slip39_Advanced: 2
		}
	},
	SafetyCheckLevel: {
		values: {
			Strict: 0,
			PromptAlways: 1,
			PromptTemporarily: 2
		}
	},
	Initialize: {
		fields: {
			session_id: {
				type: "bytes",
				id: 1
			},
			_skip_passphrase: {
				type: "bool",
				id: 2,
				options: {
					deprecated: true
				}
			},
			derive_cardano: {
				type: "bool",
				id: 3
			}
		}
	},
	GetFeatures: {
		fields: {
		}
	},
	ChargerwalletGetFeatures: {
		fields: {
		}
	},
	ChargerWalletDeviceType: {
		values: {
			CLASSIC: 0,
			CLASSIC1S: 1,
			MINI: 2,
			TOUCH: 3,
			PRO: 5
		}
	},
	ChargerWalletSeType: {
		values: {
			THD89: 0,
			SE608A: 1
		}
	},
	ChargerWalletSEState: {
		values: {
			BOOT: 0,
			APP: 1
		}
	},
	Features: {
		fields: {
			vendor: {
				type: "string",
				id: 1
			},
			major_version: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			minor_version: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			patch_version: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			bootloader_mode: {
				type: "bool",
				id: 5
			},
			device_id: {
				type: "string",
				id: 6
			},
			pin_protection: {
				type: "bool",
				id: 7
			},
			passphrase_protection: {
				type: "bool",
				id: 8
			},
			language: {
				type: "string",
				id: 9
			},
			label: {
				type: "string",
				id: 10
			},
			initialized: {
				type: "bool",
				id: 12
			},
			revision: {
				type: "bytes",
				id: 13
			},
			bootloader_hash: {
				type: "bytes",
				id: 14
			},
			imported: {
				type: "bool",
				id: 15
			},
			unlocked: {
				type: "bool",
				id: 16
			},
			_passphrase_cached: {
				type: "bool",
				id: 17,
				options: {
					deprecated: true
				}
			},
			firmware_present: {
				type: "bool",
				id: 18
			},
			needs_backup: {
				type: "bool",
				id: 19
			},
			flags: {
				type: "uint32",
				id: 20
			},
			model: {
				type: "string",
				id: 21
			},
			fw_major: {
				type: "uint32",
				id: 22
			},
			fw_minor: {
				type: "uint32",
				id: 23
			},
			fw_patch: {
				type: "uint32",
				id: 24
			},
			fw_vendor: {
				type: "string",
				id: 25
			},
			unfinished_backup: {
				type: "bool",
				id: 27
			},
			no_backup: {
				type: "bool",
				id: 28
			},
			recovery_mode: {
				type: "bool",
				id: 29
			},
			capabilities: {
				rule: "repeated",
				type: "Capability",
				id: 30,
				options: {
					packed: false
				}
			},
			backup_type: {
				type: "BackupType",
				id: 31
			},
			sd_card_present: {
				type: "bool",
				id: 32
			},
			sd_protection: {
				type: "bool",
				id: 33
			},
			wipe_code_protection: {
				type: "bool",
				id: 34
			},
			session_id: {
				type: "bytes",
				id: 35
			},
			passphrase_always_on_device: {
				type: "bool",
				id: 36
			},
			safety_checks: {
				type: "SafetyCheckLevel",
				id: 37
			},
			auto_lock_delay_ms: {
				type: "uint32",
				id: 38
			},
			display_rotation: {
				type: "uint32",
				id: 39
			},
			experimental_features: {
				type: "bool",
				id: 40
			},
			busy: {
				type: "bool",
				id: 41
			},
			offset: {
				type: "uint32",
				id: 500
			},
			ble_name: {
				type: "string",
				id: 501
			},
			ble_ver: {
				type: "string",
				id: 502
			},
			ble_enable: {
				type: "bool",
				id: 503
			},
			se_enable: {
				type: "bool",
				id: 504
			},
			se_ver: {
				type: "string",
				id: 506
			},
			backup_only: {
				type: "bool",
				id: 507
			},
			chargerwallet_version: {
				type: "string",
				id: 508
			},
			chargerwallet_serial: {
				type: "string",
				id: 509
			},
			bootloader_version: {
				type: "string",
				id: 510
			},
			serial_no: {
				type: "string",
				id: 511
			},
			spi_flash: {
				type: "string",
				id: 512
			},
			initstates: {
				type: "uint32",
				id: 513
			},
			NFT_voucher: {
				type: "bytes",
				id: 514
			},
			cpu_info: {
				type: "string",
				id: 515
			},
			pre_firmware: {
				type: "string",
				id: 516
			},
			coin_switch: {
				type: "uint32",
				id: 517
			},
			build_id: {
				type: "bytes",
				id: 518
			},
			boardloader_version: {
				type: "string",
				id: 519
			},
			battery_level: {
				type: "uint32",
				id: 520
			},
			chargerwallet_device_type: {
				type: "ChargerWalletDeviceType",
				id: 600
			},
			chargerwallet_se_type: {
				type: "ChargerWalletSeType",
				id: 601
			},
			chargerwallet_board_version: {
				type: "string",
				id: 602
			},
			chargerwallet_board_hash: {
				type: "bytes",
				id: 603
			},
			chargerwallet_boot_version: {
				type: "string",
				id: 604
			},
			chargerwallet_boot_hash: {
				type: "bytes",
				id: 605
			},
			chargerwallet_se01_version: {
				type: "string",
				id: 606
			},
			chargerwallet_se01_hash: {
				type: "bytes",
				id: 607
			},
			chargerwallet_se01_build_id: {
				type: "string",
				id: 608
			},
			chargerwallet_firmware_version: {
				type: "string",
				id: 609
			},
			chargerwallet_firmware_hash: {
				type: "bytes",
				id: 610
			},
			chargerwallet_firmware_build_id: {
				type: "string",
				id: 611
			},
			chargerwallet_serial_no: {
				type: "string",
				id: 612
			},
			chargerwallet_boot_build_id: {
				type: "string",
				id: 613
			},
			chargerwallet_ble_name: {
				type: "string",
				id: 614
			},
			chargerwallet_ble_version: {
				type: "string",
				id: 615
			},
			chargerwallet_ble_build_id: {
				type: "string",
				id: 616
			},
			chargerwallet_ble_hash: {
				type: "bytes",
				id: 617
			},
			chargerwallet_se02_version: {
				type: "string",
				id: 618
			},
			chargerwallet_se03_version: {
				type: "string",
				id: 619
			},
			chargerwallet_se04_version: {
				type: "string",
				id: 620
			},
			chargerwallet_se01_state: {
				type: "ChargerWalletSEState",
				id: 621
			},
			chargerwallet_se02_state: {
				type: "ChargerWalletSEState",
				id: 622
			},
			chargerwallet_se03_state: {
				type: "ChargerWalletSEState",
				id: 623
			},
			chargerwallet_se04_state: {
				type: "ChargerWalletSEState",
				id: 624
			}
		},
		nested: {
			Capability: {
				options: {
					"(has_bitcoin_only_values)": true
				},
				values: {
					Capability_Bitcoin: 1,
					Capability_Bitcoin_like: 2,
					Capability_Binance: 3,
					Capability_Cardano: 4,
					Capability_Crypto: 5,
					Capability_EOS: 6,
					Capability_Ethereum: 7,
					Capability_Lisk: 8,
					Capability_Monero: 9,
					Capability_NEM: 10,
					Capability_Ripple: 11,
					Capability_Stellar: 12,
					Capability_Tezos: 13,
					Capability_U2F: 14,
					Capability_Shamir: 15,
					Capability_ShamirGroups: 16,
					Capability_PassphraseEntry: 17
				}
			}
		}
	},
	ChargerwalletFeatures: {
		fields: {
			chargerwallet_device_type: {
				type: "ChargerWalletDeviceType",
				id: 1
			},
			chargerwallet_board_version: {
				type: "string",
				id: 2
			},
			chargerwallet_boot_version: {
				type: "string",
				id: 3
			},
			chargerwallet_firmware_version: {
				type: "string",
				id: 4
			},
			chargerwallet_board_hash: {
				type: "bytes",
				id: 5
			},
			chargerwallet_boot_hash: {
				type: "bytes",
				id: 6
			},
			chargerwallet_firmware_hash: {
				type: "bytes",
				id: 7
			},
			chargerwallet_board_build_id: {
				type: "string",
				id: 8
			},
			chargerwallet_boot_build_id: {
				type: "string",
				id: 9
			},
			chargerwallet_firmware_build_id: {
				type: "string",
				id: 10
			},
			chargerwallet_serial_no: {
				type: "string",
				id: 11
			},
			chargerwallet_ble_name: {
				type: "string",
				id: 12
			},
			chargerwallet_ble_version: {
				type: "string",
				id: 13
			},
			chargerwallet_ble_build_id: {
				type: "string",
				id: 14
			},
			chargerwallet_ble_hash: {
				type: "bytes",
				id: 15
			},
			chargerwallet_se_type: {
				type: "ChargerWalletSeType",
				id: 16
			},
			chargerwallet_se01_state: {
				type: "ChargerWalletSEState",
				id: 17
			},
			chargerwallet_se02_state: {
				type: "ChargerWalletSEState",
				id: 18
			},
			chargerwallet_se03_state: {
				type: "ChargerWalletSEState",
				id: 19
			},
			chargerwallet_se04_state: {
				type: "ChargerWalletSEState",
				id: 20
			},
			chargerwallet_se01_version: {
				type: "string",
				id: 21
			},
			chargerwallet_se02_version: {
				type: "string",
				id: 22
			},
			chargerwallet_se03_version: {
				type: "string",
				id: 23
			},
			chargerwallet_se04_version: {
				type: "string",
				id: 24
			},
			chargerwallet_se01_hash: {
				type: "bytes",
				id: 25
			},
			chargerwallet_se02_hash: {
				type: "bytes",
				id: 26
			},
			chargerwallet_se03_hash: {
				type: "bytes",
				id: 27
			},
			chargerwallet_se04_hash: {
				type: "bytes",
				id: 28
			},
			chargerwallet_se01_build_id: {
				type: "string",
				id: 29
			},
			chargerwallet_se02_build_id: {
				type: "string",
				id: 30
			},
			chargerwallet_se03_build_id: {
				type: "string",
				id: 31
			},
			chargerwallet_se04_build_id: {
				type: "string",
				id: 32
			},
			chargerwallet_se01_boot_version: {
				type: "string",
				id: 33
			},
			chargerwallet_se02_boot_version: {
				type: "string",
				id: 34
			},
			chargerwallet_se03_boot_version: {
				type: "string",
				id: 35
			},
			chargerwallet_se04_boot_version: {
				type: "string",
				id: 36
			},
			chargerwallet_se01_boot_hash: {
				type: "bytes",
				id: 37
			},
			chargerwallet_se02_boot_hash: {
				type: "bytes",
				id: 38
			},
			chargerwallet_se03_boot_hash: {
				type: "bytes",
				id: 39
			},
			chargerwallet_se04_boot_hash: {
				type: "bytes",
				id: 40
			},
			chargerwallet_se01_boot_build_id: {
				type: "string",
				id: 41
			},
			chargerwallet_se02_boot_build_id: {
				type: "string",
				id: 42
			},
			chargerwallet_se03_boot_build_id: {
				type: "string",
				id: 43
			},
			chargerwallet_se04_boot_build_id: {
				type: "string",
				id: 44
			}
		}
	},
	LockDevice: {
		fields: {
		}
	},
	EndSession: {
		fields: {
		}
	},
	ApplySettings: {
		fields: {
			language: {
				type: "string",
				id: 1
			},
			label: {
				type: "string",
				id: 2
			},
			use_passphrase: {
				type: "bool",
				id: 3
			},
			homescreen: {
				type: "bytes",
				id: 4
			},
			_passphrase_source: {
				type: "uint32",
				id: 5,
				options: {
					deprecated: true
				}
			},
			auto_lock_delay_ms: {
				type: "uint32",
				id: 6
			},
			display_rotation: {
				type: "uint32",
				id: 7
			},
			passphrase_always_on_device: {
				type: "bool",
				id: 8
			},
			safety_checks: {
				type: "SafetyCheckLevel",
				id: 9
			},
			experimental_features: {
				type: "bool",
				id: 10
			},
			use_ble: {
				type: "bool",
				id: 100
			},
			use_se: {
				type: "bool",
				id: 101
			},
			is_bixinapp: {
				type: "bool",
				id: 102
			},
			fastpay_pin: {
				type: "bool",
				id: 103
			},
			fastpay_confirm: {
				type: "bool",
				id: 104
			},
			fastpay_money_limit: {
				type: "uint64",
				id: 105
			},
			fastpay_times: {
				type: "uint32",
				id: 106
			}
		},
		nested: {
			ExportType: {
				values: {
					SeedEncExportType_NO: 0,
					SeedEncExportType_YES: 1,
					MnemonicPlainExportType_YES: 2
				}
			}
		}
	},
	ApplyFlags: {
		fields: {
			flags: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	ChangePin: {
		fields: {
			remove: {
				type: "bool",
				id: 1
			}
		}
	},
	ChangeWipeCode: {
		fields: {
			remove: {
				type: "bool",
				id: 1
			}
		}
	},
	SdProtect: {
		fields: {
			operation: {
				rule: "required",
				type: "SdProtectOperationType",
				id: 1
			}
		},
		nested: {
			SdProtectOperationType: {
				values: {
					DISABLE: 0,
					ENABLE: 1,
					REFRESH: 2
				}
			}
		}
	},
	Ping: {
		fields: {
			message: {
				type: "string",
				id: 1,
				options: {
					"default": ""
				}
			},
			button_protection: {
				type: "bool",
				id: 2
			}
		}
	},
	Cancel: {
		fields: {
		}
	},
	GetEntropy: {
		fields: {
			size: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	Entropy: {
		fields: {
			entropy: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	WipeDevice: {
		fields: {
		}
	},
	LoadDevice: {
		fields: {
			mnemonics: {
				rule: "repeated",
				type: "string",
				id: 1
			},
			pin: {
				type: "string",
				id: 3
			},
			passphrase_protection: {
				type: "bool",
				id: 4
			},
			language: {
				type: "string",
				id: 5,
				options: {
					"default": "en-US"
				}
			},
			label: {
				type: "string",
				id: 6
			},
			skip_checksum: {
				type: "bool",
				id: 7
			},
			u2f_counter: {
				type: "uint32",
				id: 8
			},
			needs_backup: {
				type: "bool",
				id: 9
			},
			no_backup: {
				type: "bool",
				id: 10
			}
		}
	},
	ResetDevice: {
		fields: {
			display_random: {
				type: "bool",
				id: 1
			},
			strength: {
				type: "uint32",
				id: 2,
				options: {
					"default": 256
				}
			},
			passphrase_protection: {
				type: "bool",
				id: 3
			},
			pin_protection: {
				type: "bool",
				id: 4
			},
			language: {
				type: "string",
				id: 5,
				options: {
					"default": "en-US"
				}
			},
			label: {
				type: "string",
				id: 6
			},
			u2f_counter: {
				type: "uint32",
				id: 7
			},
			skip_backup: {
				type: "bool",
				id: 8
			},
			no_backup: {
				type: "bool",
				id: 9
			},
			backup_type: {
				type: "BackupType",
				id: 10,
				options: {
					"default": "Bip39"
				}
			}
		}
	},
	BackupDevice: {
		fields: {
		}
	},
	EntropyRequest: {
		fields: {
		}
	},
	EntropyAck: {
		fields: {
			entropy: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	RecoveryDevice: {
		fields: {
			word_count: {
				type: "uint32",
				id: 1
			},
			passphrase_protection: {
				type: "bool",
				id: 2
			},
			pin_protection: {
				type: "bool",
				id: 3
			},
			language: {
				type: "string",
				id: 4
			},
			label: {
				type: "string",
				id: 5
			},
			enforce_wordlist: {
				type: "bool",
				id: 6
			},
			type: {
				type: "RecoveryDeviceType",
				id: 8
			},
			u2f_counter: {
				type: "uint32",
				id: 9
			},
			dry_run: {
				type: "bool",
				id: 10
			}
		},
		nested: {
			RecoveryDeviceType: {
				values: {
					RecoveryDeviceType_ScrambledWords: 0,
					RecoveryDeviceType_Matrix: 1
				}
			}
		}
	},
	WordRequest: {
		fields: {
			type: {
				rule: "required",
				type: "WordRequestType",
				id: 1
			}
		},
		nested: {
			WordRequestType: {
				values: {
					WordRequestType_Plain: 0,
					WordRequestType_Matrix9: 1,
					WordRequestType_Matrix6: 2
				}
			}
		}
	},
	WordAck: {
		fields: {
			word: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	SetU2FCounter: {
		fields: {
			u2f_counter: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	GetNextU2FCounter: {
		fields: {
		}
	},
	NextU2FCounter: {
		fields: {
			u2f_counter: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	DoPreauthorized: {
		fields: {
		}
	},
	PreauthorizedRequest: {
		fields: {
		}
	},
	CancelAuthorization: {
		fields: {
		}
	},
	BixinSeedOperate: {
		fields: {
			type: {
				rule: "required",
				type: "SeedRequestType",
				id: 1
			},
			seed_importData: {
				type: "bytes",
				id: 2
			}
		},
		nested: {
			SeedRequestType: {
				values: {
					SeedRequestType_Gen: 0,
					SeedRequestType_EncExport: 1,
					SeedRequestType_EncImport: 2
				}
			}
		}
	},
	BixinMessageSE: {
		fields: {
			inputmessage: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BixinOutMessageSE: {
		fields: {
			outmessage: {
				type: "bytes",
				id: 1
			}
		}
	},
	DeviceBackToBoot: {
		fields: {
		}
	},
	BixinBackupRequest: {
		fields: {
		}
	},
	BixinBackupAck: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BixinRestoreRequest: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			language: {
				type: "string",
				id: 2
			},
			label: {
				type: "string",
				id: 3
			},
			passphrase_protection: {
				type: "bool",
				id: 4
			}
		}
	},
	BixinRestoreAck: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BixinVerifyDeviceRequest: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BixinVerifyDeviceAck: {
		fields: {
			cert: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	BixinWhiteListRequest: {
		fields: {
			type: {
				rule: "required",
				type: "WL_OperationType",
				id: 1
			},
			addr_in: {
				type: "string",
				id: 2
			}
		},
		nested: {
			WL_OperationType: {
				values: {
					WL_OperationType_Add: 0,
					WL_OperationType_Delete: 1,
					WL_OperationType_Inquire: 2
				}
			}
		}
	},
	BixinWhiteListAck: {
		fields: {
			address: {
				rule: "repeated",
				type: "string",
				id: 1
			}
		}
	},
	BixinLoadDevice: {
		fields: {
			mnemonics: {
				rule: "required",
				type: "string",
				id: 1
			},
			language: {
				type: "string",
				id: 5,
				options: {
					"default": "en-US"
				}
			},
			label: {
				type: "string",
				id: 6
			},
			skip_checksum: {
				type: "bool",
				id: 7
			}
		}
	},
	BixinBackupDevice: {
		fields: {
		}
	},
	BixinBackupDeviceAck: {
		fields: {
			mnemonics: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	DeviceInfoSettings: {
		fields: {
			serial_no: {
				type: "string",
				id: 1
			},
			cpu_info: {
				type: "string",
				id: 2
			},
			pre_firmware: {
				type: "string",
				id: 3
			}
		}
	},
	GetDeviceInfo: {
		fields: {
		}
	},
	DeviceInfo: {
		fields: {
			serial_no: {
				type: "string",
				id: 1
			},
			spiFlash_info: {
				type: "string",
				id: 2
			},
			SE_info: {
				type: "string",
				id: 3
			},
			NFT_voucher: {
				type: "bytes",
				id: 4
			},
			cpu_info: {
				type: "string",
				id: 5
			},
			pre_firmware: {
				type: "string",
				id: 6
			}
		}
	},
	ReadSEPublicKey: {
		fields: {
		}
	},
	SEPublicKey: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	WriteSEPublicCert: {
		fields: {
			public_cert: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	ReadSEPublicCert: {
		fields: {
		}
	},
	SEPublicCert: {
		fields: {
			public_cert: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	SpiFlashWrite: {
		fields: {
			address: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			data: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SpiFlashRead: {
		fields: {
			address: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			len: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	SpiFlashData: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	SESignMessage: {
		fields: {
			message: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	SEMessageSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	ResourceUpload: {
		fields: {
			extension: {
				rule: "required",
				type: "string",
				id: 1
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			res_type: {
				rule: "required",
				type: "ResourceType",
				id: 3
			},
			nft_meta_data: {
				type: "bytes",
				id: 4
			},
			zoom_data_length: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			file_name_no_ext: {
				type: "string",
				id: 6
			}
		},
		nested: {
			ResourceType: {
				values: {
					WallPaper: 0,
					Nft: 1
				}
			}
		}
	},
	ZoomRequest: {
		fields: {
			offset: {
				type: "uint32",
				id: 1
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	ResourceRequest: {
		fields: {
			offset: {
				type: "uint32",
				id: 1
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	ResourceAck: {
		fields: {
			data_chunk: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			hash: {
				type: "bytes",
				id: 2
			}
		}
	},
	ResourceUpdate: {
		fields: {
			file_name: {
				rule: "required",
				type: "string",
				id: 1
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			initial_data_chunk: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			hash: {
				type: "bytes",
				id: 4
			}
		}
	},
	NFTWriteInfo: {
		fields: {
			index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			width: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			height: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			name_zh: {
				type: "string",
				id: 4
			},
			name_en: {
				type: "string",
				id: 5
			}
		}
	},
	NFTWriteData: {
		fields: {
			index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			data: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			offset: {
				rule: "required",
				type: "uint32",
				id: 3
			}
		}
	},
	RebootToBootloader: {
		fields: {
		}
	},
	RebootToBoardloader: {
		fields: {
		}
	},
	ListResDir: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	FileInfoList: {
		fields: {
			files: {
				rule: "repeated",
				type: "FileInfo",
				id: 1
			}
		},
		nested: {
			FileInfo: {
				fields: {
					name: {
						rule: "required",
						type: "string",
						id: 1
					},
					size: {
						rule: "required",
						type: "uint64",
						id: 2
					}
				}
			}
		}
	},
	DeviceEraseSector: {
		fields: {
			sector: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	MoneroTransactionSourceEntry: {
		fields: {
			outputs: {
				rule: "repeated",
				type: "MoneroOutputEntry",
				id: 1
			},
			real_output: {
				type: "uint64",
				id: 2
			},
			real_out_tx_key: {
				type: "bytes",
				id: 3
			},
			real_out_additional_tx_keys: {
				rule: "repeated",
				type: "bytes",
				id: 4
			},
			real_output_in_tx_index: {
				type: "uint64",
				id: 5
			},
			amount: {
				type: "uint64",
				id: 6
			},
			rct: {
				type: "bool",
				id: 7
			},
			mask: {
				type: "bytes",
				id: 8
			},
			multisig_kLRki: {
				type: "MoneroMultisigKLRki",
				id: 9
			},
			subaddr_minor: {
				type: "uint32",
				id: 10
			}
		},
		nested: {
			MoneroOutputEntry: {
				fields: {
					idx: {
						type: "uint64",
						id: 1
					},
					key: {
						type: "MoneroRctKeyPublic",
						id: 2
					}
				},
				nested: {
					MoneroRctKeyPublic: {
						fields: {
							dest: {
								type: "bytes",
								id: 1
							},
							commitment: {
								type: "bytes",
								id: 2
							}
						}
					}
				}
			},
			MoneroMultisigKLRki: {
				fields: {
					K: {
						type: "bytes",
						id: 1
					},
					L: {
						type: "bytes",
						id: 2
					},
					R: {
						type: "bytes",
						id: 3
					},
					ki: {
						type: "bytes",
						id: 4
					}
				}
			}
		}
	},
	MoneroTransactionDestinationEntry: {
		fields: {
			amount: {
				type: "uint64",
				id: 1
			},
			addr: {
				type: "MoneroAccountPublicAddress",
				id: 2
			},
			is_subaddress: {
				type: "bool",
				id: 3
			},
			original: {
				type: "bytes",
				id: 4
			},
			is_integrated: {
				type: "bool",
				id: 5
			}
		},
		nested: {
			MoneroAccountPublicAddress: {
				fields: {
					spend_public_key: {
						type: "bytes",
						id: 1
					},
					view_public_key: {
						type: "bytes",
						id: 2
					}
				}
			}
		}
	},
	MoneroTransactionRsigData: {
		fields: {
			rsig_type: {
				type: "uint32",
				id: 1
			},
			offload_type: {
				type: "uint32",
				id: 2
			},
			grouping: {
				rule: "repeated",
				type: "uint64",
				id: 3,
				options: {
					packed: false
				}
			},
			mask: {
				type: "bytes",
				id: 4
			},
			rsig: {
				type: "bytes",
				id: 5
			},
			rsig_parts: {
				rule: "repeated",
				type: "bytes",
				id: 6
			},
			bp_version: {
				type: "uint32",
				id: 7
			}
		}
	},
	MoneroGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			network_type: {
				type: "uint32",
				id: 3
			},
			account: {
				type: "uint32",
				id: 4
			},
			minor: {
				type: "uint32",
				id: 5
			},
			payment_id: {
				type: "bytes",
				id: 6
			}
		}
	},
	MoneroAddress: {
		fields: {
			address: {
				type: "bytes",
				id: 1
			}
		}
	},
	MoneroGetWatchKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 2
			}
		}
	},
	MoneroWatchKey: {
		fields: {
			watch_key: {
				type: "bytes",
				id: 1
			},
			address: {
				type: "bytes",
				id: 2
			}
		}
	},
	MoneroTransactionInitRequest: {
		fields: {
			version: {
				type: "uint32",
				id: 1
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 3
			},
			tsx_data: {
				type: "MoneroTransactionData",
				id: 4
			}
		},
		nested: {
			MoneroTransactionData: {
				fields: {
					version: {
						type: "uint32",
						id: 1
					},
					payment_id: {
						type: "bytes",
						id: 2
					},
					unlock_time: {
						type: "uint64",
						id: 3
					},
					outputs: {
						rule: "repeated",
						type: "MoneroTransactionDestinationEntry",
						id: 4
					},
					change_dts: {
						type: "MoneroTransactionDestinationEntry",
						id: 5
					},
					num_inputs: {
						type: "uint32",
						id: 6
					},
					mixin: {
						type: "uint32",
						id: 7
					},
					fee: {
						type: "uint64",
						id: 8
					},
					account: {
						type: "uint32",
						id: 9
					},
					minor_indices: {
						rule: "repeated",
						type: "uint32",
						id: 10,
						options: {
							packed: false
						}
					},
					rsig_data: {
						type: "MoneroTransactionRsigData",
						id: 11
					},
					integrated_indices: {
						rule: "repeated",
						type: "uint32",
						id: 12,
						options: {
							packed: false
						}
					},
					client_version: {
						type: "uint32",
						id: 13
					},
					hard_fork: {
						type: "uint32",
						id: 14
					},
					monero_version: {
						type: "bytes",
						id: 15
					}
				}
			}
		}
	},
	MoneroTransactionInitAck: {
		fields: {
			hmacs: {
				rule: "repeated",
				type: "bytes",
				id: 1
			},
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 2
			}
		}
	},
	MoneroTransactionSetInputRequest: {
		fields: {
			src_entr: {
				type: "MoneroTransactionSourceEntry",
				id: 1
			}
		}
	},
	MoneroTransactionSetInputAck: {
		fields: {
			vini: {
				type: "bytes",
				id: 1
			},
			vini_hmac: {
				type: "bytes",
				id: 2
			},
			pseudo_out: {
				type: "bytes",
				id: 3
			},
			pseudo_out_hmac: {
				type: "bytes",
				id: 4
			},
			pseudo_out_alpha: {
				type: "bytes",
				id: 5
			},
			spend_key: {
				type: "bytes",
				id: 6
			}
		}
	},
	MoneroTransactionInputsPermutationRequest: {
		fields: {
			perm: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			}
		}
	},
	MoneroTransactionInputsPermutationAck: {
		fields: {
		}
	},
	MoneroTransactionInputViniRequest: {
		fields: {
			src_entr: {
				type: "MoneroTransactionSourceEntry",
				id: 1
			},
			vini: {
				type: "bytes",
				id: 2
			},
			vini_hmac: {
				type: "bytes",
				id: 3
			},
			pseudo_out: {
				type: "bytes",
				id: 4
			},
			pseudo_out_hmac: {
				type: "bytes",
				id: 5
			},
			orig_idx: {
				type: "uint32",
				id: 6
			}
		}
	},
	MoneroTransactionInputViniAck: {
		fields: {
		}
	},
	MoneroTransactionAllInputsSetRequest: {
		fields: {
		}
	},
	MoneroTransactionAllInputsSetAck: {
		fields: {
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 1
			}
		}
	},
	MoneroTransactionSetOutputRequest: {
		fields: {
			dst_entr: {
				type: "MoneroTransactionDestinationEntry",
				id: 1
			},
			dst_entr_hmac: {
				type: "bytes",
				id: 2
			},
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 3
			},
			is_offloaded_bp: {
				type: "bool",
				id: 4
			}
		}
	},
	MoneroTransactionSetOutputAck: {
		fields: {
			tx_out: {
				type: "bytes",
				id: 1
			},
			vouti_hmac: {
				type: "bytes",
				id: 2
			},
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 3
			},
			out_pk: {
				type: "bytes",
				id: 4
			},
			ecdh_info: {
				type: "bytes",
				id: 5
			}
		}
	},
	MoneroTransactionAllOutSetRequest: {
		fields: {
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 1
			}
		}
	},
	MoneroTransactionAllOutSetAck: {
		fields: {
			extra: {
				type: "bytes",
				id: 1
			},
			tx_prefix_hash: {
				type: "bytes",
				id: 2
			},
			rv: {
				type: "MoneroRingCtSig",
				id: 4
			},
			full_message_hash: {
				type: "bytes",
				id: 5
			}
		},
		nested: {
			MoneroRingCtSig: {
				fields: {
					txn_fee: {
						type: "uint64",
						id: 1
					},
					message: {
						type: "bytes",
						id: 2
					},
					rv_type: {
						type: "uint32",
						id: 3
					}
				}
			}
		}
	},
	MoneroTransactionSignInputRequest: {
		fields: {
			src_entr: {
				type: "MoneroTransactionSourceEntry",
				id: 1
			},
			vini: {
				type: "bytes",
				id: 2
			},
			vini_hmac: {
				type: "bytes",
				id: 3
			},
			pseudo_out: {
				type: "bytes",
				id: 4
			},
			pseudo_out_hmac: {
				type: "bytes",
				id: 5
			},
			pseudo_out_alpha: {
				type: "bytes",
				id: 6
			},
			spend_key: {
				type: "bytes",
				id: 7
			},
			orig_idx: {
				type: "uint32",
				id: 8
			}
		}
	},
	MoneroTransactionSignInputAck: {
		fields: {
			signature: {
				type: "bytes",
				id: 1
			},
			pseudo_out: {
				type: "bytes",
				id: 2
			}
		}
	},
	MoneroTransactionFinalRequest: {
		fields: {
		}
	},
	MoneroTransactionFinalAck: {
		fields: {
			cout_key: {
				type: "bytes",
				id: 1
			},
			salt: {
				type: "bytes",
				id: 2
			},
			rand_mult: {
				type: "bytes",
				id: 3
			},
			tx_enc_keys: {
				type: "bytes",
				id: 4
			},
			opening_key: {
				type: "bytes",
				id: 5
			}
		}
	},
	MoneroKeyImageExportInitRequest: {
		fields: {
			num: {
				type: "uint64",
				id: 1
			},
			hash: {
				type: "bytes",
				id: 2
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 3,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 4
			},
			subs: {
				rule: "repeated",
				type: "MoneroSubAddressIndicesList",
				id: 5
			}
		},
		nested: {
			MoneroSubAddressIndicesList: {
				fields: {
					account: {
						type: "uint32",
						id: 1
					},
					minor_indices: {
						rule: "repeated",
						type: "uint32",
						id: 2,
						options: {
							packed: false
						}
					}
				}
			}
		}
	},
	MoneroKeyImageExportInitAck: {
		fields: {
		}
	},
	MoneroKeyImageSyncStepRequest: {
		fields: {
			tdis: {
				rule: "repeated",
				type: "MoneroTransferDetails",
				id: 1
			}
		},
		nested: {
			MoneroTransferDetails: {
				fields: {
					out_key: {
						type: "bytes",
						id: 1
					},
					tx_pub_key: {
						type: "bytes",
						id: 2
					},
					additional_tx_pub_keys: {
						rule: "repeated",
						type: "bytes",
						id: 3
					},
					internal_output_index: {
						type: "uint64",
						id: 4
					},
					sub_addr_major: {
						type: "uint32",
						id: 5
					},
					sub_addr_minor: {
						type: "uint32",
						id: 6
					}
				}
			}
		}
	},
	MoneroKeyImageSyncStepAck: {
		fields: {
			kis: {
				rule: "repeated",
				type: "MoneroExportedKeyImage",
				id: 1
			}
		},
		nested: {
			MoneroExportedKeyImage: {
				fields: {
					iv: {
						type: "bytes",
						id: 1
					},
					blob: {
						type: "bytes",
						id: 3
					}
				}
			}
		}
	},
	MoneroKeyImageSyncFinalRequest: {
		fields: {
		}
	},
	MoneroKeyImageSyncFinalAck: {
		fields: {
			enc_key: {
				type: "bytes",
				id: 1
			}
		}
	},
	MoneroGetTxKeyRequest: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 2
			},
			salt1: {
				type: "bytes",
				id: 3
			},
			salt2: {
				type: "bytes",
				id: 4
			},
			tx_enc_keys: {
				type: "bytes",
				id: 5
			},
			tx_prefix_hash: {
				type: "bytes",
				id: 6
			},
			reason: {
				type: "uint32",
				id: 7
			},
			view_public_key: {
				type: "bytes",
				id: 8
			}
		}
	},
	MoneroGetTxKeyAck: {
		fields: {
			salt: {
				type: "bytes",
				id: 1
			},
			tx_keys: {
				type: "bytes",
				id: 2
			},
			tx_derivations: {
				type: "bytes",
				id: 3
			}
		}
	},
	MoneroLiveRefreshStartRequest: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 2
			}
		}
	},
	MoneroLiveRefreshStartAck: {
		fields: {
		}
	},
	MoneroLiveRefreshStepRequest: {
		fields: {
			out_key: {
				type: "bytes",
				id: 1
			},
			recv_deriv: {
				type: "bytes",
				id: 2
			},
			real_out_idx: {
				type: "uint64",
				id: 3
			},
			sub_addr_major: {
				type: "uint32",
				id: 4
			},
			sub_addr_minor: {
				type: "uint32",
				id: 5
			}
		}
	},
	MoneroLiveRefreshStepAck: {
		fields: {
			salt: {
				type: "bytes",
				id: 1
			},
			key_image: {
				type: "bytes",
				id: 2
			}
		}
	},
	MoneroLiveRefreshFinalRequest: {
		fields: {
		}
	},
	MoneroLiveRefreshFinalAck: {
		fields: {
		}
	},
	DebugMoneroDiagRequest: {
		fields: {
			ins: {
				type: "uint64",
				id: 1
			},
			p1: {
				type: "uint64",
				id: 2
			},
			p2: {
				type: "uint64",
				id: 3
			},
			pd: {
				rule: "repeated",
				type: "uint64",
				id: 4,
				options: {
					packed: false
				}
			},
			data1: {
				type: "bytes",
				id: 5
			},
			data2: {
				type: "bytes",
				id: 6
			}
		}
	},
	DebugMoneroDiagAck: {
		fields: {
			ins: {
				type: "uint64",
				id: 1
			},
			p1: {
				type: "uint64",
				id: 2
			},
			p2: {
				type: "uint64",
				id: 3
			},
			pd: {
				rule: "repeated",
				type: "uint64",
				id: 4,
				options: {
					packed: false
				}
			},
			data1: {
				type: "bytes",
				id: 5
			},
			data2: {
				type: "bytes",
				id: 6
			}
		}
	},
	NearGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	NearAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	NearSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	NearSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	NEMGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network: {
				type: "uint32",
				id: 2
			},
			show_display: {
				type: "bool",
				id: 3
			}
		}
	},
	NEMAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	NEMSignTx: {
		fields: {
			transaction: {
				type: "NEMTransactionCommon",
				id: 1
			},
			multisig: {
				type: "NEMTransactionCommon",
				id: 2
			},
			transfer: {
				type: "NEMTransfer",
				id: 3
			},
			cosigning: {
				type: "bool",
				id: 4
			},
			provision_namespace: {
				type: "NEMProvisionNamespace",
				id: 5
			},
			mosaic_creation: {
				type: "NEMMosaicCreation",
				id: 6
			},
			supply_change: {
				type: "NEMMosaicSupplyChange",
				id: 7
			},
			aggregate_modification: {
				type: "NEMAggregateModification",
				id: 8
			},
			importance_transfer: {
				type: "NEMImportanceTransfer",
				id: 9
			}
		},
		nested: {
			NEMTransactionCommon: {
				fields: {
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 1,
						options: {
							packed: false
						}
					},
					network: {
						type: "uint32",
						id: 2
					},
					timestamp: {
						type: "uint32",
						id: 3
					},
					fee: {
						type: "uint64",
						id: 4
					},
					deadline: {
						type: "uint32",
						id: 5
					},
					signer: {
						type: "bytes",
						id: 6
					}
				}
			},
			NEMTransfer: {
				fields: {
					recipient: {
						type: "string",
						id: 1
					},
					amount: {
						type: "uint64",
						id: 2
					},
					payload: {
						type: "bytes",
						id: 3
					},
					public_key: {
						type: "bytes",
						id: 4
					},
					mosaics: {
						rule: "repeated",
						type: "NEMMosaic",
						id: 5
					}
				},
				nested: {
					NEMMosaic: {
						fields: {
							namespace: {
								type: "string",
								id: 1
							},
							mosaic: {
								type: "string",
								id: 2
							},
							quantity: {
								type: "uint64",
								id: 3
							}
						}
					}
				}
			},
			NEMProvisionNamespace: {
				fields: {
					namespace: {
						type: "string",
						id: 1
					},
					parent: {
						type: "string",
						id: 2
					},
					sink: {
						type: "string",
						id: 3
					},
					fee: {
						type: "uint64",
						id: 4
					}
				}
			},
			NEMMosaicCreation: {
				fields: {
					definition: {
						type: "NEMMosaicDefinition",
						id: 1
					},
					sink: {
						type: "string",
						id: 2
					},
					fee: {
						type: "uint64",
						id: 3
					}
				},
				nested: {
					NEMMosaicDefinition: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							ticker: {
								type: "string",
								id: 2
							},
							namespace: {
								type: "string",
								id: 3
							},
							mosaic: {
								type: "string",
								id: 4
							},
							divisibility: {
								type: "uint32",
								id: 5
							},
							levy: {
								type: "NEMMosaicLevy",
								id: 6
							},
							fee: {
								type: "uint64",
								id: 7
							},
							levy_address: {
								type: "string",
								id: 8
							},
							levy_namespace: {
								type: "string",
								id: 9
							},
							levy_mosaic: {
								type: "string",
								id: 10
							},
							supply: {
								type: "uint64",
								id: 11
							},
							mutable_supply: {
								type: "bool",
								id: 12
							},
							transferable: {
								type: "bool",
								id: 13
							},
							description: {
								type: "string",
								id: 14
							},
							networks: {
								rule: "repeated",
								type: "uint32",
								id: 15,
								options: {
									packed: false
								}
							}
						},
						nested: {
							NEMMosaicLevy: {
								values: {
									MosaicLevy_Absolute: 1,
									MosaicLevy_Percentile: 2
								}
							}
						}
					}
				}
			},
			NEMMosaicSupplyChange: {
				fields: {
					namespace: {
						type: "string",
						id: 1
					},
					mosaic: {
						type: "string",
						id: 2
					},
					type: {
						type: "NEMSupplyChangeType",
						id: 3
					},
					delta: {
						type: "uint64",
						id: 4
					}
				},
				nested: {
					NEMSupplyChangeType: {
						values: {
							SupplyChange_Increase: 1,
							SupplyChange_Decrease: 2
						}
					}
				}
			},
			NEMAggregateModification: {
				fields: {
					modifications: {
						rule: "repeated",
						type: "NEMCosignatoryModification",
						id: 1
					},
					relative_change: {
						type: "sint32",
						id: 2
					}
				},
				nested: {
					NEMCosignatoryModification: {
						fields: {
							type: {
								type: "NEMModificationType",
								id: 1
							},
							public_key: {
								type: "bytes",
								id: 2
							}
						},
						nested: {
							NEMModificationType: {
								values: {
									CosignatoryModification_Add: 1,
									CosignatoryModification_Delete: 2
								}
							}
						}
					}
				}
			},
			NEMImportanceTransfer: {
				fields: {
					mode: {
						type: "NEMImportanceTransferMode",
						id: 1
					},
					public_key: {
						type: "bytes",
						id: 2
					}
				},
				nested: {
					NEMImportanceTransferMode: {
						values: {
							ImportanceTransfer_Activate: 1,
							ImportanceTransfer_Deactivate: 2
						}
					}
				}
			}
		}
	},
	NEMSignedTx: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	NEMDecryptMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network: {
				type: "uint32",
				id: 2
			},
			public_key: {
				type: "bytes",
				id: 3
			},
			payload: {
				type: "bytes",
				id: 4
			}
		}
	},
	NEMDecryptedMessage: {
		fields: {
			payload: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	NervosGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network: {
				rule: "required",
				type: "string",
				id: 2
			},
			show_display: {
				type: "bool",
				id: 3
			}
		}
	},
	NervosAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	NervosSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			data_initial_chunk: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			witness_buffer: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			network: {
				rule: "required",
				type: "string",
				id: 4
			},
			data_length: {
				type: "uint32",
				id: 5
			}
		}
	},
	NervosSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			address: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	NervosTxRequest: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			public_key: {
				type: "bytes",
				id: 2
			},
			signature: {
				type: "bytes",
				id: 3
			}
		}
	},
	NervosTxAck: {
		fields: {
			data_chunk: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	NexaGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			prefix: {
				type: "string",
				id: 3,
				options: {
					"default": "nexa"
				}
			}
		}
	},
	NexaAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			},
			public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	NexaSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			prefix: {
				type: "string",
				id: 3,
				options: {
					"default": "nexa"
				}
			},
			input_count: {
				type: "uint32",
				id: 4,
				options: {
					"default": 1
				}
			}
		}
	},
	NexaTxInputRequest: {
		fields: {
			request_index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			signature: {
				type: "bytes",
				id: 2
			}
		}
	},
	NexaTxInputAck: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_message: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	NexaSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	NostrGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	NostrPublicKey: {
		fields: {
			publickey: {
				type: "string",
				id: 1
			},
			npub: {
				type: "string",
				id: 2
			}
		}
	},
	NostrSignEvent: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			event: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	NostrSignedEvent: {
		fields: {
			event: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	NostrSignSchnorr: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			hash: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	NostrSignedSchnorr: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	NostrEncryptMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			pubkey: {
				rule: "required",
				type: "string",
				id: 2
			},
			msg: {
				rule: "required",
				type: "string",
				id: 3
			},
			show_display: {
				type: "bool",
				id: 4
			}
		}
	},
	NostrEncryptedMessage: {
		fields: {
			msg: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	NostrDecryptMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			pubkey: {
				rule: "required",
				type: "string",
				id: 2
			},
			msg: {
				rule: "required",
				type: "string",
				id: 3
			},
			show_display: {
				type: "bool",
				id: 4
			}
		}
	},
	NostrDecryptedMessage: {
		fields: {
			msg: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	PolkadotGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			prefix: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			network: {
				rule: "required",
				type: "string",
				id: 3
			},
			show_display: {
				type: "bool",
				id: 4
			}
		}
	},
	PolkadotAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			},
			public_key: {
				type: "string",
				id: 2
			}
		}
	},
	PolkadotSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			network: {
				rule: "required",
				type: "string",
				id: 3
			}
		}
	},
	PolkadotSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	RippleGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	RippleAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	RippleSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			fee: {
				type: "uint64",
				id: 2
			},
			flags: {
				type: "uint32",
				id: 3
			},
			sequence: {
				type: "uint32",
				id: 4
			},
			last_ledger_sequence: {
				type: "uint32",
				id: 5
			},
			payment: {
				type: "RipplePayment",
				id: 6
			}
		},
		nested: {
			RipplePayment: {
				fields: {
					amount: {
						rule: "required",
						type: "uint64",
						id: 1
					},
					destination: {
						rule: "required",
						type: "string",
						id: 2
					},
					destination_tag: {
						type: "uint32",
						id: 3
					}
				}
			}
		}
	},
	RippleSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			serialized_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	ScdoGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	ScdoAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	ScdoSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			nonce: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			gas_price: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			gas_limit: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			to: {
				rule: "required",
				type: "string",
				id: 5
			},
			value: {
				rule: "required",
				type: "bytes",
				id: 6
			},
			timestamp: {
				type: "bytes",
				id: 7
			},
			data_initial_chunk: {
				type: "bytes",
				id: 8,
				options: {
					"default": ""
				}
			},
			data_length: {
				type: "uint32",
				id: 9,
				options: {
					"default": 0
				}
			},
			tx_type: {
				type: "uint32",
				id: 10,
				options: {
					"default": 0
				}
			}
		}
	},
	ScdoSignedTx: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			signature: {
				type: "bytes",
				id: 2
			}
		}
	},
	ScdoTxAck: {
		fields: {
			data_chunk: {
				type: "bytes",
				id: 1
			}
		}
	},
	ScdoSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				type: "bytes",
				id: 2
			}
		}
	},
	ScdoSignedMessage: {
		fields: {
			signature: {
				type: "bytes",
				id: 1
			},
			address: {
				type: "string",
				id: 2
			}
		}
	},
	SolanaGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	SolanaAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	SolanaSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SolanaSignedTx: {
		fields: {
			signature: {
				type: "bytes",
				id: 1
			}
		}
	},
	StarcoinGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	StarcoinAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	StarcoinGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	StarcoinPublicKey: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	StarcoinSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				type: "bytes",
				id: 2
			}
		}
	},
	StarcoinSignedTx: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	StarcoinSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				type: "bytes",
				id: 2
			}
		}
	},
	StarcoinMessageSignature: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	StarcoinVerifyMessage: {
		fields: {
			public_key: {
				type: "bytes",
				id: 1
			},
			signature: {
				type: "bytes",
				id: 2
			},
			message: {
				type: "bytes",
				id: 3
			}
		}
	},
	StellarAssetType: {
		values: {
			NATIVE: 0,
			ALPHANUM4: 1,
			ALPHANUM12: 2
		}
	},
	StellarAsset: {
		fields: {
			type: {
				rule: "required",
				type: "StellarAssetType",
				id: 1
			},
			code: {
				type: "string",
				id: 2
			},
			issuer: {
				type: "string",
				id: 3
			}
		}
	},
	StellarGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	StellarAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	StellarSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			network_passphrase: {
				rule: "required",
				type: "string",
				id: 3
			},
			source_account: {
				rule: "required",
				type: "string",
				id: 4
			},
			fee: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			sequence_number: {
				rule: "required",
				type: "uint64",
				id: 6
			},
			timebounds_start: {
				rule: "required",
				type: "uint32",
				id: 8
			},
			timebounds_end: {
				rule: "required",
				type: "uint32",
				id: 9
			},
			memo_type: {
				rule: "required",
				type: "StellarMemoType",
				id: 10
			},
			memo_text: {
				type: "string",
				id: 11
			},
			memo_id: {
				type: "uint64",
				id: 12
			},
			memo_hash: {
				type: "bytes",
				id: 13
			},
			num_operations: {
				rule: "required",
				type: "uint32",
				id: 14
			}
		},
		nested: {
			StellarMemoType: {
				values: {
					NONE: 0,
					TEXT: 1,
					ID: 2,
					HASH: 3,
					RETURN: 4
				}
			}
		}
	},
	StellarTxOpRequest: {
		fields: {
		}
	},
	StellarPaymentOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			destination_account: {
				rule: "required",
				type: "string",
				id: 2
			},
			asset: {
				rule: "required",
				type: "StellarAsset",
				id: 3
			},
			amount: {
				rule: "required",
				type: "sint64",
				id: 4
			}
		}
	},
	StellarCreateAccountOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			new_account: {
				rule: "required",
				type: "string",
				id: 2
			},
			starting_balance: {
				rule: "required",
				type: "sint64",
				id: 3
			}
		}
	},
	StellarPathPaymentStrictReceiveOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			send_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			send_max: {
				rule: "required",
				type: "sint64",
				id: 3
			},
			destination_account: {
				rule: "required",
				type: "string",
				id: 4
			},
			destination_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 5
			},
			destination_amount: {
				rule: "required",
				type: "sint64",
				id: 6
			},
			paths: {
				rule: "repeated",
				type: "StellarAsset",
				id: 7
			}
		}
	},
	StellarPathPaymentStrictSendOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			send_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			send_amount: {
				rule: "required",
				type: "sint64",
				id: 3
			},
			destination_account: {
				rule: "required",
				type: "string",
				id: 4
			},
			destination_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 5
			},
			destination_min: {
				rule: "required",
				type: "sint64",
				id: 6
			},
			paths: {
				rule: "repeated",
				type: "StellarAsset",
				id: 7
			}
		}
	},
	StellarManageSellOfferOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			selling_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			buying_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 3
			},
			amount: {
				rule: "required",
				type: "sint64",
				id: 4
			},
			price_n: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			price_d: {
				rule: "required",
				type: "uint32",
				id: 6
			},
			offer_id: {
				rule: "required",
				type: "uint64",
				id: 7
			}
		}
	},
	StellarManageBuyOfferOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			selling_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			buying_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 3
			},
			amount: {
				rule: "required",
				type: "sint64",
				id: 4
			},
			price_n: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			price_d: {
				rule: "required",
				type: "uint32",
				id: 6
			},
			offer_id: {
				rule: "required",
				type: "uint64",
				id: 7
			}
		}
	},
	StellarCreatePassiveSellOfferOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			selling_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			buying_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 3
			},
			amount: {
				rule: "required",
				type: "sint64",
				id: 4
			},
			price_n: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			price_d: {
				rule: "required",
				type: "uint32",
				id: 6
			}
		}
	},
	StellarSetOptionsOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			inflation_destination_account: {
				type: "string",
				id: 2
			},
			clear_flags: {
				type: "uint32",
				id: 3
			},
			set_flags: {
				type: "uint32",
				id: 4
			},
			master_weight: {
				type: "uint32",
				id: 5
			},
			low_threshold: {
				type: "uint32",
				id: 6
			},
			medium_threshold: {
				type: "uint32",
				id: 7
			},
			high_threshold: {
				type: "uint32",
				id: 8
			},
			home_domain: {
				type: "string",
				id: 9
			},
			signer_type: {
				type: "StellarSignerType",
				id: 10
			},
			signer_key: {
				type: "bytes",
				id: 11
			},
			signer_weight: {
				type: "uint32",
				id: 12
			}
		},
		nested: {
			StellarSignerType: {
				values: {
					ACCOUNT: 0,
					PRE_AUTH: 1,
					HASH: 2
				}
			}
		}
	},
	StellarChangeTrustOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			limit: {
				rule: "required",
				type: "uint64",
				id: 3
			}
		}
	},
	StellarAllowTrustOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			trusted_account: {
				rule: "required",
				type: "string",
				id: 2
			},
			asset_type: {
				rule: "required",
				type: "StellarAssetType",
				id: 3
			},
			asset_code: {
				type: "string",
				id: 4
			},
			is_authorized: {
				rule: "required",
				type: "bool",
				id: 5
			}
		}
	},
	StellarAccountMergeOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			destination_account: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	StellarManageDataOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			key: {
				rule: "required",
				type: "string",
				id: 2
			},
			value: {
				type: "bytes",
				id: 3
			}
		}
	},
	StellarBumpSequenceOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			bump_to: {
				rule: "required",
				type: "uint64",
				id: 2
			}
		}
	},
	StellarSignedTx: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SuiGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	SuiAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	SuiSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			data_initial_chunk: {
				type: "bytes",
				id: 3,
				options: {
					"default": ""
				}
			},
			data_length: {
				type: "uint32",
				id: 4
			}
		}
	},
	SuiSignedTx: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SuiTxRequest: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			public_key: {
				type: "bytes",
				id: 2
			},
			signature: {
				type: "bytes",
				id: 3
			}
		}
	},
	SuiTxAck: {
		fields: {
			data_chunk: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	SuiSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SuiMessageSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			address: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	TezosGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	TezosAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	TezosGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	TezosPublicKey: {
		fields: {
			public_key: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	TezosSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			branch: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			reveal: {
				type: "TezosRevealOp",
				id: 3
			},
			transaction: {
				type: "TezosTransactionOp",
				id: 4
			},
			origination: {
				type: "TezosOriginationOp",
				id: 5
			},
			delegation: {
				type: "TezosDelegationOp",
				id: 6
			},
			proposal: {
				type: "TezosProposalOp",
				id: 7
			},
			ballot: {
				type: "TezosBallotOp",
				id: 8
			}
		},
		nested: {
			TezosContractID: {
				fields: {
					tag: {
						rule: "required",
						type: "TezosContractType",
						id: 1
					},
					hash: {
						rule: "required",
						type: "bytes",
						id: 2
					}
				},
				nested: {
					TezosContractType: {
						values: {
							Implicit: 0,
							Originated: 1
						}
					}
				}
			},
			TezosRevealOp: {
				fields: {
					source: {
						rule: "required",
						type: "bytes",
						id: 7
					},
					fee: {
						rule: "required",
						type: "uint64",
						id: 2
					},
					counter: {
						rule: "required",
						type: "uint64",
						id: 3
					},
					gas_limit: {
						rule: "required",
						type: "uint64",
						id: 4
					},
					storage_limit: {
						rule: "required",
						type: "uint64",
						id: 5
					},
					public_key: {
						rule: "required",
						type: "bytes",
						id: 6
					}
				}
			},
			TezosTransactionOp: {
				fields: {
					source: {
						rule: "required",
						type: "bytes",
						id: 9
					},
					fee: {
						rule: "required",
						type: "uint64",
						id: 2
					},
					counter: {
						rule: "required",
						type: "uint64",
						id: 3
					},
					gas_limit: {
						rule: "required",
						type: "uint64",
						id: 4
					},
					storage_limit: {
						rule: "required",
						type: "uint64",
						id: 5
					},
					amount: {
						rule: "required",
						type: "uint64",
						id: 6
					},
					destination: {
						rule: "required",
						type: "TezosContractID",
						id: 7
					},
					parameters: {
						type: "bytes",
						id: 8
					},
					parameters_manager: {
						type: "TezosParametersManager",
						id: 10
					}
				},
				nested: {
					TezosParametersManager: {
						fields: {
							set_delegate: {
								type: "bytes",
								id: 1
							},
							cancel_delegate: {
								type: "bool",
								id: 2
							},
							transfer: {
								type: "TezosManagerTransfer",
								id: 3
							}
						},
						nested: {
							TezosManagerTransfer: {
								fields: {
									destination: {
										type: "TezosContractID",
										id: 1
									},
									amount: {
										type: "uint64",
										id: 2
									}
								}
							}
						}
					}
				}
			},
			TezosOriginationOp: {
				fields: {
					source: {
						rule: "required",
						type: "bytes",
						id: 12
					},
					fee: {
						rule: "required",
						type: "uint64",
						id: 2
					},
					counter: {
						rule: "required",
						type: "uint64",
						id: 3
					},
					gas_limit: {
						rule: "required",
						type: "uint64",
						id: 4
					},
					storage_limit: {
						rule: "required",
						type: "uint64",
						id: 5
					},
					manager_pubkey: {
						type: "bytes",
						id: 6
					},
					balance: {
						rule: "required",
						type: "uint64",
						id: 7
					},
					spendable: {
						type: "bool",
						id: 8
					},
					delegatable: {
						type: "bool",
						id: 9
					},
					delegate: {
						type: "bytes",
						id: 10
					},
					script: {
						rule: "required",
						type: "bytes",
						id: 11
					}
				}
			},
			TezosDelegationOp: {
				fields: {
					source: {
						rule: "required",
						type: "bytes",
						id: 7
					},
					fee: {
						rule: "required",
						type: "uint64",
						id: 2
					},
					counter: {
						rule: "required",
						type: "uint64",
						id: 3
					},
					gas_limit: {
						rule: "required",
						type: "uint64",
						id: 4
					},
					storage_limit: {
						rule: "required",
						type: "uint64",
						id: 5
					},
					delegate: {
						rule: "required",
						type: "bytes",
						id: 6
					}
				}
			},
			TezosProposalOp: {
				fields: {
					source: {
						type: "bytes",
						id: 1
					},
					period: {
						type: "uint64",
						id: 2
					},
					proposals: {
						rule: "repeated",
						type: "bytes",
						id: 4
					}
				}
			},
			TezosBallotOp: {
				fields: {
					source: {
						type: "bytes",
						id: 1
					},
					period: {
						type: "uint64",
						id: 2
					},
					proposal: {
						type: "bytes",
						id: 3
					},
					ballot: {
						type: "TezosBallotType",
						id: 4
					}
				},
				nested: {
					TezosBallotType: {
						values: {
							Yay: 0,
							Nay: 1,
							Pass: 2
						}
					}
				}
			}
		}
	},
	TezosSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "string",
				id: 1
			},
			sig_op_contents: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			operation_hash: {
				rule: "required",
				type: "string",
				id: 3
			}
		}
	},
	TonWalletVersion: {
		values: {
			V4R2: 3
		}
	},
	TonWorkChain: {
		values: {
			BASECHAIN: 0,
			MASTERCHAIN: 1
		}
	},
	TonGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			wallet_version: {
				type: "TonWalletVersion",
				id: 3,
				options: {
					"default": "V4R2"
				}
			},
			is_bounceable: {
				type: "bool",
				id: 4,
				options: {
					"default": false
				}
			},
			is_testnet_only: {
				type: "bool",
				id: 5,
				options: {
					"default": false
				}
			},
			workchain: {
				type: "TonWorkChain",
				id: 6,
				options: {
					"default": "BASECHAIN"
				}
			},
			wallet_id: {
				type: "uint32",
				id: 7,
				options: {
					"default": 698983191
				}
			}
		}
	},
	TonAddress: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			address: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	TonSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			destination: {
				rule: "required",
				type: "string",
				id: 2
			},
			jetton_master_address: {
				type: "string",
				id: 3
			},
			jetton_wallet_address: {
				type: "string",
				id: 4
			},
			ton_amount: {
				rule: "required",
				type: "uint64",
				id: 5
			},
			jetton_amount: {
				type: "uint64",
				id: 6
			},
			fwd_fee: {
				type: "uint64",
				id: 7,
				options: {
					"default": 0
				}
			},
			comment: {
				type: "string",
				id: 8
			},
			is_raw_data: {
				type: "bool",
				id: 9,
				options: {
					"default": false
				}
			},
			mode: {
				type: "uint32",
				id: 10,
				options: {
					"default": 3
				}
			},
			seqno: {
				rule: "required",
				type: "uint32",
				id: 11
			},
			expire_at: {
				rule: "required",
				type: "uint64",
				id: 12
			},
			wallet_version: {
				type: "TonWalletVersion",
				id: 13,
				options: {
					"default": "V4R2"
				}
			},
			wallet_id: {
				type: "uint32",
				id: 14,
				options: {
					"default": 698983191
				}
			},
			workchain: {
				type: "TonWorkChain",
				id: 15,
				options: {
					"default": "BASECHAIN"
				}
			},
			is_bounceable: {
				type: "bool",
				id: 16,
				options: {
					"default": false
				}
			},
			is_testnet_only: {
				type: "bool",
				id: 17,
				options: {
					"default": false
				}
			},
			ext_destination: {
				rule: "repeated",
				type: "string",
				id: 18
			},
			ext_ton_amount: {
				rule: "repeated",
				type: "uint64",
				id: 19,
				options: {
					packed: false
				}
			},
			ext_payload: {
				rule: "repeated",
				type: "string",
				id: 20
			},
			jetton_amount_bytes: {
				type: "bytes",
				id: 21
			}
		}
	},
	TonSignedMessage: {
		fields: {
			signature: {
				type: "bytes",
				id: 1
			},
			signning_message: {
				type: "bytes",
				id: 2
			}
		}
	},
	TonSignProof: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			appdomain: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			comment: {
				type: "bytes",
				id: 3
			},
			expire_at: {
				rule: "required",
				type: "uint64",
				id: 4
			},
			wallet_version: {
				type: "TonWalletVersion",
				id: 5,
				options: {
					"default": "V4R2"
				}
			},
			wallet_id: {
				type: "uint32",
				id: 6,
				options: {
					"default": 698983191
				}
			},
			workchain: {
				type: "TonWorkChain",
				id: 7,
				options: {
					"default": "BASECHAIN"
				}
			},
			is_bounceable: {
				type: "bool",
				id: 8,
				options: {
					"default": false
				}
			},
			is_testnet_only: {
				type: "bool",
				id: 9,
				options: {
					"default": false
				}
			}
		}
	},
	TonSignedProof: {
		fields: {
			signature: {
				type: "bytes",
				id: 1
			}
		}
	},
	TronGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	TronAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	TronSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			ref_block_bytes: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			ref_block_hash: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			expiration: {
				rule: "required",
				type: "uint64",
				id: 4
			},
			data: {
				type: "string",
				id: 5
			},
			contract: {
				rule: "required",
				type: "TronContract",
				id: 6
			},
			timestamp: {
				rule: "required",
				type: "uint64",
				id: 7
			},
			fee_limit: {
				type: "uint64",
				id: 8
			}
		},
		nested: {
			TronContract: {
				fields: {
					transfer_contract: {
						type: "TronTransferContract",
						id: 2
					},
					freeze_balance_contract: {
						type: "TronFreezeBalanceContract",
						id: 11
					},
					unfreeze_balance_contract: {
						type: "TronUnfreezeBalanceContract",
						id: 12
					},
					withdraw_balance_contract: {
						type: "TronWithdrawBalanceContract",
						id: 13
					},
					trigger_smart_contract: {
						type: "TronTriggerSmartContract",
						id: 31
					},
					freeze_balance_v2_contract: {
						type: "TronFreezeBalanceV2Contract",
						id: 54
					},
					unfreeze_balance_v2_contract: {
						type: "TronUnfreezeBalanceV2Contract",
						id: 55
					},
					withdraw_expire_unfreeze_contract: {
						type: "TronWithdrawExpireUnfreezeContract",
						id: 56
					},
					delegate_resource_contract: {
						type: "TronDelegateResourceContract",
						id: 57
					},
					undelegate_resource_contract: {
						type: "TronUnDelegateResourceContract",
						id: 58
					}
				},
				nested: {
					TronTransferContract: {
						fields: {
							to_address: {
								type: "string",
								id: 2
							},
							amount: {
								type: "uint64",
								id: 3
							}
						}
					},
					TronTriggerSmartContract: {
						fields: {
							contract_address: {
								type: "string",
								id: 2
							},
							call_value: {
								type: "uint64",
								id: 3
							},
							data: {
								type: "bytes",
								id: 4
							},
							call_token_value: {
								type: "uint64",
								id: 5
							},
							asset_id: {
								type: "uint64",
								id: 6
							}
						}
					},
					TronResourceCode: {
						values: {
							BANDWIDTH: 0,
							ENERGY: 1
						}
					},
					TronFreezeBalanceContract: {
						fields: {
							frozen_balance: {
								type: "uint64",
								id: 1
							},
							frozen_duration: {
								type: "uint64",
								id: 2
							},
							resource: {
								type: "TronResourceCode",
								id: 3
							},
							receiver_address: {
								type: "string",
								id: 4
							}
						}
					},
					TronUnfreezeBalanceContract: {
						fields: {
							resource: {
								type: "TronResourceCode",
								id: 1
							},
							receiver_address: {
								type: "string",
								id: 2
							}
						}
					},
					TronWithdrawBalanceContract: {
						fields: {
							owner_address: {
								type: "bytes",
								id: 1
							}
						}
					},
					TronFreezeBalanceV2Contract: {
						fields: {
							frozen_balance: {
								type: "uint64",
								id: 2
							},
							resource: {
								type: "TronResourceCode",
								id: 3
							}
						}
					},
					TronUnfreezeBalanceV2Contract: {
						fields: {
							unfreeze_balance: {
								type: "uint64",
								id: 2
							},
							resource: {
								type: "TronResourceCode",
								id: 3
							}
						}
					},
					TronWithdrawExpireUnfreezeContract: {
						fields: {
						}
					},
					TronDelegateResourceContract: {
						fields: {
							resource: {
								type: "TronResourceCode",
								id: 2
							},
							balance: {
								type: "uint64",
								id: 3
							},
							receiver_address: {
								type: "string",
								id: 4
							},
							lock: {
								type: "bool",
								id: 5
							}
						}
					},
					TronUnDelegateResourceContract: {
						fields: {
							resource: {
								type: "TronResourceCode",
								id: 2
							},
							balance: {
								type: "uint64",
								id: 3
							},
							receiver_address: {
								type: "string",
								id: 4
							}
						}
					}
				}
			}
		}
	},
	TronSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			serialized_tx: {
				type: "bytes",
				id: 2
			}
		}
	},
	TronSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	TronMessageSignature: {
		fields: {
			address: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	WebAuthnListResidentCredentials: {
		fields: {
		}
	},
	WebAuthnAddResidentCredential: {
		fields: {
			credential_id: {
				type: "bytes",
				id: 1
			}
		}
	},
	WebAuthnRemoveResidentCredential: {
		fields: {
			index: {
				type: "uint32",
				id: 1
			}
		}
	},
	WebAuthnCredentials: {
		fields: {
			credentials: {
				rule: "repeated",
				type: "WebAuthnCredential",
				id: 1
			}
		},
		nested: {
			WebAuthnCredential: {
				fields: {
					index: {
						type: "uint32",
						id: 1
					},
					id: {
						type: "bytes",
						id: 2
					},
					rp_id: {
						type: "string",
						id: 3
					},
					rp_name: {
						type: "string",
						id: 4
					},
					user_id: {
						type: "bytes",
						id: 5
					},
					user_name: {
						type: "string",
						id: 6
					},
					user_display_name: {
						type: "string",
						id: 7
					},
					creation_time: {
						type: "uint32",
						id: 8
					},
					hmac_secret: {
						type: "bool",
						id: 9
					},
					use_sign_count: {
						type: "bool",
						id: 10
					},
					algorithm: {
						type: "sint32",
						id: 11
					},
					curve: {
						type: "sint32",
						id: 12
					}
				}
			}
		}
	},
	wire_in: {
		type: "bool",
		id: 50002,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_out: {
		type: "bool",
		id: 50003,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_debug_in: {
		type: "bool",
		id: 50004,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_debug_out: {
		type: "bool",
		id: 50005,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_tiny: {
		type: "bool",
		id: 50006,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_bootloader: {
		type: "bool",
		id: 50007,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_no_fsm: {
		type: "bool",
		id: 50008,
		extend: "google.protobuf.EnumValueOptions"
	},
	facotry: {
		type: "bool",
		id: 50501,
		extend: "google.protobuf.EnumValueOptions"
	},
	bitcoin_only: {
		type: "bool",
		id: 60000,
		extend: "google.protobuf.EnumValueOptions"
	},
	has_bitcoin_only_values: {
		type: "bool",
		id: 51001,
		extend: "google.protobuf.EnumOptions"
	},
	unstable: {
		type: "bool",
		id: 52001,
		extend: "google.protobuf.MessageOptions"
	},
	wire_type: {
		type: "uint32",
		id: 52002,
		extend: "google.protobuf.MessageOptions"
	},
	experimental: {
		type: "bool",
		id: 53001,
		extend: "google.protobuf.FieldOptions"
	},
	include_in_bitcoin_only: {
		type: "bool",
		id: 60000,
		extend: "google.protobuf.FileOptions"
	},
	CommandFlags: {
		values: {
			Default: 0,
			Factory_Only: 1
		}
	},
	MessageType: {
		options: {
			"(has_bitcoin_only_values)": true
		},
		values: {
			MessageType_Initialize: 0,
			MessageType_Ping: 1,
			MessageType_Success: 2,
			MessageType_Failure: 3,
			MessageType_ChangePin: 4,
			MessageType_WipeDevice: 5,
			MessageType_GetEntropy: 9,
			MessageType_Entropy: 10,
			MessageType_LoadDevice: 13,
			MessageType_ResetDevice: 14,
			MessageType_Features: 17,
			MessageType_PinMatrixRequest: 18,
			MessageType_PinMatrixAck: 19,
			MessageType_Cancel: 20,
			MessageType_LockDevice: 24,
			MessageType_ApplySettings: 25,
			MessageType_ButtonRequest: 26,
			MessageType_ButtonAck: 27,
			MessageType_ApplyFlags: 28,
			MessageType_BackupDevice: 34,
			MessageType_EntropyRequest: 35,
			MessageType_EntropyAck: 36,
			MessageType_PassphraseRequest: 41,
			MessageType_PassphraseAck: 42,
			MessageType_RecoveryDevice: 45,
			MessageType_WordRequest: 46,
			MessageType_WordAck: 47,
			MessageType_GetFeatures: 55,
			MessageType_SdProtect: 79,
			MessageType_ChangeWipeCode: 82,
			MessageType_EndSession: 83,
			MessageType_DoPreauthorized: 84,
			MessageType_PreauthorizedRequest: 85,
			MessageType_CancelAuthorization: 86,
			MessageType_RebootToBootloader: 87,
			MessageType_SetU2FCounter: 63,
			MessageType_GetNextU2FCounter: 80,
			MessageType_NextU2FCounter: 81,
			MessageType_Deprecated_PassphraseStateRequest: 77,
			MessageType_Deprecated_PassphraseStateAck: 78,
			MessageType_FirmwareErase: 6,
			MessageType_FirmwareErase_ex: 16,
			MessageType_FirmwareUpload: 7,
			MessageType_FirmwareRequest: 8,
			MessageType_SelfTest: 32,
			MessageType_Reboot: 30000,
			MessageType_FirmwareUpdateEmmc: 30001,
			MessageType_GetPublicKey: 11,
			MessageType_PublicKey: 12,
			MessageType_SignTx: 15,
			MessageType_TxRequest: 21,
			MessageType_TxAck: 22,
			MessageType_GetAddress: 29,
			MessageType_Address: 30,
			MessageType_SignMessage: 38,
			MessageType_VerifyMessage: 39,
			MessageType_MessageSignature: 40,
			MessageType_GetOwnershipId: 43,
			MessageType_OwnershipId: 44,
			MessageType_GetOwnershipProof: 49,
			MessageType_OwnershipProof: 50,
			MessageType_AuthorizeCoinJoin: 51,
			MessageType_SignPsbt: 10052,
			MessageType_SignedPsbt: 10053,
			MessageType_CipherKeyValue: 23,
			MessageType_CipheredKeyValue: 48,
			MessageType_SignIdentity: 53,
			MessageType_SignedIdentity: 54,
			MessageType_GetECDHSessionKey: 61,
			MessageType_ECDHSessionKey: 62,
			MessageType_CosiCommit: 71,
			MessageType_CosiCommitment: 72,
			MessageType_CosiSign: 73,
			MessageType_CosiSignature: 74,
			MessageType_BatchGetPublickeys: 10016,
			MessageType_EcdsaPublicKeys: 10017,
			MessageType_DebugLinkDecision: 100,
			MessageType_DebugLinkGetState: 101,
			MessageType_DebugLinkState: 102,
			MessageType_DebugLinkStop: 103,
			MessageType_DebugLinkLog: 104,
			MessageType_DebugLinkMemoryRead: 110,
			MessageType_DebugLinkMemory: 111,
			MessageType_DebugLinkMemoryWrite: 112,
			MessageType_DebugLinkFlashErase: 113,
			MessageType_DebugLinkLayout: 9001,
			MessageType_DebugLinkReseedRandom: 9002,
			MessageType_DebugLinkRecordScreen: 9003,
			MessageType_DebugLinkEraseSdCard: 9005,
			MessageType_DebugLinkWatchLayout: 9006,
			MessageType_EmmcFixPermission: 30100,
			MessageType_EmmcPath: 30101,
			MessageType_EmmcPathInfo: 30102,
			MessageType_EmmcFile: 30103,
			MessageType_EmmcFileRead: 30104,
			MessageType_EmmcFileWrite: 30105,
			MessageType_EmmcFileDelete: 30106,
			MessageType_EmmcDir: 30107,
			MessageType_EmmcDirList: 30108,
			MessageType_EmmcDirMake: 30109,
			MessageType_EmmcDirRemove: 30110,
			MessageType_EthereumGetPublicKey: 450,
			MessageType_EthereumPublicKey: 451,
			MessageType_EthereumGetAddress: 56,
			MessageType_EthereumAddress: 57,
			MessageType_EthereumSignTx: 58,
			MessageType_EthereumSignTxEIP1559: 452,
			MessageType_EthereumTxRequest: 59,
			MessageType_EthereumTxAck: 60,
			MessageType_EthereumSignMessage: 64,
			MessageType_EthereumVerifyMessage: 65,
			MessageType_EthereumMessageSignature: 66,
			MessageType_EthereumSignTypedData: 464,
			MessageType_EthereumTypedDataStructRequest: 465,
			MessageType_EthereumTypedDataStructAck: 466,
			MessageType_EthereumTypedDataValueRequest: 467,
			MessageType_EthereumTypedDataValueAck: 468,
			MessageType_EthereumTypedDataSignature: 469,
			MessageType_EthereumSignTypedHash: 470,
			MessageType_EthereumGetPublicKeyChargerWallet: 20100,
			MessageType_EthereumPublicKeyChargerWallet: 20101,
			MessageType_EthereumGetAddressChargerWallet: 20102,
			MessageType_EthereumAddressChargerWallet: 20103,
			MessageType_EthereumSignTxChargerWallet: 20104,
			MessageType_EthereumSignTxEIP1559ChargerWallet: 20105,
			MessageType_EthereumTxRequestChargerWallet: 20106,
			MessageType_EthereumTxAckChargerWallet: 20107,
			MessageType_EthereumSignMessageChargerWallet: 20108,
			MessageType_EthereumVerifyMessageChargerWallet: 20109,
			MessageType_EthereumMessageSignatureChargerWallet: 20110,
			MessageType_EthereumSignTypedDataChargerWallet: 20111,
			MessageType_EthereumTypedDataStructRequestChargerWallet: 20112,
			MessageType_EthereumTypedDataStructAckChargerWallet: 20113,
			MessageType_EthereumTypedDataValueRequestChargerWallet: 20114,
			MessageType_EthereumTypedDataValueAckChargerWallet: 20115,
			MessageType_EthereumTypedDataSignatureChargerWallet: 20116,
			MessageType_EthereumSignTypedHashChargerWallet: 20117,
			MessageType_NEMGetAddress: 67,
			MessageType_NEMAddress: 68,
			MessageType_NEMSignTx: 69,
			MessageType_NEMSignedTx: 70,
			MessageType_NEMDecryptMessage: 75,
			MessageType_NEMDecryptedMessage: 76,
			MessageType_TezosGetAddress: 150,
			MessageType_TezosAddress: 151,
			MessageType_TezosSignTx: 152,
			MessageType_TezosSignedTx: 153,
			MessageType_TezosGetPublicKey: 154,
			MessageType_TezosPublicKey: 155,
			MessageType_StellarSignTx: 202,
			MessageType_StellarTxOpRequest: 203,
			MessageType_StellarGetAddress: 207,
			MessageType_StellarAddress: 208,
			MessageType_StellarCreateAccountOp: 210,
			MessageType_StellarPaymentOp: 211,
			MessageType_StellarPathPaymentStrictReceiveOp: 212,
			MessageType_StellarManageSellOfferOp: 213,
			MessageType_StellarCreatePassiveSellOfferOp: 214,
			MessageType_StellarSetOptionsOp: 215,
			MessageType_StellarChangeTrustOp: 216,
			MessageType_StellarAllowTrustOp: 217,
			MessageType_StellarAccountMergeOp: 218,
			MessageType_StellarManageDataOp: 220,
			MessageType_StellarBumpSequenceOp: 221,
			MessageType_StellarManageBuyOfferOp: 222,
			MessageType_StellarPathPaymentStrictSendOp: 223,
			MessageType_StellarSignedTx: 230,
			MessageType_CardanoGetPublicKey: 305,
			MessageType_CardanoPublicKey: 306,
			MessageType_CardanoGetAddress: 307,
			MessageType_CardanoAddress: 308,
			MessageType_CardanoTxItemAck: 313,
			MessageType_CardanoTxAuxiliaryDataSupplement: 314,
			MessageType_CardanoTxWitnessRequest: 315,
			MessageType_CardanoTxWitnessResponse: 316,
			MessageType_CardanoTxHostAck: 317,
			MessageType_CardanoTxBodyHash: 318,
			MessageType_CardanoSignTxFinished: 319,
			MessageType_CardanoSignTxInit: 320,
			MessageType_CardanoTxInput: 321,
			MessageType_CardanoTxOutput: 322,
			MessageType_CardanoAssetGroup: 323,
			MessageType_CardanoToken: 324,
			MessageType_CardanoTxCertificate: 325,
			MessageType_CardanoTxWithdrawal: 326,
			MessageType_CardanoTxAuxiliaryData: 327,
			MessageType_CardanoPoolOwner: 328,
			MessageType_CardanoPoolRelayParameters: 329,
			MessageType_CardanoGetNativeScriptHash: 330,
			MessageType_CardanoNativeScriptHash: 331,
			MessageType_CardanoTxMint: 332,
			MessageType_CardanoTxCollateralInput: 333,
			MessageType_CardanoTxRequiredSigner: 334,
			MessageType_CardanoTxInlineDatumChunk: 335,
			MessageType_CardanoTxReferenceScriptChunk: 336,
			MessageType_CardanoTxReferenceInput: 337,
			MessageType_CardanoSignMessage: 350,
			MessageType_CardanoMessageSignature: 351,
			MessageType_RippleGetAddress: 400,
			MessageType_RippleAddress: 401,
			MessageType_RippleSignTx: 402,
			MessageType_RippleSignedTx: 403,
			MessageType_MoneroTransactionInitRequest: 501,
			MessageType_MoneroTransactionInitAck: 502,
			MessageType_MoneroTransactionSetInputRequest: 503,
			MessageType_MoneroTransactionSetInputAck: 504,
			MessageType_MoneroTransactionInputsPermutationRequest: 505,
			MessageType_MoneroTransactionInputsPermutationAck: 506,
			MessageType_MoneroTransactionInputViniRequest: 507,
			MessageType_MoneroTransactionInputViniAck: 508,
			MessageType_MoneroTransactionAllInputsSetRequest: 509,
			MessageType_MoneroTransactionAllInputsSetAck: 510,
			MessageType_MoneroTransactionSetOutputRequest: 511,
			MessageType_MoneroTransactionSetOutputAck: 512,
			MessageType_MoneroTransactionAllOutSetRequest: 513,
			MessageType_MoneroTransactionAllOutSetAck: 514,
			MessageType_MoneroTransactionSignInputRequest: 515,
			MessageType_MoneroTransactionSignInputAck: 516,
			MessageType_MoneroTransactionFinalRequest: 517,
			MessageType_MoneroTransactionFinalAck: 518,
			MessageType_MoneroKeyImageExportInitRequest: 530,
			MessageType_MoneroKeyImageExportInitAck: 531,
			MessageType_MoneroKeyImageSyncStepRequest: 532,
			MessageType_MoneroKeyImageSyncStepAck: 533,
			MessageType_MoneroKeyImageSyncFinalRequest: 534,
			MessageType_MoneroKeyImageSyncFinalAck: 535,
			MessageType_MoneroGetAddress: 540,
			MessageType_MoneroAddress: 541,
			MessageType_MoneroGetWatchKey: 542,
			MessageType_MoneroWatchKey: 543,
			MessageType_DebugMoneroDiagRequest: 546,
			MessageType_DebugMoneroDiagAck: 547,
			MessageType_MoneroGetTxKeyRequest: 550,
			MessageType_MoneroGetTxKeyAck: 551,
			MessageType_MoneroLiveRefreshStartRequest: 552,
			MessageType_MoneroLiveRefreshStartAck: 553,
			MessageType_MoneroLiveRefreshStepRequest: 554,
			MessageType_MoneroLiveRefreshStepAck: 555,
			MessageType_MoneroLiveRefreshFinalRequest: 556,
			MessageType_MoneroLiveRefreshFinalAck: 557,
			MessageType_EosGetPublicKey: 600,
			MessageType_EosPublicKey: 601,
			MessageType_EosSignTx: 602,
			MessageType_EosTxActionRequest: 603,
			MessageType_EosTxActionAck: 604,
			MessageType_EosSignedTx: 605,
			MessageType_BinanceGetAddress: 700,
			MessageType_BinanceAddress: 701,
			MessageType_BinanceGetPublicKey: 702,
			MessageType_BinancePublicKey: 703,
			MessageType_BinanceSignTx: 704,
			MessageType_BinanceTxRequest: 705,
			MessageType_BinanceTransferMsg: 706,
			MessageType_BinanceOrderMsg: 707,
			MessageType_BinanceCancelMsg: 708,
			MessageType_BinanceSignedTx: 709,
			MessageType_SolanaGetAddress: 10100,
			MessageType_SolanaAddress: 10101,
			MessageType_SolanaSignTx: 10102,
			MessageType_SolanaSignedTx: 10103,
			MessageType_StarcoinGetAddress: 10300,
			MessageType_StarcoinAddress: 10301,
			MessageType_StarcoinGetPublicKey: 10302,
			MessageType_StarcoinPublicKey: 10303,
			MessageType_StarcoinSignTx: 10304,
			MessageType_StarcoinSignedTx: 10305,
			MessageType_StarcoinSignMessage: 10306,
			MessageType_StarcoinMessageSignature: 10307,
			MessageType_StarcoinVerifyMessage: 10308,
			MessageType_AptosGetAddress: 10600,
			MessageType_AptosAddress: 10601,
			MessageType_AptosSignTx: 10602,
			MessageType_AptosSignedTx: 10603,
			MessageType_AptosSignMessage: 10604,
			MessageType_AptosMessageSignature: 10605,
			MessageType_WebAuthnListResidentCredentials: 800,
			MessageType_WebAuthnCredentials: 801,
			MessageType_WebAuthnAddResidentCredential: 802,
			MessageType_WebAuthnRemoveResidentCredential: 803,
			MessageType_BixinSeedOperate: 901,
			MessageType_BixinMessageSE: 902,
			MessageType_BixinOutMessageSE: 904,
			MessageType_BixinBackupRequest: 905,
			MessageType_BixinBackupAck: 906,
			MessageType_BixinRestoreRequest: 907,
			MessageType_BixinRestoreAck: 908,
			MessageType_BixinVerifyDeviceRequest: 909,
			MessageType_BixinVerifyDeviceAck: 910,
			MessageType_BixinWhiteListRequest: 911,
			MessageType_BixinWhiteListAck: 912,
			MessageType_BixinLoadDevice: 913,
			MessageType_BixinBackupDevice: 914,
			MessageType_BixinBackupDeviceAck: 915,
			MessageType_BixinPinInputOnDevice: 10000,
			MessageType_EthereumSignMessageEIP712: 10200,
			MessageType_GetPublicKeyMultiple: 10210,
			MessageType_PublicKeyMultiple: 10211,
			MessageType_ConfluxGetAddress: 10112,
			MessageType_ConfluxAddress: 10113,
			MessageType_ConfluxSignTx: 10114,
			MessageType_ConfluxTxRequest: 10115,
			MessageType_ConfluxTxAck: 10116,
			MessageType_ConfluxSignMessage: 10117,
			MessageType_ConfluxSignMessageCIP23: 10118,
			MessageType_ConfluxMessageSignature: 10119,
			MessageType_TronGetAddress: 10501,
			MessageType_TronAddress: 10502,
			MessageType_TronSignTx: 10503,
			MessageType_TronSignedTx: 10504,
			MessageType_TronSignMessage: 10505,
			MessageType_TronMessageSignature: 10506,
			MessageType_NearGetAddress: 10701,
			MessageType_NearAddress: 10702,
			MessageType_NearSignTx: 10703,
			MessageType_NearSignedTx: 10704,
			MessageType_CosmosGetAddress: 10800,
			MessageType_CosmosAddress: 10801,
			MessageType_CosmosSignTx: 10802,
			MessageType_CosmosSignedTx: 10803,
			MessageType_AlgorandGetAddress: 10900,
			MessageType_AlgorandAddress: 10901,
			MessageType_AlgorandSignTx: 10902,
			MessageType_AlgorandSignedTx: 10903,
			MessageType_PolkadotGetAddress: 11000,
			MessageType_PolkadotAddress: 11001,
			MessageType_PolkadotSignTx: 11002,
			MessageType_PolkadotSignedTx: 11003,
			MessageType_SuiGetAddress: 11100,
			MessageType_SuiAddress: 11101,
			MessageType_SuiSignTx: 11102,
			MessageType_SuiSignedTx: 11103,
			MessageType_SuiSignMessage: 11104,
			MessageType_SuiMessageSignature: 11105,
			MessageType_SuiTxRequest: 11106,
			MessageType_SuiTxAck: 11107,
			MessageType_FilecoinGetAddress: 11200,
			MessageType_FilecoinAddress: 11201,
			MessageType_FilecoinSignTx: 11202,
			MessageType_FilecoinSignedTx: 11203,
			MessageType_KaspaGetAddress: 11300,
			MessageType_KaspaAddress: 11301,
			MessageType_KaspaSignTx: 11302,
			MessageType_KaspaSignedTx: 11303,
			MessageType_KaspaTxInputRequest: 11304,
			MessageType_KaspaTxInputAck: 11305,
			MessageType_NexaGetAddress: 11400,
			MessageType_NexaAddress: 11401,
			MessageType_NexaSignTx: 11402,
			MessageType_NexaSignedTx: 11403,
			MessageType_NexaTxInputRequest: 11404,
			MessageType_NexaTxInputAck: 11405,
			MessageType_NostrGetPublicKey: 11500,
			MessageType_NostrPublicKey: 11501,
			MessageType_NostrSignEvent: 11502,
			MessageType_NostrSignedEvent: 11503,
			MessageType_NostrEncryptMessage: 11504,
			MessageType_NostrEncryptedMessage: 11505,
			MessageType_NostrDecryptMessage: 11506,
			MessageType_NostrDecryptedMessage: 11507,
			MessageType_NostrSignSchnorr: 11508,
			MessageType_NostrSignedSchnorr: 11509,
			MessageType_LnurlAuth: 11600,
			MessageType_LnurlAuthResp: 11601,
			MessageType_NervosGetAddress: 11701,
			MessageType_NervosAddress: 11702,
			MessageType_NervosSignTx: 11703,
			MessageType_NervosSignedTx: 11704,
			MessageType_NervosTxRequest: 11705,
			MessageType_NervosTxAck: 11706,
			MessageType_DnxGetAddress: 11800,
			MessageType_DnxAddress: 11801,
			MessageType_DnxSignTx: 11802,
			MessageType_DnxInputRequest: 11803,
			MessageType_DnxInputAck: 11804,
			MessageType_DnxRTSigsRequest: 11805,
			MessageType_DnxSignedTx: 11806,
			MessageType_TonGetAddress: 11901,
			MessageType_TonAddress: 11902,
			MessageType_TonSignMessage: 11903,
			MessageType_TonSignedMessage: 11904,
			MessageType_TonSignProof: 11905,
			MessageType_TonSignedProof: 11906,
			MessageType_ScdoGetAddress: 12001,
			MessageType_ScdoAddress: 12002,
			MessageType_ScdoSignTx: 12003,
			MessageType_ScdoSignedTx: 12004,
			MessageType_ScdoTxAck: 12005,
			MessageType_ScdoSignMessage: 12006,
			MessageType_ScdoSignedMessage: 12007,
			MessageType_AlephiumGetAddress: 12101,
			MessageType_AlephiumAddress: 12102,
			MessageType_AlephiumSignTx: 12103,
			MessageType_AlephiumSignedTx: 12104,
			MessageType_AlephiumTxRequest: 12105,
			MessageType_AlephiumTxAck: 12106,
			MessageType_AlephiumBytecodeRequest: 12107,
			MessageType_AlephiumBytecodeAck: 12108,
			MessageType_AlephiumSignMessage: 12109,
			MessageType_AlephiumMessageSignature: 12110,
			MessageType_DeviceBackToBoot: 903,
			MessageType_DeviceInfoSettings: 10001,
			MessageType_GetDeviceInfo: 10002,
			MessageType_DeviceInfo: 10003,
			MessageType_ReadSEPublicKey: 10004,
			MessageType_SEPublicKey: 10005,
			MessageType_WriteSEPublicCert: 10006,
			MessageType_ReadSEPublicCert: 10007,
			MessageType_SEPublicCert: 10008,
			MessageType_SpiFlashWrite: 10009,
			MessageType_SpiFlashRead: 10010,
			MessageType_SpiFlashData: 10011,
			MessageType_SESignMessage: 10012,
			MessageType_SEMessageSignature: 10013,
			MessageType_NFTWriteInfo: 10014,
			MessageType_NFTWriteData: 10015,
			MessageType_ResourceUpload: 10018,
			MessageType_ZoomRequest: 10019,
			MessageType_ResourceRequest: 10020,
			MessageType_ResourceAck: 10021,
			MessageType_ResourceUpdate: 10022,
			MessageType_ListResDir: 10023,
			MessageType_FileInfoList: 10024,
			MessageType_ChargerwalletGetFeatures: 10025,
			MessageType_ChargerwalletFeatures: 10026
		}
	},
	google: {
		nested: {
			protobuf: {
				nested: {
					FileDescriptorSet: {
						fields: {
							file: {
								rule: "repeated",
								type: "FileDescriptorProto",
								id: 1
							}
						}
					},
					FileDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							"package": {
								type: "string",
								id: 2
							},
							dependency: {
								rule: "repeated",
								type: "string",
								id: 3
							},
							public_dependency: {
								rule: "repeated",
								type: "int32",
								id: 10,
								options: {
									packed: false
								}
							},
							weak_dependency: {
								rule: "repeated",
								type: "int32",
								id: 11,
								options: {
									packed: false
								}
							},
							message_type: {
								rule: "repeated",
								type: "DescriptorProto",
								id: 4
							},
							enum_type: {
								rule: "repeated",
								type: "EnumDescriptorProto",
								id: 5
							},
							service: {
								rule: "repeated",
								type: "ServiceDescriptorProto",
								id: 6
							},
							extension: {
								rule: "repeated",
								type: "FieldDescriptorProto",
								id: 7
							},
							options: {
								type: "FileOptions",
								id: 8
							},
							source_code_info: {
								type: "SourceCodeInfo",
								id: 9
							},
							syntax: {
								type: "string",
								id: 12
							}
						}
					},
					DescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							field: {
								rule: "repeated",
								type: "FieldDescriptorProto",
								id: 2
							},
							extension: {
								rule: "repeated",
								type: "FieldDescriptorProto",
								id: 6
							},
							nested_type: {
								rule: "repeated",
								type: "DescriptorProto",
								id: 3
							},
							enum_type: {
								rule: "repeated",
								type: "EnumDescriptorProto",
								id: 4
							},
							extension_range: {
								rule: "repeated",
								type: "ExtensionRange",
								id: 5
							},
							oneof_decl: {
								rule: "repeated",
								type: "OneofDescriptorProto",
								id: 8
							},
							options: {
								type: "MessageOptions",
								id: 7
							},
							reserved_range: {
								rule: "repeated",
								type: "ReservedRange",
								id: 9
							},
							reserved_name: {
								rule: "repeated",
								type: "string",
								id: 10
							}
						},
						nested: {
							ExtensionRange: {
								fields: {
									start: {
										type: "int32",
										id: 1
									},
									end: {
										type: "int32",
										id: 2
									}
								}
							},
							ReservedRange: {
								fields: {
									start: {
										type: "int32",
										id: 1
									},
									end: {
										type: "int32",
										id: 2
									}
								}
							}
						}
					},
					FieldDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							number: {
								type: "int32",
								id: 3
							},
							label: {
								type: "Label",
								id: 4
							},
							type: {
								type: "Type",
								id: 5
							},
							type_name: {
								type: "string",
								id: 6
							},
							extendee: {
								type: "string",
								id: 2
							},
							default_value: {
								type: "string",
								id: 7
							},
							oneof_index: {
								type: "int32",
								id: 9
							},
							json_name: {
								type: "string",
								id: 10
							},
							options: {
								type: "FieldOptions",
								id: 8
							}
						},
						nested: {
							Type: {
								values: {
									TYPE_DOUBLE: 1,
									TYPE_FLOAT: 2,
									TYPE_INT64: 3,
									TYPE_UINT64: 4,
									TYPE_INT32: 5,
									TYPE_FIXED64: 6,
									TYPE_FIXED32: 7,
									TYPE_BOOL: 8,
									TYPE_STRING: 9,
									TYPE_GROUP: 10,
									TYPE_MESSAGE: 11,
									TYPE_BYTES: 12,
									TYPE_UINT32: 13,
									TYPE_ENUM: 14,
									TYPE_SFIXED32: 15,
									TYPE_SFIXED64: 16,
									TYPE_SINT32: 17,
									TYPE_SINT64: 18
								}
							},
							Label: {
								values: {
									LABEL_OPTIONAL: 1,
									LABEL_REQUIRED: 2,
									LABEL_REPEATED: 3
								}
							}
						}
					},
					OneofDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							options: {
								type: "OneofOptions",
								id: 2
							}
						}
					},
					EnumDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							value: {
								rule: "repeated",
								type: "EnumValueDescriptorProto",
								id: 2
							},
							options: {
								type: "EnumOptions",
								id: 3
							}
						}
					},
					EnumValueDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							number: {
								type: "int32",
								id: 2
							},
							options: {
								type: "EnumValueOptions",
								id: 3
							}
						}
					},
					ServiceDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							method: {
								rule: "repeated",
								type: "MethodDescriptorProto",
								id: 2
							},
							options: {
								type: "ServiceOptions",
								id: 3
							}
						}
					},
					MethodDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							input_type: {
								type: "string",
								id: 2
							},
							output_type: {
								type: "string",
								id: 3
							},
							options: {
								type: "MethodOptions",
								id: 4
							},
							client_streaming: {
								type: "bool",
								id: 5
							},
							server_streaming: {
								type: "bool",
								id: 6
							}
						}
					},
					FileOptions: {
						fields: {
							java_package: {
								type: "string",
								id: 1
							},
							java_outer_classname: {
								type: "string",
								id: 8
							},
							java_multiple_files: {
								type: "bool",
								id: 10
							},
							java_generate_equals_and_hash: {
								type: "bool",
								id: 20,
								options: {
									deprecated: true
								}
							},
							java_string_check_utf8: {
								type: "bool",
								id: 27
							},
							optimize_for: {
								type: "OptimizeMode",
								id: 9,
								options: {
									"default": "SPEED"
								}
							},
							go_package: {
								type: "string",
								id: 11
							},
							cc_generic_services: {
								type: "bool",
								id: 16
							},
							java_generic_services: {
								type: "bool",
								id: 17
							},
							py_generic_services: {
								type: "bool",
								id: 18
							},
							deprecated: {
								type: "bool",
								id: 23
							},
							cc_enable_arenas: {
								type: "bool",
								id: 31
							},
							objc_class_prefix: {
								type: "string",
								id: 36
							},
							csharp_namespace: {
								type: "string",
								id: 37
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						],
						reserved: [
							[
								38,
								38
							]
						],
						nested: {
							OptimizeMode: {
								values: {
									SPEED: 1,
									CODE_SIZE: 2,
									LITE_RUNTIME: 3
								}
							}
						}
					},
					MessageOptions: {
						fields: {
							message_set_wire_format: {
								type: "bool",
								id: 1
							},
							no_standard_descriptor_accessor: {
								type: "bool",
								id: 2
							},
							deprecated: {
								type: "bool",
								id: 3
							},
							map_entry: {
								type: "bool",
								id: 7
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						],
						reserved: [
							[
								8,
								8
							]
						]
					},
					FieldOptions: {
						fields: {
							ctype: {
								type: "CType",
								id: 1,
								options: {
									"default": "STRING"
								}
							},
							packed: {
								type: "bool",
								id: 2
							},
							jstype: {
								type: "JSType",
								id: 6,
								options: {
									"default": "JS_NORMAL"
								}
							},
							lazy: {
								type: "bool",
								id: 5
							},
							deprecated: {
								type: "bool",
								id: 3
							},
							weak: {
								type: "bool",
								id: 10
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						],
						reserved: [
							[
								4,
								4
							]
						],
						nested: {
							CType: {
								values: {
									STRING: 0,
									CORD: 1,
									STRING_PIECE: 2
								}
							},
							JSType: {
								values: {
									JS_NORMAL: 0,
									JS_STRING: 1,
									JS_NUMBER: 2
								}
							}
						}
					},
					OneofOptions: {
						fields: {
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					EnumOptions: {
						fields: {
							allow_alias: {
								type: "bool",
								id: 2
							},
							deprecated: {
								type: "bool",
								id: 3
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					EnumValueOptions: {
						fields: {
							deprecated: {
								type: "bool",
								id: 1
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					ServiceOptions: {
						fields: {
							deprecated: {
								type: "bool",
								id: 33
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					MethodOptions: {
						fields: {
							deprecated: {
								type: "bool",
								id: 33
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					UninterpretedOption: {
						fields: {
							name: {
								rule: "repeated",
								type: "NamePart",
								id: 2
							},
							identifier_value: {
								type: "string",
								id: 3
							},
							positive_int_value: {
								type: "uint64",
								id: 4
							},
							negative_int_value: {
								type: "int64",
								id: 5
							},
							double_value: {
								type: "double",
								id: 6
							},
							string_value: {
								type: "bytes",
								id: 7
							},
							aggregate_value: {
								type: "string",
								id: 8
							}
						},
						nested: {
							NamePart: {
								fields: {
									name_part: {
										rule: "required",
										type: "string",
										id: 1
									},
									is_extension: {
										rule: "required",
										type: "bool",
										id: 2
									}
								}
							}
						}
					},
					SourceCodeInfo: {
						fields: {
							location: {
								rule: "repeated",
								type: "Location",
								id: 1
							}
						},
						nested: {
							Location: {
								fields: {
									path: {
										rule: "repeated",
										type: "int32",
										id: 1
									},
									span: {
										rule: "repeated",
										type: "int32",
										id: 2
									},
									leading_comments: {
										type: "string",
										id: 3
									},
									trailing_comments: {
										type: "string",
										id: 4
									},
									leading_detached_comments: {
										rule: "repeated",
										type: "string",
										id: 6
									}
								}
							}
						}
					},
					GeneratedCodeInfo: {
						fields: {
							annotation: {
								rule: "repeated",
								type: "Annotation",
								id: 1
							}
						},
						nested: {
							Annotation: {
								fields: {
									path: {
										rule: "repeated",
										type: "int32",
										id: 1
									},
									source_file: {
										type: "string",
										id: 2
									},
									begin: {
										type: "int32",
										id: 3
									},
									end: {
										type: "int32",
										id: 4
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var MessagesJSON = {
	nested: nested$1
};

var nested = {
	AlgorandGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 3
			}
		}
	},
	AlgorandAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	AlgorandSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	AlgorandSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	AptosGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	AptosAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	AptosSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	AptosSignedTx: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	AptosSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			payload: {
				rule: "required",
				type: "AptosMessagePayload",
				id: 2
			}
		},
		nested: {
			AptosMessagePayload: {
				fields: {
					address: {
						type: "string",
						id: 2
					},
					chain_id: {
						type: "string",
						id: 3
					},
					application: {
						type: "string",
						id: 4
					},
					nonce: {
						rule: "required",
						type: "string",
						id: 5
					},
					message: {
						rule: "required",
						type: "string",
						id: 6
					}
				}
			}
		}
	},
	AptosMessageSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			address: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	BinanceGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	BinanceAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	BinanceGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	BinancePublicKey: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BinanceSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			msg_count: {
				type: "uint32",
				id: 2
			},
			account_number: {
				type: "sint64",
				id: 3
			},
			chain_id: {
				type: "string",
				id: 4
			},
			memo: {
				type: "string",
				id: 5
			},
			sequence: {
				type: "sint64",
				id: 6
			},
			source: {
				type: "sint64",
				id: 7
			}
		}
	},
	BinanceTxRequest: {
		fields: {
		}
	},
	BinanceTransferMsg: {
		fields: {
			inputs: {
				rule: "repeated",
				type: "BinanceInputOutput",
				id: 1
			},
			outputs: {
				rule: "repeated",
				type: "BinanceInputOutput",
				id: 2
			}
		},
		nested: {
			BinanceInputOutput: {
				fields: {
					address: {
						type: "string",
						id: 1
					},
					coins: {
						rule: "repeated",
						type: "BinanceCoin",
						id: 2
					}
				}
			},
			BinanceCoin: {
				fields: {
					amount: {
						type: "sint64",
						id: 1
					},
					denom: {
						type: "string",
						id: 2
					}
				}
			}
		}
	},
	BinanceOrderMsg: {
		fields: {
			id: {
				type: "string",
				id: 1
			},
			ordertype: {
				type: "BinanceOrderType",
				id: 2
			},
			price: {
				type: "sint64",
				id: 3
			},
			quantity: {
				type: "sint64",
				id: 4
			},
			sender: {
				type: "string",
				id: 5
			},
			side: {
				type: "BinanceOrderSide",
				id: 6
			},
			symbol: {
				type: "string",
				id: 7
			},
			timeinforce: {
				type: "BinanceTimeInForce",
				id: 8
			}
		},
		nested: {
			BinanceOrderType: {
				values: {
					OT_UNKNOWN: 0,
					MARKET: 1,
					LIMIT: 2,
					OT_RESERVED: 3
				}
			},
			BinanceOrderSide: {
				values: {
					SIDE_UNKNOWN: 0,
					BUY: 1,
					SELL: 2
				}
			},
			BinanceTimeInForce: {
				values: {
					TIF_UNKNOWN: 0,
					GTE: 1,
					TIF_RESERVED: 2,
					IOC: 3
				}
			}
		}
	},
	BinanceCancelMsg: {
		fields: {
			refid: {
				type: "string",
				id: 1
			},
			sender: {
				type: "string",
				id: 2
			},
			symbol: {
				type: "string",
				id: 3
			}
		}
	},
	BinanceSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	InputScriptType: {
		values: {
			SPENDADDRESS: 0,
			SPENDMULTISIG: 1,
			EXTERNAL: 2,
			SPENDWITNESS: 3,
			SPENDP2SHWITNESS: 4,
			SPENDTAPROOT: 5
		}
	},
	OutputScriptType: {
		values: {
			PAYTOADDRESS: 0,
			PAYTOSCRIPTHASH: 1,
			PAYTOMULTISIG: 2,
			PAYTOOPRETURN: 3,
			PAYTOWITNESS: 4,
			PAYTOP2SHWITNESS: 5,
			PAYTOTAPROOT: 6
		}
	},
	DecredStakingSpendType: {
		values: {
			SSGen: 0,
			SSRTX: 1
		}
	},
	AmountUnit: {
		values: {
			BITCOIN: 0,
			MILLIBITCOIN: 1,
			MICROBITCOIN: 2,
			SATOSHI: 3
		}
	},
	MultisigRedeemScriptType: {
		fields: {
			pubkeys: {
				rule: "repeated",
				type: "HDNodePathType",
				id: 1
			},
			signatures: {
				rule: "repeated",
				type: "bytes",
				id: 2
			},
			m: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			nodes: {
				rule: "repeated",
				type: "HDNodeType",
				id: 4
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 5,
				options: {
					packed: false
				}
			}
		},
		nested: {
			HDNodePathType: {
				fields: {
					node: {
						rule: "required",
						type: "HDNodeType",
						id: 1
					},
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 2,
						options: {
							packed: false
						}
					}
				}
			}
		}
	},
	GetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			ecdsa_curve_name: {
				type: "string",
				id: 2
			},
			show_display: {
				type: "bool",
				id: 3
			},
			coin_name: {
				type: "string",
				id: 4,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 5,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			ignore_xpub_magic: {
				type: "bool",
				id: 6
			}
		}
	},
	PublicKey: {
		fields: {
			node: {
				rule: "required",
				type: "HDNodeType",
				id: 1
			},
			xpub: {
				rule: "required",
				type: "string",
				id: 2
			},
			root_fingerprint: {
				type: "uint32",
				id: 3
			}
		}
	},
	GetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			coin_name: {
				type: "string",
				id: 2,
				options: {
					"default": "Bitcoin"
				}
			},
			show_display: {
				type: "bool",
				id: 3
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 4
			},
			script_type: {
				type: "InputScriptType",
				id: 5,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			ignore_xpub_magic: {
				type: "bool",
				id: 6
			}
		}
	},
	Address: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	GetOwnershipId: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			coin_name: {
				type: "string",
				id: 2,
				options: {
					"default": "Bitcoin"
				}
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 3
			},
			script_type: {
				type: "InputScriptType",
				id: 4,
				options: {
					"default": "SPENDADDRESS"
				}
			}
		}
	},
	OwnershipId: {
		fields: {
			ownership_id: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	SignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			coin_name: {
				type: "string",
				id: 3,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 4,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			no_script_type: {
				type: "bool",
				id: 5
			}
		}
	},
	MessageSignature: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	VerifyMessage: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			coin_name: {
				type: "string",
				id: 4,
				options: {
					"default": "Bitcoin"
				}
			}
		}
	},
	SignTx: {
		fields: {
			outputs_count: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			inputs_count: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			coin_name: {
				type: "string",
				id: 3,
				options: {
					"default": "Bitcoin"
				}
			},
			version: {
				type: "uint32",
				id: 4,
				options: {
					"default": 1
				}
			},
			lock_time: {
				type: "uint32",
				id: 5,
				options: {
					"default": 0
				}
			},
			expiry: {
				type: "uint32",
				id: 6
			},
			overwintered: {
				type: "bool",
				id: 7,
				options: {
					deprecated: true
				}
			},
			version_group_id: {
				type: "uint32",
				id: 8
			},
			timestamp: {
				type: "uint32",
				id: 9
			},
			branch_id: {
				type: "uint32",
				id: 10
			},
			amount_unit: {
				type: "AmountUnit",
				id: 11,
				options: {
					"default": "BITCOIN"
				}
			},
			decred_staking_ticket: {
				type: "bool",
				id: 12,
				options: {
					"default": false
				}
			}
		}
	},
	TxRequest: {
		fields: {
			request_type: {
				type: "RequestType",
				id: 1
			},
			details: {
				type: "TxRequestDetailsType",
				id: 2
			},
			serialized: {
				type: "TxRequestSerializedType",
				id: 3
			}
		},
		nested: {
			RequestType: {
				values: {
					TXINPUT: 0,
					TXOUTPUT: 1,
					TXMETA: 2,
					TXFINISHED: 3,
					TXEXTRADATA: 4,
					TXORIGINPUT: 5,
					TXORIGOUTPUT: 6
				}
			},
			TxRequestDetailsType: {
				fields: {
					request_index: {
						type: "uint32",
						id: 1
					},
					tx_hash: {
						type: "bytes",
						id: 2
					},
					extra_data_len: {
						type: "uint32",
						id: 3
					},
					extra_data_offset: {
						type: "uint32",
						id: 4
					}
				}
			},
			TxRequestSerializedType: {
				fields: {
					signature_index: {
						type: "uint32",
						id: 1
					},
					signature: {
						type: "bytes",
						id: 2
					},
					serialized_tx: {
						type: "bytes",
						id: 3
					}
				}
			}
		}
	},
	TxAck: {
		options: {
			deprecated: true
		},
		fields: {
			tx: {
				type: "TransactionType",
				id: 1
			}
		},
		nested: {
			TransactionType: {
				fields: {
					version: {
						type: "uint32",
						id: 1
					},
					inputs: {
						rule: "repeated",
						type: "TxInputType",
						id: 2
					},
					bin_outputs: {
						rule: "repeated",
						type: "TxOutputBinType",
						id: 3
					},
					lock_time: {
						type: "uint32",
						id: 4
					},
					outputs: {
						rule: "repeated",
						type: "TxOutputType",
						id: 5
					},
					inputs_cnt: {
						type: "uint32",
						id: 6
					},
					outputs_cnt: {
						type: "uint32",
						id: 7
					},
					extra_data: {
						type: "bytes",
						id: 8
					},
					extra_data_len: {
						type: "uint32",
						id: 9
					},
					expiry: {
						type: "uint32",
						id: 10
					},
					overwintered: {
						type: "bool",
						id: 11,
						options: {
							deprecated: true
						}
					},
					version_group_id: {
						type: "uint32",
						id: 12
					},
					timestamp: {
						type: "uint32",
						id: 13
					},
					branch_id: {
						type: "uint32",
						id: 14
					}
				},
				nested: {
					TxInputType: {
						fields: {
							address_n: {
								rule: "repeated",
								type: "uint32",
								id: 1,
								options: {
									packed: false
								}
							},
							prev_hash: {
								rule: "required",
								type: "bytes",
								id: 2
							},
							prev_index: {
								rule: "required",
								type: "uint32",
								id: 3
							},
							script_sig: {
								type: "bytes",
								id: 4
							},
							sequence: {
								type: "uint32",
								id: 5,
								options: {
									"default": 4294967295
								}
							},
							script_type: {
								type: "InputScriptType",
								id: 6,
								options: {
									"default": "SPENDADDRESS"
								}
							},
							multisig: {
								type: "MultisigRedeemScriptType",
								id: 7
							},
							amount: {
								type: "uint64",
								id: 8
							},
							decred_tree: {
								type: "uint32",
								id: 9
							},
							witness: {
								type: "bytes",
								id: 13
							},
							ownership_proof: {
								type: "bytes",
								id: 14
							},
							commitment_data: {
								type: "bytes",
								id: 15
							},
							orig_hash: {
								type: "bytes",
								id: 16
							},
							orig_index: {
								type: "uint32",
								id: 17
							},
							decred_staking_spend: {
								type: "DecredStakingSpendType",
								id: 18
							},
							script_pubkey: {
								type: "bytes",
								id: 19
							}
						}
					},
					TxOutputBinType: {
						fields: {
							amount: {
								rule: "required",
								type: "uint64",
								id: 1
							},
							script_pubkey: {
								rule: "required",
								type: "bytes",
								id: 2
							},
							decred_script_version: {
								type: "uint32",
								id: 3
							}
						}
					},
					TxOutputType: {
						fields: {
							address: {
								type: "string",
								id: 1
							},
							address_n: {
								rule: "repeated",
								type: "uint32",
								id: 2,
								options: {
									packed: false
								}
							},
							amount: {
								rule: "required",
								type: "uint64",
								id: 3
							},
							script_type: {
								type: "OutputScriptType",
								id: 4,
								options: {
									"default": "PAYTOADDRESS"
								}
							},
							multisig: {
								type: "MultisigRedeemScriptType",
								id: 5
							},
							op_return_data: {
								type: "bytes",
								id: 6
							},
							orig_hash: {
								type: "bytes",
								id: 10
							},
							orig_index: {
								type: "uint32",
								id: 11
							}
						}
					}
				}
			}
		}
	},
	TxInput: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			script_sig: {
				type: "bytes",
				id: 4
			},
			sequence: {
				type: "uint32",
				id: 5,
				options: {
					"default": 4294967295
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 6,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 7
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 8
			},
			decred_tree: {
				type: "uint32",
				id: 9
			},
			witness: {
				type: "bytes",
				id: 13
			},
			ownership_proof: {
				type: "bytes",
				id: 14
			},
			commitment_data: {
				type: "bytes",
				id: 15
			},
			orig_hash: {
				type: "bytes",
				id: 16
			},
			orig_index: {
				type: "uint32",
				id: 17
			},
			decred_staking_spend: {
				type: "DecredStakingSpendType",
				id: 18
			},
			script_pubkey: {
				type: "bytes",
				id: 19
			}
		}
	},
	TxOutput: {
		fields: {
			address: {
				type: "string",
				id: 1
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 3
			},
			script_type: {
				type: "OutputScriptType",
				id: 4,
				options: {
					"default": "PAYTOADDRESS"
				}
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 5
			},
			op_return_data: {
				type: "bytes",
				id: 6
			},
			orig_hash: {
				type: "bytes",
				id: 10
			},
			orig_index: {
				type: "uint32",
				id: 11
			}
		}
	},
	PrevTx: {
		fields: {
			version: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			lock_time: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			inputs_count: {
				rule: "required",
				type: "uint32",
				id: 6
			},
			outputs_count: {
				rule: "required",
				type: "uint32",
				id: 7
			},
			extra_data_len: {
				type: "uint32",
				id: 9,
				options: {
					"default": 0
				}
			},
			expiry: {
				type: "uint32",
				id: 10
			},
			version_group_id: {
				type: "uint32",
				id: 12
			},
			timestamp: {
				type: "uint32",
				id: 13
			},
			branch_id: {
				type: "uint32",
				id: 14
			}
		}
	},
	PrevInput: {
		fields: {
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			script_sig: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			sequence: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			decred_tree: {
				type: "uint32",
				id: 9
			}
		}
	},
	PrevOutput: {
		fields: {
			amount: {
				rule: "required",
				type: "uint64",
				id: 1
			},
			script_pubkey: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			decred_script_version: {
				type: "uint32",
				id: 3
			}
		}
	},
	TxAckInput: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckInputWrapper",
				id: 1
			}
		},
		nested: {
			TxAckInputWrapper: {
				fields: {
					input: {
						rule: "required",
						type: "TxInput",
						id: 2
					}
				}
			}
		}
	},
	TxAckOutput: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckOutputWrapper",
				id: 1
			}
		},
		nested: {
			TxAckOutputWrapper: {
				fields: {
					output: {
						rule: "required",
						type: "TxOutput",
						id: 5
					}
				}
			}
		}
	},
	TxAckPrevMeta: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "PrevTx",
				id: 1
			}
		}
	},
	TxAckPrevInput: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckPrevInputWrapper",
				id: 1
			}
		},
		nested: {
			TxAckPrevInputWrapper: {
				fields: {
					input: {
						rule: "required",
						type: "PrevInput",
						id: 2
					}
				}
			}
		}
	},
	TxAckPrevOutput: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckPrevOutputWrapper",
				id: 1
			}
		},
		nested: {
			TxAckPrevOutputWrapper: {
				fields: {
					output: {
						rule: "required",
						type: "PrevOutput",
						id: 3
					}
				}
			}
		}
	},
	TxAckPrevExtraData: {
		options: {
			"(wire_type)": 22
		},
		fields: {
			tx: {
				rule: "required",
				type: "TxAckPrevExtraDataWrapper",
				id: 1
			}
		},
		nested: {
			TxAckPrevExtraDataWrapper: {
				fields: {
					extra_data_chunk: {
						rule: "required",
						type: "bytes",
						id: 8
					}
				}
			}
		}
	},
	GetOwnershipProof: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			coin_name: {
				type: "string",
				id: 2,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 3,
				options: {
					"default": "SPENDWITNESS"
				}
			},
			multisig: {
				type: "MultisigRedeemScriptType",
				id: 4
			},
			user_confirmation: {
				type: "bool",
				id: 5,
				options: {
					"default": false
				}
			},
			ownership_ids: {
				rule: "repeated",
				type: "bytes",
				id: 6
			},
			commitment_data: {
				type: "bytes",
				id: 7,
				options: {
					"default": ""
				}
			}
		}
	},
	OwnershipProof: {
		fields: {
			ownership_proof: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	AuthorizeCoinJoin: {
		options: {
			"(unstable)": true
		},
		fields: {
			coordinator: {
				rule: "required",
				type: "string",
				id: 1
			},
			max_total_fee: {
				rule: "required",
				type: "uint64",
				id: 2
			},
			fee_per_anonymity: {
				type: "uint32",
				id: 3,
				options: {
					"default": 0
				}
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 4,
				options: {
					packed: false
				}
			},
			coin_name: {
				type: "string",
				id: 5,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 6,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			amount_unit: {
				type: "AmountUnit",
				id: 11,
				options: {
					"default": "BITCOIN"
				}
			}
		}
	},
	GetPublicKeyMultiple: {
		fields: {
			addresses: {
				rule: "repeated",
				type: "BIP32Address",
				id: 1
			},
			ecdsa_curve_name: {
				type: "string",
				id: 2
			},
			show_display: {
				type: "bool",
				id: 3
			},
			coin_name: {
				type: "string",
				id: 4,
				options: {
					"default": "Bitcoin"
				}
			},
			script_type: {
				type: "InputScriptType",
				id: 5,
				options: {
					"default": "SPENDADDRESS"
				}
			},
			ignore_xpub_magic: {
				type: "bool",
				id: 6
			}
		},
		nested: {
			BIP32Address: {
				fields: {
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 1,
						options: {
							packed: false
						}
					}
				}
			}
		}
	},
	PublicKeyMultiple: {
		fields: {
			xpubs: {
				rule: "repeated",
				type: "string",
				id: 1
			}
		}
	},
	FirmwareErase: {
		fields: {
			length: {
				type: "uint32",
				id: 1
			}
		}
	},
	FirmwareRequest: {
		fields: {
			offset: {
				type: "uint32",
				id: 1
			},
			length: {
				type: "uint32",
				id: 2
			}
		}
	},
	FirmwareUpload: {
		fields: {
			payload: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			hash: {
				type: "bytes",
				id: 2
			}
		}
	},
	SelfTest: {
		fields: {
			payload: {
				type: "bytes",
				id: 1
			}
		}
	},
	FirmwareErase_ex: {
		fields: {
			length: {
				type: "uint32",
				id: 1
			}
		}
	},
	RebootType: {
		values: {
			Normal: 0,
			Boardloader: 1,
			BootLoader: 2
		}
	},
	Reboot: {
		fields: {
			reboot_type: {
				rule: "required",
				type: "RebootType",
				id: 1
			}
		}
	},
	FirmwareUpdateEmmc: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			},
			reboot_on_success: {
				type: "bool",
				id: 2
			}
		}
	},
	CardanoDerivationType: {
		values: {
			LEDGER: 0,
			ICARUS: 1,
			ICARUS_TREZOR: 2
		}
	},
	CardanoAddressType: {
		values: {
			BASE: 0,
			BASE_SCRIPT_KEY: 1,
			BASE_KEY_SCRIPT: 2,
			BASE_SCRIPT_SCRIPT: 3,
			POINTER: 4,
			POINTER_SCRIPT: 5,
			ENTERPRISE: 6,
			ENTERPRISE_SCRIPT: 7,
			BYRON: 8,
			REWARD: 14,
			REWARD_SCRIPT: 15
		}
	},
	CardanoNativeScriptType: {
		values: {
			PUB_KEY: 0,
			ALL: 1,
			ANY: 2,
			N_OF_K: 3,
			INVALID_BEFORE: 4,
			INVALID_HEREAFTER: 5
		}
	},
	CardanoNativeScriptHashDisplayFormat: {
		values: {
			HIDE: 0,
			BECH32: 1,
			POLICY_ID: 2
		}
	},
	CardanoTxOutputSerializationFormat: {
		values: {
			ARRAY_LEGACY: 0,
			MAP_BABBAGE: 1
		}
	},
	CardanoCertificateType: {
		values: {
			STAKE_REGISTRATION: 0,
			STAKE_DEREGISTRATION: 1,
			STAKE_DELEGATION: 2,
			STAKE_POOL_REGISTRATION: 3
		}
	},
	CardanoPoolRelayType: {
		values: {
			SINGLE_HOST_IP: 0,
			SINGLE_HOST_NAME: 1,
			MULTIPLE_HOST_NAME: 2
		}
	},
	CardanoTxAuxiliaryDataSupplementType: {
		values: {
			NONE: 0,
			GOVERNANCE_REGISTRATION_SIGNATURE: 1
		}
	},
	CardanoGovernanceRegistrationFormat: {
		values: {
			CIP15: 0,
			CIP36: 1
		}
	},
	CardanoTxSigningMode: {
		values: {
			ORDINARY_TRANSACTION: 0,
			POOL_REGISTRATION_AS_OWNER: 1,
			MULTISIG_TRANSACTION: 2,
			PLUTUS_TRANSACTION: 3
		}
	},
	CardanoTxWitnessType: {
		values: {
			BYRON_WITNESS: 0,
			SHELLEY_WITNESS: 1
		}
	},
	CardanoBlockchainPointerType: {
		fields: {
			block_index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			tx_index: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			certificate_index: {
				rule: "required",
				type: "uint32",
				id: 3
			}
		}
	},
	CardanoNativeScript: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoNativeScriptType",
				id: 1
			},
			scripts: {
				rule: "repeated",
				type: "CardanoNativeScript",
				id: 2
			},
			key_hash: {
				type: "bytes",
				id: 3
			},
			key_path: {
				rule: "repeated",
				type: "uint32",
				id: 4,
				options: {
					packed: false
				}
			},
			required_signatures_count: {
				type: "uint32",
				id: 5
			},
			invalid_before: {
				type: "uint64",
				id: 6
			},
			invalid_hereafter: {
				type: "uint64",
				id: 7
			}
		}
	},
	CardanoGetNativeScriptHash: {
		fields: {
			script: {
				rule: "required",
				type: "CardanoNativeScript",
				id: 1
			},
			display_format: {
				rule: "required",
				type: "CardanoNativeScriptHashDisplayFormat",
				id: 2
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 3
			}
		}
	},
	CardanoNativeScriptHash: {
		fields: {
			script_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CardanoAddressParametersType: {
		fields: {
			address_type: {
				rule: "required",
				type: "CardanoAddressType",
				id: 1
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			address_n_staking: {
				rule: "repeated",
				type: "uint32",
				id: 3,
				options: {
					packed: false
				}
			},
			staking_key_hash: {
				type: "bytes",
				id: 4
			},
			certificate_pointer: {
				type: "CardanoBlockchainPointerType",
				id: 5
			},
			script_payment_hash: {
				type: "bytes",
				id: 6
			},
			script_staking_hash: {
				type: "bytes",
				id: 7
			}
		}
	},
	CardanoGetAddress: {
		fields: {
			show_display: {
				type: "bool",
				id: 2,
				options: {
					"default": false
				}
			},
			protocol_magic: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			network_id: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			address_parameters: {
				rule: "required",
				type: "CardanoAddressParametersType",
				id: 5
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 6
			}
		}
	},
	CardanoAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	CardanoGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 3
			}
		}
	},
	CardanoPublicKey: {
		fields: {
			xpub: {
				rule: "required",
				type: "string",
				id: 1
			},
			node: {
				rule: "required",
				type: "HDNodeType",
				id: 2
			}
		}
	},
	CardanoSignTxInit: {
		fields: {
			signing_mode: {
				rule: "required",
				type: "CardanoTxSigningMode",
				id: 1
			},
			protocol_magic: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			network_id: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			inputs_count: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			outputs_count: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			fee: {
				rule: "required",
				type: "uint64",
				id: 6
			},
			ttl: {
				type: "uint64",
				id: 7
			},
			certificates_count: {
				rule: "required",
				type: "uint32",
				id: 8
			},
			withdrawals_count: {
				rule: "required",
				type: "uint32",
				id: 9
			},
			has_auxiliary_data: {
				rule: "required",
				type: "bool",
				id: 10
			},
			validity_interval_start: {
				type: "uint64",
				id: 11
			},
			witness_requests_count: {
				rule: "required",
				type: "uint32",
				id: 12
			},
			minting_asset_groups_count: {
				rule: "required",
				type: "uint32",
				id: 13
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 14
			},
			include_network_id: {
				type: "bool",
				id: 15,
				options: {
					"default": false
				}
			},
			script_data_hash: {
				type: "bytes",
				id: 16
			},
			collateral_inputs_count: {
				rule: "required",
				type: "uint32",
				id: 17
			},
			required_signers_count: {
				rule: "required",
				type: "uint32",
				id: 18
			},
			has_collateral_return: {
				type: "bool",
				id: 19,
				options: {
					"default": false
				}
			},
			total_collateral: {
				type: "uint64",
				id: 20
			},
			reference_inputs_count: {
				type: "uint32",
				id: 21,
				options: {
					"default": 0
				}
			}
		}
	},
	CardanoTxInput: {
		fields: {
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoTxOutput: {
		fields: {
			address: {
				type: "string",
				id: 1
			},
			address_parameters: {
				type: "CardanoAddressParametersType",
				id: 2
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 3
			},
			asset_groups_count: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			datum_hash: {
				type: "bytes",
				id: 5
			},
			format: {
				type: "CardanoTxOutputSerializationFormat",
				id: 6,
				options: {
					"default": "ARRAY_LEGACY"
				}
			},
			inline_datum_size: {
				type: "uint32",
				id: 7,
				options: {
					"default": 0
				}
			},
			reference_script_size: {
				type: "uint32",
				id: 8,
				options: {
					"default": 0
				}
			}
		}
	},
	CardanoAssetGroup: {
		fields: {
			policy_id: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			tokens_count: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoToken: {
		fields: {
			asset_name_bytes: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			amount: {
				type: "uint64",
				id: 2
			},
			mint_amount: {
				type: "sint64",
				id: 3
			}
		}
	},
	CardanoTxInlineDatumChunk: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CardanoTxReferenceScriptChunk: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CardanoPoolOwner: {
		fields: {
			staking_key_path: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			staking_key_hash: {
				type: "bytes",
				id: 2
			}
		}
	},
	CardanoPoolRelayParameters: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoPoolRelayType",
				id: 1
			},
			ipv4_address: {
				type: "bytes",
				id: 2
			},
			ipv6_address: {
				type: "bytes",
				id: 3
			},
			host_name: {
				type: "string",
				id: 4
			},
			port: {
				type: "uint32",
				id: 5
			}
		}
	},
	CardanoPoolMetadataType: {
		fields: {
			url: {
				rule: "required",
				type: "string",
				id: 1
			},
			hash: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	CardanoPoolParametersType: {
		fields: {
			pool_id: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			vrf_key_hash: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			pledge: {
				rule: "required",
				type: "uint64",
				id: 3
			},
			cost: {
				rule: "required",
				type: "uint64",
				id: 4
			},
			margin_numerator: {
				rule: "required",
				type: "uint64",
				id: 5
			},
			margin_denominator: {
				rule: "required",
				type: "uint64",
				id: 6
			},
			reward_account: {
				rule: "required",
				type: "string",
				id: 7
			},
			metadata: {
				type: "CardanoPoolMetadataType",
				id: 10
			},
			owners_count: {
				rule: "required",
				type: "uint32",
				id: 11
			},
			relays_count: {
				rule: "required",
				type: "uint32",
				id: 12
			}
		}
	},
	CardanoTxCertificate: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoCertificateType",
				id: 1
			},
			path: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			pool: {
				type: "bytes",
				id: 3
			},
			pool_parameters: {
				type: "CardanoPoolParametersType",
				id: 4
			},
			script_hash: {
				type: "bytes",
				id: 5
			},
			key_hash: {
				type: "bytes",
				id: 6
			}
		}
	},
	CardanoTxWithdrawal: {
		fields: {
			path: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			amount: {
				rule: "required",
				type: "uint64",
				id: 2
			},
			script_hash: {
				type: "bytes",
				id: 3
			},
			key_hash: {
				type: "bytes",
				id: 4
			}
		}
	},
	CardanoGovernanceRegistrationDelegation: {
		fields: {
			voting_public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			weight: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoGovernanceRegistrationParametersType: {
		fields: {
			voting_public_key: {
				type: "bytes",
				id: 1
			},
			staking_path: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			reward_address_parameters: {
				rule: "required",
				type: "CardanoAddressParametersType",
				id: 3
			},
			nonce: {
				rule: "required",
				type: "uint64",
				id: 4
			},
			format: {
				type: "CardanoGovernanceRegistrationFormat",
				id: 5,
				options: {
					"default": "CIP15"
				}
			},
			delegations: {
				rule: "repeated",
				type: "CardanoGovernanceRegistrationDelegation",
				id: 6
			},
			voting_purpose: {
				type: "uint64",
				id: 7
			}
		}
	},
	CardanoTxAuxiliaryData: {
		fields: {
			governance_registration_parameters: {
				type: "CardanoGovernanceRegistrationParametersType",
				id: 1
			},
			hash: {
				type: "bytes",
				id: 2
			}
		}
	},
	CardanoTxMint: {
		fields: {
			asset_groups_count: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	CardanoTxCollateralInput: {
		fields: {
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoTxRequiredSigner: {
		fields: {
			key_hash: {
				type: "bytes",
				id: 1
			},
			key_path: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			}
		}
	},
	CardanoTxReferenceInput: {
		fields: {
			prev_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			prev_index: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	CardanoTxItemAck: {
		fields: {
		}
	},
	CardanoTxAuxiliaryDataSupplement: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoTxAuxiliaryDataSupplementType",
				id: 1
			},
			auxiliary_data_hash: {
				type: "bytes",
				id: 2
			},
			governance_signature: {
				type: "bytes",
				id: 3
			}
		}
	},
	CardanoTxWitnessRequest: {
		fields: {
			path: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			}
		}
	},
	CardanoTxWitnessResponse: {
		fields: {
			type: {
				rule: "required",
				type: "CardanoTxWitnessType",
				id: 1
			},
			pub_key: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			chain_code: {
				type: "bytes",
				id: 4
			}
		}
	},
	CardanoTxHostAck: {
		fields: {
		}
	},
	CardanoTxBodyHash: {
		fields: {
			tx_hash: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CardanoSignTxFinished: {
		fields: {
		}
	},
	CardanoSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			derivation_type: {
				rule: "required",
				type: "CardanoDerivationType",
				id: 3
			},
			network_id: {
				rule: "required",
				type: "uint32",
				id: 4
			}
		}
	},
	CardanoMessageSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			key: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	Success: {
		fields: {
			message: {
				type: "string",
				id: 1,
				options: {
					"default": ""
				}
			}
		}
	},
	Failure: {
		fields: {
			code: {
				type: "FailureType",
				id: 1
			},
			message: {
				type: "string",
				id: 2
			}
		},
		nested: {
			FailureType: {
				values: {
					Failure_UnexpectedMessage: 1,
					Failure_ButtonExpected: 2,
					Failure_DataError: 3,
					Failure_ActionCancelled: 4,
					Failure_PinExpected: 5,
					Failure_PinCancelled: 6,
					Failure_PinInvalid: 7,
					Failure_InvalidSignature: 8,
					Failure_ProcessError: 9,
					Failure_NotEnoughFunds: 10,
					Failure_NotInitialized: 11,
					Failure_PinMismatch: 12,
					Failure_WipeCodeMismatch: 13,
					Failure_InvalidSession: 14,
					Failure_FirmwareError: 99
				}
			}
		}
	},
	ButtonRequest: {
		fields: {
			code: {
				type: "ButtonRequestType",
				id: 1
			},
			pages: {
				type: "uint32",
				id: 2
			}
		},
		nested: {
			ButtonRequestType: {
				values: {
					ButtonRequest_Other: 1,
					ButtonRequest_FeeOverThreshold: 2,
					ButtonRequest_ConfirmOutput: 3,
					ButtonRequest_ResetDevice: 4,
					ButtonRequest_ConfirmWord: 5,
					ButtonRequest_WipeDevice: 6,
					ButtonRequest_ProtectCall: 7,
					ButtonRequest_SignTx: 8,
					ButtonRequest_FirmwareCheck: 9,
					ButtonRequest_Address: 10,
					ButtonRequest_PublicKey: 11,
					ButtonRequest_MnemonicWordCount: 12,
					ButtonRequest_MnemonicInput: 13,
					_Deprecated_ButtonRequest_PassphraseType: 14,
					ButtonRequest_UnknownDerivationPath: 15,
					ButtonRequest_RecoveryHomepage: 16,
					ButtonRequest_Success: 17,
					ButtonRequest_Warning: 18,
					ButtonRequest_PassphraseEntry: 19,
					ButtonRequest_PinEntry: 20
				}
			}
		}
	},
	ButtonAck: {
		fields: {
		}
	},
	PinMatrixRequest: {
		fields: {
			type: {
				type: "PinMatrixRequestType",
				id: 1
			}
		},
		nested: {
			PinMatrixRequestType: {
				values: {
					PinMatrixRequestType_Current: 1,
					PinMatrixRequestType_NewFirst: 2,
					PinMatrixRequestType_NewSecond: 3,
					PinMatrixRequestType_WipeCodeFirst: 4,
					PinMatrixRequestType_WipeCodeSecond: 5,
					PinMatrixRequestType_BackupFirst: 6,
					PinMatrixRequestType_BackupSecond: 7
				}
			}
		}
	},
	PinMatrixAck: {
		fields: {
			pin: {
				rule: "required",
				type: "string",
				id: 1
			},
			new_pin: {
				type: "string",
				id: 2
			}
		}
	},
	PassphraseRequest: {
		fields: {
			_on_device: {
				type: "bool",
				id: 1,
				options: {
					deprecated: true
				}
			}
		}
	},
	PassphraseAck: {
		fields: {
			passphrase: {
				type: "string",
				id: 1
			},
			_state: {
				type: "bytes",
				id: 2,
				options: {
					deprecated: true
				}
			},
			on_device: {
				type: "bool",
				id: 3
			}
		}
	},
	Deprecated_PassphraseStateRequest: {
		options: {
			deprecated: true
		},
		fields: {
			state: {
				type: "bytes",
				id: 1
			}
		}
	},
	Deprecated_PassphraseStateAck: {
		options: {
			deprecated: true
		},
		fields: {
		}
	},
	HDNodeType: {
		fields: {
			depth: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			fingerprint: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			child_num: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			chain_code: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			private_key: {
				type: "bytes",
				id: 5
			},
			public_key: {
				rule: "required",
				type: "bytes",
				id: 6
			}
		}
	},
	BixinPinInputOnDevice: {
		fields: {
		}
	},
	ConfluxGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			chain_id: {
				type: "uint32",
				id: 3
			}
		}
	},
	ConfluxAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	ConfluxSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			nonce: {
				type: "bytes",
				id: 2
			},
			gas_price: {
				type: "bytes",
				id: 3
			},
			gas_limit: {
				type: "bytes",
				id: 4
			},
			to: {
				type: "string",
				id: 5
			},
			value: {
				type: "bytes",
				id: 6
			},
			epoch_height: {
				type: "bytes",
				id: 7
			},
			storage_limit: {
				type: "bytes",
				id: 8
			},
			data_initial_chunk: {
				type: "bytes",
				id: 9
			},
			data_length: {
				type: "uint32",
				id: 10
			},
			chain_id: {
				type: "uint32",
				id: 11
			}
		}
	},
	ConfluxTxRequest: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			signature_v: {
				type: "uint32",
				id: 2
			},
			signature_r: {
				type: "bytes",
				id: 3
			},
			signature_s: {
				type: "bytes",
				id: 4
			}
		}
	},
	ConfluxTxAck: {
		fields: {
			data_chunk: {
				type: "bytes",
				id: 1
			}
		}
	},
	ConfluxSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				type: "bytes",
				id: 2
			}
		}
	},
	ConfluxMessageSignature: {
		fields: {
			signature: {
				type: "bytes",
				id: 2
			},
			address: {
				type: "string",
				id: 3
			}
		}
	},
	ConfluxSignMessageCIP23: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			domain_hash: {
				type: "bytes",
				id: 2
			},
			message_hash: {
				type: "bytes",
				id: 3
			}
		}
	},
	CosmosGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			hrp: {
				type: "string",
				id: 2
			},
			show_display: {
				type: "bool",
				id: 3
			}
		}
	},
	CosmosAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	CosmosSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	CosmosSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	CipherKeyValue: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			key: {
				rule: "required",
				type: "string",
				id: 2
			},
			value: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			encrypt: {
				type: "bool",
				id: 4
			},
			ask_on_encrypt: {
				type: "bool",
				id: 5
			},
			ask_on_decrypt: {
				type: "bool",
				id: 6
			},
			iv: {
				type: "bytes",
				id: 7
			}
		}
	},
	CipheredKeyValue: {
		fields: {
			value: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	IdentityType: {
		fields: {
			proto: {
				type: "string",
				id: 1
			},
			user: {
				type: "string",
				id: 2
			},
			host: {
				type: "string",
				id: 3
			},
			port: {
				type: "string",
				id: 4
			},
			path: {
				type: "string",
				id: 5
			},
			index: {
				type: "uint32",
				id: 6,
				options: {
					"default": 0
				}
			}
		}
	},
	SignIdentity: {
		fields: {
			identity: {
				rule: "required",
				type: "IdentityType",
				id: 1
			},
			challenge_hidden: {
				type: "bytes",
				id: 2,
				options: {
					"default": ""
				}
			},
			challenge_visual: {
				type: "string",
				id: 3,
				options: {
					"default": ""
				}
			},
			ecdsa_curve_name: {
				type: "string",
				id: 4
			}
		}
	},
	SignedIdentity: {
		fields: {
			address: {
				type: "string",
				id: 1
			},
			public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 3
			}
		}
	},
	GetECDHSessionKey: {
		fields: {
			identity: {
				rule: "required",
				type: "IdentityType",
				id: 1
			},
			peer_public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			ecdsa_curve_name: {
				type: "string",
				id: 3
			}
		}
	},
	ECDHSessionKey: {
		fields: {
			session_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			public_key: {
				type: "bytes",
				id: 2
			}
		}
	},
	CosiCommit: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			data: {
				type: "bytes",
				id: 2
			}
		}
	},
	CosiCommitment: {
		fields: {
			commitment: {
				type: "bytes",
				id: 1
			},
			pubkey: {
				type: "bytes",
				id: 2
			}
		}
	},
	CosiSign: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			data: {
				type: "bytes",
				id: 2
			},
			global_commitment: {
				type: "bytes",
				id: 3
			},
			global_pubkey: {
				type: "bytes",
				id: 4
			}
		}
	},
	CosiSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BatchGetPublickeys: {
		fields: {
			ecdsa_curve_name: {
				type: "string",
				id: 1,
				options: {
					"default": "ed25519"
				}
			},
			paths: {
				rule: "repeated",
				type: "Path",
				id: 2
			}
		},
		nested: {
			Path: {
				fields: {
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 1,
						options: {
							packed: false
						}
					}
				}
			}
		}
	},
	EcdsaPublicKeys: {
		fields: {
			public_keys: {
				rule: "repeated",
				type: "bytes",
				id: 1
			}
		}
	},
	DebugLinkDecision: {
		fields: {
			yes_no: {
				type: "bool",
				id: 1
			},
			swipe: {
				type: "DebugSwipeDirection",
				id: 2
			},
			input: {
				type: "string",
				id: 3
			},
			x: {
				type: "uint32",
				id: 4
			},
			y: {
				type: "uint32",
				id: 5
			},
			wait: {
				type: "bool",
				id: 6
			},
			hold_ms: {
				type: "uint32",
				id: 7
			}
		},
		nested: {
			DebugSwipeDirection: {
				values: {
					UP: 0,
					DOWN: 1,
					LEFT: 2,
					RIGHT: 3
				}
			}
		}
	},
	DebugLinkLayout: {
		fields: {
			lines: {
				rule: "repeated",
				type: "string",
				id: 1
			}
		}
	},
	DebugLinkReseedRandom: {
		fields: {
			value: {
				type: "uint32",
				id: 1
			}
		}
	},
	DebugLinkRecordScreen: {
		fields: {
			target_directory: {
				type: "string",
				id: 1
			}
		}
	},
	DebugLinkGetState: {
		fields: {
			wait_word_list: {
				type: "bool",
				id: 1
			},
			wait_word_pos: {
				type: "bool",
				id: 2
			},
			wait_layout: {
				type: "bool",
				id: 3
			}
		}
	},
	DebugLinkState: {
		fields: {
			layout: {
				type: "bytes",
				id: 1
			},
			pin: {
				type: "string",
				id: 2
			},
			matrix: {
				type: "string",
				id: 3
			},
			mnemonic_secret: {
				type: "bytes",
				id: 4
			},
			node: {
				type: "HDNodeType",
				id: 5
			},
			passphrase_protection: {
				type: "bool",
				id: 6
			},
			reset_word: {
				type: "string",
				id: 7
			},
			reset_entropy: {
				type: "bytes",
				id: 8
			},
			recovery_fake_word: {
				type: "string",
				id: 9
			},
			recovery_word_pos: {
				type: "uint32",
				id: 10
			},
			reset_word_pos: {
				type: "uint32",
				id: 11
			},
			mnemonic_type: {
				type: "BackupType",
				id: 12
			},
			layout_lines: {
				rule: "repeated",
				type: "string",
				id: 13
			}
		}
	},
	DebugLinkStop: {
		fields: {
		}
	},
	DebugLinkLog: {
		fields: {
			level: {
				type: "uint32",
				id: 1
			},
			bucket: {
				type: "string",
				id: 2
			},
			text: {
				type: "string",
				id: 3
			}
		}
	},
	DebugLinkMemoryRead: {
		fields: {
			address: {
				type: "uint32",
				id: 1
			},
			length: {
				type: "uint32",
				id: 2
			}
		}
	},
	DebugLinkMemory: {
		fields: {
			memory: {
				type: "bytes",
				id: 1
			}
		}
	},
	DebugLinkMemoryWrite: {
		fields: {
			address: {
				type: "uint32",
				id: 1
			},
			memory: {
				type: "bytes",
				id: 2
			},
			flash: {
				type: "bool",
				id: 3
			}
		}
	},
	DebugLinkFlashErase: {
		fields: {
			sector: {
				type: "uint32",
				id: 1
			}
		}
	},
	DebugLinkEraseSdCard: {
		fields: {
			format: {
				type: "bool",
				id: 1
			}
		}
	},
	DebugLinkWatchLayout: {
		fields: {
			watch: {
				type: "bool",
				id: 1
			}
		}
	},
	EmmcFixPermission: {
		fields: {
		}
	},
	EmmcPath: {
		fields: {
			exist: {
				rule: "required",
				type: "bool",
				id: 1
			},
			size: {
				rule: "required",
				type: "uint64",
				id: 2
			},
			year: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			month: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			day: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			hour: {
				rule: "required",
				type: "uint32",
				id: 6
			},
			minute: {
				rule: "required",
				type: "uint32",
				id: 7
			},
			second: {
				rule: "required",
				type: "uint32",
				id: 8
			},
			readonly: {
				rule: "required",
				type: "bool",
				id: 9
			},
			hidden: {
				rule: "required",
				type: "bool",
				id: 10
			},
			system: {
				rule: "required",
				type: "bool",
				id: 11
			},
			archive: {
				rule: "required",
				type: "bool",
				id: 12
			},
			directory: {
				rule: "required",
				type: "bool",
				id: 13
			}
		}
	},
	EmmcPathInfo: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EmmcFile: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			},
			offset: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			len: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			data: {
				type: "bytes",
				id: 4
			},
			data_hash: {
				type: "uint32",
				id: 5
			},
			processed_byte: {
				type: "uint32",
				id: 6
			}
		}
	},
	EmmcFileRead: {
		fields: {
			file: {
				rule: "required",
				type: "EmmcFile",
				id: 1
			},
			ui_percentage: {
				type: "uint32",
				id: 2
			}
		}
	},
	EmmcFileWrite: {
		fields: {
			file: {
				rule: "required",
				type: "EmmcFile",
				id: 1
			},
			overwrite: {
				rule: "required",
				type: "bool",
				id: 2
			},
			append: {
				rule: "required",
				type: "bool",
				id: 3
			},
			ui_percentage: {
				type: "uint32",
				id: 4
			}
		}
	},
	EmmcFileDelete: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EmmcDir: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			},
			child_dirs: {
				type: "string",
				id: 2
			},
			child_files: {
				type: "string",
				id: 3
			}
		}
	},
	EmmcDirList: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EmmcDirMake: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EmmcDirRemove: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EosGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	EosPublicKey: {
		fields: {
			wif_public_key: {
				rule: "required",
				type: "string",
				id: 1
			},
			raw_public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	EosSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			chain_id: {
				type: "bytes",
				id: 2
			},
			header: {
				type: "EosTxHeader",
				id: 3
			},
			num_actions: {
				type: "uint32",
				id: 4
			}
		},
		nested: {
			EosTxHeader: {
				fields: {
					expiration: {
						rule: "required",
						type: "uint32",
						id: 1
					},
					ref_block_num: {
						rule: "required",
						type: "uint32",
						id: 2
					},
					ref_block_prefix: {
						rule: "required",
						type: "uint32",
						id: 3
					},
					max_net_usage_words: {
						rule: "required",
						type: "uint32",
						id: 4
					},
					max_cpu_usage_ms: {
						rule: "required",
						type: "uint32",
						id: 5
					},
					delay_sec: {
						rule: "required",
						type: "uint32",
						id: 6
					}
				}
			}
		}
	},
	EosTxActionRequest: {
		fields: {
			data_size: {
				type: "uint32",
				id: 1
			}
		}
	},
	EosTxActionAck: {
		fields: {
			common: {
				type: "EosActionCommon",
				id: 1
			},
			transfer: {
				type: "EosActionTransfer",
				id: 2
			},
			delegate: {
				type: "EosActionDelegate",
				id: 3
			},
			undelegate: {
				type: "EosActionUndelegate",
				id: 4
			},
			refund: {
				type: "EosActionRefund",
				id: 5
			},
			buy_ram: {
				type: "EosActionBuyRam",
				id: 6
			},
			buy_ram_bytes: {
				type: "EosActionBuyRamBytes",
				id: 7
			},
			sell_ram: {
				type: "EosActionSellRam",
				id: 8
			},
			vote_producer: {
				type: "EosActionVoteProducer",
				id: 9
			},
			update_auth: {
				type: "EosActionUpdateAuth",
				id: 10
			},
			delete_auth: {
				type: "EosActionDeleteAuth",
				id: 11
			},
			link_auth: {
				type: "EosActionLinkAuth",
				id: 12
			},
			unlink_auth: {
				type: "EosActionUnlinkAuth",
				id: 13
			},
			new_account: {
				type: "EosActionNewAccount",
				id: 14
			},
			unknown: {
				type: "EosActionUnknown",
				id: 15
			}
		},
		nested: {
			EosAsset: {
				fields: {
					amount: {
						type: "sint64",
						id: 1
					},
					symbol: {
						type: "uint64",
						id: 2
					}
				}
			},
			EosPermissionLevel: {
				fields: {
					actor: {
						type: "uint64",
						id: 1
					},
					permission: {
						type: "uint64",
						id: 2
					}
				}
			},
			EosAuthorizationKey: {
				fields: {
					type: {
						rule: "required",
						type: "uint32",
						id: 1
					},
					key: {
						type: "bytes",
						id: 2
					},
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 3,
						options: {
							packed: false
						}
					},
					weight: {
						rule: "required",
						type: "uint32",
						id: 4
					}
				}
			},
			EosAuthorizationAccount: {
				fields: {
					account: {
						type: "EosPermissionLevel",
						id: 1
					},
					weight: {
						type: "uint32",
						id: 2
					}
				}
			},
			EosAuthorizationWait: {
				fields: {
					wait_sec: {
						type: "uint32",
						id: 1
					},
					weight: {
						type: "uint32",
						id: 2
					}
				}
			},
			EosAuthorization: {
				fields: {
					threshold: {
						type: "uint32",
						id: 1
					},
					keys: {
						rule: "repeated",
						type: "EosAuthorizationKey",
						id: 2
					},
					accounts: {
						rule: "repeated",
						type: "EosAuthorizationAccount",
						id: 3
					},
					waits: {
						rule: "repeated",
						type: "EosAuthorizationWait",
						id: 4
					}
				}
			},
			EosActionCommon: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					name: {
						type: "uint64",
						id: 2
					},
					authorization: {
						rule: "repeated",
						type: "EosPermissionLevel",
						id: 3
					}
				}
			},
			EosActionTransfer: {
				fields: {
					sender: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					quantity: {
						type: "EosAsset",
						id: 3
					},
					memo: {
						type: "string",
						id: 4
					}
				}
			},
			EosActionDelegate: {
				fields: {
					sender: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					net_quantity: {
						type: "EosAsset",
						id: 3
					},
					cpu_quantity: {
						type: "EosAsset",
						id: 4
					},
					transfer: {
						type: "bool",
						id: 5
					}
				}
			},
			EosActionUndelegate: {
				fields: {
					sender: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					net_quantity: {
						type: "EosAsset",
						id: 3
					},
					cpu_quantity: {
						type: "EosAsset",
						id: 4
					}
				}
			},
			EosActionRefund: {
				fields: {
					owner: {
						type: "uint64",
						id: 1
					}
				}
			},
			EosActionBuyRam: {
				fields: {
					payer: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					quantity: {
						type: "EosAsset",
						id: 3
					}
				}
			},
			EosActionBuyRamBytes: {
				fields: {
					payer: {
						type: "uint64",
						id: 1
					},
					receiver: {
						type: "uint64",
						id: 2
					},
					bytes: {
						type: "uint32",
						id: 3
					}
				}
			},
			EosActionSellRam: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					bytes: {
						type: "uint64",
						id: 2
					}
				}
			},
			EosActionVoteProducer: {
				fields: {
					voter: {
						type: "uint64",
						id: 1
					},
					proxy: {
						type: "uint64",
						id: 2
					},
					producers: {
						rule: "repeated",
						type: "uint64",
						id: 3,
						options: {
							packed: false
						}
					}
				}
			},
			EosActionUpdateAuth: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					permission: {
						type: "uint64",
						id: 2
					},
					parent: {
						type: "uint64",
						id: 3
					},
					auth: {
						type: "EosAuthorization",
						id: 4
					}
				}
			},
			EosActionDeleteAuth: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					permission: {
						type: "uint64",
						id: 2
					}
				}
			},
			EosActionLinkAuth: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					code: {
						type: "uint64",
						id: 2
					},
					type: {
						type: "uint64",
						id: 3
					},
					requirement: {
						type: "uint64",
						id: 4
					}
				}
			},
			EosActionUnlinkAuth: {
				fields: {
					account: {
						type: "uint64",
						id: 1
					},
					code: {
						type: "uint64",
						id: 2
					},
					type: {
						type: "uint64",
						id: 3
					}
				}
			},
			EosActionNewAccount: {
				fields: {
					creator: {
						type: "uint64",
						id: 1
					},
					name: {
						type: "uint64",
						id: 2
					},
					owner: {
						type: "EosAuthorization",
						id: 3
					},
					active: {
						type: "EosAuthorization",
						id: 4
					}
				}
			},
			EosActionUnknown: {
				fields: {
					data_size: {
						rule: "required",
						type: "uint32",
						id: 1
					},
					data_chunk: {
						type: "bytes",
						id: 2
					}
				}
			}
		}
	},
	EosSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EthereumSignTypedData: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			primary_type: {
				rule: "required",
				type: "string",
				id: 2
			},
			metamask_v4_compat: {
				type: "bool",
				id: 3,
				options: {
					"default": true
				}
			},
			chain_id: {
				type: "uint64",
				id: 4
			}
		}
	},
	EthereumTypedDataStructRequest: {
		fields: {
			name: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	EthereumTypedDataStructAck: {
		fields: {
			members: {
				rule: "repeated",
				type: "EthereumStructMember",
				id: 1
			}
		},
		nested: {
			EthereumStructMember: {
				fields: {
					type: {
						rule: "required",
						type: "EthereumFieldType",
						id: 1
					},
					name: {
						rule: "required",
						type: "string",
						id: 2
					}
				}
			},
			EthereumFieldType: {
				fields: {
					data_type: {
						rule: "required",
						type: "EthereumDataType",
						id: 1
					},
					size: {
						type: "uint32",
						id: 2
					},
					entry_type: {
						type: "EthereumFieldType",
						id: 3
					},
					struct_name: {
						type: "string",
						id: 4
					}
				}
			},
			EthereumDataType: {
				values: {
					UINT: 1,
					INT: 2,
					BYTES: 3,
					STRING: 4,
					BOOL: 5,
					ADDRESS: 6,
					ARRAY: 7,
					STRUCT: 8
				}
			}
		}
	},
	EthereumTypedDataValueRequest: {
		fields: {
			member_path: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			}
		}
	},
	EthereumTypedDataValueAck: {
		fields: {
			value: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	EthereumGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			chain_id: {
				type: "uint64",
				id: 3
			}
		}
	},
	EthereumPublicKey: {
		fields: {
			node: {
				rule: "required",
				type: "HDNodeType",
				id: 1
			},
			xpub: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	EthereumGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			chain_id: {
				type: "uint64",
				id: 3
			}
		}
	},
	EthereumAddress: {
		fields: {
			_old_address: {
				type: "bytes",
				id: 1,
				options: {
					deprecated: true
				}
			},
			address: {
				type: "string",
				id: 2
			}
		}
	},
	EthereumSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			nonce: {
				type: "bytes",
				id: 2,
				options: {
					"default": ""
				}
			},
			gas_price: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			gas_limit: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			to: {
				type: "string",
				id: 11,
				options: {
					"default": ""
				}
			},
			value: {
				type: "bytes",
				id: 6,
				options: {
					"default": ""
				}
			},
			data_initial_chunk: {
				type: "bytes",
				id: 7,
				options: {
					"default": ""
				}
			},
			data_length: {
				type: "uint32",
				id: 8,
				options: {
					"default": 0
				}
			},
			chain_id: {
				rule: "required",
				type: "uint64",
				id: 9
			},
			tx_type: {
				type: "uint32",
				id: 10
			}
		}
	},
	EthereumSignTxEIP1559: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			nonce: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			max_gas_fee: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			max_priority_fee: {
				rule: "required",
				type: "bytes",
				id: 4
			},
			gas_limit: {
				rule: "required",
				type: "bytes",
				id: 5
			},
			to: {
				type: "string",
				id: 6,
				options: {
					"default": ""
				}
			},
			value: {
				rule: "required",
				type: "bytes",
				id: 7
			},
			data_initial_chunk: {
				type: "bytes",
				id: 8,
				options: {
					"default": ""
				}
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 9
			},
			chain_id: {
				rule: "required",
				type: "uint64",
				id: 10
			},
			access_list: {
				rule: "repeated",
				type: "EthereumAccessList",
				id: 11
			}
		},
		nested: {
			EthereumAccessList: {
				fields: {
					address: {
						rule: "required",
						type: "string",
						id: 1
					},
					storage_keys: {
						rule: "repeated",
						type: "bytes",
						id: 2
					}
				}
			}
		}
	},
	EthereumTxRequest: {
		fields: {
			data_length: {
				type: "uint32",
				id: 1
			},
			signature_v: {
				type: "uint32",
				id: 2
			},
			signature_r: {
				type: "bytes",
				id: 3
			},
			signature_s: {
				type: "bytes",
				id: 4
			}
		}
	},
	EthereumTxAck: {
		fields: {
			data_chunk: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	EthereumSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			chain_id: {
				type: "uint64",
				id: 3
			}
		}
	},
	EthereumMessageSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			address: {
				rule: "required",
				type: "string",
				id: 3
			}
		}
	},
	EthereumVerifyMessage: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			address: {
				rule: "required",
				type: "string",
				id: 4
			},
			chain_id: {
				type: "uint64",
				id: 5
			}
		}
	},
	EthereumSignMessageEIP712: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			domain_hash: {
				type: "bytes",
				id: 2
			},
			message_hash: {
				type: "bytes",
				id: 3
			}
		}
	},
	EthereumSignTypedHash: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			domain_separator_hash: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			message_hash: {
				type: "bytes",
				id: 3
			},
			chain_id: {
				type: "uint64",
				id: 4
			}
		}
	},
	EthereumTypedDataSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			address: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	FilecoinGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			testnet: {
				type: "bool",
				id: 3
			}
		}
	},
	FilecoinAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	FilecoinSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			testnet: {
				type: "bool",
				id: 3
			}
		}
	},
	FilecoinSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	KaspaGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			prefix: {
				type: "string",
				id: 3,
				options: {
					"default": "kaspa"
				}
			},
			scheme: {
				type: "string",
				id: 4,
				options: {
					"default": "schnorr"
				}
			}
		}
	},
	KaspaAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	KaspaSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			scheme: {
				type: "string",
				id: 3,
				options: {
					"default": "schnorr"
				}
			},
			prefix: {
				type: "string",
				id: 4,
				options: {
					"default": "kaspa"
				}
			},
			input_count: {
				type: "uint32",
				id: 5,
				options: {
					"default": 1
				}
			}
		}
	},
	KaspaTxInputRequest: {
		fields: {
			request_index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			signature: {
				type: "bytes",
				id: 2
			}
		}
	},
	KaspaTxInputAck: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_message: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	KaspaSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	BackupType: {
		values: {
			Bip39: 0,
			Slip39_Basic: 1,
			Slip39_Advanced: 2
		}
	},
	SafetyCheckLevel: {
		values: {
			Strict: 0,
			PromptAlways: 1,
			PromptTemporarily: 2
		}
	},
	Initialize: {
		fields: {
			session_id: {
				type: "bytes",
				id: 1
			},
			_skip_passphrase: {
				type: "bool",
				id: 2,
				options: {
					deprecated: true
				}
			},
			derive_cardano: {
				type: "bool",
				id: 3
			}
		}
	},
	GetFeatures: {
		fields: {
		}
	},
	Features: {
		fields: {
			vendor: {
				type: "string",
				id: 1
			},
			major_version: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			minor_version: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			patch_version: {
				rule: "required",
				type: "uint32",
				id: 4
			},
			bootloader_mode: {
				type: "bool",
				id: 5
			},
			device_id: {
				type: "string",
				id: 6
			},
			pin_protection: {
				type: "bool",
				id: 7
			},
			passphrase_protection: {
				type: "bool",
				id: 8
			},
			language: {
				type: "string",
				id: 9
			},
			label: {
				type: "string",
				id: 10
			},
			initialized: {
				type: "bool",
				id: 12
			},
			revision: {
				type: "bytes",
				id: 13
			},
			bootloader_hash: {
				type: "bytes",
				id: 14
			},
			imported: {
				type: "bool",
				id: 15
			},
			unlocked: {
				type: "bool",
				id: 16
			},
			_passphrase_cached: {
				type: "bool",
				id: 17,
				options: {
					deprecated: true
				}
			},
			firmware_present: {
				type: "bool",
				id: 18
			},
			needs_backup: {
				type: "bool",
				id: 19
			},
			flags: {
				type: "uint32",
				id: 20
			},
			model: {
				type: "string",
				id: 21
			},
			fw_major: {
				type: "uint32",
				id: 22
			},
			fw_minor: {
				type: "uint32",
				id: 23
			},
			fw_patch: {
				type: "uint32",
				id: 24
			},
			fw_vendor: {
				type: "string",
				id: 25
			},
			fw_vendor_keys: {
				type: "bytes",
				id: 26
			},
			unfinished_backup: {
				type: "bool",
				id: 27
			},
			no_backup: {
				type: "bool",
				id: 28
			},
			recovery_mode: {
				type: "bool",
				id: 29
			},
			capabilities: {
				rule: "repeated",
				type: "Capability",
				id: 30,
				options: {
					packed: false
				}
			},
			backup_type: {
				type: "BackupType",
				id: 31
			},
			sd_card_present: {
				type: "bool",
				id: 32
			},
			sd_protection: {
				type: "bool",
				id: 33
			},
			wipe_code_protection: {
				type: "bool",
				id: 34
			},
			session_id: {
				type: "bytes",
				id: 35
			},
			passphrase_always_on_device: {
				type: "bool",
				id: 36
			},
			safety_checks: {
				type: "SafetyCheckLevel",
				id: 37
			},
			auto_lock_delay_ms: {
				type: "uint32",
				id: 38
			},
			display_rotation: {
				type: "uint32",
				id: 39
			},
			experimental_features: {
				type: "bool",
				id: 40
			},
			offset: {
				type: "uint32",
				id: 500
			},
			ble_name: {
				type: "string",
				id: 501
			},
			ble_ver: {
				type: "string",
				id: 502
			},
			ble_enable: {
				type: "bool",
				id: 503
			},
			se_enable: {
				type: "bool",
				id: 504
			},
			se_ver: {
				type: "string",
				id: 506
			},
			backup_only: {
				type: "bool",
				id: 507
			},
			chargerwallet_version: {
				type: "string",
				id: 508
			},
			chargerwallet_serial: {
				type: "string",
				id: 509
			},
			bootloader_version: {
				type: "string",
				id: 510
			},
			serial_no: {
				type: "string",
				id: 511
			},
			spi_flash: {
				type: "string",
				id: 512
			},
			initstates: {
				type: "uint32",
				id: 513
			},
			NFT_voucher: {
				type: "bytes",
				id: 514
			},
			cpu_info: {
				type: "string",
				id: 515
			},
			pre_firmware: {
				type: "string",
				id: 516
			},
			coin_switch: {
				type: "uint32",
				id: 517
			},
			build_id: {
				type: "string",
				id: 518
			},
			battery_level: {
				type: "uint32",
				id: 520
			}
		},
		nested: {
			Capability: {
				options: {
					"(has_bitcoin_only_values)": true
				},
				values: {
					Capability_Bitcoin: 1,
					Capability_Bitcoin_like: 2,
					Capability_Binance: 3,
					Capability_Cardano: 4,
					Capability_Crypto: 5,
					Capability_EOS: 6,
					Capability_Ethereum: 7,
					Capability_Lisk: 8,
					Capability_Monero: 9,
					Capability_NEM: 10,
					Capability_Ripple: 11,
					Capability_Stellar: 12,
					Capability_Tezos: 13,
					Capability_U2F: 14,
					Capability_Shamir: 15,
					Capability_ShamirGroups: 16,
					Capability_PassphraseEntry: 17
				}
			}
		}
	},
	LockDevice: {
		fields: {
		}
	},
	EndSession: {
		fields: {
		}
	},
	ApplySettings: {
		fields: {
			language: {
				type: "string",
				id: 1
			},
			label: {
				type: "string",
				id: 2
			},
			use_passphrase: {
				type: "bool",
				id: 3
			},
			homescreen: {
				type: "bytes",
				id: 4
			},
			_passphrase_source: {
				type: "uint32",
				id: 5,
				options: {
					deprecated: true
				}
			},
			auto_lock_delay_ms: {
				type: "uint32",
				id: 6
			},
			display_rotation: {
				type: "uint32",
				id: 7
			},
			passphrase_always_on_device: {
				type: "bool",
				id: 8
			},
			safety_checks: {
				type: "SafetyCheckLevel",
				id: 9
			},
			experimental_features: {
				type: "bool",
				id: 10
			},
			use_ble: {
				type: "bool",
				id: 100
			},
			use_se: {
				type: "bool",
				id: 101
			},
			is_bixinapp: {
				type: "bool",
				id: 102
			},
			fastpay_pin: {
				type: "bool",
				id: 103
			},
			fastpay_confirm: {
				type: "bool",
				id: 104
			},
			fastpay_money_limit: {
				type: "uint64",
				id: 105
			},
			fastpay_times: {
				type: "uint32",
				id: 106
			}
		},
		nested: {
			ExportType: {
				values: {
					SeedEncExportType_NO: 0,
					SeedEncExportType_YES: 1,
					MnemonicPlainExportType_YES: 2
				}
			}
		}
	},
	ApplyFlags: {
		fields: {
			flags: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	ChangePin: {
		fields: {
			remove: {
				type: "bool",
				id: 1
			}
		}
	},
	ChangeWipeCode: {
		fields: {
			remove: {
				type: "bool",
				id: 1
			}
		}
	},
	SdProtect: {
		fields: {
			operation: {
				rule: "required",
				type: "SdProtectOperationType",
				id: 1
			}
		},
		nested: {
			SdProtectOperationType: {
				values: {
					DISABLE: 0,
					ENABLE: 1,
					REFRESH: 2
				}
			}
		}
	},
	Ping: {
		fields: {
			message: {
				type: "string",
				id: 1,
				options: {
					"default": ""
				}
			},
			button_protection: {
				type: "bool",
				id: 2
			}
		}
	},
	Cancel: {
		fields: {
		}
	},
	GetEntropy: {
		fields: {
			size: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	Entropy: {
		fields: {
			entropy: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	WipeDevice: {
		fields: {
		}
	},
	LoadDevice: {
		fields: {
			mnemonics: {
				rule: "repeated",
				type: "string",
				id: 1
			},
			pin: {
				type: "string",
				id: 3
			},
			passphrase_protection: {
				type: "bool",
				id: 4
			},
			language: {
				type: "string",
				id: 5,
				options: {
					"default": "en-US"
				}
			},
			label: {
				type: "string",
				id: 6
			},
			skip_checksum: {
				type: "bool",
				id: 7
			},
			u2f_counter: {
				type: "uint32",
				id: 8
			},
			needs_backup: {
				type: "bool",
				id: 9
			},
			no_backup: {
				type: "bool",
				id: 10
			}
		}
	},
	ResetDevice: {
		fields: {
			display_random: {
				type: "bool",
				id: 1
			},
			strength: {
				type: "uint32",
				id: 2,
				options: {
					"default": 256
				}
			},
			passphrase_protection: {
				type: "bool",
				id: 3
			},
			pin_protection: {
				type: "bool",
				id: 4
			},
			language: {
				type: "string",
				id: 5,
				options: {
					"default": "en-US"
				}
			},
			label: {
				type: "string",
				id: 6
			},
			u2f_counter: {
				type: "uint32",
				id: 7
			},
			skip_backup: {
				type: "bool",
				id: 8
			},
			no_backup: {
				type: "bool",
				id: 9
			},
			backup_type: {
				type: "BackupType",
				id: 10,
				options: {
					"default": "Bip39"
				}
			}
		}
	},
	BackupDevice: {
		fields: {
		}
	},
	EntropyRequest: {
		fields: {
		}
	},
	EntropyAck: {
		fields: {
			entropy: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	RecoveryDevice: {
		fields: {
			word_count: {
				type: "uint32",
				id: 1
			},
			passphrase_protection: {
				type: "bool",
				id: 2
			},
			pin_protection: {
				type: "bool",
				id: 3
			},
			language: {
				type: "string",
				id: 4
			},
			label: {
				type: "string",
				id: 5
			},
			enforce_wordlist: {
				type: "bool",
				id: 6
			},
			type: {
				type: "RecoveryDeviceType",
				id: 8
			},
			u2f_counter: {
				type: "uint32",
				id: 9
			},
			dry_run: {
				type: "bool",
				id: 10
			}
		},
		nested: {
			RecoveryDeviceType: {
				values: {
					RecoveryDeviceType_ScrambledWords: 0,
					RecoveryDeviceType_Matrix: 1
				}
			}
		}
	},
	WordRequest: {
		fields: {
			type: {
				rule: "required",
				type: "WordRequestType",
				id: 1
			}
		},
		nested: {
			WordRequestType: {
				values: {
					WordRequestType_Plain: 0,
					WordRequestType_Matrix9: 1,
					WordRequestType_Matrix6: 2
				}
			}
		}
	},
	WordAck: {
		fields: {
			word: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	SetU2FCounter: {
		fields: {
			u2f_counter: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	GetNextU2FCounter: {
		fields: {
		}
	},
	NextU2FCounter: {
		fields: {
			u2f_counter: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	DoPreauthorized: {
		fields: {
		}
	},
	PreauthorizedRequest: {
		fields: {
		}
	},
	CancelAuthorization: {
		fields: {
		}
	},
	BixinSeedOperate: {
		fields: {
			type: {
				rule: "required",
				type: "SeedRequestType",
				id: 1
			},
			seed_importData: {
				type: "bytes",
				id: 2
			}
		},
		nested: {
			SeedRequestType: {
				values: {
					SeedRequestType_Gen: 0,
					SeedRequestType_EncExport: 1,
					SeedRequestType_EncImport: 2
				}
			}
		}
	},
	BixinMessageSE: {
		fields: {
			inputmessage: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BixinOutMessageSE: {
		fields: {
			outmessage: {
				type: "bytes",
				id: 1
			}
		}
	},
	DeviceBackToBoot: {
		fields: {
		}
	},
	BixinBackupRequest: {
		fields: {
		}
	},
	BixinBackupAck: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BixinRestoreRequest: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			language: {
				type: "string",
				id: 2
			},
			label: {
				type: "string",
				id: 3
			},
			passphrase_protection: {
				type: "bool",
				id: 4
			}
		}
	},
	BixinRestoreAck: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BixinVerifyDeviceRequest: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	BixinVerifyDeviceAck: {
		fields: {
			cert: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	BixinWhiteListRequest: {
		fields: {
			type: {
				rule: "required",
				type: "WL_OperationType",
				id: 1
			},
			addr_in: {
				type: "string",
				id: 2
			}
		},
		nested: {
			WL_OperationType: {
				values: {
					WL_OperationType_Add: 0,
					WL_OperationType_Delete: 1,
					WL_OperationType_Inquire: 2
				}
			}
		}
	},
	BixinWhiteListAck: {
		fields: {
			address: {
				rule: "repeated",
				type: "string",
				id: 1
			}
		}
	},
	BixinLoadDevice: {
		fields: {
			mnemonics: {
				rule: "required",
				type: "string",
				id: 1
			},
			language: {
				type: "string",
				id: 5,
				options: {
					"default": "en-US"
				}
			},
			label: {
				type: "string",
				id: 6
			},
			skip_checksum: {
				type: "bool",
				id: 7
			}
		}
	},
	BixinBackupDevice: {
		fields: {
		}
	},
	BixinBackupDeviceAck: {
		fields: {
			mnemonics: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	DeviceInfoSettings: {
		fields: {
			serial_no: {
				type: "string",
				id: 1
			},
			cpu_info: {
				type: "string",
				id: 2
			},
			pre_firmware: {
				type: "string",
				id: 3
			}
		}
	},
	GetDeviceInfo: {
		fields: {
		}
	},
	DeviceInfo: {
		fields: {
			serial_no: {
				type: "string",
				id: 1
			},
			spiFlash_info: {
				type: "string",
				id: 2
			},
			SE_info: {
				type: "string",
				id: 3
			},
			NFT_voucher: {
				type: "bytes",
				id: 4
			},
			cpu_info: {
				type: "string",
				id: 5
			},
			pre_firmware: {
				type: "string",
				id: 6
			}
		}
	},
	ReadSEPublicKey: {
		fields: {
		}
	},
	SEPublicKey: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	WriteSEPublicCert: {
		fields: {
			public_cert: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	ReadSEPublicCert: {
		fields: {
		}
	},
	SEPublicCert: {
		fields: {
			public_cert: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	SpiFlashWrite: {
		fields: {
			address: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			data: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SpiFlashRead: {
		fields: {
			address: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			len: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	SpiFlashData: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	SESignMessage: {
		fields: {
			message: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	SEMessageSignature: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	ResourceUpload: {
		fields: {
			extension: {
				rule: "required",
				type: "string",
				id: 1
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			res_type: {
				rule: "required",
				type: "ResourceType",
				id: 3
			},
			nft_meta_data: {
				type: "bytes",
				id: 4
			},
			zoom_data_length: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			file_name_no_ext: {
				type: "string",
				id: 6
			}
		},
		nested: {
			ResourceType: {
				values: {
					WallPaper: 0,
					Nft: 1
				}
			}
		}
	},
	ZoomRequest: {
		fields: {
			offset: {
				type: "uint32",
				id: 1
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	ResourceRequest: {
		fields: {
			offset: {
				type: "uint32",
				id: 1
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 2
			}
		}
	},
	ResourceAck: {
		fields: {
			data_chunk: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			hash: {
				type: "bytes",
				id: 2
			}
		}
	},
	ResourceUpdate: {
		fields: {
			file_name: {
				rule: "required",
				type: "string",
				id: 1
			},
			data_length: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			initial_data_chunk: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			hash: {
				type: "bytes",
				id: 4
			}
		}
	},
	NFTWriteInfo: {
		fields: {
			index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			width: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			height: {
				rule: "required",
				type: "uint32",
				id: 3
			},
			name_zh: {
				type: "string",
				id: 4
			},
			name_en: {
				type: "string",
				id: 5
			}
		}
	},
	NFTWriteData: {
		fields: {
			index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			data: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			offset: {
				rule: "required",
				type: "uint32",
				id: 3
			}
		}
	},
	RebootToBootloader: {
		fields: {
		}
	},
	RebootToBoardloader: {
		fields: {
		}
	},
	ListResDir: {
		fields: {
			path: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	FileInfoList: {
		fields: {
			files: {
				rule: "repeated",
				type: "FileInfo",
				id: 1
			}
		},
		nested: {
			FileInfo: {
				fields: {
					name: {
						rule: "required",
						type: "string",
						id: 1
					},
					size: {
						rule: "required",
						type: "uint64",
						id: 2
					}
				}
			}
		}
	},
	DeviceEraseSector: {
		fields: {
			sector: {
				rule: "required",
				type: "uint32",
				id: 1
			}
		}
	},
	MoneroTransactionSourceEntry: {
		fields: {
			outputs: {
				rule: "repeated",
				type: "MoneroOutputEntry",
				id: 1
			},
			real_output: {
				type: "uint64",
				id: 2
			},
			real_out_tx_key: {
				type: "bytes",
				id: 3
			},
			real_out_additional_tx_keys: {
				rule: "repeated",
				type: "bytes",
				id: 4
			},
			real_output_in_tx_index: {
				type: "uint64",
				id: 5
			},
			amount: {
				type: "uint64",
				id: 6
			},
			rct: {
				type: "bool",
				id: 7
			},
			mask: {
				type: "bytes",
				id: 8
			},
			multisig_kLRki: {
				type: "MoneroMultisigKLRki",
				id: 9
			},
			subaddr_minor: {
				type: "uint32",
				id: 10
			}
		},
		nested: {
			MoneroOutputEntry: {
				fields: {
					idx: {
						type: "uint64",
						id: 1
					},
					key: {
						type: "MoneroRctKeyPublic",
						id: 2
					}
				},
				nested: {
					MoneroRctKeyPublic: {
						fields: {
							dest: {
								type: "bytes",
								id: 1
							},
							commitment: {
								type: "bytes",
								id: 2
							}
						}
					}
				}
			},
			MoneroMultisigKLRki: {
				fields: {
					K: {
						type: "bytes",
						id: 1
					},
					L: {
						type: "bytes",
						id: 2
					},
					R: {
						type: "bytes",
						id: 3
					},
					ki: {
						type: "bytes",
						id: 4
					}
				}
			}
		}
	},
	MoneroTransactionDestinationEntry: {
		fields: {
			amount: {
				type: "uint64",
				id: 1
			},
			addr: {
				type: "MoneroAccountPublicAddress",
				id: 2
			},
			is_subaddress: {
				type: "bool",
				id: 3
			},
			original: {
				type: "bytes",
				id: 4
			},
			is_integrated: {
				type: "bool",
				id: 5
			}
		},
		nested: {
			MoneroAccountPublicAddress: {
				fields: {
					spend_public_key: {
						type: "bytes",
						id: 1
					},
					view_public_key: {
						type: "bytes",
						id: 2
					}
				}
			}
		}
	},
	MoneroTransactionRsigData: {
		fields: {
			rsig_type: {
				type: "uint32",
				id: 1
			},
			offload_type: {
				type: "uint32",
				id: 2
			},
			grouping: {
				rule: "repeated",
				type: "uint64",
				id: 3,
				options: {
					packed: false
				}
			},
			mask: {
				type: "bytes",
				id: 4
			},
			rsig: {
				type: "bytes",
				id: 5
			},
			rsig_parts: {
				rule: "repeated",
				type: "bytes",
				id: 6
			},
			bp_version: {
				type: "uint32",
				id: 7
			}
		}
	},
	MoneroGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			network_type: {
				type: "uint32",
				id: 3
			},
			account: {
				type: "uint32",
				id: 4
			},
			minor: {
				type: "uint32",
				id: 5
			},
			payment_id: {
				type: "bytes",
				id: 6
			}
		}
	},
	MoneroAddress: {
		fields: {
			address: {
				type: "bytes",
				id: 1
			}
		}
	},
	MoneroGetWatchKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 2
			}
		}
	},
	MoneroWatchKey: {
		fields: {
			watch_key: {
				type: "bytes",
				id: 1
			},
			address: {
				type: "bytes",
				id: 2
			}
		}
	},
	MoneroTransactionInitRequest: {
		fields: {
			version: {
				type: "uint32",
				id: 1
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 3
			},
			tsx_data: {
				type: "MoneroTransactionData",
				id: 4
			}
		},
		nested: {
			MoneroTransactionData: {
				fields: {
					version: {
						type: "uint32",
						id: 1
					},
					payment_id: {
						type: "bytes",
						id: 2
					},
					unlock_time: {
						type: "uint64",
						id: 3
					},
					outputs: {
						rule: "repeated",
						type: "MoneroTransactionDestinationEntry",
						id: 4
					},
					change_dts: {
						type: "MoneroTransactionDestinationEntry",
						id: 5
					},
					num_inputs: {
						type: "uint32",
						id: 6
					},
					mixin: {
						type: "uint32",
						id: 7
					},
					fee: {
						type: "uint64",
						id: 8
					},
					account: {
						type: "uint32",
						id: 9
					},
					minor_indices: {
						rule: "repeated",
						type: "uint32",
						id: 10,
						options: {
							packed: false
						}
					},
					rsig_data: {
						type: "MoneroTransactionRsigData",
						id: 11
					},
					integrated_indices: {
						rule: "repeated",
						type: "uint32",
						id: 12,
						options: {
							packed: false
						}
					},
					client_version: {
						type: "uint32",
						id: 13
					},
					hard_fork: {
						type: "uint32",
						id: 14
					},
					monero_version: {
						type: "bytes",
						id: 15
					}
				}
			}
		}
	},
	MoneroTransactionInitAck: {
		fields: {
			hmacs: {
				rule: "repeated",
				type: "bytes",
				id: 1
			},
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 2
			}
		}
	},
	MoneroTransactionSetInputRequest: {
		fields: {
			src_entr: {
				type: "MoneroTransactionSourceEntry",
				id: 1
			}
		}
	},
	MoneroTransactionSetInputAck: {
		fields: {
			vini: {
				type: "bytes",
				id: 1
			},
			vini_hmac: {
				type: "bytes",
				id: 2
			},
			pseudo_out: {
				type: "bytes",
				id: 3
			},
			pseudo_out_hmac: {
				type: "bytes",
				id: 4
			},
			pseudo_out_alpha: {
				type: "bytes",
				id: 5
			},
			spend_key: {
				type: "bytes",
				id: 6
			}
		}
	},
	MoneroTransactionInputsPermutationRequest: {
		fields: {
			perm: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			}
		}
	},
	MoneroTransactionInputsPermutationAck: {
		fields: {
		}
	},
	MoneroTransactionInputViniRequest: {
		fields: {
			src_entr: {
				type: "MoneroTransactionSourceEntry",
				id: 1
			},
			vini: {
				type: "bytes",
				id: 2
			},
			vini_hmac: {
				type: "bytes",
				id: 3
			},
			pseudo_out: {
				type: "bytes",
				id: 4
			},
			pseudo_out_hmac: {
				type: "bytes",
				id: 5
			},
			orig_idx: {
				type: "uint32",
				id: 6
			}
		}
	},
	MoneroTransactionInputViniAck: {
		fields: {
		}
	},
	MoneroTransactionAllInputsSetRequest: {
		fields: {
		}
	},
	MoneroTransactionAllInputsSetAck: {
		fields: {
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 1
			}
		}
	},
	MoneroTransactionSetOutputRequest: {
		fields: {
			dst_entr: {
				type: "MoneroTransactionDestinationEntry",
				id: 1
			},
			dst_entr_hmac: {
				type: "bytes",
				id: 2
			},
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 3
			},
			is_offloaded_bp: {
				type: "bool",
				id: 4
			}
		}
	},
	MoneroTransactionSetOutputAck: {
		fields: {
			tx_out: {
				type: "bytes",
				id: 1
			},
			vouti_hmac: {
				type: "bytes",
				id: 2
			},
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 3
			},
			out_pk: {
				type: "bytes",
				id: 4
			},
			ecdh_info: {
				type: "bytes",
				id: 5
			}
		}
	},
	MoneroTransactionAllOutSetRequest: {
		fields: {
			rsig_data: {
				type: "MoneroTransactionRsigData",
				id: 1
			}
		}
	},
	MoneroTransactionAllOutSetAck: {
		fields: {
			extra: {
				type: "bytes",
				id: 1
			},
			tx_prefix_hash: {
				type: "bytes",
				id: 2
			},
			rv: {
				type: "MoneroRingCtSig",
				id: 4
			},
			full_message_hash: {
				type: "bytes",
				id: 5
			}
		},
		nested: {
			MoneroRingCtSig: {
				fields: {
					txn_fee: {
						type: "uint64",
						id: 1
					},
					message: {
						type: "bytes",
						id: 2
					},
					rv_type: {
						type: "uint32",
						id: 3
					}
				}
			}
		}
	},
	MoneroTransactionSignInputRequest: {
		fields: {
			src_entr: {
				type: "MoneroTransactionSourceEntry",
				id: 1
			},
			vini: {
				type: "bytes",
				id: 2
			},
			vini_hmac: {
				type: "bytes",
				id: 3
			},
			pseudo_out: {
				type: "bytes",
				id: 4
			},
			pseudo_out_hmac: {
				type: "bytes",
				id: 5
			},
			pseudo_out_alpha: {
				type: "bytes",
				id: 6
			},
			spend_key: {
				type: "bytes",
				id: 7
			},
			orig_idx: {
				type: "uint32",
				id: 8
			}
		}
	},
	MoneroTransactionSignInputAck: {
		fields: {
			signature: {
				type: "bytes",
				id: 1
			},
			pseudo_out: {
				type: "bytes",
				id: 2
			}
		}
	},
	MoneroTransactionFinalRequest: {
		fields: {
		}
	},
	MoneroTransactionFinalAck: {
		fields: {
			cout_key: {
				type: "bytes",
				id: 1
			},
			salt: {
				type: "bytes",
				id: 2
			},
			rand_mult: {
				type: "bytes",
				id: 3
			},
			tx_enc_keys: {
				type: "bytes",
				id: 4
			},
			opening_key: {
				type: "bytes",
				id: 5
			}
		}
	},
	MoneroKeyImageExportInitRequest: {
		fields: {
			num: {
				type: "uint64",
				id: 1
			},
			hash: {
				type: "bytes",
				id: 2
			},
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 3,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 4
			},
			subs: {
				rule: "repeated",
				type: "MoneroSubAddressIndicesList",
				id: 5
			}
		},
		nested: {
			MoneroSubAddressIndicesList: {
				fields: {
					account: {
						type: "uint32",
						id: 1
					},
					minor_indices: {
						rule: "repeated",
						type: "uint32",
						id: 2,
						options: {
							packed: false
						}
					}
				}
			}
		}
	},
	MoneroKeyImageExportInitAck: {
		fields: {
		}
	},
	MoneroKeyImageSyncStepRequest: {
		fields: {
			tdis: {
				rule: "repeated",
				type: "MoneroTransferDetails",
				id: 1
			}
		},
		nested: {
			MoneroTransferDetails: {
				fields: {
					out_key: {
						type: "bytes",
						id: 1
					},
					tx_pub_key: {
						type: "bytes",
						id: 2
					},
					additional_tx_pub_keys: {
						rule: "repeated",
						type: "bytes",
						id: 3
					},
					internal_output_index: {
						type: "uint64",
						id: 4
					},
					sub_addr_major: {
						type: "uint32",
						id: 5
					},
					sub_addr_minor: {
						type: "uint32",
						id: 6
					}
				}
			}
		}
	},
	MoneroKeyImageSyncStepAck: {
		fields: {
			kis: {
				rule: "repeated",
				type: "MoneroExportedKeyImage",
				id: 1
			}
		},
		nested: {
			MoneroExportedKeyImage: {
				fields: {
					iv: {
						type: "bytes",
						id: 1
					},
					blob: {
						type: "bytes",
						id: 3
					}
				}
			}
		}
	},
	MoneroKeyImageSyncFinalRequest: {
		fields: {
		}
	},
	MoneroKeyImageSyncFinalAck: {
		fields: {
			enc_key: {
				type: "bytes",
				id: 1
			}
		}
	},
	MoneroGetTxKeyRequest: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 2
			},
			salt1: {
				type: "bytes",
				id: 3
			},
			salt2: {
				type: "bytes",
				id: 4
			},
			tx_enc_keys: {
				type: "bytes",
				id: 5
			},
			tx_prefix_hash: {
				type: "bytes",
				id: 6
			},
			reason: {
				type: "uint32",
				id: 7
			},
			view_public_key: {
				type: "bytes",
				id: 8
			}
		}
	},
	MoneroGetTxKeyAck: {
		fields: {
			salt: {
				type: "bytes",
				id: 1
			},
			tx_keys: {
				type: "bytes",
				id: 2
			},
			tx_derivations: {
				type: "bytes",
				id: 3
			}
		}
	},
	MoneroLiveRefreshStartRequest: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network_type: {
				type: "uint32",
				id: 2
			}
		}
	},
	MoneroLiveRefreshStartAck: {
		fields: {
		}
	},
	MoneroLiveRefreshStepRequest: {
		fields: {
			out_key: {
				type: "bytes",
				id: 1
			},
			recv_deriv: {
				type: "bytes",
				id: 2
			},
			real_out_idx: {
				type: "uint64",
				id: 3
			},
			sub_addr_major: {
				type: "uint32",
				id: 4
			},
			sub_addr_minor: {
				type: "uint32",
				id: 5
			}
		}
	},
	MoneroLiveRefreshStepAck: {
		fields: {
			salt: {
				type: "bytes",
				id: 1
			},
			key_image: {
				type: "bytes",
				id: 2
			}
		}
	},
	MoneroLiveRefreshFinalRequest: {
		fields: {
		}
	},
	MoneroLiveRefreshFinalAck: {
		fields: {
		}
	},
	DebugMoneroDiagRequest: {
		fields: {
			ins: {
				type: "uint64",
				id: 1
			},
			p1: {
				type: "uint64",
				id: 2
			},
			p2: {
				type: "uint64",
				id: 3
			},
			pd: {
				rule: "repeated",
				type: "uint64",
				id: 4,
				options: {
					packed: false
				}
			},
			data1: {
				type: "bytes",
				id: 5
			},
			data2: {
				type: "bytes",
				id: 6
			}
		}
	},
	DebugMoneroDiagAck: {
		fields: {
			ins: {
				type: "uint64",
				id: 1
			},
			p1: {
				type: "uint64",
				id: 2
			},
			p2: {
				type: "uint64",
				id: 3
			},
			pd: {
				rule: "repeated",
				type: "uint64",
				id: 4,
				options: {
					packed: false
				}
			},
			data1: {
				type: "bytes",
				id: 5
			},
			data2: {
				type: "bytes",
				id: 6
			}
		}
	},
	NearGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	NearAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	NearSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	NearSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	NEMGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network: {
				type: "uint32",
				id: 2
			},
			show_display: {
				type: "bool",
				id: 3
			}
		}
	},
	NEMAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	NEMSignTx: {
		fields: {
			transaction: {
				type: "NEMTransactionCommon",
				id: 1
			},
			multisig: {
				type: "NEMTransactionCommon",
				id: 2
			},
			transfer: {
				type: "NEMTransfer",
				id: 3
			},
			cosigning: {
				type: "bool",
				id: 4
			},
			provision_namespace: {
				type: "NEMProvisionNamespace",
				id: 5
			},
			mosaic_creation: {
				type: "NEMMosaicCreation",
				id: 6
			},
			supply_change: {
				type: "NEMMosaicSupplyChange",
				id: 7
			},
			aggregate_modification: {
				type: "NEMAggregateModification",
				id: 8
			},
			importance_transfer: {
				type: "NEMImportanceTransfer",
				id: 9
			}
		},
		nested: {
			NEMTransactionCommon: {
				fields: {
					address_n: {
						rule: "repeated",
						type: "uint32",
						id: 1,
						options: {
							packed: false
						}
					},
					network: {
						type: "uint32",
						id: 2
					},
					timestamp: {
						type: "uint32",
						id: 3
					},
					fee: {
						type: "uint64",
						id: 4
					},
					deadline: {
						type: "uint32",
						id: 5
					},
					signer: {
						type: "bytes",
						id: 6
					}
				}
			},
			NEMTransfer: {
				fields: {
					recipient: {
						type: "string",
						id: 1
					},
					amount: {
						type: "uint64",
						id: 2
					},
					payload: {
						type: "bytes",
						id: 3
					},
					public_key: {
						type: "bytes",
						id: 4
					},
					mosaics: {
						rule: "repeated",
						type: "NEMMosaic",
						id: 5
					}
				},
				nested: {
					NEMMosaic: {
						fields: {
							namespace: {
								type: "string",
								id: 1
							},
							mosaic: {
								type: "string",
								id: 2
							},
							quantity: {
								type: "uint64",
								id: 3
							}
						}
					}
				}
			},
			NEMProvisionNamespace: {
				fields: {
					namespace: {
						type: "string",
						id: 1
					},
					parent: {
						type: "string",
						id: 2
					},
					sink: {
						type: "string",
						id: 3
					},
					fee: {
						type: "uint64",
						id: 4
					}
				}
			},
			NEMMosaicCreation: {
				fields: {
					definition: {
						type: "NEMMosaicDefinition",
						id: 1
					},
					sink: {
						type: "string",
						id: 2
					},
					fee: {
						type: "uint64",
						id: 3
					}
				},
				nested: {
					NEMMosaicDefinition: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							ticker: {
								type: "string",
								id: 2
							},
							namespace: {
								type: "string",
								id: 3
							},
							mosaic: {
								type: "string",
								id: 4
							},
							divisibility: {
								type: "uint32",
								id: 5
							},
							levy: {
								type: "NEMMosaicLevy",
								id: 6
							},
							fee: {
								type: "uint64",
								id: 7
							},
							levy_address: {
								type: "string",
								id: 8
							},
							levy_namespace: {
								type: "string",
								id: 9
							},
							levy_mosaic: {
								type: "string",
								id: 10
							},
							supply: {
								type: "uint64",
								id: 11
							},
							mutable_supply: {
								type: "bool",
								id: 12
							},
							transferable: {
								type: "bool",
								id: 13
							},
							description: {
								type: "string",
								id: 14
							},
							networks: {
								rule: "repeated",
								type: "uint32",
								id: 15,
								options: {
									packed: false
								}
							}
						},
						nested: {
							NEMMosaicLevy: {
								values: {
									MosaicLevy_Absolute: 1,
									MosaicLevy_Percentile: 2
								}
							}
						}
					}
				}
			},
			NEMMosaicSupplyChange: {
				fields: {
					namespace: {
						type: "string",
						id: 1
					},
					mosaic: {
						type: "string",
						id: 2
					},
					type: {
						type: "NEMSupplyChangeType",
						id: 3
					},
					delta: {
						type: "uint64",
						id: 4
					}
				},
				nested: {
					NEMSupplyChangeType: {
						values: {
							SupplyChange_Increase: 1,
							SupplyChange_Decrease: 2
						}
					}
				}
			},
			NEMAggregateModification: {
				fields: {
					modifications: {
						rule: "repeated",
						type: "NEMCosignatoryModification",
						id: 1
					},
					relative_change: {
						type: "sint32",
						id: 2
					}
				},
				nested: {
					NEMCosignatoryModification: {
						fields: {
							type: {
								type: "NEMModificationType",
								id: 1
							},
							public_key: {
								type: "bytes",
								id: 2
							}
						},
						nested: {
							NEMModificationType: {
								values: {
									CosignatoryModification_Add: 1,
									CosignatoryModification_Delete: 2
								}
							}
						}
					}
				}
			},
			NEMImportanceTransfer: {
				fields: {
					mode: {
						type: "NEMImportanceTransferMode",
						id: 1
					},
					public_key: {
						type: "bytes",
						id: 2
					}
				},
				nested: {
					NEMImportanceTransferMode: {
						values: {
							ImportanceTransfer_Activate: 1,
							ImportanceTransfer_Deactivate: 2
						}
					}
				}
			}
		}
	},
	NEMSignedTx: {
		fields: {
			data: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	NEMDecryptMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			network: {
				type: "uint32",
				id: 2
			},
			public_key: {
				type: "bytes",
				id: 3
			},
			payload: {
				type: "bytes",
				id: 4
			}
		}
	},
	NEMDecryptedMessage: {
		fields: {
			payload: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	NexaGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			},
			prefix: {
				type: "string",
				id: 3,
				options: {
					"default": "nexa"
				}
			}
		}
	},
	NexaAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			},
			public_key: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	NexaSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_message: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			prefix: {
				type: "string",
				id: 3,
				options: {
					"default": "nexa"
				}
			},
			input_count: {
				type: "uint32",
				id: 4,
				options: {
					"default": 1
				}
			}
		}
	},
	NexaTxInputRequest: {
		fields: {
			request_index: {
				rule: "required",
				type: "uint32",
				id: 1
			},
			signature: {
				type: "bytes",
				id: 2
			}
		}
	},
	NexaTxInputAck: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_message: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	NexaSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	PolkadotGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			prefix: {
				rule: "required",
				type: "uint32",
				id: 2
			},
			network: {
				rule: "required",
				type: "string",
				id: 3
			},
			show_display: {
				type: "bool",
				id: 4
			}
		}
	},
	PolkadotAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			},
			public_key: {
				type: "string",
				id: 2
			}
		}
	},
	PolkadotSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			network: {
				rule: "required",
				type: "string",
				id: 3
			}
		}
	},
	PolkadotSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	RippleGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	RippleAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	RippleSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			fee: {
				type: "uint64",
				id: 2
			},
			flags: {
				type: "uint32",
				id: 3
			},
			sequence: {
				type: "uint32",
				id: 4
			},
			last_ledger_sequence: {
				type: "uint32",
				id: 5
			},
			payment: {
				type: "RipplePayment",
				id: 6
			}
		},
		nested: {
			RipplePayment: {
				fields: {
					amount: {
						rule: "required",
						type: "uint64",
						id: 1
					},
					destination: {
						rule: "required",
						type: "string",
						id: 2
					},
					destination_tag: {
						type: "uint32",
						id: 3
					}
				}
			}
		}
	},
	RippleSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			serialized_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SolanaGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	SolanaAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	SolanaSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SolanaSignedTx: {
		fields: {
			signature: {
				type: "bytes",
				id: 1
			}
		}
	},
	StarcoinGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	StarcoinAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	StarcoinGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	StarcoinPublicKey: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			}
		}
	},
	StarcoinSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				type: "bytes",
				id: 2
			}
		}
	},
	StarcoinSignedTx: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	StarcoinSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				type: "bytes",
				id: 2
			}
		}
	},
	StarcoinMessageSignature: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	StarcoinVerifyMessage: {
		fields: {
			public_key: {
				type: "bytes",
				id: 1
			},
			signature: {
				type: "bytes",
				id: 2
			},
			message: {
				type: "bytes",
				id: 3
			}
		}
	},
	StellarAssetType: {
		values: {
			NATIVE: 0,
			ALPHANUM4: 1,
			ALPHANUM12: 2
		}
	},
	StellarAsset: {
		fields: {
			type: {
				rule: "required",
				type: "StellarAssetType",
				id: 1
			},
			code: {
				type: "string",
				id: 2
			},
			issuer: {
				type: "string",
				id: 3
			}
		}
	},
	StellarGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	StellarAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	StellarSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 2,
				options: {
					packed: false
				}
			},
			network_passphrase: {
				rule: "required",
				type: "string",
				id: 3
			},
			source_account: {
				rule: "required",
				type: "string",
				id: 4
			},
			fee: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			sequence_number: {
				rule: "required",
				type: "uint64",
				id: 6
			},
			timebounds_start: {
				rule: "required",
				type: "uint32",
				id: 8
			},
			timebounds_end: {
				rule: "required",
				type: "uint32",
				id: 9
			},
			memo_type: {
				rule: "required",
				type: "StellarMemoType",
				id: 10
			},
			memo_text: {
				type: "string",
				id: 11
			},
			memo_id: {
				type: "uint64",
				id: 12
			},
			memo_hash: {
				type: "bytes",
				id: 13
			},
			num_operations: {
				rule: "required",
				type: "uint32",
				id: 14
			}
		},
		nested: {
			StellarMemoType: {
				values: {
					NONE: 0,
					TEXT: 1,
					ID: 2,
					HASH: 3,
					RETURN: 4
				}
			}
		}
	},
	StellarTxOpRequest: {
		fields: {
		}
	},
	StellarPaymentOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			destination_account: {
				rule: "required",
				type: "string",
				id: 2
			},
			asset: {
				rule: "required",
				type: "StellarAsset",
				id: 3
			},
			amount: {
				rule: "required",
				type: "sint64",
				id: 4
			}
		}
	},
	StellarCreateAccountOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			new_account: {
				rule: "required",
				type: "string",
				id: 2
			},
			starting_balance: {
				rule: "required",
				type: "sint64",
				id: 3
			}
		}
	},
	StellarPathPaymentStrictReceiveOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			send_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			send_max: {
				rule: "required",
				type: "sint64",
				id: 3
			},
			destination_account: {
				rule: "required",
				type: "string",
				id: 4
			},
			destination_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 5
			},
			destination_amount: {
				rule: "required",
				type: "sint64",
				id: 6
			},
			paths: {
				rule: "repeated",
				type: "StellarAsset",
				id: 7
			}
		}
	},
	StellarPathPaymentStrictSendOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			send_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			send_amount: {
				rule: "required",
				type: "sint64",
				id: 3
			},
			destination_account: {
				rule: "required",
				type: "string",
				id: 4
			},
			destination_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 5
			},
			destination_min: {
				rule: "required",
				type: "sint64",
				id: 6
			},
			paths: {
				rule: "repeated",
				type: "StellarAsset",
				id: 7
			}
		}
	},
	StellarManageSellOfferOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			selling_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			buying_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 3
			},
			amount: {
				rule: "required",
				type: "sint64",
				id: 4
			},
			price_n: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			price_d: {
				rule: "required",
				type: "uint32",
				id: 6
			},
			offer_id: {
				rule: "required",
				type: "uint64",
				id: 7
			}
		}
	},
	StellarManageBuyOfferOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			selling_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			buying_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 3
			},
			amount: {
				rule: "required",
				type: "sint64",
				id: 4
			},
			price_n: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			price_d: {
				rule: "required",
				type: "uint32",
				id: 6
			},
			offer_id: {
				rule: "required",
				type: "uint64",
				id: 7
			}
		}
	},
	StellarCreatePassiveSellOfferOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			selling_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			buying_asset: {
				rule: "required",
				type: "StellarAsset",
				id: 3
			},
			amount: {
				rule: "required",
				type: "sint64",
				id: 4
			},
			price_n: {
				rule: "required",
				type: "uint32",
				id: 5
			},
			price_d: {
				rule: "required",
				type: "uint32",
				id: 6
			}
		}
	},
	StellarSetOptionsOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			inflation_destination_account: {
				type: "string",
				id: 2
			},
			clear_flags: {
				type: "uint32",
				id: 3
			},
			set_flags: {
				type: "uint32",
				id: 4
			},
			master_weight: {
				type: "uint32",
				id: 5
			},
			low_threshold: {
				type: "uint32",
				id: 6
			},
			medium_threshold: {
				type: "uint32",
				id: 7
			},
			high_threshold: {
				type: "uint32",
				id: 8
			},
			home_domain: {
				type: "string",
				id: 9
			},
			signer_type: {
				type: "StellarSignerType",
				id: 10
			},
			signer_key: {
				type: "bytes",
				id: 11
			},
			signer_weight: {
				type: "uint32",
				id: 12
			}
		},
		nested: {
			StellarSignerType: {
				values: {
					ACCOUNT: 0,
					PRE_AUTH: 1,
					HASH: 2
				}
			}
		}
	},
	StellarChangeTrustOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			asset: {
				rule: "required",
				type: "StellarAsset",
				id: 2
			},
			limit: {
				rule: "required",
				type: "uint64",
				id: 3
			}
		}
	},
	StellarAllowTrustOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			trusted_account: {
				rule: "required",
				type: "string",
				id: 2
			},
			asset_type: {
				rule: "required",
				type: "StellarAssetType",
				id: 3
			},
			asset_code: {
				type: "string",
				id: 4
			},
			is_authorized: {
				rule: "required",
				type: "bool",
				id: 5
			}
		}
	},
	StellarAccountMergeOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			destination_account: {
				rule: "required",
				type: "string",
				id: 2
			}
		}
	},
	StellarManageDataOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			key: {
				rule: "required",
				type: "string",
				id: 2
			},
			value: {
				type: "bytes",
				id: 3
			}
		}
	},
	StellarBumpSequenceOp: {
		fields: {
			source_account: {
				type: "string",
				id: 1
			},
			bump_to: {
				rule: "required",
				type: "uint64",
				id: 2
			}
		}
	},
	StellarSignedTx: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SuiGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	SuiAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	SuiSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			raw_tx: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	SuiSignedTx: {
		fields: {
			public_key: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	TezosGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	TezosAddress: {
		fields: {
			address: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	TezosGetPublicKey: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	TezosPublicKey: {
		fields: {
			public_key: {
				rule: "required",
				type: "string",
				id: 1
			}
		}
	},
	TezosSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			branch: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			reveal: {
				type: "TezosRevealOp",
				id: 3
			},
			transaction: {
				type: "TezosTransactionOp",
				id: 4
			},
			origination: {
				type: "TezosOriginationOp",
				id: 5
			},
			delegation: {
				type: "TezosDelegationOp",
				id: 6
			},
			proposal: {
				type: "TezosProposalOp",
				id: 7
			},
			ballot: {
				type: "TezosBallotOp",
				id: 8
			}
		},
		nested: {
			TezosContractID: {
				fields: {
					tag: {
						rule: "required",
						type: "TezosContractType",
						id: 1
					},
					hash: {
						rule: "required",
						type: "bytes",
						id: 2
					}
				},
				nested: {
					TezosContractType: {
						values: {
							Implicit: 0,
							Originated: 1
						}
					}
				}
			},
			TezosRevealOp: {
				fields: {
					source: {
						rule: "required",
						type: "bytes",
						id: 7
					},
					fee: {
						rule: "required",
						type: "uint64",
						id: 2
					},
					counter: {
						rule: "required",
						type: "uint64",
						id: 3
					},
					gas_limit: {
						rule: "required",
						type: "uint64",
						id: 4
					},
					storage_limit: {
						rule: "required",
						type: "uint64",
						id: 5
					},
					public_key: {
						rule: "required",
						type: "bytes",
						id: 6
					}
				}
			},
			TezosTransactionOp: {
				fields: {
					source: {
						rule: "required",
						type: "bytes",
						id: 9
					},
					fee: {
						rule: "required",
						type: "uint64",
						id: 2
					},
					counter: {
						rule: "required",
						type: "uint64",
						id: 3
					},
					gas_limit: {
						rule: "required",
						type: "uint64",
						id: 4
					},
					storage_limit: {
						rule: "required",
						type: "uint64",
						id: 5
					},
					amount: {
						rule: "required",
						type: "uint64",
						id: 6
					},
					destination: {
						rule: "required",
						type: "TezosContractID",
						id: 7
					},
					parameters: {
						type: "bytes",
						id: 8
					},
					parameters_manager: {
						type: "TezosParametersManager",
						id: 10
					}
				},
				nested: {
					TezosParametersManager: {
						fields: {
							set_delegate: {
								type: "bytes",
								id: 1
							},
							cancel_delegate: {
								type: "bool",
								id: 2
							},
							transfer: {
								type: "TezosManagerTransfer",
								id: 3
							}
						},
						nested: {
							TezosManagerTransfer: {
								fields: {
									destination: {
										type: "TezosContractID",
										id: 1
									},
									amount: {
										type: "uint64",
										id: 2
									}
								}
							}
						}
					}
				}
			},
			TezosOriginationOp: {
				fields: {
					source: {
						rule: "required",
						type: "bytes",
						id: 12
					},
					fee: {
						rule: "required",
						type: "uint64",
						id: 2
					},
					counter: {
						rule: "required",
						type: "uint64",
						id: 3
					},
					gas_limit: {
						rule: "required",
						type: "uint64",
						id: 4
					},
					storage_limit: {
						rule: "required",
						type: "uint64",
						id: 5
					},
					manager_pubkey: {
						type: "bytes",
						id: 6
					},
					balance: {
						rule: "required",
						type: "uint64",
						id: 7
					},
					spendable: {
						type: "bool",
						id: 8
					},
					delegatable: {
						type: "bool",
						id: 9
					},
					delegate: {
						type: "bytes",
						id: 10
					},
					script: {
						rule: "required",
						type: "bytes",
						id: 11
					}
				}
			},
			TezosDelegationOp: {
				fields: {
					source: {
						rule: "required",
						type: "bytes",
						id: 7
					},
					fee: {
						rule: "required",
						type: "uint64",
						id: 2
					},
					counter: {
						rule: "required",
						type: "uint64",
						id: 3
					},
					gas_limit: {
						rule: "required",
						type: "uint64",
						id: 4
					},
					storage_limit: {
						rule: "required",
						type: "uint64",
						id: 5
					},
					delegate: {
						rule: "required",
						type: "bytes",
						id: 6
					}
				}
			},
			TezosProposalOp: {
				fields: {
					source: {
						type: "bytes",
						id: 1
					},
					period: {
						type: "uint64",
						id: 2
					},
					proposals: {
						rule: "repeated",
						type: "bytes",
						id: 4
					}
				}
			},
			TezosBallotOp: {
				fields: {
					source: {
						type: "bytes",
						id: 1
					},
					period: {
						type: "uint64",
						id: 2
					},
					proposal: {
						type: "bytes",
						id: 3
					},
					ballot: {
						type: "TezosBallotType",
						id: 4
					}
				},
				nested: {
					TezosBallotType: {
						values: {
							Yay: 0,
							Nay: 1,
							Pass: 2
						}
					}
				}
			}
		}
	},
	TezosSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "string",
				id: 1
			},
			sig_op_contents: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			operation_hash: {
				rule: "required",
				type: "string",
				id: 3
			}
		}
	},
	TronGetAddress: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			show_display: {
				type: "bool",
				id: 2
			}
		}
	},
	TronAddress: {
		fields: {
			address: {
				type: "string",
				id: 1
			}
		}
	},
	TronSignTx: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			ref_block_bytes: {
				rule: "required",
				type: "bytes",
				id: 2
			},
			ref_block_hash: {
				rule: "required",
				type: "bytes",
				id: 3
			},
			expiration: {
				rule: "required",
				type: "uint64",
				id: 4
			},
			data: {
				type: "string",
				id: 5
			},
			contract: {
				rule: "required",
				type: "TronContract",
				id: 6
			},
			timestamp: {
				rule: "required",
				type: "uint64",
				id: 7
			},
			fee_limit: {
				type: "uint64",
				id: 8
			}
		},
		nested: {
			TronContract: {
				fields: {
					transfer_contract: {
						type: "TronTransferContract",
						id: 2
					},
					freeze_balance_contract: {
						type: "TronFreezeBalanceContract",
						id: 11
					},
					unfreeze_balance_contract: {
						type: "TronUnfreezeBalanceContract",
						id: 12
					},
					withdraw_balance_contract: {
						type: "TronWithdrawBalanceContract",
						id: 13
					},
					trigger_smart_contract: {
						type: "TronTriggerSmartContract",
						id: 31
					},
					freeze_balance_v2_contract: {
						type: "TronFreezeBalanceV2Contract",
						id: 54
					},
					unfreeze_balance_v2_contract: {
						type: "TronUnfreezeBalanceV2Contract",
						id: 55
					},
					withdraw_expire_unfreeze_contract: {
						type: "TronWithdrawExpireUnfreezeContract",
						id: 56
					},
					delegate_resource_contract: {
						type: "TronDelegateResourceContract",
						id: 57
					},
					undelegate_resource_contract: {
						type: "TronUnDelegateResourceContract",
						id: 58
					}
				},
				nested: {
					TronTransferContract: {
						fields: {
							to_address: {
								type: "string",
								id: 2
							},
							amount: {
								type: "uint64",
								id: 3
							}
						}
					},
					TronTriggerSmartContract: {
						fields: {
							contract_address: {
								type: "string",
								id: 2
							},
							call_value: {
								type: "uint64",
								id: 3
							},
							data: {
								type: "bytes",
								id: 4
							},
							call_token_value: {
								type: "uint64",
								id: 5
							},
							asset_id: {
								type: "uint64",
								id: 6
							}
						}
					},
					TronResourceCode: {
						values: {
							BANDWIDTH: 0,
							ENERGY: 1
						}
					},
					TronFreezeBalanceContract: {
						fields: {
							frozen_balance: {
								type: "uint64",
								id: 1
							},
							frozen_duration: {
								type: "uint64",
								id: 2
							},
							resource: {
								type: "TronResourceCode",
								id: 3
							},
							receiver_address: {
								type: "string",
								id: 4
							}
						}
					},
					TronUnfreezeBalanceContract: {
						fields: {
							resource: {
								type: "TronResourceCode",
								id: 1
							},
							receiver_address: {
								type: "string",
								id: 2
							}
						}
					},
					TronWithdrawBalanceContract: {
						fields: {
							owner_address: {
								type: "bytes",
								id: 1
							}
						}
					},
					TronFreezeBalanceV2Contract: {
						fields: {
							frozen_balance: {
								type: "uint64",
								id: 2
							},
							resource: {
								type: "TronResourceCode",
								id: 3
							}
						}
					},
					TronUnfreezeBalanceV2Contract: {
						fields: {
							unfreeze_balance: {
								type: "uint64",
								id: 2
							},
							resource: {
								type: "TronResourceCode",
								id: 3
							}
						}
					},
					TronWithdrawExpireUnfreezeContract: {
						fields: {
						}
					},
					TronDelegateResourceContract: {
						fields: {
							resource: {
								type: "TronResourceCode",
								id: 2
							},
							balance: {
								type: "uint64",
								id: 3
							},
							receiver_address: {
								type: "string",
								id: 4
							},
							lock: {
								type: "bool",
								id: 5
							}
						}
					},
					TronUnDelegateResourceContract: {
						fields: {
							resource: {
								type: "TronResourceCode",
								id: 2
							},
							balance: {
								type: "uint64",
								id: 3
							},
							receiver_address: {
								type: "string",
								id: 4
							}
						}
					}
				}
			}
		}
	},
	TronSignedTx: {
		fields: {
			signature: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			serialized_tx: {
				type: "bytes",
				id: 2
			}
		}
	},
	TronSignMessage: {
		fields: {
			address_n: {
				rule: "repeated",
				type: "uint32",
				id: 1,
				options: {
					packed: false
				}
			},
			message: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	TronMessageSignature: {
		fields: {
			address: {
				rule: "required",
				type: "bytes",
				id: 1
			},
			signature: {
				rule: "required",
				type: "bytes",
				id: 2
			}
		}
	},
	WebAuthnListResidentCredentials: {
		fields: {
		}
	},
	WebAuthnAddResidentCredential: {
		fields: {
			credential_id: {
				type: "bytes",
				id: 1
			}
		}
	},
	WebAuthnRemoveResidentCredential: {
		fields: {
			index: {
				type: "uint32",
				id: 1
			}
		}
	},
	WebAuthnCredentials: {
		fields: {
			credentials: {
				rule: "repeated",
				type: "WebAuthnCredential",
				id: 1
			}
		},
		nested: {
			WebAuthnCredential: {
				fields: {
					index: {
						type: "uint32",
						id: 1
					},
					id: {
						type: "bytes",
						id: 2
					},
					rp_id: {
						type: "string",
						id: 3
					},
					rp_name: {
						type: "string",
						id: 4
					},
					user_id: {
						type: "bytes",
						id: 5
					},
					user_name: {
						type: "string",
						id: 6
					},
					user_display_name: {
						type: "string",
						id: 7
					},
					creation_time: {
						type: "uint32",
						id: 8
					},
					hmac_secret: {
						type: "bool",
						id: 9
					},
					use_sign_count: {
						type: "bool",
						id: 10
					},
					algorithm: {
						type: "sint32",
						id: 11
					},
					curve: {
						type: "sint32",
						id: 12
					}
				}
			}
		}
	},
	wire_in: {
		type: "bool",
		id: 50002,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_out: {
		type: "bool",
		id: 50003,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_debug_in: {
		type: "bool",
		id: 50004,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_debug_out: {
		type: "bool",
		id: 50005,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_tiny: {
		type: "bool",
		id: 50006,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_bootloader: {
		type: "bool",
		id: 50007,
		extend: "google.protobuf.EnumValueOptions"
	},
	wire_no_fsm: {
		type: "bool",
		id: 50008,
		extend: "google.protobuf.EnumValueOptions"
	},
	facotry: {
		type: "bool",
		id: 50501,
		extend: "google.protobuf.EnumValueOptions"
	},
	bitcoin_only: {
		type: "bool",
		id: 60000,
		extend: "google.protobuf.EnumValueOptions"
	},
	has_bitcoin_only_values: {
		type: "bool",
		id: 51001,
		extend: "google.protobuf.EnumOptions"
	},
	unstable: {
		type: "bool",
		id: 52001,
		extend: "google.protobuf.MessageOptions"
	},
	wire_type: {
		type: "uint32",
		id: 52002,
		extend: "google.protobuf.MessageOptions"
	},
	experimental: {
		type: "bool",
		id: 53001,
		extend: "google.protobuf.FieldOptions"
	},
	include_in_bitcoin_only: {
		type: "bool",
		id: 60000,
		extend: "google.protobuf.FileOptions"
	},
	CommandFlags: {
		values: {
			Default: 0,
			Factory_Only: 1
		}
	},
	MessageType: {
		options: {
			"(has_bitcoin_only_values)": true
		},
		values: {
			MessageType_Initialize: 0,
			MessageType_Ping: 1,
			MessageType_Success: 2,
			MessageType_Failure: 3,
			MessageType_ChangePin: 4,
			MessageType_WipeDevice: 5,
			MessageType_GetEntropy: 9,
			MessageType_Entropy: 10,
			MessageType_LoadDevice: 13,
			MessageType_ResetDevice: 14,
			MessageType_Features: 17,
			MessageType_PinMatrixRequest: 18,
			MessageType_PinMatrixAck: 19,
			MessageType_Cancel: 20,
			MessageType_LockDevice: 24,
			MessageType_ApplySettings: 25,
			MessageType_ButtonRequest: 26,
			MessageType_ButtonAck: 27,
			MessageType_ApplyFlags: 28,
			MessageType_BackupDevice: 34,
			MessageType_EntropyRequest: 35,
			MessageType_EntropyAck: 36,
			MessageType_PassphraseRequest: 41,
			MessageType_PassphraseAck: 42,
			MessageType_RecoveryDevice: 45,
			MessageType_WordRequest: 46,
			MessageType_WordAck: 47,
			MessageType_GetFeatures: 55,
			MessageType_SdProtect: 79,
			MessageType_ChangeWipeCode: 82,
			MessageType_EndSession: 83,
			MessageType_DoPreauthorized: 84,
			MessageType_PreauthorizedRequest: 85,
			MessageType_CancelAuthorization: 86,
			MessageType_RebootToBootloader: 87,
			MessageType_SetU2FCounter: 63,
			MessageType_GetNextU2FCounter: 80,
			MessageType_NextU2FCounter: 81,
			MessageType_Deprecated_PassphraseStateRequest: 77,
			MessageType_Deprecated_PassphraseStateAck: 78,
			MessageType_FirmwareErase: 6,
			MessageType_FirmwareErase_ex: 16,
			MessageType_FirmwareUpload: 7,
			MessageType_FirmwareRequest: 8,
			MessageType_SelfTest: 32,
			MessageType_Reboot: 30000,
			MessageType_FirmwareUpdateEmmc: 30001,
			MessageType_GetPublicKey: 11,
			MessageType_PublicKey: 12,
			MessageType_SignTx: 15,
			MessageType_TxRequest: 21,
			MessageType_TxAck: 22,
			MessageType_GetAddress: 29,
			MessageType_Address: 30,
			MessageType_SignMessage: 38,
			MessageType_VerifyMessage: 39,
			MessageType_MessageSignature: 40,
			MessageType_GetOwnershipId: 43,
			MessageType_OwnershipId: 44,
			MessageType_GetOwnershipProof: 49,
			MessageType_OwnershipProof: 50,
			MessageType_AuthorizeCoinJoin: 51,
			MessageType_CipherKeyValue: 23,
			MessageType_CipheredKeyValue: 48,
			MessageType_SignIdentity: 53,
			MessageType_SignedIdentity: 54,
			MessageType_GetECDHSessionKey: 61,
			MessageType_ECDHSessionKey: 62,
			MessageType_CosiCommit: 71,
			MessageType_CosiCommitment: 72,
			MessageType_CosiSign: 73,
			MessageType_CosiSignature: 74,
			MessageType_BatchGetPublickeys: 10016,
			MessageType_EcdsaPublicKeys: 10017,
			MessageType_DebugLinkDecision: 100,
			MessageType_DebugLinkGetState: 101,
			MessageType_DebugLinkState: 102,
			MessageType_DebugLinkStop: 103,
			MessageType_DebugLinkLog: 104,
			MessageType_DebugLinkMemoryRead: 110,
			MessageType_DebugLinkMemory: 111,
			MessageType_DebugLinkMemoryWrite: 112,
			MessageType_DebugLinkFlashErase: 113,
			MessageType_DebugLinkLayout: 9001,
			MessageType_DebugLinkReseedRandom: 9002,
			MessageType_DebugLinkRecordScreen: 9003,
			MessageType_DebugLinkEraseSdCard: 9005,
			MessageType_DebugLinkWatchLayout: 9006,
			MessageType_EmmcFixPermission: 30100,
			MessageType_EmmcPath: 30101,
			MessageType_EmmcPathInfo: 30102,
			MessageType_EmmcFile: 30103,
			MessageType_EmmcFileRead: 30104,
			MessageType_EmmcFileWrite: 30105,
			MessageType_EmmcFileDelete: 30106,
			MessageType_EmmcDir: 30107,
			MessageType_EmmcDirList: 30108,
			MessageType_EmmcDirMake: 30109,
			MessageType_EmmcDirRemove: 30110,
			MessageType_EthereumGetPublicKey: 450,
			MessageType_EthereumPublicKey: 451,
			MessageType_EthereumGetAddress: 56,
			MessageType_EthereumAddress: 57,
			MessageType_EthereumSignTx: 58,
			MessageType_EthereumSignTxEIP1559: 452,
			MessageType_EthereumTxRequest: 59,
			MessageType_EthereumTxAck: 60,
			MessageType_EthereumSignMessage: 64,
			MessageType_EthereumVerifyMessage: 65,
			MessageType_EthereumMessageSignature: 66,
			MessageType_EthereumSignTypedData: 464,
			MessageType_EthereumTypedDataStructRequest: 465,
			MessageType_EthereumTypedDataStructAck: 466,
			MessageType_EthereumTypedDataValueRequest: 467,
			MessageType_EthereumTypedDataValueAck: 468,
			MessageType_EthereumTypedDataSignature: 469,
			MessageType_EthereumSignTypedHash: 470,
			MessageType_NEMGetAddress: 67,
			MessageType_NEMAddress: 68,
			MessageType_NEMSignTx: 69,
			MessageType_NEMSignedTx: 70,
			MessageType_NEMDecryptMessage: 75,
			MessageType_NEMDecryptedMessage: 76,
			MessageType_TezosGetAddress: 150,
			MessageType_TezosAddress: 151,
			MessageType_TezosSignTx: 152,
			MessageType_TezosSignedTx: 153,
			MessageType_TezosGetPublicKey: 154,
			MessageType_TezosPublicKey: 155,
			MessageType_StellarSignTx: 202,
			MessageType_StellarTxOpRequest: 203,
			MessageType_StellarGetAddress: 207,
			MessageType_StellarAddress: 208,
			MessageType_StellarCreateAccountOp: 210,
			MessageType_StellarPaymentOp: 211,
			MessageType_StellarPathPaymentStrictReceiveOp: 212,
			MessageType_StellarManageSellOfferOp: 213,
			MessageType_StellarCreatePassiveSellOfferOp: 214,
			MessageType_StellarSetOptionsOp: 215,
			MessageType_StellarChangeTrustOp: 216,
			MessageType_StellarAllowTrustOp: 217,
			MessageType_StellarAccountMergeOp: 218,
			MessageType_StellarManageDataOp: 220,
			MessageType_StellarBumpSequenceOp: 221,
			MessageType_StellarManageBuyOfferOp: 222,
			MessageType_StellarPathPaymentStrictSendOp: 223,
			MessageType_StellarSignedTx: 230,
			MessageType_CardanoGetPublicKey: 305,
			MessageType_CardanoPublicKey: 306,
			MessageType_CardanoGetAddress: 307,
			MessageType_CardanoAddress: 308,
			MessageType_CardanoTxItemAck: 313,
			MessageType_CardanoTxAuxiliaryDataSupplement: 314,
			MessageType_CardanoTxWitnessRequest: 315,
			MessageType_CardanoTxWitnessResponse: 316,
			MessageType_CardanoTxHostAck: 317,
			MessageType_CardanoTxBodyHash: 318,
			MessageType_CardanoSignTxFinished: 319,
			MessageType_CardanoSignTxInit: 320,
			MessageType_CardanoTxInput: 321,
			MessageType_CardanoTxOutput: 322,
			MessageType_CardanoAssetGroup: 323,
			MessageType_CardanoToken: 324,
			MessageType_CardanoTxCertificate: 325,
			MessageType_CardanoTxWithdrawal: 326,
			MessageType_CardanoTxAuxiliaryData: 327,
			MessageType_CardanoPoolOwner: 328,
			MessageType_CardanoPoolRelayParameters: 329,
			MessageType_CardanoGetNativeScriptHash: 330,
			MessageType_CardanoNativeScriptHash: 331,
			MessageType_CardanoTxMint: 332,
			MessageType_CardanoTxCollateralInput: 333,
			MessageType_CardanoTxRequiredSigner: 334,
			MessageType_CardanoTxInlineDatumChunk: 335,
			MessageType_CardanoTxReferenceScriptChunk: 336,
			MessageType_CardanoTxReferenceInput: 337,
			MessageType_CardanoSignMessage: 350,
			MessageType_CardanoMessageSignature: 351,
			MessageType_RippleGetAddress: 400,
			MessageType_RippleAddress: 401,
			MessageType_RippleSignTx: 402,
			MessageType_RippleSignedTx: 403,
			MessageType_MoneroTransactionInitRequest: 501,
			MessageType_MoneroTransactionInitAck: 502,
			MessageType_MoneroTransactionSetInputRequest: 503,
			MessageType_MoneroTransactionSetInputAck: 504,
			MessageType_MoneroTransactionInputsPermutationRequest: 505,
			MessageType_MoneroTransactionInputsPermutationAck: 506,
			MessageType_MoneroTransactionInputViniRequest: 507,
			MessageType_MoneroTransactionInputViniAck: 508,
			MessageType_MoneroTransactionAllInputsSetRequest: 509,
			MessageType_MoneroTransactionAllInputsSetAck: 510,
			MessageType_MoneroTransactionSetOutputRequest: 511,
			MessageType_MoneroTransactionSetOutputAck: 512,
			MessageType_MoneroTransactionAllOutSetRequest: 513,
			MessageType_MoneroTransactionAllOutSetAck: 514,
			MessageType_MoneroTransactionSignInputRequest: 515,
			MessageType_MoneroTransactionSignInputAck: 516,
			MessageType_MoneroTransactionFinalRequest: 517,
			MessageType_MoneroTransactionFinalAck: 518,
			MessageType_MoneroKeyImageExportInitRequest: 530,
			MessageType_MoneroKeyImageExportInitAck: 531,
			MessageType_MoneroKeyImageSyncStepRequest: 532,
			MessageType_MoneroKeyImageSyncStepAck: 533,
			MessageType_MoneroKeyImageSyncFinalRequest: 534,
			MessageType_MoneroKeyImageSyncFinalAck: 535,
			MessageType_MoneroGetAddress: 540,
			MessageType_MoneroAddress: 541,
			MessageType_MoneroGetWatchKey: 542,
			MessageType_MoneroWatchKey: 543,
			MessageType_DebugMoneroDiagRequest: 546,
			MessageType_DebugMoneroDiagAck: 547,
			MessageType_MoneroGetTxKeyRequest: 550,
			MessageType_MoneroGetTxKeyAck: 551,
			MessageType_MoneroLiveRefreshStartRequest: 552,
			MessageType_MoneroLiveRefreshStartAck: 553,
			MessageType_MoneroLiveRefreshStepRequest: 554,
			MessageType_MoneroLiveRefreshStepAck: 555,
			MessageType_MoneroLiveRefreshFinalRequest: 556,
			MessageType_MoneroLiveRefreshFinalAck: 557,
			MessageType_EosGetPublicKey: 600,
			MessageType_EosPublicKey: 601,
			MessageType_EosSignTx: 602,
			MessageType_EosTxActionRequest: 603,
			MessageType_EosTxActionAck: 604,
			MessageType_EosSignedTx: 605,
			MessageType_BinanceGetAddress: 700,
			MessageType_BinanceAddress: 701,
			MessageType_BinanceGetPublicKey: 702,
			MessageType_BinancePublicKey: 703,
			MessageType_BinanceSignTx: 704,
			MessageType_BinanceTxRequest: 705,
			MessageType_BinanceTransferMsg: 706,
			MessageType_BinanceOrderMsg: 707,
			MessageType_BinanceCancelMsg: 708,
			MessageType_BinanceSignedTx: 709,
			MessageType_SolanaGetAddress: 10100,
			MessageType_SolanaAddress: 10101,
			MessageType_SolanaSignTx: 10102,
			MessageType_SolanaSignedTx: 10103,
			MessageType_StarcoinGetAddress: 10300,
			MessageType_StarcoinAddress: 10301,
			MessageType_StarcoinGetPublicKey: 10302,
			MessageType_StarcoinPublicKey: 10303,
			MessageType_StarcoinSignTx: 10304,
			MessageType_StarcoinSignedTx: 10305,
			MessageType_StarcoinSignMessage: 10306,
			MessageType_StarcoinMessageSignature: 10307,
			MessageType_StarcoinVerifyMessage: 10308,
			MessageType_AptosGetAddress: 10600,
			MessageType_AptosAddress: 10601,
			MessageType_AptosSignTx: 10602,
			MessageType_AptosSignedTx: 10603,
			MessageType_AptosSignMessage: 10604,
			MessageType_AptosMessageSignature: 10605,
			MessageType_WebAuthnListResidentCredentials: 800,
			MessageType_WebAuthnCredentials: 801,
			MessageType_WebAuthnAddResidentCredential: 802,
			MessageType_WebAuthnRemoveResidentCredential: 803,
			MessageType_BixinSeedOperate: 901,
			MessageType_BixinMessageSE: 902,
			MessageType_BixinOutMessageSE: 904,
			MessageType_BixinBackupRequest: 905,
			MessageType_BixinBackupAck: 906,
			MessageType_BixinRestoreRequest: 907,
			MessageType_BixinRestoreAck: 908,
			MessageType_BixinVerifyDeviceRequest: 909,
			MessageType_BixinVerifyDeviceAck: 910,
			MessageType_BixinWhiteListRequest: 911,
			MessageType_BixinWhiteListAck: 912,
			MessageType_BixinLoadDevice: 913,
			MessageType_BixinBackupDevice: 914,
			MessageType_BixinBackupDeviceAck: 915,
			MessageType_BixinPinInputOnDevice: 10000,
			MessageType_EthereumSignMessageEIP712: 10200,
			MessageType_GetPublicKeyMultiple: 10210,
			MessageType_PublicKeyMultiple: 10211,
			MessageType_ConfluxGetAddress: 10112,
			MessageType_ConfluxAddress: 10113,
			MessageType_ConfluxSignTx: 10114,
			MessageType_ConfluxTxRequest: 10115,
			MessageType_ConfluxTxAck: 10116,
			MessageType_ConfluxSignMessage: 10117,
			MessageType_ConfluxSignMessageCIP23: 10118,
			MessageType_ConfluxMessageSignature: 10119,
			MessageType_TronGetAddress: 10501,
			MessageType_TronAddress: 10502,
			MessageType_TronSignTx: 10503,
			MessageType_TronSignedTx: 10504,
			MessageType_TronSignMessage: 10505,
			MessageType_TronMessageSignature: 10506,
			MessageType_NearGetAddress: 10701,
			MessageType_NearAddress: 10702,
			MessageType_NearSignTx: 10703,
			MessageType_NearSignedTx: 10704,
			MessageType_CosmosGetAddress: 10800,
			MessageType_CosmosAddress: 10801,
			MessageType_CosmosSignTx: 10802,
			MessageType_CosmosSignedTx: 10803,
			MessageType_AlgorandGetAddress: 10900,
			MessageType_AlgorandAddress: 10901,
			MessageType_AlgorandSignTx: 10902,
			MessageType_AlgorandSignedTx: 10903,
			MessageType_PolkadotGetAddress: 11000,
			MessageType_PolkadotAddress: 11001,
			MessageType_PolkadotSignTx: 11002,
			MessageType_PolkadotSignedTx: 11003,
			MessageType_SuiGetAddress: 11100,
			MessageType_SuiAddress: 11101,
			MessageType_SuiSignTx: 11102,
			MessageType_SuiSignedTx: 11103,
			MessageType_FilecoinGetAddress: 11200,
			MessageType_FilecoinAddress: 11201,
			MessageType_FilecoinSignTx: 11202,
			MessageType_FilecoinSignedTx: 11203,
			MessageType_KaspaGetAddress: 11300,
			MessageType_KaspaAddress: 11301,
			MessageType_KaspaSignTx: 11302,
			MessageType_KaspaSignedTx: 11303,
			MessageType_KaspaTxInputRequest: 11304,
			MessageType_KaspaTxInputAck: 11305,
			MessageType_NexaGetAddress: 11400,
			MessageType_NexaAddress: 11401,
			MessageType_NexaSignTx: 11402,
			MessageType_NexaSignedTx: 11403,
			MessageType_NexaTxInputRequest: 11404,
			MessageType_NexaTxInputAck: 11405,
			MessageType_DeviceBackToBoot: 903,
			MessageType_DeviceInfoSettings: 10001,
			MessageType_GetDeviceInfo: 10002,
			MessageType_DeviceInfo: 10003,
			MessageType_ReadSEPublicKey: 10004,
			MessageType_SEPublicKey: 10005,
			MessageType_WriteSEPublicCert: 10006,
			MessageType_ReadSEPublicCert: 10007,
			MessageType_SEPublicCert: 10008,
			MessageType_SpiFlashWrite: 10009,
			MessageType_SpiFlashRead: 10010,
			MessageType_SpiFlashData: 10011,
			MessageType_SESignMessage: 10012,
			MessageType_SEMessageSignature: 10013,
			MessageType_NFTWriteInfo: 10014,
			MessageType_NFTWriteData: 10015,
			MessageType_ResourceUpload: 10018,
			MessageType_ZoomRequest: 10019,
			MessageType_ResourceRequest: 10020,
			MessageType_ResourceAck: 10021,
			MessageType_ResourceUpdate: 10022,
			MessageType_ListResDir: 10023,
			MessageType_FileInfoList: 10024,
			MessageType_RebootToBoardloader: 10025,
			MessageType_DeviceEraseSector: 10026
		}
	},
	google: {
		nested: {
			protobuf: {
				nested: {
					FileDescriptorSet: {
						fields: {
							file: {
								rule: "repeated",
								type: "FileDescriptorProto",
								id: 1
							}
						}
					},
					FileDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							"package": {
								type: "string",
								id: 2
							},
							dependency: {
								rule: "repeated",
								type: "string",
								id: 3
							},
							public_dependency: {
								rule: "repeated",
								type: "int32",
								id: 10,
								options: {
									packed: false
								}
							},
							weak_dependency: {
								rule: "repeated",
								type: "int32",
								id: 11,
								options: {
									packed: false
								}
							},
							message_type: {
								rule: "repeated",
								type: "DescriptorProto",
								id: 4
							},
							enum_type: {
								rule: "repeated",
								type: "EnumDescriptorProto",
								id: 5
							},
							service: {
								rule: "repeated",
								type: "ServiceDescriptorProto",
								id: 6
							},
							extension: {
								rule: "repeated",
								type: "FieldDescriptorProto",
								id: 7
							},
							options: {
								type: "FileOptions",
								id: 8
							},
							source_code_info: {
								type: "SourceCodeInfo",
								id: 9
							},
							syntax: {
								type: "string",
								id: 12
							}
						}
					},
					DescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							field: {
								rule: "repeated",
								type: "FieldDescriptorProto",
								id: 2
							},
							extension: {
								rule: "repeated",
								type: "FieldDescriptorProto",
								id: 6
							},
							nested_type: {
								rule: "repeated",
								type: "DescriptorProto",
								id: 3
							},
							enum_type: {
								rule: "repeated",
								type: "EnumDescriptorProto",
								id: 4
							},
							extension_range: {
								rule: "repeated",
								type: "ExtensionRange",
								id: 5
							},
							oneof_decl: {
								rule: "repeated",
								type: "OneofDescriptorProto",
								id: 8
							},
							options: {
								type: "MessageOptions",
								id: 7
							},
							reserved_range: {
								rule: "repeated",
								type: "ReservedRange",
								id: 9
							},
							reserved_name: {
								rule: "repeated",
								type: "string",
								id: 10
							}
						},
						nested: {
							ExtensionRange: {
								fields: {
									start: {
										type: "int32",
										id: 1
									},
									end: {
										type: "int32",
										id: 2
									}
								}
							},
							ReservedRange: {
								fields: {
									start: {
										type: "int32",
										id: 1
									},
									end: {
										type: "int32",
										id: 2
									}
								}
							}
						}
					},
					FieldDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							number: {
								type: "int32",
								id: 3
							},
							label: {
								type: "Label",
								id: 4
							},
							type: {
								type: "Type",
								id: 5
							},
							type_name: {
								type: "string",
								id: 6
							},
							extendee: {
								type: "string",
								id: 2
							},
							default_value: {
								type: "string",
								id: 7
							},
							oneof_index: {
								type: "int32",
								id: 9
							},
							json_name: {
								type: "string",
								id: 10
							},
							options: {
								type: "FieldOptions",
								id: 8
							}
						},
						nested: {
							Type: {
								values: {
									TYPE_DOUBLE: 1,
									TYPE_FLOAT: 2,
									TYPE_INT64: 3,
									TYPE_UINT64: 4,
									TYPE_INT32: 5,
									TYPE_FIXED64: 6,
									TYPE_FIXED32: 7,
									TYPE_BOOL: 8,
									TYPE_STRING: 9,
									TYPE_GROUP: 10,
									TYPE_MESSAGE: 11,
									TYPE_BYTES: 12,
									TYPE_UINT32: 13,
									TYPE_ENUM: 14,
									TYPE_SFIXED32: 15,
									TYPE_SFIXED64: 16,
									TYPE_SINT32: 17,
									TYPE_SINT64: 18
								}
							},
							Label: {
								values: {
									LABEL_OPTIONAL: 1,
									LABEL_REQUIRED: 2,
									LABEL_REPEATED: 3
								}
							}
						}
					},
					OneofDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							options: {
								type: "OneofOptions",
								id: 2
							}
						}
					},
					EnumDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							value: {
								rule: "repeated",
								type: "EnumValueDescriptorProto",
								id: 2
							},
							options: {
								type: "EnumOptions",
								id: 3
							}
						}
					},
					EnumValueDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							number: {
								type: "int32",
								id: 2
							},
							options: {
								type: "EnumValueOptions",
								id: 3
							}
						}
					},
					ServiceDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							method: {
								rule: "repeated",
								type: "MethodDescriptorProto",
								id: 2
							},
							options: {
								type: "ServiceOptions",
								id: 3
							}
						}
					},
					MethodDescriptorProto: {
						fields: {
							name: {
								type: "string",
								id: 1
							},
							input_type: {
								type: "string",
								id: 2
							},
							output_type: {
								type: "string",
								id: 3
							},
							options: {
								type: "MethodOptions",
								id: 4
							},
							client_streaming: {
								type: "bool",
								id: 5
							},
							server_streaming: {
								type: "bool",
								id: 6
							}
						}
					},
					FileOptions: {
						fields: {
							java_package: {
								type: "string",
								id: 1
							},
							java_outer_classname: {
								type: "string",
								id: 8
							},
							java_multiple_files: {
								type: "bool",
								id: 10
							},
							java_generate_equals_and_hash: {
								type: "bool",
								id: 20,
								options: {
									deprecated: true
								}
							},
							java_string_check_utf8: {
								type: "bool",
								id: 27
							},
							optimize_for: {
								type: "OptimizeMode",
								id: 9,
								options: {
									"default": "SPEED"
								}
							},
							go_package: {
								type: "string",
								id: 11
							},
							cc_generic_services: {
								type: "bool",
								id: 16
							},
							java_generic_services: {
								type: "bool",
								id: 17
							},
							py_generic_services: {
								type: "bool",
								id: 18
							},
							deprecated: {
								type: "bool",
								id: 23
							},
							cc_enable_arenas: {
								type: "bool",
								id: 31
							},
							objc_class_prefix: {
								type: "string",
								id: 36
							},
							csharp_namespace: {
								type: "string",
								id: 37
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						],
						reserved: [
							[
								38,
								38
							]
						],
						nested: {
							OptimizeMode: {
								values: {
									SPEED: 1,
									CODE_SIZE: 2,
									LITE_RUNTIME: 3
								}
							}
						}
					},
					MessageOptions: {
						fields: {
							message_set_wire_format: {
								type: "bool",
								id: 1
							},
							no_standard_descriptor_accessor: {
								type: "bool",
								id: 2
							},
							deprecated: {
								type: "bool",
								id: 3
							},
							map_entry: {
								type: "bool",
								id: 7
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						],
						reserved: [
							[
								8,
								8
							]
						]
					},
					FieldOptions: {
						fields: {
							ctype: {
								type: "CType",
								id: 1,
								options: {
									"default": "STRING"
								}
							},
							packed: {
								type: "bool",
								id: 2
							},
							jstype: {
								type: "JSType",
								id: 6,
								options: {
									"default": "JS_NORMAL"
								}
							},
							lazy: {
								type: "bool",
								id: 5
							},
							deprecated: {
								type: "bool",
								id: 3
							},
							weak: {
								type: "bool",
								id: 10
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						],
						reserved: [
							[
								4,
								4
							]
						],
						nested: {
							CType: {
								values: {
									STRING: 0,
									CORD: 1,
									STRING_PIECE: 2
								}
							},
							JSType: {
								values: {
									JS_NORMAL: 0,
									JS_STRING: 1,
									JS_NUMBER: 2
								}
							}
						}
					},
					OneofOptions: {
						fields: {
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					EnumOptions: {
						fields: {
							allow_alias: {
								type: "bool",
								id: 2
							},
							deprecated: {
								type: "bool",
								id: 3
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					EnumValueOptions: {
						fields: {
							deprecated: {
								type: "bool",
								id: 1
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					ServiceOptions: {
						fields: {
							deprecated: {
								type: "bool",
								id: 33
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					MethodOptions: {
						fields: {
							deprecated: {
								type: "bool",
								id: 33
							},
							uninterpreted_option: {
								rule: "repeated",
								type: "UninterpretedOption",
								id: 999
							}
						},
						extensions: [
							[
								1000,
								536870911
							]
						]
					},
					UninterpretedOption: {
						fields: {
							name: {
								rule: "repeated",
								type: "NamePart",
								id: 2
							},
							identifier_value: {
								type: "string",
								id: 3
							},
							positive_int_value: {
								type: "uint64",
								id: 4
							},
							negative_int_value: {
								type: "int64",
								id: 5
							},
							double_value: {
								type: "double",
								id: 6
							},
							string_value: {
								type: "bytes",
								id: 7
							},
							aggregate_value: {
								type: "string",
								id: 8
							}
						},
						nested: {
							NamePart: {
								fields: {
									name_part: {
										rule: "required",
										type: "string",
										id: 1
									},
									is_extension: {
										rule: "required",
										type: "bool",
										id: 2
									}
								}
							}
						}
					},
					SourceCodeInfo: {
						fields: {
							location: {
								rule: "repeated",
								type: "Location",
								id: 1
							}
						},
						nested: {
							Location: {
								fields: {
									path: {
										rule: "repeated",
										type: "int32",
										id: 1
									},
									span: {
										rule: "repeated",
										type: "int32",
										id: 2
									},
									leading_comments: {
										type: "string",
										id: 3
									},
									trailing_comments: {
										type: "string",
										id: 4
									},
									leading_detached_comments: {
										rule: "repeated",
										type: "string",
										id: 6
									}
								}
							}
						}
					},
					GeneratedCodeInfo: {
						fields: {
							annotation: {
								rule: "repeated",
								type: "Annotation",
								id: 1
							}
						},
						nested: {
							Annotation: {
								fields: {
									path: {
										rule: "repeated",
										type: "int32",
										id: 1
									},
									source_file: {
										type: "string",
										id: 2
									},
									begin: {
										type: "int32",
										id: 3
									},
									end: {
										type: "int32",
										id: 4
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var MessagesLegacyV1JSON = {
	nested: nested
};

const getReleaseStatus = (releases, currentVersion) => {
    const newVersions = releases.filter(r => semver__default["default"].gt(r.version.join('.'), currentVersion));
    if (newVersions.length === 0) {
        return 'valid';
    }
    if (newVersions.comme(r => r.required)) {
        return 'required';
    }
    return 'outdated';
};
const getReleaseChangelog = (releases, currentVersion) => {
    const newVersions = releases.filter(r => semver__default["default"].gt(r.version.join('.'), currentVersion));
    return newVersions.map(r => r.changelog);
};
const findLatestRelease = (releases) => {
    let leastRelease = releases[0];
    releases.forEach(release => {
        if (semver__default["default"].gt(release.version.join('.'), leastRelease.version.join('.'))) {
            leastRelease = release;
        }
    });
    return leastRelease;
};

var _a$1;
class DataManager {
    static load(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = settings;
            if (!settings.fetchConfig) {
                return;
            }
            try {
                const url = settings.preRelease
                    ? 'https://data.chargerwallet.com/pre-config.json'
                    : 'https://data.chargerwallet.com/config.json';
                const { data } = yield axios__default["default"].get(`${url}?noCache=${getTimeStamp()}`, {
                    timeout: 7000,
                });
                this.deviceMap = {
                    classic: data.classic,
                    classic1s: data.classic1s,
                    mini: data.mini,
                    touch: data.touch,
                    pro: data.pro,
                };
                this.assets = {
                    bridge: data.bridge,
                };
            }
            catch (e) {
            }
        });
    }
    static checkAndReloadData() {
        return __awaiter(this, void 0, void 0, function* () {
            if (getTimeStamp() - this.lastCheckTimestamp > 1000 * 60 * 60 * 3) {
                yield this.load(this.settings).then(() => {
                    this.lastCheckTimestamp = getTimeStamp();
                });
            }
        });
    }
    static getProtobufMessages(messageVersion = 'latest') {
        return this.messages[messageVersion];
    }
    static getSettings(key) {
        if (!this.settings)
            return null;
        if (typeof key === 'string') {
            return this.settings[key];
        }
        return this.settings;
    }
}
_a$1 = DataManager;
DataManager.deviceMap = {
    classic: {
        firmware: [],
        ble: [],
    },
    classic1s: {
        firmware: [],
        ble: [],
    },
    mini: {
        firmware: [],
        ble: [],
    },
    touch: {
        firmware: [],
        ble: [],
    },
    pro: {
        firmware: [],
        ble: [],
    },
};
DataManager.assets = null;
DataManager.messages = {
    latest: MessagesJSON,
    v1: MessagesLegacyV1JSON,
};
DataManager.lastCheckTimestamp = 0;
DataManager.getFirmwareStatus = (features) => {
    var _b, _c;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return 'unknown';
    const deviceFirmwareVersion = getDeviceFirmwareVersion(features);
    if (features.firmware_present === false) {
        return 'none';
    }
    if (DeviceModelToTypes.model_mini.includes(deviceType) && features.bootloader_mode) {
        return 'unknown';
    }
    const firmwareUpdateField = getFirmwareUpdateField({ features, updateType: 'firmware' });
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b[firmwareUpdateField]) !== null && _c !== void 0 ? _c : [];
    const currentVersion = deviceFirmwareVersion.join('.');
    return getReleaseStatus(targetDeviceConfigList, currentVersion);
};
DataManager.getSysResourcesLatestRelease = (features, forcedUpdateRes) => {
    var _b, _c, _d;
    const deviceType = getDeviceType(features);
    const deviceFirmwareVersion = getDeviceFirmwareVersion(features);
    if (deviceType !== 'pro' && deviceType !== 'touch')
        return undefined;
    const firmwareUpdateField = getFirmwareUpdateField({
        features,
        updateType: 'firmware',
    });
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b[firmwareUpdateField]) !== null && _c !== void 0 ? _c : [];
    const currentVersion = deviceFirmwareVersion.join('.');
    const targetDeviceConfig = targetDeviceConfigList.filter(item => forcedUpdateRes
        ? !!item.resource
        : semver__default["default"].gt(item.version.join('.'), currentVersion) && !!item.resource);
    return (_d = findLatestRelease(targetDeviceConfig)) === null || _d === void 0 ? void 0 : _d.resource;
};
DataManager.getSysFullResource = (features) => {
    var _b, _c, _d;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return undefined;
    if (deviceType !== 'pro' && deviceType !== 'touch')
        return undefined;
    const firmwareUpdateField = getFirmwareUpdateField({
        features,
        updateType: 'firmware',
    });
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b[firmwareUpdateField]) !== null && _c !== void 0 ? _c : [];
    const targetDeviceConfig = targetDeviceConfigList.filter(item => !!item.fullResource);
    return (_d = findLatestRelease(targetDeviceConfig)) === null || _d === void 0 ? void 0 : _d.fullResource;
};
DataManager.getBootloaderResource = (features) => {
    var _b, _c, _d;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return undefined;
    if (deviceType !== 'pro' && deviceType !== 'touch')
        return undefined;
    const firmwareUpdateField = getFirmwareUpdateField({
        features,
        updateType: 'firmware',
    });
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b[firmwareUpdateField]) !== null && _c !== void 0 ? _c : [];
    const targetDeviceConfig = targetDeviceConfigList.filter(item => !!item.bootloaderResource);
    return (_d = findLatestRelease(targetDeviceConfig)) === null || _d === void 0 ? void 0 : _d.bootloaderResource;
};
DataManager.getBootloaderTargetVersion = (features) => {
    var _b, _c, _d, _e;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return undefined;
    const firmwareUpdateField = getFirmwareUpdateField({
        features,
        updateType: 'firmware',
    });
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b[firmwareUpdateField]) !== null && _c !== void 0 ? _c : [];
    const targetDeviceConfig = targetDeviceConfigList.filter(item => !!item.bootloaderResource);
    return (_e = (_d = targetDeviceConfig === null || targetDeviceConfig === void 0 ? void 0 : targetDeviceConfig[0]) === null || _d === void 0 ? void 0 : _d.bootloaderVersion) !== null && _e !== void 0 ? _e : undefined;
};
DataManager.getBootloaderRelatedFirmwareVersion = (features) => {
    var _b, _c, _d, _e;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return undefined;
    if (!DeviceModelToTypes.model_mini.includes(deviceType))
        return undefined;
    const firmwareUpdateField = getFirmwareUpdateField({
        features,
        updateType: 'firmware',
    });
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b[firmwareUpdateField]) !== null && _c !== void 0 ? _c : [];
    const targetDeviceConfig = targetDeviceConfigList.filter(item => !!item.bootloaderRelatedFirmwareVersion);
    return (_e = (_d = targetDeviceConfig === null || targetDeviceConfig === void 0 ? void 0 : targetDeviceConfig[0]) === null || _d === void 0 ? void 0 : _d.bootloaderRelatedFirmwareVersion) !== null && _e !== void 0 ? _e : undefined;
};
DataManager.getFirmwareChangelog = (features) => {
    var _b, _c;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return [];
    const deviceFirmwareVersion = getDeviceFirmwareVersion(features);
    const firmwareUpdateField = getFirmwareUpdateField({
        features,
        updateType: 'firmware',
    });
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b[firmwareUpdateField]) !== null && _c !== void 0 ? _c : [];
    if (features.firmware_present === false ||
        (DeviceModelToTypes.model_classic.includes(deviceType) && features.bootloader_mode)) {
        return getReleaseChangelog(targetDeviceConfigList, '0.0.0');
    }
    const currentVersion = deviceFirmwareVersion.join('.');
    return getReleaseChangelog(targetDeviceConfigList, currentVersion);
};
DataManager.getFirmwareLatestRelease = (features) => {
    var _b, _c;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return undefined;
    const firmwareUpdateField = getFirmwareUpdateField({
        features,
        updateType: 'firmware',
    });
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b[firmwareUpdateField]) !== null && _c !== void 0 ? _c : [];
    const target = findLatestRelease(targetDeviceConfigList);
    if (!target)
        return target;
    if (!target.resource) {
        const resource = _a$1.getSysResourcesLatestRelease(features);
        return Object.assign(Object.assign({}, target), { resource });
    }
    return target;
};
DataManager.getBLEFirmwareStatus = (features) => {
    var _b, _c;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return 'unknown';
    const deviceBLEFirmwareVersion = getDeviceBLEFirmwareVersion(features);
    if (!deviceBLEFirmwareVersion) {
        return 'none';
    }
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b.ble) !== null && _c !== void 0 ? _c : [];
    const currentVersion = deviceBLEFirmwareVersion.join('.');
    return getReleaseStatus(targetDeviceConfigList, currentVersion);
};
DataManager.getBleFirmwareChangelog = (features) => {
    var _b, _c;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return [];
    const deviceBLEFirmwareVersion = getDeviceBLEFirmwareVersion(features);
    if (!deviceBLEFirmwareVersion) {
        return [];
    }
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b.ble) !== null && _c !== void 0 ? _c : [];
    const currentVersion = deviceBLEFirmwareVersion.join('.');
    return getReleaseChangelog(targetDeviceConfigList, currentVersion);
};
DataManager.getBleFirmwareLatestRelease = (features) => {
    var _b, _c;
    const deviceType = getDeviceType(features);
    if (deviceType === 'unknown')
        return undefined;
    const targetDeviceConfigList = (_c = (_b = _a$1.deviceMap[deviceType]) === null || _b === void 0 ? void 0 : _b.ble) !== null && _c !== void 0 ? _c : [];
    return findLatestRelease(targetDeviceConfigList);
};
DataManager.getTransportStatus = (localVersion) => {
    var _b, _c;
    const latestTransportVersion = (_c = (_b = _a$1.assets) === null || _b === void 0 ? void 0 : _b.bridge) === null || _c === void 0 ? void 0 : _c.version;
    if (!latestTransportVersion)
        return 'valid';
    const isLatest = semver__default["default"].gte(localVersion, latestTransportVersion.join('.'));
    return isLatest ? 'valid' : 'outdated';
};
DataManager.getBridgeChangelog = () => { var _b; return (_b = _a$1.assets) === null || _b === void 0 ? void 0 : _b.bridge.changelog; };
DataManager.isBleConnect = (env) => env === 'react-native' || env === 'lowlevel';

const PROTOBUF_MESSAGE_CONFIG = {
    model_mini: [
        { minVersion: '3.3.0', messageVersion: 'latest' },
        { minVersion: '0.0.0', messageVersion: 'v1' },
    ],
    model_touch: [
        { minVersion: '4.5.0', messageVersion: 'latest' },
        { minVersion: '0.0.0', messageVersion: 'v1' },
    ],
};

const getSupportMessageVersion = (features) => {
    var _a;
    if (!features)
        return {
            messages: DataManager.messages.latest,
            messageVersion: 'latest',
        };
    const currentDeviceVersion = getDeviceFirmwareVersion(features).join('.');
    const deviceType = getDeviceType(features);
    const deviceVersionConfigs = PROTOBUF_MESSAGE_CONFIG[deviceType] ||
        (DeviceTypeToModels[deviceType] &&
            DeviceTypeToModels[deviceType]
                .map(model => PROTOBUF_MESSAGE_CONFIG[model])
                .find(range => range !== undefined));
    const sortedDeviceVersionConfigs = (_a = deviceVersionConfigs === null || deviceVersionConfigs === void 0 ? void 0 : deviceVersionConfigs.comrt((a, b) => semver__default["default"].compare(b.minVersion, a.minVersion))) !== null && _a !== void 0 ? _a : [];
    for (const { minVersion, messageVersion } of sortedDeviceVersionConfigs) {
        if (semver__default["default"].gte(currentDeviceVersion, minVersion)) {
            return {
                messages: DataManager.messages[messageVersion],
                messageVersion,
            };
        }
    }
    return {
        messages: DataManager.messages.latest,
        messageVersion: 'latest',
    };
};
const supportInputPinOnSoftware = (features) => {
    if (!features)
        return { support: false };
    const deviceType = getDeviceType(features);
    if (deviceType === 'touch' || deviceType === 'pro') {
        return { support: false };
    }
    const currentVersion = getDeviceFirmwareVersion(features).join('.');
    return { support: semver__default["default"].gte(currentVersion, '2.3.0'), require: '2.3.0' };
};
const supportNewPassphrase = (features) => {
    if (!features)
        return { support: false };
    const deviceType = getDeviceType(features);
    if (deviceType === 'touch' || deviceType === 'pro') {
        return { support: true };
    }
    const currentVersion = getDeviceFirmwareVersion(features).join('.');
    return { support: semver__default["default"].gte(currentVersion, '2.4.0'), require: '2.4.0' };
};
const getPassphraseStateWithRefreshDeviceInfo = (device) => __awaiter(void 0, void 0, void 0, function* () {
    const { features, commands } = device;
    const locked = (features === null || features === void 0 ? void 0 : features.unlocked) === false;
    const passphraseState = yield getPassphraseState(features, commands);
    const isModeT = getDeviceType(features) === 'touch' || getDeviceType(features) === 'pro';
    const needRefreshWithPassphrase = passphraseState && (features === null || features === void 0 ? void 0 : features.passphrase_protection) !== true;
    const needRefreshWithLocked = isModeT && locked;
    if (needRefreshWithLocked || needRefreshWithPassphrase) {
        yield device.getFeatures();
    }
    return passphraseState;
});
const getPassphraseState = (features, commands) => __awaiter(void 0, void 0, void 0, function* () {
    if (!features)
        return false;
    const { message, type } = yield commands.typedCall('GetAddress', 'Address', {
        address_n: [toHardened(44), toHardened(1), toHardened(0), 0, 0],
        coin_name: 'Testnet',
        script_type: 'SPENDADDRESS',
        show_display: false,
    });
    if (type === 'CallMethodError') {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'Get the passphrase state error');
    }
    return message.address;
});
const supportBatchPublicKey = (features) => {
    if (!features)
        return false;
    const currentVersion = getDeviceFirmwareVersion(features).join('.');
    const deviceType = getDeviceType(features);
    if (deviceType === 'touch' || deviceType === 'pro') {
        return semver__default["default"].gte(currentVersion, '3.1.0');
    }
    return semver__default["default"].gte(currentVersion, '2.6.0');
};
const supportModifyHomescreen = (features) => {
    if (!features)
        return { support: false };
    const currentVersion = getDeviceFirmwareVersion(features).join('.');
    const deviceType = getDeviceType(features);
    if (DeviceModelToTypes.model_mini.includes(deviceType)) {
        return { support: true };
    }
    return { support: semver__default["default"].gte(currentVersion, '3.4.0') };
};
const getFirmwareUpdateField = ({ features, updateType, targetVersion, }) => {
    const deviceType = getDeviceType(features);
    const deviceFirmwareVersion = getDeviceFirmwareVersion(features);
    if (updateType === 'ble') {
        return 'ble';
    }
    if (DeviceModelToTypes.model_mini.includes(deviceType)) {
        return 'firmware-v5';
    }
    if (deviceType === 'touch') {
        if (targetVersion) {
            if (semver__default["default"].eq(targetVersion, '4.0.0'))
                return 'firmware-v2';
            if (semver__default["default"].gt(targetVersion, '4.0.0'))
                return 'firmware-v5';
        }
        if (semver__default["default"].lt(deviceFirmwareVersion.join('.'), '3.4.0'))
            return 'firmware';
        return 'firmware-v5';
    }
    if (deviceType === 'pro') {
        return 'firmware-v5';
    }
    return 'firmware';
};
function fixVersion(version) {
    let parts = version.split('.');
    while (parts.length < 3) {
        parts.push('0');
    }
    parts = parts.map(part => (lodash.isNaN(parseInt(part, 10)) ? '0' : part));
    return parts.join('.');
}
const fixFeaturesFirmwareVersion = (features) => {
    const tempFeatures = Object.assign({}, features);
    if (tempFeatures.chargerwallet_firmware_version && !semver__default["default"].valid(tempFeatures.chargerwallet_firmware_version)) {
        tempFeatures.chargerwallet_firmware_version = fixVersion(tempFeatures.chargerwallet_firmware_version);
    }
    if (tempFeatures.chargerwallet_version && !semver__default["default"].valid(tempFeatures.chargerwallet_version)) {
        tempFeatures.chargerwallet_version = fixVersion(tempFeatures.chargerwallet_version);
    }
    return tempFeatures;
};

const pkg = require('../package.json');
const getSDKVersion = () => pkg.version;
const DEFAULT_DOMAIN = `https://jssdk.chargerwallet.com/${getSDKVersion()}/`;
const whitelist = [
    { origin: 'file://' },
    { origin: '1key.com' },
    { origin: 'chargerwallet.com' },
    { origin: 'chargerwalletcn.com' },
    { origin: 'chargerwallettest.com' },
    { origin: 'localhost' },
];
const whitelistExtension = [
    'jnmbobjmhlngoefaiojfljckilhhlhcj',
    'acmacodkjbdgmoleebolmdjonilkdbch',
    'mcohilncbfahbmgdjkbpemcciiolgcge',
];

var _a;
const DEFAULT_PRIORITY = 2;
const initialSettings = {
    configSrc: './data/config.json',
    version: '',
    debug: false,
    priority: DEFAULT_PRIORITY,
    trustedHost: false,
    connectSrc: DEFAULT_DOMAIN,
    iframeSrc: `${DEFAULT_DOMAIN}iframe.html`,
    parentOrigin: typeof window !== 'undefined' && window.location ? window.location.origin : '',
    extension: (typeof chrome !== 'undefined' && ((_a = chrome === null || chrome === void 0 ? void 0 : chrome.runtime) === null || _a === void 0 ? void 0 : _a.id)) || '',
    supportedBrowser: typeof navigator !== 'undefined' ? !/Trident|MSIE|Edge/.test(navigator.userAgent) : true,
    env: 'web',
    lazyLoad: false,
    timestamp: new Date().getTime(),
};
const getEnv = () => {
    if (typeof chrome !== 'undefined' &&
        chrome.runtime &&
        typeof chrome.runtime.onConnect !== 'undefined') {
        return 'webextension';
    }
    if (typeof navigator !== 'undefined') {
        if (typeof navigator.product === 'string' &&
            navigator.product.toLowerCase() === 'reactnative') {
            return 'react-native';
        }
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf(' electron/') > -1) {
            return 'electron';
        }
    }
    return 'web';
};
const corsValidator = (url) => {
    if (typeof url !== 'string')
        return;
    if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*chargerwallet\.com\//))
        return url;
    if (url.match(/^https?:\/\/localhost:[58][0-9]{3}\//))
        return url;
    return url;
};
const parseConnectSettings = (input = {}) => {
    const settings = Object.assign({}, initialSettings);
    if (Object.prototype.hasOwnProperty.call(input, 'debug')) {
        settings.debug = input.debug;
    }
    if (input.isFrame) {
        settings.parentOrigin = input.parentOrigin;
    }
    if (typeof input.connectSrc === 'string') {
        settings.connectSrc = input.connectSrc;
    }
    let globalSrc;
    if (typeof window !== 'undefined') {
        globalSrc = window.CHARGERWALLET_CONNECT_SRC;
    }
    else if (typeof global !== 'undefined') {
        globalSrc = global.CHARGERWALLET_CONNECT_SRC;
    }
    if (typeof globalSrc === 'string') {
        settings.connectSrc = corsValidator(globalSrc);
        settings.debug = true;
    }
    const src = settings.connectSrc || DEFAULT_DOMAIN;
    settings.iframeSrc = `${src}iframe.html`;
    if (input.transportReconnect) {
        settings.transportReconnect = input.transportReconnect;
    }
    if (input.lazyLoad) {
        settings.lazyLoad = input.lazyLoad;
    }
    if (typeof input.env === 'string') {
        settings.env = input.env;
    }
    else {
        settings.env = getEnv();
    }
    if (input.timestamp) {
        settings.timestamp = input.timestamp;
    }
    if (input.preRelease) {
        settings.preRelease = input.preRelease;
    }
    if (input.fetchConfig) {
        settings.fetchConfig = input.fetchConfig;
    }
    return settings;
};

function shouldUpdateBootloaderForClassicAndMini({ currentVersion, bootloaderVersion, willUpdateFirmware, targetBootloaderVersion, bootloaderRelatedFirmwareVersion, }) {
    if (targetBootloaderVersion && semver__default["default"].gte(bootloaderVersion, targetBootloaderVersion.join('.'))) {
        return false;
    }
    if (semver__default["default"].gte(willUpdateFirmware, bootloaderRelatedFirmwareVersion.join('.'))) {
        return true;
    }
    if (semver__default["default"].gte(currentVersion, bootloaderRelatedFirmwareVersion.join('.'))) {
        return true;
    }
    return false;
}
function isEnteredManuallyBoot(features, updateType) {
    const deviceType = getDeviceType(features);
    const isMini = deviceType === 'mini';
    const isBoot183ClassicUpBle = updateType === 'firmware' &&
        deviceType === 'classic' &&
        features.bootloader_version === '1.8.3';
    return isMini || isBoot183ClassicUpBle;
}

function checkNeedUpdateBootForTouch(features) {
    const deviceType = getDeviceType(features);
    if (!DeviceModelToTypes.model_touch.includes(deviceType))
        return false;
    const currentVersion = getDeviceFirmwareVersion(features).join('.');
    const bootloaderVersion = getDeviceBootloaderVersion(features).join('.');
    const targetBootloaderVersion = DataManager.getBootloaderTargetVersion(features);
    if (!targetBootloaderVersion)
        return false;
    return (semver__default["default"].gte(currentVersion, '3.2.0') &&
        semver__default["default"].gte(currentVersion, '4.1.0') &&
        semver__default["default"].lte(bootloaderVersion, targetBootloaderVersion.join('.')));
}
function checkNeedUpdateBootForClassicAndMini(features, willUpdateFirmware) {
    const deviceType = getDeviceType(features);
    if (!DeviceModelToTypes.model_mini.includes(deviceType))
        return false;
    if (!willUpdateFirmware)
        return false;
    const currentVersion = getDeviceFirmwareVersion(features).join('.');
    const bootloaderVersion = getDeviceBootloaderVersion(features).join('.');
    const targetBootloaderVersion = DataManager.getBootloaderTargetVersion(features);
    if (targetBootloaderVersion && semver__default["default"].gte(bootloaderVersion, targetBootloaderVersion.join('.'))) {
        return false;
    }
    const bootloaderRelatedFirmwareVersion = DataManager.getBootloaderRelatedFirmwareVersion(features);
    if (!bootloaderRelatedFirmwareVersion)
        return false;
    return shouldUpdateBootloaderForClassicAndMini({
        currentVersion,
        bootloaderVersion,
        willUpdateFirmware,
        targetBootloaderVersion,
        bootloaderRelatedFirmwareVersion,
    });
}
const INIT_DATA_CHUNK_SIZE$1 = 16 * 1024;
function checkBootloaderLength(data) {
    const chunk = new Uint8Array(data.slice(0, Math.min(INIT_DATA_CHUNK_SIZE$1, data.byteLength)));
    const buffer = ByteBuffer__default["default"].wrap(chunk, undefined, undefined, true);
    buffer.LE();
    buffer.readByte();
    buffer.readByte();
    buffer.readByte();
    buffer.readByte();
    const hdrlen = buffer.readUint32();
    buffer.readUint32();
    const codelen = buffer.readUint32();
    const bootloaderLength = hdrlen + codelen;
    return bootloaderLength === data.byteLength;
}

const LOG_EVENT = 'LOG_EVENT';
const LOG = {
    OUTPUT: 'log-output',
};
const createLogMessage = (type, payload) => ({
    event: LOG_EVENT,
    type,
    payload,
});

const MAX_ENTRIES = 500;
let postMessage$1;
class Log$b {
    constructor(prefix, enabled) {
        this.prefix = prefix;
        this.enabled = enabled;
        this.messages = [];
    }
    addMessage(level, prefix, ...args) {
        this.messages.push({
            level,
            prefix,
            message: args,
            timestamp: new Date().getTime(),
        });
        if (this.messages.length > MAX_ENTRIES) {
            this.messages.shift();
        }
    }
    log(...args) {
        this.addMessage('log', this.prefix, ...args);
        sendLogMessage(this.prefix, ...args);
        if (!this.enabled) {
            return;
        }
        console.log(this.prefix, ...args);
    }
    error(...args) {
        this.addMessage('error', this.prefix, ...args);
        sendLogMessage(this.prefix, ...args);
        if (!this.enabled) {
            return;
        }
        console.error(this.prefix, ...args);
    }
    warn(...args) {
        this.addMessage('warn', this.prefix, ...args);
        sendLogMessage(this.prefix, ...args);
        if (!this.enabled) {
            return;
        }
        console.warn(this.prefix, ...args);
    }
    debug(...args) {
        this.addMessage('debug', this.prefix, ...args);
        sendLogMessage(this.prefix, ...args);
        if (!this.enabled) {
            return;
        }
        console.log(this.prefix, ...args);
    }
}
const _logs = {};
const initLog = (prefix, enabled) => {
    const instance = new Log$b(prefix, !!enabled);
    _logs[prefix] = instance;
    return instance;
};
const enableLog = (enabled) => {
    Object.keys(_logs).forEach(key => {
        _logs[key].enabled = !!enabled;
    });
};
const getLog = () => {
    let logs = [];
    Object.keys(_logs).forEach(key => {
        logs = logs.concat(_logs[key].messages);
    });
    logs.comrt((a, b) => a.timestamp - b.timestamp);
    return logs;
};
const setLoggerPostMessage = (postMessageFn) => {
    postMessage$1 = postMessageFn;
};
const serializeLog = (...args) => args.map(arg => {
    if (typeof arg === 'string') {
        return arg;
    }
    if (typeof arg === 'number') {
        return arg;
    }
    if (typeof arg === 'boolean') {
        return arg;
    }
    if (typeof arg === 'undefined') {
        return arg;
    }
    if (typeof arg === 'object') {
        return JSON.stringify(arg, getCircularReplacer());
    }
    return arg;
});
const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (_, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};
const sendLogMessage = (prefix, ...args) => {
    postMessage$1 === null || postMessage$1 === void 0 ? void 0 : postMessage$1(createLogMessage(LOG.OUTPUT, serializeLog(prefix, ...args)));
};
exports.LoggerNames = void 0;
(function (LoggerNames) {
    LoggerNames["Core"] = "@chargerwallet/hd-core";
    LoggerNames["Transport"] = "Transport";
    LoggerNames["Device"] = "Device";
    LoggerNames["DeviceCommands"] = "DeviceCommands";
    LoggerNames["DeviceConnector"] = "DeviceConnector";
    LoggerNames["DeviceList"] = "DeviceList";
    LoggerNames["DevicePool"] = "DevicePool";
    LoggerNames["HdCommonConnectSdk"] = "@chargerwallet/common-connect-sdk";
    LoggerNames["HdBleSdk"] = "@chargerwallet/hd-ble-sdk";
    LoggerNames["HdTransportHttp"] = "@chargerwallet/hd-transport-http";
    LoggerNames["HdTransportLowLevel"] = "@chargerwallet/hd-transport-lowlevel";
    LoggerNames["HdBleTransport"] = "@chargerwallet/hd-ble-transport";
    LoggerNames["Connect"] = "@chargerwallet/connect";
    LoggerNames["Iframe"] = "IFrame";
    LoggerNames["SendMessage"] = "[SendMessage]";
    LoggerNames["Method"] = "[Method]";
})(exports.LoggerNames || (exports.LoggerNames = {}));
const LoggerMap = {
    [exports.LoggerNames.Core]: initLog(exports.LoggerNames.Core),
    [exports.LoggerNames.Transport]: initLog(exports.LoggerNames.Transport),
    [exports.LoggerNames.Device]: initLog(exports.LoggerNames.Device),
    [exports.LoggerNames.DeviceCommands]: initLog(exports.LoggerNames.DeviceCommands),
    [exports.LoggerNames.DeviceConnector]: initLog(exports.LoggerNames.DeviceConnector),
    [exports.LoggerNames.DeviceList]: initLog(exports.LoggerNames.DeviceList),
    [exports.LoggerNames.DevicePool]: initLog(exports.LoggerNames.DevicePool),
    [exports.LoggerNames.HdBleSdk]: initLog(exports.LoggerNames.HdBleSdk),
    [exports.LoggerNames.HdTransportHttp]: initLog(exports.LoggerNames.HdTransportHttp),
    [exports.LoggerNames.HdBleTransport]: initLog(exports.LoggerNames.HdBleTransport),
    [exports.LoggerNames.HdTransportLowLevel]: initLog(exports.LoggerNames.HdTransportLowLevel),
    [exports.LoggerNames.Connect]: initLog(exports.LoggerNames.Connect),
    [exports.LoggerNames.Iframe]: initLog(exports.LoggerNames.Iframe),
    [exports.LoggerNames.SendMessage]: initLog(exports.LoggerNames.SendMessage),
    [exports.LoggerNames.Method]: initLog(exports.LoggerNames.Method),
    [exports.LoggerNames.HdCommonConnectSdk]: initLog(exports.LoggerNames.Method),
};
const getLogger = (key) => LoggerMap[key];

const getT1Data = () => ({
    default: {
        name: 'default',
        hex: '',
    },
    original: {
        name: 'original',
        hex: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003c0000000000000000000000000000003c000000000000000000000000000003fc000000000000000000000000000003fc000000000000000000000000000003fc000000000000000000000000000003fc0000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff000000000000000000000000000000ff000000000000000000000000000003ffc00000000000000000000000000003ffc0000000000000000000000000000f00f0000000000000000000000000000f00f0000000000000000000000000003c003c000000000000000000000000003c003c000000000000000000000000003c003c000000000000000000000000003c003c000000000000000000000000003c003c000000000000000000000000003c003c000000000000000000000000003c003c000000000000000000000000003c003c000000000000000000000000000f00f0000000000000000000000000000f00f00000000000000000000000000003ffc00000000000000000000000000003ffc00000000000000000000000000000ff000000000000000000000000000000ff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    circleweb: {
        name: 'circleweb',
        hex: '00486003070c08080c01c1c0380000c0007cc003fc04080c08017f801800018000f7c0033806080c08031d80180001000088400218020c0c0802018018000700008040020e0304041806018018003f0001f0400206010404180401803000f9000188e00403018604100c03c06003e180030fe00c01808e3e10080271f01f0180070f383e00c0fe7f3018041fb83c00801e880ff38060e1e3fc10080e0ee000c0f87007c0c020c0c1c610101c0780006078600300703f80c18320201803000070182003001c3b80c1816040100300007f0c6001000660c0e383f08010010007fc0660030001c043ff8319001001007cf00340030000c07f9cfe0e00100307e0c00160030000c07c84fe0e0078033e00c001e003e001c0d8c48e0c03cc0fe0018001f006ffc7f38c448e0c0e07ff00018001b80c03fc3f06669bfe7807fc000180019e3800181f062293e7c0071c00018001ffe0001809831292c1000c060007c001e0c0001808c3929481001c02007fc003806000181071bfa48100780307f0e0030020001c3038ffe8c30ff801fe00600700303ffff00c3ff8eff81801e000300e001fe071fe07381a7f00180100003f1e0010006043e7600c430018030000f9f200100040603ce007c30008060001c0c600100040600cc006c3000c0c00018083003000406007c007e3800f3800030083002001c07ffcc007fffe3ff0000200838060ffe0f1fc40071c0fe07000020047c0ffc03f800cc0061800c0300006003cfff00039c01fe00e1800c010007e00207fc00030c1fe701f38018018ffff002cc06000607f863c71fe01801fe0030033802000403c063ff0c3c0801800038021003003c0300e2311c07880180001802300103e402039e31f700fc0300000c0760013c06060e1e31e1807c0600000f966001c0031ff813ff40c07e1c00003ffc20018001f0e0333e607183fc0000601c20010000e0606222203900ff0000c00c70030007e020c662101f00e7fe00800fd803003ec0218463180600601ff90000780601f0c03f086308060060007f00003e0e0780607f886104fe0060000300001ff9fc0060c0f841079e0040000100000dc060003f807041060600c000018000058060007b807041840301f00001800007003001c1007fc3ec01831c00008000070010070100706c3c01fe07000fc0000600181c018060380c01f001c078e010060018700380c0300c01e00070c03870060018c006e1c010040330001d801fd00e001b001c7ec0100606180007000e001a001c003818c03007fc0c00030006003f003c00701040300ffc0e000300040fc3807f00e02060f0080c07000300040680c1c18180407f98380603800300060300ff00c300405f87fc0301c00300060100ce006600808183c40100e1ff000711008600380100818106018063038009f',
    },
    circuit: {
        name: 'circuit',
        hex: 'ffffffc18380002180001c0380f00c0000000041038000608000380701e0180000000063038000608000700e03c030400000003e038000218000e01c078060e000000000038000330001c0380f00c1b0000000000380001e000380701e0183180000001c03800000000700e03c03060c0000003703800000000e01c078060c060000006103800000001c0380f00c1803ffffffc18387ff8000380701e0183001ffffffc18387ff8000700e03c0306000000000610387ff8000e01c078060c000000000330387878001c0380f00c180000000001c038707800380701e0183038000000000038703800700e03c030606c000000000038707800e01c078060c0c6000000000038787801c0380f00c181830ffffffc00387ff80380701e018303018ffffffe00387ff80700e03c03060600c000000600387ff80e01c078060c0c0060000006003800001c0380f00c18180033ffffe600380000380701e01830300013ffffe600380000700e03c03060600003ffffe600380000e01c078060c0c02013ffffe600380001c0380f00c181807013c001e6007c000380701e01830300f813c001e600fe000700e03c03060601fc13c001e601ff000e01c078060c0c03de03c001e601ff001c0380f00c1818078f03c001e601ff00380701e01830300f0783c001e601ff00700e03c03060601e03c3c001e600ff00e01c078060c0c03c01e3c001e600fe01c0380f00c181807800f3c001e600380380701e01830300f00073c001e600000700e03c03060601e00033c001e600000e01c078060c0c03c00013c001e600001c0380f00c181807800003c001e60000380701e01830300f000003ffffe60000700e03c03060601e0c0013ffffe60000e01c078060c0c03c1f0033ffffe60001c0380f00c1818078218073ffffe6000380701e01830300f06080f0000006000700e03c03060601e06081e0000006000e01c078060c0c03c02083cffffffe001c0380f00c1818078133078ffffffc00380701e01830300f07de0f0000000000700e03c03060601e08401e0000000000e01c078060c0c03c18203c0000000001c0380f00c1818078102078100000000380701e01830300f01860f0200000000700e03c03060601e00c41e0400000000e01c078060c0c03c00783c0800078001c0380f00c181807800007810000cc00380701e01830300f00000f0200018600700e03c03060600780001e040fff0200e01c078060c03003c0003c0800018201c0380f00c1801801e00078100000860380701e3f80c00c00f000f0200000fc0700e03c63006006007801e0400000300e01c07841003003003c03c08001c0001c0380f041001801801e078100066000380701e041000c00c00f0f0200043000700e03c0630006006e079e04000c1000e01c07803e0003003b83fc08038',
    },
    starweb: {
        name: 'starweb',
        hex: '01e600002f804210c218803f80001bc01f86000020f04610e31883c10000187ef1890000200e4331a1308e010000042331190ffe2003c1e010e070010ffe2623221108022000e04210c0c001180622112221880223e078040803c0f11004211144218c0222386404080cc31110047108444204022308230004104611100c5088cc46440201081188046246311008188c88844603110890c800c2462010180844888c420311f88830038446e230108c441088e33e10188810030447823e10c4421108a1e0100084180208400203e046221111000008008618060840040000222223111000180002140b104006000222112233180ffe1e830219104f1ff8023111222220f00701c1221120e01807c0111162220780058070a1210180680078111044646e0000403c80e14780c0001d888844446203e23006e0c1990110e01988884447830e201821e0c1e10601fc107888844e010c3106006041c1082104201c8888d8008410030030c1823002086006c448e030c210808030c3024042184301c44880f841e0407818e6048081f087c0443b038c2080203c1dae070180610c70351c0e061000fffe17ba0fffc003081c0e181802180e08038b36380438061006067c30030c300401f937f000070c30030fd2080186c002009daf601000d8600612110403038001004decc0200070300c221182060dffc0c063f980c07fec18186211c18818403ffffb37ffff00860c30e21120f0602000fe0e1c1fe00101834122111060c0180303861870300200c1822211180102060c007e1f800c08106006221116020f813000c738c0062078100e2211130418c0f0031ffe2003c0c608122211118830618f07fbf7f81c608304622211113070c3007f32d33f8030c383a2220191301d8600f026d903c0184603222088914c070c03606edd81b00c380ca26088998300181c4076db808e0400186644888981c010e080e7f9c0418200e0644488890070230181873860607103802444888a100e6c0107061838200d8e001c44888c3c03f0033f06183a3003f00f0c44c0486700b007c6061838f803c03984c0444841c180ec0c04083c0c0060e08488445080610008180c1c06040021804288446180620008321e1e12040011806108442100421810222e1911040610802108624200c43f10424a1490823f08c01091e24600846310838924704231884018913283818842010309243022108c4078530f807908c2220611a01811108427c07c03800708fe240c10c20c091ec43c007081b00010f0283210c2130d07c20003e0c28e00100039c210c210c70002001c504484e010003e0200c2101f000201f848c44437f003f00221211003e0033f98888442233ffe6000221110019fffa110888c2311200060e0261121c1800122310c0a2118c00043a1640923718000c62114',
    },
    stars: {
        name: 'stars',
        hex: '0000000000000000000000000000000007e000000000000000000000000000000ff000000000000000000000000000001ff800000000000000200000000000043ffc00000001000000000000008000007ffe0800000380000000000001c000007ffe00000001000000000000009038007ffe0000000800000000001c00027c007ffe0000002040000000003e0000fe007ffe80000000003ff000003e0000fe007ffe2a00014021fffe00003e0000fe003ffc0080780007ffff80001c00007c001ff80028fc001fffffe00080000038000ff00002fc003ffffff000020000800007e00000fc00fffffffc02000000000000000000fc01ffc63ffe080100010000000800007803ffc63fff000000000000000000000003ffc63fff200080020000000400010007ffc63fff80000000000000000000000fffc63fffc0002008000000020004000fe00007ffc0000000000000000010001fe00000ffe0001020000000010020001fe000007fe0000000000000004000003ffc00003ff0000840000000000080003ffe07c03ff0000000000000002000003ffe07f03ff0000780000000000200007ffe07f83ff8000fc0000000001800007ffe07f83ff8000fc0000000003c00007ffe07f03ff8000fc0000000003c00007ffe07c07ff8000fc0000000001800007ffe0000fff8000780000000000000007ffe00007ff8000000008000001000007ffe00001ff800010001c000000000007ffe07e01ff8000000008000001000007ffe07f80ff8000100020000002000017ffe07fc0ff8000000000000000000043ffe07fc0ff000010004000c002000203ffe07fc0ff500008000000c000000803ffe07f80ff0480000100000004001c01ffe07e01fe0030080000000000000801ffc00001fe0030000400000004000000fe000003fc0000080000000000000000fe00000ffc00000008000000080000007e00003ff800000400000000000000003ffc63fff000000020000000080000003ffc63fff000000780000000000000009ffc63ffe000000fc0000000100000020ffc63ffc000001fe00000000000000003fc63ff0000001fe00000007800000401fffffe0000001fe0000000fc0000e0007ffff84000001fe0000000fd5401f0001fffe00000014fc0000000fc0155f00003ff0010000a0790000000fc0001f0000000000000500000000000780000e000000000040100000400000200000004000000000194000001000000000000010000000003c0000000800008000000004000000003c000000020000000000000000000000180000000080020000000001000000000000000000180800000000006000000000000080003c1c00000000006000000000000000003c0800001000000000000000000000001800000000000000000000000000000000',
    },
    bitcoin_b2: {
        name: 'bitcoin_b2',
        hex: '000000000000000000000000000000000000000000000007800000000000000000000000000000fffc000000000000000000000000000fffffc00000000000000000000000003ffffff0000000000000000000000000fffffffc000000000000000000000003fffffffe000000000000000000000007ffffffff80000000000000000000000fffffffffc0000000000000000000001fffffffffe0000000000000000000007ffffffffff8000000000000000000007ffffffffff800000000000000000000fffffffffffc00000000000000000001fffffc7ffffe00000000000000000003fffff8f3ffff00000000000000000007fffff8f1ffff00000000000000000007fffff8e3ffff8000000000000000000ffffc10e3ffffc000000000000000000ffff800e3ffffc000000000000000001ffffc0003ffffe000000000000000001fffff0001ffffe000000000000000003fffff80007ffff000000000000000003fffff81803ffff000000000000000003fffff83f01ffff000000000000000003fffff03f80ffff000000000000000007fffff03fc0ffff800000000000000007fffff03fc0ffff800000000000000007fffff07fc0ffff800000000000000007ffffe07fc0ffff800000000000000007ffffe03f80ffff80000000000000000fffffe00001ffffc0000000000000000fffffe00003ffffc0000000000000000fffffc00007ffffc0000000000000000fffffc0f807ffffc00000000000000007ffffc0fe03ffff800000000000000007ffffc1ff01ffff800000000000000007ffff81ff81ffff800000000000000007ffff81ff80ffff800000000000000007fff801ff80ffff800000000000000003fff003ff81ffff000000000000000003fff000ff01ffff000000000000000003fffc000001ffff000000000000000003ffff800003ffff000000000000000001ffffc00007fffe000000000000000001ffffc7000ffffe000000000000000000ffffc71ffffffc000000000000000000ffff8f1ffffffc0000000000000000007fff8f1ffffff80000000000000000003fffce3ffffff00000000000000000003ffffe3ffffff00000000000000000001fffffffffffe00000000000000000000fffffffffffc000000000000000000007ffffffffff8000000000000000000007ffffffffff8000000000000000000001fffffffffe0000000000000000000000fffffffffc00000000000000000000007ffffffff800000000000000000000001fffffffe000000000000000000000000fffffffc0000000000000000000000003ffffff00000000000000000000000000fffffc000000000000000000000000000fffc000000000000000000000000000007800000000000000000000000000000000000000000000000',
    },
    bitcoin_shade: {
        name: 'bitcoin_shade',
        hex: '00000000000002aaaa00000000000000000000000000155757600000000000000000000000002aeffef80000000000000000000000015dffffff000000000000000000000003bffbfbab80000000000000000000000ffff7f75540000000000000000000001ffe800aaaa0000000000000000000003fdc00005550000000000000000000007fb000002aa800000000000000000000ffc00000055600000000000000000001ff80007002ae00000000000000000003ff00007801fd00000000000000000007fe00007882fa80000000000000000007fc41c0f1f07f4000000000000000000ff889f8f1e0bea000000000000000001ff113fff1e15fd000000000000000001fe223ffe3c2aff000000000000000003fc440fff3c157f000000000000000003f88883fffc3ebf800000000000000007fd5103fff85f7f800000000000000007faaa23fffe3fbfc00000000000000007f55547f9ff9fdfc0000000000000000feaaa87f07fcfffc0000000000000000ff55547f01fe7dfe0000000000000000feaaa8ff00fe3efe0000000000000001fc5554fe007f5f7e0000000000000001feaaa8fe087f3efe0000000000000001fd7551fc147f1d7f0000000000000001febfe9fc00ff3aff0000000000000001fd77f3ff00ff177f0000000000000001feefebfffffe2eff0000000000000001fd5ff3fffffe1d7f0000000000000001febfe7fbfffc2aff00000000000000017d7fe7f0fff0577f0000000000000000feafeff03fe0eefe0000000000000001dd5d4fe00ff1557d0000000000000000beba0fe207f02a7a00000000000000015555dfe503f854760000000000000000aeabffc283f808ee00000000000000005757ffc143fc11de0000000000000000aaa7ffc2a3fc22be00000000000000005751fff007fc457c00000000000000006ba83ffe0ff889fc00000000000000005d540ffffff801f800000000000000003baa0ffffff003f8000000000000000037d40f7ffff007f000000000000000003fea0f1fffe00fe000000000000000001ff11e3dff800fd000000000000000000ff21e3c08001ba000000000000000000ffc3c3c00001740000000000000000007fc8c7800002ac0000000000000000003ff007800005500000000000000000003ff22780000aa00000000000000000001ffd40000055400000000000000000000ffea88800aa8000000000000000000007ffd11501d50000000000000000000003fff2aa1bfa0000000000000000000000ffffd7fff400000000000000000000007fffffffe800000000000000000000001fffffffd000000000000000000000000fffffffc0000000000000000000000001ffffff000000000000000000000000007ffffc0000000000000000000000000007ffc00000000000000',
    },
    bitcoin_b: {
        name: 'bitcoin_b',
        hex: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000380000000000000000000000000000003e0000000000000000000000000000003e1800000000000000000000000000007c1f00000000000000000000000000007c3e00000000000000000000000001007c3e00000000000000000000000001f07c3e00000000000000000000000003fff83c00000000000000000000000003fffc7c00000000000000000000000003fffffc00000000000000000000000001fffffc000000000000000000000000003ffffe000000000000000000000000001fffff800000000000000000000000001fffffe00000000000000000000000001ff7fff00000000000000000000000001fe07ff80000000000000000000000001fe01ffc0000000000000000000000003fe00ffe0000000000000000000000003fe007fe0000000000000000000000003fe003fe0000000000000000000000003fc003fe0000000000000000000000007fc003fe0000000000000000000000007fc003fe0000000000000000000000007fc007fe0000000000000000000000007ff00ffc000000000000000000000000fffffffc000000000000000000000000fffffff8000000000000000000000000fffffff0000000000000000000000000ffffffc0000000000000000000000001ff0fffc0000000000000000000000001ff01ffe0000000000000000000000001fe007ff0000000000000000000000001fe001ff8000000000000000000000003fe000ff8000000000000000000000003fe000ffc000000000000000000000003fc000ffc0000000000000000000000e7fc0007fc0000000000000000000001fffc000ffc0000000000000000000001fffc000ffc0000000000000000000001fffe001ffc0000000000000000000003ffffc07ff80000000000000000000000fffffffff800000000000000000000000ffffffff0000000000000000000000001fffffff0000000000000000000000001ffffffe0000000000000000000000001f3ffffc0000000000000000000000001e0ffff00000000000000000000000003e0f07800000000000000000000000003e1f00000000000000000000000000003e1f00000000000000000000000000003e1f00000000000000000000000000003c3e0000000000000000000000000000043e0000000000000000000000000000003e0000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    bitcoin_full: {
        name: 'bitcoin_full',
        hex: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007e000020000000000000000000000003ff8001e000f000000000000f00000007ffe003e001f000000000000f8000000ffff003c001f030000000000f8000001fe7f803c001f1f0000000000f0000003fe5fc03c00041e000000000040000007f01fe07c00001e000000000000000007f01fe07800001e00000000000000000ff807e07fe01e3ff03fc0fe01e0ff800ff8c3f07ff03e3ff0ffc1ff81e1ffc00ff8c3f0fff83c3fe1ffc3ff83e1ffe00ff007f0fcf83c3fe3f087cfc3c3e3e00ff007f0f07c3c3c03e00f87c3c3c1e00ff187f0f03c7c7807c00f03c3c3c1e00fe1c7f0f03c787807801e03c7c3c1e00f81c7f1e03c787807801e03c783c1e00fc007e1e07c78780f801e03c78781e007f00fe1e078f8f00f801e07c78783e007f4ffe1e078f0f00f801e07878783c003f4ffc3c0f0f0f00f801e0f8f0783c001ffff83c1f0f0f807c01f0f0f0f83c000ffff03ffe0f0ffc7fe1fff0f0f07c0007ffe03ffc1e0ffc3fe0ffe0f0f0780003ff807ff81e07fc1ff07fc1f0f07800007c000fc00001f007c01e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    bitcat: {
        name: 'bitcat',
        hex: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003ff000000000000000000000000001e1ffff1e000000000000000000000007efffffcf80000000000000000000000e3ffffff1c0000000000000000000000c7ffffffce00000000000000000000019fffffffe60000000000000000000001bffffffff600000000000000000000013ffffffffa0000000000000000000000781fffe07c0000000000000000000000e10fffc41c0000000000000000000000e00fffc01e0000000000000000000001f00fcfe03e0000000000000000000001fc3f83f0fe0000000000000000000001ffff83ffff0000000000000000000003ffff87ffff0000000000000000000001ffffefffff0000000000000000000003ffefefefff0000000000000000000001ffefefdfff0000000000000000000001ffefcfdffe0000000000000000000001fff7979ffe0000000000000000000000fff8383ffc00000000000000000000007ffffffff800000000000000000000003ffffffff0000000000000000000000027ffffffc00000000000000000000000783f87fc380000000000000000000000f9c00003fc0000000000000000000000f7f703fffc0000000000000000000001e7f783fffe0000000000000000000001effb87fffe0000000000000000000003effbffffff0000000000000000000003effbffffff0000000000000000000007e7f3ffffff8000000000000000000007c001ffffff800000000000000000000f00007fffffc00000000000000000000e00003fffffc00000000000000000000c01001fffffe00000000000000000001803f00fffffe00000000000000000001803fc0fffffe000000000000000000010030e07fffff000000000000000000030030707fffff000000000000000000020070303fffff000000000000000000020060303fffff000000000000000000020060703fffff80000000000000000006007fe03fffff8000000000000000000600ffc01fffff8000000000000000000600c38037ffff8000000000000000000603c0c037ffff8000000000000000000603f8e037ffff8000000000000000000601f8e037ffffbf8000000000000000060180e037ffffbfe0000000000000000301c0c0760fffbfe0000000000000000301ffc071f3ff7ff00000000000000003807f80f3f9ff7ff00000000000000001c00601f3fdfefff00000000000000000e00003f7fdfdffe00000000000000000300007f7fdf3ffe0000000000000000000000ff3fd8fffc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    nyancat: {
        name: 'nyancat',
        hex: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000030000000000000000000000000000000cc000000000000000000000000000000cc0000000000000000000000000000003000000000000000000000000000000030000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffe00000000000000000000000fffffffff00000000000000000000003ff9ffffff80000000000000000000003f19bfffff80000000000000000000003f833fffff80000000000000000000003fc03fffff80000000000000000000003fc03fffff80000000000000000000003f861fffff80000000000000000000003f870f8fff80000000000000000000003f8f8f87ff80000000000000000000003f0f0e71ff83800000000000000000003e000e79ff83c00000003fffe000000f3e101e7e7f8fc00000083fffe000000f3e3c3e7e7f8fc000000ffffffffff007303e3e7f001fc000000ffffffe1ff3c3207e1e7f807fc000000ffffffe1fe1e03c1c3e7fb7ffc000000f07fffe4fe0f03c003e7fffffc000000f87fffc4ff0703c803cffffffc000000f33fffc8ff83c399861fffffff000000f33fff9cffc3c3f9ff1ff7ffdf000000e47f0780ffe0f3fbff9fe7ffcf000000c67f87e3fff0e3ffff9fe7ff8f000000e07f33fff87803ffff9f87e20f000000f0ff33fff87c03ffff9f87e20f000000fffe47fffb3f83ffff9fffffff000000fffc67fff13fc3ffff9fffffff000000fffe07fff67ff3ffff9fe78e3f000000ffff0fffc67ff3ffff9fe78e3f000000ffffffffe07ff3ffffe7e0003c000000fffffffff8ffe3ffffe7e00038000000ff134bffffce00fffff9ffffe0000000fc0001ffff0000fffff9ffffe00000000000000000003f0000000000000000000000000000003f0000000000000000000000000000003c010000000c000000000000000000003c01c000780e000000000000600600000000000000000000000000006006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000180000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    coffee: {
        name: 'coffee',
        hex: '0000000000000000000000000000000000000000000000000001fff8000000000000000000000000001e00bfc0000000000000000000000000e00005f800000000000000000000000180002bff00000000000000000000000600005fffc00000000000000000000008000003fff000000000000000000000100000007ffc00000000000000000000300000000ffe000000000000000000002000000001ff000000000000000000002000000000ff8000000000000000000040000000003fc000000000000000000040000000000fe0000000000000000000400000000007f0000000000000000000400000000003f0000000000000000000600000000001f8000000000000000000600000000000f8000000000000000000600000000000780000000000000000007000000000007c000000000000000001f800000000003c00000000000000000e7c00000000003800000000000000001c7e0000000000380000000000000000707f0000000000380000000000000000c57f80000000003000000000000000018a3fe000000000300000000000000003053ff0000000006000000000000000062abffc000000004000000000000000045dffff8000000180000000000000000c3bbfffe000000600000000000000000865dfff5e00003000000000000000001ac0ffffe1ffff80000000000000000011437fffd000000000000000000000003281afffa00000000000000000000000350047ff400000000c000000000000002080e7ff800000003f00000000000000250077ffd00000017f8000000000000022a83bffa20000003fc0000000000000251003ff400000000f40000000000000209801fe880000000680000000000000314800ff40000000030000000000000032ac00ffa000000001000000000000003546007f40000000011000000000000010eb003e8800000001a00000000000001179c11f50010400008000000000000018bae16b8202080000800000000000000957f0160404480001000000000000000c8ff80be80aac0001000000000000000477ff54fd558f803600000000000000063bfff27bba00fffc000000000000000357ffff3f500007f00000000000000001abffff9aa00000000000000000000000d5ffffc40000000000000000000000406bffffe200000000000000000000000031fffff1d4000000000000000000080818bffff8fea808ab80000000000000040c5ffffc7fd5555f8000000000002010472ffffe1fffbbff000000000000000409d7ffff0ffffffe000000000000080000e3ffff87fffffc00000000000020852139ffff81fffff00000000000000003041e3fffc0ffffe000000000000000501907c7ffe03fff8000000000000000220000fafff01ffe00000000000000000004101fd5f807f80000',
    },
    flower: {
        name: 'flower',
        hex: 'e598b7fdffdf7dc00000000000000000fbe46fffffff1d80024000000000000054917defffff77bc0830000000000000ef68b7ffffff7ffe2020000000000000ffb65ffffffffbe641600000000000003fdd97ffffdf7dfcb6a80000000000001ff68affffffffdc2dd600000000000087eb457f7fdffff8fb8600000000000071ffa7bf7ffffef3fe740000000000003cff63ffbfdffff3fdcc000000000000ab37a5ffbfffff7fbb9c0000000000008d9d757fdfa7f0ff7d38000000000000f3e7caffd4e7effefe7007000000000077b7ea55e24bf3fbace078c0000000009c79e83ec220d7f7f9c3e780000000006effd41f388007eff393888000000000b75fed9f20080fbffe1e410000000000ebffbbe700128bfffc714200000000007dfbfef9400003febdcc2c0000000000ff7ff7be7302217efe34180000000000f3fffef80809007ff8c83000000000003dbfd760004020ffe721c000000000000007fbf9000041ff9e33800000000000c373ff408112017ef8de000000000000013c7ffaa400047f2638ff0000000000873700410000987999c3f6c000000000057bf1ac042c04fe7e1fbfc00000000014adfff0026041ffe1ffffe000000000095feff0624008003fffff8000000000133bfffe0c0031fffffff800000000000ffdfffc801981ffffff00000000000007dbfff1080300fffff0000000000000217fedc60100033fff00000000000000189fff8e480001c00000000000000000e80bf81dc00800700050100000000000008009fbd088081f0000ce00000000000410b5ffe2001607c00007000000000020637fffe6800180fe009c0000000000050fbfffef860ff807ffe00000000000885ffdffdf9796ffc00000000000000070ff3fff9fb798bffe0000000000000046fbffffff37edf7ffc0000000000000357dedffff7ff6fffffc0000000000007be7efffbffffbffffff000000000000cfbfcf7fbffbfddff3ffe000000000001c7e0fff7ffbfeefff3ff800000000007ff00ffe3ffbfffbffe37c0000000000fec008a4fffdfffe7fff7e0000000000b5001181bbfdffff8efedf8000000000580042046ffdffdfe1dff58000000000000507807ffcfffffc6ffb800000000004000420bffcfffeff3c3e0000000000120808503ffc7fffffdf00000000000030c018813ffe3ffdf7e7800000000000f7003a211ffc3ffef9f5c00000000000f80030022dfe4efd7f79600000000000000060800ffc0eef9cb5e000000000000000424403dc07f5c7ea0000000000000000d04823ad41ffc3fe0000000000000000909820b9007dc07e000000000000000192200009000f000000000000000000010060201180080000000000000000000148c000040040000000000000000000035380000400001000000000000000',
    },
    saturn: {
        name: 'saturn',
        hex: '00000000000000000000007800a00300000000000000000000000703ffffc0c000000000000000028000707eaaa0f8600000000000000101010307d5011d1c30000000000000000000007aa2aaa3cf1000000000000000000401d54404045708000000000000000888086a0fe80a2b880000000000000019541017f00f059988000000000000023aaaa0000000c24b880000000000004455554000000025458800000000000080aaeae880000010a98800000000000107fd55d5000000080d900000000000023bfbbbaa0000000aab9000000000000577f7ff5540000004432000000000000aaffefeaaa88000080b210000000000555ffdff5550400009564200000000102abfefffbaa0000008b6400000000000557fdfff7750200008ac800000000000aafefffefaa0800010490800000000415dfdfffffd5510001552100000000002abffffffffaa000022a6200000000004777fffffffd50000456440000000020aefffffffffaa88008ac88000000000115fffffffff555000959100000000002abffffffffbbaa0012b22000000004457ffdffffff7f5440256440000000010affeffffffeefea804a980000000026415dfffffffdffd5009530000000008980abffffffefffba032a4400000001138157ffffffdfff7c045c88000000004e82affffffffffff808d900000000009d815dfffffdfffff010e400000000026a82bbfffffbffffc022c88000000044c50557ffffffffff80d5900000000089ca08affffffffffe212e44000000003794115ffffffffffc051c80000000044e2802bffffffffff00a3220000000089d504557ff7fffffe4056440000000112aa000afeaffffff880b910000000002554001555ffffffe010f200000000004aa80002bfffffff882ac880000000009550004577fffffe00573000000000012aa0022afffffff8808cc0000000000255400015ffffffe10159100000000004a280002bffffff882ae4000000000009a4800105fffffc0455904000000000134100000afffff0808e40400000000026910000955fff84515901800000000026a2000022bffc2028e60300000000004d520000457fe04057901c00000000008b42000022fe0008ae406a0000000000995200001fc000157101d400000000001aa200000002022bca07a800000000003642000000000557305d5000000000003a8100000000aab880eaa0000000000036518000000515c403d5c000000000003a2a600000a2af102eab0000000000003b241c007e5578c03d460000000000003a9883ff888bc200ea980000000000001d445101115e100755600000000000001a60aaaa2be1803aa3800000000000008f1604057e0c74c45c0000000000000083eaeaafe0e087ffc00000000000000060ffdffc0e0400000000000000000000',
    },
    jupiter: {
        name: 'jupiter',
        hex: '0000000008907bfdb7bf2b948000000000000000041eaff7a9d5f3fa0080000000000000012cfffefefe755400800000000000080b3fff5ffff7ffbfa0400000000000008644cbddff7ffffb804000000000000000beffffffffdbb880200000000000010aa7fb7ddf5df5de1020000000000004e579eef6fbffff7be6200000000000049bf27fdfbdefffedf0100000000000010500fffffffeffff6410000000000000261fffffffffffffd8100000000000000fd71fbdf7f7fbeebc0000000000000123e72dffecdbb4b500080000000000008040a58a03ef1a76500800000000000000393941ded666b34a08000000000000000047cf35da1d74a08800000000000000000041990af81d6688000000000000800000000000ef80180400000000000000000400100c38ea0204000000000000010d0804838540f82004000000000000003f1f80002eb9fa8004000000000000007c7ffffc17ffe33c0400000000000417707fffb2fffbc66c0400000000000099c3ffffc7ffff23ff04000000000003183cffff3dfffcd0e00400000000000000a27ffefffff9ff080400000000005c095c3ff306ffffd080040000000000001000001e03ffffc000040000000000000000000024f70100000400000000000000000001f7500eff4004000000000000001037ff7f07fedea20400000000000037f7fefffff9bfbb510000000000000001b7ffffffffd642000800000000000018f83d4fd2340000c008000000000000000080005080000c0008000000000000000000000007ffd06088000000000000000003e080fa36214008000000000000000b7e1f7f7cd0b00010000000000000080b4e753fffec18b01000000000000807cc1fa0401c9affc01000000000001012123246fe03ffc40020000000000001450a77bbff800020e02000000000000081056e7f49e00e0008200000000000002079e19fff685000884000000000001008e031388ff1a1cf4040000000000000151ca2e572d6233b80000000000000000aff00ea4280cc40008000000000000002bfd4309d02008241000000000000000bdff017f03ff209c1000000000000000421af0000f276f7020000000000000080080153473ff9e522000000000000000032a6f4cfebf7fa8400000000000000020a990813bdff68040000000000000000106016fc77eb500800000000000000008c04e5fc081930100000000000000000000209f9b7f40010000000000000000000042402a30ac3200000000000000000000a028904510040000000000000000000240137194cc08000000000000000020010680a1a00010000000000000000000000028100000200000000000000000000400800000004000000000000000000000010000102080000000000000000000000010040001000000000',
    },
    einstein: {
        name: 'einstein',
        hex: 'fffe812fffffffffffffff8800000000f7d10057fffffffffffffe1000000000fee800a88bfffffffffffd4000000000fdfd0111fffffffffffffda000000000b2fa0003fffffffffffffe9000000000f5f70045ffffffffffffff4000000000eaec000027ffffffffffffe000000000ddf8015001ffffffffffff1080000000b2f20000023fffffffffff9c00000000cdfe0000017ffff7fffffdd800000000cafc0000002fffe07ffffef80000000020f20001101fffe00ffffff900000000e0e8000a0003ffc01fffffae0000000045f400040001ff0007ffffc740000000806800003880fe800fffefe1800000005578000d3cc0fd8733fffd50c000000022e800080420fa8f9bffffa0000000000475400013007501dfff7df12000000000a880100c80f8846bfffea82000000001b000000e41fd0027fffd841000000020b002000ea0fe830bfffe8010000000045007011fc0ffffc7ffffc010000000004008a02388ffcfaffffd8000000000005007880750ff70e7fffdc0010000000020001e1fa03faff3fefec00200000000000617c3f07fdf7ffd7c1000000000000002c80ea03fe3efbefca000000000000000effdc01ffe7dddff400000000000000299ff803fffdbbabb000000000000000175ff007fffff7dfd4000000000000000f7ff803fffffaaeea0000000000000015dff001fffff55fc1c60000000000001bfff203ffffe3abfb8400000000000017f7f405fffff747d6720000000000000dffe803ffffee82e80800000000000004ffd001fdfff951704000000000000002abe003fffffa22b800000000000000095fc0017eff7f67fc0000000008000002bfc000feffe89f2800000000000000005f80005f7fe51fd400000000000000003f00002b3fe09b8220000000000000051f4000039ff85d8500000000000000002e80000fbfc0eea800000000000000103d44001fdfc0dd34000000000000000029a0003fefe0a77800000000000000101400015ff7c0775000000000060000000aaa046afee8cd98000000000800000015545d53fd780e08000000000a000000020008097fe02248000000000400000004001695ff804000000000000c00000000081820ffc00000000000000c00000040000140ff8000000000000008000000000000029f8000000000000008000000000000007f4000000000000000000000000000001f000000000000000000000000000000170000000000000000000000000000022b0000000000000000000000000000051600000000000000000000000000002b8a0000000000000000000000000000551400000000000000000000000000002ba40000000000000000000000000057ff4000000000000000000000000000fffece00000000000000000000000001ffff9fc00000000000000',
    },
    piggy: {
        name: 'piggy',
        hex: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000c001fffe000000000000000000000003e00fffffc00000000000000000000007f03ffffff0000000000000000000000630fffffffc000000000000000000003631ffffffff000000000000000000001ff3ffffffff801000000000000000001fe7fffe7fffc0180000000000000000078fffc66fffc0780000000000000000019fffe0cfff83f8000000000000000001fffff00fff8ff0000000000000000000fffff00fff3ff00000000000000000007fffe187ff3ff00000000000000000007fffe1c3ff7fe00000000000000000007fffe3e3ffffc00000000000000000007fffc3c3fffe000000000000000000007fff8003fffc000000000000000000007fff8407fffe000000000000000000007fff8f0fffff000000000000000000007ffc0f8fffff000000000000000000007ff81f87fff3000000000000000000007fff0707fff3800000000000000000007fff000ffff3f00000000000000000007fff200ffffff80000000000000000007ffe661ffffff80000000000000000007fffe7fffffff00000000000000000003fffeffffffff00000000000000000003ffffffffffff00000000000000000003fffffffffffe00000000000000000003fffffffffff800000000000000000003ffffffffffc000000000000000000003fe3ffffff80000000000000000000001fe00fffe000000000000000000000001fcc0007e000000000000000000000001fc7c007e7c0000000000000000000001f87e003e3c0000000000000000000000f87c003e3c0000000000000000000000f83e001e3c0000000000000000000000781e001e1c0000000000000000000000700e000e1c00000000000000000000003006000e0c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000384327c0021938007c2113e0078f800040e3e600061914007c613300030a8000c0b3e600061d16001061e200030200008192a700071d12001071838003020000811227000d15120010d1838003020000c1b226000f13160010f1c2000302000040a22600099314001099320003020000786227c008933c00108913e00fc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    honeybadger: {
        name: 'honeybadger',
        hex: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ddda80000000000000000000000000150046f00000000005a80000000000004fffff8c00000000bb4c000000000002beff749b80000001e40300000000000cfa9bc5296000001f4ff080000000000be6f7eb015800f6ea9b3e600000000033bdfdf999eea7dd8ef6cc1000000000fffffff7ca9fd9afb87d2f1800000001fdffffffc4c600eff9fd1164000000017fffff7f7d9b27bfeffd00e400000002ffffffffff6edd7fe7f8022400000004fffffffffe71d7fff7d8400380000005fffff7fffdffffffbf4441408000000bffffffffffffdffffe000092c000003fbbfffffffffffffee900000080000033f7f7ffffffffff1bb210000040000067856bfffffffffc15d4000001800000cb8915fffffffff008e40001470000011ea9317fffffffe0054a0006bc0000023d18a15bffffffc0025400180000000c6a004895957fbf5000ac006000000031e400264a45656900015000c000000181580094a0aa8a521001200700000006094a012a20848a400000000c0000003800a000111040942200009010000000e0350004890009089488004820000003826b041142400080021100041000000248220c00020200011205000a1000000400880e0085008000241c20020800000680203c00088040001020780108000003000078000000082080408e00440000039000e00000111a42fd91858024000001c003800000f237ff4aa100e022000000c00f0000032020000092003051000000783a00015c20200000a20018490000001fc6001ba02030000193000e28800000000402e400101cc00088e003077fe00000080500000c0730008058018a01500000041800000e001800d28800e017e80000081f00000604580064780022aef0000004058000038038003fe000355ed000000400400000ffe0000080000ff7000000040840000020000000000000000000000792400000000000000000000000000002ffc0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    dragon: {
        name: 'dragon',
        hex: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c00000000000000000000000000000003f8c000000000000000000000100000007ef0000000000000000008d848300000871f8000000000000001effffc1800007fe3ff02000000000003fff1ffce10001ff3ffee001f8000001f7fdffffe80000381a7f80003f00f9063efffd7ff881001d7eff00000783ff8dfffffdffdec1007f1df1400001effeebfdb801f7bf7080fe0dce000000ffffffff30001efd30807c0ffd0000003fffffff0000037778807c00070000000003fffbde0000edfcc06c000f0000000001fffbc600003b7c607e000800000000007dee7200000fae383b000820000000008fbc3a0000037e1f07c0017c0000000063f230000001ff8f81e002600000000007e0400000005fca81f6074400000000ffc00000000037fa80ff039e00000001ff80000000000ff3805d006200000003fc000000000007fd807f83c20000039f00000000000003ffc07e8fc00000059c00000000000001ffe1ff1f70000001f0000000000000005fffbdfe20000021c00000000000083077dffc380000002f80000000000004185ffbfbf00000001c60000000000003fbe3eff63000000001300000000000003fffbfc0400000001638000000000000503fdc00000000000e40000000000005d83ff000000000000000000000000003901f8000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    narwal: {
        name: 'narwal',
        hex: '0000000000000000000000000000000000000000000000000000000000000000000000003f000000000000000000000000000000e3000000000000000000000000000003810000000000000000000000000000060180000000000000000000000000000c018000000000000000000000000000180180000000000000000000000000001801800000000000000000000000000010018000000000000000000000000000100180000000000000000000000000001800c0000000000000000000000000001800c0000000000000001e00000000001800e000000000000000fc00000000000c003ffff00000000003f800000000000e000007fe00000000063000000000000300000006000000003ce00000000000038000000c00000000618000000000000e01800038003ffc01cf000000000000180780007007f80fc71c000000000000701e0001c07c00007c78000000000000c073f03f01e0000060c000000000000180c07ff80f000011c380000000000003018000003c00003f078000000000000603800000e000801c0cc000000000000c03000001c001c0381860000000000018030000070001c060f0700000000000180700000c00008060c330000000000030070000380000007f8638000000000030030000700000001e0e18000000000030030000c00000000018180000000000300380018000080000701800000000003001c00700000fc00fe01800000000003000e00c000003ffffc018000000000030003838000001ffffc038000000000030000ff0000000fc07c0300000000000300007c000000070008030000000000018003e00000000300100600000000000180000000000000e0e00e000000000000c00000000000001f000c000000000000c00000000000000000180000000000006000000000000000003000000000000030000000000000000070000000000000180000000000000000e00000000000000c000000000000000180000000000000060000400000000003c0000000000000030000c0010000000e6000000000000001c00180018000001c3000000000000000700180030000007018000000000000001c038003000001c00c000000000000000f030007000007c0060000000000000001e3000600003c780600000000000000007f000e0003e00f0300000000000000000f000c007f0001e3000000000000000003001cffe000003e000000000000000003003ff0000000000000000000000000030060000000000000000000000000000300c000000000000000000000000000030180000000000000000000000000000187000000000000000000000000000001fe0000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    rabbit: {
        name: 'rabbit',
        hex: '00000000000000000000000000000000000000000000000bf800000000000000000000000000007eaf8000000000000000000000000003e000e00000000000000000000000000e000020000000000000000000000000180000600000000000000000000000003000006000000000000000000000000060000180000000000000000000000000c000038000000000000000000000000180000e0000000000000000000000000b0000380000000000000000000000001f00007e000000000000000000000000e0000003800000000000000000000001c0000000e0000000000000000000000300000000380000000000000000000006000000000c000000000000000000000c00000000060000000000000000000008180000000200000000000000000000183c000000030000000000000000000010180000000600000000000000000000100000a015fc00000000000000000000300000ffff6000000000000000000000100000d54000000000000000000000003000007c0000000000000000000000001000000700000000000000000000000018000001e0000000000000000000000018000000380000000000000000000000080000000e00000000000000000000000c0000000300000000000000000000000700000001800000000000000000000001a0000000c00000000000000000000000e00000007000000000000000000000002000000018000000000000000000000060000000080000000000000000000000400000000c00000000000000000000006000000006000000000000000000000060000000020000000000000000000000c0000000030000000000000000000001800000b8018000000000000000000002000001ee0080000000000000000000060000030000c0000000000000000000060000060000c00000000000000000000400000c00007c0000000000000000000400000800002f0000000000000000000400000800000180000000000000000006000018000000c0000000000000000006030008000000400000000000000000030380180000006000000000000000000186c00800000060000000000000000000fc400c000000200000000000000000002030040000006000000000000000000000185600000040000000000000000000000dfe00000040000000000000000000000700000000c000000000000000000000040000000180000000000000000000000c0000060700000000000000000000000c00003ffc000000000000000000000018000030a00000000000000000000000080000100000000000000000000000000c000060000000000000000000000000070001c000000000000000000000000003fb7f00000000000000000000000000002fe80000000000000000000000000000000000000000000000',
    },
    bunny: {
        name: 'bunny',
        hex: '000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000002000078000000000000000000000000078000f800000000000000000000000007c000f800000000000000000000000007c001f800000000000000000000000007e0019800000000000000000000000006700318000000000000000000000000063007180000000000000000000000000610061800000000000000000000000006180c1800000000000000000000000004080c18000000000000000000000000040c1c18000000000000000000000000040c1818000000000000000000000000060c1830000000000000000000000000060c1030000000000000000000000000060c1030000000000000000000000000020c1060000000000000000000000000030c1060000000000000000000000000030410e0000000000000000000000000019ffcc000000000000000000000000003ffffc000000000000000000000000007f007e00000000000000000000000001e0000780000000000000000000000007c00001c000000000000000000000000f0000006000000000000000000000001e00000030000000000000000000000038000000180000000000000000000000700000000c000000000000000000000060000000060000000000000000000000c0000000060000000000000000000001c000000003000000000000000000000180000000030000000000000000000003800000000180000000000000000000038000000001800000000000000000000700007f8001c0000000000000000000070001f9c000c000000000000000000007000700e000c00000000000000000000f000e007800c00000000000000000000e001c003800c00000000000000000000e0030001800c00000000000000000000e0030000c00c00000000000000000000e0070000c00c00000000000000000000e0060000c00c00000000000000000000e0040001c00c00000000000000000000e00c0000c00c0000000000000000000070080000401c0000000000000000000070080000c01c00000000000000000000700c0000c01c00000000000000000000380e0000c0380000000000000000000038060000c0380000000000000000000018040000c030030000000000200000001c0400008070038006000000600000004e060000806006fc1e00000070007e1c7e07000180f88cfdfc000000d00067ffdf03800701fbf80f9c0000025801f03083c3800603fe40001fe00003cf0fc00001e1800c0f900000007e003ec7fc0000007fc0383e000000000600f800000000001ff0fbf8000000000000000000000000001fff80000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    rooster: {
        name: 'rooster',
        hex: '0000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000bc000000000000000000000000000000fc000000000000000000000000000001fc000000000000000000000000000001f8000000000000000000000000000003fc000000000000000000000000000003ff000000000000000000000000000003ff800000000000000000000000000007ffc00000000000000000000000000007ffe00000000000000000000000000000fff00000000030000000000000000000fff800000000fe000000000000000000fff800000003ff000000000000000000fffc00000007fc000000000000000000fffe0000000fe00000000000000000007fff0000001fc00000000000000000003fff8000001ffc0000000000000000003fff800000ffff0000000000000000003fffc00003ffff8000000000000000003fffe00007ffffc000000000000000003ffffe000fffffc000000000000000007fffffc01ffffb0000000000000000007ffffffc3ffff10000000000000000007fffffffffffe18000000000000000003ffffffffffff08000000000000000003ffffffffffff08000000000000000003ffffffffffff08000000000000000001ffffffffffff00000000000000000001fffffffffffe00000000000000000000fffffffffffc00000000000000000000fffffffffffc000000000000000000007fffffffff98000000000000000000003fffffffffb0000000000000000000001ffffffffe00000000000000000000000ffffffffe000000000000000000000007fffffff6000000000000000000000003fffffff0000000000000000000000001fffffff0000000000000000000000000fffffff00000000000000000000000007fffffc00000000000000000000000001fffffc000000000000000000000000007fffec000000000000000000000000001fffc0000000000000000000000000000fffc0000000000000000000000000000ff9800000000000000000000000000007d00000000000000000000000000000078000000000000000000000000000000780000000000000000000000000000007000000000000000000000000000000070000000000000000000000000000000f0000000000000000000000000000000f0000000000000000000000000000000e0000000000000000000000000000000e0000000000000000000000000000017e000000000000000000000000000007ff000000000000000000000000000000ef000000000000000000000000000001fe000000000000000000000000000000fc0000000000000000000000000000038800000000000000000000000000000010000000000000000000000000000000000000000000000000',
    },
    genesis: {
        name: 'genesis',
        hex: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fd8003f600000039e118000bc71c7000318000c00000006c311800086db6d80031e380c6fe38e06c3319cf186db6d80031b6c0c6db6d806ce2186d91cdb6d80031b7c0c6db7de06c3619edb30db6780031b600c6db60606c341b6da30db6180031b3c0c6db3dc039e471eda3e71c700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ec0000006c00000003006030006000030c0000006c0000000300003000c000030f1cf1ce6ce681cf03cd6f361ce000030d86db1b6db7836d836f6dbc36c000030d9edb1f6db6036d836c6db836c000030db6db186db6036d836c6dbc36c00001ed9ed9cf6ce601cd83cc6db61cc000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030c00d80030300030000c0000000000030c00180030600030000c0000e71ce78f0f1cd9cdb8739a3c73cd9c018db1b6db0d86db6db066de361b6f3001efb1b6db0d9edb6db066d8367b6e3c006c31b6db0db6db6db066d836db6f0c01c79ce6cf0f1ed9c79863983c7b6db8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003f000000000000000000000000000000ffc03bbbbbbbbb93b3bbb00000000001f3e02aaaaaaaaab2aa22900000000001c0e02aaaaaaaaa93abbb90000000000380702aaaaaaaaa90aaaa90000000000380703bbbbbbbbbbbb3bb97fff000000380700000000000000000140010000003807039bbb9393bbb93bb940010000003fff02a2aa2a32228b22894001000000ffffc3a2bbbb13bbb933b940017f0000ffffc0a2a8aa128a8920894001417c00ffffc39bbbabbbbbbbbbb940014145c0e001c00000000000000001c001c1c76ae001c2bbbbb93ab939399140014145c0e001c2a20a0aa2a28aa2314001417c00e001c3b30bbbb3bbbbba1140017f0000e001c0a20a8aa0aaa2aa114001000000e001c0a20bbab8babab9b94001000000e001c000000000000000014001000000e001c3bb3b933b939bbbb97fff000000e001c08a8a32a2aaa20a210000000000f807c0bb3b133abba33bb10000000000ff3fc0a28a12aaaaa222a100000000007fff80bb3a3b3bab9bbba3000000000007f8000000000000000000000000000001e0000000000000000000000000000000000',
    },
    my_bank: {
        name: 'my_bank',
        hex: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003f000000000000000000000000000000ffc00000000000000000000000000003fff0000000000000000000000000000ffffc000000000000000000000000003fffff00000000000000000000000001ffffffe0000000000000000000000007fffffff800000000000000000000001ffffffffe00000000000000000000007fffffffff8000000000000000000001ffffffffffe000000000000000000007fffffffffff80000000000000000001ffffffffffffe0000000000000000000000000000000000000000000000000000000000000000000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000003f8fe3f8fe00000000000000000000000000000000000000000000000000000000000000000000000000000000000007fffffffffff800000000000000000007fffffffffff800000000000000000007fffffffffff800000000000000000007fffffffffff8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003c078781e0007f800780381c070780003c0f87c3e0007fe007803c1c070f80003e0f83c3c0007fe007c03e1c071f00003e1f81e7800071f00fc03e1c073e00003e1f81e7800070f00fe03f1c073c00003f1f80ff000071e01fe03f1c077800003f3f80ff00007fe01ee03f9c07f000003f3f807e00007fe01cf03bdc07f000003fbf807c00007ff03cf039dc07f800003bff803c000070f03ff039fc077c00003bf7803c000070703ff838fc073c000039f7803c000070f07ff838fc071e000039e7803c00007ff0783c387c071f000039e7803c00007fe0f03c383c070f800038e7803c00007fc0f03c383c07078000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    candle: {
        name: 'candle',
        hex: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000030000000000000000000000000000000380000000000000000000000000000003c0000000000000000000000000000003c0000000000000000000000000000003e0000000000000000000000000000003e0000000000000000000000000000007e0000000000000000000000000000007f000000000000000000000000000000ff000000000000000000000000000001ff000000000000000000000000000003ff000000000000000000000000000003ff000000000000000000000000000007ff000000000000000000000000000007ff00000000000000000000000000000ffe00000000000000000000000000000ffe00000000000000000000000000001fbe00000000000000000000000000001fbe00000000000000000000000000001f3e00000000000000000000000000003f3e00000000000000000000000000003e3e00000000000000000000000000003e3f00000000000000000000000000003c3f80000000000000000000000000003c3f80000000000000000000000000003c3fc0000000000000000000000000007c3fc0000000000000000000000000007c3fc0000000000000000000000000007c1fe0000000000000000000000000003c1fe0000000000000000000000000003c0fe0000000000000000000000000003c07e0000000000000000000000000003c07e0000000000000000000000000003c03c0000000000000000000000000001e03c0000000000000000000000000001e01c0000000000000000000000000000e01800000000000000000000000000007018000000000000000000000000000070100000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fe000000000000000000000000000001ff000000000000000000000000000003ff800000000000000000000000000003ff800000000000000000000000000003ff800000000000000000000000000003ff800000000000000000000000000003ff800000000000000000000000000003ff800000000000000000000000000003ff800000000000000000000000000003ff800000000000000000000000000003ff800000000000000000000000000003ff800000000000000000000000000003ff800000000000000',
    },
    ancap: {
        name: 'ancap',
        hex: '0000001fffffffffffffffffff8000000000001fffffffffffffffffff0000000000001fffffffffffffffffff0000000000000f0000000ffffffffffe0000000000000780000007fffffffffc0000000000000780000007fffffffffc00000000000003c0000003fffffffff800000000000003e03fffc3fffffffff800000000000001e07fffe1fffffffff000000000000000f07ffff0fff0007ff000000000000000f07800f0ffe0007fe000000000000000787800787fe000ffc000000000000000783c00787fc001ffc0000000000000003c3e003c3fc001ff80000000000000003e1e003e3f8003ff80000000000000001e0f001e1f0003ff00000000000000000f0f000f0f0007ff00000000000000000f07800f0e000ffe0000000000000000078780079e000ffc00000000000000000783c0079e001ffc000000000000000003c3e003fc001ff8000000000000000003e1e003fc003ff8000000000000000001e0f001f8003ff0000000000000000000f0f000f8007ff0000000000000000000f07800f000ffe00000000000000000007878000000ffc0000000000000000000783c000001ffc00000000000000000003c3e000001ff800000000000000000003e1e000003ff800000000000000000001e0f000003ff000000000000000000000f0f000007fe000000000000000000000f0780000ffe00000000000000000000078780000ffc0000000000000000000007c3c0001ffc0000000000000000000003c3e0001ff80000000000000000000001e1e0003ff80000000000000000000001e0f0003ff00000000000000000000000f0f0007fe00000000000000000000000f07800ffe00000000000000000000000787800ffc000000000000000000000007c3c01ffc000000000000000000000003c3e01ff8000000000000000000000001e1e03ff8000000000000000000000001e0f03ff0000000000000000000000000f0f07fe0000000000000000000000000f078ffe00000000000000000000000007878ffc00000000000000000000000007c3dffc00000000000000000000000003c3fff800000000000000000000000001e1fff800000000000000000000000001e0fff000000000000000000000000000f0ffe000000000000000000000000000f0ffe00000000000000000000000000078ffc0000000000000000000000000007cffc0000000000000000000000000003cff80000000000000000000000000001eff80000000000000000000000000001eff00000000000000000000000000000ffe00000000000000000000000000000ffe000000000000000000000000000007fc000000000000000000000000000007fc000000000000000000000000000003f8000000000000000000000000000001f800000000000000',
    },
    anonymous: {
        name: 'anonymous',
        hex: '000000001f0000fffc0003e000000000000000001e30007ff80071e000000000000000001cf0003ff0007ce0000000000000000019fe001fe001fee000000000000000003bff801fc08fffe000000000000000003fffe01fc01fffe000000000000000003ffff11fe03fffe000000000000000003ffff83ff87fffe000000000000000003ffffc3ff0ffffe000000000000000003ffffe3fe1fffff000000000000000003ff07e1fe3f03ff000000000000000003fc01f0fe7c00ff000000000000000003f00070fff8003f000000000000000003e00010ffc0003f000000000000000003800000ffc0000f000000000000000003000000ffc00000000000000000000003800010ffe0007c0000000000000000038007f07fffffff0000000000000000033ffff0ffffffff000000000000000003fffff0ffffffff000000000000000003fffff0ffffffff000000000000000003fffff0ffffffff000000000000000001ffffe0ffffffff000000000000000000fffff0fffffffe000000000000000000fffff0fffffffe0000000000000000007fffe0fffffffe0000000000000000007fffe0fffffffc0000000000000000003fffc0fffffff80000000000000000011fff80ff3ffff000000000000000000187e100ff1fffe0000000000000000000800200ffce000800000000000000000081fe10ffef0008000000000000000000c8fe31ffeff80800000000000000000048ff31fffff888000000000000000000643fa1fffff090000000000000000000241ff1ffffe110000000000000000000320ff9fdffc1200000000000000000001803f8f8ff822000000000000000000019006000fe06600000000000000000000c800000380c400000000000000000000e4000200018c000000000000000000006300070003180000000000000000000031800f8006180000000000000000000038f00f801c3000000000000000000000187fe001fe60000000000000000000001c3ff83ffe60000000000000000000000c07fffffcc0000000000000000000000e03fffff9c00000000000000000000006183ffff98000000000000000000000031f001ff30000000000000000000000031fe01fe60000000000000000000000019fe03fe60000000000000000000000019ff03fcc000000000000000000000000cff07fdc0000000000000000000000004fe07ff80000000000000000000000007fe03ff00000000000000000000000003fc03ff00000000000000000000000001fc01fe00000000000000000000000000fc01fc000000000000000000000000007c03f8000000000000000000000000007e03f8000000000000000000000000003e03f0000000000000000000000000003e07e0000000000000000000000000001e07c00000000000000',
    },
    mushroom: {
        name: 'mushroom',
        hex: '00000000000000000000000000000000000000000000007ff40000000000000000000000000007ffffc00000000000000000000000003ffffff8000000000000000000000000ffffffff000000000000000000000003fffe007fc0000000000000000000000ffff8001ff0000000000000000000001ffff0000ffc000000000000000000003f87f00007fe000000000000000000007f07f00007ff00000000000000000000fe07f8000fff80000000000000000001fe1ffc003fffc0000000000000000003ffbfffabffffe0000000000000000007fffffffffffff000000000000000000ffffe3ffffffff800000000000000001ffff01ffffffffc00000000000000003fffc01ffffffffc00000000000000003fff801fffff07fc00000000000000007fff003fffff01fe00000000000000007fff007fffff00ff0000000000000000ff3f83ffffff807f0000000000000000fc3fffffffffc07f0000000000000000f83ffffffffffaff8000000000000001f03fffffffffffff8000000000000001f03fffffffffffff8000000000000001f07fffffffffffffc000000000000001f0ffffffffffffffc000000000000001f1ffffd557ffffffc000000000000001fffffaaaaabfffff8000000000000000ffffd5555555ffff8000000000000000fffeaa8808aaafff00000000000000007fd550000011555c00000000000000000aaa0000000022a800000000000000000000000000000000000000000000000000000002aa00000000000000000000000000055555500000000000000000000000000aaaaaa8000000000000000000000000055555500000000000000000000000000aaaaaa8000000000000000000000000055555500000000000000000000000000aaaaaa8000000000000000000000000055555500000000000000000000000000aaaaaa80000000000000000000000001ffffffc0000000000000000000000001ffffffc0000000000000000000000001ffffffc0000000000000000000000001ffffffe0000000000000000000000001ffffffe0000000000000000000000003ffffffe0000000000000000000000003ffffffe0000000000000000000000003ffffffe0000000000000000000000003fffffff0000000000000000000000003fffffff0000000000000000000000007fffffff0000000000000000000000007fffffff0000000000000000000000007fffffff0000000000000000000000007fffffff0000000000000000000000007fffffff0000000000000000000000003ffffffe0000000000000000000000001ffffffc00000000000000000000000007fffff000000000000000000000000001ffffc0000000000000000000000000003fff800000000000000000000000000007f400000000000000',
    },
    invader: {
        name: 'invader',
        hex: '0000000003fc0000000003fc000000000000000003fc0000000003fc000000000000000003fc0000000003fc000000000000000003fc0000000003fc000000000000000003fc0000000003fc000000000000000003fc0000000003fc00000000000000000003fc000003fc0000000000000000000003fc000003fc0000000000000000000003fc000003fc0000000000000000000003fc000003fc0000000000000000000003fc000003fc0000000000000000000003fc000003fc0000000000000000000003fc000003fc0000000000000000000003fc000003fc00000000000000000003fffffffffffffc000000000000000003fffffffffffffc000000000000000003fffffffffffffc000000000000000003fffffffffffffc000000000000000003fffffffffffffc000000000000000003fffffffffffffc000000000000000003fffffffffffffc000000000000000003fffffffffffffc0000000000000003fffc03fffffc03fffc00000000000003fffc03fffffc03fffc00000000000003fffc03fffffc03fffc00000000000003fffc03fffffc03fffc00000000000003fffc03fffffc03fffc00000000000003fffc03fffffc03fffc00000000000003fffc03fffffc03fffc00000000000003fffc03fffffc03fffc000000000003fffffffffffffffffffffc0000000003fffffffffffffffffffffc0000000003fffffffffffffffffffffc0000000003fffffffffffffffffffffc0000000003fffffffffffffffffffffc0000000003fffffffffffffffffffffc0000000003fffffffffffffffffffffc0000000003fffffffffffffffffffffc0000000003fc03fffffffffffffc03fc0000000003fc03fffffffffffffc03fc0000000003fc03fffffffffffffc03fc0000000003fc03fffffffffffffc03fc0000000003fc03fffffffffffffc03fc0000000003fc03fffffffffffffc03fc0000000003fc03fffffffffffffc03fc0000000003fc03fffffffffffffc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000003fc03fc0000000000000003fffc03fffc0000000000000000000003fffc03fffc0000000000000000000003fffc03fffc0000000000000000000003fffc03fffc0000000000000000000003fffc03fffc0000000000000000000003fffc03fffc0000000000000000000003fffc03fffc0000000000000000000003fffc03fffc00000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    mtgox: {
        name: 'mtgox',
        hex: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f800000000000000000000000000003ffc0000000000000000000000000000fffc0000000000000000000000000003c1fe000000000000000000000000000e00fe000000000000000000000000001800fe000000000000000000000000007000fc00000000000000000000000000c000fc000000000000000000000000030001fc000000000000000000000000060001f8000000000000000000000000080001f8000000000000000000000000000003f8000000000000000000000000000003f0000000000000000000000000000007f0000000000000000000000000000007e000000000000000000000000000000fc000000000000000000000000000001fc000000000000000000000000000003f8000000000000000000000000000003f0000000000000000000000000000007f000000000000000000000000000000fe00028000a2aaaa81ffff01fffe0ff1fc0005400155555543ffff87ffff07f9fc0002a002a2aaaa87ffffcfffff87fff8000540055555550fffffcfffffc3fff0000aa00aa002800f00001f0007c1ffe0000550155005000f00001e0007c1ffc0000aa82aa002800f00001e000780ffc0000554154005001f0fffde0007807f80000a2828a00a801e0fffde000780ffc0000514514005001e1fffde000781ffc0000a2aa0a00a001e1fffbe000783ffe0001415414005001e0007bc000787fff0000a0a80a00a001e0007bc000f8ffff0001405414005001f000fbe001f1fe7f8000a0282800a2a1fffff3fffff3fc3f8001405014005141fffff1ffffe7f81fc000a0202800a2a0ffffe0ffffcff01fe0014000140141403fff847fff1fe00fe000000000000000000008000000000000000000000000000000100000000000000000000000000000000000aaaa8000000000000000000000001000555500000000000000000000000020002aaa0000000000000000000000004000155400000000000000000000000000002aa8000000000000000000000000400155500000000000000000000000008002aaa000000000000000000000000140055540000000000000000000000000a02aaa8000000000000000000000000151555100000000000000000000000000aaaa800000000000000000000000000155550000000000000000000000000000aaa8000000000000000000000000000155500000000000000000000000000000aa800000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    electrum: {
        name: 'electrum',
        hex: '0000000000000000000000000000000000000000000000000000000000000000000000000000000fe00000000000000000000000000001ffff0000000000000000000000000007ffffc00000000000000000000000003ffffff00000000000000000000000007ffffffc000000000000000000000001ffffffff000000000000000000000003e07ffc0f80000000000000000000000f801ff003e0000000000000000000001f0f07c1e1f0000000000000000000003f3fc38ff9f8000000000000000000007e3ff01ff8fc000000000000000000007e7ffc7ffcfe00000000000000000000fe7ff83ffc7e00000000000000000001fc7ff11ffe7f00000000000000000003fcffe38ffe7f80000000000000000003fcffc7c7fe7f80000000000000000007fcff8fe3fe7fc0000000000000000007fcff8001fe7fc000000000000000000ffc7000000e7fe000000000000000000ffc000fe0007fe000000000000000001ffc067ffc403ff000000000000000001ff07cfffe7c0ff000000000000000001fc078ffff3c87f000000000000000001f8e79f97f1ce1f000000000000000003f1e33f97f98f8f800000000000000003e7f33e01f89fc7800000000000000003c7f27e00fc9fe7800000000000000003cff07f187c1ff38000000000000000039ff8ff1cfe3ff38000000000000000039ff8ff18fe3ff38000000000000000039ff8ff007e3ff38000000000000000039ff8ff1c7e3ff3800000000000000003cff87f1e7c1fe7800000000000000003cff23f1c7c9fe7800000000000000003e7f33e00f89fcf800000000000000003f1f31f97f9cf1f800000000000000001f8e79f97f1ce3f000000000000000001fc278ff7e3c87f000000000000000001ff07c7ffe7c1ff000000000000000001ffc067ffc407ff000000000000000000ffe000fe0007fe000000000000000000ffe7800003e7fe0000000000000000007fcff8ee1fe7fc0000000000000000007fcffcfe3fe7fc0000000000000000003feffc7c7fe7f80000000000000000003feffe38ffe7f80000000000000000001fe7ff11ffe7f00000000000000000000fe7ff83ffefe00000000000000000000fe7ffc3ffcfe000000000000000000007f3ff01ffcfc000000000000000000003f3fe387f9f8000000000000000000001f8f07e0e3f0000000000000000000000fc01ff007e00000000000000000000003f0fffe1fc00000000000000000000001ffffffff000000000000000000000000fffffffe0000000000000000000000003ffffff800000000000000000000000007ffffc000000000000000000000000001ffff00000000000000000000000000000fe0000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    mycelium: {
        name: 'mycelium',
        hex: '000000000000000000000000000000000000000000000000000000000000000000000000000000fffe0000000000000000000000000003f7df800000000000000000000000001f07c1f00000000000000000000000007807c03c000000000000000000000001c007c0070000000000000000000000030007c00180000000000000000000000e0007c000e0000000000000000000001c0007c0007000000000000000000000300007c0001800000000000000000000600007c0000c00000000000000000000c0000fe000060000000000000000000180000fe000030000000000000000000180003ff800030000000000000000000300007ffc0001800000000000000000060001ffff0000c00000000000000000040007ffffc0004000000000000000000c000ff01fe0006000000000000000000807ffc007ffc0200000000000000000180fff8003ffe0300000000000000000181ffe0000fff0300000000000000000101cf800003e70100000000000000000301c7800003c70180000000000000000201ffc00007ff0180000000000000000200fff0001fff00c0000000000000000600fff8003ffe00c00000000000000006007ffe00fffc00c00000000000000006003cff83fe7c00c00000000000000004003c3ffff87c00400000000000000004003c0fffe07c00400000000000000004003c07ffc07c00400000000000000004003c01ff007c00400000000000000004003c00fe007c00400000000000000004003c007e007c00400000000000000004003c007c007c00400000000000000006003c007c007c00c00000000000000006003c007c007c00c00000000000000006007c007c007c00c00000000000000002007c007c007c00c0000000000000000200fe007c00fe0180000000000000000300fe007c01ff0180000000000000000103ff807c03ff8180000000000000000107ffe07c0fffe30000000000000000019ffff07c3ffffb000000000000000000ff83fc7c7fc7fe000000000000000000fe00ff7dff01fe0000000000000000007c007ffffc007e00000000000000000070001ffff0001c000000000000000000300007ffe00018000000000000000000100001e7800030000000000000000000180001e70000300000000000000000000c0001ff000060000000000000000000060000fe0000c0000000000000000000030000fe0001800000000000000000000180003800070000000000000000000000e00000000e0000000000000000000000300000001800000000000000000000001c00000070000000000000000000000007800003e0000000000000000000000001e0001f000000000000000000000000003f01fc000000000000000000000000000fffe0000000000000000000000000000000000000000000000',
    },
    ethereum: {
        name: 'ethereum',
        hex: '0000000000000000000000000000000000000000000000030000000000000000000000000000000280000000000000000000000000000007000000000000000000000000000000068000000000000000000000000000000f4000000000000000000000000000001ea000000000000000000000000000001f5000000000000000000000000000003ea000000000000000000000000000003f5000000000000000000000000000007ea80000000000000000000000000000ff540000000000000000000000000000feaa0000000000000000000000000001ff540000000000000000000000000001feaa0000000000000000000000000003ff550000000000000000000000000007feaa8000000000000000000000000007ff55400000000000000000000000000ffeaa800000000000000000000000000fff55400000000000000000000000001ffeaaa00000000000000000000000003fff55500000000000000000000000003ffeaaa80000000000000000000000007ffc55500000000000000000000000007ffa2aa8000000000000000000000000ffd40554000000000000000000000001ffaa00aa000000000000000000000001fd540055000000000000000000000003eaaa000a000000000000000000000003d5540005000000000000000000000006aaaa000080000000000000000000000d55540000000000000000000000000002aaaa0000000000000000000000000001555400000000000000000000000000002aaa0000000000000000000000000000155400000000000000000000000000040aaa00008000000000000000000000030154000100000000000000000000000380aa0002000000000000000000000001e0540015000000000000000000000000f80a002a000000000000000000000000fe0400540000000000000000000000007f0202a80000000000000000000000003fc005500000000000000000000000001ff00aa00000000000000000000000001ff855400000000000000000000000000ffeaaa000000000000000000000000007ff554000000000000000000000000007feaa8000000000000000000000000003ff550000000000000000000000000001feaa0000000000000000000000000000ff540000000000000000000000000000fea800000000000000000000000000007f5400000000000000000000000000003ea800000000000000000000000000003f5000000000000000000000000000001ea000000000000000000000000000000f4000000000000000000000000000000680000000000000000000000000000007000000000000000000000000000000028000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    litecoin: {
        name: 'litecoin',
        hex: '00000000000000aaaa00000000000000000000000000057fff400000000000000000000000000fffffe80000000000000000000000005ffffff4000000000000000000000000fffffffa000000000000000000000005ff8001ff40000000000000000000000bfc00003fa00000000000000000000017f000011fd0000000000000000000003fc0000aa3f8000000000000000000007f00000171fc00000000000000000000fe000000fcfe000000000000000000017c001ff9707d00000000000000000002f8222aa8803e80000000000000000001f5403558001f40000000000000000003e2882ab8000f80000000000000000007c51075500007c000000000000000000fc8206ab00033a00000000000000000079040557001fbd000000000000000000f80806ee002f9e000000000000000001f0100dfe015fdf000000000000000002f0200ffe0abfef800000000000000001e0404ffe1557cf400000000000000003e0808ffc0aae0f800000000000000001e0151ffc055807400000000000000003e02a1ffcc2a007800000000000000007c5541fffc50007c00000000000000003caaa3fffc80007800000000000000007dd553fff800007c00000000000000003daaa3fff00000ba00000000000000007dd503ffc000073c00000000000000003ce80fff00002fba00000000000000007dd03fff0000573c00000000000000003d807fff0002abba00000000000000007c007ffe0005577c00000000000000003c007ffe008aaafa00000000000000007c008ffe0115547c00000000000000003e000ffe0222a07800000000000000005e010ffc0000007400000000000000003e0a9ffc000000f800000000000000001e151fffffff00f000000000000000002f7a9fffffff00f800000000000000001f7d1fffff5601f000000000000000000fbebfffeaaa01e80000000000000000179d3ffdd55603d000000000000000000bda3fffaaaa3be0000000000000000007c03ffffffc77c0000000000000000003e000000000ef80000000000000000001f0000000005f40000000000000000002f800a22022be800000000000000000017c055440457f00000000000000000000be3eaa8088fe000000000000000000005f3d550111fc000000000000000000002f8aa80003f80000000000000000000017e540000ff0000000000000000000000bf800003fa00000000000000000000005ff0001ff400000000000000000000002bff83ffe8000000000000000000000005ffffff40000000000000000000000002fffffe8000000000000000000000000057ffd5000000000000000000000000000aaaa00000000000000000000000000000550000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    myetherwallet: {
        name: 'myetherwallet',
        hex: '000000000000007ffe0000000000000000000000000007d555e00000000000000000000000001aaaaab800000000000000000000000075455556000000000000000000000001aab2aaab800000000000000000000006557d555540000000000000000000000eaa7aaaaab0000000000000000000001f557d555558000000000000000000003b2abcaaaaac000000000000000000007354cd55555600000000000000000000f2a9ceaaaaab0000000000000000000175958001555580000000000000000002ebcb3ffcaaaac0000000000000000002e4d2ffff155540000000000000000006caeaffffcaaaa000000000000000000dd4f77ffff55550000000000000000009aa66bffffaaab0000000000000000013957e3ffffd555800000000000000001aaabc9ffffeaaa8000000000000000035553d5fffff55540000000000000000272abcafffffaaac0000000000000000365535501fff955400000000000000006eaa7eaaa7ffcaaa00000000000000004e55665541ffd55600000000000000005ca8672abaffeaaa0000000000000000dd572755797fe5560000000000000000baa7caaa9c7feaaa0000000000000000b94ff3955d3ff5550000000000000000baaffdaaaebff2ab0000000000000000f54ffdd0003ff5550000000000000000f2aff9c7fffff2ab0000000000000000e54ff8e1fffff55100000000000000008aaffaa83ffff2a70000000000000000d54ff9744ffff54f0000000000000000aaaffc7283fff2af0000000000000000d54ffd75507ff55d0000000000000000aaaffebaaa9fea9f0000000000000000d557fe395507e55a00000000000000006aa7ff1caac8eaaa00000000000000005557ff9d54f1153a00000000000000006aabffccaa6e2a7200000000000000005553fff0157e557400000000000000002aa9ffffeabcaaec00000000000000003154ffffe53d54e40000000000000000122afffff2bcaac8000000000000000014547ffff57555d800000000000000000aaa3ffffa7ea9d0000000000000000009110ffff96653900000000000000000062287fffca6aba00000000000000000045541fffed7534000000000000000000288a87ffecb2740000000000000000001151407e1939780000000000000000000a2228001a9ab000000000000000000004445500795ce0000000000000000000068aaaa7329cc000000000000000000001111153f54d8000000000000000000000a222abeaab0000000000000000000000445555e55600000000000000000000003888a9caa800000000000000000000000d1554d57000000000000000000000000322222bc0000000000000000000000000e4455e000000000000000000000000001fabf000000000000000000000000000007e000000000000000',
    },
    zcash: {
        name: 'zcash',
        hex: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f80000000000000000000000000000ffffc000000000000000000000000003fffff80000000000000000000000000ffffffe0000000000000000000000003fffffff800000000000000000000000ffffffffc00000000000000000000001fffffffff00000000000000000000003ffe001fff80000000000000000000007ff00003ffc000000000000000000000ffc00000ffe000000000000000000001ff803f003ff000000000000000000003fe003f001ff000000000000000000007fc003f000ff800000000000000000007f8003f0007fc0000000000000000000ff0003f0003fc0000000000000000000fe01fffff01fe0000000000000000001fe01fffff00ff0000000000000000001fc01fffff007f0000000000000000003f881fffff007f0000000000000000003f801fffff003f8000000000000000003f201ffffe003f801f800e001f80e01c7f401ffffe003f807fe00f007fe0e01c7f008003fc001fc0fff01f00fff0e01c7f010007f8001fc1e0f01f00f070e01c7e02000ff8001fc1e0703f81e078e01cfe04001ff0001fc1c0703b81e078e01cfe88083fe0001fc3c0783b80f000e01cfe10103fc0000fc3c00079c0fc00e01cfe20207fc0000fc3c00071c07f00fffcfe4040ff80000fc3c00071e03fc0fffcfe8880ff00001fc3c000f0e007e0fffcfe1101fe00001fc3c000e0e001f0e01cfe2223fe00001fc3c078fff00078e01c7e4407fc00001fc1c071fff1c078e01c7f0887f800001fc1e071c071c078e01c7f510ff777003f81e0f3c079e070e01c7f2a1fffff003f80ffe38038fff0e01c3f943fffff003f807fc380387fe0e01c3faabfffff007f001f87803c1f80e01c1fd53fffff007f0000000000000000001fcabfffff00ff0000000000000000000fe53fffff01fe0000000000000000000ff2803f0081fe00000000000000000007f9553f1003fc00000000000000000003fcaa3f2007fc00000000000000000003fe443f400ff800000000000000000001ff2abf003ff000000000000000000000ffc100007fe0000000000000000000007ff2a221ffc0000000000000000000003ffc000fff80000000000000000000001fffe1ffff00000000000000000000000ffffffffe000000000000000000000003fffffff8000000000000000000000001fffffff00000000000000000000000003fffffc00000000000000000000000000fffff0000000000000000000000000000fff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    dash: {
        name: 'dash',
        hex: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007fffffc03fffff00ffffff8fe000fe007fffffe07fffff81ffffff8fe000fe00ffffffe1ffffff83ffffff1fc001fc00ffffffe1ffffff87ffffff1fc001fc00ffffffe3ffffff8fffffff1fc001fc0000000fe3f8003f8fe000003f8003f80000001fc7f8003f8fe000003f8003f80fff001fc7f0007f1fffffe03ffffff81ffe001fc7f0007f1ffffff07ffffff81ffe003f87f1ffff1ffffff87ffffff01ffe003f8fe1fffe0ffffff87ffffff03ffe003f8fe1fffe07fffff8fffffff00000007f0fe3fffe000003f8fe000fe00000007f1fc3fffc000007f8fe000fe007ffffff1fc001fc7ffffff1fc001fe00ffffffe1fc001fc7ffffff1fc001fc00ffffffe3f8003f8ffffffe1fc001fc00ffffffc3f8003f8ffffffc3fc003fc01ffffff03f8003f8ffffff83f8003f800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    bitcoin_cash: {
        name: 'bitcoin_cash',
        hex: '00003ffff00ffffffffff00ffffc000000003ffff01ffffffffff80ffffc000000003fffe03ffffffffffc07fffc000000003fffc03ffff1fffffc03fffc000000003fffc07ffe30fffffe03fffc000000003fff80fffe38ffffff01fffc000000003fff80fffe38ffffff01fffc000000003fff01fffe3803ffff80fffc000000003fff03ffff0000ffffc0fffc000000003fff03ffff0000ffffc0fffc000000003ffe03fff000007fffc07ffc000000003ffe07ffc003c07fffe07ffc000000003ffe07ffc00fe03fffe07ffc000000003ffc07ffc00ff07fffe03ffc000000003ffc0ffffe0ff07ffff03ffc000000003ffc0ffffe07e07ffff03ffc000000003ffc0ffffe07c0fffff03ffc000000003ffc0ffffe07801ffff03ffc000000003ffc0fffff00000ffff03ffc000000003ffc0fffff000007fff03ffc000000003ffc0fffff003c07fff03ffc000000003ffc0fffff03fe03fff03ffc000000003ffc0fffff83ff03fff03ffc000000003ffc0fffff81ff03fff03ffc000000003ffc0fffff81fe03fff03ffc000000003ffc0fffff81fe07fff03ffc000000003ffc0fffffc1f807fff03ffc000000003ffc07ffffc0e00fffe03ffc000000003ffe07ffffc0001fffe07ffc000000003ffe07ffffc0007fffe07ffc000000003ffe03fffe0003ffffc07ffc000000003fff03fffe0023ffffc0fffc000000003fff03fffe0061ffffc0fffc000000003fff01fffe3c71ffff80fffc000000003fff80fffffc71ffff01fffc000000003fff80fffffc71ffff01fffc000000003fffc07ffffe3ffffe03fffc000000003fffc07ffffffffffc03fffc000000003fffe03ffffffffffc07fffc000000003fffe01ffffffffff807fffc000000003ffff00ffffffffff00ffffc000000003ffff807ffffffffe01ffffc000000003ffffc03ffffffffc03ffffc000000003ffffe00ffffffff007ffffc000000003fffff007ffffffe00fffffc000000003fffff801ffffff801fffffc000000003fffffc007ffffe003fffffc000000003fffffe000ffff0007fffffc000000003ffffff0000ff0000ffffffc00000000000000000000000000000000000000000000000000000000000000000000000000038000001c000000000e00000000001fe39800001c001fe0000e00000000001ff198000018003fc0000e00000000001c7818000000007840000e00000000001c3b9f1f3f1dfc700fc7eff0000000001c739f3f7f9dfe700fe7eff0000000001ff39878739dcee000ee0e78000000001ffb9870e1ddc6e0036f0e38000000001c3b9870e1ddc6700fe7ce38000000001c3b9870e1ddc6701c61ee38000000001c3b987071ddc6781c606e38000000001ffb9fff7f9dc63fffefee38000000001ff39fbf3f1dc61fefefee380000',
    },
    bitcoin_gold: {
        name: 'bitcoin_gold',
        hex: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fc000000000000000000000000000000ff80000000000000000000000000000007e00000000000000000000000000000fcf80000000000000000000000000000ff1e0000000000000000000000000000ffe78000000000000000000000000000fff9c000000000000000000000000000fffce000000000000000000000000000ffff7000000000000000000000000000ffffb800000000000000000000000000ffffdc00000000000000000000000000ffffee00000000000000000000000000c7fff700000000000000000000000000fdfffb00000000000000000000000000ff7ffb80000000000000000000000000f7bffd80000000000000000000000000f1dffec0000000000000000000000000f0fffec0000000000000000000000000fe37ffe0000000000000000000000000ffbbff60000000000000000000000000ffddff60000000000000000000000000ffcdfff00000000000000000000000001fceffb00000000000000000000000000fc6ffb3f1ffe7e1f8770e1f81f8f1fc0fc3ffb3f9ffeff3fc778e3fc7fcf1ff0fc37ff3f9fffff7fe77ce7fe7fef1ff7fc37ff3b9c71e3f0f77cef0cf1ef1e7ff837fd3f9c73c0e0f77eee00e0ef1e3ffc37fd3f9c73c0e0777fee7fe0ff1e3ffe37fd3fdc73c0e07777ee7ee0ff1e3fff37fd39dc73c0e0f777ee7ee0ef1e307f37ff39dc71e3f0f773ef0ef1ef1e707f37ff3fdc71ff7fe771e7fe7feffff07f3ffb3fdc70ff3fc771e7fc7fcffff07f6ffb3f9c707e1f8770e1f01f0fffc1ffeffb0000000000000000000000000ffedfff0000000000000000000000000fffdff60000000000000000000000000ffbbff60000000000000000000000000fe77ffe0000000000000000000000000f0effec0000000000000000000000000f1dfffc0000000000000000000000000e7bffd80000000000000000000000000ff7ffb80000000000000000000000000f9fffb0000000000000000000000000087fff600000000000000000000000000ffffee00000000000000000000000000ffffdc00000000000000000000000000ffffb800000000000000000000000000ffff7000000000000000000000000000fffce000000000000000000000000000fffbc000000000000000000000000000ffe78000000000000000000000000000ff1e0000000000000000000000000000f878000000000000000000000000000003e00000000000000000000000000000ff800000000000000000000000000000fc000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    vertcoin: {
        name: 'vertcoin',
        hex: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003ff00000000000000000000000000003ffff000000000000000000000000001fffffc00000000000000000000000003ffffff0000000000000000000000000fffffff8000000000000000000000003fffffffe000000000000000000000007ffffffff00000000000000000000000fffffffff80000000000000000000001fffffffff00000000000000000000003fffffffff00000000000000000000007ffffffffe00000000000000000000007ffffffffc0000000000000000000000fffffffffc0000000000000000000001fffffffff80000000000000000000001fffffffff00000000000000000000003ffffffffe00200000000000000000003ffffffffe00200000000000000000007ffffffffc00700000000000000000007ffffffff800f00000000000000000007ffffffff801f80000000000006000007ffffffff001f8000000000000600000ffffffffe003f8000004000000000000ffffffffe007f8000004000000000000ffffffffc007f81e049f83c1e0613c00ffffffff800ff83f05df8fc3f0e1fe00fe000fff001ffc61860408061821c200fc0007ff003ffc40840418040c218200f80003fe003ffc40840410040c218300ffe001fc007ffcff840410040c218300fff001fc00fff8c0040410040c218300fff800f800fff840040418040c218300fff8007001fff8600404180608218300fffc003003fff83084040c03182183007ffe002007fff81f840787e1f02183007fff000007fff80000000000000000007fff00000ffff00000000000000000003fff80001ffff00000000000000000003fffc0001fffe00000000000000000003fffe0003fffe00000000000000000001fffe0007fffc00000000000000000000ffff0007fffc00000000000000000000ffff800ffff8000000000000000000007fffc01ffff8000000000000000000003fffc03ffff0000000000000000000003fffe03fffe0000000000000000000001ffff07fffc0000000000000000000000ffff8ffff800000000000000000000007fffdffff000000000000000000000001fffffffe000000000000000000000000fffffff80000000000000000000000003fffffe00000000000000000000000000fffff8000000000000000000000000001fffe00000000000000000000000000001fe0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    namecoin: {
        name: 'namecoin',
        hex: '00000000000000000000000000000000000000000000000ff00000000000000000000000000000ffff0000000000000000000000000003ffffc00000000000000000000000000ffffff00000000000000000000000001ffffff80000000000000000000000007ffffffe000000000000000000000000ffffffff000000000000000000000001ffffffff800000000000000000000003ffffffffc00000000000000000000007ffffffffe00000000000000000000007ffffffffe0000000000000000000000fff87fff1f0000000000000000000000fff07ffc3f0000000000000000000001ffe03ffc3f8000000000000000000001ffe01ff83f8000000000000000000003ffe11ff87fc000000000000000000003ffc18ff87fc000000000000000000003ffc187f07fc000000000000000000007ffc1c3f07fe000000000000000000007ffc0e3f0ffe000000000000000000007ff8061f0ffe000000000000000000007ff8070e0ffe000000000000000000007ff843860ffe000000000000000000007ff061c61ffe000000000000000000007ff071c21ffe000000000000000000007ff0f8e01ffe000000000000000000007ff0f8701ffe000000000000000000007fe0fc383ffe000000000000000000003fe0fe383ffc000000000000000000003fe1fe183ffc000000000000000000003fe1ff087ffc000000000000000000003fc1ff807ffc000000000000000000001fc1ffc07ff8000000000000000000001fc3ffc0fff8000000000000000000000f87ffe1fff0000000000000000000000fffffffffe00000000000000000000007ffffffffe00000000000000000000003ffffffffc00000000000000000000001ffffffff800000000000000000000000ffffffff0000000000000000000000007ffffffe0000000000000000000000003ffffffc0000000000000000000000001ffffff800000000000000000000000007ffffe000000000000000000000000001ffff80000000000000000000000000003ffc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000001c0000000000000000000000000000001800000000000000000000000000000000000000000000000fc1fcfff0f87e7e39fc0000000000001fe3f8fff1fcfefe39fc0000000000001ce739ce738de1e7399c0000000000001cee39ce731dc1c7738c00000000000018ee39ce77f9c1c7739c00000000000038ee31ce77f1c187739c00000000000039ce738e7701c18e731c00000000000039cff39c63f1f9fe671c00000000000039c7f39ce3f1f9fce73800000000000031c3e39ce1f07870e73800000000000000000000000000000000000000',
    },
    monacoin: {
        name: 'monacoin',
        hex: '00000000002000000000040000000000000000000030000000000c0000000000000000000030000000000c0000000000000000000038000000001c000000000000000000003c000000003c000000000000000000007c000000003e000000000000000000007e000000007e000000000000000000007f00000000fe000000000000000000007f00000000fe00000000000000000000ff80000001ff00000000000000000000ff80000001ff00000000000000000000ffc0000003ff00000000000000000000ffe0000007ff00000000000000000001ffe0000007ff80000000000000000001fff07ffe0fff80000000000000000001ffffffffffff80000000000000000001ffffffffffff80000000000000000001ffffffffffff80000000000000000003ffffffffffffc0000000000000000003ffffffffffffc0000000000000000003ffffffffffffc0000000000000000003ffffffffffffc0000000000000000007ffffffffffffe000000000000000000ffffffffffffff000000000000000001ffffffffffffff800000000000000003ffffffffffffffc00000000000000007fff1ffffff8fffe00000000000000007ffe3ffffffc7ffe0000000000000000fffc7ffffffe3fff0000000000000001fff8ffffffff1fff8000000000000001fff1ffffffff8fff8000000000000003fff3fe7ffe7fc7ffc000000000000003ffe7fe3ffc7fe7ffc000000000000003fffffe3ffc7fffffc000000000000007ffffff0000ffffffe000000000000007ffffff0001ffffffe000000000000007ffffff8001ffffffe000000000000007ffffffcfe3ffffffe000000000000007ffffffc7e3ffffffe000000000000007ffffffe3c7ffffffe000000000000007ffffffe3cfffffffe000000000000007fffffff18fffffffe000000000000007fffffff91fffffffe000000000000003fffffff81fffffffc000000000000003fffffffc3fffffffc000000000000003fffffffc3fffffffc000000000000001fffffffe7fffffff8000000000000001fffffffeffffffff8000000000000000ffffffffffffffff00000000000000007fffffffffffffff00000000000000007ffffffffffffffe00000000000000003ffffffffffffffc00000000000000001ffffffffffffff800000000000000000ffffffffffffff0000000000000000007ffffffffffffe0000000000000000001ffffffffffff80000000000000000000ffffffffffff000000000000000000003ffffffffffc000000000000000000000ffffffffff00000000000000000000003ffffffffc00000000000000000000000ffffffff0000000000000000000000000ffffff000000000000000000000000000ffff0000000000000000000000000000000000000000000000',
    },
    doge: {
        name: 'doge',
        hex: '000000000000023c0000000000000000000000000000027c0000000000000000000000000000023a0000000000000000000000000000031a0000000000000000000000000000023e0000000000000000000000000000020d00000000000000000000000000000204800000000000000000000000000002168000000000000000000000000000020b40000000000000000000000000000405800000000000000000000000000004c8d000000000000000000000000000057f25580000000000000000000000001afbcfe200000000000000001600000075757ffd000000000000000021800001aaefaffe400000000000000041e0001d5557f7ff2000000000000000027c01ceaabffaffd000000000000000411a0e755577ff7fe8000000000000004288d8aa889befffe80000000000000041552555415fdffdf40000000000000042a286aaba15ff1bfa00000000000000401541555c45f86ff5200000000000004002808aae2a6cf6fd200000000000004010815ddd9559177e40000000000000200080abbb83ac17ff40000000000000200045455f44f217ffc010000000000020062aeafee0ff8fffe0f0000000000010050555fdfc7ffffff1c00000000000100302aaabfbbbffffff0000000000001000c55557ffdfffbffc00000000000008002aaaafeebfeffffc000000000000040013d558e1fffe07fcfc000000000004202baab20bbffc07ffa000000000000244475567c17ff003ff000000000000020a4eaac8e4bfe001fefe000000000001441dd580e0ffc001ff80000000000002a0bbaa80ecffc000ff7e0000000000037577778097ffc0007f8700000000000286eeebe06fffc0007ff8000000000003015ddddfddffe4003f8c000000000002823bbeaaabffe2003f800000000000036374ff554dfffc007fc000000000000282ebffeabffffc007fc0000000000003655fffffffffd6007fc0000000000002a27ffffffffbfe007fc0000000000002547fffffffcfd6003fc0000000000001aaffffffffcdfa087fc000000000000111ffffffffd576107fc00000000000012a7fffffffeaba00ffc0000000000000557fffffffe55c00ffc0000000000000e8ffffffffeaba01ffc0000000000000d57fffffffffc401ffc0000000000000aa3ffffffff00083ffe0000000000000d43fffffffe000d7ff60000000000000aa7ffffffff00bafff70000000000000943ffffffff0157fff78000000000000aa3ffffffffc2affff7c000000000000b45ffffffffffffffd78000000000000aa9ffffffffffefffafc000000000000150ffffffffffffffd7c000000000000aaa7fffffffffffff3fe0000000000007543fffffffffffff77f0000000000006a89fffffffffffffaff0000000000005140fffffffffffff5ff000000',
    },
    digibyte: {
        name: 'digibyte',
        hex: '0000000000000003c000000000000000000000000000007ffe0000000000000000000000000001ffff8000000000000000000000000007ffffe00000000000000000000000001fc003f80000000000000000000000003f0000fc0000000000000000000000007c00003e000000000000000000000000f800001f000000000000000000000001f000000f800000000000000000000003e0000007c00000000000000000000003c0000003c000000000000000000000078000cc01e0000000000000000000000f00009800f0000000000000000000000f01fffc00f0000000000000000000000e01ffff8070000000000000000000001e03ffffc078000000000000000000001c00000fe038000000000000000000001c000003e038000000000000000000001c000003e038000000000000000000003c003e03e03c000000000000000000003c003c03e03c000000000000000000003c003c03c03c000000000000000000003c007807c03c000000000000000000003c007807803c000000000000000000003c00f80f003c000000000000000000001c00f01f0038000000000000000000001c00f03e0038000000000000000000001c01f1f80038000000000000000000001e01fff00078000000000000000000000e03ff800070000000000000000000000f03fc0000f0000000000000000000000700cc0000e0000000000000000000000780000001e00000000000000000000003c0000003c00000000000000000000003e0000007c00000000000000000000001f000000f800000000000000000000000f800001f0000000000000000000000007c00003e0000000000000000000000003f0000fc0000000000000000000000001fe007f800000000000000000000000007ffffe000000000000000000000000001ffff80000000000000000000000000003ffc0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000180060000000000000000000000001fc3000c7f000000000000000000000019e0000063000600000000000000000038e00600c3000e06000000000000000030c63f98c6719f1f800000000000000030c66318fc330c31800000000000000061cc63318c3618730000000000000000618cc6318c34187f00000000000000006318c6330c3c30600000000000000000fe18ee63983838600000000000000000fc18ec63f0303c7c000000000000000000000c00006000000000000000000000000018000060000000000000000000000003f00003c0000000000000000000000001c0000300000000000000',
    },
    decred: {
        name: 'decred',
        hex: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001fffc0007ffffe0000000000000000000fffe0003fffffc0000000000000000007fff0001ffffff0000000000000000003fffc000ffffff8000000000000000001fffe0007fffffc0000000000000000007fff0001ffffff0000000000000000003fff8000ffffff0000000000000000001fffc0007fffff8000000000000000000fffe0003fffffc0000000000000000007fff8001fffffe0000000000000000003fffc000007ffe0000000000000000003fffe000001fff000000000000000000fffff000000fff000000000000000001fffff8000007ff800000000000000003fffffc000003ff80000000000000000ffffffe000001ff80000000000000001fffffff800001ffc0000000000000001fffffffc00000ffc0000000000000003fffffffe00000ffc0000000000000007ffffffff00000ffc0000000000000007ffe0000000000ffc000000000000000fff80000000000ffc000000000000000fff00000000000ffc000000000000001ffe00000000000ffc000000000000001ffc00000000000ffc000000000000001ff800000000001ffc000000000000003ff800000000001ff8000000000000003ff000000000003ff8000000000000003ff000000000007ff8000000000000003ff00000000000fff0000000000000003ff00000000001fff0000000000000003ff00000000007ffe0000000000000003ff00000ffffffffe0000000000000003ff000007fffffffc0000000000000003ff000003fffffff80000000000000003ff800001fffffff80000000000000001ff8000007ffffff00000000000000001ffc000003fffffc00000000000000001ffe000001fffff800000000000000000fff000000fffff000000000000000000fff8000007fffc0000000000000000007ffe000003fffc0000000000000000007fffff8001fffe0000000000000000003fffffc0007fff0000000000000000001fffffe0003fff8000000000000000000ffffff0001fffc000000000000000000ffffff8000fffe0000000000000000003fffffe0007fff8000000000000000001ffffff0003fffc000000000000000000ffffff8000fffe0000000000000000003fffffc0007fff00000000000000000007ffffe0003fff80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    multibit: {
        name: 'multibit',
        hex: '0ffc07f8e01c7ffe07ff0000000000001ff80ff9e03c7fff83ff8000000000003ff03ff9e03c7fffc0ffc000000000007fe07ff9e03c7fffe0ffc000000000007fc0fff9e03c7ffff07fe00000000000ffc1fff9e03c7ffff83ff00000000000ff83ff81e03c7ffffc1ff00000000000ff07e001e03c17fffe0ff80000000000fe0f0001e03c03ffff0ffc0000000000fe1f0001e03c00ffff87fc0000000000fc1f1fffffff803fff83fe0000000000f83f1ffffffffc0fffc3fe0000000000f87f1fffffffff07ffe1fe0000000000f07f1fffffffffc3ffe1ff0000000000f0ff00fff87fffe3fff0ff0000000000e0ff003fe001fff1fff0ff8000000000e0ff801fe0007ff1fff87f8000000000e1fffe1fe0003ff9fff87f8000000000c3ffff1fe0f81ff8fff87f8000000000c3ffff1fe1fc0ff8fffc3fc000000000c3ffff1fe1fe0ff8fffc3fc00000000087ffff1fe1fe0ff8fffc1fc00000000087ffff1fe1ff0ff8fffe1fc00000000087ffff1fe1fe0ff8fffe1fe00000000087ffff1fe0fc0ff1fffe1fe0000000008fffff1fe0f01ff1fffe1fe0000000000fffff1fe0003fe3fffe1fe0000000000fffff1fe0007fc3ffff0fe0000000000fffff1fe001ff87ffff0fe0000000000fffff1ffffffe07ffff0fe0000000000fffff1ffffffe03ffff0fe0000000000fffff1fffffffe0ffff0fe0000000000fffff1ffffffff87fff0fe0000000000fffff1e3f8c03fc7fff0fe0000000000fffff1e3f0c00fe3fff0fe0000000000fffff1e3f8c007f3fff0fe0000000000fffff1e3f8c003f1fff0fe0000000000fffff1e3f8c7c3f1fff0fe0000000000fffff1e3f8c7e1f9ffe1fe00000000087ffff1e000c7e1f9ffe1fe00000000087ffff1e000c7e1f9ffe1fe00000000087ffff1e000c7e1f9ffe1fc00000000087ffff1e1f0c7e1f9ffe1fc000000000c3ffff1e3f8c7e1f1ffc3fc000000000c3ffff1e3f8c7e1f1ffc3fc000000000c3ffff1e3f8c7c3f1ff83fc000000000e1ffe01e3f8c003f3ff87f8000000000e1ffc01e3f08007e3ff07f8000000000e0ffc03e3f0801fc7ff07f8000000000f0ff8ffffffffffc7ff0ff0000000000f0ff8ffffffffff0ffe0ff0000000000f87f8fffffffffe1ffe1ff0000000000f83f8fffffffff83ffc3fe0000000000fc3f8fffffffe007ff83fe0000000000fe1f8001e03c001fff87fc0000000000fe0f8001e03c007fff07fc0000000000ff07c001e03c07fffe0ff80000000000ff83fff9e03c7ffffc1ff80000000000ff83fff9e03c7ffff83ff000000000007fc1fff9e03c7ffff03fe000000000007fe07ff9e03c7fffe07fe000000000003ff03ff9e03c7fffc0ffc000000000001ff81ff9e03c7fff81ff8000000000000ffc0ff9e03c7ffe03ff000000000000',
    },
    reddit: {
        name: 'reddit',
        hex: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c000000000000000000000000000f80fe000000000000000000000000000ff9c7000000000000000000000000001cff8300000000000000000000000000180f830000000000000000000000000018038300000000000000000000000000380183000000000000000000000000003001cf000000000000000000000000003000fe0000000000000000000000000070007c000000000000000000000000006000000000000000000000000000000060000000000000000000000000000003f00000000000000000000000000000ffffc000000000000000000000000007fffff800000000000000000000001c1fc000fe0e000000000000000000007ffc00000fbf80000000000000000000fff0000003ffc0000000000000000001c3c0000000f0e0000000000000000001878000000078600000000000000000018e000000001c600000000000000000018c000000000c600000000000000000019c01f001e006600000000000000000019803f803f00760000000000000000001f003f807f803e0000000000000000000f003f807f803c00000000000000000007003f807f803800000000000000000007003f803f001800000000000000000007001f001f0018000000000000000000070000000000380000000000000000000700000000003800000000000000000003000000000030000000000000000000030000000000300000000000000000000180000000007000000000000000000001c00c000c00e000000000000000000000e00f003c00c0000000000000000000007007fff803c0000000000000000000007801ffe00780000000000000000000001c001e000e00000000000000000000000f0000003c000000000000000000000007e00001f8000000000000000000000001fc000fe00000000000000000000000003fffff0000000000000000000000000007fff8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    hacker: {
        name: 'hacker',
        hex: '00000000000000000000000000000000000000007ffffffffffffffe00000000000000004000040000200002000000000000000040000403c020000200000000000000004000041ff820000200000000000000004000043ffc20000200000000000000004000047ffe20000200000000000000004000047ffe2000020000000000000000400004ffff2000020000000000000000400004ffff2000020000000000000000400004ffff2000020000000000000000400004ffff2000020000000000000000400004ffff2000020000000000000000400004ffff2000020000000000000000400004ffff20000200000000000000004000047ffe20000200000000000000004000047ffe20000200000000000000004000043ffc20000200000000000000004000040ff0200002000000000000000040000403c02000020000000000000000400004000020000200000000000000007ffffffffffffffe000000000000000040000400002000020000000000000000400004000020000200000000000000004000040000207f020000000000000000400004000021ffc20000000000000000400004000023ffe20000000000000000400004000023fff20000000000000000400004000027fff20000000000000000400004000027fff2000000000000000040000400002ffffa000000000000000040000400002ffffa000000000000000040000400002ffffa000000000000000040000400002ffffa0000000000000000400004000027fff20000000000000000400004000027fff20000000000000000400004000023fff20000000000000000400004000023ffe20000000000000000400004000021ffc200000000000000004000040000207f02000000000000000040000400002000020000000000000000400004000020000200000000000000007ffffffffffffffe00000000000000004000040000200002000000000000000040780403c0201e02000000000000000041ff040ff020ff82000000000000000043ff843ffc21ffc2000000000000000047ffc47ffe23ffe200000000000000004fffe47ffe27fff200000000000000004fffe4ffff27fff200000000000000005fffe4ffff27fffa00000000000000005ffff4ffff2ffffa00000000000000005ffff4ffff2ffffa00000000000000005ffff4ffff2ffffa00000000000000005ffff4ffff2ffffa00000000000000004fffe4ffff27fff200000000000000004fffe47ffe27fff2000000000000000047ffc47ffe23ffe2000000000000000043ff843ffc21ffc2000000000000000041ff041ff820ff820000000000000000407c0403c0203e020000000000000000400004000020000200000000000000007ffffffffffffffe0000000000000000000000000000000000000000',
    },
    polis: {
        name: 'polis',
        hex: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e000000000007fe00000000e00070001c000000000007ff00000000e0007000180000080000070f00000000e00070000000000c0000070780000000e00070000000001c000007038fc733f8e1f873be3c00003e00000707bfe7f7fce3fc73ff3c00003f00000707bcf7f71ee79e73ef3c00007f000007ff3877871ee70e7387bc00007f800007ff01f7803eefff7387bc0000ff800007fe1ff783feefff7387bc0000ffc00007003e7787deeffe7387bc0001ffc000070078778e1eef007387bc0003f7e000070070f78e1ee70e7387bc0003f3f000070079f78f3ee7fe7387bc0007e3f00007003ff787fee3fc7387bc0007c1f80007001e7783cee1f87387bc000fc0f8000000000000000000000000000f80fc000000000000000000000000001f807e000000000000000000000000003f007e0007fe0003ce000000000000003f003f0007ff0003ce000000000000007e001f00070f0003c0000000000000007c001f8007078003c000000000000000fc000f8007038fe3ce3f800000000001f8000fc007079ff3ce7fc00000000001f80007e00707befbcef1c00000000003f00007e007ff387bcef1c00000000003f00003f007ff783bcefc000000000007e00001f007fe783bce7f800000000007c00001f80700783bce1fc0000000000fc00000f80700783bce03e0000000001f83fffffc0700383bcee0e0000000001f87fffffe07003cfbcef9e0000000003f07fffffe07001ff3ce7fc0000000003e0fffffff07000fe3ce3f80000000007e0fffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
    carlos: {
        name: 'carlos',
        hex: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003c0000000000000000000000000000007f80000007f000000000000000000000ffc00000fffc00000000000000000000fee00000fffc00000000000000000001fe300380fffa00000000000000000000f8180f807ff800000000000000000003ff0806f87ff000000000000000000007f88002807fd000000000000000000007ffc4000070300000000000000000000f4fe0000180000000000000000000000e0fe0000000000000000000000000001e7ff0000000000000000000000000001e7ff0000000000000000000000000001c7bf0000000000000000000000000001c09f0000000000000000000000000001d05f0000000000000000000000000001c01f1800000000000000000000000001c01e1800000000000000000000000000e01e3800000000000000000000000000cffc300000000000000000000000000047fc000000000000000000000000000007f400000000000000000000000000000fe000000000000000000000000000000fc800000000000000000000000000000fc800000000000000000000000000000781e0000000000000000000000000000007e000000000000000000000000000000fe000000000000000000000000000003fc00000000000000000000000000000ff800000000000000000000000000008ff0000000000000000000000000000107e0000000000000000000000000000003e0000000000000000000000000000007c000000000000000000000000000000fc000000000000000000000000000001f8000000000000000000000000000003f0000000000000000000000000000183f0000000000000000000000000000103f0000000000000000000000000000407f000000000000000000000000000040ee000000000000000000000000000040e00000000000000000000000000000c1c60000000000000000000000000000c39c0000000000000000000000000000e73c0000000000000000000000000000e73c0000000000000000000000000000e6780000000000000000000000000000ee780000000000000000000000000000ec780000000000000000000000000001fc780000000000000000000000000003f8700000000000000000000000000003f8700000000000000000000000000002f8700000000000000000000000000003f8700000000000000000000000000001f0200000000000000000000000000001f0000000000000000000000000000001d0000000000000000000000000000001f0000000000000000000',
    },
    xrc: {
        name: 'xrc',
        hex: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fc000000000000000000000000000003ff00000000000000000000000000000fff80000000000000000000000000001fff80000000000000000000000000007f8fc038000000000000000000000000fe07c0fe000000000000000000000001fc03c3ff800000000000000000000001f803cfffc00000000000000000000003f003ff83c00000000000000000000003e007fe01e00000000000000000000007c007fc00f0000000000000000000000f800ff800f0000000000000000000000f801ff080e0000000000000000000000f001ff3c3e0000000000000000000001f003fffffe0000000000000000000001f043fffffc0000000000000000000007f0e7fffff8000000000000000000000ff1fffffff0000000000000000000003fffffffffe0000000000000000000007fffffffffe000000000000000000000fffffffffff000000000000000000001fffffffffff800000000000000000001fffffffffffc00000000000000000003f83fffe0fffe00000000000000000003f00fffc03fff00000000000000000007e007ff801fff00000000000000000007c703ff180fff8000000000000000000fcf83ff3e0fff8000000000000000000f9cc1fe6307ffc000000000000000000f9861fec107ffc000000000000000001f9861fec107ffc000000000000000001f98c1fe6307ffc000000000000000001f8fc3fe7e0fffe000000000000000001fc783073c0fffe000000000000000001fe00603001fffe000000000000000001ff00e03803fffe000000000000000001ff81f03e0ffffe000000000000000001fe7ff87ff3fffe000000000000000000fc0ffcffc1fffe000000000000000000fcc3ffff18fffc000000000000000000fcf87fc07cfffc0000000000000000007e78000439fff80000000000000000007f223c7c91fff80000000000000000003f0e793dc3fff00000000000000000001fff3399fffff00000000000000000001fff87c3ffffe00000000000000000000fffffffffffc000000000000000000007ffffffffff8000000000000000000001ffffffffff0000000000000000000000fffffffffc00000000000000000000003ffffffff0000000000000000000000007ffffff800000000000000000000000003ffff80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    },
});
const getTouchData = () => ({
    'wallpaper-1': { name: 'wallpaper-1', hex: '77616c6c70617065722d312e706e67' },
    'wallpaper-2': { name: 'wallpaper-2', hex: '77616c6c70617065722d322e706e67' },
    'wallpaper-3': { name: 'wallpaper-3', hex: '77616c6c70617065722d332e706e67' },
    'wallpaper-4': { name: 'wallpaper-4', hex: '77616c6c70617065722d342e706e67' },
});
const getProData = () => ({
    'wallpaper-1': { name: 'wallpaper-1', hex: '77616c6c70617065722d312e6a7067' },
    'wallpaper-2': { name: 'wallpaper-2', hex: '77616c6c70617065722d322e6a7067' },
    'wallpaper-3': { name: 'wallpaper-3', hex: '77616c6c70617065722d332e6a7067' },
    'wallpaper-4': { name: 'wallpaper-4', hex: '77616c6c70617065722d342e6a7067' },
    'wallpaper-5': { name: 'wallpaper-5', hex: '77616c6c70617065722d352e6a7067' },
    'wallpaper-6': { name: 'wallpaper-6', hex: '77616c6c70617065722d362e6a7067' },
    'wallpaper-7': { name: 'wallpaper-7', hex: '77616c6c70617065722d372e6a7067' },
});
const getHomeScreenHex = (deviceType, name) => {
    var _a, _b;
    let data;
    switch (deviceType) {
        case 'classic':
        case 'classic1s':
        case 'mini':
            data = getT1Data();
            break;
        case 'touch':
            data = getTouchData();
            break;
        case 'pro':
            data = getProData();
            break;
        default:
            data = {};
    }
    return (_b = (_a = data[name]) === null || _a === void 0 ? void 0 : _a.hex) !== null && _b !== void 0 ? _b : '';
};
const getHomeScreenDefaultList = (features) => {
    let data;
    const deviceType = getDeviceType(features);
    const deviceVersion = getDeviceFirmwareVersion(features).join('.');
    switch (deviceType) {
        case 'classic':
        case 'classic1s':
        case 'mini':
            data = getT1Data();
            break;
        case 'touch':
            data = getTouchData();
            break;
        case 'pro':
            if (semver__default["default"].gte(deviceVersion, '4.10.0')) {
                data = getProData();
            }
            else {
                data = Object.keys(getProData())
                    .slice(0, 4)
                    .reduce((obj, key) => {
                    obj[key] = getProData()[key];
                    return obj;
                }, {});
            }
            break;
        default:
            data = {};
    }
    return Object.keys(data);
};
const getHomeScreenSize = ({ deviceType, homeScreenType, thumbnail, }) => {
    const sizes = {
        touch: {
            thumbnail: {
                Nft: { width: 238, height: 238 },
                WallPaper: { width: 144, height: 240 },
            },
            full: { width: 480, height: 800 },
        },
        pro: {
            thumbnail: {
                Nft: { width: 226, height: 226, radius: 40 },
                WallPaper: { width: 144, height: 240, radius: 40 },
            },
            full: { width: 480, height: 800 },
        },
    };
    const deviceConfig = sizes[deviceType];
    if (!deviceConfig)
        return undefined;
    return thumbnail ? deviceConfig.thumbnail[homeScreenType] : deviceConfig.full;
};

const isBleConnect = (env) => env === 'react-native' || env === 'lowlevel';
const wait = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});

const CORE_EVENT = 'CORE_EVENT';
const parseMessage = (messageData) => {
    const { data } = messageData;
    const message = {
        event: data.event,
        type: data.type,
        payload: data.payload,
    };
    if (typeof messageData.id === 'number') {
        message.id = messageData.id;
    }
    if (typeof message.success === 'boolean') {
        message.success = data.success;
    }
    return message;
};
const createErrorMessage = (error) => {
    let payload = { error: error.message, code: error.code };
    if (error instanceof hdShared.HardwareError) {
        payload = { error: error.message, code: error.errorCode };
    }
    return {
        success: false,
        payload,
    };
};

const UI_EVENT = 'UI_EVENT';
const UI_REQUEST$1 = {
    REQUEST_PIN: 'ui-request_pin',
    INVALID_PIN: 'ui-invalid_pin',
    REQUEST_BUTTON: 'ui-button',
    REQUEST_PASSPHRASE: 'ui-request_passphrase',
    REQUEST_PASSPHRASE_ON_DEVICE: 'ui-request_passphrase_on_device',
    CLOSE_UI_WINDOW: 'ui-close_window',
    DEVICE_PROGRESS: 'ui-device_progress',
    BLUETOOTH_PERMISSION: 'ui-bluetooth_permission',
    BLUETOOTH_CHARACTERISTIC_NOTIFY_CHANGE_FAILURE: 'ui-bluetooth_characteristic_notify_change_failure',
    LOCATION_PERMISSION: 'ui-location_permission',
    LOCATION_SERVICE_PERMISSION: 'ui-location_service_permission',
    FIRMWARE_PROGRESS: 'ui-firmware-progress',
    FIRMWARE_TIP: 'ui-firmware-tip',
    PREVIOUS_ADDRESS_RESULT: 'ui-previous_address_result',
};
const createUiMessage = (type, payload) => ({
    event: UI_EVENT,
    type,
    payload,
});

const IFRAME = {
    INIT: 'iframe-init',
    INIT_BRIDGE: 'iframe-init-bridge',
    CALL: 'iframe-call',
    CANCEL: 'iframe-cancel',
};
const createIFrameMessage = (type, payload) => ({
    event: UI_EVENT,
    type,
    payload,
});

const RESPONSE_EVENT = 'RESPONSE_EVENT';
const createResponseMessage = (id, success, payload) => ({
    event: RESPONSE_EVENT,
    type: RESPONSE_EVENT,
    id,
    success,
    payload: success ? payload : hdShared.serializeError(payload),
});

const UI_RESPONSE = {
    RECEIVE_PIN: 'ui-receive_pin',
    RECEIVE_PASSPHRASE: 'ui-receive_passphrase',
};
const createUiResponse = (type, payload) => ({
    event: UI_EVENT,
    type,
    payload,
});

const DEVICE_EVENT = 'DEVICE_EVENT';
const DEVICE = {
    CONNECT: 'device-connect',
    CONNECT_UNACQUIRED: 'device-connect_unacquired',
    DISCONNECT: 'device-disconnect',
    CHANGED: 'device-changed',
    ACQUIRE: 'device-acquire',
    RELEASE: 'device-release',
    ACQUIRED: 'device-acquired',
    RELEASED: 'device-released',
    USED_ELSEWHERE: 'device-used_elsewhere',
    UNREADABLE: 'unreadable-device',
    LOADING: 'device-loading',
    BUTTON: 'button',
    PIN: 'pin',
    PASSPHRASE: 'passphrase',
    PASSPHRASE_ON_DEVICE: 'passphrase_on_device',
    WORD: 'word',
    SUPPORT_FEATURES: 'support_features',
    FEATURES: 'features',
};
const createDeviceMessage = (type, payload) => ({
    event: DEVICE_EVENT,
    type,
    payload,
});

const FIRMWARE_EVENT = 'FIRMWARE_EVENT';
const FIRMWARE = {
    RELEASE_INFO: 'firmware-release-info',
    BLE_RELEASE_INFO: 'ble-firmware-release-info',
};
const createFirmwareMessage = (type, payload) => ({
    event: FIRMWARE_EVENT,
    type,
    payload,
});

const LogBlockEvent = new Set([
    UI_RESPONSE.RECEIVE_PIN,
    UI_RESPONSE.RECEIVE_PASSPHRASE,
]);

const Log$a = getLogger(exports.LoggerNames.DevicePool);
const getDiff = (current, descriptors) => {
    const connected = descriptors.filter(d => current.find(x => x.path === d.path) === undefined);
    const disconnected = current.filter(d => descriptors.find(x => x.path === d.path) === undefined);
    const changedSessions = descriptors.filter(d => {
        const currentDescriptor = current.find(x => x.path === d.path);
        if (currentDescriptor) {
            return currentDescriptor.session !== d.session;
        }
        return false;
    });
    const acquired = changedSessions.filter(d => typeof d.session === 'string');
    const released = changedSessions.filter(d => typeof d.session !== 'string');
    const changedDebugSessions = descriptors.filter(d => {
        const currentDescriptor = current.find(x => x.path === d.path);
        if (currentDescriptor) {
            return currentDescriptor.debugSession !== d.debugSession;
        }
        return false;
    });
    const debugAcquired = changedSessions.filter(d => typeof d.debugSession === 'string');
    const debugReleased = changedSessions.filter(d => typeof d.debugSession !== 'string');
    const didUpdate = connected.length + disconnected.length + changedSessions.length + changedDebugSessions.length >
        0;
    return {
        connected,
        disconnected,
        changedSessions,
        acquired,
        released,
        changedDebugSessions,
        debugAcquired,
        debugReleased,
        didUpdate,
        descriptors,
    };
};
class DevicePool extends events.exports {
    static setConnector(connector) {
        this.connector = connector;
    }
    static getDevices(descriptorList, connectId, initOptions) {
        var _a, descriptorList_1, descriptorList_1_1;
        var _b, e_1, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const devices = {};
            const deviceList = [];
            if (connectId) {
                const device = this.devicesCache[connectId];
                if (device) {
                    const exist = descriptorList.find(d => d.path === device.originalDescriptor.path);
                    if (exist) {
                        device.updateDescriptor(exist, true);
                        devices[connectId] = device;
                        deviceList.push(device);
                        yield this._checkDevicePool(initOptions);
                        return { devices, deviceList };
                    }
                    Log$a.debug('found device in cache, but path is different: ', connectId);
                }
            }
            try {
                for (_a = true, descriptorList_1 = __asyncValues(descriptorList); descriptorList_1_1 = yield descriptorList_1.next(), _b = descriptorList_1_1.done, !_b; _a = true) {
                    _d = descriptorList_1_1.value;
                    _a = false;
                    const descriptor = _d;
                    const device = yield this._createDevice(descriptor, initOptions);
                    if (device.features) {
                        const uuid = getDeviceUUID(device.features);
                        if (this.devicesCache[uuid]) {
                            const cache = this.devicesCache[uuid];
                            cache.updateDescriptor(descriptor, true);
                        }
                        this.devicesCache[uuid] = device;
                        devices[uuid] = device;
                    }
                    deviceList.push(device);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_a && !_b && (_c = descriptorList_1.return)) yield _c.call(descriptorList_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            yield this._checkDevicePool(initOptions);
            return { devices, deviceList };
        });
    }
    static clearDeviceCache(connectId) {
        if (connectId) {
            delete this.devicesCache[connectId];
        }
    }
    static _createDevice(descriptor, initOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let device = this.getDeviceByPath(descriptor.path);
            if (!device) {
                device = Device.fromDescriptor(descriptor);
                device.deviceConnector = this.connector;
                yield device.connect();
                yield device.initialize(initOptions);
                yield device.release();
            }
            return device;
        });
    }
    static _checkDevicePool(initOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._sendConnectMessage(initOptions);
            this._sendDisconnectMessage();
        });
    }
    static _sendConnectMessage(initOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = this.connectedPool.length - 1; i >= 0; i--) {
                const descriptor = this.connectedPool[i];
                const device = yield this._createDevice(descriptor, initOptions);
                Log$a.debug('emit DEVICE.CONNECT: ', device === null || device === void 0 ? void 0 : device.features);
                this.emitter.emit(DEVICE.CONNECT, device);
                this.connectedPool.splice(i, 1);
            }
        });
    }
    static _sendDisconnectMessage() {
        for (let i = this.disconnectPool.length - 1; i >= 0; i--) {
            const descriptor = this.connectedPool[i];
            const device = (descriptor === null || descriptor === void 0 ? void 0 : descriptor.path) ? this.getDeviceByPath(descriptor.path) : null;
            if (device) {
                this.emitter.emit(DEVICE.DISCONNECT, device);
            }
            this.disconnectPool.splice(i, 1);
        }
    }
    static reportDeviceChange(upcoming) {
        const diff = getDiff(this.current || [], upcoming);
        this.upcoming = upcoming;
        this.current = this.upcoming;
        Log$a.debug('device pool -> current: ', this.current);
        Log$a.debug('device pool -> upcomming: ', this.upcoming);
        Log$a.debug('DeviceCache.reportDeviceChange diff: ', diff);
        if (!diff.didUpdate) {
            return;
        }
        diff.connected.forEach(d => {
            const device = this.getDeviceByPath(d.path);
            if (!device) {
                this._addConnectedDeviceToPool(d);
                return;
            }
            Log$a.debug('emit DEVICE.CONNECT: ', device.features);
            this.emitter.emit(DEVICE.CONNECT, device);
        });
        diff.disconnected.forEach(d => {
            this._removeDeviceFromConnectedPool(d.path);
            const device = this.getDeviceByPath(d.path);
            if (!device) {
                this._addDisconnectedDeviceToPool(d);
                return;
            }
            Log$a.debug('emit DEVICE.DISCONNECT: ', device.features);
            this.emitter.emit(DEVICE.DISCONNECT, device);
        });
    }
    static getDeviceByPath(path) {
        return Object.values(this.devicesCache).find(d => d.originalDescriptor.path === path);
    }
    static _addConnectedDeviceToPool(descriptor) {
        const existDescriptorIndex = this.connectedPool.findIndex(d => d.path === descriptor.path);
        if (existDescriptorIndex > -1) {
            this.connectedPool.splice(existDescriptorIndex, 1, descriptor);
            return;
        }
        this.connectedPool.push(descriptor);
    }
    static _removeDeviceFromConnectedPool(path) {
        const index = this.connectedPool.findIndex(d => d.path === path);
        if (index > -1) {
            this.connectedPool.splice(index, 1);
        }
    }
    static _addDisconnectedDeviceToPool(descriptor) {
        const existDescriptorIndex = this.disconnectPool.findIndex(d => d.path === descriptor.path);
        if (existDescriptorIndex > -1) {
            this.disconnectPool.splice(existDescriptorIndex, 1, descriptor);
            return;
        }
        this.disconnectPool.push(descriptor);
    }
}
DevicePool.current = null;
DevicePool.upcoming = [];
DevicePool.connectedPool = [];
DevicePool.disconnectPool = [];
DevicePool.devicesCache = {};
DevicePool.emitter = new events.exports();

const Log$9 = getLogger(exports.LoggerNames.Transport);
const BleLogger = getLogger(exports.LoggerNames.HdBleTransport);
const HttpLogger = getLogger(exports.LoggerNames.HdTransportHttp);
const LowLevelLogger = getLogger(exports.LoggerNames.HdTransportLowLevel);
class TransportManager {
    static load() {
        Log$9.debug('transport manager load');
        this.defaultMessages = DataManager.getProtobufMessages();
        this.currentMessages = this.defaultMessages;
        this.messageVersion = 'latest';
    }
    static configure() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const env = DataManager.getSettings('env');
                Log$9.debug('Initializing transports');
                if (env === 'react-native') {
                    if (!this.reactNativeInit) {
                        yield this.transport.init(BleLogger, DevicePool.emitter);
                        this.reactNativeInit = true;
                    }
                    else {
                        Log$9.debug('React Native Do Not Initializing transports');
                    }
                }
                else if (env === 'lowlevel') {
                    if (!this.plugin) {
                        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.TransportNotConfigured, 'Lowlevel transport mast have plugin');
                    }
                    yield this.transport.init(LowLevelLogger, DevicePool.emitter, this.plugin);
                }
                else {
                    yield this.transport.init(HttpLogger);
                }
                Log$9.debug('Configuring transports');
                yield this.transport.configure(JSON.stringify(this.defaultMessages));
                Log$9.debug('Configuring transports done');
            }
            catch (error) {
                Log$9.debug('Initializing transports error: ', error);
                if (error.code === 'ECONNABORTED') {
                    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BridgeTimeoutError);
                }
            }
        });
    }
    static reconfigure(features) {
        return __awaiter(this, void 0, void 0, function* () {
            Log$9.debug(`Begin reconfiguring transports`);
            const { messageVersion, messages } = getSupportMessageVersion(features);
            if (this.currentMessages === messages || !messages) {
                return;
            }
            Log$9.debug(`Reconfiguring transports version:${messageVersion}`);
            try {
                yield this.transport.configure(JSON.stringify(messages));
                this.currentMessages = messages;
                this.messageVersion = messageVersion;
            }
            catch (error) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.TransportInvalidProtobuf, `Transport_InvalidProtobuf:  ${error.message}`);
            }
        });
    }
    static setTransport(TransportConstructor, plugin) {
        const env = DataManager.getSettings('env');
        if (env === 'react-native') {
            this.transport = new TransportConstructor({ scanTimeout: 3000 });
        }
        else {
            this.transport = new TransportConstructor();
        }
        if (plugin) {
            this.plugin = plugin;
            Log$9.debug('set transport plugin: ', this.plugin);
        }
        Log$9.debug('set transport: ', this.transport.name, this.transport.version, this.transport.configured);
    }
    static getTransport() {
        return this.transport;
    }
    static getDefaultMessages() {
        return this.defaultMessages;
    }
    static getCurrentMessages() {
        return this.currentMessages;
    }
    static getMessageVersion() {
        return this.messageVersion;
    }
}
TransportManager.reactNativeInit = false;
TransportManager.messageVersion = 'latest';
TransportManager.plugin = null;

const assertType = (res, resType) => {
    const splitResTypes = Array.isArray(resType) ? resType : resType.split('|');
    if (!splitResTypes.includes(res.type)) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.ResponseUnexpectTypeError, `assertType: Response of unexpected type: ${res.type}. Should be ${resType}`);
    }
};
const Log$8 = getLogger(exports.LoggerNames.DeviceCommands);
class DeviceCommands {
    constructor(device, mainId) {
        this.device = device;
        this.mainId = mainId;
        this.transport = TransportManager.getTransport();
        this.disposed = false;
    }
    dispose(cancelRequest) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.disposed = true;
            if (cancelRequest && this._cancelableRequest) {
                this._cancelableRequest();
            }
            this._cancelableRequest = undefined;
            yield ((_b = (_a = this.transport).cancel) === null || _b === void 0 ? void 0 : _b.call(_a));
        });
    }
    call(type, msg = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            Log$8.debug('[DeviceCommands] [call] Sending', type);
            try {
                const promise = this.transport.call(this.mainId, type, msg);
                this.callPromise = promise;
                const res = yield promise;
                Log$8.debug('[DeviceCommands] [call] Received', res.type);
                console.log('[DeviceCommands] [call] Received', res.type);
                return res;
            }
            catch (error) {
                Log$8.debug('[DeviceCommands] [call] Received error', error);
                if (error.errorCode === hdShared.HardwareErrorCode.BleDeviceBondError) {
                    return {
                        type: 'BleDeviceBondError',
                        message: {
                            error: error === null || error === void 0 ? void 0 : error.message,
                        },
                    };
                }
                const responseData = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data;
                let responseError = responseData === null || responseData === void 0 ? void 0 : responseData.error;
                if (!responseError && responseData && typeof responseData === 'string') {
                    try {
                        const parsedData = JSON.parse(responseData);
                        responseError = parsedData === null || parsedData === void 0 ? void 0 : parsedData.error;
                    }
                    catch (error) {
                    }
                }
                if (responseData) {
                    Log$8.debug('error response', responseData);
                }
                if (responseError === 'device disconnected during action') {
                    return { type: 'BridgeDeviceDisconnected', message: { error: responseError } };
                }
                if (responseError && responseError.indexOf('Request failed with status code') !== -1) {
                    return {
                        type: 'CallMethodError',
                        message: {
                            error: responseData !== null && responseData !== void 0 ? responseData : '',
                        },
                    };
                }
                throw error;
            }
        });
    }
    typedCall(type, resType, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.disposed) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'typedCall: DeviceCommands already disposed');
            }
            const response = yield this._commonCall(type, msg);
            try {
                assertType(response, resType);
            }
            catch (error) {
                Log$8.debug('DeviceCommands typedcall error: ', error);
                if (error instanceof hdShared.HardwareError) {
                    if (error.errorCode === hdShared.HardwareErrorCode.ResponseUnexpectTypeError) {
                        if (error.message.indexOf('BridgeNetworkError') > -1) {
                            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BridgeNetworkError);
                        }
                        if (error.message.indexOf('BleDeviceBondError') > -1) {
                            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BleDeviceBondError);
                        }
                        if (error.message.indexOf('BridgeDeviceDisconnected') > -1) {
                            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BridgeDeviceDisconnected);
                        }
                    }
                }
                else {
                    throw error;
                }
            }
            return response;
        });
    }
    _commonCall(type, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.call(type, msg);
            return this._filterCommonTypes(resp, type);
        });
    }
    _filterCommonTypes(res, callType) {
        try {
            if (DataManager.getSettings('env') === 'react-native') {
                Log$8.debug('_filterCommonTypes: ', JSON.stringify(res));
            }
            else {
                Log$8.debug('_filterCommonTypes: ', res);
            }
        }
        catch (error) {
        }
        if (res.type === 'Failure') {
            const { code, message } = res.message;
            let error = null;
            if (code === 'Failure_FirmwareError' && !message) {
                error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FirmwareError);
            }
            if (code === 'Failure_ActionCancelled') {
                error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.ActionCancelled);
            }
            if (code === 'Failure_PinInvalid') {
                error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.PinInvalid, message);
            }
            if (code === 'Failure_PinCancelled') {
                error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.PinCancelled);
            }
            if (code === 'Failure_DataError') {
                if (message === 'Please confirm the BlindSign enabled') {
                    error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BlindSignDisabled);
                }
                if (message === 'File already exists') {
                    error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FileAlreadyExists);
                }
                if (message === null || message === void 0 ? void 0 : message.includes('bytes overflow')) {
                    error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DataOverload);
                }
            }
            if (code === 'Failure_UnexpectedMessage') {
                if (callType === 'PassphraseAck') {
                    error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.UnexpectPassphrase);
                }
                if (message === 'Not in Signing mode') {
                    error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.NotInSigningMode);
                }
            }
            if (error) {
                return Promise.reject(error);
            }
            return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `${code || 'Failure_UnknownCode'},${message || 'Failure_UnknownMessage'}`));
        }
        if (res.type === 'Features') {
            return Promise.resolve(patchFeatures(res));
        }
        if (res.type === 'ButtonRequest') {
            if (res.message.code === 'ButtonRequest_PassphraseEntry') {
                this.device.emit(DEVICE.PASSPHRASE_ON_DEVICE, this.device);
            }
            else {
                this.device.emit(DEVICE.BUTTON, this.device, res.message);
            }
            return this._commonCall('ButtonAck', {});
        }
        if (res.type === 'EntropyRequest') ;
        const isWebusbEnv = DataManager.getSettings('env') === 'webusb';
        if (res.type === 'PinMatrixRequest') {
            if (isWebusbEnv) {
                return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'Please unlock your device'));
            }
            return this._promptPin(res.message.type).then(pin => {
                if (pin === '@@CHARGERWALLET_INPUT_PIN_IN_DEVICE') {
                    return this._commonCall('BixinPinInputOnDevice');
                }
                return this._commonCall('PinMatrixAck', { pin });
            }, () => this._commonCall('Cancel', {}));
        }
        if (res.type === 'PassphraseRequest') {
            return this._promptPassphrase().then(response => {
                const { passphrase, passphraseOnDevice } = response;
                return !passphraseOnDevice
                    ? this._commonCall('PassphraseAck', { passphrase })
                    : this._commonCall('PassphraseAck', { on_device: true });
            });
        }
        if (res.type === 'Deprecated_PassphraseStateRequest') ;
        if (res.type === 'WordRequest') ;
        return Promise.resolve(res);
    }
    _promptPin(type) {
        return new Promise((resolve, reject) => {
            if (this.device.listenerCount(DEVICE.PIN) > 0) {
                this._cancelableRequest = reject;
                this.device.emit(DEVICE.PIN, this.device, type, (err, pin) => {
                    this._cancelableRequest = undefined;
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(pin);
                    }
                });
            }
            else {
                console.warn('[DeviceCommands] [call] PIN callback not configured, cancelling request');
                reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, '_promptPin: PIN callback not configured'));
            }
        });
    }
    _promptPassphrase() {
        return new Promise((resolve, reject) => {
            if (this.device.listenerCount(DEVICE.PASSPHRASE) > 0) {
                this._cancelableRequest = reject;
                this.device.emit(DEVICE.PASSPHRASE, this.device, (response, error) => {
                    this._cancelableRequest = undefined;
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            else {
                Log$8.error('[DeviceCommands] [call] Passphrase callback not configured, cancelling request');
                reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, '_promptPassphrase: Passphrase callback not configured'));
            }
        });
    }
}

const UI_REQUEST = {
    BOOTLOADER: 'ui-device_bootloader_mode',
    NOT_IN_BOOTLOADER: 'ui-device_not_in_bootloader_mode',
    REQUIRE_MODE: 'ui-device_require_mode',
    INITIALIZE: 'ui-device_not_initialized',
    SEEDLESS: 'ui-device_seedless',
    FIRMWARE_OLD: 'ui-device_firmware_old',
    FIRMWARE_NOT_SUPPORTED: 'ui-device_firmware_unsupported',
    FIRMWARE_NOT_COMPATIBLE: 'ui-device_firmware_not_compatible',
    FIRMWARE_NOT_INSTALLED: 'ui-device_firmware_not_installed',
    NOT_USE_CHARGERWALLET_DEVICE: 'ui-device_please_use_chargerwallet_device',
    FIRMWARE_TIP: 'ui-firmware-tip',
    PREVIOUS_ADDRESS_RESULT: 'ui-previous_address_result',
    DEVICE_PROGRESS: 'ui-device_progress',
};

const parseRunOptions = (options) => {
    if (!options)
        options = {};
    return options;
};
const Log$7 = getLogger(exports.LoggerNames.Device);
const deviceSessionCache = {};
class Device extends events.exports {
    constructor(descriptor) {
        super();
        this.deviceConnector = null;
        this.features = undefined;
        this.featuresNeedsReload = false;
        this.externalState = [];
        this.unavailableCapabilities = {};
        this.instance = 0;
        this.internalState = [];
        this.needReloadDevice = false;
        this.keepSession = false;
        this.passphraseState = undefined;
        this.originalDescriptor = descriptor;
    }
    static fromDescriptor(originalDescriptor) {
        const descriptor = Object.assign({}, originalDescriptor);
        return new Device(descriptor);
    }
    toMessageObject() {
        if (this.isUnacquired() || !this.features)
            return null;
        const env = DataManager.getSettings('env');
        const deviceType = getDeviceType(this.features);
        const bleName = getDeviceBleName(this.features);
        const label = getDeviceLabel(this.features);
        return {
            connectId: DataManager.isBleConnect(env) ? this.mainId || null : getDeviceUUID(this.features),
            uuid: getDeviceUUID(this.features),
            deviceType,
            deviceId: this.features.device_id || null,
            path: this.originalDescriptor.path,
            bleName,
            name: bleName || label || `ChargerWallet ${deviceType === null || deviceType === void 0 ? void 0 : deviceType.toUpperCase()}`,
            label: label || 'ChargerWallet',
            mode: this.getMode(),
            features: this.features,
            firmwareVersion: this.getFirmwareVersion(),
            bleFirmwareVersion: this.getBLEFirmwareVersion(),
            unavailableCapabilities: this.unavailableCapabilities,
        };
    }
    connect() {
        const env = DataManager.getSettings('env');
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            if (DataManager.isBleConnect(env)) {
                try {
                    yield this.acquire();
                    resolve(true);
                }
                catch (error) {
                    resolve(error);
                }
                return;
            }
            if (!this.mainId || (!this.isUsedHere() && this.originalDescriptor)) {
                try {
                    yield this.acquire();
                    resolve(true);
                }
                catch (error) {
                    resolve(error);
                }
                return;
            }
            if (this.isUsedHere()) {
                resolve(true);
                return;
            }
            resolve(false);
        }));
    }
    acquire() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const env = DataManager.getSettings('env');
            const mainIdKey = DataManager.isBleConnect(env) ? 'id' : 'session';
            try {
                if (DataManager.isBleConnect(env)) {
                    const res = yield ((_a = this.deviceConnector) === null || _a === void 0 ? void 0 : _a.acquire(this.originalDescriptor.id));
                    this.mainId = (_b = res.uuid) !== null && _b !== void 0 ? _b : '';
                    Log$7.debug('Expected uuid:', this.mainId);
                }
                else {
                    this.mainId = yield ((_c = this.deviceConnector) === null || _c === void 0 ? void 0 : _c.acquire(this.originalDescriptor.path, this.originalDescriptor.session));
                    Log$7.debug('Expected session id:', this.mainId);
                }
                this.updateDescriptor({ [mainIdKey]: this.mainId });
                if (this.commands) {
                    yield this.commands.dispose(false);
                }
                this.commands = new DeviceCommands(this, (_d = this.mainId) !== null && _d !== void 0 ? _d : '');
            }
            catch (error) {
                if (this.runPromise) {
                    this.runPromise.reject(error);
                }
                else {
                    throw error;
                }
                this.runPromise = null;
            }
        });
    }
    release() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const env = DataManager.getSettings('env');
            if ((this.isUsedHere() && !this.keepSession && this.mainId) ||
                (this.mainId && DataManager.isBleConnect(env))) {
                if (this.commands) {
                    this.commands.dispose(false);
                    if (this.commands.callPromise) {
                        try {
                            yield this.commands.callPromise;
                        }
                        catch (error) {
                            this.commands.callPromise = undefined;
                        }
                    }
                }
                try {
                    yield ((_a = this.deviceConnector) === null || _a === void 0 ? void 0 : _a.release(this.mainId, false));
                    this.updateDescriptor({ session: null });
                }
                catch (err) {
                    Log$7.error('[Device] release error: ', err);
                }
                finally {
                    this.needReloadDevice = true;
                }
            }
        });
    }
    getCommands() {
        return this.commands;
    }
    generateStateKey(deviceId, passphraseState) {
        if (passphraseState) {
            return `${deviceId}@${passphraseState}`;
        }
        return deviceId;
    }
    getInternalState(_deviceId) {
        var _a, _b;
        Log$7.debug('getInternalState session param: ', `device_id: ${_deviceId}`, `features.device_id: ${(_a = this.features) === null || _a === void 0 ? void 0 : _a.device_id}`, `passphraseState: ${this.passphraseState}`);
        Log$7.debug('getInternalState session cache: ', deviceSessionCache);
        const deviceId = _deviceId || ((_b = this.features) === null || _b === void 0 ? void 0 : _b.device_id);
        if (!deviceId)
            return undefined;
        if (!this.passphraseState)
            return undefined;
        const usePassKey = this.generateStateKey(deviceId, this.passphraseState);
        return deviceSessionCache[usePassKey];
    }
    tryFixInternalState(state, deviceId, sessionId = null) {
        Log$7.debug('tryFixInternalState session param: ', `device_id: ${deviceId}`, `passphraseState: ${state}`, `sessionId: ${sessionId}`);
        const key = `${deviceId}`;
        const session = deviceSessionCache[key];
        if (session) {
            deviceSessionCache[this.generateStateKey(deviceId, state)] = session;
            delete deviceSessionCache[key];
        }
        else if (sessionId) {
            deviceSessionCache[this.generateStateKey(deviceId, state)] = sessionId;
        }
        Log$7.debug('tryFixInternalState session cache: ', deviceSessionCache);
    }
    setInternalState(state, initSession) {
        var _a, _b;
        Log$7.debug('setInternalState session param: ', `state: ${state}`, `initSession: ${initSession}`, `device_id: ${(_a = this.features) === null || _a === void 0 ? void 0 : _a.device_id}`, `passphraseState: ${this.passphraseState}`);
        if (!this.features)
            return;
        if (!this.passphraseState && !initSession)
            return;
        const deviceId = (_b = this.features) === null || _b === void 0 ? void 0 : _b.device_id;
        if (!deviceId)
            return;
        const key = this.generateStateKey(deviceId, this.passphraseState);
        if (state) {
            deviceSessionCache[key] = state;
        }
        Log$7.debug('setInternalState done session cache: ', deviceSessionCache);
    }
    clearInternalState(_deviceId) {
        var _a;
        Log$7.debug('clearInternalState param: ', _deviceId);
        const deviceId = _deviceId || ((_a = this.features) === null || _a === void 0 ? void 0 : _a.device_id);
        if (!deviceId)
            return;
        const key = `${deviceId}`;
        delete deviceSessionCache[key];
        if (this.passphraseState) {
            const usePassKey = this.generateStateKey(deviceId, this.passphraseState);
            delete deviceSessionCache[usePassKey];
        }
    }
    initialize(options) {
        return __awaiter(this, void 0, void 0, function* () {
            Log$7.debug('initialize param:', options);
            this.passphraseState = options === null || options === void 0 ? void 0 : options.passphraseState;
            if (options === null || options === void 0 ? void 0 : options.initSession) {
                this.clearInternalState(options === null || options === void 0 ? void 0 : options.deviceId);
            }
            const internalState = this.getInternalState(options === null || options === void 0 ? void 0 : options.deviceId);
            const payload = {};
            if (internalState) {
                payload.session_id = internalState;
            }
            if (options === null || options === void 0 ? void 0 : options.deriveCardano) {
                payload.derive_cardano = true;
            }
            Log$7.debug('initialize payload:', payload);
            try {
                const { message } = yield Promise.race([
                    this.commands.typedCall('Initialize', 'Features', payload),
                    new Promise((_, reject) => {
                        setTimeout(() => {
                            reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceInitializeFailed));
                        }, 25 * 1000);
                    }),
                ]);
                this._updateFeatures(message, options === null || options === void 0 ? void 0 : options.initSession);
                yield TransportManager.reconfigure(this.features);
            }
            catch (error) {
                Log$7.error('Initialization failed:', error);
                throw error;
            }
        });
    }
    getFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = yield this.commands.typedCall('GetFeatures', 'Features', {});
            this._updateFeatures(message);
        });
    }
    _updateFeatures(feat, initSession) {
        var _a;
        if (this.features && this.features.session_id && !feat.session_id) {
            feat.session_id = this.features.session_id;
        }
        if (this.features && this.features.device_id && feat.session_id) {
            this.setInternalState(feat.session_id, initSession);
        }
        feat.unlocked = (_a = feat.unlocked) !== null && _a !== void 0 ? _a : true;
        feat = fixFeaturesFirmwareVersion(feat);
        this.features = feat;
        this.featuresNeedsReload = false;
        this.emit(DEVICE.FEATURES, this, feat);
    }
    updateDescriptor(descriptor, forceUpdate = false) {
        const env = DataManager.getSettings('env');
        if (DataManager.isBleConnect(env)) {
            return;
        }
        const originalSession = this.originalDescriptor.session;
        const upcomingSession = descriptor.session;
        if (originalSession !== upcomingSession) {
            this.originalDescriptor.session = upcomingSession;
        }
        if (forceUpdate) {
            this.originalDescriptor = descriptor;
        }
    }
    updateFromCache(device) {
        this.mainId = device.mainId;
        this.commands = device.commands;
        this.updateDescriptor(device.originalDescriptor, true);
        if (device.features) {
            this._updateFeatures(device.features);
        }
    }
    run(fn, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.runPromise) {
                yield this.interruptionFromOutside();
                Log$7.debug('[Device] run error:', 'Device is running, but will cancel previous operate');
            }
            options = parseRunOptions(options);
            this.runPromise = hdShared.createDeferred(this._runInner.bind(this, fn, options));
            return this.runPromise.promise;
        });
    }
    _runInner(fn, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isUsedHere() || this.commands.disposed) {
                const env = DataManager.getSettings('env');
                if (env !== 'react-native') {
                    try {
                        yield this.acquire();
                    }
                    catch (error) {
                        this.runPromise = null;
                        return Promise.reject(error);
                    }
                    try {
                        if (fn) {
                            yield this.initialize(options);
                        }
                    }
                    catch (error) {
                        this.runPromise = null;
                        if (error instanceof hdShared.HardwareError) {
                            return Promise.reject(error);
                        }
                        return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceInitializeFailed, `Initialize failed: ${error.message}, code: ${error.code}`));
                    }
                }
            }
            if (options.keepSession) {
                this.keepSession = true;
            }
            if (fn) {
                try {
                    yield fn();
                }
                catch (e) {
                    if (this.runPromise) {
                        this.runPromise.reject(e);
                    }
                    if (e instanceof hdShared.HardwareError &&
                        (e.errorCode === hdShared.HardwareErrorCode.DeviceInitializeFailed ||
                            e.errorCode === hdShared.HardwareErrorCode.DeviceInterruptedFromOutside ||
                            e.errorCode === hdShared.HardwareErrorCode.DeviceInterruptedFromUser ||
                            e.errorCode === hdShared.HardwareErrorCode.DeviceCheckPassphraseStateError ||
                            e.errorCode === hdShared.HardwareErrorCode.ResponseUnexpectTypeError ||
                            e.errorCode === hdShared.HardwareErrorCode.PinInvalid ||
                            e.errorCode === hdShared.HardwareErrorCode.PinCancelled ||
                            e.errorCode === hdShared.HardwareErrorCode.UnexpectPassphrase)) {
                        yield this.release();
                        Log$7.debug(`error code ${e.errorCode} release device, mainId: ${this.mainId}`);
                    }
                    this.runPromise = null;
                    return;
                }
            }
            if ((!this.keepSession && typeof options.keepSession !== 'boolean') ||
                options.keepSession === false) {
                this.keepSession = false;
                yield this.release();
                Log$7.debug('release device, mainId: ', this.mainId);
            }
            if (this.runPromise) {
                this.runPromise.resolve();
            }
            this.runPromise = null;
        });
    }
    interruptionFromOutside() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.commands) {
                yield this.commands.dispose(false);
            }
            if (this.runPromise) {
                this.runPromise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceInterruptedFromOutside));
            }
        });
    }
    interruptionFromUser() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.commands) {
                yield this.commands.dispose(true);
            }
            if (this.runPromise) {
                this.runPromise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceInterruptedFromUser));
            }
        });
    }
    getMode() {
        var _a, _b, _c;
        if ((_a = this.features) === null || _a === void 0 ? void 0 : _a.bootloader_mode) {
            return exports.EChargerWalletDeviceMode.bootloader;
        }
        if (!((_b = this.features) === null || _b === void 0 ? void 0 : _b.initialized)) {
            return exports.EChargerWalletDeviceMode.notInitialized;
        }
        if ((_c = this.features) === null || _c === void 0 ? void 0 : _c.no_backup) {
            return exports.EChargerWalletDeviceMode.backupMode;
        }
        return exports.EChargerWalletDeviceMode.normal;
    }
    getFirmwareVersion() {
        if (!this.features)
            return null;
        return getDeviceFirmwareVersion(this.features);
    }
    getBLEFirmwareVersion() {
        if (!this.features)
            return null;
        return getDeviceBLEFirmwareVersion(this.features);
    }
    isUsed() {
        return typeof this.originalDescriptor.session === 'string';
    }
    isUsedHere() {
        const env = DataManager.getSettings('env');
        if (DataManager.isBleConnect(env)) {
            return false;
        }
        return this.isUsed() && this.originalDescriptor.session === this.mainId;
    }
    isUsedElsewhere() {
        return this.isUsed() && !this.isUsedHere();
    }
    isBootloader() {
        return this.features && !!this.features.bootloader_mode;
    }
    isInitialized() {
        return this.features && !!this.features.initialized;
    }
    isSeedless() {
        return this.features && !!this.features.no_backup;
    }
    isUnacquired() {
        return this.features === undefined;
    }
    hasUnexpectedMode(allow, require) {
        if (this.features) {
            if (this.isBootloader() && !allow.includes(UI_REQUEST.BOOTLOADER)) {
                return UI_REQUEST.BOOTLOADER;
            }
            if (!this.isInitialized() && !allow.includes(UI_REQUEST.INITIALIZE)) {
                return UI_REQUEST.INITIALIZE;
            }
            if (this.isSeedless() && !allow.includes(UI_REQUEST.SEEDLESS)) {
                return UI_REQUEST.SEEDLESS;
            }
            if (!this.isBootloader() && require.includes(UI_REQUEST.BOOTLOADER)) {
                return UI_REQUEST.NOT_IN_BOOTLOADER;
            }
        }
        return null;
    }
    hasUsePassphrase() {
        var _a;
        const isModeT = getDeviceType(this.features) === 'touch' || getDeviceType(this.features) === 'pro';
        const preCheckTouch = isModeT && ((_a = this.features) === null || _a === void 0 ? void 0 : _a.unlocked) === false;
        return this.features && (!!this.features.passphrase_protection || preCheckTouch);
    }
    checkDeviceId(deviceId) {
        if (this.features) {
            return this.features.device_id === deviceId;
        }
        return false;
    }
    checkPassphraseStateSafety(passphraseState) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.features)
                return false;
            const newState = yield getPassphraseStateWithRefreshDeviceInfo(this);
            if (passphraseState && passphraseState !== newState) {
                this.clearInternalState();
                return false;
            }
            return true;
        });
    }
}

class DeviceList extends events.exports {
    constructor() {
        super(...arguments);
        this.devices = {};
    }
    getDeviceLists(connectId, initOptions) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const deviceDiff = yield ((_a = this.connector) === null || _a === void 0 ? void 0 : _a.enumerate());
            const descriptorList = (_b = deviceDiff === null || deviceDiff === void 0 ? void 0 : deviceDiff.descriptors) !== null && _b !== void 0 ? _b : [];
            this.devices = {};
            const { deviceList, devices } = yield DevicePool.getDevices(descriptorList, connectId, initOptions);
            this.devices = devices;
            return deviceList;
        });
    }
    allDevices() {
        return Object.keys(this.devices).map(key => this.devices[key]);
    }
    getDevice(connectId) {
        return this.devices[connectId];
    }
}

const getFirmwareReleaseInfo = (features) => {
    const firmwareStatus = DataManager.getFirmwareStatus(features);
    const changelog = DataManager.getFirmwareChangelog(features);
    const release = DataManager.getFirmwareLatestRelease(features);
    const bootloaderMode = !!features.bootloader_mode;
    return {
        status: firmwareStatus,
        changelog,
        release,
        bootloaderMode,
    };
};
const getBleFirmwareReleaseInfo = (features) => {
    const firmwareStatus = DataManager.getBLEFirmwareStatus(features);
    const changelog = DataManager.getBleFirmwareChangelog(features);
    const release = DataManager.getBleFirmwareLatestRelease(features);
    const bootloaderMode = !!features.bootloader_mode;
    return {
        status: firmwareStatus,
        changelog,
        release,
        bootloaderMode,
    };
};
const getBootloaderReleaseInfo = (features, willUpdateFirmwareVersion) => {
    const release = DataManager.getFirmwareLatestRelease(features);
    const changelog = [release === null || release === void 0 ? void 0 : release.bootloaderChangelog].filter(item => item != null &&
        typeof item === 'object' &&
        Object.prototype.hasOwnProperty.call(item, 'zh-CN') &&
        Object.prototype.hasOwnProperty.call(item, 'en-US'));
    const bootloaderMode = !!features.bootloader_mode;
    let shouldUpdate = false;
    const deviceType = getDeviceType(features);
    if (DeviceModelToTypes.model_mini.includes(deviceType)) {
        shouldUpdate = !!checkNeedUpdateBootForClassicAndMini(features, willUpdateFirmwareVersion);
    }
    else if (DeviceModelToTypes.model_touch.includes(deviceType)) {
        shouldUpdate = checkNeedUpdateBootForTouch(features);
    }
    return {
        status: shouldUpdate ? 'outdated' : 'valid',
        changelog,
        release,
        bootloaderMode,
    };
};

const Log$6 = getLogger(exports.LoggerNames.Method);
class BaseMethod {
    constructor(message) {
        this.shouldEnsureConnected = true;
        this.checkDeviceId = false;
        this.useDevicePassphraseState = true;
        this.skipForceUpdateCheck = false;
        this.postPreviousAddressMessage = (data) => {
            this.postMessage(createUiMessage(UI_REQUEST.PREVIOUS_ADDRESS_RESULT, {
                device: this.device.toMessageObject(),
                data,
            }));
        };
        const { payload } = message;
        this.name = payload.method;
        this.payload = payload;
        this.responseID = message.id || 0;
        this.connectId = payload.connectId || '';
        this.deviceId = payload.deviceId || '';
        this.useDevice = true;
        this.notAllowDeviceMode = [UI_REQUEST.INITIALIZE];
        this.requireDeviceMode = [];
    }
    getVersionRange() {
        return {};
    }
    setDevice(device) {
        this.device = device;
        this.connectId = device.originalDescriptor.path;
    }
    checkFirmwareRelease() {
        if (!this.device || !this.device.features)
            return;
        const releaseInfo = getFirmwareReleaseInfo(this.device.features);
        this.postMessage(createFirmwareMessage(FIRMWARE.RELEASE_INFO, Object.assign(Object.assign({}, releaseInfo), { device: this.device.toMessageObject() })));
        const bleReleaseInfo = getBleFirmwareReleaseInfo(this.device.features);
        this.postMessage(createFirmwareMessage(FIRMWARE.BLE_RELEASE_INFO, Object.assign(Object.assign({}, bleReleaseInfo), { device: this.device.toMessageObject() })));
    }
    checkDeviceSupportFeature() {
        if (!this.device || !this.device.features)
            return;
        const inputPinOnSoftware = supportInputPinOnSoftware(this.device.features);
        const modifyHomescreen = supportModifyHomescreen(this.device.features);
        this.postMessage(createDeviceMessage(DEVICE.SUPPORT_FEATURES, {
            inputPinOnSoftware,
            modifyHomescreen,
            device: this.device.toMessageObject(),
        }));
    }
    checkSafetyLevelOnTestNet() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let checkFlag = false;
            if (this.name === 'evmSignTransaction' &&
                [3, 4, 5, 420, 11155111].includes(Number((_b = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.transaction) === null || _b === void 0 ? void 0 : _b.chainId))) {
                checkFlag = true;
            }
            if (checkFlag && ((_c = this.device.features) === null || _c === void 0 ? void 0 : _c.safety_checks) === 'Strict') {
                Log$6.debug('will change safety_checks level');
                yield this.device.commands.typedCall('ApplySettings', 'Success', {
                    safety_checks: 'PromptTemporarily',
                });
            }
        });
    }
    dispose() { }
}

class TestInitializeDeviceDuration extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [
            ...this.notAllowDeviceMode,
            UI_REQUEST.INITIALIZE,
            UI_REQUEST.BOOTLOADER,
        ];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const beginTime = Date.now();
            yield this.device.commands.typedCall('Initialize', 'Features');
            const endTime = Date.now();
            const duration = endTime - beginTime;
            return Promise.resolve(duration);
        });
    }
}

class SearchDevices extends BaseMethod {
    init() {
        this.useDevice = false;
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            yield TransportManager.configure();
            const deviceDiff = yield ((_a = this.connector) === null || _a === void 0 ? void 0 : _a.enumerate());
            const devicesDescriptor = (_b = deviceDiff === null || deviceDiff === void 0 ? void 0 : deviceDiff.descriptors) !== null && _b !== void 0 ? _b : [];
            const env = DataManager.getSettings('env');
            if (DataManager.isBleConnect(env)) {
                const devices = [];
                const seenIds = new Set();
                for (const device of devicesDescriptor) {
                    const lowerId = (_c = device.id) === null || _c === void 0 ? void 0 : _c.toLowerCase();
                    if (!seenIds.has(lowerId)) {
                        seenIds.add(lowerId);
                        devices.push(Object.assign(Object.assign({}, device), { connectId: device.id, deviceType: getDeviceTypeByBleName((_d = device.name) !== null && _d !== void 0 ? _d : '') }));
                    }
                }
                return devices;
            }
            const { deviceList } = yield DevicePool.getDevices(devicesDescriptor);
            return deviceList.map(device => device.toMessageObject());
        });
    }
}

class GetFeatures extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [
            ...this.notAllowDeviceMode,
            UI_REQUEST.INITIALIZE,
            UI_REQUEST.BOOTLOADER,
        ];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        var _a, _b;
        if (((_a = this.payload) === null || _a === void 0 ? void 0 : _a.detectBootloaderDevice) && ((_b = this.device.features) === null || _b === void 0 ? void 0 : _b.bootloader_mode)) {
            return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceDetectInBootloaderMode));
        }
        return Promise.resolve(this.device.features);
    }
}

class GetChargerwalletFeatures extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [
            ...this.notAllowDeviceMode,
            UI_REQUEST.INITIALIZE,
            UI_REQUEST.BOOTLOADER,
        ];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = yield this.device.commands.typedCall('ChargerwalletGetFeatures', 'ChargerwalletFeatures');
            if (!!message.chargerwallet_firmware_version && !semver__default["default"].valid(message.chargerwallet_firmware_version)) {
                message.chargerwallet_firmware_version = fixVersion(message.chargerwallet_firmware_version);
            }
            return Promise.resolve(message);
        });
    }
}

class GetPassphraseState extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.useDevicePassphraseState = false;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.device.features)
                return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceInitializeFailed));
            const passphraseState = yield getPassphraseStateWithRefreshDeviceInfo(this.device);
            const { features } = this.device;
            if (features && features.passphrase_protection === true) {
                if (passphraseState && features.device_id) {
                    this.device.tryFixInternalState(passphraseState, features.device_id, features.session_id);
                }
                return Promise.resolve(passphraseState);
            }
            return Promise.resolve(undefined);
        });
    }
}

class GetLogs extends BaseMethod {
    init() {
        this.useDevice = false;
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    serializeLog({ level, prefix, message, timestamp, }) {
        const date = new Date(timestamp).toISOString();
        const messageString = message
            .map(item => {
            if (typeof item === 'object') {
                return JSON.stringify(item);
            }
            return String(item);
        })
            .join(' ');
        return `[${date}] ${level.toUpperCase()} ${prefix}: ${messageString}`;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const logs = getLog().map(log => this.serializeLog(log));
            return Promise.resolve(logs);
        });
    }
}

class CheckFirmwareRelease extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [
            ...this.notAllowDeviceMode,
            UI_REQUEST.INITIALIZE,
            UI_REQUEST.BOOTLOADER,
        ];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        if (this.device.features) {
            const releaseInfo = getFirmwareReleaseInfo(this.device.features);
            return Promise.resolve(releaseInfo);
        }
        return Promise.resolve(null);
    }
}

class CheckBLEFirmwareRelease extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [
            ...this.notAllowDeviceMode,
            UI_REQUEST.INITIALIZE,
            UI_REQUEST.BOOTLOADER,
        ];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        if (this.device.features) {
            const releaseInfo = getBleFirmwareReleaseInfo(this.device.features);
            return Promise.resolve(releaseInfo);
        }
        return Promise.resolve(null);
    }
}

class CheckTransportRelease extends BaseMethod {
    init() {
        this.useDevice = false;
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const transport = TransportManager.getTransport();
            const localVersion = yield transport.init();
            const response = DataManager.getTransportStatus(localVersion);
            return Promise.resolve(response);
        });
    }
}

class CheckBridgeStatus extends BaseMethod {
    init() {
        this.useDevice = false;
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                axios__default["default"]
                    .request({
                    url: 'http://localhost:21320',
                    method: 'POST',
                    withCredentials: false,
                    timeout: 3000,
                })
                    .then(() => resolve(true))
                    .catch(e => {
                    if (e.code === 'ECONNABORTED') {
                        reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BridgeTimeoutError));
                    }
                    else {
                        resolve(false);
                    }
                });
            });
        });
    }
}

const BridgeVersion$1 = '2.2.0';
const TouchNeedUpdateVersion$1 = '4.3.0';
const ClassicAndMiniNeedUpdateVersion$1 = '3.1.0';
class CheckBridgeRelease extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.BOOTLOADER];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.device.features) {
                return null;
            }
            try {
                const { data } = yield axios__default["default"].request({
                    url: 'http://localhost:21320',
                    method: 'POST',
                    withCredentials: false,
                    timeout: 3000,
                });
                const { version = '0.0.0' } = data;
                const { willUpdateFirmwareVersion } = this.payload;
                const { features } = this.device;
                const deviceType = getDeviceType(features);
                const currentFirmwareVersion = getDeviceFirmwareVersion(features).join('.');
                const isOldVersionBridge = semver__default["default"].lt(version, BridgeVersion$1);
                let shouldUpdate = false;
                if (DeviceModelToTypes.model_touch.includes(deviceType)) {
                    if (semver__default["default"].gte(willUpdateFirmwareVersion, TouchNeedUpdateVersion$1) && isOldVersionBridge) {
                        shouldUpdate = true;
                    }
                    if (semver__default["default"].gte(currentFirmwareVersion, TouchNeedUpdateVersion$1) && isOldVersionBridge) {
                        shouldUpdate = true;
                    }
                }
                if (DeviceModelToTypes.model_mini.includes(deviceType)) {
                    if (semver__default["default"].gte(willUpdateFirmwareVersion, ClassicAndMiniNeedUpdateVersion$1) &&
                        isOldVersionBridge) {
                        shouldUpdate = true;
                    }
                    if (semver__default["default"].gte(currentFirmwareVersion, ClassicAndMiniNeedUpdateVersion$1) &&
                        isOldVersionBridge) {
                        shouldUpdate = true;
                    }
                }
                return {
                    shouldUpdate,
                    status: shouldUpdate ? 'outdated' : 'valid',
                    releaseVersion: BridgeVersion$1,
                };
            }
            catch (e) {
                if (e.code === 'ECONNABORTED') {
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BridgeTimeoutError));
                }
                return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BridgeNotInstalled));
            }
        });
    }
}

class CheckBootloaderRelease extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.BOOTLOADER];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.device.features) {
                return null;
            }
            const { features } = this.device;
            const releaseInfo = getBootloaderReleaseInfo(features, this.payload.willUpdateFirmwareVersion);
            return Promise.resolve(releaseInfo);
        });
    }
}

const BridgeVersion = '2.2.0';
const TouchNeedUpdateVersion = '4.3.0';
const ClassicAndMiniNeedUpdateVersion = '3.1.0';
function getBridgeReleaseInfo(features, willUpdateFirmwareVersion) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield axios__default["default"].request({
            url: 'http://localhost:21320',
            method: 'POST',
            withCredentials: false,
            timeout: 3000,
        });
        const { version = '0.0.0' } = data;
        const deviceType = getDeviceType(features);
        const currentFirmwareVersion = getDeviceFirmwareVersion(features).join('.');
        const isOldVersionBridge = semver__default["default"].lt(version, BridgeVersion);
        let shouldUpdate = false;
        if (DeviceModelToTypes.model_touch.includes(deviceType)) {
            if (semver__default["default"].gte(willUpdateFirmwareVersion, TouchNeedUpdateVersion) && isOldVersionBridge) {
                shouldUpdate = true;
            }
            if (semver__default["default"].gte(currentFirmwareVersion, TouchNeedUpdateVersion) && isOldVersionBridge) {
                shouldUpdate = true;
            }
        }
        if (DeviceModelToTypes.model_mini.includes(deviceType)) {
            if (semver__default["default"].gte(willUpdateFirmwareVersion, ClassicAndMiniNeedUpdateVersion) &&
                isOldVersionBridge) {
                shouldUpdate = true;
            }
            if (semver__default["default"].gte(currentFirmwareVersion, ClassicAndMiniNeedUpdateVersion) && isOldVersionBridge) {
                shouldUpdate = true;
            }
        }
        const changelog = DataManager.getBridgeChangelog();
        return {
            shouldUpdate,
            status: shouldUpdate ? 'outdated' : 'valid',
            releaseVersion: BridgeVersion,
            changelog,
        };
    });
}

class CheckAllFirmwareRelease extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.BOOTLOADER];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { features } = this.device;
            const { platform } = this.payload;
            if (!features) {
                return Promise.resolve(null);
            }
            const firmwareRelease = getFirmwareReleaseInfo(features);
            const willUpdateFirmwareVersion = (_b = (_a = firmwareRelease.release) === null || _a === void 0 ? void 0 : _a.version) === null || _b === void 0 ? void 0 : _b.join('.');
            let bridgeReleaseInfo = null;
            if (firmwareRelease.status === 'required' || firmwareRelease.status === 'outdated') {
                if ((platform === 'web' || platform === 'ext') && willUpdateFirmwareVersion) {
                    bridgeReleaseInfo = yield getBridgeReleaseInfo(features, willUpdateFirmwareVersion);
                }
            }
            const bootloaderRelease = getBootloaderReleaseInfo(features, willUpdateFirmwareVersion);
            const bleFirmwareReleaseInfo = getBleFirmwareReleaseInfo(features);
            return {
                firmware: firmwareRelease,
                bootloader: bootloaderRelease,
                ble: bleFirmwareReleaseInfo,
                bridge: bridgeReleaseInfo
                    ? {
                        status: bridgeReleaseInfo.shouldUpdate ? 'outdated' : 'valid',
                        changelog: bridgeReleaseInfo.changelog,
                        release: bridgeReleaseInfo.releaseVersion,
                    }
                    : undefined,
            };
        });
    }
}

class DeviceBackup extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('BackupDevice', 'Success');
            return Promise.resolve(res.message);
        });
    }
}

const hasHexPrefix = (str) => str.slice(0, 2).toLowerCase() === '0x';
const stripHexPrefix = (str) => (hasHexPrefix(str) ? str.slice(2) : str);
const addHexPrefix = (str) => (hasHexPrefix(str) ? str : `0x${str}`);
const isHexString = (value, length) => {
    if (typeof value !== 'string' || !value.match(/^(0x|0X)?[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (length && value.length !== 2 + 2 * length) {
        return false;
    }
    return true;
};
const stripHexStartZeroes = (str) => {
    while (/^00/.test(str)) {
        str = str.slice(2);
    }
    return str;
};
const modifyValues = (object, transformer) => Object.fromEntries(Object.entries(object).map(([key, value]) => [key, transformer(value, key)]));
const formatAnyHex = value => {
    if (typeof value === 'string') {
        let stripped = stripHexPrefix(value);
        if (stripped.length % 2 !== 0) {
            stripped = `0${stripped}`;
        }
        return stripped;
    }
    if (Array.isArray(value)) {
        return value.map(formatAnyHex);
    }
    if (typeof value === 'object') {
        return modifyValues(value, value => formatAnyHex(value));
    }
    return value;
};
const hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array))
        throw new Error('Uint8Array expected');
    let hex = '';
    for (let i = 0; i < uint8a.length; i++) {
        hex += hexes[uint8a[i]];
    }
    return hex;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') {
        throw new TypeError(`hexToBytes: expected string, got ${typeof hex}`);
    }
    if (hex.length % 2)
        throw new Error('hexToBytes: received invalid unpadded hex');
    const array = new Uint8Array(hex.length / 2);
    for (let i = 0; i < array.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
            throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}

const invalidParameter = (message) => hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, message);
const invalidResponse = (message) => hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodError, message);
const validateParams = (values, fields) => {
    fields.forEach(field => {
        const existsProp = Object.prototype.hasOwnProperty.call(values, field.name);
        if (!existsProp && field.required) {
            throw invalidParameter(`Missing required parameter: ${field.name}`);
        }
        const value = values[field.name];
        if (value && field.type) {
            switch (field.type) {
                case 'array':
                    if (!Array.isArray(value)) {
                        throw invalidParameter(`Parameter [${field.name}] is of type invalid and should be [${field.type}].`);
                    }
                    else if (!field.allowEmpty && value.length < 1) {
                        throw invalidParameter(`Parameter "${field.name}" is empty.`);
                    }
                    break;
                case 'uint':
                    if (typeof value !== 'string' && typeof value !== 'number') {
                        throw invalidParameter(`Parameter [${field.name}] has invalid type. "string|number" expected.`);
                    }
                    if ((typeof value === 'number' && !Number.isSafeInteger(value)) ||
                        !/^(?:[1-9]\d*|\d)$/.test(value.toString().replace(/^-/, field.allowNegative ? '' : '-'))) {
                        throw invalidParameter(`Parameter [${field.name}] has invalid value "${value}". Integer representation expected.`);
                    }
                    break;
                case 'bigNumber':
                    if (typeof value !== 'string') {
                        throw invalidParameter(`Parameter [${field.name}] is of type invalid and should be [string].`);
                    }
                    try {
                        const bn = new BigNumber__default["default"](value);
                        if (bn.toFixed(0) !== value) {
                            throw new Error('');
                        }
                    }
                    catch (error) {
                        throw invalidParameter(`Parameter [${field.name}] is of type invalid and should be [${field.type}].`);
                    }
                    break;
                case 'buffer':
                    if (typeof value === 'undefined' ||
                        (typeof value.constructor.isBuffer === 'function' && value.constructor.isBuffer(value))) {
                        throw invalidParameter(`Parameter [${field.name}] is of type invalid and should be [buffer].`);
                    }
                    break;
                case 'hexString':
                    if (typeof value !== 'string' || !isHexString(addHexPrefix(value))) {
                        throw invalidParameter(`Parameter [${field.name}] is of type invalid and should be [${field.type}].`);
                    }
                    break;
                default:
                    if (typeof value !== field.type) {
                        throw invalidParameter(`Parameter [${field.name}] is of type invalid and should be [${field.type}].`);
                    }
                    break;
            }
        }
    });
};
function validateResult(result, nonNullableFields, options) {
    if (Array.isArray(result)) {
        if ((options === null || options === void 0 ? void 0 : options.expectedLength) !== null && result.length !== (options === null || options === void 0 ? void 0 : options.expectedLength)) {
            throw invalidResponse(`Expected array length of ${options === null || options === void 0 ? void 0 : options.expectedLength}, but got ${result.length}`);
        }
        result.forEach((item, index) => {
            nonNullableFields.forEach(field => {
                if (item[field] == null) {
                    throw invalidResponse(`Field '${field}' in array item at index ${index} is null`);
                }
            });
        });
    }
    else if (typeof result === 'object' && result !== null) {
        nonNullableFields.forEach(field => {
            if (result[field] == null) {
                throw invalidResponse(`Field '${field}' in object is null`);
            }
        });
    }
    else {
        throw invalidResponse('Result is neither an array nor a valid object');
    }
}

class DeviceChangePin extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        validateParams(this.payload, [{ name: 'remove', type: 'boolean' }]);
        this.params = {
            remove: this.payload.remove,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('ChangePin', 'Success', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class DeviceFlags extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        validateParams(this.payload, [{ name: 'flags', type: 'number' }]);
        this.params = {
            flags: this.payload.flags,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('ApplyFlags', 'Success', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class DeviceRebootToBootloader extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    getVersionRange() {
        return {
            classic: {
                min: '2.1.11',
            },
            mini: {
                min: '2.1.11',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('RebootToBootloader', 'Success');
            return Promise.resolve(res.message);
        });
    }
}

class DeviceRebootToBoardloader extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    getVersionRange() {
        return {
            classic: {
                min: '2.1.11',
            },
            mini: {
                min: '2.1.11',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('BixinOutMessageSE', 'Success');
            return Promise.resolve(res.message);
        });
    }
}

class DeviceRecovery extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        validateParams(this.payload, [
            { name: 'wordCount', type: 'number' },
            { name: 'passphraseProtection', type: 'boolean' },
            { name: 'pinProtection', type: 'boolean' },
            { name: 'language', type: 'string' },
            { name: 'label', type: 'string' },
            { name: 'enforceWordlist', type: 'boolean' },
            { name: 'type', type: 'object' },
            { name: 'u2fCounter', type: 'number' },
            { name: 'dryRun', type: 'boolean' },
        ]);
        this.params = {
            word_count: this.payload.wordCount,
            passphrase_protection: this.payload.passphraseProtection,
            pin_protection: this.payload.pinProtection,
            language: this.payload.language,
            label: this.payload.label,
            enforce_wordlist: this.payload.enforceWordlist,
            type: this.payload.type,
            u2f_counter: this.payload.u2fCounter || Math.floor(Date.now() / 1000),
            dry_run: this.payload.dryRun,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('RecoveryDevice', 'Success', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class DeviceReset extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        validateParams(this.payload, [
            { name: 'displayRandom', type: 'boolean' },
            { name: 'strength', type: 'number' },
            { name: 'passphraseProtection', type: 'boolean' },
            { name: 'pinProtection', type: 'boolean' },
            { name: 'language', type: 'string' },
            { name: 'label', type: 'string' },
            { name: 'u2fCounter', type: 'number' },
            { name: 'skipBackup', type: 'boolean' },
            { name: 'noBackup', type: 'boolean' },
            { name: 'backupType' },
        ]);
        this.params = {
            display_random: this.payload.displayRandom,
            strength: this.payload.strength || 256,
            passphrase_protection: this.payload.passphraseProtection,
            pin_protection: this.payload.pinProtection,
            language: this.payload.language,
            label: this.payload.label,
            u2f_counter: this.payload.u2fCounter || Math.floor(Date.now() / 1000),
            skip_backup: this.payload.skipBackup,
            no_backup: this.payload.noBackup,
            backup_type: this.payload.backupType,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('ResetDevice', 'Success', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class DeviceSettings extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        validateParams(this.payload, [
            { name: 'language', type: 'string' },
            { name: 'label', type: 'string' },
            { name: 'usePassphrase', type: 'boolean' },
            { name: 'homescreen', type: 'string' },
            { name: 'passphraseSource', type: 'number' },
            { name: 'autoLockDelayMs', type: 'number' },
            { name: 'displayRotation', type: 'number' },
            { name: 'passphraseAlwaysOnDevice', type: 'boolean' },
            { name: 'safetyChecks', type: 'number' },
            { name: 'experimentalFeatures', type: 'boolean' },
        ]);
        this.params = {
            language: this.payload.language,
            label: this.payload.label,
            use_passphrase: this.payload.usePassphrase,
            homescreen: this.payload.homescreen,
            _passphrase_source: this.payload.passphraseSource,
            auto_lock_delay_ms: this.payload.autoLockDelayMs,
            display_rotation: this.payload.displayRotation,
            passphrase_always_on_device: this.payload.passphraseAlwaysOnDevice,
            safety_checks: this.payload.safetyChecks,
            experimental_features: this.payload.experimentalFeatures,
        };
    }
    getVersionRange() {
        if (this.payload.usePassphrase) {
            return {
                model_mini: {
                    min: '2.4.0',
                },
            };
        }
        return {};
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('ApplySettings', 'Success', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class DeviceUpdateReboot extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('DeviceBackToBoot', 'Success');
            return Promise.resolve(res.message);
        });
    }
}

const safeThrowError = (error) => {
    if (error instanceof hdShared.HardwareError) {
        throw error;
    }
    else if (error.code === 'ERR_NETWORK') {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BridgeNotInstalled);
    }
    else if (error.code === 'ECONNABORTED') {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BridgeTimeoutError);
    }
    else if (error.code === 'ERR_BAD_REQUEST') {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.BridgeNetworkError);
    }
    else {
        throw hdShared.ERRORS.TypedError(error);
    }
};

class DeviceUploadResource extends BaseMethod {
    constructor() {
        super(...arguments);
        this.paramsData = {
            data: new Uint8Array(),
            thumbnailData: new Uint8Array(),
        };
        this.processResourceRequest = (res) => __awaiter(this, void 0, void 0, function* () {
            if (res.type === 'Success') {
                return res.message;
            }
            const { offset, data_length } = res.message;
            const { data, thumbnailData } = this.paramsData;
            if (offset === undefined) {
                throw new Error('offset is undefined');
            }
            let payload;
            if (res.type === 'ResourceRequest') {
                payload = new Uint8Array(data.slice(offset, Math.min(offset + data_length, data.byteLength)));
            }
            else {
                payload = new Uint8Array(thumbnailData.slice(offset, Math.min(offset + data_length, thumbnailData.byteLength)));
            }
            const digest = blake2s.blake2s(payload);
            const resourceAckParams = {
                data_chunk: utils.bytesToHex(payload),
                hash: utils.bytesToHex(digest),
            };
            const response = yield this.device.commands.typedCall('ResourceAck', ['ResourceRequest', 'ZoomRequest', 'Success'], resourceAckParams);
            return this.processResourceRequest(response);
        });
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '3.2.0',
            },
        };
    }
    checkUploadNFTSupport() {
        const deviceType = getDeviceType(this.device.features);
        const currentVersion = getDeviceFirmwareVersion(this.device.features).join('.');
        if (!DeviceModelToTypes.model_touch.includes(deviceType)) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodError, 'Device Not Support Upload NFT');
        }
        if (semver__default["default"].lt(currentVersion, '4.1.0')) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodNeedUpgradeFirmware, `Device firmware version is too low, please update to 4.1.0`, { current: currentVersion, require: '4.1.0' });
        }
    }
    init() {
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
        validateParams(this.payload, [
            { name: 'suffix', type: 'string', required: true },
            { name: 'dataHex', type: 'string', required: true },
            { name: 'thumbnailDataHex', type: 'string', required: true },
            { name: 'resType', type: 'number', required: true },
            { name: 'nftMetaData', type: 'string' },
            { name: 'fileNameNoExt', type: 'string' },
        ]);
        const { suffix, dataHex, thumbnailDataHex, resType, nftMetaData } = this
            .payload;
        this.paramsData = {
            data: hexToBytes(dataHex),
            thumbnailData: hexToBytes(thumbnailDataHex),
        };
        const fileHash = utils.bytesToHex(blake2s.blake2s(this.payload.dataHex)).slice(0, 8);
        const file_name_no_ext = lodash.isEmpty(this.payload.fileNameNoExt)
            ? `${resType === 0 ? 'wp' : 'nft'}-${fileHash}-${Math.floor(Date.now() / 1000)}`
            : this.payload.fileNameNoExt;
        this.params = {
            extension: suffix,
            data_length: this.paramsData.data.byteLength,
            zoom_data_length: this.paramsData.thumbnailData.byteLength,
            res_type: resType,
            nft_meta_data: nftMetaData,
            file_name_no_ext,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.payload.resType === hdTransport.Messages.ResourceType.Nft) {
                this.checkUploadNFTSupport();
            }
            const res = yield this.device.commands.typedCall('ResourceUpload', ['ResourceRequest', 'ZoomRequest', 'Success'], this.params);
            this.postMessage(createUiMessage(UI_REQUEST$1.CLOSE_UI_WINDOW));
            return this.processResourceRequest(res);
        });
    }
}

class DeviceSupportFeatures extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        if (!this.device.features)
            return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'Device not initialized'));
        const inputPinOnSoftware = supportInputPinOnSoftware(this.device.features);
        const modifyHomescreen = supportModifyHomescreen(this.device.features);
        return Promise.resolve({
            inputPinOnSoftware,
            modifyHomescreen,
            device: this.device.toMessageObject(),
        });
    }
}

class DeviceVerify extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        validateParams(this.payload, [{ name: 'dataHex', type: 'hexString' }]);
        this.params = {
            data: formatAnyHex(this.payload.dataHex),
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const deviceType = getDeviceType(this.device.features);
            let response;
            if (DeviceModelToTypes.model_classic.includes(deviceType)) {
                const res = yield this.device.commands.typedCall('BixinVerifyDeviceRequest', 'BixinVerifyDeviceAck', Object.assign(Object.assign({}, this.params), { data: utils.bytesToHex(sha256.sha256(this.params.data)) }));
                response = res.message;
            }
            else {
                const signatureRes = yield this.device.commands.typedCall('SESignMessage', 'SEMessageSignature', {
                    message: this.params.data,
                });
                const certRes = yield this.device.commands.typedCall('ReadSEPublicCert', 'SEPublicCert');
                response = {
                    cert: certRes.message.public_cert,
                    signature: signatureRes.message.signature,
                };
            }
            validateResult(response, ['cert', 'signature']);
            if (response)
                return Promise.resolve(response);
            return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'Device not support verify'));
        });
    }
}

class DeviceWipe extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('WipeDevice', 'Success');
            return Promise.resolve(res.message);
        });
    }
}

const getBinary = ({ features, updateType, version, isUpdateBootloader, }) => __awaiter(void 0, void 0, void 0, function* () {
    const releaseInfo = getInfo({ features, updateType, targetVersion: version === null || version === void 0 ? void 0 : version.join('.') });
    if (!releaseInfo) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'no firmware found for this device');
    }
    if (version && !semver__default["default"].eq(releaseInfo.version.join('.'), version.join('.'))) {
        const touchWithoutVersion = getDeviceType(features) === 'touch' && !features.chargerwallet_version;
        if (!touchWithoutVersion) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'firmware version mismatch');
        }
    }
    const url = updateType === 'ble'
        ?
            releaseInfo.webUpdate
        : isUpdateBootloader
            ? releaseInfo.bootloaderResource
            : releaseInfo.url;
    let fw;
    try {
        fw = yield httpRequest(url, 'binary');
    }
    catch (_a) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'Method_FirmwareUpdate_DownloadFailed');
    }
    return Object.assign(Object.assign({}, releaseInfo), { binary: fw });
});
const getSysResourceBinary = (url) => __awaiter(void 0, void 0, void 0, function* () {
    let fw;
    try {
        fw = yield httpRequest(url, 'binary');
    }
    catch (_b) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'Method_FirmwareUpdate_DownloadFailed');
    }
    return {
        binary: fw,
    };
});
const getInfo = ({ features, updateType, targetVersion }) => {
    var _a, _b;
    const deviceType = getDeviceType(features);
    const { deviceMap } = DataManager;
    const firmwareUpdateField = getFirmwareUpdateField({
        features,
        updateType,
        targetVersion,
    });
    const releaseInfo = (_b = (_a = deviceMap === null || deviceMap === void 0 ? void 0 : deviceMap[deviceType]) === null || _a === void 0 ? void 0 : _a[firmwareUpdateField]) !== null && _b !== void 0 ? _b : [];
    return findLatestRelease(releaseInfo);
};

const NEW_BOOT_UPRATE_FIRMWARE_VERSION = '2.4.5';
const SESSION_ERROR = 'session not found';
const Log$5 = getLogger(exports.LoggerNames.Core);
const postConfirmationMessage = (device) => {
    var _a;
    if ((_a = device.features) === null || _a === void 0 ? void 0 : _a.firmware_present) {
        device.emit(DEVICE.BUTTON, device, { code: 'ButtonRequest_FirmwareUpdate' });
    }
};
const postProgressMessage = (device, progress, postMessage) => {
    postMessage(createUiMessage(UI_REQUEST$1.FIRMWARE_PROGRESS, {
        device: device.toMessageObject(),
        progress,
    }));
};
const postProgressTip = (device, message, postMessage) => {
    postMessage(createUiMessage(UI_REQUEST$1.FIRMWARE_TIP, {
        device: device.toMessageObject(),
        data: {
            message,
        },
    }));
};
const waitBleInstall = (updateType) => __awaiter(void 0, void 0, void 0, function* () {
    if (updateType === 'ble') {
        yield wait(10 * 1000);
    }
});
const uploadFirmware = (updateType, typedCall, postMessage, device, { payload, rebootOnSuccess, }) => __awaiter(void 0, void 0, void 0, function* () {
    const deviceType = getDeviceType(device.features);
    if (DeviceModelToTypes.model_mini.includes(deviceType)) {
        postConfirmationMessage(device);
        postProgressTip(device, 'ConfirmOnDevice', postMessage);
        const eraseCommand = updateType === 'firmware' ? 'FirmwareErase' : 'FirmwareErase_ex';
        const eraseRes = yield typedCall(eraseCommand, 'Success', {});
        if (eraseRes.type !== 'Success') {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'erase firmware error');
        }
        postProgressTip(device, 'FirmwareEraseSuccess', postMessage);
        postProgressMessage(device, 0, postMessage);
        const { message, type } = yield typedCall('FirmwareUpload', 'Success', {
            payload,
        });
        postProgressMessage(device, 100, postMessage);
        yield waitBleInstall(updateType);
        if (type !== 'Success') {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'install firmware error');
        }
        return message;
    }
    if (DeviceModelToTypes.model_touch.includes(deviceType)) {
        if (device.features) {
            const bootloaderVersion = getDeviceBootloaderVersion(device.features);
            if (semver__default["default"].gte(bootloaderVersion.join('.'), NEW_BOOT_UPRATE_FIRMWARE_VERSION)) {
                const response = yield newTouchUpdateProcess(updateType, postMessage, device, {
                    payload,
                }, rebootOnSuccess);
                return response.message;
            }
        }
        postConfirmationMessage(device);
        postProgressTip(device, 'ConfirmOnDevice', postMessage);
        const length = payload.byteLength;
        let response = yield typedCall('FirmwareErase', ['FirmwareRequest', 'Success'], { length });
        postProgressTip(device, 'FirmwareEraseSuccess', postMessage);
        while (response.type !== 'Success') {
            const start = response.message.offset;
            const end = response.message.offset + response.message.length;
            const chunk = payload.slice(start, end);
            if (start > 0) {
                postProgressMessage(device, Math.round((start / length) * 100), postMessage);
            }
            response = yield typedCall('FirmwareUpload', ['FirmwareRequest', 'Success'], {
                payload: chunk,
            });
            if (response.type === 'CallMethodError') {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'upload firmware error');
            }
        }
        postProgressMessage(device, 100, postMessage);
        yield waitBleInstall(updateType);
        return response.message;
    }
    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'uploadFirmware: unknown device model');
});
const newTouchUpdateProcess = (updateType, postMessage, device, { payload }, rebootOnSuccess = true) => __awaiter(void 0, void 0, void 0, function* () {
    let typedCall = device.getCommands().typedCall.bind(device.getCommands());
    postProgressTip(device, 'StartTransferData', postMessage);
    const filePath = `0:${updateType === 'ble' ? 'ble-' : ''}firmware.bin`;
    const env = DataManager.getSettings('env');
    const perPackageSize = DataManager.isBleConnect(env) ? 16 : 128;
    const chunkSize = 1024 * perPackageSize;
    const totalChunks = Math.ceil(payload.byteLength / chunkSize);
    let offset = 0;
    for (let i = 0; i < totalChunks; i++) {
        const chunkStart = i * chunkSize;
        const chunkEnd = Math.min(chunkStart + chunkSize, payload.byteLength);
        const chunkLength = chunkEnd - chunkStart;
        const chunk = payload.slice(chunkStart, chunkEnd);
        const overwrite = i === 0;
        const progress = Math.round(((i + 1) / totalChunks) * 100);
        const writeRes = yield emmcFileWriteWithRetry(device, filePath, chunkLength, offset, chunk, overwrite, progress);
        offset += writeRes.message.processed_byte;
        postProgressMessage(device, progress, postMessage);
    }
    postConfirmationMessage(device);
    postProgressTip(device, 'ConfirmOnDevice', postMessage);
    postProgressTip(device, 'InstallingFirmware', postMessage);
    typedCall = device.getCommands().typedCall.bind(device.getCommands());
    const response = yield typedCall('FirmwareUpdateEmmc', 'Success', {
        path: filePath,
        reboot_on_success: rebootOnSuccess,
    });
    return response;
});
const emmcFileWriteWithRetry = (device, filePath, chunkLength, offset, chunk, overwrite, progress) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const writeFunc = () => __awaiter(void 0, void 0, void 0, function* () {
        var _g;
        const typedCall = device.getCommands().typedCall.bind(device.getCommands());
        const writeRes = yield typedCall('EmmcFileWrite', 'EmmcFile', {
            file: {
                path: filePath,
                len: chunkLength,
                offset,
                data: chunk,
            },
            overwrite,
            append: offset !== 0,
            ui_percentage: progress,
        });
        if (writeRes.type !== 'EmmcFile') {
            if (writeRes.type === 'CallMethodError') {
                if (((_g = writeRes.message.error) !== null && _g !== void 0 ? _g : '').indexOf(SESSION_ERROR) > -1) {
                    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, SESSION_ERROR);
                }
            }
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'emmc file write chunk once error');
        }
        return writeRes;
    });
    let retryCount = 10;
    while (retryCount > 0) {
        try {
            const result = yield writeFunc();
            return result;
        }
        catch (error) {
            Log$5.error(`emmcWrite error: `, error);
            retryCount--;
            if (retryCount === 0) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'emmc file write firmware error');
            }
            const env = DataManager.getSettings('env');
            if (DataManager.isBleConnect(env)) {
                yield wait(3000);
                yield ((_a = device.deviceConnector) === null || _a === void 0 ? void 0 : _a.acquire(device.originalDescriptor.id, null, true));
                yield device.initialize();
            }
            else if (error.message.indexOf(SESSION_ERROR) > -1) {
                const deviceDiff = yield ((_b = device.deviceConnector) === null || _b === void 0 ? void 0 : _b.enumerate());
                const devicesDescriptor = (_c = deviceDiff === null || deviceDiff === void 0 ? void 0 : deviceDiff.descriptors) !== null && _c !== void 0 ? _c : [];
                const { deviceList } = yield DevicePool.getDevices(devicesDescriptor, undefined);
                if (deviceList.length === 1 && ((_e = (_d = deviceList[0]) === null || _d === void 0 ? void 0 : _d.features) === null || _e === void 0 ? void 0 : _e.bootloader_mode)) {
                    device.updateFromCache(deviceList[0]);
                    yield device.acquire();
                    device.getCommands().mainId = (_f = device.mainId) !== null && _f !== void 0 ? _f : '';
                }
            }
            yield wait(3000);
        }
    }
});
const processResourceRequest = (typedCall, res, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (res.type === 'Success') {
        return res.message;
    }
    const { offset, data_length } = res.message;
    if (offset === undefined) {
        throw new Error('offset is undefined');
    }
    const payload = new Uint8Array(data.slice(offset, Math.min(offset + data_length, data.byteLength)));
    const digest = blake2s.blake2s(payload);
    const resourceAckParams = {
        data_chunk: bytesToHex(payload),
        hash: bytesToHex(digest),
    };
    const response = yield typedCall('ResourceAck', ['ResourceRequest', 'Success'], Object.assign({}, resourceAckParams));
    return processResourceRequest(typedCall, response, data);
});
const INIT_DATA_CHUNK_SIZE = 16 * 1024;
const updateResource = (typedCall, fileName, data) => __awaiter(void 0, void 0, void 0, function* () {
    const chunk = new Uint8Array(data.slice(0, Math.min(INIT_DATA_CHUNK_SIZE, data.byteLength)));
    const digest = blake2s.blake2s(chunk);
    const res = yield typedCall('ResourceUpdate', ['ResourceRequest', 'Success'], {
        file_name: fileName,
        data_length: data.byteLength,
        initial_data_chunk: bytesToHex(chunk),
        hash: bytesToHex(digest),
    });
    return processResourceRequest(typedCall, res, data);
});
const updateResources = (typedCall, postMessage, device, source) => __awaiter(void 0, void 0, void 0, function* () {
    postProgressTip(device, 'UpdateSysResource', postMessage);
    const zipData = yield JSZip__default["default"].loadAsync(source);
    const files = Object.entries(zipData.files);
    let progress = 0;
    const stepProgress = 100 / files.length;
    for (const [fileName, file] of files) {
        const name = fileName.split('/').pop();
        if (!file.dir && fileName.indexOf('__MACOSX') === -1 && name) {
            const data = yield file.async('arraybuffer');
            yield updateResource(typedCall, name, data);
        }
        progress += stepProgress;
        postProgressMessage(device, Math.floor(progress), postMessage);
    }
    postProgressMessage(device, 100, postMessage);
    postProgressTip(device, 'UpdateSysResourceSuccess', postMessage);
    return true;
});
const updateBootloader = (typedCall, postMessage, device, source) => __awaiter(void 0, void 0, void 0, function* () {
    postProgressTip(device, 'UpdateBootloader', postMessage);
    postProgressMessage(device, Math.floor(0), postMessage);
    yield updateResource(typedCall, 'bootloader.bin', source);
    postProgressMessage(device, Math.floor(100), postMessage);
    postProgressTip(device, 'UpdateBootloaderSuccess', postMessage);
    return true;
});

class DeviceFullyUploadResource extends BaseMethod {
    constructor() {
        super(...arguments);
        this.checkPromise = null;
        this.postTipMessage = (message) => {
            this.postMessage(createUiMessage(UI_REQUEST.FIRMWARE_TIP, {
                device: this.device.toMessageObject(),
                data: {
                    message,
                },
            }));
        };
    }
    init() {
        this.requireDeviceMode = [];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    isSupportResourceUpdate(features, updateType) {
        if (updateType !== 'firmware')
            return false;
        const deviceType = getDeviceType(features);
        const isTouchMode = deviceType === 'touch' || deviceType === 'pro';
        const currentVersion = getDeviceFirmwareVersion(features).join('.');
        return isTouchMode && semver__default["default"].gte(currentVersion, '3.4.0');
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { device } = this;
            const { features } = device;
            if (!(features === null || features === void 0 ? void 0 : features.bootloader_mode) && features) {
                if (features) {
                    let { binary } = this.payload;
                    if (!binary) {
                        this.postTipMessage('CheckLatestUiResource');
                        const resourceUrl = DataManager.getSysFullResource(features);
                        if (resourceUrl) {
                            this.postTipMessage('DownloadLatestUiResource');
                            const resource = yield getSysResourceBinary(resourceUrl);
                            this.postTipMessage('DownloadLatestUiResourceSuccess');
                            if (resource) {
                                binary = resource.binary;
                            }
                        }
                    }
                    yield updateResources(this.device.getCommands().typedCall.bind(this.device.getCommands()), this.postMessage, device, binary);
                }
            }
        });
    }
}

class DeviceUpdateBootloader extends BaseMethod {
    constructor() {
        super(...arguments);
        this.checkPromise = null;
        this.postTipMessage = (message) => {
            this.postMessage(createUiMessage(UI_REQUEST.FIRMWARE_TIP, {
                device: this.device.toMessageObject(),
                data: {
                    message,
                },
            }));
        };
    }
    init() {
        this.notAllowDeviceMode = [UI_REQUEST.BOOTLOADER, UI_REQUEST.INITIALIZE];
        this.requireDeviceMode = [];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    updateTouchBootloader(device, features) {
        return __awaiter(this, void 0, void 0, function* () {
            if (features && !features.bootloader_mode) {
                let { binary } = this.payload;
                if (!binary) {
                    this.postTipMessage('CheckLatestUiResource');
                    const resourceUrl = DataManager.getBootloaderResource(features);
                    if (resourceUrl) {
                        this.postTipMessage('DownloadLatestBootloaderResource');
                        const resource = yield getSysResourceBinary(resourceUrl);
                        this.postTipMessage('DownloadLatestBootloaderResourceSuccess');
                        if (resource) {
                            binary = resource.binary;
                        }
                    }
                }
                if (!checkBootloaderLength(binary)) {
                    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CheckDownloadFileError);
                }
                yield updateBootloader(this.device.getCommands().typedCall.bind(this.device.getCommands()), this.postMessage, device, binary);
                return Promise.resolve(true);
            }
            return Promise.resolve(true);
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { device } = this;
            const { features } = device;
            const deviceType = getDeviceType(features);
            if (DeviceModelToTypes.model_touch.includes(deviceType)) {
                return this.updateTouchBootloader(device, features);
            }
            return Promise.resolve(true);
        });
    }
}

class DeviceLock extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('LockDevice', 'Success');
            return Promise.resolve(res.message);
        });
    }
}

class DeviceCancel extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('Cancel', 'Success');
            return Promise.resolve(res.message);
        });
    }
}

class SetU2FCounter extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
        this.params = {
            u2f_counter: this.payload.u2f_counter,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('SetU2FCounter', 'Success', this.params);
            return Promise.resolve(res.message);
        });
    }
}

class GetNextU2FCounter extends BaseMethod {
    init() {
        this.useDevicePassphraseState = false;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('GetNextU2FCounter', 'NextU2FCounter');
            return Promise.resolve(res.message);
        });
    }
}

const Log$4 = getLogger(exports.LoggerNames.Method);
class FirmwareUpdate extends BaseMethod {
    constructor() {
        super(...arguments);
        this.checkPromise = null;
        this.postTipMessage = (message) => {
            this.postMessage(createUiMessage(UI_REQUEST.FIRMWARE_TIP, {
                device: this.device.toMessageObject(),
                data: {
                    message,
                },
            }));
        };
    }
    init() {
        this.notAllowDeviceMode = [UI_REQUEST.BOOTLOADER, UI_REQUEST.INITIALIZE];
        this.requireDeviceMode = [];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
        const { payload } = this;
        validateParams(payload, [
            { name: 'version', type: 'array' },
            { name: 'binary', type: 'buffer' },
            { name: 'updateType', type: 'string', required: true },
            { name: 'rebootOnSuccess', type: 'boolean' },
        ]);
        this.params = { updateType: payload.updateType };
        if ('version' in payload) {
            this.params = Object.assign(Object.assign({}, this.params), { version: payload.version });
        }
        if ('binary' in payload) {
            this.params = Object.assign(Object.assign({}, this.params), { binary: payload.binary });
        }
    }
    checkDeviceToBootloader(connectId) {
        this.checkPromise = hdShared.createDeferred();
        const env = DataManager.getSettings('env');
        const isBleReconnect = connectId && DataManager.isBleConnect(env);
        Log$4.log('FirmwareUpdate [checkDeviceToBootloader] isBleReconnect: ', isBleReconnect);
        const intervalTimer = setInterval(() => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (isBleReconnect) {
                try {
                    yield ((_a = this.device.deviceConnector) === null || _a === void 0 ? void 0 : _a.acquire(this.device.originalDescriptor.id, null, true));
                    yield this.device.initialize();
                    if ((_b = this.device.features) === null || _b === void 0 ? void 0 : _b.bootloader_mode) {
                        clearInterval(intervalTimer);
                        (_c = this.checkPromise) === null || _c === void 0 ? void 0 : _c.resolve(true);
                    }
                }
                catch (e) {
                    Log$4.log('catch Bluetooth error when device is restarting: ', e);
                }
            }
            else {
                const deviceDiff = yield ((_d = this.device.deviceConnector) === null || _d === void 0 ? void 0 : _d.enumerate());
                const devicesDescriptor = (_e = deviceDiff === null || deviceDiff === void 0 ? void 0 : deviceDiff.descriptors) !== null && _e !== void 0 ? _e : [];
                const { deviceList } = yield DevicePool.getDevices(devicesDescriptor, connectId);
                if (deviceList.length === 1 && ((_g = (_f = deviceList[0]) === null || _f === void 0 ? void 0 : _f.features) === null || _g === void 0 ? void 0 : _g.bootloader_mode)) {
                    this.device.updateFromCache(deviceList[0]);
                    this.device.commands.disposed = false;
                    clearInterval(intervalTimer);
                    (_h = this.checkPromise) === null || _h === void 0 ? void 0 : _h.resolve(true);
                }
            }
        }), isBleReconnect ? 3000 : 2000);
        setTimeout(() => {
            if (this.checkPromise) {
                clearInterval(intervalTimer);
                this.checkPromise.reject(new Error());
            }
        }, 30000);
    }
    run() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { device, params } = this;
            const { features, commands } = device;
            const deviceType = getDeviceType(features);
            if (!(features === null || features === void 0 ? void 0 : features.bootloader_mode) && features) {
                const uuid = getDeviceUUID(features);
                if (isEnteredManuallyBoot(features, params.updateType)) {
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FirmwareUpdateManuallyEnterBoot));
                }
                try {
                    this.postTipMessage('AutoRebootToBootloader');
                    const bootRes = yield commands.typedCall('DeviceBackToBoot', 'Success');
                    if (bootRes.type === 'CallMethodError') {
                        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FirmwareUpdateAutoEnterBootFailure);
                    }
                    this.postTipMessage('GoToBootloaderSuccess');
                    this.checkDeviceToBootloader(this.payload.connectId);
                    if (DeviceModelToTypes.model_classic.includes(deviceType)) {
                        DevicePool.clearDeviceCache(uuid);
                    }
                    delete DevicePool.devicesCache[''];
                    yield ((_a = this.checkPromise) === null || _a === void 0 ? void 0 : _a.promise);
                    this.checkPromise = null;
                    const isTouch = DeviceModelToTypes.model_touch.includes(deviceType);
                    yield wait(isTouch ? 3000 : 1500);
                }
                catch (e) {
                    if (e instanceof hdShared.HardwareError) {
                        return Promise.reject(e);
                    }
                    console.log('auto go to bootloader mode failed: ', e);
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FirmwareUpdateAutoEnterBootFailure));
                }
            }
            let binary;
            try {
                if (params.binary) {
                    binary = this.params.binary;
                }
                else {
                    if (!device.features) {
                        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'no features found for this device');
                    }
                    this.postTipMessage('DownloadFirmware');
                    const firmware = yield getBinary({
                        features: device.features,
                        version: params.version,
                        updateType: params.updateType,
                    });
                    binary = firmware.binary;
                    this.postTipMessage('DownloadFirmwareSuccess');
                }
            }
            catch (err) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FirmwareUpdateDownloadFailed, (_b = err.message) !== null && _b !== void 0 ? _b : err);
            }
            yield this.device.acquire();
            const response = yield uploadFirmware(params.updateType, this.device.getCommands().typedCall.bind(this.device.getCommands()), this.postMessage, device, { payload: binary, rebootOnSuccess: this.payload.rebootOnSuccess });
            if (this.connectId) {
                DevicePool.clearDeviceCache(this.connectId);
            }
            return response;
        });
    }
}

const Log$3 = getLogger(exports.LoggerNames.Method);
class FirmwareUpdateV2 extends BaseMethod {
    constructor() {
        super(...arguments);
        this.checkPromise = null;
        this.postTipMessage = (message) => {
            this.postMessage(createUiMessage(UI_REQUEST.FIRMWARE_TIP, {
                device: this.device.toMessageObject(),
                data: {
                    message,
                },
            }));
        };
    }
    init() {
        this.notAllowDeviceMode = [UI_REQUEST.BOOTLOADER, UI_REQUEST.INITIALIZE];
        this.requireDeviceMode = [];
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
        const { payload } = this;
        validateParams(payload, [
            { name: 'version', type: 'array' },
            { name: 'binary', type: 'buffer' },
            { name: 'forcedUpdateRes', type: 'boolean' },
            { name: 'platform', type: 'string', required: true },
        ]);
        if (!payload.updateType) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'updateType is required');
        }
        this.params = {
            updateType: payload.updateType,
            forcedUpdateRes: payload.forcedUpdateRes,
            isUpdateBootloader: payload.isUpdateBootloader,
        };
        if ('version' in payload) {
            this.params = Object.assign(Object.assign({}, this.params), { version: payload.version });
        }
        if ('binary' in payload) {
            this.params = Object.assign(Object.assign({}, this.params), { binary: payload.binary });
        }
    }
    checkDeviceToBootloader(connectId) {
        this.checkPromise = hdShared.createDeferred();
        const env = DataManager.getSettings('env');
        const isBleReconnect = connectId && DataManager.isBleConnect(env);
        Log$3.log('FirmwareUpdateV2 [checkDeviceToBootloader] isBleReconnect: ', isBleReconnect);
        const intervalTimer = setInterval(() => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (isBleReconnect) {
                try {
                    yield ((_a = this.device.deviceConnector) === null || _a === void 0 ? void 0 : _a.acquire(this.device.originalDescriptor.id, null, true));
                    yield this.device.initialize();
                    if ((_b = this.device.features) === null || _b === void 0 ? void 0 : _b.bootloader_mode) {
                        clearInterval(intervalTimer);
                        (_c = this.checkPromise) === null || _c === void 0 ? void 0 : _c.resolve(true);
                    }
                }
                catch (e) {
                    Log$3.log('catch Bluetooth error when device is restarting: ', e);
                }
            }
            else {
                const deviceDiff = yield ((_d = this.device.deviceConnector) === null || _d === void 0 ? void 0 : _d.enumerate());
                const devicesDescriptor = (_e = deviceDiff === null || deviceDiff === void 0 ? void 0 : deviceDiff.descriptors) !== null && _e !== void 0 ? _e : [];
                const { deviceList } = yield DevicePool.getDevices(devicesDescriptor, connectId);
                if (deviceList.length === 1 && ((_g = (_f = deviceList[0]) === null || _f === void 0 ? void 0 : _f.features) === null || _g === void 0 ? void 0 : _g.bootloader_mode)) {
                    this.device.updateFromCache(deviceList[0]);
                    this.device.commands.disposed = false;
                    clearInterval(intervalTimer);
                    (_h = this.checkPromise) === null || _h === void 0 ? void 0 : _h.resolve(true);
                }
            }
        }), isBleReconnect ? 3000 : 2000);
        setTimeout(() => {
            if (this.checkPromise) {
                clearInterval(intervalTimer);
                this.checkPromise.reject(new Error());
            }
        }, 30000);
    }
    isEnteredManuallyBoot(features) {
        const deviceType = getDeviceType(features);
        const isMini = deviceType === 'mini';
        const isBoot183ClassicUpBle = this.params.updateType === 'firmware' &&
            deviceType === 'classic' &&
            features.bootloader_version === '1.8.3';
        return isMini || isBoot183ClassicUpBle;
    }
    isSupportResourceUpdate(features, updateType) {
        if (updateType !== 'firmware')
            return false;
        const deviceType = getDeviceType(features);
        const isTouchMode = deviceType === 'touch' || deviceType === 'pro';
        const currentVersion = getDeviceFirmwareVersion(features).join('.');
        return isTouchMode && semver__default["default"].gte(currentVersion, '3.2.0');
    }
    checkVersionForCopyTouchResource(features) {
        var _a;
        if (!features)
            return;
        const deviceType = getDeviceType(features);
        const currentVersion = getDeviceFirmwareVersion(features).join('.');
        const targetVersion = (_a = this.params.version) === null || _a === void 0 ? void 0 : _a.join('.');
        const { updateType } = this.params;
        const releaseInfo = getInfo({ features, updateType });
        if (!releaseInfo)
            return;
        const { fullResourceRange } = releaseInfo;
        if (!fullResourceRange)
            return;
        const [minVersion, limitVersion] = fullResourceRange;
        if (deviceType === 'touch' && updateType === 'firmware' && targetVersion) {
            if (semver__default["default"].lt(currentVersion, minVersion) &&
                semver__default["default"].gte(targetVersion, limitVersion) &&
                this.payload.platform !== 'desktop') {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.UseDesktopToUpdateFirmware);
            }
        }
    }
    run() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { device, params } = this;
            const { features, commands } = device;
            const deviceType = getDeviceType(features);
            this.checkVersionForCopyTouchResource(features);
            if (!(features === null || features === void 0 ? void 0 : features.bootloader_mode) && features) {
                const uuid = getDeviceUUID(features);
                if (this.isEnteredManuallyBoot(features)) {
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FirmwareUpdateManuallyEnterBoot));
                }
                if (features && this.isSupportResourceUpdate(features, params.updateType)) {
                    this.postTipMessage('CheckLatestUiResource');
                    const resourceUrl = DataManager.getSysResourcesLatestRelease(features, params.forcedUpdateRes);
                    if (resourceUrl) {
                        this.postTipMessage('DownloadLatestUiResource');
                        const resource = yield getSysResourceBinary(resourceUrl);
                        this.postTipMessage('DownloadLatestUiResourceSuccess');
                        if (resource) {
                            yield updateResources(this.device.getCommands().typedCall.bind(this.device.getCommands()), this.postMessage, device, resource.binary);
                        }
                    }
                }
                try {
                    this.postTipMessage('AutoRebootToBootloader');
                    const bootRes = yield commands.typedCall('DeviceBackToBoot', 'Success');
                    if (bootRes.type === 'CallMethodError') {
                        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FirmwareUpdateAutoEnterBootFailure);
                    }
                    this.postTipMessage('GoToBootloaderSuccess');
                    this.checkDeviceToBootloader(this.payload.connectId);
                    if (DeviceModelToTypes.model_classic.includes(deviceType)) {
                        DevicePool.clearDeviceCache(uuid);
                    }
                    delete DevicePool.devicesCache[''];
                    yield ((_a = this.checkPromise) === null || _a === void 0 ? void 0 : _a.promise);
                    this.checkPromise = null;
                    const isTouch = DeviceModelToTypes.model_touch.includes(deviceType);
                    yield wait(isTouch ? 3000 : 1500);
                }
                catch (e) {
                    if (e instanceof hdShared.HardwareError) {
                        return Promise.reject(e);
                    }
                    console.log('auto go to bootloader mode failed: ', e);
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FirmwareUpdateAutoEnterBootFailure));
                }
            }
            let binary;
            try {
                if (params.binary) {
                    binary = this.params.binary;
                }
                else {
                    if (!device.features) {
                        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'no features found for this device');
                    }
                    this.postTipMessage('DownloadFirmware');
                    const firmware = yield getBinary({
                        features: device.features,
                        version: params.version,
                        updateType: params.updateType,
                        isUpdateBootloader: params.isUpdateBootloader,
                    });
                    binary = firmware.binary;
                    this.postTipMessage('DownloadFirmwareSuccess');
                }
            }
            catch (err) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.FirmwareUpdateDownloadFailed, (_b = err.message) !== null && _b !== void 0 ? _b : err);
            }
            yield this.device.acquire();
            const response = yield uploadFirmware(params.updateType, this.device.getCommands().typedCall.bind(this.device.getCommands()), this.postMessage, device, { payload: binary, rebootOnSuccess: true });
            if (this.connectId) {
                DevicePool.clearDeviceCache(this.connectId);
            }
            return response;
        });
    }
}

const Log$2 = getLogger(exports.LoggerNames.Method);
class RequestWebUsbDevice extends BaseMethod {
    init() {
        this.useDevice = false;
        this.useDevicePassphraseState = false;
        this.skipForceUpdateCheck = true;
    }
    run() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            yield TransportManager.configure();
            const env = DataManager.getSettings('env');
            if (env !== 'webusb') {
                return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'Not webusb environment'));
            }
            try {
                const deviceDiff = yield ((_a = this.connector) === null || _a === void 0 ? void 0 : _a.enumerate());
                const devicesDescriptor = (_b = deviceDiff === null || deviceDiff === void 0 ? void 0 : deviceDiff.descriptors) !== null && _b !== void 0 ? _b : [];
                const { deviceList } = yield DevicePool.getDevices(devicesDescriptor);
                if (deviceList.length > 0) {
                    return { device: deviceList[0].toMessageObject() };
                }
                return yield Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'Please select the device to connect'));
            }
            catch (error) {
                Log$2.debug(error);
                return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'Please select the device to connect'));
            }
        });
    }
}

class CipherKeyValue extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            const addressN = validatePath(batch.path);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'key', type: 'string' },
                { name: 'value', type: 'hexString' },
                { name: 'encrypt', type: 'boolean' },
                { name: 'askOnEncrypt', type: 'boolean' },
                { name: 'askOnDecrypt', type: 'boolean' },
                { name: 'iv', type: 'hexString' },
            ]);
            this.params.push({
                address_n: addressN,
                key: batch.key,
                value: formatAnyHex(batch.value),
                encrypt: batch.encrypt,
                ask_on_encrypt: batch.askOnEncrypt,
                ask_on_decrypt: batch.askOnDecrypt,
                iv: formatAnyHex(batch.iv),
            });
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('CipherKeyValue', 'CipheredKeyValue', Object.assign({}, param));
                responses.push(Object.assign({ path: serializedPath(param.address_n) }, res.message));
            }
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

const Mainnet = 'mainnet';
const networkAliases = {
    tbtc: { name: 'btc', coin: 'Testnet' },
    bch: { name: 'btc', coin: 'Bcash' },
    doge: { name: 'btc', coin: 'Dogecoin' },
    ltc: { name: 'btc', coin: 'Litecoin' },
    neurai: { name: 'btc', coin: 'Neurai' },
};
const networkConfigMap = {
    btc: {
        methodName: 'btcGetPublicKey',
        getParams: (baseParams, chainName) => (Object.assign({ coin: chainName }, baseParams)),
    },
    evm: {
        methodName: 'evmGetAddress',
        getParams: (baseParams, chainName) => {
            const { path, showOnChargerWallet } = baseParams;
            let chainId;
            if (chainName) {
                chainId = parseInt(chainName);
            }
            return {
                chainId,
                path,
                showOnChargerWallet,
            };
        },
    },
    sol: {
        methodName: 'solGetAddress',
    },
    algo: {
        methodName: 'algoGetAddress',
    },
    near: {
        methodName: 'nearGetAddress',
    },
    stc: {
        methodName: 'starcoinGetAddress',
    },
    cfx: {
        methodName: 'confluxGetAddress',
        getParams: (baseParams, chainName) => {
            const { path, showOnChargerWallet } = baseParams;
            return {
                chainId: parseInt(chainName !== null && chainName !== void 0 ? chainName : '1029'),
                path,
                showOnChargerWallet,
            };
        },
    },
    tron: {
        methodName: 'tronGetAddress',
    },
    aptos: {
        methodName: 'aptosGetAddress',
    },
    xrp: {
        methodName: 'xrpGetAddress',
    },
    cosmos: {
        methodName: 'cosmosGetPublicKey',
        getParams: (baseParams) => {
            const { path, prefix, showOnChargerWallet } = baseParams;
            return {
                hrp: prefix,
                path,
                showOnChargerWallet,
            };
        },
    },
    ada: {
        methodName: 'cardanoGetAddress',
        getParams: (baseParams, chainName) => {
            const { path, showOnChargerWallet } = baseParams;
            const addressPath = typeof path === 'string' ? `${path}/0/0` : serializedPath([...path, 0, 0]);
            const stakingPath = typeof path === 'string' ? `${path}/2/0` : serializedPath([...path, 2, 0]);
            let networkId = 1;
            if (chainName) {
                networkId = chainName === Mainnet ? 1 : 0;
            }
            return {
                addressParameters: {
                    addressType: hdTransport.Messages.CardanoAddressType.BASE,
                    path: addressPath,
                    stakingPath,
                },
                protocolMagic: 764824073,
                networkId,
                derivationType: hdTransport.Messages.CardanoDerivationType.ICARUS,
                showOnChargerWallet,
                address: '',
                isCheck: false,
            };
        },
    },
    sui: {
        methodName: 'suiGetAddress',
    },
    fil: {
        methodName: 'filecoinGetAddress',
        getParams: (baseParams, chainName) => {
            const { path, showOnChargerWallet } = baseParams;
            let isTestnet = false;
            if (chainName) {
                isTestnet = chainName !== Mainnet;
            }
            return {
                isTestnet,
                path,
                showOnChargerWallet,
            };
        },
    },
    dot: {
        methodName: 'polkadotGetAddress',
        getParams: (baseParams, chainName) => {
            const { path, prefix, showOnChargerWallet } = baseParams;
            if (!prefix || !chainName) {
                throw new Error('Invalid params');
            }
            return {
                prefix: parseInt(prefix),
                network: chainName,
                path,
                showOnChargerWallet,
            };
        },
    },
    kaspa: {
        methodName: 'kaspaGetAddress',
        getParams: (baseParams) => {
            const { path, prefix, showOnChargerWallet } = baseParams;
            return {
                scheme: 'schnorr',
                prefix,
                path,
                showOnChargerWallet,
            };
        },
    },
    nexa: {
        methodName: 'nexaGetAddress',
        getParams: (baseParams) => {
            const { path, prefix, showOnChargerWallet } = baseParams;
            return {
                scheme: 'Schnorr',
                prefix,
                path,
                showOnChargerWallet,
            };
        },
    },
    dynex: {
        methodName: 'dnxGetAddress',
    },
    nervos: {
        methodName: 'nervosGetAddress',
        getParams: (baseParams, chainName) => {
            const { path, showOnChargerWallet } = baseParams;
            return {
                network: chainName,
                path,
                showOnChargerWallet,
            };
        },
    },
    scdo: {
        methodName: 'scdoGetAddress',
    },
    ton: {
        methodName: 'tonGetAddress',
    },
    alph: {
        methodName: 'alephiumGetAddress',
    },
    nostr: {
        methodName: 'nostrGetPublicKey',
    },
};
class AllNetworkGetAddress extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [{ name: 'bundle', type: 'array' }]);
        this.payload.bundle.forEach((batch) => {
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'network', type: 'string', required: true },
                { name: 'chainName', type: 'string' },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
        });
    }
    generateMethodName({ network, payload, }) {
        var _a, _b, _c;
        const { name: networkName, coin } = networkAliases[network] || {
            name: network,
            coin: payload === null || payload === void 0 ? void 0 : payload.chainName,
        };
        const config = networkConfigMap[networkName];
        if (!config) {
            throw new Error(`Unsupported network: ${network}`);
        }
        const dependOnMethods = (_a = config.dependOnMethodName) === null || _a === void 0 ? void 0 : _a.map(dependOnMethodName => {
            var _a;
            return ({
                methodName: dependOnMethodName,
                params: (_a = config === null || config === void 0 ? void 0 : config.getParams) === null || _a === void 0 ? void 0 : _a.call(config, payload, coin, dependOnMethodName),
            });
        });
        return {
            methodName: config.methodName,
            params: Object.assign(Object.assign({}, ((_c = (_b = config === null || config === void 0 ? void 0 : config.getParams) === null || _b === void 0 ? void 0 : _b.call(config, payload, coin, config.methodName)) !== null && _c !== void 0 ? _c : payload)), { originPayload: payload }),
            dependOnMethods,
        };
    }
    callMethod(methodName, params, baseParams) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const method = findMethod({
                event: IFRAME.CALL,
                type: IFRAME.CALL,
                payload: Object.assign({ connectId: this.payload.connectId, deviceId: this.payload.deviceId, method: methodName }, params),
            });
            method.connector = this.connector;
            method.postMessage = this.postMessage;
            let result;
            try {
                method.init();
                (_a = method.setDevice) === null || _a === void 0 ? void 0 : _a.call(method, this.device);
                const response = yield method.run();
                result = Object.assign(Object.assign({}, baseParams), { success: true, payload: response });
            }
            catch (e) {
                const error = handleSkippableHardwareError(e, this.device, method);
                if (error) {
                    result = Object.assign(Object.assign({}, baseParams), { success: false, payload: {
                            error: error.message,
                            code: error.errorCode,
                            params: error.params,
                            connectId: method.connectId,
                            deviceId: method.deviceId,
                        } });
                }
                else {
                    throw e;
                }
            }
            return result;
        });
    }
    run() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.payload.bundle.length; i++) {
                const param = this.payload.bundle[i];
                const { methodName, params, dependOnMethods } = this.generateMethodName({
                    network: param.network,
                    payload: param,
                });
                const dependOnMethodResults = [];
                for (const dependOnMethod of dependOnMethods !== null && dependOnMethods !== void 0 ? dependOnMethods : []) {
                    const response = yield this.callMethod(dependOnMethod.methodName, dependOnMethod.params, param);
                    dependOnMethodResults.push(response);
                }
                if (dependOnMethodResults.comme(result => !result.success)) {
                    responses.push(Object.assign(Object.assign({}, param), { success: false, payload: (_a = dependOnMethodResults.find(result => !result.success)) === null || _a === void 0 ? void 0 : _a.payload }));
                    return Promise.resolve(responses);
                }
                const response = yield this.callMethod(methodName, params, param);
                const dependOnPayloads = dependOnMethodResults.reduce((acc, cur) => Object.assign(acc, lodash.get(cur, 'payload', {})), {});
                const result = Object.assign(Object.assign({}, response), { payload: Object.assign(Object.assign({}, response.payload), dependOnPayloads) });
                responses.push(result);
                if (((_c = (_b = this.payload) === null || _b === void 0 ? void 0 : _b.bundle) === null || _c === void 0 ? void 0 : _c.length) > 1) {
                    const progress = Math.round(((i + 1) / this.payload.bundle.length) * 100);
                    this.postMessage(createUiMessage(UI_REQUEST.DEVICE_PROGRESS, { progress }));
                }
                this.postPreviousAddressMessage(result);
            }
            return Promise.resolve(responses);
        });
    }
}
function handleSkippableHardwareError(e, device, method) {
    var _a, _b, _c, _d, _e;
    let error;
    if (e instanceof hdShared.HardwareError && e.errorCode !== hdShared.HardwareErrorCode.RuntimeError) {
        const { errorCode } = e;
        if (errorCode === hdShared.HardwareErrorCode.CallMethodInvalidParameter) {
            error = e;
        }
        else if (errorCode === hdShared.HardwareErrorCode.CallMethodNeedUpgradeFirmware) {
            error = e;
        }
    }
    else if ((_a = e.message) === null || _a === void 0 ? void 0 : _a.includes('Failure_UnexpectedMessage')) {
        const versionRange = getMethodVersionRange(device.features, type => method.getVersionRange()[type]);
        const currentVersion = getDeviceFirmwareVersion(device.features).join('.');
        if (versionRange &&
            semver__default["default"].valid(versionRange.min) &&
            semver__default["default"].lt(currentVersion, versionRange.min)) {
            error = hdShared.ERRORS.createNeedUpgradeFirmwareHardwareError(currentVersion, versionRange.min);
        }
        else {
            error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodNotResponse, e.message);
        }
    }
    else if (((_c = (_b = e.message) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === null || _c === void 0 ? void 0 : _c.includes('forbidden key path')) ||
        ((_e = (_d = e.message) === null || _d === void 0 ? void 0 : _d.toLowerCase()) === null || _e === void 0 ? void 0 : _e.includes('invalid path'))) {
        error = hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, e.message);
    }
    return error;
}

var bitcoin = [
	{
		name: "Bitcoin",
		label: "BTC",
		slip44: 0
	},
	{
		name: "Regtest",
		label: "REGTEST",
		slip44: 1
	},
	{
		name: "Testnet",
		label: "TEST",
		slip44: 1
	},
	{
		name: "Actinium",
		label: "ACM",
		slip44: 228
	},
	{
		name: "Axe",
		label: "AXE",
		slip44: 4242
	},
	{
		name: "Bcash",
		label: "BCH",
		slip44: 145
	},
	{
		name: "Bitcore",
		label: "BTX",
		slip44: 160
	},
	{
		name: "Dash",
		label: "DASH",
		slip44: 5
	},
	{
		name: "Dash Testnet",
		label: "tDASH",
		slip44: 1
	},
	{
		name: "Decred",
		label: "DCR",
		slip44: 42
	},
	{
		name: "Decred Testnet",
		label: "TDCR",
		slip44: 1
	},
	{
		name: "DigiByte",
		label: "DGB",
		slip44: 20
	},
	{
		name: "Dogecoin",
		label: "DOGE",
		slip44: 3
	},
	{
		name: "Feathercoin",
		label: "FTC",
		slip44: 8
	},
	{
		name: "Firo",
		label: "FIRO",
		slip44: 136
	},
	{
		name: "Firo Testnet",
		label: "tFIRO",
		slip44: 1
	},
	{
		name: "Fujicoin",
		label: "FJC",
		slip44: 75
	},
	{
		name: "GameCredits",
		label: "GAME",
		slip44: 101
	},
	{
		name: "Komodo",
		label: "KMD",
		slip44: 141
	},
	{
		name: "Koto",
		label: "KOTO",
		slip44: 510
	},
	{
		name: "Litecoin",
		label: "LTC",
		slip44: 2
	},
	{
		name: "Litecoin Testnet",
		label: "tLTC",
		slip44: 1
	},
	{
		name: "Monacoin",
		label: "MONA",
		slip44: 22
	},
	{
		name: "MonetaryUnit",
		label: "MUE",
		slip44: 31
	},
	{
		name: "NIX",
		label: "NIX",
		slip44: 400
	},
	{
		name: "Namecoin",
		label: "NMC",
		slip44: 7
	},
	{
		name: "Peercoin",
		label: "PPC",
		slip44: 6
	},
	{
		name: "Peercoin Testnet",
		label: "tPPC",
		slip44: 1
	},
	{
		name: "Polis",
		label: "POLIS",
		slip44: 1997
	},
	{
		name: "Primecoin",
		label: "XPM",
		slip44: 24
	},
	{
		name: "Ravencoin",
		label: "RVN",
		slip44: 175
	},
	{
		name: "Ritocoin",
		label: "RITO",
		slip44: 19169
	},
	{
		name: "Stakenet",
		label: "XSN",
		slip44: 199
	},
	{
		name: "Syscoin",
		label: "SYS",
		slip44: 57
	},
	{
		name: "Unobtanium",
		label: "UNO",
		slip44: 92
	},
	{
		name: "Verge",
		label: "XVG",
		slip44: 77
	},
	{
		name: "Vertcoin",
		label: "VTC",
		slip44: 28
	},
	{
		name: "Viacoin",
		label: "VIA",
		slip44: 14
	},
	{
		name: "ZCore",
		label: "ZCR",
		slip44: 428
	},
	{
		name: "Zcash",
		label: "ZEC",
		slip44: 133
	},
	{
		name: "Zcash Testnet",
		label: "TAZ",
		slip44: 1
	},
	{
		name: "Neurai",
		label: "XNA",
		slip44: 1900
	}
];

const getCoinInfo = (path, coin) => {
    let coinInfo;
    if (coin) {
        const coinName = coin.toLowerCase();
        coinInfo = bitcoin.find(c => c.name.toLowerCase() === coinName || c.label.toLowerCase() === coinName);
    }
    else if (path) {
        const slip44 = fromHardened(path[1]);
        coinInfo = bitcoin.find(c => c.slip44 === slip44);
    }
    if (!coinInfo) {
        if (coin) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, `Invalid coin name: ${coin}`);
        }
        else if (path) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, `Invalid path: ${path[0]}`);
        }
        else {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter);
        }
    }
    return coinInfo;
};
const getCoinAndScriptType = (path, coin, multisig) => {
    const coinName = getCoinInfo(path, coin).name;
    let isMultisig = multisig;
    if (isMultisig === undefined) {
        isMultisig = isMultisigPath(path);
    }
    let scriptType = getScriptType(path);
    if (scriptType === 'SPENDMULTISIG' && !isMultisig) {
        scriptType = 'SPENDADDRESS';
    }
    return {
        coinName,
        scriptType: scriptType !== null && scriptType !== void 0 ? scriptType : 'SPENDADDRESS',
    };
};

function isCoinNameInList(coinName, coinNames) {
    for (let i = 0; i < coinNames.length; i++) {
        const coin_name = coinNames[i];
        if ((coin_name === null || coin_name === void 0 ? void 0 : coin_name.toLowerCase()) === (coinName === null || coinName === void 0 ? void 0 : coinName.toLowerCase())) {
            return true;
        }
    }
    return false;
}
function getBitcoinForkVersionRange(params) {
    if (isCoinNameInList('Neurai', params)) {
        return {
            model_mini: {
                min: '3.7.0',
            },
            model_touch: {
                min: '4.9.0',
            },
        };
    }
    return {};
}

class BTCGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = Object.prototype.hasOwnProperty.call(this.payload, 'bundle');
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 1);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'coin', type: 'string' },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'multisig', type: 'object' },
                { name: 'scriptType', type: 'string' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            const { multisig, coin } = batch;
            let { scriptType } = batch;
            if (!scriptType) {
                scriptType = getScriptType(addressN);
                if (scriptType === 'SPENDMULTISIG' && !multisig) {
                    scriptType = 'SPENDADDRESS';
                }
            }
            const coinName = getCoinInfo(addressN, coin).name;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
                coin_name: coinName,
                multisig,
                script_type: scriptType || 'SPENDADDRESS',
            });
        });
    }
    getVersionRange() {
        return getBitcoinForkVersionRange(this.params.map(param => param.coin_name));
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('GetAddress', 'Address', Object.assign({}, param));
                const path = serializedPath(param.address_n);
                responses.push(Object.assign({ path }, res.message));
                this.postPreviousAddressMessage({
                    address: res.message.address,
                    path,
                });
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class BTCGetPublicKey extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = Object.prototype.hasOwnProperty.call(this.payload, 'bundle');
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 1);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'coin', type: 'string' },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'scriptType', type: 'string' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            const { multisig, coin } = batch;
            let { scriptType } = batch;
            if (!scriptType) {
                scriptType = getScriptType(addressN);
                if (scriptType === 'SPENDMULTISIG' && !multisig) {
                    scriptType = 'SPENDADDRESS';
                }
            }
            const coinName = getCoinInfo(addressN, coin).name;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
                coin_name: coinName,
                script_type: scriptType || 'SPENDADDRESS',
            });
        });
    }
    isBtcNetwork(param) {
        return param.coin_name === 'Testnet' || param.coin_name === 'Bitcoin';
    }
    getVersionRange() {
        return getBitcoinForkVersionRange(this.params.map(param => param.coin_name));
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('GetPublicKey', 'PublicKey', Object.assign({}, param));
                const response = Object.assign(Object.assign({ path: serializedPath(param.address_n) }, res.message), { xpubSegwit: res.message.xpub });
                if (this.isBtcNetwork(param) && isTaprootPath(param.address_n)) {
                    const fingerprint = Number(response.root_fingerprint || 0)
                        .toString(16)
                        .padStart(8, '0');
                    const descriptorPath = `${fingerprint}${response.path.substring(1)}`;
                    response.xpubSegwit = `tr([${descriptorPath}]${response.xpub}/<0;1>/*)`;
                }
                responses.push(response);
            }
            validateResult(responses, ['xpub'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class BTCSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
            { name: 'coin', type: 'string' },
            { name: 'noScriptType', type: 'boolean' },
            { name: 'dAppSignType', type: 'string' },
        ]);
        const { path, messageHex, coin, noScriptType: _noScriptType, dAppSignType } = this.payload;
        let noScriptType = _noScriptType;
        let isBip322Simple = false;
        const addressN = validatePath(path);
        const { coinName, scriptType } = getCoinAndScriptType(addressN, coin, false);
        let finalScriptType = scriptType;
        if (dAppSignType === 'ecdsa' || dAppSignType === 'bip322-simple') {
            if (dAppSignType === 'ecdsa') {
                noScriptType = true;
            }
            else {
                isBip322Simple = true;
                noScriptType = false;
            }
        }
        else {
            finalScriptType = noScriptType ? undefined : scriptType;
        }
        this.params = {
            address_n: addressN,
            message: formatAnyHex(messageHex),
            coin_name: coinName,
            script_type: finalScriptType,
            no_script_type: noScriptType,
            is_bip322_simple: isBip322Simple,
        };
    }
    getVersionRange() {
        if (this.payload.dAppSignType) {
            return {
                pro: {
                    min: '4.9.3',
                },
            };
        }
        return getBitcoinForkVersionRange([this.params.coin_name]);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('SignMessage', 'MessageSignature', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class BTCSignPsbt extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'psbt', type: 'hexString', required: true },
            { name: 'coin', type: 'string' },
        ]);
        const { psbt, coin } = this.payload;
        const coinInfo = getCoinInfo(undefined, coin);
        this.params = {
            psbt: formatAnyHex(psbt),
            coin_name: coinInfo.name,
        };
    }
    getVersionRange() {
        return {
            pro: {
                min: '4.9.3',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('SignPsbt', 'SignedPsbt', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

const requestPrevTxInfo$1 = ({ typedCall, txRequest: { request_type, details }, refTxs }) => {
    const { tx_hash } = details;
    if (!tx_hash) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestPrevTxInfo: unknown details.tx_hash');
    }
    const tx = refTxs[tx_hash.toLowerCase()];
    if (!tx) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: Requested unknown tx: ${tx_hash}`);
    }
    if (request_type === 'TXINPUT') {
        if (!tx.bin_outputs)
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: Requested unknown TXINPUT: ${tx_hash}`);
        return typedCall('TxAckPrevInput', 'TxRequest', {
            tx: { input: tx.inputs[details.request_index] },
        });
    }
    if (request_type === 'TXOUTPUT') {
        if (!tx.bin_outputs)
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: Requested unknown TXOUTPUT: ${tx_hash}`);
        return typedCall('TxAckPrevOutput', 'TxRequest', {
            tx: { output: tx.bin_outputs[details.request_index] },
        });
    }
    if (request_type === 'TXORIGINPUT') {
        if (!tx.outputs)
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: Requested unknown TXORIGINPUT: ${tx_hash}`);
        return typedCall('TxAckInput', 'TxRequest', {
            tx: { input: tx.inputs[details.request_index] },
        });
    }
    if (request_type === 'TXORIGOUTPUT') {
        if (!tx.outputs)
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: Requested unknown TXORIGOUTPUT: ${tx_hash}`);
        return typedCall('TxAckOutput', 'TxRequest', {
            tx: { output: tx.outputs[details.request_index] },
        });
    }
    if (request_type === 'TXEXTRADATA') {
        if (typeof details.extra_data_len !== 'number') {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestPrevTxInfo: Missing extra_data_len');
        }
        if (typeof details.extra_data_offset !== 'number') {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestPrevTxInfo: Missing extra_data_offset');
        }
        if (typeof tx.extra_data !== 'string') {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: No extra data for transaction ${tx.hash}`);
        }
        const data = tx.extra_data;
        const dataLen = details.extra_data_len;
        const dataOffset = details.extra_data_offset;
        const extra_data_chunk = data.substring(dataOffset * 2, (dataOffset + dataLen) * 2);
        return typedCall('TxAckPrevExtraData', 'TxRequest', { tx: { extra_data_chunk } });
    }
    if (request_type === 'TXMETA') {
        const data = tx.extra_data;
        const meta = {
            version: tx.version,
            lock_time: tx.lock_time,
            inputs_count: tx.inputs.length,
            outputs_count: tx.outputs ? tx.outputs.length : tx.bin_outputs.length,
            timestamp: tx.timestamp,
            version_group_id: tx.version_group_id,
            expiry: tx.expiry,
            branch_id: tx.branch_id,
            extra_data_len: data ? data.length / 2 : undefined,
        };
        return typedCall('TxAckPrevMeta', 'TxRequest', { tx: meta });
    }
    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: Unknown request type: ${request_type}`);
};
const requestSignedTxInfo$1 = ({ typedCall, txRequest: { request_type, details }, inputs, outputs, }) => {
    if (request_type === 'TXINPUT') {
        return typedCall('TxAckInput', 'TxRequest', { tx: { input: inputs[details.request_index] } });
    }
    if (request_type === 'TXOUTPUT') {
        return typedCall('TxAckOutput', 'TxRequest', {
            tx: { output: outputs[details.request_index] },
        });
    }
    if (request_type === 'TXMETA') {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestSignedTxInfo: Cannot read TXMETA from signed transaction');
    }
    if (request_type === 'TXEXTRADATA') {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestSignedTxInfo: Cannot read TXEXTRADATA from signed transaction');
    }
    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestSignedTxInfo: Unknown request type: ${request_type}`);
};
const requestTxAck$1 = (props) => {
    const { tx_hash } = props.txRequest.details;
    if (tx_hash) {
        return requestPrevTxInfo$1(props);
    }
    return requestSignedTxInfo$1(props);
};
const saveTxSignatures$1 = (serializedTx, signatures, txRequest) => {
    if (!txRequest)
        return;
    const { signature_index, signature, serialized_tx } = txRequest;
    if (serialized_tx) {
        serializedTx.push(serialized_tx);
    }
    if (typeof signature_index === 'number') {
        if (!signature) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'saveTxSignatures: Unexpected null in trezor:TxRequestSerialized signature.');
        }
        signatures[signature_index] = signature;
    }
};
const processTxRequest$2 = (props) => __awaiter(void 0, void 0, void 0, function* () {
    const { typedCall, txRequest, refTxs, inputs, outputs, serializedTx, signatures } = props;
    saveTxSignatures$1(serializedTx, signatures, txRequest.serialized);
    if (txRequest.request_type === 'TXFINISHED') {
        return Promise.resolve({
            signatures,
            serializedTx: serializedTx.join(''),
        });
    }
    const { message } = yield requestTxAck$1(props);
    return processTxRequest$2({
        typedCall,
        txRequest: message,
        refTxs,
        inputs,
        outputs,
        serializedTx,
        signatures,
    });
});
var signtx = (typedCall, inputs, outputs, refTxsArray, options, coinName) => __awaiter(void 0, void 0, void 0, function* () {
    const refTxs = {};
    refTxsArray.forEach(tx => {
        refTxs[tx.hash.toLowerCase()] = tx;
    });
    const { message } = yield typedCall('SignTx', 'TxRequest', Object.assign(Object.assign({}, options), { inputs_count: inputs.length, outputs_count: outputs.length, coin_name: coinName }));
    return processTxRequest$2({
        typedCall,
        txRequest: message,
        refTxs,
        inputs,
        outputs,
        serializedTx: [],
        signatures: [],
    });
});

const requestPrevTxInfo = ({ txRequest: { request_type, details }, refTxs, }) => {
    const { tx_hash } = details;
    if (!tx_hash) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestPrevTxInfo: unknown details.tx_hash');
    }
    const tx = refTxs[tx_hash.toLowerCase()];
    if (!tx) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: Requested unknown tx: ${tx_hash}`);
    }
    if (!tx.bin_outputs) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: bin_outputs not set tx: ${tx_hash}`);
    }
    if (request_type === 'TXINPUT') {
        return { inputs: [tx.inputs[details.request_index]] };
    }
    if (request_type === 'TXOUTPUT') {
        return { bin_outputs: [tx.bin_outputs[details.request_index]] };
    }
    if (request_type === 'TXEXTRADATA') {
        if (typeof details.extra_data_len !== 'number') {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestPrevTxInfo: Missing extra_data_len');
        }
        if (typeof details.extra_data_offset !== 'number') {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestPrevTxInfo: Missing extra_data_offset');
        }
        if (typeof tx.extra_data !== 'string') {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: No extra data for transaction ${tx.hash}`);
        }
        const data = tx.extra_data;
        const dataLen = details.extra_data_len;
        const dataOffset = details.extra_data_offset;
        const extra_data = data.substring(dataOffset * 2, (dataOffset + dataLen) * 2);
        return { extra_data };
    }
    if (request_type === 'TXMETA') {
        const data = tx.extra_data;
        const meta = {
            version: tx.version,
            lock_time: tx.lock_time,
            inputs_cnt: tx.inputs.length,
            outputs_cnt: tx.bin_outputs.length,
            timestamp: tx.timestamp,
            version_group_id: tx.version_group_id,
            expiry: tx.expiry,
            branch_id: tx.branch_id,
        };
        if (typeof data === 'string' && data.length !== 0) {
            return Object.assign(Object.assign({}, meta), { extra_data_len: data.length / 2 });
        }
        return meta;
    }
    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestPrevTxInfo: Unknown request type: ${request_type}`);
};
const requestSignedTxInfo = ({ txRequest: { request_type, details }, inputs, outputs, }) => {
    if (request_type === 'TXINPUT') {
        return { inputs: [inputs[details.request_index]] };
    }
    if (request_type === 'TXOUTPUT') {
        return { outputs: [outputs[details.request_index]] };
    }
    if (request_type === 'TXMETA') {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestSignedTxInfo: Cannot read TXMETA from signed transaction');
    }
    if (request_type === 'TXEXTRADATA') {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'requestSignedTxInfo: Cannot read TXEXTRADATA from signed transaction');
    }
    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `requestSignedTxInfo: Unknown request type: ${request_type}`);
};
const requestTxAck = (props) => {
    const { tx_hash } = props.txRequest.details;
    if (tx_hash) {
        return requestPrevTxInfo(props);
    }
    return requestSignedTxInfo(props);
};
const saveTxSignatures = (serializedTx, signatures, txRequest) => {
    if (!txRequest)
        return;
    const { signature_index, signature, serialized_tx } = txRequest;
    if (serialized_tx) {
        serializedTx.push(serialized_tx);
    }
    if (typeof signature_index === 'number') {
        if (!signature) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'saveTxSignatures: Unexpected null in chargerwallet:TxRequestSerialized signature.');
        }
        signatures[signature_index] = signature;
    }
};
const processTxRequest$1 = (props) => __awaiter(void 0, void 0, void 0, function* () {
    const { typedCall, txRequest, refTxs, inputs, outputs, serializedTx, signatures } = props;
    saveTxSignatures(serializedTx, signatures, txRequest.serialized);
    if (txRequest.request_type === 'TXFINISHED') {
        return Promise.resolve({
            signatures,
            serializedTx: serializedTx.join(''),
        });
    }
    const txAck = requestTxAck(props);
    const { message } = yield typedCall('TxAck', 'TxRequest', { tx: txAck });
    return processTxRequest$1({
        typedCall,
        txRequest: message,
        refTxs,
        inputs,
        outputs,
        serializedTx,
        signatures,
    });
});
var signtxLegacy = (typedCall, inputs, outputs, refTxsArray, options, coinName) => __awaiter(void 0, void 0, void 0, function* () {
    const refTxs = {};
    refTxsArray.forEach(tx => {
        refTxs[tx.hash.toLowerCase()] = tx;
    });
    const { message } = yield typedCall('SignTx', 'TxRequest', Object.assign(Object.assign({}, options), { inputs_count: inputs.length, outputs_count: outputs.length, coin_name: coinName }));
    return processTxRequest$1({
        typedCall,
        txRequest: message,
        refTxs,
        inputs,
        outputs,
        serializedTx: [],
        signatures: [],
    });
});

class BTCSignTransaction extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'coin', type: 'string', required: true },
            { name: 'inputs', type: 'array', required: true },
            { name: 'outputs', type: 'array', required: true },
            { name: 'refTxs', type: 'array', required: true, allowEmpty: true },
            { name: 'locktime', type: 'number' },
            { name: 'version', type: 'number' },
            { name: 'expiry', type: 'number' },
            { name: 'overwintered', type: 'boolean' },
            { name: 'versionGroupId', type: 'number' },
            { name: 'branchId', type: 'number' },
            { name: 'timestamp', type: 'number' },
        ]);
        this.payload.refTxs.forEach((tx) => {
            validateParams(tx, [
                { name: 'hash', type: 'hexString', required: true },
                { name: 'inputs', type: 'array', required: true },
                { name: 'bin_outputs', type: 'array', required: !Array.isArray(tx.outputs) },
                { name: 'outputs', type: 'array' },
                { name: 'version', type: 'number', required: true },
                { name: 'lock_time', type: 'number', required: true },
                { name: 'extra_data', type: 'string' },
                { name: 'timestamp', type: 'number' },
                { name: 'version_group_id', type: 'number' },
            ]);
        });
        this.payload.inputs.forEach((input) => {
            validatePath(input.address_n);
            const useAmount = isSegwitPath(input.address_n);
            validateParams(input, [
                { name: 'prev_hash', type: 'hexString', required: true },
                { name: 'prev_index', type: 'number', required: true },
                { name: 'script_type', type: 'string' },
                { name: 'amount', type: 'string', required: useAmount },
                { name: 'sequence', type: 'number' },
                { name: 'multisig', type: 'object' },
            ]);
        });
        this.payload.outputs.forEach((output) => {
            validateParams(output, [
                { name: 'address_n', type: 'array' },
                { name: 'address', type: 'string' },
                { name: 'amount', type: 'string' },
                { name: 'op_return_data', type: 'string' },
                { name: 'multisig', type: 'object' },
            ]);
            if (Object.prototype.hasOwnProperty.call(output, 'address_n') &&
                Object.prototype.hasOwnProperty.call(output, 'address')) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'Cannot use address and address_n in one output');
            }
            if (output.address_n) {
                const scriptType = getOutputScriptType(output.address_n);
                if (output.script_type !== scriptType)
                    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, `Output change script_type should be set to ${scriptType}`);
            }
        });
        const { inputs, outputs, refTxs, account, coin } = this.payload;
        const coinName = getCoinInfo(undefined, coin).name;
        this.params = {
            inputs,
            outputs,
            refTxs,
            addresses: account ? account.addresses : undefined,
            options: {
                lock_time: this.payload.locktime,
                timestamp: this.payload.timestamp,
                version: this.payload.version,
                expiry: this.payload.expiry,
                overwintered: this.payload.overwintered,
                version_group_id: this.payload.versionGroupId,
                branch_id: this.payload.branchId,
            },
            coinName,
        };
    }
    getVersionRange() {
        return getBitcoinForkVersionRange([this.params.coinName]);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { device, params } = this;
            const useLegacySignProcess = device.unavailableCapabilities.replaceTransaction;
            const { refTxs } = params;
            const signTxMethod = !useLegacySignProcess ? signtx : signtxLegacy;
            const response = yield signTxMethod(device.commands.typedCall.bind(device.commands), params.inputs, params.outputs, refTxs, params.options, params.coinName);
            return response;
        });
    }
}

class BTCVerifyMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'address', type: 'string', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
            { name: 'signature', type: 'hexString', required: true },
            { name: 'coin', type: 'string', required: true },
        ]);
        const { coin } = this.payload;
        const { address, messageHex, signature } = formatAnyHex(this.payload);
        const coinName = getCoinInfo(undefined, coin).name;
        this.params = {
            address,
            message: messageHex,
            signature,
            coin_name: coinName,
        };
    }
    getVersionRange() {
        return getBitcoinForkVersionRange([this.params.coin_name]);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('VerifyMessage', 'Success', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class ConfluxGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a, _b;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'chainId', type: 'number' },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                chain_id: (_b = batch.chainId) !== null && _b !== void 0 ? _b : 1029,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.4.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('ConfluxGetAddress', 'ConfluxAddress', Object.assign({}, param));
                const path = serializedPath(param.address_n);
                responses.push(Object.assign({ path }, res.message));
                this.postPreviousAddressMessage({
                    path,
                    address: res.message.address,
                });
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class ConfluxSignMessage extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
        ]);
        const { path, messageHex } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            message: formatAnyHex(messageHex),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.4.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('ConfluxSignMessage', 'ConfluxMessageSignature', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class ConfluxSignMessageCIP23 extends BaseMethod {
    init() {
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'domainHash', type: 'hexString', required: true },
            { name: 'messageHash', type: 'hexString', required: true },
        ]);
        const { path, domainHash, messageHash } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            domain_hash: formatAnyHex(domainHash),
            message_hash: formatAnyHex(messageHash),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.4.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('ConfluxSignMessageCIP23', 'ConfluxMessageSignature', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

const cutString = (str, cutLen) => {
    if (!str) {
        return ['', ''];
    }
    const first = str.slice(0, cutLen);
    const second = str.slice(cutLen);
    return [first, second];
};

class ConfluxSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.addressN = [];
        this.processTxRequest = (request, data) => __awaiter(this, void 0, void 0, function* () {
            if (!request.data_length) {
                const v = request.signature_v;
                const r = request.signature_r;
                const s = request.signature_s;
                if (v == null || r == null || s == null) {
                    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodError, 'sign transaction failed');
                }
                return Promise.resolve({
                    v: `0x${v.toString(16)}`,
                    r: `0x${r}`,
                    s: `0x${s}`,
                });
            }
            const [first, rest] = cutString(data, request.data_length * 2);
            const response = yield this.device.commands.typedCall('ConfluxTxAck', 'ConfluxTxRequest', {
                data_chunk: first,
            });
            return this.processTxRequest(response.message, rest);
        });
        this.evmSignTx = (addressN, tx) => __awaiter(this, void 0, void 0, function* () {
            const { to, value, gasPrice, gasLimit, nonce, data, chainId, epochHeight, storageLimit } = tx;
            const length = data == null ? 0 : data.length / 2;
            const [first, rest] = cutString(data, 1024 * 2);
            let message = {
                address_n: addressN,
                nonce: stripHexStartZeroes(nonce),
                gas_price: stripHexStartZeroes(gasPrice),
                gas_limit: stripHexStartZeroes(gasLimit),
                to,
                value: stripHexStartZeroes(value),
                epoch_height: stripHexStartZeroes(epochHeight),
                storage_limit: stripHexStartZeroes(storageLimit),
                chain_id: chainId,
            };
            if (length !== 0) {
                message = Object.assign(Object.assign({}, message), { data_length: length, data_initial_chunk: first });
            }
            const response = yield this.device.commands.typedCall('ConfluxSignTx', 'ConfluxTxRequest', message);
            return this.processTxRequest(response.message, rest);
        });
    }
    init() {
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'transaction', type: 'object', required: true },
        ]);
        const { path, transaction } = this.payload;
        this.addressN = validatePath(path, 3);
        const tx = transaction;
        const schema = [
            { name: 'to', type: 'hexString', required: true },
            { name: 'value', type: 'hexString', required: true },
            { name: 'gasLimit', type: 'hexString', required: true },
            { name: 'gasPrice', type: 'hexString', required: true },
            { name: 'nonce', type: 'hexString', required: true },
            { name: 'epochHeight', type: 'hexString', required: true },
            { name: 'storageLimit', type: 'hexString', required: true },
            { name: 'chainId', type: 'number', required: true },
            { name: 'data', type: 'hexString' },
        ];
        validateParams(tx, schema);
        this.formattedTx = formatAnyHex(tx);
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.4.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { addressN, formattedTx } = this;
            if (formattedTx == null) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'ConfluxSignTransaction: format tx error');
            }
            const signedTx = yield this.evmSignTx(addressN, formattedTx);
            return Promise.resolve(signedTx);
        });
    }
}

function getAddressLegacyV1 ({ typedCall, param, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return typedCall('EthereumGetAddress', 'EthereumAddress', {
            address_n: param.address_n,
            show_display: param.show_display,
            chain_id: param.chain_id,
        });
    });
}

function getAddress ({ typedCall, param, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return typedCall('EthereumGetAddressChargerWallet', 'EthereumAddressChargerWallet', Object.assign({}, param));
    });
}

class EvmGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'chainId', type: 'number' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
                chain_id: batch.chainId,
            });
        });
    }
    getEvmAddress(param) {
        return __awaiter(this, void 0, void 0, function* () {
            if (TransportManager.getMessageVersion() === 'v1') {
                return getAddressLegacyV1({
                    typedCall: this.device.commands.typedCall.bind(this.device.commands),
                    param,
                });
            }
            return getAddress({
                typedCall: this.device.commands.typedCall.bind(this.device.commands),
                param,
            });
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.getEvmAddress(param);
                const { address } = res.message;
                if (!address) {
                    throw new Error('EthereumGetAddressChargerWallet: address is undefined');
                }
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

function getPublicKey ({ typedCall, param, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return typedCall('EthereumGetPublicKeyChargerWallet', 'EthereumPublicKeyChargerWallet', Object.assign({}, param));
    });
}

function getPublicKeyLegacyV1 ({ typedCall, param, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return typedCall('EthereumGetPublicKey', 'EthereumPublicKey', {
            address_n: param.address_n,
            show_display: param.show_display,
            chain_id: param.chain_id,
        });
    });
}

class EVMGetPublicKey extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
        this.useBatch = false;
    }
    init() {
        var _a, _b;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        this.useBatch = !!((_b = this.payload) === null || _b === void 0 ? void 0 : _b.useBatch);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'chainId', type: 'number' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
                chain_id: batch.chainId,
            });
        });
    }
    getEvmPublicKey(param) {
        if (TransportManager.getMessageVersion() === 'v1') {
            return getPublicKeyLegacyV1({
                typedCall: this.device.commands.typedCall.bind(this.device.commands),
                param,
            });
        }
        return getPublicKey({
            typedCall: this.device.commands.typedCall.bind(this.device.commands),
            param,
        });
    }
    run() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            if (this.useBatch && this.hasBundle && supportBatchPublicKey((_a = this.device) === null || _a === void 0 ? void 0 : _a.features)) {
                const res = yield this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
                    paths: this.params,
                    ecdsa_curve_name: 'secp256k1',
                });
                const result = res.message.public_keys.map((publicKey, index) => ({
                    path: serializedPath(this.params[index].address_n),
                    pub: publicKey,
                    publicKey,
                }));
                validateResult(responses, ['pub'], {
                    expectedLength: this.params.length,
                });
                return Promise.resolve(result);
            }
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.getEvmPublicKey(param);
                responses.push(Object.assign({ path: serializedPath(param.address_n), pub: res.message.node.public_key, publicKey: res.message.node.public_key }, res.message));
            }
            validateResult(responses, ['pub'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

function signMessage ({ typedCall, params, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield typedCall('EthereumSignMessageChargerWallet', 'EthereumMessageSignatureChargerWallet', Object.assign({}, params));
        return Promise.resolve(res.message);
    });
}

function signMessageLegacyV1 ({ typedCall, params, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield typedCall('EthereumSignMessage', 'EthereumMessageSignature', {
            address_n: params.address_n,
            message: params.message,
            chain_id: params.chain_id,
        });
        return Promise.resolve(res.message);
    });
}

class EVMSignMessage$2 extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
            { name: 'chainId', type: 'number' },
        ]);
        const { path, messageHex, chainId } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            message: formatAnyHex(messageHex),
            chain_id: chainId,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (TransportManager.getMessageVersion() === 'v1') {
                return signMessageLegacyV1({
                    typedCall: this.device.commands.typedCall.bind(this.device.commands),
                    params: this.params,
                });
            }
            return signMessage({
                typedCall: this.device.commands.typedCall.bind(this.device.commands),
                params: this.params,
            });
        });
    }
}

class EVMSignMessageEIP712 extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'domainHash', type: 'hexString', required: true },
            { name: 'messageHash', type: 'hexString', required: true },
        ]);
        const { path, domainHash, messageHash } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            domain_hash: formatAnyHex(domainHash),
            message_hash: formatAnyHex(messageHash),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.1.9',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('EthereumSignMessageEIP712', 'EthereumMessageSignature', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

const processTxRequest = ({ typedCall, request, data, chainId, supportTrezor, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!request.data_length) {
        let v = request.signature_v;
        const r = request.signature_r;
        const s = request.signature_s;
        if (v == null || r == null || s == null) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'processTxRequest: Unexpected request');
        }
        if (chainId && v <= 1) {
            v += 2 * chainId + 35;
        }
        return Promise.resolve({
            v: `0x${v.toString(16)}`,
            r: `0x${r}`,
            s: `0x${s}`,
        });
    }
    const [first, rest] = cutString(data, request.data_length * 2);
    let response;
    if (supportTrezor) {
        response = yield typedCall('EthereumTxAck', 'EthereumTxRequest', {
            data_chunk: first,
        });
    }
    else {
        response = yield typedCall('EthereumTxAckChargerWallet', 'EthereumTxRequestChargerWallet', {
            data_chunk: first,
        });
    }
    return processTxRequest({
        typedCall,
        request: response.message,
        data: rest,
        chainId,
        supportTrezor,
    });
});
const evmSignTx = ({ typedCall, addressN, tx, supportTrezor, }) => __awaiter(void 0, void 0, void 0, function* () {
    const { to, value, gasPrice, gasLimit, nonce, data, chainId, txType } = tx;
    const length = data == null ? 0 : data.length / 2;
    const [first, rest] = cutString(data, 1024 * 2);
    let message = {
        address_n: addressN,
        nonce: stripHexStartZeroes(nonce),
        gas_price: stripHexStartZeroes(gasPrice),
        gas_limit: stripHexStartZeroes(gasLimit),
        to,
        value: stripHexStartZeroes(value),
        chain_id: chainId,
    };
    if (length !== 0) {
        message = Object.assign(Object.assign({}, message), { data_length: length, data_initial_chunk: first });
    }
    if (txType !== null) {
        message = Object.assign(Object.assign({}, message), { tx_type: txType });
    }
    let response;
    if (supportTrezor) {
        response = yield typedCall('EthereumSignTx', 'EthereumTxRequest', message);
    }
    else {
        response = yield typedCall('EthereumSignTxChargerWallet', 'EthereumTxRequestChargerWallet', message);
    }
    return processTxRequest({
        typedCall,
        request: response.message,
        data: rest,
        chainId,
        supportTrezor,
    });
});
const evmSignTxEip1559 = ({ typedCall, addressN, tx, supportTrezor, }) => __awaiter(void 0, void 0, void 0, function* () {
    const { to, value, gasLimit, nonce, data, chainId, maxFeePerGas, maxPriorityFeePerGas, accessList, } = tx;
    const length = data == null ? 0 : data.length / 2;
    const [first, rest] = cutString(data, 1024 * 2);
    const message = {
        address_n: addressN,
        nonce: stripHexStartZeroes(nonce),
        max_gas_fee: stripHexStartZeroes(maxFeePerGas),
        max_priority_fee: stripHexStartZeroes(maxPriorityFeePerGas),
        gas_limit: stripHexStartZeroes(gasLimit),
        to,
        value: stripHexStartZeroes(value),
        data_length: length,
        data_initial_chunk: first,
        chain_id: chainId,
        access_list: (accessList || []).map(a => ({
            address: a.address,
            storage_keys: a.storageKeys,
        })),
    };
    let response;
    if (supportTrezor) {
        response = yield typedCall('EthereumSignTxEIP1559', 'EthereumTxRequest', message);
    }
    else {
        response = yield typedCall('EthereumSignTxEIP1559ChargerWallet', 'EthereumTxRequestChargerWallet', message);
    }
    return processTxRequest({ typedCall, request: response.message, data: rest, supportTrezor });
});
const signTransaction$1 = ({ typedCall, isEIP1559, addressN, tx, }) => __awaiter(void 0, void 0, void 0, function* () {
    return isEIP1559
        ? evmSignTxEip1559({ typedCall, addressN, tx: tx })
        : evmSignTx({ typedCall, addressN, tx: tx });
});

const signTransaction = ({ typedCall, isEIP1559, addressN, tx, }) => __awaiter(void 0, void 0, void 0, function* () {
    return isEIP1559
        ? evmSignTxEip1559({
            typedCall,
            addressN,
            tx: tx,
            supportTrezor: true,
        })
        : evmSignTx({ typedCall, addressN, tx: tx, supportTrezor: true });
});

class EVMSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.addressN = [];
        this.isEIP1559 = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'transaction', type: 'object', required: true },
        ]);
        const { path, transaction } = this.payload;
        this.addressN = validatePath(path, 3);
        const tx = transaction;
        this.isEIP1559 = !!tx.maxFeePerGas && !!tx.maxPriorityFeePerGas;
        const schema = [
            { name: 'to', type: 'hexString', required: true },
            { name: 'value', type: 'hexString', required: true },
            { name: 'gasLimit', type: 'hexString', required: true },
            { name: 'nonce', type: 'hexString', required: true },
            { name: 'chainId', type: 'number', required: true },
            { name: 'data', type: 'hexString' },
        ];
        if (this.isEIP1559) {
            schema.push({ name: 'maxFeePerGas', type: 'hexString', required: true });
            schema.push({ name: 'maxPriorityFeePerGas', type: 'hexString', required: true });
        }
        else {
            schema.push({ name: 'gasPrice', type: 'hexString', required: true });
            schema.push({ name: 'txType', type: 'number' });
        }
        validateParams(tx, schema);
        this.formattedTx = formatAnyHex(tx);
    }
    getVersionRange() {
        if (this.isEIP1559) {
            return {
                model_mini: {
                    min: '2.1.11',
                },
            };
        }
        return {
            model_mini: {
                min: '1.0.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { addressN, isEIP1559, formattedTx } = this;
            if (formattedTx == null)
                throw hdShared.ERRORS.TypedError('Runtime', 'formattedTx is not set');
            if (TransportManager.getMessageVersion() === 'v1') {
                return signTransaction({
                    typedCall: this.device.commands.typedCall.bind(this.device.commands),
                    addressN,
                    tx: formattedTx,
                    isEIP1559,
                });
            }
            return signTransaction$1({
                typedCall: this.device.commands.typedCall.bind(this.device.commands),
                addressN,
                tx: formattedTx,
                isEIP1559,
            });
        });
    }
}

const signTypedHash$1 = ({ typedCall, addressN, device, chainId, domainHash, messageHash, }) => __awaiter(void 0, void 0, void 0, function* () {
    const deviceType = getDeviceType(device.features);
    if (deviceType === 'touch' || deviceType === 'pro') {
        const currentVersion = getDeviceFirmwareVersion(device.features).join('.');
        const supportNestedArraysSignVersion = '4.2.0';
        if (semver__default["default"].lt(currentVersion, supportNestedArraysSignVersion)) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodNeedUpgradeFirmware, `Device firmware version is too low, please update to ${supportNestedArraysSignVersion}`, { current: currentVersion, require: supportNestedArraysSignVersion });
        }
    }
    return typedCall('EthereumSignTypedHash', 'EthereumTypedDataSignature', {
        address_n: addressN,
        domain_separator_hash: domainHash !== null && domainHash !== void 0 ? domainHash : '',
        message_hash: messageHash,
        chain_id: chainId,
    });
});

const signTypedHash = ({ typedCall, addressN, device, chainId, domainHash, messageHash, }) => __awaiter(void 0, void 0, void 0, function* () {
    const deviceType = getDeviceType(device.features);
    if (deviceType === 'touch' || deviceType === 'pro') {
        const currentVersion = getDeviceFirmwareVersion(device.features).join('.');
        const supportNestedArraysSignVersion = '4.2.0';
        if (semver__default["default"].lt(currentVersion, supportNestedArraysSignVersion)) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodNeedUpgradeFirmware, `Device firmware version is too low, please update to ${supportNestedArraysSignVersion}`, { current: currentVersion, require: supportNestedArraysSignVersion });
        }
    }
    return typedCall('EthereumSignTypedHashChargerWallet', 'EthereumTypedDataSignatureChargerWallet', {
        address_n: addressN,
        domain_separator_hash: domainHash !== null && domainHash !== void 0 ? domainHash : '',
        message_hash: messageHash,
        chain_id: chainId,
    });
});

const signTypedData$1 = ({ typedCall, addressN, data, metamaskV4Compat, chainId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const { primaryType } = data;
    const response = yield typedCall('EthereumSignTypedData', [
        'EthereumTypedDataStructRequest',
        'EthereumTypedDataValueRequest',
        'EthereumTypedDataSignature',
    ], {
        address_n: addressN,
        primary_type: primaryType,
        metamask_v4_compat: metamaskV4Compat,
        chain_id: chainId,
    });
    return response;
});

const signTypedData = ({ typedCall, addressN, data, metamaskV4Compat, chainId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const { primaryType } = data;
    return typedCall('EthereumSignTypedDataChargerWallet', [
        'EthereumTypedDataStructRequestChargerWallet',
        'EthereumTypedDataValueRequestChargerWallet',
        'EthereumTypedDataSignatureChargerWallet',
    ], {
        address_n: addressN,
        primary_type: primaryType,
        metamask_v4_compat: metamaskV4Compat,
        chain_id: chainId,
    });
});

const twosComplement = (number, bytes) => {
    if (bytes < 1 || bytes > 32) {
        throw hdShared.ERRORS.TypedError('Runtime', 'Int byte size must be between 1 and 32 (8 and 256 bits)');
    }
    const minValue = new BigNumber__default["default"](2).exponentiatedBy(bytes * 8 - 1).negated();
    const maxValue = minValue.negated().minus(1);
    const bigNumber = new BigNumber__default["default"](number);
    if (bigNumber.isGreaterThan(maxValue) || bigNumber.isLessThan(minValue)) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `Overflow when trying to convert number ${number.toString()} into ${bytes} bytes`);
    }
    if (bigNumber.isPositive()) {
        return bigNumber;
    }
    return bigNumber.minus(minValue).minus(minValue);
};
const intToHex = (number, bytes, signed) => {
    let bigNumber = new BigNumber__default["default"](number);
    if (signed) {
        bigNumber = twosComplement(bigNumber, bytes);
    }
    if (bigNumber.isNegative()) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `Cannot convert negative number to unsigned interger: ${number.toString()}`);
    }
    const hex = bigNumber.toString(16);
    const hexChars = bytes * 2;
    if (hex.length > hexChars) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `Overflow when trying to convert number ${number.toString()} into ${bytes} bytes`);
    }
    return hex.padStart(bytes * 2, '0');
};

const paramTypeArray = new RegExp(/^(.*)\[([0-9]*)\]$/);
const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
const parseArrayType = (arrayTypeName) => {
    const arrayMatch = paramTypeArray.exec(arrayTypeName);
    if (arrayMatch === null) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `typename ${arrayTypeName} could not be parsed as an EIP-712 array`);
    }
    const [_, entryTypeName, arraySize] = arrayMatch;
    return {
        entryTypeName,
        arraySize: parseInt(arraySize, 10) || null,
    };
};
const encodeData = (typeName, data) => {
    if (paramTypeBytes.test(typeName) || typeName === 'address') {
        return formatAnyHex(data);
    }
    if (typeName === 'string') {
        return Buffer.from(data, 'utf-8').toString('hex');
    }
    const numberMatch = paramTypeNumber.exec(typeName);
    if (numberMatch) {
        const [_, intType, bits] = numberMatch;
        const bytes = Math.ceil(parseInt(bits, 10) / 8);
        return intToHex(data, bytes, intType === 'int');
    }
    if (typeName === 'bool') {
        return data ? '01' : '00';
    }
    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `Unsupported data type for direct field encoding: ${typeName}`);
};
const paramTypesMap = {
    string: hdTransport.EthereumDataType.STRING,
    bool: hdTransport.EthereumDataType.BOOL,
    address: hdTransport.EthereumDataType.ADDRESS,
};
const getFieldType = (typeName, types) => {
    const arrayMatch = paramTypeArray.exec(typeName);
    if (arrayMatch) {
        const [_, arrayItemTypeName, arraySize] = arrayMatch;
        const entryType = getFieldType(arrayItemTypeName, types);
        return {
            data_type: hdTransport.EthereumDataType.ARRAY,
            size: parseInt(arraySize, 10) || undefined,
            entry_type: entryType,
        };
    }
    const numberMatch = paramTypeNumber.exec(typeName);
    if (numberMatch) {
        const [_, type, bits] = numberMatch;
        return {
            data_type: type === 'uint' ? hdTransport.EthereumDataType.UINT : hdTransport.EthereumDataType.INT,
            size: Math.floor(parseInt(bits, 10) / 8),
        };
    }
    const bytesMatch = paramTypeBytes.exec(typeName);
    if (bytesMatch) {
        const [_, size] = bytesMatch;
        return {
            data_type: hdTransport.EthereumDataType.BYTES,
            size: parseInt(size, 10) || undefined,
        };
    }
    const fixedSizeTypeMatch = paramTypesMap[typeName];
    if (fixedSizeTypeMatch) {
        return {
            data_type: fixedSizeTypeMatch,
        };
    }
    if (typeName in types) {
        return {
            data_type: hdTransport.EthereumDataType.STRUCT,
            size: types[typeName].length,
            struct_name: typeName,
        };
    }
    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `No type definition specified: ${typeName}`);
};

class EVMSignTypedData extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'metamaskV4Compat', type: 'boolean' },
            { name: 'data', type: 'object' },
            { name: 'domainHash', type: 'hexString' },
            { name: 'messageHash', type: 'hexString' },
            { name: 'chainId', type: 'number' },
        ]);
        const { path, data, metamaskV4Compat, domainHash, messageHash, chainId } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            addressN,
            metamaskV4Compat,
            data,
            chainId,
        };
        if (domainHash) {
            this.params.domainHash = formatAnyHex(domainHash);
            if (messageHash) {
                this.params.messageHash = formatAnyHex(messageHash);
            }
            else if (!!data && (!data.primaryType || data.primaryType !== 'EIP712Domain')) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'message_hash should only be empty when data.primaryType=EIP712Domain');
            }
        }
    }
    handleSignTypedData({ typedCall, signData, response, supportTrezor, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { types, primaryType, domain, message, } = signData;
            while (response.type === 'EthereumTypedDataStructRequest' ||
                response.type === 'EthereumTypedDataStructRequestChargerWallet') {
                const { name: typeDefinitionName } = response.message;
                const typeDefinition = types[typeDefinitionName];
                if (typeDefinition === undefined) {
                    throw hdShared.ERRORS.TypedError('Runtime', `Type ${typeDefinitionName} was not defined in types object`);
                }
                const dataStruckAck = {
                    members: typeDefinition.map(({ name, type: typeName }) => ({
                        name,
                        type: getFieldType(typeName, types),
                    })),
                };
                if (supportTrezor) {
                    response = yield typedCall('EthereumTypedDataStructAck', [
                        'EthereumTypedDataStructRequest',
                        'EthereumTypedDataValueRequest',
                        'EthereumTypedDataSignature',
                    ], dataStruckAck);
                }
                else {
                    response = yield typedCall('EthereumTypedDataStructAckChargerWallet', [
                        'EthereumTypedDataStructRequestChargerWallet',
                        'EthereumTypedDataValueRequestChargerWallet',
                        'EthereumTypedDataSignatureChargerWallet',
                    ], dataStruckAck);
                }
            }
            while (response.type === 'EthereumTypedDataValueRequest' ||
                response.type === 'EthereumTypedDataValueRequestChargerWallet') {
                const { member_path } = response.message;
                let memberData;
                let memberTypeName;
                const [rootIndex, ...nestedMemberPath] = member_path;
                switch (rootIndex) {
                    case 0:
                        memberData = domain;
                        memberTypeName = 'EIP712Domain';
                        break;
                    case 1:
                        memberData = message;
                        memberTypeName = primaryType;
                        break;
                    default:
                        throw hdShared.ERRORS.TypedError('Runtime', 'Root index can only be 0 or 1');
                }
                for (const index of nestedMemberPath) {
                    if (Array.isArray(memberData)) {
                        memberTypeName = parseArrayType(memberTypeName).entryTypeName;
                        memberData = memberData[index];
                    }
                    else if (typeof memberData === 'object' && memberData !== null) {
                        const memberTypeDefinition = types[memberTypeName][index];
                        memberTypeName = memberTypeDefinition.type;
                        memberData = memberData[memberTypeDefinition.name];
                    }
                    else ;
                }
                let encodedData;
                if (Array.isArray(memberData)) {
                    encodedData = encodeData('uint16', memberData.length);
                }
                else {
                    encodedData = encodeData(memberTypeName, memberData);
                }
                if (supportTrezor) {
                    response = yield typedCall('EthereumTypedDataValueAck', ['EthereumTypedDataValueRequest', 'EthereumTypedDataSignature'], {
                        value: encodedData,
                    });
                }
                else {
                    response = yield typedCall('EthereumTypedDataValueAckChargerWallet', ['EthereumTypedDataValueRequestChargerWallet', 'EthereumTypedDataSignatureChargerWallet'], {
                        value: encodedData,
                    });
                }
            }
            if (response.type !== 'EthereumTypedDataSignature' &&
                response.type !== 'EthereumTypedDataSignatureChargerWallet') {
                throw hdShared.ERRORS.TypedError('Runtime', 'Unexpected response type');
            }
            const { address, signature } = response.message;
            return {
                address,
                signature,
            };
        });
    }
    signTypedData() {
        return __awaiter(this, void 0, void 0, function* () {
            const { addressN, data, metamaskV4Compat, chainId } = this.params;
            let supportTrezor = false;
            let response;
            switch (TransportManager.getMessageVersion()) {
                case 'v1':
                    supportTrezor = true;
                    response = yield signTypedData$1({
                        typedCall: this.device.commands.typedCall.bind(this.device.commands),
                        addressN,
                        data,
                        metamaskV4Compat,
                        chainId,
                    });
                    break;
                case 'latest':
                default:
                    supportTrezor = false;
                    response = yield signTypedData({
                        typedCall: this.device.commands.typedCall.bind(this.device.commands),
                        addressN,
                        data,
                        metamaskV4Compat,
                        chainId,
                    });
                    break;
            }
            return this.handleSignTypedData({
                typedCall: this.device.commands.typedCall.bind(this.device.commands),
                signData: data,
                response,
                supportTrezor,
            });
        });
    }
    signTypedHash({ typedCall, addressN, chainId, domainHash, messageHash, }) {
        if (!domainHash)
            throw hdShared.ERRORS.TypedError('Runtime', 'domainHash is required');
        switch (TransportManager.getMessageVersion()) {
            case 'v1':
                return signTypedHash$1({
                    typedCall,
                    addressN,
                    domainHash,
                    messageHash,
                    chainId,
                    device: this.device,
                });
            case 'latest':
            default:
                return signTypedHash({
                    typedCall,
                    addressN,
                    domainHash,
                    messageHash,
                    chainId,
                    device: this.device,
                });
        }
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.1.9',
            },
        };
    }
    hasBiggerData(item) {
        const data = lodash.get(item.message, 'data', undefined);
        if (!data)
            return false;
        let biggerLimit = 1024;
        const currentVersion = getDeviceFirmwareVersion(this.device.features).join('.');
        const supportBiggerDataVersion = '4.4.0';
        if (semver__default["default"].gte(currentVersion, supportBiggerDataVersion)) {
            biggerLimit = 1536;
        }
        const startIndex = data.startsWith('0x') ? 2 : 0;
        return (data.length - startIndex) / 2 > biggerLimit;
    }
    hasNestedArrays(item) {
        if (!item)
            return false;
        if (Array.isArray(item)) {
            for (const element of item) {
                if (Array.isArray(element)) {
                    return true;
                }
                if (typeof element === 'object' && element !== null) {
                    if (this.hasNestedArrays(element)) {
                        return true;
                    }
                }
            }
        }
        else if (typeof item === 'object' && item !== null) {
            for (const property in item) {
                if (this.hasNestedArrays(item[property])) {
                    return true;
                }
            }
        }
        return false;
    }
    supportSignTyped() {
        const deviceType = getDeviceType(this.device.features);
        if (DeviceModelToTypes.model_mini.includes(deviceType)) {
            const currentVersion = getDeviceFirmwareVersion(this.device.features).join('.');
            const supportSignTypedVersion = '2.2.0';
            if (semver__default["default"].lt(currentVersion, supportSignTypedVersion)) {
                return false;
            }
        }
        return true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.device.features) {
                throw hdShared.ERRORS.TypedError('Device_InitializeFailed', 'Device initialization failed. Please try again.');
            }
            const { addressN, chainId } = this.params;
            const deviceType = getDeviceType(this.device.features);
            if (DeviceModelToTypes.model_mini.includes(deviceType)) {
                validateParams(this.params, [
                    { name: 'domainHash', type: 'hexString', required: true },
                    { name: 'messageHash', type: 'hexString', required: true },
                ]);
                const { domainHash, messageHash } = this.params;
                let response;
                if (this.supportSignTyped()) {
                    response = yield this.signTypedHash({
                        typedCall: this.device.commands.typedCall.bind(this.device.commands),
                        addressN,
                        domainHash,
                        messageHash,
                        chainId,
                    });
                }
                else {
                    response = yield this.device.commands.typedCall('EthereumSignMessageEIP712', 'EthereumMessageSignature', {
                        address_n: addressN,
                        domain_hash: domainHash !== null && domainHash !== void 0 ? domainHash : '',
                        message_hash: messageHash !== null && messageHash !== void 0 ? messageHash : '',
                    });
                }
                return Promise.resolve(response.message);
            }
            if (this.hasNestedArrays(this.params.data) || this.hasBiggerData(this.params.data)) {
                validateParams(this.params, [
                    { name: 'domainHash', type: 'hexString', required: true },
                    { name: 'messageHash', type: 'hexString', required: true },
                ]);
                const { domainHash, messageHash } = this.params;
                if (!domainHash)
                    throw hdShared.ERRORS.TypedError('Runtime', 'domainHash is required');
                const response = yield this.signTypedHash({
                    typedCall: this.device.commands.typedCall.bind(this.device.commands),
                    addressN,
                    domainHash,
                    messageHash,
                    chainId,
                });
                return Promise.resolve(response.message);
            }
            return this.signTypedData();
        });
    }
}

function verifyMessageLegacyV1 ({ typedCall, params, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield typedCall('EthereumVerifyMessage', 'Success', {
            signature: params.signature,
            message: params.message,
            address: params.address,
            chain_id: params.chain_id,
        });
        return Promise.resolve(res.message);
    });
}

function verifyMessage ({ typedCall, params, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield typedCall('EthereumVerifyMessageChargerWallet', 'Success', Object.assign({}, params));
        return Promise.resolve(res.message);
    });
}

class EVMSignMessage$1 extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'address', type: 'string', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
            { name: 'signature', type: 'hexString', required: true },
            { name: 'chainId', type: 'number' },
        ]);
        const { address, messageHex, signature } = formatAnyHex(this.payload);
        this.params = {
            address,
            message: messageHex,
            signature,
            chain_id: this.payload.chainId,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (TransportManager.getMessageVersion() === 'v1') {
                return verifyMessageLegacyV1({
                    typedCall: this.device.commands.typedCall.bind(this.device.commands),
                    params: this.params,
                });
            }
            return verifyMessage({
                typedCall: this.device.commands.typedCall.bind(this.device.commands),
                params: this.params,
            });
        });
    }
}

class StarcoinGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('StarcoinGetAddress', 'StarcoinAddress', Object.assign({}, param));
                const path = serializedPath(param.address_n);
                responses.push(Object.assign({ path }, res.message));
                this.postPreviousAddressMessage({
                    path,
                    address: res.message.address,
                });
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class StarcoinGetPublicKey extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('StarcoinGetPublicKey', 'StarcoinPublicKey', Object.assign({}, param));
                responses.push(Object.assign({ path: serializedPath(param.address_n) }, res.message));
            }
            validateResult(responses, ['public_key'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class StarcoinSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
        ]);
        const { path, messageHex } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            message: formatAnyHex(messageHex),
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('StarcoinSignMessage', 'StarcoinMessageSignature', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class StarcoinSignTransaction extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'rawTx', type: 'hexString', required: true },
        ]);
        const { path, rawTx } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            raw_tx: formatAnyHex(rawTx),
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('StarcoinSignTx', 'StarcoinSignedTx', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class EVMSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'publicKey', type: 'string', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
            { name: 'signature', type: 'hexString', required: true },
        ]);
        const { publicKey, messageHex, signature } = formatAnyHex(this.payload);
        this.params = {
            public_key: publicKey,
            message: messageHex,
            signature,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('StarcoinVerifyMessage', 'Success', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

const MAINNET = 0x68;
class NEMGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'network', type: 'number' },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                network: batch.network || MAINNET,
                show_display: showOnChargerWallet,
            });
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('NEMGetAddress', 'NEMAddress', Object.assign({}, param));
                const path = serializedPath(param.address_n);
                responses.push(Object.assign({ path }, res.message));
                this.postPreviousAddressMessage({
                    path,
                    address: res.message.address,
                });
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

const NEM_TRANSFER = 0x0101;
const NEM_COSIGNING = 0x0102;
const NEM_IMPORTANCE_TRANSFER = 0x0801;
const NEM_AGGREGATE_MODIFICATION = 0x1001;
const NEM_MULTISIG_SIGNATURE = 0x1002;
const NEM_MULTISIG = 0x1004;
const NEM_PROVISION_NAMESPACE = 0x2001;
const NEM_MOSAIC_CREATION = 0x4001;
const NEM_SUPPLY_CHANGE = 0x4002;
class NEMSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.NEM_MOSAIC_LEVY_TYPES = {
            1: 'MosaicLevy_Absolute',
            2: 'MosaicLevy_Percentile',
        };
        this.NEM_SUPPLY_CHANGE_TYPES = {
            1: 'SupplyChange_Increase',
            2: 'SupplyChange_Decrease',
        };
        this.NEM_AGGREGATE_MODIFICATION_TYPES = {
            1: 'CosignatoryModification_Add',
            2: 'CosignatoryModification_Delete',
        };
        this.NEM_IMPORTANCE_TRANSFER_MODES = {
            1: 'ImportanceTransfer_Activate',
            2: 'ImportanceTransfer_Deactivate',
        };
        this.getCommon = (tx, address_n) => {
            var _a;
            return ({
                address_n,
                network: (tx.version >> 24) & 0xff,
                timestamp: tx.timeStamp,
                fee: tx.fee,
                deadline: (_a = tx.deadline) !== null && _a !== void 0 ? _a : 0,
                signer: address_n ? undefined : tx.signer,
            });
        };
        this.transferMessage = (tx) => {
            const mosaics = tx.mosaics
                ? tx.mosaics.map(mosaic => ({
                    namespace: mosaic.mosaicId.namespaceId,
                    mosaic: mosaic.mosaicId.name,
                    quantity: mosaic.quantity,
                }))
                : undefined;
            return {
                recipient: tx.recipient,
                amount: tx.amount,
                payload: tx.message ? tx.message.payload : undefined,
                public_key: tx.message && tx.message.type === 0x02 ? tx.message.publicKey : undefined,
                mosaics,
            };
        };
        this.importanceTransferMessage = (tx) => ({
            mode: this.NEM_IMPORTANCE_TRANSFER_MODES[tx.importanceTransfer.mode],
            public_key: tx.importanceTransfer.publicKey,
        });
        this.aggregateModificationMessage = (tx) => {
            const modifications = tx.modifications
                ? tx.modifications.map(modification => ({
                    type: this.NEM_AGGREGATE_MODIFICATION_TYPES[modification.modificationType],
                    public_key: modification.cosignatoryAccount,
                }))
                : undefined;
            return {
                modifications,
                relative_change: tx.minCosignatories.relativeChange,
            };
        };
        this.provisionNamespaceMessage = (tx) => {
            var _a, _b, _c;
            return ({
                namespace: (_a = tx.newPart) !== null && _a !== void 0 ? _a : '',
                parent: tx.parent || undefined,
                sink: (_b = tx.rentalFeeSink) !== null && _b !== void 0 ? _b : '',
                fee: (_c = tx.rentalFee) !== null && _c !== void 0 ? _c : 0,
            });
        };
        this.mosaicCreationMessage = (tx) => {
            var _a, _b;
            const { levy } = tx.mosaicDefinition;
            const definition = {
                namespace: tx.mosaicDefinition.id.namespaceId,
                mosaic: tx.mosaicDefinition.id.name,
                levy: levy && levy.type ? this.NEM_MOSAIC_LEVY_TYPES[levy.type] : undefined,
                fee: levy && levy.fee,
                levy_address: levy && levy.recipient,
                levy_namespace: levy && levy.mosaicId && levy.mosaicId.namespaceId,
                levy_mosaic: levy && levy.mosaicId && levy.mosaicId.name,
                description: tx.mosaicDefinition.description,
            };
            const { properties } = tx.mosaicDefinition;
            if (Array.isArray(properties)) {
                properties.forEach(property => {
                    const { name, value } = property;
                    switch (name) {
                        case 'divisibility':
                            definition.divisibility = parseInt(value);
                            break;
                        case 'initialSupply':
                            definition.supply = parseInt(value);
                            break;
                        case 'supplyMutable':
                            definition.mutable_supply = value === 'true';
                            break;
                        case 'transferable':
                            definition.transferable = value === 'true';
                            break;
                    }
                });
            }
            return {
                definition,
                sink: (_a = tx.creationFeeSink) !== null && _a !== void 0 ? _a : '',
                fee: (_b = tx.creationFee) !== null && _b !== void 0 ? _b : 0,
            };
        };
        this.supplyChangeMessage = (tx) => {
            var _a;
            return ({
                namespace: tx.mosaicId.namespaceId,
                mosaic: tx.mosaicId.name,
                type: this.NEM_SUPPLY_CHANGE_TYPES[tx.supplyType],
                delta: (_a = tx.delta) !== null && _a !== void 0 ? _a : 0,
            });
        };
        this.parseTx = (tx, address_n) => {
            let transaction = tx;
            const message = {
                transaction: this.getCommon(tx, address_n),
                transfer: undefined,
                importance_transfer: undefined,
                aggregate_modification: undefined,
                provision_namespace: undefined,
                mosaic_creation: undefined,
                supply_change: undefined,
            };
            if (tx.type === NEM_COSIGNING ||
                tx.type === NEM_MULTISIG ||
                tx.type === NEM_MULTISIG_SIGNATURE) {
                message.cosigning = tx.type === NEM_COSIGNING || tx.type === NEM_MULTISIG_SIGNATURE;
                transaction = tx.otherTrans;
                message.multisig = this.getCommon(transaction);
            }
            switch (transaction.type) {
                case NEM_TRANSFER:
                    message.transfer = this.transferMessage(transaction);
                    break;
                case NEM_IMPORTANCE_TRANSFER:
                    message.importance_transfer = this.importanceTransferMessage(transaction);
                    break;
                case NEM_AGGREGATE_MODIFICATION:
                    message.aggregate_modification = this.aggregateModificationMessage(transaction);
                    break;
                case NEM_PROVISION_NAMESPACE:
                    message.provision_namespace = this.provisionNamespaceMessage(transaction);
                    break;
                case NEM_MOSAIC_CREATION:
                    message.mosaic_creation = this.mosaicCreationMessage(transaction);
                    break;
                case NEM_SUPPLY_CHANGE:
                    message.supply_change = this.supplyChangeMessage(transaction);
                    break;
                default:
                    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'Unknown transaction type');
            }
            return message;
        };
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'transaction', type: 'object', required: true },
        ]);
        const { path, transaction } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = this.parseTx(transaction, addressN);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('NEMSignTx', 'NEMSignedTx', Object.assign({}, this.params));
            return Promise.resolve(res);
        });
    }
}

class SolGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('SolanaGetAddress', 'SolanaAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class SolSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'rawTx', type: 'hexString', required: true },
            ]);
            this.params.push({
                address_n: addressN,
                raw_tx: formatAnyHex(batch.rawTx),
            });
        });
    }
    getVersionRange() {
        if (this.existsVersionedTx()) {
            return {
                model_mini: {
                    min: '3.1.0',
                },
                model_touch: {
                    min: '4.3.0',
                },
            };
        }
        return {
            classic: {
                min: '2.1.9',
            },
            mini: {
                min: '2.1.9',
            },
        };
    }
    isVersionedTx(hexString) {
        if (hexString.length === 0)
            return false;
        try {
            const cleanHexString = hexString.startsWith('0x') ? hexString.slice(2) : hexString;
            const binary = parseInt(cleanHexString[0], 16).toString(2);
            return binary[0] === '1';
        }
        catch (_a) {
            return false;
        }
    }
    existsVersionedTx() {
        for (let i = 0; i < this.params.length; i++) {
            const param = this.params[i];
            const { raw_tx } = param;
            if (this.isVersionedTx(raw_tx)) {
                return true;
            }
        }
        return false;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('SolanaSignTx', 'SolanaSignedTx', Object.assign({}, param));
                const { signature } = res.message;
                responses.push({
                    path: serializedPath(param.address_n),
                    signature,
                });
            }
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class StellarGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('StellarGetAddress', 'StellarAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class StellarSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.operations = [];
        this.parseOperation = (op) => {
            switch (op.type) {
                case 'createAccount':
                    validateParams(op, [
                        { name: 'destination', type: 'string', required: true },
                        { name: 'startingBalance', type: 'bigNumber', required: true },
                    ]);
                    return {
                        type: 'StellarCreateAccountOp',
                        source_account: op.comurce,
                        new_account: op.destination,
                        starting_balance: op.startingBalance,
                    };
                case 'payment':
                    validateParams(op, [
                        { name: 'destination', type: 'string', required: true },
                        { name: 'amount', type: 'bigNumber', required: true },
                        { name: 'asset', required: true },
                    ]);
                    return {
                        type: 'StellarPaymentOp',
                        source_account: op.comurce,
                        destination_account: op.destination,
                        asset: op.asset,
                        amount: op.amount,
                    };
                case 'pathPayment':
                    validateParams(op, [{ name: 'destAmount', type: 'bigNumber', required: true }]);
                    return {
                        type: 'StellarPathPaymentOp',
                        source_account: op.comurce,
                        send_asset: op.sendAsset,
                        send_max: op.sendMax,
                        destination_account: op.destination,
                        destination_asset: op.destAsset,
                        destination_amount: op.destAmount,
                        paths: op.path,
                    };
                case 'createPassiveOffer':
                    validateParams(op, [{ name: 'amount', type: 'bigNumber', required: true }]);
                    return {
                        type: 'StellarCreatePassiveOfferOp',
                        source_account: op.comurce,
                        buying_asset: op.buying,
                        selling_asset: op.selling,
                        amount: op.amount,
                        price_n: op.price.n,
                        price_d: op.price.d,
                    };
                case 'manageOffer':
                    validateParams(op, [{ name: 'amount', type: 'bigNumber', required: true }]);
                    return {
                        type: 'StellarManageOfferOp',
                        source_account: op.comurce,
                        buying_asset: op.buying,
                        selling_asset: op.selling,
                        amount: op.amount,
                        offer_id: op.offerId,
                        price_n: op.price.n,
                        price_d: op.price.d,
                    };
                case 'setOptions': {
                    const signer = op.signer
                        ? {
                            signer_type: op.signer.type,
                            signer_key: op.signer.key,
                            signer_weight: op.signer.weight,
                        }
                        : undefined;
                    return Object.assign({ type: 'StellarSetOptionsOp', source_account: op.comurce, clear_flags: op.clearFlags, set_flags: op.setFlags, master_weight: op.masterWeight, low_threshold: op.lowThreshold, medium_threshold: op.medThreshold, high_threshold: op.highThreshold, home_domain: op.homeDomain, inflation_destination_account: op.inflationDest }, signer);
                }
                case 'changeTrust':
                    validateParams(op, [{ name: 'limit', type: 'bigNumber' }]);
                    return {
                        type: 'StellarChangeTrustOp',
                        source_account: op.comurce,
                        asset: op.line,
                        limit: op.limit,
                    };
                case 'allowTrust':
                    return {
                        type: 'StellarAllowTrustOp',
                        source_account: op.comurce,
                        trusted_account: op.trustor,
                        asset_type: op.assetType,
                        asset_code: op.assetCode,
                        is_authorized: op.authorize ? 1 : 0,
                    };
                case 'accountMerge':
                    return {
                        type: 'StellarAccountMergeOp',
                        source_account: op.comurce,
                        destination_account: op.destination,
                    };
                case 'manageData':
                    return {
                        type: 'StellarManageDataOp',
                        source_account: op.comurce,
                        key: op.name,
                        value: op.value,
                    };
                case 'bumpSequence':
                    return {
                        type: 'StellarBumpSequenceOp',
                        source_account: op.comurce,
                        bump_to: op.bumpTo,
                    };
                default:
                    return {};
            }
        };
        this.processTxRequest = (operations, index) => __awaiter(this, void 0, void 0, function* () {
            const isLastOp = index + 1 >= operations.length;
            const _a = operations[index], { type } = _a, op = __rest(_a, ["type"]);
            if (isLastOp) {
                const response = yield this.device.commands.typedCall(type, 'StellarSignedTx', op);
                return response.message;
            }
            yield this.device.commands.typedCall(type, 'StellarTxOpRequest', op);
            return this.processTxRequest(operations, index + 1);
        });
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'networkPassphrase', type: 'string', required: true },
            { name: 'transaction', type: 'object', required: true },
        ]);
        const { transaction, networkPassphrase } = this.payload;
        if (!transaction.timebounds) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'timebounds is required');
        }
        const addressN = validatePath(this.payload.path, 3);
        this.params = {
            address_n: addressN,
            network_passphrase: networkPassphrase,
            source_account: transaction.comurce,
            fee: transaction.fee,
            sequence_number: transaction.sequence,
            num_operations: transaction.operations.length,
            memo_type: hdTransport.StellarMemoType.NONE,
            timebounds_start: transaction.timebounds.minTime,
            timebounds_end: transaction.timebounds.maxTime,
        };
        if (transaction.memo) {
            this.params.memo_type = transaction.memo.type;
            this.params.memo_text = transaction.memo.text;
            this.params.memo_id = transaction.memo.id;
            this.params.memo_hash = transaction.memo.hash;
        }
        transaction.operations.forEach(op => {
            const transformed = this.parseOperation(op);
            if (transformed) {
                this.operations.push(transformed);
            }
        });
        console.log('StellarSignTransactionParams', this.params);
        console.log('StellarSignTransactionOperations', this.operations);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.device.commands.typedCall('StellarSignTx', 'StellarTxOpRequest', Object.assign({}, this.params));
            return this.processTxRequest(this.operations, 0);
        });
    }
}

class TronGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.5.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('TronGetAddress', 'TronAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class TronSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
        ]);
        const { path, messageHex } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            message: stripHexPrefix(messageHex),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.5.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.device.commands.typedCall('TronSignMessage', 'TronMessageSignature', Object.assign({}, this.params));
            return Promise.resolve(response.message);
        });
    }
}

class TronSignTransaction extends BaseMethod {
    parseTx(tx, address_n) {
        const unSignTx = {
            address_n,
            data: tx.data,
            timestamp: tx.timestamp,
            fee_limit: tx.feeLimit,
            ref_block_bytes: tx.refBlockBytes,
            ref_block_hash: tx.refBlockHash,
            expiration: tx.expiration,
            contract: {},
        };
        if (tx.contract) {
            if (tx.contract.transferContract) {
                unSignTx.contract = {
                    transfer_contract: {
                        to_address: tx.contract.transferContract.toAddress,
                        amount: tx.contract.transferContract.amount,
                    },
                };
            }
            if (tx.contract.triggerSmartContract) {
                unSignTx.contract = {
                    trigger_smart_contract: {
                        contract_address: tx.contract.triggerSmartContract.contractAddress,
                        call_value: tx.contract.triggerSmartContract.callValue,
                        data: tx.contract.triggerSmartContract.data,
                        call_token_value: tx.contract.triggerSmartContract.callTokenValue,
                        asset_id: tx.contract.triggerSmartContract.assetId,
                    },
                };
            }
            if (tx.contract.freezeBalanceV2Contract) {
                unSignTx.contract = {
                    freeze_balance_v2_contract: {
                        frozen_balance: tx.contract.freezeBalanceV2Contract.frozenBalance,
                        resource: tx.contract.freezeBalanceV2Contract.resource,
                    },
                };
            }
            if (tx.contract.unfreezeBalanceV2Contract) {
                unSignTx.contract = {
                    unfreeze_balance_v2_contract: {
                        unfreeze_balance: tx.contract.unfreezeBalanceV2Contract.unfreezeBalance,
                        resource: tx.contract.unfreezeBalanceV2Contract.resource,
                    },
                };
            }
            if (tx.contract.delegateResourceContract) {
                unSignTx.contract = {
                    delegate_resource_contract: {
                        resource: tx.contract.delegateResourceContract.resource,
                        balance: tx.contract.delegateResourceContract.balance,
                        receiver_address: tx.contract.delegateResourceContract.receiverAddress,
                        lock: tx.contract.delegateResourceContract.lock,
                    },
                };
            }
            if (tx.contract.unDelegateResourceContract) {
                unSignTx.contract = {
                    undelegate_resource_contract: {
                        resource: tx.contract.unDelegateResourceContract.resource,
                        balance: tx.contract.unDelegateResourceContract.balance,
                        receiver_address: tx.contract.unDelegateResourceContract.receiverAddress,
                    },
                };
            }
            if (tx.contract.withdrawExpireUnfreezeContract) {
                unSignTx.contract = {
                    withdraw_expire_unfreeze_contract: {},
                };
            }
            if (tx.contract.withdrawBalanceContract) {
                unSignTx.contract = {
                    withdraw_balance_contract: {
                        owner_address: tx.contract.withdrawBalanceContract.ownerAddress,
                    },
                };
            }
        }
        return unSignTx;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'transaction', type: 'object', required: true },
        ]);
        const { path, transaction } = this.payload;
        const addressN = validatePath(path, 3);
        validateParams(transaction, [
            { name: 'refBlockBytes', type: 'hexString', required: true },
            { name: 'refBlockHash', type: 'hexString', required: true },
            { name: 'expiration', type: 'number', required: true },
            { name: 'timestamp', type: 'number', required: true },
            { name: 'contract', type: 'object', required: true },
        ]);
        this.params = this.parseTx(formatAnyHex(transaction), addressN);
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.5.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.device.commands.typedCall('TronSignTx', 'TronSignedTx', Object.assign({}, this.params));
            return Promise.resolve(response.message);
        });
    }
}

class NearGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.5.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('NearGetAddress', 'NearAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class NearSignTransaction extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'rawTx', type: 'hexString', required: true },
        ]);
        const { path, rawTx } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            raw_tx: formatAnyHex(rawTx),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.5.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('NearSignTx', 'NearSignedTx', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class AptosGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
        this.shouldConfirm = false;
    }
    init() {
        var _a, _b;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        this.shouldConfirm =
            this.payload.showOnChargerWallet ||
                ((_b = this.payload.bundle) === null || _b === void 0 ? void 0 : _b.comme((i) => !!i.showOnChargerWallet));
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    publicKeyToAddress(publicKey) {
        const hash = sha3.sha3_256.create();
        hash.update(hexToBytes(publicKey));
        hash.update('\x00');
        return `0x${utils.bytesToHex(hash.digest())}`;
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.6.0',
            },
        };
    }
    run() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const supportsBatchPublicKey = supportBatchPublicKey((_a = this.device) === null || _a === void 0 ? void 0 : _a.features);
            let responses = [];
            if (supportsBatchPublicKey) {
                const publicKeyRes = yield this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
                    paths: this.params,
                    ecdsa_curve_name: 'ed25519',
                });
                for (let i = 0; i < this.params.length; i++) {
                    const param = this.params[i];
                    const publicKey = publicKeyRes.message.public_keys[i];
                    let address;
                    if (this.shouldConfirm) {
                        const addressRes = yield this.device.commands.typedCall('AptosGetAddress', 'AptosAddress', param);
                        address = (_c = (_b = addressRes.message.address) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : '';
                    }
                    else {
                        address = this.publicKeyToAddress(publicKey);
                    }
                    const result = {
                        path: serializedPath(param.address_n),
                        address,
                        publicKey,
                        pub: publicKey,
                    };
                    if (this.shouldConfirm) {
                        this.postPreviousAddressMessage(result);
                    }
                    responses.push(result);
                }
            }
            else {
                responses = yield Promise.all(this.params.map((param) => __awaiter(this, void 0, void 0, function* () {
                    var _d, _e;
                    const res = yield this.device.commands.typedCall('AptosGetAddress', 'AptosAddress', param);
                    const result = {
                        path: serializedPath(param.address_n),
                        address: (_e = (_d = res.message.address) === null || _d === void 0 ? void 0 : _d.toLowerCase()) !== null && _e !== void 0 ? _e : '',
                    };
                    if (this.shouldConfirm) {
                        this.postPreviousAddressMessage(result);
                    }
                    return result;
                })));
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return this.hasBundle ? responses : responses[0];
        });
    }
}

class AptosGetPublicKey extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.6.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
                paths: this.params,
                ecdsa_curve_name: 'ed25519',
            });
            const responses = res.message.public_keys.map((publicKey, index) => ({
                path: serializedPath(this.params[index].address_n),
                pub: publicKey,
                publicKey,
            }));
            validateResult(responses, ['pub'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class AptosSignTransaction extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'rawTx', type: 'hexString', required: true },
        ]);
        const { path, rawTx } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            raw_tx: formatAnyHex(rawTx),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.6.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('AptosSignTx', 'AptosSignedTx', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class AptosSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'payload', type: 'object', required: true },
        ]);
        const { path, payload } = this.payload;
        const addressN = validatePath(path, 3);
        validateParams(payload, [
            { name: 'address', type: 'string' },
            { name: 'chainId', type: 'string' },
            { name: 'application', type: 'string' },
            { name: 'nonce', type: 'string', required: true },
            { name: 'message', type: 'string', required: true },
        ]);
        this.params = {
            address_n: addressN,
            payload: {
                address: payload.address,
                chain_id: payload.chainId,
                application: payload.application,
                nonce: payload.nonce,
                message: payload.message,
            },
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.6.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            let fullMessage = 'APTOS\n';
            if (this.params.payload.address) {
                fullMessage += `address: ${this.params.payload.address}\n`;
            }
            if (this.params.payload.application) {
                fullMessage += `application: ${this.params.payload.application}\n`;
            }
            if (this.params.payload.chain_id) {
                fullMessage += `chainId: ${this.params.payload.chain_id}\n`;
            }
            fullMessage += `message: ${this.params.payload.message}\n`;
            fullMessage += `nonce: ${this.params.payload.nonce}`;
            const res = yield this.device.commands.typedCall('AptosSignMessage', 'AptosMessageSignature', Object.assign({}, this.params));
            const { address, signature } = res.message;
            return Promise.resolve({
                path: serializedPath(this.params.address_n),
                address,
                signature,
                fullMessage,
            });
        });
    }
}

class AlgoGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.6.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('AlgorandGetAddress', 'AlgorandAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class AlgoSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'rawTx', type: 'hexString', required: true },
        ]);
        const { path, rawTx } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            raw_tx: formatAnyHex(rawTx),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.6.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('AlgorandSignTx', 'AlgorandSignedTx', Object.assign({}, this.params));
            const { signature } = res.message;
            return {
                path: serializedPath(this.params.address_n),
                signature,
            };
        });
    }
}

class CosmosGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'hrp', type: 'string' },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            const { hrp } = batch;
            this.params.push({
                address_n: addressN,
                hrp,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.10.0',
            },
            model_touch: {
                min: '4.0.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('CosmosGetAddress', 'CosmosAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class CosmosGetPublicKey extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        if (payload.bundle.length === 0) {
            throw new Error('Bundle is empty');
        }
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a, _b;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'curve', type: 'string' },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            const curveName = (_b = batch.curve) !== null && _b !== void 0 ? _b : 'secp256k1';
            if (curveName !== 'secp256k1') {
                throw new Error('Curve name is not supported');
            }
            this.params.push({
                address_n: addressN,
                curve: curveName,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.10.0',
            },
            model_touch: {
                min: '4.0.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
                paths: this.params,
                ecdsa_curve_name: this.params[0].curve,
            });
            const responses = res.message.public_keys.map((publicKey, index) => ({
                path: serializedPath(this.params[index].address_n),
                pub: publicKey,
                publicKey,
            }));
            validateResult(responses, ['pub'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class CosmosSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'rawTx', type: 'hexString', required: true },
        ]);
        const { path, rawTx } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            raw_tx: formatAnyHex(rawTx),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.10.0',
            },
            model_touch: {
                min: '4.0.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('CosmosSignTx', 'CosmosSignedTx', Object.assign({}, this.params));
            const { signature } = res.message;
            return {
                path: serializedPath(this.params.address_n),
                signature,
            };
        });
    }
}

class XrpGetAddress$1 extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
        this.shouldConfirm = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        this.shouldConfirm = this.hasBundle
            ? this.payload.bundle.comme((i) => !!i.showOnChargerWallet)
            : false;
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.9.0',
            },
        };
    }
    run() {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasBundle && supportBatchPublicKey((_a = this.device) === null || _a === void 0 ? void 0 : _a.features) && !this.shouldConfirm) {
                const res = yield this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
                    paths: this.params,
                    ecdsa_curve_name: 'secp256k1',
                });
                const result = res.message.public_keys.map((publicKey, index) => ({
                    path: serializedPath(this.params[index].address_n),
                    publicKey,
                    address: rippleKeypairs.deriveAddress(publicKey),
                }));
                validateResult(result, ['address', 'publicKey'], {
                    expectedLength: this.params.length,
                });
                return Promise.resolve(result);
            }
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('RippleGetAddress', 'RippleAddress', Object.assign({}, param));
                const publicKey = yield this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
                    paths: [{ address_n: param.address_n }],
                    ecdsa_curve_name: 'secp256k1',
                });
                const { address } = res.message;
                const path = serializedPath(param.address_n);
                responses.push({
                    path,
                    address,
                    publicKey: (_c = (_b = publicKey.message) === null || _b === void 0 ? void 0 : _b.public_keys) === null || _c === void 0 ? void 0 : _c[0],
                    pub: (_e = (_d = publicKey.message) === null || _d === void 0 ? void 0 : _d.public_keys) === null || _e === void 0 ? void 0 : _e[0],
                });
                this.postPreviousAddressMessage({
                    path,
                    address,
                });
            }
            validateResult(responses, ['address', 'pub'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class XrpGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        const { payload } = this;
        validateParams(payload, [
            { name: 'path', required: true },
            { name: 'transaction', required: true },
        ]);
        const path = validatePath(payload.path, 5);
        const { transaction } = payload;
        validateParams(transaction, [
            { name: 'fee', type: 'string' },
            { name: 'flags', type: 'number' },
            { name: 'sequence', type: 'number' },
            { name: 'maxLedgerVersion', type: 'number' },
            { name: 'payment', type: 'object' },
        ]);
        validateParams(transaction.payment, [
            { name: 'amount', type: 'number', required: true },
            { name: 'destination', type: 'string', required: true },
            { name: 'destinationTag', type: 'number' },
        ]);
        this.params = {
            address_n: path,
            fee: transaction.fee,
            flags: transaction.flags,
            sequence: transaction.sequence,
            last_ledger_sequence: transaction.maxLedgerVersion,
            payment: {
                amount: transaction.payment.amount,
                destination: transaction.payment.destination,
                destination_tag: transaction.payment.destinationTag,
            },
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.9.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = yield this.device.commands.typedCall('RippleSignTx', 'RippleSignedTx', this.params);
            return {
                serializedTx: message.serialized_tx,
                signature: message.signature,
            };
        });
    }
}

const SUI_ADDRESS_LENGTH = 32;
const PUBLIC_KEY_SIZE = 32;
const SIGNATURE_SCHEME_TO_FLAG = {
    ED25519: 0x00,
    Secp256k1: 0x01,
};
function normalizeSuiAddress(value, forceAdd0x = false) {
    let address = value.toLowerCase();
    if (!forceAdd0x && address.startsWith('0x')) {
        address = address.slice(2);
    }
    return `0x${address.padStart(SUI_ADDRESS_LENGTH * 2, '0')}`.toLowerCase();
}
function publicKeyToAddress(publicKey) {
    const tmp = new Uint8Array(PUBLIC_KEY_SIZE + 1);
    tmp.set([SIGNATURE_SCHEME_TO_FLAG.ED25519]);
    tmp.set(utils.hexToBytes(publicKey), 1);
    return normalizeSuiAddress(utils.bytesToHex(blake2b.blake2b(tmp, { dkLen: 32 })).slice(0, SUI_ADDRESS_LENGTH * 2));
}

class SuiGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
        this.shouldConfirm = false;
    }
    init() {
        var _a, _b;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        this.shouldConfirm =
            this.payload.showOnChargerWallet ||
                ((_b = this.payload.bundle) === null || _b === void 0 ? void 0 : _b.comme((i) => !!i.showOnChargerWallet));
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.0.0',
            },
            model_touch: {
                min: '4.3.0',
            },
        };
    }
    run() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const supportsBatchPublicKey = supportBatchPublicKey((_a = this.device) === null || _a === void 0 ? void 0 : _a.features);
            let responses = [];
            if (supportsBatchPublicKey) {
                const publicKeyRes = yield this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
                    paths: this.params,
                    ecdsa_curve_name: 'ed25519',
                });
                for (let i = 0; i < this.params.length; i++) {
                    const param = this.params[i];
                    const publicKey = publicKeyRes.message.public_keys[i];
                    let address;
                    if (this.shouldConfirm) {
                        const addressRes = yield this.device.commands.typedCall('SuiGetAddress', 'SuiAddress', param);
                        address = (_c = (_b = addressRes.message.address) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : '';
                    }
                    else {
                        address = publicKeyToAddress(publicKey);
                    }
                    const result = {
                        path: serializedPath(param.address_n),
                        address,
                        publicKey,
                        pub: publicKey,
                    };
                    if (this.shouldConfirm) {
                        this.postPreviousAddressMessage(result);
                    }
                    responses.push(result);
                }
            }
            else {
                responses = yield Promise.all(this.params.map((param) => __awaiter(this, void 0, void 0, function* () {
                    var _d, _e;
                    const res = yield this.device.commands.typedCall('SuiGetAddress', 'SuiAddress', param);
                    const result = {
                        path: serializedPath(param.address_n),
                        address: (_e = (_d = res.message.address) === null || _d === void 0 ? void 0 : _d.toLowerCase()) !== null && _e !== void 0 ? _e : '',
                    };
                    if (this.shouldConfirm) {
                        this.postPreviousAddressMessage(result);
                    }
                    return result;
                })));
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return this.hasBundle ? responses : responses[0];
        });
    }
}

class SuiGetPublicKey extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.0.0',
            },
            model_touch: {
                min: '4.3.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
                paths: this.params,
                ecdsa_curve_name: 'ed25519',
            });
            const responses = res.message.public_keys.map((publicKey, index) => ({
                path: serializedPath(this.params[index].address_n),
                publicKey,
                pub: publicKey,
            }));
            validateResult(responses, ['pub'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class SuiSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
        ]);
        const { path, messageHex } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            message: stripHexPrefix(messageHex),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.4.0',
            },
            model_touch: {
                min: '4.6.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.device.commands.typedCall('SuiSignMessage', 'SuiMessageSignature', Object.assign({}, this.params));
            return Promise.resolve(response.message);
        });
    }
}

class SuiSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.chunkByteSize = 1024;
        this.processTxRequest = (typedCall, res, data, offset = 0) => __awaiter(this, void 0, void 0, function* () {
            if (res.type === 'SuiSignedTx') {
                return res.message;
            }
            const { data_length } = res.message;
            if (!data_length) {
                return res.message;
            }
            const payload = data.subarray(offset, offset + data_length);
            const newOffset = offset + payload.length;
            const resourceAckParams = {
                data_chunk: utils.bytesToHex(payload),
            };
            const response = yield typedCall('SuiTxAck', ['SuiSignedTx', 'SuiTxRequest'], Object.assign({}, resourceAckParams));
            return this.processTxRequest(typedCall, response, data, newOffset);
        });
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'rawTx', type: 'hexString', required: true },
        ]);
        const { path, rawTx } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            raw_tx: formatAnyHex(rawTx),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.0.0',
            },
            model_touch: {
                min: '4.3.0',
            },
        };
    }
    supportChunkTransfer() {
        const deviceType = getDeviceType(this.device.features);
        const deviceFirmwareVersion = getDeviceFirmwareVersion(this.device.features).join('.');
        if (DeviceModelToTypes.model_mini.includes(deviceType)) {
            if (semver__default["default"].valid(deviceFirmwareVersion)) {
                return semver__default["default"].gte(deviceFirmwareVersion, '3.7.0');
            }
        }
        else if (DeviceModelToTypes.model_touch.includes(deviceType)) {
            if (semver__default["default"].valid(deviceFirmwareVersion)) {
                return semver__default["default"].gte(deviceFirmwareVersion, '4.8.0');
            }
        }
        return false;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const typedCall = this.device.getCommands().typedCall.bind(this.device.getCommands());
            let offset = 0;
            let data;
            if (this.supportChunkTransfer()) {
                offset = this.chunkByteSize;
                data = Buffer.from(this.params.raw_tx, 'hex');
                this.params = {
                    address_n: this.params.address_n,
                    raw_tx: '',
                    data_initial_chunk: utils.bytesToHex(data.subarray(0, this.chunkByteSize)),
                    data_length: data.length,
                };
            }
            const res = yield typedCall('SuiSignTx', ['SuiSignedTx', 'SuiTxRequest'], Object.assign({}, this.params));
            return this.processTxRequest(typedCall, res, data, offset);
        });
    }
}

const validateAddressParameters = (addressParameters) => {
    validateParams(addressParameters, [
        { name: 'addressType', type: 'number', required: true },
        { name: 'stakingKeyHash', type: 'string' },
        { name: 'paymentScriptHash', type: 'string' },
        { name: 'stakingScriptHash', type: 'string' },
    ]);
    if (addressParameters.path) {
        validatePath(addressParameters.path);
    }
    if (addressParameters.stakingPath) {
        validatePath(addressParameters.stakingPath);
    }
    if (addressParameters.certificatePointer) {
        validateParams(addressParameters.certificatePointer, [
            { name: 'blockIndex', type: 'number', required: true },
            { name: 'txIndex', type: 'number', required: true },
            { name: 'certificateIndex', type: 'number', required: true },
        ]);
    }
};
const addressParametersToProto = (addressParameters) => {
    let path = [];
    if (addressParameters.path) {
        path = validatePath(addressParameters.path, 3);
    }
    let stakingPath = [];
    if (addressParameters.stakingPath) {
        stakingPath = validatePath(addressParameters.stakingPath, 3);
    }
    let certificatePointer;
    if (addressParameters.certificatePointer) {
        certificatePointer = {
            block_index: addressParameters.certificatePointer.blockIndex,
            tx_index: addressParameters.certificatePointer.txIndex,
            certificate_index: addressParameters.certificatePointer.certificateIndex,
        };
    }
    return {
        address_type: addressParameters.addressType,
        address_n: path,
        address_n_staking: stakingPath,
        staking_key_hash: addressParameters.stakingKeyHash,
        certificate_pointer: certificatePointer,
        script_payment_hash: addressParameters.paymentScriptHash,
        script_staking_hash: addressParameters.stakingScriptHash,
    };
};
const addressParametersFromProto = (addressParameters) => {
    let certificatePointer;
    if (addressParameters.certificate_pointer) {
        certificatePointer = {
            blockIndex: addressParameters.certificate_pointer.block_index,
            txIndex: addressParameters.certificate_pointer.tx_index,
            certificateIndex: addressParameters.certificate_pointer.certificate_index,
        };
    }
    return {
        addressType: addressParameters.address_type,
        path: addressParameters.address_n,
        stakingPath: addressParameters.address_n_staking,
        stakingKeyHash: addressParameters.staking_key_hash,
        certificatePointer,
    };
};
const modifyAddressParametersForBackwardsCompatibility = (address_parameters) => {
    if (address_parameters.address_type === hdTransport.Messages.CardanoAddressType.REWARD) {
        let { address_n, address_n_staking } = address_parameters;
        if (address_n.length > 0 && address_n_staking.length > 0) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, `Only stakingPath is allowed for CardanoAddressType.REWARD`);
        }
        if (address_n.length > 0) {
            address_n_staking = address_n;
            address_n = [];
        }
        return Object.assign(Object.assign({}, address_parameters), { address_n,
            address_n_staking });
    }
    return address_parameters;
};

class CardanoGetAddress extends BaseMethod {
    init() {
        var _a, _b, _c;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        this.isCheck = this.hasBundle
            ? !!((_b = this.payload) === null || _b === void 0 ? void 0 : _b.bundle.every((i) => !!i.isCheck))
            : !!((_c = this.payload) === null || _c === void 0 ? void 0 : _c.isCheck);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        this.params = payload.bundle.map((batch) => {
            validateParams(batch, [
                { name: 'addressParameters', type: 'object', required: true },
                { name: 'networkId', type: 'number', required: true },
                { name: 'protocolMagic', type: 'number', required: true },
                { name: 'derivationType', type: 'number' },
                { name: 'address', type: 'string' },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            validateAddressParameters(batch.addressParameters);
            return {
                address_parameters: addressParametersToProto(batch.addressParameters),
                address: batch.address,
                protocol_magic: batch.protocolMagic,
                network_id: batch.networkId,
                derivation_type: typeof batch.derivationType !== 'undefined'
                    ? batch.derivationType
                    : hdTransport.Messages.CardanoDerivationType.ICARUS,
                show_display: typeof batch.showOnChargerWallet === 'boolean' ? !!batch.showOnChargerWallet : true,
            };
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.0.0',
            },
            model_touch: {
                min: '4.1.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (const batch of this.params) {
                const { address_parameters, protocol_magic, network_id, derivation_type, show_display } = batch;
                const response = yield this.device.commands.typedCall('CardanoGetAddress', 'CardanoAddress', {
                    address_parameters,
                    protocol_magic,
                    network_id,
                    derivation_type,
                    show_display,
                });
                let xpub;
                let stakeAddress;
                if (address_parameters.address_type === hdTransport.Messages.CardanoAddressType.BASE && !this.isCheck) {
                    const publicKeyRes = yield this.device.commands.typedCall('CardanoGetPublicKey', 'CardanoPublicKey', {
                        address_n: address_parameters.address_n.slice(0, 3),
                        derivation_type,
                        show_display: false,
                    });
                    xpub = publicKeyRes.message.xpub;
                    const stakeAddressRes = yield this.device.commands.typedCall('CardanoGetAddress', 'CardanoAddress', {
                        address_parameters: {
                            address_type: hdTransport.Messages.CardanoAddressType.REWARD,
                            address_n: [],
                            address_n_staking: address_parameters.address_n_staking,
                        },
                        protocol_magic,
                        network_id,
                        derivation_type,
                        show_display: false,
                    });
                    stakeAddress = stakeAddressRes.message.address;
                }
                const path = serializedPath(batch.address_parameters.address_n);
                responses.push({
                    addressParameters: addressParametersFromProto(batch.address_parameters),
                    protocolMagic: batch.protocol_magic,
                    networkId: batch.network_id,
                    serializedPath: path,
                    serializedStakingPath: serializedPath(batch.address_parameters.address_n_staking),
                    address: response.message.address,
                    xpub,
                    stakeAddress,
                });
                this.postPreviousAddressMessage({
                    path,
                    address: response.message.address,
                });
            }
            validateResult(responses, ['serializedPath', 'serializedStakingPath', 'address'], {
                expectedLength: this.params.length,
            });
            return this.hasBundle ? responses : responses[0];
        });
    }
}

class CardanoGetPublicKey extends BaseMethod {
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = payload.bundle.map((batch) => {
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'derivationType', type: 'number' },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const path = validatePath(batch.path, 3);
            return {
                address_n: path,
                derivation_type: typeof batch.derivationType !== 'undefined'
                    ? batch.derivationType
                    : hdTransport.Messages.CardanoDerivationType.ICARUS,
                show_display: typeof batch.showOnChargerWallet === 'boolean' ? batch.showOnChargerWallet : false,
            };
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.0.0',
            },
            model_touch: {
                min: '4.1.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            const cmd = this.device.getCommands();
            for (let i = 0; i < this.params.length; i++) {
                const batch = this.params[i];
                const { message } = yield cmd.typedCall('CardanoGetPublicKey', 'CardanoPublicKey', batch);
                responses.push({
                    path: batch.address_n,
                    serializedPath: serializedPath(batch.address_n),
                    xpub: message.xpub,
                    node: message.node,
                });
            }
            validateResult(responses, ['xpub'], {
                expectedLength: this.params.length,
            });
            return this.hasBundle ? responses : responses[0];
        });
    }
}

const transformInput = (input) => {
    validateParams(input, [
        { name: 'prev_hash', type: 'string', required: true },
        { name: 'prev_index', type: 'number', required: true },
    ]);
    return {
        input: {
            prev_hash: input.prev_hash,
            prev_index: input.prev_index,
        },
        path: input.path ? validatePath(input.path, 5) : undefined,
    };
};
const transformCollateralInput = (collateralInput) => {
    validateParams(collateralInput, [
        { name: 'prev_hash', type: 'string', required: true },
        { name: 'prev_index', type: 'number', required: true },
    ]);
    return {
        collateralInput: {
            prev_hash: collateralInput.prev_hash,
            prev_index: collateralInput.prev_index,
        },
        path: collateralInput.path ? validatePath(collateralInput.path, 5) : undefined,
    };
};
const transformReferenceInput = (referenceInput) => {
    validateParams(referenceInput, [
        { name: 'prev_hash', type: 'string', required: true },
        { name: 'prev_index', type: 'number', required: true },
    ]);
    return {
        prev_hash: referenceInput.prev_hash,
        prev_index: referenceInput.prev_index,
    };
};

const validateTokens = (tokenAmounts) => {
    tokenAmounts.forEach(tokenAmount => {
        validateParams(tokenAmount, [
            { name: 'assetNameBytes', type: 'string', required: true },
            { name: 'amount', type: 'uint' },
            { name: 'mintAmount', type: 'uint', allowNegative: true },
        ]);
    });
};
const validateTokenBundle = (tokenBundle) => {
    tokenBundle.forEach(tokenGroup => {
        validateParams(tokenGroup, [
            { name: 'policyId', type: 'string', required: true },
            { name: 'tokenAmounts', type: 'array', required: true },
        ]);
        validateTokens(tokenGroup.tokenAmounts);
    });
};
const tokenBundleToProto = (tokenBundle) => {
    validateTokenBundle(tokenBundle);
    return tokenBundle.map(tokenGroup => ({
        policyId: tokenGroup.policyId,
        tokens: tokenAmountsToProto(tokenGroup.tokenAmounts),
    }));
};
const tokenAmountsToProto = (tokenAmounts) => tokenAmounts.map(tokenAmount => ({
    asset_name_bytes: tokenAmount.assetNameBytes,
    amount: tokenAmount.amount,
    mint_amount: tokenAmount.mintAmount,
}));

const hexStringByteLength = (s) => s.length / 2;
const sendChunkedHexString = (typedCall, data, chunkSize, messageType) => __awaiter(void 0, void 0, void 0, function* () {
    let processedSize = 0;
    while (processedSize < data.length) {
        const chunk = data.slice(processedSize, processedSize + chunkSize);
        yield typedCall(messageType, 'CardanoTxItemAck', {
            data: chunk,
        });
        processedSize += chunkSize;
    }
});

const transformOutput = (output) => {
    validateParams(output, [
        { name: 'address', type: 'string' },
        { name: 'amount', type: 'uint', required: true },
        { name: 'tokenBundle', type: 'array', allowEmpty: true },
        { name: 'datumHash', type: 'string' },
        { name: 'format', type: 'number' },
        { name: 'inlineDatum', type: 'string' },
        { name: 'referenceScript', type: 'string' },
    ]);
    const result = {
        output: {
            amount: output.amount,
            asset_groups_count: 0,
            datum_hash: output.datumHash,
            format: output.format,
            inline_datum_size: output.inlineDatum ? hexStringByteLength(output.inlineDatum) : undefined,
            reference_script_size: output.referenceScript
                ? hexStringByteLength(output.referenceScript)
                : undefined,
        },
        inlineDatum: output.inlineDatum,
        referenceScript: output.referenceScript,
    };
    if (output.addressParameters) {
        validateAddressParameters(output.addressParameters);
        result.output.address_parameters = addressParametersToProto(output.addressParameters);
    }
    else {
        result.output.address = output.address;
    }
    if (output.tokenBundle) {
        result.tokenBundle = tokenBundleToProto(output.tokenBundle);
        result.output.asset_groups_count = result.tokenBundle.length;
    }
    else {
        result.output.asset_groups_count = 0;
    }
    return result;
};
const sendOutput = (typedCall, outputWithData) => __awaiter(void 0, void 0, void 0, function* () {
    const MAX_CHUNK_SIZE = 1024 * 2;
    const { output, tokenBundle, inlineDatum, referenceScript } = outputWithData;
    yield typedCall('CardanoTxOutput', 'CardanoTxItemAck', output);
    if (tokenBundle) {
        for (const assetGroup of tokenBundle) {
            yield typedCall('CardanoAssetGroup', 'CardanoTxItemAck', {
                policy_id: assetGroup.policyId,
                tokens_count: assetGroup.tokens.length,
            });
            for (const token of assetGroup.tokens) {
                yield typedCall('CardanoToken', 'CardanoTxItemAck', token);
            }
        }
    }
    if (inlineDatum) {
        yield sendChunkedHexString(typedCall, inlineDatum, MAX_CHUNK_SIZE, 'CardanoTxInlineDatumChunk');
    }
    if (referenceScript) {
        yield sendChunkedHexString(typedCall, referenceScript, MAX_CHUNK_SIZE, 'CardanoTxReferenceScriptChunk');
    }
});

const ipv4AddressToHex = (ipv4Address) => Buffer.from(ipv4Address.split('.').map(ipPart => parseInt(ipPart, 10))).toString('hex');
const ipv6AddressToHex = (ipv6Address) => ipv6Address.split(':').join('');
const validatePoolMargin = (margin) => {
    validateParams(margin, [
        { name: 'numerator', type: 'string', required: true },
        { name: 'denominator', type: 'string', required: true },
    ]);
};
const validatePoolMetadata = (metadata) => {
    validateParams(metadata, [
        { name: 'url', type: 'string', required: true },
        { name: 'hash', type: 'string', required: true },
    ]);
};
const validatePoolRelay = (relay) => {
    validateParams(relay, [{ name: 'type', type: 'number', required: true }]);
    if (relay.type === hdTransport.Messages.CardanoPoolRelayType.SINGLE_HOST_IP) {
        const paramsToValidate = [
            { name: 'port', type: 'number', required: true },
        ];
        if (relay.ipv4Address) {
            paramsToValidate.push({ name: 'ipv4Address', type: 'string', required: false });
        }
        if (relay.ipv6Address) {
            paramsToValidate.push({ name: 'ipv6Address', type: 'string', required: false });
        }
        validateParams(relay, paramsToValidate);
        if (!relay.ipv4Address && !relay.ipv6Address) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'Either ipv4Address or ipv6Address must be supplied');
        }
    }
    else if (relay.type === hdTransport.Messages.CardanoPoolRelayType.SINGLE_HOST_NAME) {
        validateParams(relay, [
            { name: 'hostName', type: 'string', required: true },
            { name: 'port', type: 'number', required: true },
        ]);
    }
    else if (relay.type === hdTransport.Messages.CardanoPoolRelayType.MULTIPLE_HOST_NAME) {
        validateParams(relay, [{ name: 'hostName', type: 'string', required: true }]);
    }
};
const validatePoolOwners = (owners) => {
    owners.forEach(owner => {
        if (owner.stakingKeyHash) {
            validateParams(owner, [
                { name: 'stakingKeyHash', type: 'string', required: !owner.stakingKeyPath },
            ]);
        }
        if (owner.stakingKeyPath) {
            validatePath(owner.stakingKeyPath, 5);
        }
        if (!owner.stakingKeyHash && !owner.stakingKeyPath) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'Either stakingKeyHash or stakingKeyPath must be supplied');
        }
    });
    const ownersAsPathCount = owners.filter(owner => !!owner.stakingKeyPath).length;
    if (ownersAsPathCount !== 1) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'Exactly one pool owner must be given as a path');
    }
};
const validatePoolParameters = (poolParameters) => {
    validateParams(poolParameters, [
        { name: 'poolId', type: 'string', required: true },
        { name: 'vrfKeyHash', type: 'string', required: true },
        { name: 'pledge', type: 'string', required: true },
        { name: 'cost', type: 'string', required: true },
        { name: 'margin', type: 'object', required: true },
        { name: 'rewardAccount', type: 'string', required: true },
        { name: 'owners', type: 'array', required: true },
        { name: 'relays', type: 'array', required: true, allowEmpty: true },
        { name: 'metadata', type: 'object' },
    ]);
    validatePoolMargin(poolParameters.margin);
    validatePoolOwners(poolParameters.owners);
    poolParameters.relays.forEach(validatePoolRelay);
    if (poolParameters.metadata) {
        validatePoolMetadata(poolParameters.metadata);
    }
};
const transformPoolParameters = (poolParameters) => {
    if (!poolParameters) {
        return { poolParameters: undefined, poolOwners: [], poolRelays: [] };
    }
    validatePoolParameters(poolParameters);
    return {
        poolParameters: {
            pool_id: poolParameters.poolId,
            vrf_key_hash: poolParameters.vrfKeyHash,
            pledge: poolParameters.pledge,
            cost: poolParameters.cost,
            margin_numerator: poolParameters.margin.numerator,
            margin_denominator: poolParameters.margin.denominator,
            reward_account: poolParameters.rewardAccount,
            metadata: poolParameters.metadata,
            owners_count: poolParameters.owners.length,
            relays_count: poolParameters.relays.length,
        },
        poolOwners: poolParameters.owners.map(owner => ({
            staking_key_hash: owner.stakingKeyHash,
            staking_key_path: owner.stakingKeyPath ? validatePath(owner.stakingKeyPath, 5) : undefined,
        })),
        poolRelays: poolParameters.relays.map(relay => ({
            type: relay.type,
            ipv4_address: relay.ipv4Address ? ipv4AddressToHex(relay.ipv4Address) : undefined,
            ipv6_address: relay.ipv6Address ? ipv6AddressToHex(relay.ipv6Address) : undefined,
            host_name: relay.hostName,
            port: relay.port,
        })),
    };
};
const transformCertificate = (certificate) => {
    const paramsToValidate = [
        { name: 'type', type: 'number', required: true },
    ];
    if (certificate.type !== hdTransport.Messages.CardanoCertificateType.STAKE_POOL_REGISTRATION) {
        paramsToValidate.push({ name: 'scriptHash', type: 'string' });
        paramsToValidate.push({ name: 'keyHash', type: 'string' });
    }
    if (certificate.type === hdTransport.Messages.CardanoCertificateType.STAKE_DELEGATION) {
        paramsToValidate.push({ name: 'pool', type: 'string', required: true });
    }
    if (certificate.type === hdTransport.Messages.CardanoCertificateType.STAKE_POOL_REGISTRATION) {
        paramsToValidate.push({ name: 'poolParameters', type: 'object', required: true });
    }
    validateParams(certificate, paramsToValidate);
    const { poolParameters, poolOwners, poolRelays } = transformPoolParameters(certificate.poolParameters);
    return {
        certificate: {
            type: certificate.type,
            path: certificate.path ? validatePath(certificate.path, 5) : undefined,
            script_hash: certificate.scriptHash,
            key_hash: certificate.keyHash,
            pool: certificate.pool,
            pool_parameters: poolParameters,
        },
        poolOwners,
        poolRelays,
    };
};

const MAX_DELEGATION_COUNT = 32;
const transformDelegation = (delegation) => {
    validateParams(delegation, [
        { name: 'votingPublicKey', type: 'string', required: true },
        { name: 'weight', type: 'uint', required: true },
    ]);
    return {
        voting_public_key: delegation.votingPublicKey,
        weight: delegation.weight,
    };
};
const transformGovernanceRegistrationParameters = (governanceRegistrationParameters) => {
    validateParams(governanceRegistrationParameters, [
        { name: 'votingPublicKey', type: 'string' },
        { name: 'stakingPath', required: true },
        { name: 'nonce', type: 'uint', required: true },
        { name: 'format', type: 'number' },
        { name: 'delegations', type: 'array', allowEmpty: true },
        { name: 'votingPurpose', type: 'uint' },
    ]);
    validateAddressParameters(governanceRegistrationParameters.rewardAddressParameters);
    const { delegations } = governanceRegistrationParameters;
    if (delegations && delegations.length > MAX_DELEGATION_COUNT) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, `At most ${MAX_DELEGATION_COUNT} delegations are allowed in a governance registration`);
    }
    return {
        voting_public_key: governanceRegistrationParameters.votingPublicKey,
        staking_path: validatePath(governanceRegistrationParameters.stakingPath, 3),
        reward_address_parameters: addressParametersToProto(governanceRegistrationParameters.rewardAddressParameters),
        nonce: governanceRegistrationParameters.nonce,
        format: governanceRegistrationParameters.format,
        delegations: delegations === null || delegations === void 0 ? void 0 : delegations.map(transformDelegation),
        voting_purpose: governanceRegistrationParameters.votingPurpose,
    };
};
const transformAuxiliaryData = (auxiliaryData) => {
    validateParams(auxiliaryData, [
        {
            name: 'hash',
            type: 'string',
        },
    ]);
    let governanceRegistrationParameters;
    if (auxiliaryData.governanceRegistrationParameters) {
        governanceRegistrationParameters = transformGovernanceRegistrationParameters(auxiliaryData.governanceRegistrationParameters);
    }
    return {
        hash: auxiliaryData.hash,
        governance_registration_parameters: governanceRegistrationParameters,
    };
};
const modifyAuxiliaryDataForBackwardsCompatibility = (auxiliary_data) => {
    const { governance_registration_parameters } = auxiliary_data;
    if (governance_registration_parameters) {
        governance_registration_parameters.reward_address_parameters =
            modifyAddressParametersForBackwardsCompatibility(governance_registration_parameters.reward_address_parameters);
        return Object.assign(Object.assign({}, auxiliary_data), { governance_registration_parameters });
    }
    return auxiliary_data;
};

const gatherWitnessPaths = (inputsWithPath, certificatesWithPoolOwnersAndRelays, withdrawals, collateralInputsWithPath, requiredSigners, additionalWitnessRequests, signingMode) => {
    const witnessPaths = new Map();
    function _insert(path) {
        const pathKey = JSON.stringify(path);
        witnessPaths.set(pathKey, path);
    }
    if (signingMode !== hdTransport.Messages.CardanoTxSigningMode.MULTISIG_TRANSACTION) {
        inputsWithPath.forEach(({ path }) => {
            if (path)
                _insert(path);
        });
        certificatesWithPoolOwnersAndRelays.forEach(({ certificate, poolOwners }) => {
            if (certificate.path &&
                (certificate.type === hdTransport.Messages.CardanoCertificateType.STAKE_DELEGATION ||
                    certificate.type === hdTransport.Messages.CardanoCertificateType.STAKE_DEREGISTRATION)) {
                _insert(certificate.path);
            }
            poolOwners.forEach(poolOwner => {
                if (poolOwner.staking_key_path)
                    _insert(poolOwner.staking_key_path);
            });
        });
        withdrawals.forEach(({ path }) => {
            if (path)
                _insert(path);
        });
    }
    if (signingMode === hdTransport.Messages.CardanoTxSigningMode.PLUTUS_TRANSACTION) {
        collateralInputsWithPath.forEach(({ path }) => {
            if (path)
                _insert(path);
        });
    }
    requiredSigners.forEach(({ key_path }) => {
        if (key_path)
            _insert(key_path);
    });
    additionalWitnessRequests.forEach(path => {
        _insert(path);
    });
    return Array.from(witnessPaths.values());
};

class CardanoSignTransaction extends BaseMethod {
    getVersionRange() {
        return {
            model_mini: {
                min: '3.0.0',
            },
            model_touch: {
                min: '4.1.0',
            },
        };
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const { payload } = this;
        validateParams(payload, [
            { name: 'signingMode', type: 'number', required: true },
            { name: 'inputs', type: 'array', required: true },
            { name: 'outputs', type: 'array', required: true, allowEmpty: true },
            { name: 'fee', type: 'uint', required: true },
            { name: 'ttl', type: 'uint' },
            { name: 'certificates', type: 'array', allowEmpty: true },
            { name: 'withdrawals', type: 'array', allowEmpty: true },
            { name: 'mint', type: 'array', allowEmpty: true },
            { name: 'validityIntervalStart', type: 'uint' },
            { name: 'scriptDataHash', type: 'string' },
            { name: 'collateralInputs', type: 'array', allowEmpty: true },
            { name: 'requiredSigners', type: 'array', allowEmpty: true },
            { name: 'totalCollateral', type: 'uint' },
            { name: 'referenceInputs', type: 'array', allowEmpty: true },
            { name: 'protocolMagic', type: 'number', required: true },
            { name: 'networkId', type: 'number', required: true },
            { name: 'additionalWitnessRequests', type: 'array', allowEmpty: true },
            { name: 'derivationType', type: 'number' },
            { name: 'includeNetworkId', type: 'boolean' },
        ]);
        const inputsWithPath = payload.inputs.map(transformInput);
        const outputsWithData = payload.outputs.map(transformOutput);
        let certificatesWithPoolOwnersAndRelays = [];
        if (payload.certificates) {
            certificatesWithPoolOwnersAndRelays = payload.certificates.map(transformCertificate);
        }
        let withdrawals = [];
        if (payload.withdrawals) {
            withdrawals = payload.withdrawals.map((withdrawal) => {
                validateParams(withdrawal, [
                    { name: 'amount', type: 'uint', required: true },
                    { name: 'scriptHash', type: 'string' },
                    { name: 'keyHash', type: 'string' },
                ]);
                return {
                    path: withdrawal.path ? validatePath(withdrawal.path, 5) : undefined,
                    amount: withdrawal.amount,
                    script_hash: withdrawal.scriptHash,
                    key_hash: withdrawal.keyHash,
                };
            });
        }
        let mint = [];
        if (payload.mint) {
            mint = tokenBundleToProto(payload.mint);
        }
        let auxiliaryData;
        if (payload.auxiliaryData) {
            auxiliaryData = transformAuxiliaryData(payload.auxiliaryData);
        }
        let additionalWitnessRequests = [];
        if (payload.additionalWitnessRequests) {
            additionalWitnessRequests = payload.additionalWitnessRequests.map((witnessRequest) => validatePath(witnessRequest, 3));
        }
        let collateralInputsWithPath = [];
        if (payload.collateralInputs) {
            collateralInputsWithPath = payload.collateralInputs.map(transformCollateralInput);
        }
        let requiredSigners = [];
        if (payload.requiredSigners) {
            requiredSigners = payload.requiredSigners.map((requiredSigner) => {
                validateParams(requiredSigner, [{ name: 'keyHash', type: 'string' }]);
                return {
                    key_path: requiredSigner.keyPath ? validatePath(requiredSigner.keyPath, 3) : undefined,
                    key_hash: requiredSigner.keyHash,
                };
            });
        }
        const collateralReturnWithData = payload.collateralReturn
            ? transformOutput(payload.collateralReturn)
            : undefined;
        let referenceInputs = [];
        if (payload.referenceInputs) {
            referenceInputs = payload.referenceInputs.map(transformReferenceInput);
        }
        this.params = {
            signingMode: payload.signingMode,
            inputsWithPath,
            outputsWithData,
            fee: payload.fee,
            ttl: payload.ttl,
            certificatesWithPoolOwnersAndRelays,
            withdrawals,
            mint,
            auxiliaryData,
            validityIntervalStart: payload.validityIntervalStart,
            scriptDataHash: payload.scriptDataHash,
            collateralInputsWithPath,
            requiredSigners,
            collateralReturnWithData,
            totalCollateral: payload.totalCollateral,
            referenceInputs,
            protocolMagic: payload.protocolMagic,
            networkId: payload.networkId,
            witnessPaths: gatherWitnessPaths(inputsWithPath, certificatesWithPoolOwnersAndRelays, withdrawals, collateralInputsWithPath, requiredSigners, additionalWitnessRequests, payload.signingMode),
            additionalWitnessRequests,
            derivationType: typeof payload.derivationType !== 'undefined'
                ? payload.derivationType
                : hdTransport.Messages.CardanoDerivationType.ICARUS,
            includeNetworkId: payload.includeNetworkId,
        };
    }
    signTx() {
        return __awaiter(this, void 0, void 0, function* () {
            const typedCall = this.device.getCommands().typedCall.bind(this.device.getCommands());
            const hasAuxiliaryData = !!this.params.auxiliaryData;
            const signTxInitMessage = {
                signing_mode: this.params.signingMode,
                protocol_magic: this.params.protocolMagic,
                network_id: this.params.networkId,
                inputs_count: this.params.inputsWithPath.length,
                outputs_count: this.params.outputsWithData.length,
                fee: this.params.fee,
                ttl: this.params.ttl,
                certificates_count: this.params.certificatesWithPoolOwnersAndRelays.length,
                withdrawals_count: this.params.withdrawals.length,
                has_auxiliary_data: hasAuxiliaryData,
                validity_interval_start: this.params.validityIntervalStart,
                witness_requests_count: this.params.witnessPaths.length,
                minting_asset_groups_count: this.params.mint.length,
                script_data_hash: this.params.scriptDataHash,
                collateral_inputs_count: this.params.collateralInputsWithPath.length,
                required_signers_count: this.params.requiredSigners.length,
                has_collateral_return: this.params.collateralReturnWithData != null,
                total_collateral: this.params.totalCollateral,
                reference_inputs_count: this.params.referenceInputs.length,
                derivation_type: this.params.derivationType,
                include_network_id: this.params.includeNetworkId,
            };
            yield typedCall('CardanoSignTxInit', 'CardanoTxItemAck', signTxInitMessage);
            for (const { input } of this.params.inputsWithPath) {
                yield typedCall('CardanoTxInput', 'CardanoTxItemAck', input);
            }
            for (const outputWithData of this.params.outputsWithData) {
                yield sendOutput(typedCall, outputWithData);
            }
            for (const { certificate, poolOwners, poolRelays } of this.params
                .certificatesWithPoolOwnersAndRelays) {
                yield typedCall('CardanoTxCertificate', 'CardanoTxItemAck', certificate);
                for (const poolOwner of poolOwners) {
                    yield typedCall('CardanoPoolOwner', 'CardanoTxItemAck', poolOwner);
                }
                for (const poolRelay of poolRelays) {
                    yield typedCall('CardanoPoolRelayParameters', 'CardanoTxItemAck', poolRelay);
                }
            }
            for (const withdrawal of this.params.withdrawals) {
                yield typedCall('CardanoTxWithdrawal', 'CardanoTxItemAck', withdrawal);
            }
            let auxiliaryDataSupplement;
            if (this.params.auxiliaryData) {
                const { catalyst_registration_parameters } = this.params.auxiliaryData;
                if (catalyst_registration_parameters) {
                    this.params.auxiliaryData = modifyAuxiliaryDataForBackwardsCompatibility(this.params.auxiliaryData);
                }
                const { message } = yield typedCall('CardanoTxAuxiliaryData', 'CardanoTxAuxiliaryDataSupplement', this.params.auxiliaryData);
                const auxiliaryDataType = hdTransport.Messages.CardanoTxAuxiliaryDataSupplementType[message.type];
                if (auxiliaryDataType !== hdTransport.Messages.CardanoTxAuxiliaryDataSupplementType.NONE) {
                    auxiliaryDataSupplement = {
                        type: auxiliaryDataType,
                        auxiliaryDataHash: message.auxiliary_data_hash,
                        governanceSignature: message.governance_signature,
                        catalystSignature: message.governance_signature,
                    };
                }
                yield typedCall('CardanoTxHostAck', 'CardanoTxItemAck');
            }
            if (this.params.mint.length > 0) {
                yield typedCall('CardanoTxMint', 'CardanoTxItemAck', {
                    asset_groups_count: this.params.mint.length,
                });
                for (const assetGroup of this.params.mint) {
                    yield typedCall('CardanoAssetGroup', 'CardanoTxItemAck', {
                        policy_id: assetGroup.policyId,
                        tokens_count: assetGroup.tokens.length,
                    });
                    for (const token of assetGroup.tokens) {
                        yield typedCall('CardanoToken', 'CardanoTxItemAck', token);
                    }
                }
            }
            for (const { collateralInput } of this.params.collateralInputsWithPath) {
                yield typedCall('CardanoTxCollateralInput', 'CardanoTxItemAck', collateralInput);
            }
            for (const requiredSigner of this.params.requiredSigners) {
                yield typedCall('CardanoTxRequiredSigner', 'CardanoTxItemAck', requiredSigner);
            }
            if (this.params.collateralReturnWithData) {
                yield sendOutput(typedCall, this.params.collateralReturnWithData);
            }
            for (const referenceInput of this.params.referenceInputs) {
                yield typedCall('CardanoTxReferenceInput', 'CardanoTxItemAck', referenceInput);
            }
            const witnesses = [];
            for (const path of this.params.witnessPaths) {
                const { message } = yield typedCall('CardanoTxWitnessRequest', 'CardanoTxWitnessResponse', {
                    path,
                });
                witnesses.push({
                    type: hdTransport.Messages.CardanoTxWitnessType[message.type],
                    pubKey: message.pub_key,
                    signature: message.signature,
                    chainCode: message.chain_code,
                });
            }
            const { message: txBodyHashMessage } = yield typedCall('CardanoTxHostAck', 'CardanoTxBodyHash');
            yield typedCall('CardanoTxHostAck', 'CardanoSignTxFinished');
            return { hash: txBodyHashMessage.tx_hash, witnesses, auxiliaryDataSupplement };
        });
    }
    run() {
        return this.signTx();
    }
}

class CardanoSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        const { payload } = this;
        validateParams(payload, [
            { name: 'path', type: 'string', required: true },
            { name: 'message', type: 'string', required: true },
            { name: 'derivationType', type: 'number' },
            { name: 'networkId', type: 'number', required: true },
        ]);
        const addressN = validatePath(payload.path, 3);
        this.params = {
            address_n: addressN,
            message: payload.message,
            derivation_type: typeof payload.derivationType !== 'undefined'
                ? payload.derivationType
                : hdTransport.Messages.CardanoDerivationType.ICARUS,
            network_id: payload.networkId,
        };
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('CardanoSignMessage', 'CardanoMessageSignature', this.params);
            return res.message;
        });
    }
}

class FilecoinGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'isTestnet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
                testnet: batch.isTestnet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.10.0',
            },
            model_touch: {
                min: '3.5.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('FilecoinGetAddress', 'FilecoinAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class FilecoinSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'rawTx', type: 'hexString', required: true },
            { name: 'isTestnet', type: 'boolean' },
        ]);
        const { path, rawTx, isTestnet } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            raw_tx: formatAnyHex(rawTx),
            testnet: isTestnet,
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '2.10.0',
            },
            model_touch: {
                min: '3.5.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('FilecoinSignTx', 'FilecoinSignedTx', Object.assign({}, this.params));
            const { signature } = res.message;
            return {
                path: serializedPath(this.params.address_n),
                signature,
            };
        });
    }
}

var Networks;
(function (Networks) {
    Networks["Polkadot"] = "polkadot";
    Networks["Westend"] = "westend";
    Networks["Kusama"] = "kusama";
    Networks["Astar"] = "astar";
    Networks["JoyStream"] = "joystream";
    Networks["Manta"] = "manta";
})(Networks || (Networks = {}));
const baseVersionRange = {
    model_mini: {
        min: '3.0.0',
    },
    model_touch: {
        min: '4.3.0',
    },
};
const specialVersionRange = {
    [Networks.JoyStream]: {
        model_mini: {
            min: '3.6.0',
        },
        model_touch: {
            min: '4.7.0',
        },
    },
    [Networks.Manta]: {
        model_mini: {
            min: '3.7.0',
        },
        model_touch: {
            min: '4.9.0',
        },
    },
};
function getPolkadotVersionRange(network) {
    var _a;
    return (_a = specialVersionRange[network]) !== null && _a !== void 0 ? _a : baseVersionRange;
}
function getPolkadotVersionRangeWithBundle(networks) {
    if (networks.includes(Networks.JoyStream)) {
        return specialVersionRange[Networks.JoyStream];
    }
    if (networks.includes(Networks.Manta)) {
        return specialVersionRange[Networks.Manta];
    }
    return baseVersionRange;
}

class PolkadotGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'prefix', required: true },
                { name: 'network', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            const { prefix, network } = batch;
            this.params.push({
                address_n: addressN,
                prefix,
                network,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        const networks = this.params.map(param => param.network);
        return getPolkadotVersionRangeWithBundle(networks);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('PolkadotGetAddress', 'PolkadotAddress', Object.assign({}, param));
                const { address, public_key } = res.message;
                const path = serializedPath(param.address_n);
                responses.push({
                    path,
                    address,
                    pub: public_key !== null && public_key !== void 0 ? public_key : '',
                    publicKey: public_key !== null && public_key !== void 0 ? public_key : '',
                });
                this.postPreviousAddressMessage({
                    path,
                    address,
                });
            }
            validateResult(responses, ['address', 'pub'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class PolkadotSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'network', required: true },
            { name: 'rawTx', type: 'hexString', required: true },
        ]);
        const { path, rawTx, network } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            network,
            raw_tx: formatAnyHex(rawTx),
        };
    }
    getVersionRange() {
        return getPolkadotVersionRange(this.params.network);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('PolkadotSignTx', 'PolkadotSignedTx', Object.assign({}, this.params));
            const { signature } = res.message;
            return {
                path: serializedPath(this.params.address_n),
                signature,
            };
        });
    }
}

class KaspaGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'prefix', type: 'string' },
                { name: 'scheme', type: 'string' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
                prefix: batch.prefix,
                scheme: batch.scheme,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.0.0',
            },
            model_touch: {
                min: '4.3.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('KaspaGetAddress', 'KaspaAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

var SignatureType;
(function (SignatureType) {
    SignatureType[SignatureType["SIGHASH_ALL"] = 1] = "SIGHASH_ALL";
    SignatureType[SignatureType["SIGHASH_NONE"] = 2] = "SIGHASH_NONE";
    SignatureType[SignatureType["SIGHASH_SINGLE"] = 3] = "SIGHASH_SINGLE";
    SignatureType[SignatureType["SIGHASH_FORKID"] = 64] = "SIGHASH_FORKID";
    SignatureType[SignatureType["SIGHASH_ANYONECANPAY"] = 128] = "SIGHASH_ANYONECANPAY";
})(SignatureType || (SignatureType = {}));

function isBuffer(arg) {
    return buffer.Buffer.isBuffer(arg) || arg instanceof Uint8Array;
}
function bigNumberToBuffer(bn, options) {
    const hex = bn.toString(16);
    const paddedHex = hex.padStart(options.size * 2, '0');
    return buffer.Buffer.from(paddedHex, 'hex');
}
class BufferWriter {
    constructor(obj) {
        this.bufLen = 0;
        if (obj) {
            this.set(obj);
        }
        else {
            this.bufs = [];
        }
    }
    set(obj) {
        this.bufs = obj.bufs || this.bufs || [];
        this.bufLen = this.bufs.reduce((prev, buf) => prev + buf.length, 0);
        return this;
    }
    toBuffer() {
        return this.concat();
    }
    concat() {
        return buffer.Buffer.concat(this.bufs, this.bufLen);
    }
    write(buf) {
        if (!isBuffer(buf))
            throw new Error('BufferWriter.write: Invalid type');
        this.bufs.push(buf);
        this.bufLen += buf.length;
        return this;
    }
    writeReverse(buf) {
        if (!isBuffer(buf))
            throw new Error('BufferWriter.write: Invalid type');
        this.bufs.push(buf.reverse());
        this.bufLen += buf.length;
        return this;
    }
    writeVarBytes(buf) {
        if (!isBuffer(buf))
            throw new Error('BufferWriter.write: Invalid type');
        this.writeUInt64LE(new BigNumber__default["default"](buf.length));
        this.write(buf);
        return this;
    }
    writeUInt8(n) {
        const buf = buffer.Buffer.alloc(1);
        buf.writeUInt8(n, 0);
        this.write(buf);
        return this;
    }
    writeUInt16BE(n) {
        const buf = buffer.Buffer.alloc(2);
        buf.writeUInt16BE(n, 0);
        this.write(buf);
        return this;
    }
    writeUInt16LE(n) {
        const buf = buffer.Buffer.alloc(2);
        buf.writeUInt16LE(n, 0);
        this.write(buf);
        return this;
    }
    writeUInt32BE(n) {
        const buf = buffer.Buffer.alloc(4);
        buf.writeUInt32BE(n, 0);
        this.write(buf);
        return this;
    }
    writeInt32LE(n) {
        const buf = buffer.Buffer.alloc(4);
        buf.writeInt32LE(n, 0);
        this.write(buf);
        return this;
    }
    writeUInt32LE(n) {
        const buf = buffer.Buffer.alloc(4);
        buf.writeUInt32LE(n, 0);
        this.write(buf);
        return this;
    }
    writeUInt64BEBN(bn) {
        const buf = bigNumberToBuffer(bn, { size: 8 });
        this.write(buf);
        return this;
    }
    writeUInt64LE(bn) {
        const buf = bigNumberToBuffer(bn, { size: 8 });
        this.writeReverse(buf);
        return this;
    }
    writeVarintNum(n) {
        const buf = BufferWriter.varintBufNum(n);
        this.write(buf);
        return this;
    }
    writeVarintBN(bn) {
        const buf = BufferWriter.varintBufBN(bn);
        this.write(buf);
        return this;
    }
    static varintBufNum(n) {
        let buf;
        if (n < 253) {
            buf = buffer.Buffer.alloc(1);
            buf.writeUInt8(n, 0);
        }
        else if (n < 0x10000) {
            buf = buffer.Buffer.alloc(1 + 2);
            buf.writeUInt8(253, 0);
            buf.writeUInt16LE(n, 1);
        }
        else if (n < 0x100000000) {
            buf = buffer.Buffer.alloc(1 + 4);
            buf.writeUInt8(254, 0);
            buf.writeUInt32LE(n, 1);
        }
        else {
            buf = buffer.Buffer.alloc(1 + 8);
            buf.writeUInt8(255, 0);
            buf.writeInt32LE(n & -1, 1);
            buf.writeUInt32LE(Math.floor(n / 0x100000000), 5);
        }
        return buf;
    }
    static varintBufBN(bn) {
        let buf;
        const n = bn.toNumber();
        if (n < 253) {
            buf = buffer.Buffer.alloc(1);
            buf.writeUInt8(n, 0);
        }
        else if (n < 0x10000) {
            buf = buffer.Buffer.alloc(1 + 2);
            buf.writeUInt8(253, 0);
            buf.writeUInt16LE(n, 1);
        }
        else if (n < 0x100000000) {
            buf = buffer.Buffer.alloc(1 + 4);
            buf.writeUInt8(254, 0);
            buf.writeUInt32LE(n, 1);
        }
        else {
            const bw = new BufferWriter();
            bw.writeUInt8(255);
            bw.writeUInt64LE(bn);
            buf = bw.concat();
        }
        return buf;
    }
}

const TransactionSigningHashKey = Buffer.from('TransactionSigningHash');
class HashWriter {
    constructor() {
        this.bw = new BufferWriter();
        this.blake2b = blake2b.blake2b.create({ dkLen: 32, key: TransactionSigningHashKey });
        this.hash = {
            update: (buf) => {
                this.bw.write(buf);
                this.blake2b.update(buf);
            },
            digest: () => Buffer.from(this.blake2b.digest()),
        };
    }
    writeUInt8(value) {
        const buf = new BufferWriter();
        buf.writeUInt8(value);
        this.hash.update(buf.toBuffer());
    }
    writeUInt16LE(value) {
        const buf = new BufferWriter();
        buf.writeUInt16LE(value);
        this.hash.update(buf.toBuffer());
    }
    writeUInt32LE(value) {
        const buf = new BufferWriter();
        buf.writeUInt32LE(value);
        this.hash.update(buf.toBuffer());
    }
    writeUInt64LE(value) {
        const buf = new BufferWriter();
        buf.writeUInt64LE(new BigNumber__default["default"](value));
        this.hash.update(buf.toBuffer());
    }
    writeVarBytes(buf) {
        this.writeUInt64LE(buf.length);
        this.hash.update(buf);
    }
    writeHash(buf) {
        this.hash.update(buf);
    }
    finalize() {
        return this.hash.digest();
    }
    toBuffer() {
        return this.bw.toBuffer();
    }
}

function zeroHash() {
    return Buffer.alloc(32);
}
function zeroSubnetworkID() {
    return Buffer.alloc(20);
}
function isSighashAnyoneCanPay(sighashType) {
    return (sighashType & SignatureType.SIGHASH_ANYONECANPAY) === SignatureType.SIGHASH_ANYONECANPAY;
}
function isSighashSingle(sighashType) {
    return (sighashType & 31) === SignatureType.SIGHASH_SINGLE;
}
function isSighashNone(sighashType) {
    return (sighashType & 31) === SignatureType.SIGHASH_NONE;
}
function hashOutpoint(hashWriter, input) {
    hashWriter.writeHash(Buffer.from(input.prevTxId, 'hex'));
    hashWriter.writeUInt32LE(input.outputIndex);
}
function getPreviousOutputsHash(transaction, sighashType) {
    if (isSighashAnyoneCanPay(sighashType)) {
        return zeroHash();
    }
    const hashWriter = new HashWriter();
    transaction.inputs.forEach(input => hashOutpoint(hashWriter, input));
    return hashWriter.finalize();
}
function getSequencesHash(transaction, sighashType) {
    if (isSighashSingle(sighashType) ||
        isSighashAnyoneCanPay(sighashType) ||
        isSighashNone(sighashType)) {
        return zeroHash();
    }
    const hashWriter = new HashWriter();
    transaction.inputs.forEach(input => hashWriter.writeUInt64LE(input.sequenceNumber));
    return hashWriter.finalize();
}
function getSigOpCountsHash(transaction, sighashType) {
    if (isSighashAnyoneCanPay(sighashType)) {
        return zeroHash();
    }
    const hashWriter = new HashWriter();
    transaction.inputs.forEach(input => hashWriter.writeUInt8(input.sigOpCount));
    return hashWriter.finalize();
}
function hashTxOut(hashWriter, output) {
    hashWriter.writeUInt64LE(output.satoshis);
    hashWriter.writeUInt16LE(0);
    hashWriter.writeVarBytes(Buffer.from(output.script, 'hex'));
}
function getOutputsHash(transaction, inputNumber, sighashType) {
    if (isSighashNone(sighashType)) {
        return zeroHash();
    }
    if (isSighashSingle(sighashType)) {
        if (inputNumber >= transaction.outputs.length) {
            return zeroHash();
        }
        const hashWriter = new HashWriter();
        return hashWriter.finalize();
    }
    const hashWriter = new HashWriter();
    transaction.outputs.forEach(output => hashTxOut(hashWriter, output));
    return hashWriter.finalize();
}
function serialize(transaction, inputNumber) {
    var _a;
    const hashWriter = new HashWriter();
    hashWriter.writeUInt16LE(transaction.version);
    hashWriter.writeHash(getPreviousOutputsHash(transaction, transaction.sigHashType));
    hashWriter.writeHash(getSequencesHash(transaction, transaction.sigHashType));
    hashWriter.writeHash(getSigOpCountsHash(transaction, transaction.sigHashType));
    const input = transaction.inputs[inputNumber];
    hashOutpoint(hashWriter, input);
    hashWriter.writeUInt16LE(0);
    hashWriter.writeVarBytes(Buffer.from(input.output.script, 'hex'));
    hashWriter.writeUInt64LE(input.output.satoshis);
    hashWriter.writeUInt64LE(input.sequenceNumber);
    hashWriter.writeUInt8((_a = transaction.sigOpCount) !== null && _a !== void 0 ? _a : 1);
    hashWriter.writeHash(getOutputsHash(transaction, inputNumber, transaction.sigHashType));
    hashWriter.writeUInt64LE(transaction.lockTime);
    hashWriter.writeHash(zeroSubnetworkID());
    hashWriter.writeUInt64LE(0);
    hashWriter.writeHash(zeroHash());
    hashWriter.writeUInt8(transaction.sigHashType);
    return {
        hash: hashWriter.finalize(),
        raw: hashWriter.toBuffer(),
    };
}

class KaspaSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a, _b, _c, _d, _e;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        const payload = this.payload;
        validateParams(payload, [
            { name: 'version', type: 'number' },
            { name: 'sigHashType', type: 'number', required: true },
            { name: 'inputs', type: 'array', required: true },
            { name: 'outputs', type: 'array', required: true },
            { name: 'lockTime', required: true },
            { name: 'sigOpCount', type: 'number' },
            { name: 'subNetworkID', type: 'string' },
        ]);
        const inputs = payload.inputs.map(input => {
            var _a;
            validateParams(input, [
                { name: 'path', type: 'string', required: true },
                { name: 'prevTxId', type: 'string', required: true },
                { name: 'outputIndex', type: 'number', required: true },
                { name: 'sequenceNumber', required: true },
            ]);
            const addressN = validatePath(input.path, 3);
            return Object.assign(Object.assign({}, input), { path: addressN, sigOpCount: (_a = input.sigOpCount) !== null && _a !== void 0 ? _a : 1 });
        });
        const outputs = payload.outputs.map(output => {
            var _a;
            validateParams(output, [
                { name: 'satoshis', required: true },
                { name: 'script', type: 'string', required: true },
                { name: 'scriptVersion', type: 'number' },
            ]);
            return Object.assign(Object.assign({}, output), { scriptVersion: (_a = output.scriptVersion) !== null && _a !== void 0 ? _a : 0 });
        });
        this.params = Object.assign(Object.assign({}, payload), { inputs,
            outputs, scheme: (_a = payload.scheme) !== null && _a !== void 0 ? _a : 'schnorr', prefix: (_b = payload.prefix) !== null && _b !== void 0 ? _b : 'kaspa', sigHashType: (_c = payload.sigHashType) !== null && _c !== void 0 ? _c : SignatureType.SIGHASH_ALL | SignatureType.SIGHASH_FORKID, sigOpCount: (_d = payload.sigOpCount) !== null && _d !== void 0 ? _d : 1, subNetworkID: (_e = payload.subNetworkID) !== null && _e !== void 0 ? _e : utils.bytesToHex(zeroSubnetworkID()) });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.0.0',
            },
            model_touch: {
                min: '4.3.0',
            },
        };
    }
    processTxRequest(typedCall, res, index, signature) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (res.type === 'KaspaSignedTx') {
                signature.push({
                    index,
                    signature: res.message.signature,
                });
                return signature;
            }
            if (res.type === 'KaspaTxInputRequest') {
                signature.push({
                    index,
                    signature: (_a = res.message.signature) !== null && _a !== void 0 ? _a : '',
                });
                const nextIndex = res.message.request_index;
                const { raw: rawMessage } = serialize(this.params, nextIndex);
                const input = this.params.inputs[nextIndex];
                const response = yield typedCall('KaspaTxInputAck', ['KaspaTxInputRequest', 'KaspaSignedTx'], {
                    address_n: input.path,
                    raw_message: utils.bytesToHex(rawMessage),
                });
                return this.processTxRequest(typedCall, response, nextIndex, signature);
            }
            return signature;
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { raw: rawMessage } = serialize(this.params, 0);
            const input = this.params.inputs[0];
            const { device, params } = this;
            const response = yield device.commands.typedCall('KaspaSignTx', ['KaspaTxInputRequest', 'KaspaSignedTx'], {
                address_n: input.path,
                raw_message: utils.bytesToHex(rawMessage),
                scheme: params.scheme,
                prefix: params.prefix,
                input_count: params.inputs.length,
            });
            return this.processTxRequest(device.commands.typedCall.bind(device.commands), response, 0, []);
        });
    }
}

class NexaGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'prefix', type: 'string' },
                { name: 'scheme', type: 'string' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
                prefix: batch.prefix,
                scheme: batch.scheme,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.2.0',
            },
            model_touch: {
                min: '4.4.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('NexaGetAddress', 'NexaAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    pub: res.message.public_key,
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address', 'pub'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class NexaSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        const payload = this.payload;
        payload.inputs.forEach(input => {
            validateParams(input, [
                { name: 'path', type: 'string', required: true },
                { name: 'message', type: 'string', required: true },
                { name: 'prefix', type: 'string', required: true },
            ]);
            return input;
        });
        this.params = payload;
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.2.0',
            },
            model_touch: {
                min: '4.4.0',
            },
        };
    }
    processTxRequest(typedCall, res, index, signatures) {
        return __awaiter(this, void 0, void 0, function* () {
            const { signature } = res.message;
            if (!signature) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.ResponseUnexpectTypeError, 'signature is not valid');
            }
            if (res.type === 'NexaSignedTx') {
                signatures.push({
                    index,
                    signature,
                });
                return signatures;
            }
            if (res.type === 'NexaTxInputRequest') {
                signatures.push({
                    index,
                    signature,
                });
                const nextIndex = res.message.request_index;
                const input = this.params.inputs[nextIndex];
                const response = yield typedCall('NexaTxInputAck', ['NexaTxInputRequest', 'NexaSignedTx'], {
                    address_n: input.path,
                    raw_message: input.message,
                });
                return this.processTxRequest(typedCall, response, nextIndex, signatures);
            }
            return signatures;
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { device, params } = this;
            const input = params.inputs[0];
            const response = yield device.commands.typedCall('NexaSignTx', ['NexaTxInputRequest', 'NexaSignedTx'], {
                address_n: validatePath(input.path, 3),
                raw_message: input.message,
                prefix: input.prefix,
                input_count: params.inputs.length,
            });
            return this.processTxRequest(device.commands.typedCall.bind(device.commands), response, 0, []);
        });
    }
}

class NostrGetPublicKey extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = Object.prototype.hasOwnProperty.call(this.payload, 'bundle');
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 1);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.6.0',
            },
            model_touch: {
                min: '4.7.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('NostrGetPublicKey', 'NostrPublicKey', Object.assign({}, param));
                const response = {
                    path: serializedPath(param.address_n),
                    npub: res.message.npub,
                    pub: res.message.publickey,
                    publickey: res.message.publickey,
                };
                responses.push(response);
            }
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

function validateEvent(event) {
    if (!(event instanceof Object))
        return false;
    if (typeof event.kind !== 'number')
        return false;
    if (typeof event.content !== 'string')
        return false;
    if (typeof event.created_at !== 'number')
        return false;
    if (!Array.isArray(event.tags))
        return false;
    for (let i = 0; i < event.tags.length; i += 1) {
        const tag = event.tags[i];
        if (!Array.isArray(tag))
            return false;
        for (let j = 0; j < tag.length; j += 1) {
            if (typeof tag[j] === 'object')
                return false;
        }
    }
    return true;
}

class NostrSignEvent extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        const { payload } = this;
        if (!validateEvent(payload.event)) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, `Can't serialize event with wrong or missing properties`);
        }
        validateParams(payload, [{ name: 'path', required: true }]);
        const addressN = validatePath(payload.path, 5);
        this.params = {
            address_n: addressN,
            event: bytesToHex(Buffer.from(JSON.stringify(payload.event, null, 0), 'utf-8')),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.6.0',
            },
            model_touch: {
                min: '4.7.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = yield this.device.commands.typedCall('NostrSignEvent', 'NostrSignedEvent', this.params);
            try {
                const signedEvent = Buffer.from(hexToBytes(message.event)).toString('utf-8');
                const event = JSON.parse(signedEvent);
                return {
                    path: serializedPath(this.params.address_n),
                    rawTx: message.event,
                    event,
                };
            }
            catch (e) {
                throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodError, 'Failed to parse signed event', e);
            }
        });
    }
}

class NostrEncryptMessage extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        const { payload } = this;
        validateParams(payload, [
            { name: 'path', required: true },
            { name: 'pubkey', required: true, type: 'string' },
            { name: 'plaintext', required: true, type: 'string' },
            { name: 'showOnChargerWallet', type: 'boolean' },
        ]);
        const addressN = validatePath(payload.path, 5);
        this.params = {
            address_n: addressN,
            pubkey: payload.pubkey,
            msg: payload.plaintext,
            show_display: (_a = payload.showOnChargerWallet) !== null && _a !== void 0 ? _a : true,
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.6.0',
            },
            model_touch: {
                min: '4.7.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = yield this.device.commands.typedCall('NostrEncryptMessage', 'NostrEncryptedMessage', this.params);
            return {
                path: serializedPath(this.params.address_n),
                pubkey: this.params.pubkey,
                plaintext: this.params.msg,
                encryptedMessage: message.msg,
            };
        });
    }
}

class NostrDecryptMessage extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        const { payload } = this;
        validateParams(payload, [
            { name: 'path', required: true },
            { name: 'pubkey', required: true, type: 'string' },
            { name: 'ciphertext', required: true, type: 'string' },
            { name: 'showOnChargerWallet', type: 'boolean' },
        ]);
        const addressN = validatePath(payload.path, 5);
        this.params = {
            address_n: addressN,
            pubkey: payload.pubkey,
            msg: payload.ciphertext,
            show_display: (_a = payload.showOnChargerWallet) !== null && _a !== void 0 ? _a : true,
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.6.0',
            },
            model_touch: {
                min: '4.7.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = yield this.device.commands.typedCall('NostrDecryptMessage', 'NostrDecryptedMessage', this.params);
            return {
                path: serializedPath(this.params.address_n),
                pubkey: this.params.pubkey,
                ciphertext: this.params.msg,
                decryptedMessage: message.msg,
            };
        });
    }
}

class NostrSignSchnorr extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        const { payload } = this;
        validateParams(payload, [
            { name: 'path', required: true },
            { name: 'hash', required: true, type: 'string' },
        ]);
        const addressN = validatePath(payload.path, 5);
        this.params = {
            address_n: addressN,
            hash: payload.hash,
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.6.0',
            },
            model_touch: {
                min: '4.7.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = yield this.device.commands.typedCall('NostrSignSchnorr', 'NostrSignedSchnorr', this.params);
            return {
                path: serializedPath(this.params.address_n),
                rawHash: this.params.hash,
                signature: message.signature,
            };
        });
    }
}

class LnurlAuth1 extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        const { payload } = this;
        validateParams(payload, [
            { name: 'domain', type: 'string', required: true },
            { name: 'k1', type: 'string', required: true },
        ]);
        this.params = {
            domain: bytesToHex(Buffer.from(payload.domain, 'utf-8')),
            data: bytesToHex(Buffer.from(payload.k1, 'hex')),
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.7.0',
            },
            model_touch: {
                min: '4.8.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = yield this.device.commands.typedCall('LnurlAuth', 'LnurlAuthResp', this.params);
            validateResult(message, ['publickey', 'path']);
            return Object.assign(Object.assign({}, message), { pub: message.publickey });
        });
    }
}

class NervosGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'network', type: 'string' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
                network: batch.network,
            });
        });
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.7.0',
            },
            model_touch: {
                min: '4.9.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('NervosGetAddress', 'NervosAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class NervosSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
        this.chunkByteSize = 1024;
        this.processTxRequest = (typedCall, res, data, offset = 0) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (res.type === 'NervosSignedTx') {
                if (!((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a.signature)) {
                    throw new Error('No signature returned');
                }
                return Object.assign(Object.assign({}, res.message), { path: serializedPath(this.params.address_n) });
            }
            const { data_length } = res.message;
            if (!data_length) {
                if (!((_b = res === null || res === void 0 ? void 0 : res.message) === null || _b === void 0 ? void 0 : _b.signature)) {
                    throw new Error('No signature returned');
                }
                return Object.assign(Object.assign({}, res.message), { path: serializedPath(this.params.address_n) });
            }
            const payload = data.subarray(offset, offset + data_length);
            const newOffset = offset + payload.length;
            const resourceAckParams = {
                data_chunk: utils.bytesToHex(payload),
            };
            const response = yield typedCall('NervosTxAck', ['NervosSignedTx', 'NervosTxRequest'], Object.assign({}, resourceAckParams));
            return this.processTxRequest(typedCall, response, data, newOffset);
        });
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'rawTx', type: 'hexString', required: true },
            { name: 'witnessHex', type: 'hexString', required: true },
            { name: 'network', type: 'string', required: true },
        ]);
        const { path, rawTx, witnessHex, network } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            raw_tx: Buffer.from(formatAnyHex(rawTx), 'hex'),
            witness_buffer: formatAnyHex(witnessHex),
            network,
        };
    }
    getVersionRange() {
        return {
            model_mini: {
                min: '3.7.0',
            },
            model_touch: {
                min: '4.9.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataLength = this.params.raw_tx.length;
            const offset = dataLength;
            const data = this.params.raw_tx;
            const typedCall = this.device.getCommands().typedCall.bind(this.device.getCommands());
            const res = yield typedCall('NervosSignTx', 'NervosSignedTx', {
                address_n: this.params.address_n,
                data_initial_chunk: utils.bytesToHex(data.subarray(0, offset)),
                data_length: dataLength,
                witness_buffer: this.params.witness_buffer,
                network: this.params.network,
            });
            return this.processTxRequest(typedCall, res, data, offset);
        });
    }
}

class DnxGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            classic: {
                min: '3.8.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('DnxGetAddress', 'DnxAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class DnxSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        const { payload } = this;
        const addressN = validatePath(payload.path, 3);
        validateParams(payload, [
            { name: 'path', required: true },
            { name: 'inputs', type: 'array', required: true },
            { name: 'toAddress', type: 'string', required: true },
            { name: 'amount', required: true },
            { name: 'fee', required: true },
            { name: 'paymentIdHex', type: 'string' },
        ]);
        if (payload.paymentIdHex && stripHexPrefix(payload.paymentIdHex).length !== 64) {
            throw new Error('Payment ID must be 32 bytes long');
        }
        this.params = {
            address_n: addressN,
            inputs_count: payload.inputs.length,
            to_address: payload.toAddress,
            amount: payload.amount,
            fee: payload.fee,
        };
        if (payload.paymentIdHex) {
            this.params.payment_id = stripHexPrefix(payload.paymentIdHex);
        }
    }
    getVersionRange() {
        return {
            classic: {
                min: '3.8.0',
            },
        };
    }
    processTxRequest(typedCall, res, signature) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (res.type === 'DnxInputRequest') {
                const { inputs } = this.payload;
                const { request_index, tx_key, computed_key_image } = res.message;
                if ((tx_key === null || tx_key === void 0 ? void 0 : tx_key.ephemeral_tx_sec_key) && (tx_key === null || tx_key === void 0 ? void 0 : tx_key.ephemeral_tx_pub_key)) {
                    signature = Object.assign(Object.assign({}, signature), { txKey: {
                            ephemeralTxSecKey: tx_key.ephemeral_tx_sec_key,
                            ephemeralTxPubKey: tx_key.ephemeral_tx_pub_key,
                        } });
                }
                if (computed_key_image === null || computed_key_image === void 0 ? void 0 : computed_key_image.key_image) {
                    signature = Object.assign(Object.assign({}, signature), { computedKeyImages: [...((_a = signature.computedKeyImages) !== null && _a !== void 0 ? _a : []), computed_key_image.key_image] });
                }
                if (request_index) {
                    const input = inputs[request_index - 1];
                    const signRes = yield typedCall('DnxInputAck', 'DnxInputRequest', {
                        prev_index: input.prevIndex,
                        global_index: input.globalIndex,
                        tx_pubkey: input.txPubkey,
                        prev_out_pubkey: input.prevOutPubkey,
                        amount: input.amount,
                    });
                    return this.processTxRequest(typedCall, signRes, signature);
                }
                const signRes = yield typedCall('DnxRTSigsRequest', 'DnxSignedTx', {});
                if (signature.txKey == null ||
                    signature.txKey.ephemeralTxSecKey == null ||
                    signature.txKey.ephemeralTxPubKey == null) {
                    throw new Error('signatures or tx_key missing in response');
                }
                return {
                    path: serializedPath(this.params.address_n),
                    txKey: signature.txKey,
                    computedKeyImages: (_b = signature.computedKeyImages) !== null && _b !== void 0 ? _b : [],
                    signatures: signRes.message.signatures,
                    outputKeys: signRes.message.output_keys,
                };
            }
            throw new Error('Unexpected response');
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const typedCall = this.device.getCommands().typedCall.bind(this.device.getCommands());
            const res = yield this.device.commands.typedCall('DnxSignTx', 'DnxInputRequest', Object.assign({}, this.params));
            return this.processTxRequest(typedCall, res, {});
        });
    }
}

class TonGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
        this.shouldConfirm = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        this.shouldConfirm = this.hasBundle
            ? this.payload.bundle.comme((i) => !!i.showOnChargerWallet)
            : false;
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'walletVersion' },
                { name: 'isBounceable', type: 'boolean' },
                { name: 'isTestnetOnly', type: 'boolean' },
                { name: 'workchain' },
                { name: 'walletId', type: 'number' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
                wallet_version: batch.walletVersion,
                is_bounceable: batch.isBounceable,
                is_testnet_only: batch.isTestnetOnly,
                workchain: batch.workchain,
                wallet_id: batch.walletId,
            });
        });
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('TonGetAddress', 'TonAddress', Object.assign({}, param));
                const { address, public_key } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    publicKey: public_key,
                    pub: public_key,
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address', 'pub'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class TonSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'destination', type: 'string' },
            { name: 'jettonMasterAddress', type: 'string' },
            { name: 'jettonWalletAddress', type: 'string' },
            { name: 'tonAmount' },
            { name: 'jettonAmount' },
            { name: 'fwdFee' },
            { name: 'comment', type: 'string' },
            { name: 'isRawData', type: 'boolean' },
            { name: 'mode', type: 'number' },
            { name: 'seqno', type: 'number' },
            { name: 'expireAt' },
            { name: 'walletVersion' },
            { name: 'walletId', type: 'number' },
            { name: 'workchain' },
            { name: 'isBounceable', type: 'boolean' },
            { name: 'isTestnetOnly', type: 'boolean' },
            { name: 'extDestination', type: 'array' },
            { name: 'extTonAmount', type: 'array' },
            { name: 'extPayload', type: 'array' },
        ]);
        const { path } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            destination: this.payload.destination,
            jetton_master_address: this.payload.jettonMasterAddress,
            jetton_wallet_address: this.payload.jettonWalletAddress,
            ton_amount: this.payload.tonAmount,
            fwd_fee: this.payload.fwdFee,
            comment: this.payload.comment,
            mode: this.payload.mode,
            is_raw_data: this.payload.isRawData,
            seqno: this.payload.seqno,
            expire_at: this.payload.expireAt,
            wallet_version: this.payload.walletVersion,
            wallet_id: this.payload.walletId,
            workchain: this.payload.workchain,
            is_bounceable: this.payload.isBounceable,
            is_testnet_only: this.payload.isTestnetOnly,
            ext_destination: this.payload.extDestination,
            ext_ton_amount: this.payload.extTonAmount,
            ext_payload: this.payload.extPayload,
        };
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
            classic1s: {
                min: '3.10.0',
            },
        };
    }
    getSupportJettonAmountBytesVersionRange() {
        return {
            pro: {
                min: '4.10.2',
            },
        };
    }
    checkSupportJettonAmountBytes() {
        var _a;
        const firmwareVersion = (_a = getDeviceFirmwareVersion(this.device.features)) === null || _a === void 0 ? void 0 : _a.join('.');
        const versionRange = getMethodVersionRange(this.device.features, type => this.getSupportJettonAmountBytesVersionRange()[type]);
        if (!versionRange) {
            return true;
        }
        if (semver__default["default"].valid(firmwareVersion) && semver__default["default"].gte(firmwareVersion, versionRange.min)) {
            return true;
        }
        return false;
    }
    getFixCommentErrorVersionRange() {
        return {
            pro: {
                min: '4.10.1',
            },
        };
    }
    checkFixCommentError() {
        var _a;
        const { comment, jettonAmount } = this.payload;
        if (lodash.isEmpty(comment) || jettonAmount === null || jettonAmount === undefined) {
            return;
        }
        const firmwareVersion = (_a = getDeviceFirmwareVersion(this.device.features)) === null || _a === void 0 ? void 0 : _a.join('.');
        const versionRange = getMethodVersionRange(this.device.features, type => this.getFixCommentErrorVersionRange()[type]);
        if (!versionRange) {
            return;
        }
        if (semver__default["default"].valid(firmwareVersion) && semver__default["default"].lt(firmwareVersion, versionRange.min)) {
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodNeedUpgradeFirmware, `Device firmware version is too low, please update to ${versionRange.min}`, { current: firmwareVersion, require: versionRange.min });
        }
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkFixCommentError();
            const { jettonAmount } = this.payload;
            if (jettonAmount) {
                if (this.checkSupportJettonAmountBytes()) {
                    this.params.jetton_amount_bytes = stripHexStartZeroes(formatAnyHex(new BigNumber__default["default"](jettonAmount).toString(16)));
                }
                else {
                    this.params.jetton_amount = jettonAmount;
                }
            }
            const deviceType = getDeviceType(this.device.features);
            const res = yield this.device.commands.typedCall('TonSignMessage', 'TonSignedMessage', Object.assign({}, this.params));
            return Promise.resolve(Object.assign(Object.assign({}, res.message), { skip_validate: DeviceModelToTypes.model_mini.includes(deviceType) }));
        });
    }
}

class TonSignProof extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'appdomain', type: 'string' },
            { name: 'comment', type: 'string' },
            { name: 'expireAt' },
            { name: 'walletVersion' },
            { name: 'walletId', type: 'number' },
            { name: 'workchain' },
            { name: 'isBounceable', type: 'boolean' },
            { name: 'isTestnetOnly', type: 'boolean' },
        ]);
        const { path } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            appdomain: this.payload.appdomain,
            comment: this.payload.comment,
            expire_at: this.payload.expireAt,
            wallet_version: this.payload.walletVersion,
            wallet_id: this.payload.walletId,
            workchain: this.payload.workchain,
            is_bounceable: this.payload.isBounceable,
            is_testnet_only: this.payload.isTestnetOnly,
        };
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.device.commands.typedCall('TonSignProof', 'TonSignedProof', Object.assign({}, this.params));
            return Promise.resolve(res.message);
        });
    }
}

class ScdoGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push({
                address_n: addressN,
                show_display: showOnChargerWallet,
            });
        });
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('ScdoGetAddress', 'ScdoAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class ScdoSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.chunkByteSize = 1024;
        this.processTxRequest = (typedCall, res, data, offset = 0) => __awaiter(this, void 0, void 0, function* () {
            const { data_length } = res.message;
            if (!data_length) {
                return res.message;
            }
            const payload = data.subarray(offset, offset + data_length);
            const newOffset = offset + payload.length;
            const resourceAckParams = {
                data_chunk: utils.bytesToHex(payload),
            };
            const response = yield typedCall('ScdoTxAck', 'ScdoSignedTx', Object.assign({}, resourceAckParams));
            return this.processTxRequest(typedCall, response, data, newOffset);
        });
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'nonce', required: true },
            { name: 'gasPrice', required: true, type: 'string' },
            { name: 'gasLimit', required: true, type: 'string' },
            { name: 'to', required: true, type: 'string' },
            { name: 'value', required: true, type: 'string' },
            { name: 'timestamp', required: true, type: 'string' },
            { name: 'data', type: 'hexString' },
            { name: 'txType', type: 'number' },
        ]);
        const { path, nonce, gasPrice, gasLimit, to, value, timestamp, txType } = this
            .payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            nonce: stripHexStartZeroes(formatAnyHex(nonce)),
            gas_price: stripHexStartZeroes(formatAnyHex(gasPrice)),
            gas_limit: stripHexStartZeroes(formatAnyHex(gasLimit)),
            to,
            value: stripHexStartZeroes(formatAnyHex(value)),
            timestamp: timestamp ? stripHexStartZeroes(formatAnyHex(timestamp)) : undefined,
            tx_type: txType,
        };
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
        };
    }
    run() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const typedCall = this.device.getCommands().typedCall.bind(this.device.getCommands());
            const rawData = (_a = this.payload) === null || _a === void 0 ? void 0 : _a.data;
            const data = rawData && Buffer.from(stripHexStartZeroes(formatAnyHex(rawData)), 'hex');
            const offset = this.chunkByteSize;
            if (data && data.length > 0) {
                this.params.data_initial_chunk = utils.bytesToHex(data.subarray(0, this.chunkByteSize));
                this.params.data_length = data.length;
            }
            const res = yield typedCall('ScdoSignTx', ['ScdoSignedTx'], Object.assign({}, this.params));
            return this.processTxRequest(typedCall, res, data, offset);
        });
    }
}

class ScdoSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
        ]);
        const { path, messageHex } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            message: stripHexPrefix(messageHex),
        };
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.device.commands.typedCall('ScdoSignMessage', 'ScdoSignedMessage', Object.assign({}, this.params));
            return Promise.resolve(response.message);
        });
    }
}

class AlephiumGetAddress extends BaseMethod {
    constructor() {
        super(...arguments);
        this.hasBundle = false;
    }
    init() {
        var _a;
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        this.hasBundle = !!((_a = this.payload) === null || _a === void 0 ? void 0 : _a.bundle);
        const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };
        validateParams(payload, [{ name: 'bundle', type: 'array' }]);
        this.params = [];
        payload.bundle.forEach((batch) => {
            var _a, _b, _c;
            const addressN = validatePath(batch.path, 3);
            validateParams(batch, [
                { name: 'path', required: true },
                { name: 'showOnChargerWallet', type: 'boolean' },
                { name: 'includePublicKey', type: 'boolean' },
                { name: 'group', type: 'number' },
            ]);
            const showOnChargerWallet = (_a = batch.showOnChargerWallet) !== null && _a !== void 0 ? _a : true;
            this.params.push(Object.assign({ address_n: addressN, show_display: showOnChargerWallet, include_public_key: (_b = batch.includePublicKey) !== null && _b !== void 0 ? _b : false }, (batch.group !== null && { target_group: (_c = batch.group) !== null && _c !== void 0 ? _c : 0 })));
        });
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < this.params.length; i++) {
                const param = this.params[i];
                const res = yield this.device.commands.typedCall('AlephiumGetAddress', 'AlephiumAddress', Object.assign({}, param));
                const { address } = res.message;
                const result = {
                    path: serializedPath(param.address_n),
                    address,
                    publicKey: param.include_public_key ? res.message.public_key : undefined,
                    pub: param.include_public_key ? res.message.public_key : undefined,
                    derivedPath: serializedPath(res.message.derived_path),
                };
                responses.push(result);
                this.postPreviousAddressMessage(result);
            }
            validateResult(responses, ['address'], {
                expectedLength: this.params.length,
            });
            return Promise.resolve(this.hasBundle ? responses : responses[0]);
        });
    }
}

class AlephiumSignTransaction extends BaseMethod {
    constructor() {
        super(...arguments);
        this.chunkByteSize = 1024;
        this.processTxRequest = (typedCall, res, data, scriptOpt, dataOffset = 0) => __awaiter(this, void 0, void 0, function* () {
            if (res.type === 'AlephiumSignedTx') {
                return res.message;
            }
            const { data_length } = res.message;
            let response;
            if (res.type === 'AlephiumTxRequest') {
                if (!data_length) {
                    return res.message;
                }
                const payload = data.subarray(dataOffset, dataOffset + data_length);
                const newOffset = dataOffset + payload.length;
                const resourceAckParams = {
                    data_chunk: utils.bytesToHex(payload),
                };
                response = yield typedCall('AlephiumTxAck', ['AlephiumSignedTx', 'AlephiumTxRequest', 'AlephiumBytecodeRequest'], Object.assign({}, resourceAckParams));
                return this.processTxRequest(typedCall, response, data, scriptOpt, newOffset);
            }
            if (res.type === 'AlephiumBytecodeRequest') {
                if (!(scriptOpt === null || scriptOpt === void 0 ? void 0 : scriptOpt.length)) {
                    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'scriptOpt is required');
                }
                const resourceAckParams = {
                    bytecode_data: utils.bytesToHex(scriptOpt),
                };
                response = yield typedCall('AlephiumBytecodeAck', ['AlephiumSignedTx', 'AlephiumBytecodeRequest'], Object.assign({}, resourceAckParams));
                return this.processTxRequest(typedCall, response, data, scriptOpt, dataOffset);
            }
            throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, `Unknown response type: ${res.type}`);
        });
    }
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'rawTx', required: true, type: 'hexString' },
            { name: 'scriptOpt', type: 'string' },
        ]);
        const { path } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            data_initial_chunk: '',
            data_length: 0,
        };
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const typedCall = this.device.getCommands().typedCall.bind(this.device.getCommands());
            const offset = this.chunkByteSize;
            const data = Buffer.from(this.payload.rawTx, 'hex');
            const scriptOpt = this.payload.scriptOpt && Buffer.from(this.payload.scriptOpt, 'hex');
            this.params = {
                address_n: this.params.address_n,
                data_initial_chunk: utils.bytesToHex(data.subarray(0, this.chunkByteSize)),
                data_length: data.length,
            };
            const res = yield typedCall('AlephiumSignTx', ['AlephiumSignedTx', 'AlephiumTxRequest', 'AlephiumBytecodeRequest'], Object.assign({}, this.params));
            return this.processTxRequest(typedCall, res, data, scriptOpt, offset);
        });
    }
}

class AlephiumSignMessage extends BaseMethod {
    init() {
        this.checkDeviceId = true;
        this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];
        validateParams(this.payload, [
            { name: 'path', required: true },
            { name: 'messageHex', type: 'hexString', required: true },
            { name: 'messageType', type: 'string' },
        ]);
        const { path, messageHex, messageType } = this.payload;
        const addressN = validatePath(path, 3);
        this.params = {
            address_n: addressN,
            message: stripHexPrefix(messageHex),
            message_type: Buffer.from(messageType !== null && messageType !== void 0 ? messageType : 'alephium', 'utf-8').toString('hex'),
        };
    }
    getVersionRange() {
        return {
            model_touch: {
                min: '4.10.0',
            },
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.device.commands.typedCall('AlephiumSignMessage', 'AlephiumMessageSignature', Object.assign({}, this.params));
            return Promise.resolve(response.message);
        });
    }
}

var ApiMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    testInitializeDeviceDuration: TestInitializeDeviceDuration,
    searchDevices: SearchDevices,
    getFeatures: GetFeatures,
    getChargerwalletFeatures: GetChargerwalletFeatures,
    getPassphraseState: GetPassphraseState,
    getLogs: GetLogs,
    checkFirmwareRelease: CheckFirmwareRelease,
    checkBLEFirmwareRelease: CheckBLEFirmwareRelease,
    checkTransportRelease: CheckTransportRelease,
    checkBridgeStatus: CheckBridgeStatus,
    checkBridgeRelease: CheckBridgeRelease,
    checkBootloaderRelease: CheckBootloaderRelease,
    checkAllFirmwareRelease: CheckAllFirmwareRelease,
    deviceBackup: DeviceBackup,
    deviceChangePin: DeviceChangePin,
    deviceFlags: DeviceFlags,
    deviceRebootToBootloader: DeviceRebootToBootloader,
    deviceRebootToBoardloader: DeviceRebootToBoardloader,
    deviceRecovery: DeviceRecovery,
    deviceReset: DeviceReset,
    deviceSettings: DeviceSettings,
    deviceUpdateReboot: DeviceUpdateReboot,
    deviceUploadResource: DeviceUploadResource,
    deviceSupportFeatures: DeviceSupportFeatures,
    deviceVerify: DeviceVerify,
    deviceWipe: DeviceWipe,
    deviceFullyUploadResource: DeviceFullyUploadResource,
    deviceUpdateBootloader: DeviceUpdateBootloader,
    deviceLock: DeviceLock,
    deviceCancel: DeviceCancel,
    setU2FCounter: SetU2FCounter,
    getNextU2FCounter: GetNextU2FCounter,
    firmwareUpdate: FirmwareUpdate,
    firmwareUpdateV2: FirmwareUpdateV2,
    requestWebUsbDevice: RequestWebUsbDevice,
    cipherKeyValue: CipherKeyValue,
    allNetworkGetAddress: AllNetworkGetAddress,
    btcGetAddress: BTCGetAddress,
    btcGetPublicKey: BTCGetPublicKey,
    btcSignMessage: BTCSignMessage,
    btcSignPsbt: BTCSignPsbt,
    btcSignTransaction: BTCSignTransaction,
    btcVerifyMessage: BTCVerifyMessage,
    confluxGetAddress: ConfluxGetAddress,
    confluxSignMessage: ConfluxSignMessage,
    confluxSignMessageCIP23: ConfluxSignMessageCIP23,
    confluxSignTransaction: ConfluxSignTransaction,
    evmGetAddress: EvmGetAddress,
    evmGetPublicKey: EVMGetPublicKey,
    evmSignMessage: EVMSignMessage$2,
    evmSignMessageEIP712: EVMSignMessageEIP712,
    evmSignTransaction: EVMSignTransaction,
    evmSignTypedData: EVMSignTypedData,
    evmVerifyMessage: EVMSignMessage$1,
    starcoinGetAddress: StarcoinGetAddress,
    starcoinGetPublicKey: StarcoinGetPublicKey,
    starcoinSignMessage: StarcoinSignMessage,
    starcoinSignTransaction: StarcoinSignTransaction,
    starcoinVerifyMessage: EVMSignMessage,
    nemGetAddress: NEMGetAddress,
    nemSignTransaction: NEMSignTransaction,
    solGetAddress: SolGetAddress,
    solSignTransaction: SolSignTransaction,
    stellarGetAddress: StellarGetAddress,
    stellarSignTransaction: StellarSignTransaction,
    tronGetAddress: TronGetAddress,
    tronSignMessage: TronSignMessage,
    tronSignTransaction: TronSignTransaction,
    nearGetAddress: NearGetAddress,
    nearSignTransaction: NearSignTransaction,
    aptosGetAddress: AptosGetAddress,
    aptosGetPublicKey: AptosGetPublicKey,
    aptosSignTransaction: AptosSignTransaction,
    aptosSignMessage: AptosSignMessage,
    algoGetAddress: AlgoGetAddress,
    algoSignTransaction: AlgoSignTransaction,
    cosmosGetAddress: CosmosGetAddress,
    cosmosGetPublicKey: CosmosGetPublicKey,
    cosmosSignTransaction: CosmosSignTransaction,
    xrpGetAddress: XrpGetAddress$1,
    xrpSignTransaction: XrpGetAddress,
    suiGetAddress: SuiGetAddress,
    suiGetPublicKey: SuiGetPublicKey,
    suiSignMessage: SuiSignMessage,
    suiSignTransaction: SuiSignTransaction,
    cardanoGetAddress: CardanoGetAddress,
    cardanoGetPublicKey: CardanoGetPublicKey,
    cardanoSignTransaction: CardanoSignTransaction,
    cardanoSignMessage: CardanoSignMessage,
    filecoinGetAddress: FilecoinGetAddress,
    filecoinSignTransaction: FilecoinSignTransaction,
    polkadotGetAddress: PolkadotGetAddress,
    polkadotSignTransaction: PolkadotSignTransaction,
    kaspaGetAddress: KaspaGetAddress,
    kaspaSignTransaction: KaspaSignTransaction,
    nexaGetAddress: NexaGetAddress,
    nexaSignTransaction: NexaSignTransaction,
    nostrGetPublicKey: NostrGetPublicKey,
    nostrSignEvent: NostrSignEvent,
    nostrEncryptMessage: NostrEncryptMessage,
    nostrDecryptMessage: NostrDecryptMessage,
    nostrSignSchnorr: NostrSignSchnorr,
    lnurlAuth: LnurlAuth1,
    nervosGetAddress: NervosGetAddress,
    nervosSignTransaction: NervosSignTransaction,
    dnxGetAddress: DnxGetAddress,
    dnxSignTransaction: DnxSignTransaction,
    tonGetAddress: TonGetAddress,
    tonSignMessage: TonSignMessage,
    tonSignProof: TonSignProof,
    scdoGetAddress: ScdoGetAddress,
    scdoSignTransaction: ScdoSignTransaction,
    scdoSignMessage: ScdoSignMessage,
    alephiumGetAddress: AlephiumGetAddress,
    alephiumSignTransaction: AlephiumSignTransaction,
    alephiumSignMessage: AlephiumSignMessage
});

function findMethod(message) {
    const { method } = message.payload;
    if (typeof method !== 'string') {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, 'Method is not set');
    }
    const MethodConstructor = ApiMethods[method];
    if (MethodConstructor) {
        return new MethodConstructor(message);
    }
    throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodInvalidParameter, `Method ${method} is not set`);
}

const resolveAfter = (msec, value) => new Promise(resolve => {
    setTimeout(resolve, msec, value);
});

const Log$1 = getLogger(exports.LoggerNames.DeviceConnector);
class DeviceConnector {
    constructor() {
        this.listenTimestamp = 0;
        this.current = null;
        this.upcoming = [];
        this.listening = false;
        TransportManager.load();
        this.transport = TransportManager.getTransport();
        DevicePool.setConnector(this);
    }
    enumerate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const descriptors = yield this.transport.enumerate();
                this.upcoming = descriptors;
                this._reportDevicesChange();
                return { descriptors };
            }
            catch (error) {
                safeThrowError(error);
            }
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            const waitForEvent = this.current !== null;
            const current = this.current || [];
            this.listening = true;
            let descriptors;
            try {
                Log$1.debug('Start listening', current);
                this.listenTimestamp = new Date().getTime();
                descriptors = waitForEvent
                    ? yield this.transport.listen(current)
                    : yield this.transport.enumerate();
                if (!this.listening)
                    return;
                this.upcoming = descriptors;
                Log$1.debug('Listen result', descriptors);
                this._reportDevicesChange();
                if (this.listening)
                    this.listen();
            }
            catch (error) {
                const time = new Date().getTime() - this.listenTimestamp;
                Log$1.debug('Listen error', 'timestamp', time, typeof error);
                if (time > 1100) {
                    yield resolveAfter(1000, null);
                    if (this.listening)
                        this.listen();
                }
                else {
                    Log$1.warn('Transport error');
                }
            }
        });
    }
    stop() {
        this.listening = false;
    }
    acquire(path, session, forceCleanRunPromise) {
        return __awaiter(this, void 0, void 0, function* () {
            Log$1.debug('acquire', path, session);
            const env = DataManager.getSettings('env');
            try {
                let res;
                if (DataManager.isBleConnect(env)) {
                    res = yield this.transport.acquire({ uuid: path, forceCleanRunPromise });
                }
                else {
                    res = yield this.transport.acquire({ path, previous: session !== null && session !== void 0 ? session : null });
                }
                return res;
            }
            catch (error) {
                Log$1.debug('acquire error: ', error.message);
                safeThrowError(error);
            }
        });
    }
    release(session, onclose) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.transport.release(session, onclose);
                return res;
            }
            catch (error) {
                safeThrowError(error);
            }
        });
    }
    _reportDevicesChange() {
        DevicePool.reportDeviceChange(this.upcoming);
    }
}

const Log = getLogger(exports.LoggerNames.Core);
function hasDeriveCardano(method) {
    var _a;
    if (method.name.startsWith('allNetworkGetAddress') &&
        method.payload &&
        method.payload.bundle &&
        method.payload.bundle.comme(net => net && net.network === 'ada')) {
        return true;
    }
    return method.name.startsWith('cardano') || ((_a = method.payload) === null || _a === void 0 ? void 0 : _a.deriveCardano);
}
const parseInitOptions = (method) => ({
    initSession: method === null || method === void 0 ? void 0 : method.payload.initSession,
    passphraseState: method === null || method === void 0 ? void 0 : method.payload.passphraseState,
    deviceId: method === null || method === void 0 ? void 0 : method.payload.deviceId,
    deriveCardano: method && hasDeriveCardano(method),
});
let _core;
let _deviceList;
let _connector;
let _uiPromises = [];
let _callPromise;
const callApiQueue = [];
const deviceCacheMap = new Map();
let pollingId = 1;
const pollingState = {};
let preConnectCache = {
    passphraseState: undefined,
};
const callAPI = (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!message.id || !message.payload || message.type !== IFRAME.CALL) {
        return Promise.reject(hdShared.ERRORS.TypedError('on call: message.id or message.payload is missing'));
    }
    let method;
    let messageResponse;
    try {
        method = findMethod(message);
        method.connector = _connector;
        method.postMessage = postMessage;
        method.init();
    }
    catch (error) {
        return Promise.reject(error);
    }
    DevicePool.emitter.on(DEVICE.CONNECT, onDeviceConnectHandler);
    if (!method.useDevice) {
        try {
            const response = yield method.run();
            return createResponseMessage(method.responseID, true, response);
        }
        catch (error) {
            return createResponseMessage(method.responseID, false, { error });
        }
    }
    callApiQueue.push(method);
    if (callApiQueue.length > 1) {
        Log.debug('should cancel the previous method execution: ', callApiQueue.map(m => m.name));
    }
    const connectStateChange = preConnectCache.passphraseState !== method.payload.passphraseState;
    preConnectCache = {
        passphraseState: method.payload.passphraseState,
    };
    if (connectStateChange || method.payload.initSession) {
        Log.debug('passphrase state change, clear device cache');
        DevicePool.clearDeviceCache(method.payload.connectId);
    }
    if (pollingState[pollingId]) {
        pollingState[pollingId] = false;
    }
    pollingId += 1;
    let device;
    try {
        device = yield ensureConnected(method, pollingId);
    }
    catch (e) {
        return createResponseMessage(method.responseID, false, { error: e });
    }
    Log.debug('Call API - setDevice: ', device.mainId);
    (_a = method.setDevice) === null || _a === void 0 ? void 0 : _a.call(method, device);
    device.on(DEVICE.PIN, onDevicePinHandler);
    device.on(DEVICE.BUTTON, onDeviceButtonHandler);
    device.on(DEVICE.PASSPHRASE, message.payload.useEmptyPassphrase ? onEmptyPassphraseHandler : onDevicePassphraseHandler);
    device.on(DEVICE.PASSPHRASE_ON_DEVICE, onEnterPassphraseOnDeviceHandler);
    device.on(DEVICE.FEATURES, onDeviceFeaturesHandler);
    try {
        const inner = () => __awaiter(void 0, void 0, void 0, function* () {
            var _b;
            const versionRange = getMethodVersionRange(device.features, type => method.getVersionRange()[type]);
            if (device.features) {
                yield DataManager.checkAndReloadData();
                const newVersionStatus = DataManager.getFirmwareStatus(device.features);
                const bleVersionStatus = DataManager.getBLEFirmwareStatus(device.features);
                if ((newVersionStatus === 'required' || bleVersionStatus === 'required') &&
                    method.skipForceUpdateCheck === false) {
                    throw hdShared.createNewFirmwareForceUpdateHardwareError(method.connectId, method.deviceId);
                }
                if (versionRange) {
                    const currentVersion = getDeviceFirmwareVersion(device.features).join('.');
                    if (semver__default["default"].valid(versionRange.min) && semver__default["default"].lt(currentVersion, versionRange.min)) {
                        if (newVersionStatus === 'none' || newVersionStatus === 'valid') {
                            throw hdShared.createNewFirmwareUnReleaseHardwareError(currentVersion, versionRange.min);
                        }
                        return Promise.reject(hdShared.createNeedUpgradeFirmwareHardwareError(currentVersion, versionRange.min));
                    }
                    if (versionRange.max &&
                        semver__default["default"].valid(versionRange.max) &&
                        semver__default["default"].gte(currentVersion, versionRange.max)) {
                        return Promise.reject(hdShared.createDeprecatedHardwareError(currentVersion, versionRange.max));
                    }
                }
            }
            const unexpectedMode = device.hasUnexpectedMode(method.notAllowDeviceMode, method.requireDeviceMode);
            if (unexpectedMode) {
                if (unexpectedMode === UI_REQUEST.NOT_IN_BOOTLOADER) {
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RequiredButInBootloaderMode));
                }
                if (unexpectedMode === UI_REQUEST.BOOTLOADER) {
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.NotAllowInBootloaderMode));
                }
                return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceUnexpectedMode, unexpectedMode));
            }
            if (method.deviceId && method.checkDeviceId) {
                const isSameDeviceID = device.checkDeviceId(method.deviceId);
                if (!isSameDeviceID) {
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceCheckDeviceIdError));
                }
            }
            method.checkFirmwareRelease();
            method.checkDeviceSupportFeature();
            if (_deviceList) {
                yield TransportManager.reconfigure(device.features);
            }
            checkPassphraseEnableState(method, device.features);
            if (device.hasUsePassphrase() && method.useDevicePassphraseState) {
                const support = supportNewPassphrase(device.features);
                if (!support.support) {
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceNotSupportPassphrase, `Device not support passphrase, please update to ${support.require}`, {
                        require: support.require,
                    }));
                }
                const passphraseStateSafety = yield device.checkPassphraseStateSafety((_b = method.payload) === null || _b === void 0 ? void 0 : _b.passphraseState);
                checkPassphraseEnableState(method, device.features);
                if (!passphraseStateSafety) {
                    DevicePool.clearDeviceCache(method.payload.connectId);
                    return Promise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceCheckPassphraseStateError));
                }
            }
            try {
                yield method.checkSafetyLevelOnTestNet();
            }
            catch (e) {
                const error = e instanceof hdShared.HardwareError
                    ? e
                    : hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.RuntimeError, 'open safety check failed.');
                messageResponse = createResponseMessage(method.responseID, false, { error });
                _callPromise === null || _callPromise === void 0 ? void 0 : _callPromise.resolve(messageResponse);
                return;
            }
            try {
                const response = yield method.run();
                Log.debug('Call API - Inner Method Run: ');
                messageResponse = createResponseMessage(method.responseID, true, response);
                _callPromise === null || _callPromise === void 0 ? void 0 : _callPromise.resolve(messageResponse);
            }
            catch (error) {
                Log.debug('Call API - Inner Method Run Error: ', error);
                messageResponse = createResponseMessage(method.responseID, false, { error });
                _callPromise === null || _callPromise === void 0 ? void 0 : _callPromise.resolve(messageResponse);
            }
        });
        Log.debug('Call API - Device Run: ', device.mainId);
        const runOptions = Object.assign({ keepSession: method.payload.keepSession }, parseInitOptions(method));
        const deviceRun = () => device.run(inner, runOptions);
        _callPromise = hdShared.createDeferred(deviceRun);
        try {
            return yield _callPromise.promise;
        }
        catch (e) {
            Log.debug('Device Run Error: ', e);
            return createResponseMessage(method.responseID, false, { error: e });
        }
    }
    catch (error) {
        messageResponse = createResponseMessage(method.responseID, false, { error });
        _callPromise === null || _callPromise === void 0 ? void 0 : _callPromise.reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.CallMethodError, error.message));
        Log.debug('Call API - Run Error: ', error);
    }
    finally {
        const response = messageResponse;
        if (response) {
            if (method) {
                method.dispose();
            }
        }
        const index = method.responseID
            ? callApiQueue.findIndex(m => m.responseID === method.responseID)
            : -1;
        if (index > -1) {
            callApiQueue.splice(index, 1);
            Log.debug('Remove the finished method from the queue： ', callApiQueue.map(m => m.name));
        }
        closePopup();
        cleanup();
        removeDeviceListener(device);
    }
});
function initDeviceList(method) {
    return __awaiter(this, void 0, void 0, function* () {
        const env = DataManager.getSettings('env');
        if (DataManager.isBleConnect(env) && method.connectId) {
            yield TransportManager.configure();
            return;
        }
        if (!_deviceList) {
            _deviceList = new DeviceList();
            yield TransportManager.configure();
            _deviceList.connector = _connector;
        }
        yield _deviceList.getDeviceLists(method.connectId, parseInitOptions(method));
    });
}
function initDevice(method) {
    var _a;
    if (!_deviceList) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceListNotInitialized);
    }
    let device;
    const allDevices = _deviceList.allDevices();
    if (((_a = method.payload) === null || _a === void 0 ? void 0 : _a.detectBootloaderDevice) && allDevices.comme(d => { var _a; return (_a = d.features) === null || _a === void 0 ? void 0 : _a.bootloader_mode; })) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceDetectInBootloaderMode);
    }
    if (method.connectId) {
        device = _deviceList.getDevice(method.connectId);
    }
    else if (allDevices.length === 1) {
        [device] = allDevices;
    }
    else if (allDevices.length > 1) {
        throw hdShared.ERRORS.TypedError([
            'firmwareUpdateV2',
            'checkFirmwareRelease',
            'checkBootloaderRelease',
            'checkBLEFirmwareRelease',
        ].includes(method.name)
            ? hdShared.HardwareErrorCode.FirmwareUpdateLimitOneDevice
            : hdShared.HardwareErrorCode.SelectDevice);
    }
    if (!device) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceNotFound);
    }
    device.deviceConnector = _connector;
    return device;
}
function initDeviceForBle(method) {
    if (!method.connectId && !_deviceList) {
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceListNotInitialized);
    }
    if (!method.connectId) {
        return initDevice(method);
    }
    let device;
    if (deviceCacheMap.has(method.connectId)) {
        device = deviceCacheMap.get(method.connectId);
    }
    else {
        device = Device.fromDescriptor({ id: method.connectId });
        deviceCacheMap.set(method.connectId, device);
    }
    device.deviceConnector = _connector;
    return device;
}
let bleTimeoutRetry = 0;
function connectDeviceForBle(method, device) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield device.acquire();
            yield device.initialize(parseInitOptions(method));
        }
        catch (err) {
            if (err.errorCode === hdShared.HardwareErrorCode.BleTimeoutError && bleTimeoutRetry <= 5) {
                bleTimeoutRetry += 1;
                Log.debug(`Bletooth connect timeout and will retry, retry count: ${bleTimeoutRetry}`);
                yield wait(3000);
                yield connectDeviceForBle(method, device);
            }
            else {
                throw err;
            }
        }
    });
}
const ensureConnected = (method, pollingId) => __awaiter(void 0, void 0, void 0, function* () {
    let tryCount = 0;
    const MAX_RETRY_COUNT = method.payload && typeof method.payload.retryCount === 'number' ? method.payload.retryCount : 5;
    const POLL_INTERVAL_TIME = (method.payload && method.payload.pollIntervalTime) || 1000;
    const TIME_OUT = (method.payload && method.payload.timeout) || 10000;
    let timer = null;
    Log.debug(`EnsureConnected function start, MAX_RETRY_COUNT=${MAX_RETRY_COUNT}, POLL_INTERVAL_TIME=${POLL_INTERVAL_TIME}  `);
    const poll = (time = POLL_INTERVAL_TIME) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            if (!pollingState[pollingId]) {
                Log.debug('EnsureConnected function stop, polling id: ', pollingId);
                reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.PollingStop));
                return;
            }
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.PollingTimeout));
            }, TIME_OUT);
            tryCount += 1;
            Log.debug('EnsureConnected function try count: ', tryCount, ' poll interval time: ', time);
            try {
                yield initDeviceList(method);
            }
            catch (error) {
                Log.debug('device list error: ', error);
                if ([hdShared.HardwareErrorCode.BridgeNotInstalled, hdShared.HardwareErrorCode.BridgeTimeoutError].includes(error.errorCode)) {
                    _deviceList = undefined;
                    reject(error);
                    return;
                }
                if (error.errorCode === hdShared.HardwareErrorCode.TransportNotConfigured) {
                    yield TransportManager.configure();
                }
            }
            const env = DataManager.getSettings('env');
            let device;
            try {
                if (DataManager.isBleConnect(env)) {
                    device = initDeviceForBle(method);
                }
                else {
                    device = initDevice(method);
                }
                if (device) {
                    if (timer) {
                        clearTimeout(timer);
                    }
                    if (DataManager.isBleConnect(env)) {
                        bleTimeoutRetry = 0;
                        yield connectDeviceForBle(method, device);
                    }
                    resolve(device);
                    return;
                }
            }
            catch (error) {
                Log.debug('device error: ', error);
                if ([
                    hdShared.HardwareErrorCode.BlePermissionError,
                    hdShared.HardwareErrorCode.BleLocationError,
                    hdShared.HardwareErrorCode.BleLocationServicesDisabled,
                    hdShared.HardwareErrorCode.BleDeviceNotBonded,
                    hdShared.HardwareErrorCode.BleDeviceBondError,
                    hdShared.HardwareErrorCode.BleCharacteristicNotifyError,
                    hdShared.HardwareErrorCode.BleTimeoutError,
                    hdShared.HardwareErrorCode.BleWriteCharacteristicError,
                    hdShared.HardwareErrorCode.BleAlreadyConnected,
                    hdShared.HardwareErrorCode.FirmwareUpdateLimitOneDevice,
                    hdShared.HardwareErrorCode.DeviceDetectInBootloaderMode,
                    hdShared.HardwareErrorCode.BleCharacteristicNotifyChangeFailure,
                ].includes(error.errorCode)) {
                    reject(error);
                    return;
                }
            }
            if (tryCount > MAX_RETRY_COUNT) {
                if (timer) {
                    clearTimeout(timer);
                }
                Log.debug('EnsureConnected get to max try count, will return: ', tryCount);
                reject(hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceNotFound));
                return;
            }
            return setTimeout(() => resolve(poll(time * 1.5)), time);
        }));
    });
    pollingState[pollingId] = true;
    return poll();
});
const cancel = (connectId) => {
    const env = DataManager.getSettings('env');
    try {
        if (connectId) {
            let device;
            if (DataManager.isBleConnect(env)) {
                device = initDeviceForBle({ connectId });
            }
            else {
                device = initDevice({ connectId });
            }
            device === null || device === void 0 ? void 0 : device.interruptionFromUser();
        }
    }
    catch (e) {
        Log.error('Cancel API Error: ', e);
    }
    cleanup();
    closePopup();
};
const checkPassphraseEnableState = (method, features) => {
    if (!method.useDevicePassphraseState)
        return;
    if ((features === null || features === void 0 ? void 0 : features.passphrase_protection) === true &&
        (method.payload.passphraseState == null || method.payload.passphraseState === '') &&
        !method.payload.useEmptyPassphrase) {
        DevicePool.clearDeviceCache(method.payload.connectId);
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceOpenedPassphrase);
    }
    if ((features === null || features === void 0 ? void 0 : features.passphrase_protection) === false && method.payload.passphraseState) {
        DevicePool.clearDeviceCache(method.payload.connectId);
        throw hdShared.ERRORS.TypedError(hdShared.HardwareErrorCode.DeviceNotOpenedPassphrase);
    }
};
const cleanup = () => {
    _uiPromises = [];
    Log.debug('Cleanup...');
};
const removeDeviceListener = (device) => {
    device.removeAllListeners();
    DevicePool.emitter.removeAllListeners(DEVICE.CONNECT);
};
const closePopup = () => {
    postMessage(createUiMessage(UI_REQUEST$1.CLOSE_UI_WINDOW));
};
const onDeviceConnectHandler = (device) => {
    const env = DataManager.getSettings('env');
    const deviceObject = DataManager.isBleConnect(env) ? device : device.toMessageObject();
    postMessage(createDeviceMessage(DEVICE.CONNECT, { device: deviceObject }));
};
const onDeviceDisconnectHandler = (device) => {
    const env = DataManager.getSettings('env');
    const deviceObject = DataManager.isBleConnect(env) ? device : device.toMessageObject();
    postMessage(createDeviceMessage(DEVICE.DISCONNECT, { device: deviceObject }));
};
const onDevicePinHandler = (...[device, type, callback]) => __awaiter(void 0, void 0, void 0, function* () {
    Log.log('request Input PIN');
    const uiPromise = createUiPromise(UI_RESPONSE.RECEIVE_PIN, device);
    postMessage(createUiMessage(UI_REQUEST$1.REQUEST_PIN, {
        device: device.toMessageObject(),
        type,
    }));
    const uiResp = yield uiPromise.promise;
    callback(null, uiResp.payload);
});
const onDeviceButtonHandler = (...[device, request]) => {
    postMessage(createDeviceMessage(DEVICE.BUTTON, Object.assign(Object.assign({}, request), { device: device.toMessageObject() })));
    if (request.code === 'ButtonRequest_PinEntry') {
        Log.log('request Confirm Input PIN');
        postMessage(createUiMessage(UI_REQUEST$1.REQUEST_PIN, {
            device: device.toMessageObject(),
            type: 'ButtonRequest_PinEntry',
        }));
    }
    else {
        Log.log('request Confirm Button');
        postMessage(createUiMessage(UI_REQUEST$1.REQUEST_BUTTON, { device: device.toMessageObject() }));
    }
};
const onDeviceFeaturesHandler = (...[_, features]) => {
    postMessage(createDeviceMessage(DEVICE.FEATURES, Object.assign({}, features)));
};
const onDevicePassphraseHandler = (...[device, callback]) => __awaiter(void 0, void 0, void 0, function* () {
    Log.debug('onDevicePassphraseHandler');
    const uiPromise = createUiPromise(UI_RESPONSE.RECEIVE_PASSPHRASE, device);
    postMessage(createUiMessage(UI_REQUEST$1.REQUEST_PASSPHRASE, {
        device: device.toMessageObject(),
        passphraseState: device.passphraseState,
    }));
    const uiResp = yield uiPromise.promise;
    const { value, passphraseOnDevice, save } = uiResp.payload;
    callback({
        passphrase: value.normalize('NFKD'),
        passphraseOnDevice,
        cache: save,
    });
});
const onEmptyPassphraseHandler = (...[_, callback]) => {
    Log.debug('onEmptyPassphraseHandler');
    callback({ passphrase: '' });
};
const onEnterPassphraseOnDeviceHandler = (...[device]) => {
    postMessage(createUiMessage(UI_REQUEST$1.REQUEST_PASSPHRASE_ON_DEVICE, {
        device: device.toMessageObject(),
        passphraseState: device.passphraseState,
    }));
};
const postMessage = (message) => {
    _core.emit(CORE_EVENT, message);
};
const createUiPromise = (promiseEvent, device) => {
    const uiPromise = hdShared.createDeferred(promiseEvent, device);
    _uiPromises.push(uiPromise);
    return uiPromise;
};
const findUiPromise = (promiseEvent) => _uiPromises.find(p => p.id === promiseEvent);
const removeUiPromise = (promise) => {
    _uiPromises = _uiPromises.filter(p => p !== promise);
};
class Core extends events.exports {
    handleMessage(message) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            switch (message.type) {
                case UI_RESPONSE.RECEIVE_PIN:
                case UI_RESPONSE.RECEIVE_PASSPHRASE: {
                    const uiPromise = findUiPromise(message.type);
                    if (uiPromise) {
                        Log.log('receive UI Response: ', message.type);
                        uiPromise.resolve(message);
                        removeUiPromise(uiPromise);
                    }
                    break;
                }
                case UI_REQUEST$1.BLUETOOTH_PERMISSION:
                case UI_REQUEST$1.BLUETOOTH_CHARACTERISTIC_NOTIFY_CHANGE_FAILURE:
                case UI_REQUEST$1.LOCATION_PERMISSION:
                case UI_REQUEST$1.LOCATION_SERVICE_PERMISSION: {
                    postMessage(message);
                    break;
                }
                case IFRAME.CALL: {
                    Log.log('call API: ', message);
                    const response = yield callAPI(message);
                    const { success, payload } = response;
                    Log.log('call API Response: ', response);
                    if (success) {
                        return response;
                    }
                    return Object.assign(Object.assign({}, response), { payload: Object.assign(Object.assign({}, payload), { connectId: (_b = (_a = message.payload) === null || _a === void 0 ? void 0 : _a.connectId) !== null && _b !== void 0 ? _b : '', deviceId: (_d = (_c = message.payload) === null || _c === void 0 ? void 0 : _c.deviceId) !== null && _d !== void 0 ? _d : '' }) });
                }
                case IFRAME.CANCEL: {
                    Log.log('cancel API: ', message);
                    cancel(message.payload.connectId);
                    break;
                }
            }
            return Promise.resolve(message);
        });
    }
    dispose() {
    }
}
const initCore = () => {
    _core = new Core();
    return _core;
};
const initConnector = () => {
    _connector = new DeviceConnector();
    DevicePool.emitter.on(DEVICE.DISCONNECT, onDeviceDisconnectHandler);
    return _connector;
};
const initTransport = (Transport, plugin) => {
    TransportManager.setTransport(Transport, plugin);
};
const init = (settings, Transport, plugin) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        try {
            yield DataManager.load(settings);
            initTransport(Transport, plugin);
        }
        catch (_c) {
            Log.error('DataManager.load error');
        }
        enableLog(DataManager.getSettings('debug'));
        if (DataManager.getSettings('env') !== 'react-native') {
            setLoggerPostMessage(postMessage);
        }
        initCore();
        initConnector();
        return _core;
    }
    catch (error) {
        Log.error('core init', error);
    }
});

const HardwareSdk = ({ init, call, dispose, eventEmitter, uiResponse, cancel, updateSettings, }) => inject({
    init,
    call,
    dispose,
    eventEmitter,
    uiResponse,
    cancel,
    updateSettings,
});
const HardwareSDKLowLevel = ({ init, call, dispose, eventEmitter, addHardwareGlobalEventListener, uiResponse, cancel, updateSettings, }) => lowLevelInject({
    init,
    call,
    dispose,
    eventEmitter,
    addHardwareGlobalEventListener,
    uiResponse,
    cancel,
    updateSettings,
});
const HardwareTopLevelSdk = () => topLevelInject();

Object.defineProperty(exports, 'PROTO', {
    enumerable: true,
    get: function () { return hdTransport.Messages; }
});
exports.CORE_EVENT = CORE_EVENT;
exports.Core = Core;
exports.DEFAULT_PRIORITY = DEFAULT_PRIORITY;
exports.DEVICE = DEVICE;
exports.DEVICE_EVENT = DEVICE_EVENT;
exports.DataManager = DataManager;
exports.DeviceModelToTypes = DeviceModelToTypes;
exports.DeviceTypeToModels = DeviceTypeToModels;
exports.FIRMWARE = FIRMWARE;
exports.FIRMWARE_EVENT = FIRMWARE_EVENT;
exports.HardwareSDKLowLevel = HardwareSDKLowLevel;
exports.HardwareTopLevelSdk = HardwareTopLevelSdk;
exports.IFRAME = IFRAME;
exports.LOG = LOG;
exports.LOG_EVENT = LOG_EVENT;
exports.LogBlockEvent = LogBlockEvent;
exports.RESPONSE_EVENT = RESPONSE_EVENT;
exports.UI_EVENT = UI_EVENT;
exports.UI_REQUEST = UI_REQUEST$1;
exports.UI_RESPONSE = UI_RESPONSE;
exports.checkNeedUpdateBootForClassicAndMini = checkNeedUpdateBootForClassicAndMini;
exports.checkNeedUpdateBootForTouch = checkNeedUpdateBootForTouch;
exports.corsValidator = corsValidator;
exports.createDeviceMessage = createDeviceMessage;
exports.createErrorMessage = createErrorMessage;
exports.createFirmwareMessage = createFirmwareMessage;
exports.createIFrameMessage = createIFrameMessage;
exports.createLogMessage = createLogMessage;
exports.createResponseMessage = createResponseMessage;
exports.createUiMessage = createUiMessage;
exports.createUiResponse = createUiResponse;
exports["default"] = HardwareSdk;
exports.enableLog = enableLog;
exports.getDeviceBLEFirmwareVersion = getDeviceBLEFirmwareVersion;
exports.getDeviceBleName = getDeviceBleName;
exports.getDeviceBoardloaderVersion = getDeviceBoardloaderVersion;
exports.getDeviceBootloaderVersion = getDeviceBootloaderVersion;
exports.getDeviceFirmwareVersion = getDeviceFirmwareVersion;
exports.getDeviceLabel = getDeviceLabel;
exports.getDeviceType = getDeviceType;
exports.getDeviceTypeByBleName = getDeviceTypeByBleName;
exports.getDeviceUUID = getDeviceUUID;
exports.getEnv = getEnv;
exports.getFirmwareUpdateField = getFirmwareUpdateField;
exports.getHDPath = getHDPath;
exports.getHomeScreenDefaultList = getHomeScreenDefaultList;
exports.getHomeScreenHex = getHomeScreenHex;
exports.getHomeScreenSize = getHomeScreenSize;
exports.getLog = getLog;
exports.getLogger = getLogger;
exports.getMethodVersionRange = getMethodVersionRange;
exports.getOutputScriptType = getOutputScriptType;
exports.getSDKVersion = getSDKVersion;
exports.getScriptType = getScriptType;
exports.getTimeStamp = getTimeStamp;
exports.httpRequest = httpRequest;
exports.initCore = init;
exports.isBleConnect = isBleConnect;
exports.isValidVersionArray = isValidVersionArray;
exports.isValidVersionString = isValidVersionString;
exports.normalizeVersionArray = normalizeVersionArray;
exports.parseConnectSettings = parseConnectSettings;
exports.parseMessage = parseMessage;
exports.patchFeatures = patchFeatures;
exports.safeThrowError = safeThrowError;
exports.setLoggerPostMessage = setLoggerPostMessage;
exports.supportInputPinOnSoftware = supportInputPinOnSoftware;
exports.versionCompare = versionCompare;
exports.versionSplit = versionSplit;
exports.wait = wait;
exports.whitelist = whitelist;
exports.whitelistExtension = whitelistExtension;
