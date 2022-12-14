'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var redux = require('redux');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Hls = _interopDefault(require('hls.js'));
var classNames$1 = _interopDefault(require('classnames'));
var reactDom = require('react-dom');

var LOAD_START = 'video-react/LOAD_START';
var CAN_PLAY = 'video-react/CAN_PLAY';
var WAITING = 'video-react/WAITING';
var CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
var PLAYING = 'video-react/PLAYING';
var PLAY = 'video-react/PLAY';
var PAUSE = 'video-react/PAUSE';
var END = 'video-react/END';
var SEEKING = 'video-react/SEEKING';
var SEEKED = 'video-react/SEEKED';
var SEEKING_TIME = 'video-react/SEEKING_TIME';
var END_SEEKING = 'video-react/END_SEEKING';
var DURATION_CHANGE = 'video-react/DURATION_CHANGE';
var TIME_UPDATE = 'video-react/TIME_UPDATE';
var VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
var PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
var RATE_CHANGE = 'video-react/RATE_CHANGE';
var SUSPEND = 'video-react/SUSPEND';
var ABORT = 'video-react/ABORT';
var EMPTIED = 'video-react/EMPTIED';
var STALLED = 'video-react/STALLED';
var LOADED_META_DATA = 'video-react/LOADED_META_DATA';
var LOADED_DATA = 'video-react/LOADED_DATA';
var RESIZE = 'video-react/RESIZE';
var ERROR = 'video-react/ERROR';

function handleLoadStart(videoProps) {
  return {
    type: LOAD_START,
    videoProps: videoProps
  };
}

function handleCanPlay(videoProps) {
  return {
    type: CAN_PLAY,
    videoProps: videoProps
  };
}

function handleWaiting(videoProps) {
  return {
    type: WAITING,
    videoProps: videoProps
  };
}

function handleCanPlayThrough(videoProps) {
  return {
    type: CAN_PLAY_THROUGH,
    videoProps: videoProps
  };
}

function handlePlaying(videoProps) {
  return {
    type: PLAYING,
    videoProps: videoProps
  };
}

function handlePlay(videoProps) {
  return {
    type: PLAY,
    videoProps: videoProps
  };
}

function handlePause(videoProps) {
  return {
    type: PAUSE,
    videoProps: videoProps
  };
}

function handleEnd(videoProps) {
  return {
    type: END,
    videoProps: videoProps
  };
}

function handleSeeking(videoProps) {
  return {
    type: SEEKING,
    videoProps: videoProps
  };
}

function handleSeeked(videoProps) {
  return {
    type: SEEKED,
    videoProps: videoProps
  };
}

function handleDurationChange(videoProps) {
  return {
    type: DURATION_CHANGE,
    videoProps: videoProps
  };
}

function handleTimeUpdate(videoProps) {
  return {
    type: TIME_UPDATE,
    videoProps: videoProps
  };
}

function handleVolumeChange(videoProps) {
  return {
    type: VOLUME_CHANGE,
    videoProps: videoProps
  };
}

function handleProgressChange(videoProps) {
  return {
    type: PROGRESS_CHANGE,
    videoProps: videoProps
  };
}

function handleRateChange(videoProps) {
  return {
    type: RATE_CHANGE,
    videoProps: videoProps
  };
}

function handleSuspend(videoProps) {
  return {
    type: SUSPEND,
    videoProps: videoProps
  };
}

function handleAbort(videoProps) {
  return {
    type: ABORT,
    videoProps: videoProps
  };
}

function handleEmptied(videoProps) {
  return {
    type: EMPTIED,
    videoProps: videoProps
  };
}

function handleStalled(videoProps) {
  return {
    type: STALLED,
    videoProps: videoProps
  };
}

function handleLoadedMetaData(videoProps) {
  return {
    type: LOADED_META_DATA,
    videoProps: videoProps
  };
}

function handleLoadedData(videoProps) {
  return {
    type: LOADED_DATA,
    videoProps: videoProps
  };
}

function handleResize(videoProps) {
  return {
    type: RESIZE,
    videoProps: videoProps
  };
}

function handleError(videoProps) {
  return {
    type: ERROR,
    videoProps: videoProps
  };
}

function handleSeekingTime(time) {
  return {
    type: SEEKING_TIME,
    time: time
  };
}

function handleEndSeeking(time) {
  return {
    type: END_SEEKING,
    time: time
  };
}

var videoActions = /*#__PURE__*/Object.freeze({
  LOAD_START: LOAD_START,
  CAN_PLAY: CAN_PLAY,
  WAITING: WAITING,
  CAN_PLAY_THROUGH: CAN_PLAY_THROUGH,
  PLAYING: PLAYING,
  PLAY: PLAY,
  PAUSE: PAUSE,
  END: END,
  SEEKING: SEEKING,
  SEEKED: SEEKED,
  SEEKING_TIME: SEEKING_TIME,
  END_SEEKING: END_SEEKING,
  DURATION_CHANGE: DURATION_CHANGE,
  TIME_UPDATE: TIME_UPDATE,
  VOLUME_CHANGE: VOLUME_CHANGE,
  PROGRESS_CHANGE: PROGRESS_CHANGE,
  RATE_CHANGE: RATE_CHANGE,
  SUSPEND: SUSPEND,
  ABORT: ABORT,
  EMPTIED: EMPTIED,
  STALLED: STALLED,
  LOADED_META_DATA: LOADED_META_DATA,
  LOADED_DATA: LOADED_DATA,
  RESIZE: RESIZE,
  ERROR: ERROR,
  handleLoadStart: handleLoadStart,
  handleCanPlay: handleCanPlay,
  handleWaiting: handleWaiting,
  handleCanPlayThrough: handleCanPlayThrough,
  handlePlaying: handlePlaying,
  handlePlay: handlePlay,
  handlePause: handlePause,
  handleEnd: handleEnd,
  handleSeeking: handleSeeking,
  handleSeeked: handleSeeked,
  handleDurationChange: handleDurationChange,
  handleTimeUpdate: handleTimeUpdate,
  handleVolumeChange: handleVolumeChange,
  handleProgressChange: handleProgressChange,
  handleRateChange: handleRateChange,
  handleSuspend: handleSuspend,
  handleAbort: handleAbort,
  handleEmptied: handleEmptied,
  handleStalled: handleStalled,
  handleLoadedMetaData: handleLoadedMetaData,
  handleLoadedData: handleLoadedData,
  handleResize: handleResize,
  handleError: handleError,
  handleSeekingTime: handleSeekingTime,
  handleEndSeeking: handleEndSeeking
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Fullscreen = function () {
  function Fullscreen() {
    classCallCheck(this, Fullscreen);
  }

  createClass(Fullscreen, [{
    key: 'request',
    value: function request(elm) {
      if (elm.requestFullscreen) {
        elm.requestFullscreen();
      } else if (elm.webkitEnterFullScreen) {
        elm.webkitEnterFullScreen();
      } else if (elm.webkitRequestFullscreen) {
        elm.webkitRequestFullscreen();
      } else if (elm.mozRequestFullScreen) {
        elm.mozRequestFullScreen();
      } else if (elm.msRequestFullscreen) {
        elm.msRequestFullscreen();
      }
    }
  }, {
    key: 'exit',
    value: function exit() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(handler) {
      document.addEventListener('fullscreenchange', handler);
      document.addEventListener('webkitfullscreenchange', handler);
      document.addEventListener('mozfullscreenchange', handler);
      document.addEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: 'removeEventListener',
    value: function removeEventListener(handler) {
      document.removeEventListener('fullscreenchange', handler);
      document.removeEventListener('webkitfullscreenchange', handler);
      document.removeEventListener('mozfullscreenchange', handler);
      document.removeEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: 'isFullscreen',
    get: function get$$1() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }
  }, {
    key: 'enabled',
    get: function get$$1() {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
    }
  }]);
  return Fullscreen;
}();

var fullscreen = new Fullscreen();

var OPERATE = 'video-react/OPERATE';
var FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
var PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
var USER_ACTIVATE = 'video-react/USER_ACTIVATE';

function handleFullscreenChange(isFullscreen) {
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: isFullscreen
  };
}

function activate(activity) {
  return {
    type: PLAYER_ACTIVATE,
    activity: activity
  };
}

function userActivate(activity) {
  return {
    type: USER_ACTIVATE,
    activity: activity
  };
}

function play() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'play',
    source: ''
  };

  this.video.play();

  return {
    type: OPERATE,
    operation: operation
  };
}

function pause() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'pause',
    source: ''
  };

  this.video.pause();

  return {
    type: OPERATE,
    operation: operation
  };
}

function togglePlay() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'toggle-play',
    source: ''
  };

  this.video.togglePlay();

  return {
    type: OPERATE,
    operation: operation
  };
}

// seek video by time
function seek(time) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'seek',
    source: ''
  };

  this.video.seek(time);

  return {
    type: OPERATE,
    operation: operation
  };
}

// jump forward x seconds
function forward(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'forward-' + seconds,
    source: ''
  };

  this.video.forward(seconds);

  return {
    type: OPERATE,
    operation: operation
  };
}

// jump back x seconds
function replay(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'replay-' + seconds,
    source: ''
  };

  this.video.replay(seconds);

  return {
    type: OPERATE,
    operation: operation
  };
}

function changeRate(rate) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-rate',
    source: ''
  };

  this.video.playbackRate = rate;

  return {
    type: OPERATE,
    operation: operation
  };
}

function changeVolume(volume) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-volume',
    source: ''
  };

  var v = volume;
  if (volume < 0) {
    v = 0;
  }
  if (volume > 1) {
    v = 1;
  }
  this.video.volume = v;

  return {
    type: OPERATE,
    operation: operation
  };
}

function mute(muted) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: muted ? 'muted' : 'unmuted',
    source: ''
  };

  this.video.muted = muted;

  return {
    type: OPERATE,
    operation: operation
  };
}

function toggleFullscreen(player) {
  if (fullscreen.enabled) {
    if (fullscreen.isFullscreen) {
      fullscreen.exit();
    } else {
      fullscreen.request(this.rootElement);
    }
    return {
      type: OPERATE,
      operation: {
        action: 'toggle-fullscreen',
        source: ''
      }
    };
  }
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: !player.isFullscreen
  };
}

var playerActions = /*#__PURE__*/Object.freeze({
  OPERATE: OPERATE,
  FULLSCREEN_CHANGE: FULLSCREEN_CHANGE,
  PLAYER_ACTIVATE: PLAYER_ACTIVATE,
  USER_ACTIVATE: USER_ACTIVATE,
  handleFullscreenChange: handleFullscreenChange,
  activate: activate,
  userActivate: userActivate,
  play: play,
  pause: pause,
  togglePlay: togglePlay,
  seek: seek,
  forward: forward,
  replay: replay,
  changeRate: changeRate,
  changeVolume: changeVolume,
  mute: mute,
  toggleFullscreen: toggleFullscreen
});

var initialState = {
  currentSrc: null,
  duration: 0,
  currentTime: 0,
  seekingTime: 0,
  buffered: null,
  waiting: false,
  seeking: false,
  paused: true,
  autoPaused: false,
  ended: false,
  playbackRate: 1,
  muted: false,
  volume: 1,
  readyState: 0,
  networkState: 0,
  videoWidth: 0,
  videoHeight: 0,
  hasStarted: false,
  userActivity: false, //todo different with original
  isActive: false,
  isFullscreen: false
};

function player() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case USER_ACTIVATE:
      return _extends({}, state, {
        userActivity: action.activity
      });
    case PLAYER_ACTIVATE:
      return _extends({}, state, {
        isActive: action.activity
      });
    case FULLSCREEN_CHANGE:
      return _extends({}, state, {
        isFullscreen: !!action.isFullscreen
      });
    case SEEKING_TIME:
      return _extends({}, state, {
        seekingTime: action.time
      });
    case END_SEEKING:
      return _extends({}, state, {
        seekingTime: 0
      });
    case LOAD_START:
      return _extends({}, state, action.videoProps, {
        hasStarted: false,
        ended: false
      });
    case CAN_PLAY:
      return _extends({}, state, action.videoProps, {
        waiting: false
      });
    case WAITING:
      return _extends({}, state, action.videoProps, {
        waiting: true
      });
    case CAN_PLAY_THROUGH:
    case PLAYING:
      return _extends({}, state, action.videoProps, {
        waiting: false
      });
    case PLAY:
      return _extends({}, state, action.videoProps, {
        ended: false,
        paused: false,
        autoPaused: false,
        waiting: false,
        hasStarted: true
      });
    case PAUSE:
      return _extends({}, state, action.videoProps, {
        paused: true
      });
    case END:
      return _extends({}, state, action.videoProps, {
        ended: true
      });
    case SEEKING:
      return _extends({}, state, action.videoProps, {
        seeking: true
      });
    case SEEKED:
      return _extends({}, state, action.videoProps, {
        seeking: false
      });
    case ERROR:
      return _extends({}, state, action.videoProps, {
        error: 'UNKNOWN ERROR',
        ended: true
      });
    case DURATION_CHANGE:
    case TIME_UPDATE:
    case VOLUME_CHANGE:
    case PROGRESS_CHANGE:
    case RATE_CHANGE:
    case SUSPEND:
    case ABORT:
    case EMPTIED:
    case STALLED:
    case LOADED_META_DATA:
    case LOADED_DATA:
    case RESIZE:
      var newState = _extends({}, state, action.videoProps);
      if (action.videoProps.paused === false) {
        newState.hasStarted = true;
        newState.waiting = false;
      }
      return newState;
    default:
      return state;
  }
}

var initialState$1 = {
  count: 0,
  operation: {
    action: '',
    source: ''
  }
};

function operation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
  var action = arguments[1];

  switch (action.type) {
    case OPERATE:
      return _extends({}, state, {
        count: state.count + 1,
        operation: _extends({}, state.operation, action.operation)
      });
    default:
      return state;
  }
}

function reducer () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  return {
    player: player(state.player, action),
    operation: operation(state.operation, action)
  };
}

var Manager = function () {
  function Manager(store) {
    classCallCheck(this, Manager);

    this.store = store || redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    this.video = null;
    this.rootElement = null;
  }

  createClass(Manager, [{
    key: 'getActions',
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;

      var actions = _extends({}, playerActions, videoActions);

      function bindActionCreator(actionCreator) {
        return function bindAction() {
          // eslint-disable-next-line prefer-rest-params
          var action = actionCreator.apply(manager, arguments);
          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      return Object.keys(actions).filter(function (key) {
        return typeof actions[key] === 'function';
      }).reduce(function (boundActions, key) {
        boundActions[key] = bindActionCreator(actions[key]);
        return boundActions;
      }, {});
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.store.getState();
    }

    // subscribe state change

  }, {
    key: 'subscribeToStateChange',
    value: function subscribeToStateChange(listener, getState) {
      if (!getState) {
        getState = this.getState.bind(this);
      }

      var prevState = getState();

      var handleChange = function handleChange() {
        var state = getState();
        if (state === prevState) {
          return;
        }
        var prevStateCopy = prevState;
        prevState = state;
        listener(state, prevStateCopy);
      };

      return this.store.subscribe(handleChange);
    }

    // subscribe to operation state change

  }, {
    key: 'subscribeToOperationStateChange',
    value: function subscribeToOperationStateChange(listener) {
      var _this = this;

      return this.subscribeToStateChange(listener, function () {
        return _this.getState().operation;
      });
    }

    // subscribe to player state change

  }, {
    key: 'subscribeToPlayerStateChange',
    value: function subscribeToPlayerStateChange(listener) {
      var _this2 = this;

      return this.subscribeToStateChange(listener, function () {
        return _this2.getState().player;
      });
    }
  }]);
  return Manager;
}();

/**
 * @file format-time.js
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */
function formatTime() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;

  var s = Math.floor(seconds % 60);
  var m = Math.floor(seconds / 60 % 60);
  var h = Math.floor(seconds / 3600);
  var gm = Math.floor(guide / 60 % 60);
  var gh = Math.floor(guide / 3600);

  // handle invalid times
  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = m = s = '-';
  }

  // Check if we need to show hours
  h = h > 0 || gh > 0 ? h + ':' : '';

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';

  // Check if leading zero is need for seconds
  s = s < 10 ? '0' + s : s;

  return h + m + s;
}

// Check if the element belongs to a video element
// only accept <source />, <track />,
// <MyComponent isVideoChild />
// elements
function isVideoChild(c) {
  if (c.props && c.props.isVideoChild) {
    return true;
  }
  return c.type === 'source' || c.type === 'track';
}

function throttle(callback, limit) {
  var _arguments = arguments;

  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, _arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

var mediaProperties = ['error', 'src', 'srcObject', 'currentSrc', 'crossOrigin', 'networkState', 'preload', 'buffered', 'readyState', 'seeking', 'currentTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'played', 'seekable', 'ended', 'autoplay', 'loop', 'mediaGroup', 'controller', 'controls', 'volume', 'muted', 'defaultMuted', 'audioTracks', 'videoTracks', 'textTracks', 'width', 'height', 'videoWidth', 'videoHeight', 'poster'];

var propTypes = {
    actions: PropTypes.object,
    player: PropTypes.object,
    children: PropTypes.any,
    startTime: PropTypes.number,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    autoPlay: PropTypes.bool,
    playsInline: PropTypes.bool,
    src: PropTypes.string,
    poster: PropTypes.string,
    className: PropTypes.string,
    preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
    crossOrigin: PropTypes.string,

    onLoadStart: PropTypes.func,
    onWaiting: PropTypes.func,
    onCanPlay: PropTypes.func,
    onCanPlayThrough: PropTypes.func,
    onPlaying: PropTypes.func,
    onEnded: PropTypes.func,
    onSeeking: PropTypes.func,
    onSeeked: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onProgress: PropTypes.func,
    onDurationChange: PropTypes.func,
    onError: PropTypes.func,
    onSuspend: PropTypes.func,
    onAbort: PropTypes.func,
    onEmptied: PropTypes.func,
    onStalled: PropTypes.func,
    onLoadedMetadata: PropTypes.func,
    onLoadedData: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onRateChange: PropTypes.func,
    onVolumeChange: PropTypes.func,
    onResize: PropTypes.func
};

var defaultProps = {
    preload: 'auto'
};

var Video = function (_Component) {
    inherits(Video, _Component);

    function Video(props) {
        classCallCheck(this, Video);

        var _this = possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

        _this.video = null; // the html5 video
        _this.play = _this.play.bind(_this);
        _this.pause = _this.pause.bind(_this);
        _this.seek = _this.seek.bind(_this);
        _this.forward = _this.forward.bind(_this);
        _this.replay = _this.replay.bind(_this);
        _this.toggleFullscreen = _this.toggleFullscreen.bind(_this);
        _this.getProperties = _this.getProperties.bind(_this);
        _this.renderChildren = _this.renderChildren.bind(_this);
        _this.handleLoadStart = _this.handleLoadStart.bind(_this);
        _this.handleCanPlay = _this.handleCanPlay.bind(_this);
        _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind(_this);
        _this.handlePlay = _this.handlePlay.bind(_this);
        _this.handlePlaying = _this.handlePlaying.bind(_this);
        _this.handlePause = _this.handlePause.bind(_this);
        _this.handleEnded = _this.handleEnded.bind(_this);
        _this.handleWaiting = _this.handleWaiting.bind(_this);
        _this.handleSeeking = _this.handleSeeking.bind(_this);
        _this.handleSeeked = _this.handleSeeked.bind(_this);
        _this.handleFullscreenChange = _this.handleFullscreenChange.bind(_this);
        _this.handleError = _this.handleError.bind(_this);
        _this.handleSuspend = _this.handleSuspend.bind(_this);
        _this.handleAbort = _this.handleAbort.bind(_this);
        _this.handleEmptied = _this.handleEmptied.bind(_this);
        _this.handleStalled = _this.handleStalled.bind(_this);
        _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind(_this);
        _this.handleLoadedData = _this.handleLoadedData.bind(_this);
        _this.handleTimeUpdate = _this.handleTimeUpdate.bind(_this);
        _this.handleRateChange = _this.handleRateChange.bind(_this);
        _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);
        _this.handleDurationChange = _this.handleDurationChange.bind(_this);
        _this.handleProgress = throttle(_this.handleProgress.bind(_this), 250);
        _this.handleKeypress = _this.handleKeypress.bind(_this);
        return _this;
    }

    createClass(Video, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.forceUpdate(); // make sure the children can get the video property
            this.video.setAttribute('webkit-playsinline', true);
            this.video.setAttribute('x-webkit-airplay', 'allow');
        }

        // get all video properties

    }, {
        key: 'getProperties',
        value: function getProperties() {
            var _this2 = this;

            if (!this.video) {
                return null;
            }

            return mediaProperties.reduce(function (properties, key) {
                properties[key] = _this2.video[key];
                return properties;
            }, {});
        }

        // get playback rate

    }, {
        key: 'play',


        // play the video
        value: function play() {
            var promise = this.video.play();
            if (promise !== undefined) {
                promise.catch(function (error) {}).then(function () {});
            }
        }

        // pause the video

    }, {
        key: 'pause',
        value: function pause() {
            var promise = this.video.pause();
            if (promise !== undefined) {
                promise.catch(function (error) {}).then(function () {});
            }
        }

        // Change the video source and re-load the video:

    }, {
        key: 'load',
        value: function load() {
            this.video.load();
        }

        // Add a new text track to the video

    }, {
        key: 'addTextTrack',
        value: function addTextTrack() {
            var _video;

            (_video = this.video).addTextTrack.apply(_video, arguments);
        }

        // Check if your browser can play different types of video:

    }, {
        key: 'canPlayType',
        value: function canPlayType() {
            var _video2;

            (_video2 = this.video).canPlayType.apply(_video2, arguments);
        }

        // toggle play

    }, {
        key: 'togglePlay',
        value: function togglePlay() {
            if (this.video.paused) {
                this.play();
            } else {
                this.pause();
            }
        }

        // seek video by time

    }, {
        key: 'seek',
        value: function seek(time) {
            try {
                this.video.currentTime = time;
            } catch (e) {
                // console.log(e, 'Video is not ready.')
            }
        }

        // jump forward x seconds

    }, {
        key: 'forward',
        value: function forward(seconds) {
            this.seek(this.video.currentTime + seconds);
        }

        // jump back x seconds

    }, {
        key: 'replay',
        value: function replay(seconds) {
            this.forward(-seconds);
        }

        // enter or exist full screen

    }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen() {
            var _props = this.props,
                player = _props.player,
                actions = _props.actions;

            actions.toggleFullscreen(player);
        }

        // Fired when the user agent
        // begins looking for media data

    }, {
        key: 'handleLoadStart',
        value: function handleLoadStart() {
            var _props2 = this.props,
                actions = _props2.actions,
                onLoadStart = _props2.onLoadStart;

            actions.handleLoadStart(this.getProperties());
            if (onLoadStart) {
                onLoadStart.apply(undefined, arguments);
            }
        }

        // A handler for events that
        // signal that waiting has ended

    }, {
        key: 'handleCanPlay',
        value: function handleCanPlay() {
            var _props3 = this.props,
                actions = _props3.actions,
                onCanPlay = _props3.onCanPlay;

            actions.handleCanPlay(this.getProperties());
            if (onCanPlay) {
                onCanPlay.apply(undefined, arguments);
            }
        }

        // A handler for events that
        // signal that waiting has ended

    }, {
        key: 'handleCanPlayThrough',
        value: function handleCanPlayThrough() {
            var _props4 = this.props,
                actions = _props4.actions,
                onCanPlayThrough = _props4.onCanPlayThrough;

            actions.handleCanPlayThrough(this.getProperties());

            if (onCanPlayThrough) {
                onCanPlayThrough.apply(undefined, arguments);
            }
        }

        // A handler for events that
        // signal that waiting has ended

    }, {
        key: 'handlePlaying',
        value: function handlePlaying() {
            var _props5 = this.props,
                actions = _props5.actions,
                onPlaying = _props5.onPlaying;

            actions.handlePlaying(this.getProperties());

            if (onPlaying) {
                onPlaying.apply(undefined, arguments);
            }
        }

        // Fired whenever the media has been started

    }, {
        key: 'handlePlay',
        value: function handlePlay() {
            var _props6 = this.props,
                actions = _props6.actions,
                onPlay = _props6.onPlay;

            actions.handlePlay(this.getProperties());

            if (onPlay) {
                onPlay.apply(undefined, arguments);
            }
        }

        // Fired whenever the media has been paused

    }, {
        key: 'handlePause',
        value: function handlePause() {
            var _props7 = this.props,
                actions = _props7.actions,
                onPause = _props7.onPause;

            actions.handlePause(this.getProperties());

            if (onPause) {
                onPause.apply(undefined, arguments);
            }
        }

        // Fired when the duration of
        // the media resource is first known or changed

    }, {
        key: 'handleDurationChange',
        value: function handleDurationChange() {
            var _props8 = this.props,
                actions = _props8.actions,
                onDurationChange = _props8.onDurationChange;

            actions.handleDurationChange(this.getProperties());

            if (onDurationChange) {
                onDurationChange.apply(undefined, arguments);
            }
        }

        // Fired while the user agent
        // is downloading media data

    }, {
        key: 'handleProgress',
        value: function handleProgress() {
            var _props9 = this.props,
                actions = _props9.actions,
                onProgress = _props9.onProgress;

            if (this.video) {
                actions.handleProgressChange(this.getProperties());
            }

            if (onProgress) {
                onProgress.apply(undefined, arguments);
            }
        }

        // Fired when the end of the media resource
        // is reached (currentTime == duration)

    }, {
        key: 'handleEnded',
        value: function handleEnded() {
            var _props10 = this.props,
                loop = _props10.loop,
                player = _props10.player,
                actions = _props10.actions,
                onEnded = _props10.onEnded;

            if (loop) {
                this.seek(0);
                this.play();
            } else if (!player.paused) {
                this.pause();
            }
            actions.handleEnd(this.getProperties());

            if (onEnded) {
                onEnded.apply(undefined, arguments);
            }
        }

        // Fired whenever the media begins waiting

    }, {
        key: 'handleWaiting',
        value: function handleWaiting() {
            var _props11 = this.props,
                actions = _props11.actions,
                onWaiting = _props11.onWaiting;

            actions.handleWaiting(this.getProperties());

            if (onWaiting) {
                onWaiting.apply(undefined, arguments);
            }
        }

        // Fired whenever the player
        // is jumping to a new time

    }, {
        key: 'handleSeeking',
        value: function handleSeeking() {
            var _props12 = this.props,
                actions = _props12.actions,
                onSeeking = _props12.onSeeking;

            actions.handleSeeking(this.getProperties());

            if (onSeeking) {
                onSeeking.apply(undefined, arguments);
            }
        }

        // Fired when the player has
        // finished jumping to a new time

    }, {
        key: 'handleSeeked',
        value: function handleSeeked() {
            var _props13 = this.props,
                actions = _props13.actions,
                onSeeked = _props13.onSeeked;

            actions.handleSeeked(this.getProperties());

            if (onSeeked) {
                onSeeked.apply(undefined, arguments);
            }
        }

        // Handle Fullscreen Change

    }, {
        key: 'handleFullscreenChange',
        value: function handleFullscreenChange() {}

        // Fires when the browser is
        // intentionally not getting media data

    }, {
        key: 'handleSuspend',
        value: function handleSuspend() {
            var _props14 = this.props,
                actions = _props14.actions,
                onSuspend = _props14.onSuspend;

            actions.handleSuspend(this.getProperties());
            if (onSuspend) {
                onSuspend.apply(undefined, arguments);
            }
        }

        // Fires when the loading of an audio/video is aborted

    }, {
        key: 'handleAbort',
        value: function handleAbort() {
            var _props15 = this.props,
                actions = _props15.actions,
                onAbort = _props15.onAbort;

            actions.handleAbort(this.getProperties());
            if (onAbort) {
                onAbort.apply(undefined, arguments);
            }
        }

        // Fires when the current playlist is empty

    }, {
        key: 'handleEmptied',
        value: function handleEmptied() {
            var _props16 = this.props,
                actions = _props16.actions,
                onEmptied = _props16.onEmptied;

            actions.handleEmptied(this.getProperties());
            if (onEmptied) {
                onEmptied.apply(undefined, arguments);
            }
        }

        // Fires when the browser is trying to
        // get media data, but data is not available

    }, {
        key: 'handleStalled',
        value: function handleStalled() {
            var _props17 = this.props,
                actions = _props17.actions,
                onStalled = _props17.onStalled;

            actions.handleStalled(this.getProperties());

            if (onStalled) {
                onStalled.apply(undefined, arguments);
            }
        }

        // Fires when the browser has loaded
        // meta data for the audio/video

    }, {
        key: 'handleLoadedMetaData',
        value: function handleLoadedMetaData() {
            var _props18 = this.props,
                actions = _props18.actions,
                onLoadedMetadata = _props18.onLoadedMetadata,
                startTime = _props18.startTime;


            if (startTime && startTime > 0) {
                this.video.currentTime = startTime;
            }

            actions.handleLoadedMetaData(this.getProperties());

            if (onLoadedMetadata) {
                onLoadedMetadata.apply(undefined, arguments);
            }
        }

        // Fires when the browser has loaded
        // the current frame of the audio/video

    }, {
        key: 'handleLoadedData',
        value: function handleLoadedData() {
            var _props19 = this.props,
                actions = _props19.actions,
                onLoadedData = _props19.onLoadedData;

            actions.handleLoadedData(this.getProperties());

            if (onLoadedData) {
                onLoadedData.apply(undefined, arguments);
            }
        }

        // Fires when the current
        // playback position has changed

    }, {
        key: 'handleTimeUpdate',
        value: function handleTimeUpdate() {
            var _props20 = this.props,
                actions = _props20.actions,
                onTimeUpdate = _props20.onTimeUpdate;

            actions.handleTimeUpdate(this.getProperties());

            if (onTimeUpdate) {
                onTimeUpdate.apply(undefined, arguments);
            }
        }

        /**
         * Fires when the playing speed of the audio/video is changed
         */

    }, {
        key: 'handleRateChange',
        value: function handleRateChange() {
            var _props21 = this.props,
                actions = _props21.actions,
                onRateChange = _props21.onRateChange;

            actions.handleRateChange(this.getProperties());

            if (onRateChange) {
                onRateChange.apply(undefined, arguments);
            }
        }

        // Fires when the volume has been changed

    }, {
        key: 'handleVolumeChange',
        value: function handleVolumeChange() {
            var _props22 = this.props,
                actions = _props22.actions,
                onVolumeChange = _props22.onVolumeChange;

            actions.handleVolumeChange(this.getProperties());

            if (onVolumeChange) {
                onVolumeChange.apply(undefined, arguments);
            }
        }

        // Fires when an error occurred
        // during the loading of an audio/video

    }, {
        key: 'handleError',
        value: function handleError() {
            var _props23 = this.props,
                actions = _props23.actions,
                onError = _props23.onError;

            actions.handleError(this.getProperties());
            if (onError) {
                onError.apply(undefined, arguments);
            }
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            var _props24 = this.props,
                actions = _props24.actions,
                onResize = _props24.onResize;

            actions.handleResize(this.getProperties());
            if (onResize) {
                onResize.apply(undefined, arguments);
            }
        }
    }, {
        key: 'handleKeypress',
        value: function handleKeypress() {}
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this3 = this;

            var props = _extends({}, this.props, {
                video: this.video

                // to make sure the children can get video property
            });if (!this.video) {
                return null;
            }

            // only keep <source />, <track />, <MyComponent isVideoChild /> elements
            return React__default.Children.toArray(this.props.children).filter(isVideoChild).map(function (c) {
                var cprops = void 0;
                if (typeof c.type === 'string') {
                    // add onError to <source />
                    if (c.type === 'source') {
                        cprops = _extends({}, c.props);
                        var preOnError = cprops.onError;
                        cprops.onError = function () {
                            if (preOnError) {
                                preOnError.apply(undefined, arguments);
                            }
                            _this3.handleError.apply(_this3, arguments);
                        };
                    }
                } else {
                    cprops = props;
                }
                return React__default.cloneElement(c, cprops);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props25 = this.props,
                loop = _props25.loop,
                poster = _props25.poster,
                preload = _props25.preload,
                src = _props25.src,
                autoPlay = _props25.autoPlay,
                muted = _props25.muted,
                crossOrigin = _props25.crossOrigin,
                videoId = _props25.videoId;

            return React__default.createElement(
                'video',
                {
                    className: 'video',
                    id: videoId,
                    crossOrigin: crossOrigin,
                    ref: function ref(c) {
                        _this4.video = c;
                    },
                    muted: muted,
                    preload: preload,
                    loop: loop,
                    playsInline: true,
                    autoPlay: autoPlay,
                    poster: poster,
                    src: src,
                    onLoadStart: this.handleLoadStart,
                    onWaiting: this.handleWaiting,
                    onCanPlay: this.handleCanPlay,
                    onCanPlayThrough: this.handleCanPlayThrough,
                    onPlaying: this.handlePlaying,
                    onEnded: this.handleEnded,
                    onSeeking: this.handleSeeking,
                    onSeeked: this.handleSeeked,
                    onPlay: this.handlePlay,
                    onPause: this.handlePause,
                    onProgress: this.handleProgress,
                    onDurationChange: this.handleDurationChange,
                    onError: this.handleError,
                    onSuspend: this.handleSuspend,
                    onAbort: this.handleAbort,
                    onEmptied: this.handleEmptied,
                    onStalled: this.handleStalled,
                    onLoadedMetadata: this.handleLoadedMetaData,
                    onLoadedData: this.handleLoadedData,
                    onTimeUpdate: this.handleTimeUpdate,
                    onRateChange: this.handleRateChange,
                    onVolumeChange: this.handleVolumeChange,
                    tabIndex: 0
                },
                this.renderChildren()
            );
        }
    }, {
        key: 'playbackRate',
        get: function get$$1() {
            return this.video.playbackRate;
        }

        // set playback rate
        // speed of video
        ,
        set: function set$$1(rate) {
            this.video.playbackRate = rate;
        }
    }, {
        key: 'muted',
        get: function get$$1() {
            return this.video.muted;
        },
        set: function set$$1(val) {
            this.video.muted = val;
        }
    }, {
        key: 'volume',
        get: function get$$1() {
            return this.video.volume;
        },
        set: function set$$1(val) {
            if (val > 1) {
                val = 1;
            }
            if (val < 0) {
                val = 0;
            }
            this.video.volume = val;
        }

        // video width

    }, {
        key: 'videoWidth',
        get: function get$$1() {
            return this.video.videoWidth;
        }

        // video height

    }, {
        key: 'videoHeight',
        get: function get$$1() {
            return this.video.videoHeight;
        }
    }]);
    return Video;
}(React.Component);


Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
Video.displayName = 'Video';

var HLSSource = function (_Component) {
    inherits(HLSSource, _Component);

    function HLSSource(props, context) {
        classCallCheck(this, HLSSource);

        var _this = possibleConstructorReturn(this, (HLSSource.__proto__ || Object.getPrototypeOf(HLSSource)).call(this, props, context));

        _this.hls = new Hls();
        return _this;
    }

    createClass(HLSSource, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // `src` is the property get from this component
            // `video` is the property insert from `Video` component
            // `video` is the html5 video element
            var _props = this.props,
                src = _props.src,
                video = _props.video;
            // load hls video source base on hls.js

            if (Hls.isSupported()) {
                this.hls.loadSource(src);
                this.hls.attachMedia(video);
                this.hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    video.play();
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // destroy hls video source
            if (this.hls) {
                this.hls.destroy();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
            // return (
            //     <source
            //         src={this.props.src}
            //         type={this.props.type || 'application/x-mpegURL'}
            //     />
            // );
        }
    }]);
    return HLSSource;
}(React.Component);

var propTypes$1 = {
    actions: PropTypes.object,
    player: PropTypes.object
};

var PlayToggle = function (_React$Component) {
    inherits(PlayToggle, _React$Component);

    function PlayToggle(props) {
        classCallCheck(this, PlayToggle);
        return possibleConstructorReturn(this, (PlayToggle.__proto__ || Object.getPrototypeOf(PlayToggle)).call(this, props));
    }

    createClass(PlayToggle, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.player.paused !== this.props.player.paused;
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var _props = this.props,
                actions = _props.actions,
                player = _props.player;

            if (player.paused) {
                actions.play();
            } else {
                actions.pause();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                'button',
                { className: classNames$1({
                        'video-play-toggle-button': true,
                        'video-paused': this.props.player.paused
                    }, 'video-control', 'tool-tip'),
                    onClick: function onClick() {
                        return _this2.handleClick();
                    },
                    tabIndex: 0 },
                React__default.createElement(
                    'div',
                    {
                        className: 'tool-tip-text top-center' },
                    this.props.player.paused ? 'Ph??t' : 'D???ng'
                )
            );
        }
    }]);
    return PlayToggle;
}(React__default.Component);

var propTypes$2 = {
  actions: PropTypes.object,
  player: PropTypes.object
};

var ForwardControl = function (_React$Component) {
  inherits(ForwardControl, _React$Component);

  function ForwardControl(props) {
    classCallCheck(this, ForwardControl);
    return possibleConstructorReturn(this, (ForwardControl.__proto__ || Object.getPrototypeOf(ForwardControl)).call(this, props));
  }

  createClass(ForwardControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var player = this.props.player;

      return React__default.createElement(
        "button",
        {
          className: classNames({
            "ekiio-video-icon-fullscreen-exit": player.isFullscreen,
            "ekiio-video-icon-fullscreen": !player.isFullscreen
          }, "video-fullscreen-control video-control ekiio-video-icon", "tool-tip"),
          ref: function ref(c) {
            _this2.button = c;
          },
          tabIndex: "0",
          onClick: this.handleClick
        },
        React__default.createElement(
          "div",
          { className: "tool-tip-text top-left" },
          this.props.player.isFullscreen ? "Tho??t ch??? ????? to??n m??n h??nh" : "To??n m??n h??nh"
        )
      );
    }
  }]);
  return ForwardControl;
}(React__default.Component);

/**
 * Offset Left
 * getBoundingClientRect technique from
 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @function findElPosition
 * @param {Element} el Element from which to get offset
 * @return {Object}
 */
function findElPosition(el) {
  var box = void 0;

  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect();
  }

  if (!box) {
    return {
      left: 0,
      top: 0
    };
  }

  var docEl = document.documentElement;
  var body = document.body;

  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var scrollLeft = window.pageXOffset || body.scrollLeft;
  var left = box.left + scrollLeft - clientLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var scrollTop = window.pageYOffset || body.scrollTop;
  var top = box.top + scrollTop - clientTop;

  // Android sometimes returns slightly off decimal values, so need to round
  return {
    left: Math.round(left),
    top: Math.round(top)
  };
}

/**
 * Get pointer position in element
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 *
 * @function getPointerPosition
 * @param {Element} el Element on which to get the pointer position on
 * @param {Event} event Event object
 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
 */
function getPointerPosition(el, event) {
  var position = {};
  var box = findElPosition(el);
  var boxW = el.offsetWidth;
  var boxH = el.offsetHeight;

  var boxY = box.top;
  var boxX = box.left;
  var pageY = event.pageY;
  var pageX = event.pageX;

  if (event.changedTouches) {
    pageX = event.changedTouches[0].pageX;
    pageY = event.changedTouches[0].pageY;
  }

  position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));

  return position;
}

// check if an element has a class name
function hasClass(elm, cls) {
  var classes = elm.className.split(' ');
  for (var i = 0; i < classes.length; i++) {
    if (classes[i].toLowerCase() === cls.toLowerCase()) {
      return true;
    }
  }
  return false;
}

var propTypes$3 = {
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  stepForward: PropTypes.func,
  stepBack: PropTypes.func,
  sliderActive: PropTypes.func,
  sliderInactive: PropTypes.func,
  onMouseUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  getPercent: PropTypes.func,
  vertical: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.string,
  valuenow: PropTypes.string,
  valuetext: PropTypes.string
};

var Slider = function (_Component) {
  inherits(Slider, _Component);

  function Slider(props, context) {
    classCallCheck(this, Slider);

    var _this = possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.stepForward = _this.stepForward.bind(_this);
    _this.stepBack = _this.stepBack.bind(_this);
    _this.calculateDistance = _this.calculateDistance.bind(_this);
    _this.getProgress = _this.getProgress.bind(_this);
    _this.renderChildren = _this.renderChildren.bind(_this);

    _this.state = {
      active: false
    };
    return _this;
  }

  createClass(Slider, [{
    key: 'getProgress',
    value: function getProgress() {
      var getPercent = this.props.getPercent;

      if (!getPercent) {
        return 0;
      }
      var progress = getPercent();

      // Protect against no duration and other division issues
      if (typeof progress !== 'number' || progress < 0 || progress === Infinity) {
        progress = 0;
      }
      return progress;
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var onMouseDown = this.props.onMouseDown;
      // event.preventDefault();
      // event.stopPropagation();

      document.addEventListener('mousemove', this.handleMouseMove, true);
      document.addEventListener('mouseup', this.handleMouseUp, true);
      document.addEventListener('touchmove', this.handleMouseMove, true);
      document.addEventListener('touchend', this.handleMouseUp, true);

      this.setState({
        active: true,
        distance: 0
      });

      if (this.props.sliderActive) {
        this.props.sliderActive(event);
      }

      this.handleMouseMove(event);

      if (onMouseDown) {
        onMouseDown(event);
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var onMouseMove = this.props.onMouseMove;


      if (onMouseMove) {
        onMouseMove(event);
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var onMouseUp = this.props.onMouseUp;


      document.removeEventListener('mousemove', this.handleMouseMove, true);
      document.removeEventListener('mouseup', this.handleMouseUp, true);
      document.removeEventListener('touchmove', this.handleMouseMove, true);
      document.removeEventListener('touchend', this.handleMouseUp, true);

      this.setState({
        active: false
      });

      if (this.props.sliderInactive) {
        this.props.sliderInactive(event);
      }

      if (onMouseUp) {
        onMouseUp(event);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      document.addEventListener('keydown', this.handleKeyPress, true);
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      document.removeEventListener('keydown', this.handleKeyPress, true);
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      // event.stopPropagation();
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.which === 37 || event.which === 40) {
        // Left and Down Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepBack();
      } else if (event.which === 38 || event.which === 39) {
        // Up and Right Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepForward();
      }
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      if (this.props.stepForward) {
        this.props.stepForward();
      }
    }
  }, {
    key: 'stepBack',
    value: function stepBack() {
      if (this.props.stepBack) {
        this.props.stepBack();
      }
    }
  }, {
    key: 'calculateDistance',
    value: function calculateDistance(event) {
      var node = reactDom.findDOMNode(this);
      var position = getPointerPosition(node, event);
      if (this.props.vertical) {
        return position.y;
      }
      return position.x;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var progress = this.getProgress();
      var percentage = (progress * 100).toFixed(2) + '%';
      return React__default.Children.map(this.props.children, function (child) {
        return React__default.cloneElement(child, { progress: progress, percentage: percentage });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          vertical = _props.vertical,
          label = _props.label,
          valuenow = _props.valuenow,
          valuetext = _props.valuetext;


      return React__default.createElement(
        'div',
        {
          className: classNames$1(this.props.className, {
            'video-react-slider-vertical': vertical,
            'video-react-slider-horizontal': !vertical,
            'video-react-sliding': this.state.active
          }, 'video-react-slider'),
          tabIndex: '0',
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleMouseDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          'aria-label': label || '',
          'aria-valuenow': valuenow || '',
          'aria-valuetext': valuetext || '',
          'aria-valuemin': 0,
          'aria-valuemax': 100
        },
        this.renderChildren()
      );
    }
  }]);
  return Slider;
}(React.Component);


Slider.propTypes = propTypes$3;
Slider.displayName = 'Slider';

var propTypes$4 = {
  percentage: PropTypes.string,
  vertical: PropTypes.bool,
  className: PropTypes.string
};

var defaultProps$1 = {
  percentage: '100%',
  vertical: false
};

function VolumeLevel(_ref) {
  var percentage = _ref.percentage;

  return React__default.createElement('div', {
    className: 'video-volume-level video-control',
    style: { width: '' + percentage } });
}

VolumeLevel.defaultProps = defaultProps$1;
VolumeLevel.propTypes = propTypes$4;
VolumeLevel.displayName = 'VolumeLevel';

var propTypes$5 = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

var VolumeBar = function (_Component) {
  inherits(VolumeBar, _Component);

  function VolumeBar(props, context) {
    classCallCheck(this, VolumeBar);

    var _this = possibleConstructorReturn(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this, props, context));

    _this.state = {
      percentage: '0%'
    };

    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handlePercentageChange = _this.handlePercentageChange.bind(_this);
    _this.checkMuted = _this.checkMuted.bind(_this);
    _this.getPercent = _this.getPercent.bind(_this);
    _this.stepForward = _this.stepForward.bind(_this);
    _this.stepBack = _this.stepBack.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(VolumeBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'getPercent',
    value: function getPercent() {
      var player = this.props.player;

      if (player.muted) {
        return 0;
      }
      return player.volume;
    }
  }, {
    key: 'checkMuted',
    value: function checkMuted() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (player.muted) {
        actions.mute(false);
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var actions = this.props.actions;

      this.checkMuted();
      var distance = this.slider.calculateDistance(event);
      actions.changeVolume(distance);
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      var _props2 = this.props,
          player = _props2.player,
          actions = _props2.actions;

      this.checkMuted();
      actions.changeVolume(player.volume + 0.1);
    }
  }, {
    key: 'stepBack',
    value: function stepBack() {
      var _props3 = this.props,
          player = _props3.player,
          actions = _props3.actions;

      this.checkMuted();
      actions.changeVolume(player.volume - 0.1);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'handlePercentageChange',
    value: function handlePercentageChange(percentage) {
      if (percentage !== this.state.percentage) {
        this.setState({
          percentage: percentage
        });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var player = this.props.player;


      var volume = (player.volume * 100).toFixed(2);
      return React__default.createElement(
        Slider,
        _extends({
          ref: function ref(c) {
            _this2.slider = c;
          },
          label: 'volume level',
          valuenow: volume,
          valuetext: volume + '%',
          onMouseMove: this.handleMouseMove,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          sliderActive: this.handleFocus,
          sliderInactive: this.handleBlur,
          getPercent: this.getPercent,
          onPercentageChange: this.handlePercentageChange,
          stepForward: this.stepForward,
          stepBack: this.stepBack
        }, this.props, {
          className: 'video-volume-bar video-control'
        }),
        React__default.createElement(VolumeLevel, this.props)
      );
    }
  }]);
  return VolumeBar;
}(React.Component);

VolumeBar.propTypes = propTypes$5;
VolumeBar.displayName = 'VolumeBar';

var propTypes$6 = {
    player: PropTypes.object,
    actions: PropTypes.object,
    className: PropTypes.string
};

var VolumeMenuButton = function (_Component) {
    inherits(VolumeMenuButton, _Component);

    function VolumeMenuButton(props, context) {
        classCallCheck(this, VolumeMenuButton);

        var _this = possibleConstructorReturn(this, (VolumeMenuButton.__proto__ || Object.getPrototypeOf(VolumeMenuButton)).call(this, props, context));

        _this.state = {
            active: false
        };

        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }

    createClass(VolumeMenuButton, [{
        key: 'handleClick',
        value: function handleClick() {
            var _props = this.props,
                player = _props.player,
                actions = _props.actions;

            actions.mute(!player.muted);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.setState({
                active: true
            });
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            this.setState({
                active: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var player = this.props.player;

            var level = this.volumeLevel;
            return React__default.createElement(
                'div',
                { className: classNames$1({
                        'video-vol-slider-active': this.state.active
                    }, 'video-volume-menu') },
                React__default.createElement(
                    'button',
                    {
                        className: classNames$1({
                            'video-vol-muted': player.muted,
                            'video-vol-0': level === 0 && !player.muted,
                            'video-vol-1': level === 1,
                            'video-vol-2': level === 2,
                            'video-vol-3': level === 3
                        }, 'video-volume-button video-control', 'tool-tip') // add this video control class for prevent parent element get key-pressed event
                        , onClick: this.handleClick,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur },
                    React__default.createElement(
                        'div',
                        { className: 'tool-tip-text top-center' },
                        '\xC2m lu\u1EE3ng'
                    )
                ),
                React__default.createElement(VolumeBar, _extends({ onFocus: this.handleFocus,
                    onBlur: this.handleBlur
                }, this.props))
            );
        }
    }, {
        key: 'volumeLevel',
        get: function get$$1() {
            var _props$player = this.props.player,
                volume = _props$player.volume,
                muted = _props$player.muted;

            var level = 3;
            if (volume === 0 || muted) {
                level = 0;
            } else if (volume < 0.33) {
                level = 1;
            } else if (volume < 0.67) {
                level = 2;
            }
            return level;
        }
    }]);
    return VolumeMenuButton;
}(React.Component);

VolumeMenuButton.propTypes = propTypes$6;
VolumeMenuButton.displayName = 'VolumeMenuButton';

var propTypes$7 = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  percentage: PropTypes.string,
  className: PropTypes.string

  // Shows play progress
};function PlayProgressBar(_ref) {
  var currentTime = _ref.currentTime,
      duration = _ref.duration,
      percentage = _ref.percentage;

  return React__default.createElement('div', { 'data-current-time': formatTime(currentTime, duration),
    className: 'video-play-progress video-slider-bar',
    style: {
      width: percentage
    } });
}

PlayProgressBar.propTypes = propTypes$7;
PlayProgressBar.displayName = 'PlayProgressBar';

var propTypes$8 = {
  duration: PropTypes.number,
  buffered: PropTypes.object

  // Shows load progress
};function LoadProgressBar(_ref) {
  var buffered = _ref.buffered,
      duration = _ref.duration;

  if (!buffered || !buffered.length) {
    return null;
  }
  var bufferedEnd = buffered.end(buffered.length - 1);
  var style = {};

  if (bufferedEnd > duration) {
    bufferedEnd = duration;
  }

  // get the percent width of a time compared to the total end
  function percentify(time, end) {
    var percent = time / end || 0; // no NaN
    return (percent >= 1 ? 1 : percent) * 100 + '%';
  }

  // the width of the progress bar
  style.width = percentify(bufferedEnd, duration);

  var parts = [];

  // add child elements to represent the individual buffered time ranges
  for (var i = 0; i < buffered.length; i++) {
    var start = buffered.start(i);
    var end = buffered.end(i);
    // set the percent based on the width of the progress bar (bufferedEnd)
    var part = React__default.createElement('div', {
      style: {
        left: percentify(start, bufferedEnd),
        width: percentify(end - start, bufferedEnd)
      },
      key: 'part-' + i
    });
    parts.push(part);
  }

  if (parts.length === 0) {
    parts = null;
  }

  return React__default.createElement(
    'div',
    {
      style: style,
      className: 'video-load-progress' },
    parts
  );
}

LoadProgressBar.propTypes = propTypes$8;
LoadProgressBar.displayName = 'LoadProgressBar';

function MouseTimeDisplay(_ref) {
  var duration = _ref.duration,
      mouseTime = _ref.mouseTime,
      text = _ref.text;

  if (!mouseTime.time) {
    return null;
  }

  var time = text || formatTime(mouseTime.time, duration);

  return React__default.createElement(
    'span',
    {
      className: 'video-mouse-time-display video-control',
      style: {
        left: mouseTime.position + 'px'
      }
    },
    time
  );
}

MouseTimeDisplay.propTypes = {
  duration: PropTypes.number,
  mouseTime: PropTypes.object
};
MouseTimeDisplay.displayName = 'MouseTimeDisplay';

var propTypes$9 = {
  player: PropTypes.object,
  mouseTime: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string
};

var SeekBar = function (_Component) {
  inherits(SeekBar, _Component);

  function SeekBar(props, context) {
    classCallCheck(this, SeekBar);

    var _this = possibleConstructorReturn(this, (SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call(this, props, context));

    _this.getPercent = _this.getPercent.bind(_this);
    _this.getNewTime = _this.getNewTime.bind(_this);
    _this.stepForward = _this.stepForward.bind(_this);
    _this.stepBack = _this.stepBack.bind(_this);

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  createClass(SeekBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    /**
     * Get percentage of video played
     *
     * @return {Number} Percentage played
     * @method getPercent
     */

  }, {
    key: 'getPercent',
    value: function getPercent() {
      var _props$player = this.props.player,
          currentTime = _props$player.currentTime,
          seekingTime = _props$player.seekingTime,
          duration = _props$player.duration;

      var time = seekingTime || currentTime;
      var percent = time / duration;
      return percent >= 1 ? 1 : percent;
    }
  }, {
    key: 'getNewTime',
    value: function getNewTime(event) {
      var duration = this.props.player.duration;

      var distance = this.slider.calculateDistance(event);
      var newTime = distance * duration;

      // Don't let video end while scrubbing.
      return newTime === duration ? newTime - 0.1 : newTime;
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {}
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var actions = this.props.actions;

      var newTime = this.getNewTime(event);
      // Set new time (tell video to seek to new time)
      actions.seek(newTime);
      actions.handleEndSeeking(newTime);
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var actions = this.props.actions;

      var newTime = this.getNewTime(event);
      actions.handleSeekingTime(newTime);
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      var actions = this.props.actions;

      actions.forward(5);
    }
  }, {
    key: 'stepBack',
    value: function stepBack() {
      var actions = this.props.actions;

      actions.replay(5);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$player2 = _props.player,
          currentTime = _props$player2.currentTime,
          seekingTime = _props$player2.seekingTime,
          duration = _props$player2.duration,
          buffered = _props$player2.buffered,
          mouseTime = _props.mouseTime;

      var time = seekingTime || currentTime;

      return React__default.createElement(
        Slider,
        {
          ref: function ref(input) {
            _this2.slider = input;
          },
          label: 'video progress bar',
          className: 'video-progress-control-box video-control',
          valuenow: (this.getPercent() * 100).toFixed(2),
          valuetext: formatTime(time, duration),
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
          getPercent: this.getPercent,
          stepForward: this.stepForward,
          stepBack: this.stepBack
        },
        React__default.createElement(LoadProgressBar, {
          buffered: buffered,
          currentTime: time,
          duration: duration
        }),
        React__default.createElement(MouseTimeDisplay, {
          duration: duration,
          mouseTime: mouseTime
        }),
        React__default.createElement(PlayProgressBar, {
          currentTime: time,
          duration: duration
        })
      );
    }
  }]);
  return SeekBar;
}(React.Component);


SeekBar.propTypes = propTypes$9;
SeekBar.displayName = 'SeekBar';

var propTypes$a = {
  player: PropTypes.object,
  className: PropTypes.string
};

var ProgressControl = function (_Component) {
  inherits(ProgressControl, _Component);

  function ProgressControl(props, context) {
    classCallCheck(this, ProgressControl);

    var _this = possibleConstructorReturn(this, (ProgressControl.__proto__ || Object.getPrototypeOf(ProgressControl)).call(this, props, context));

    _this.state = {
      mouseTime: {
        time: null,
        position: 0
      }
    };

    _this.handleMouseMoveThrottle = _this.handleMouseMove.bind(_this);
    return _this;
  }

  createClass(ProgressControl, [{
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (!event.pageX) {
        return;
      }
      var duration = this.props.player.duration;

      var node = reactDom.findDOMNode(this.seekBar);
      var newTime = getPointerPosition(node, event).x * duration;
      var position = event.pageX - findElPosition(node).left;

      this.setState({
        mouseTime: {
          time: newTime,
          position: position
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        'div',
        {
          onMouseMove: this.handleMouseMoveThrottle,
          className: 'video-progress-control video-control'
        },
        React__default.createElement(SeekBar, _extends({
          mouseTime: this.state.mouseTime,
          ref: function ref(c) {
            _this2.seekBar = c;
          }
        }, this.props))
      );
    }
  }]);
  return ProgressControl;
}(React.Component);


ProgressControl.propTypes = propTypes$a;
ProgressControl.displayName = 'ProgressControl';

var propTypes$b = {
    actions: PropTypes.object,
    player: PropTypes.object
};

var FullscreenToggle = function (_Component) {
    inherits(FullscreenToggle, _Component);
    createClass(FullscreenToggle, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.player.isFullscreen !== this.props.player.isFullscreen;
        }
    }]);

    function FullscreenToggle(props, context) {
        classCallCheck(this, FullscreenToggle);

        var _this = possibleConstructorReturn(this, (FullscreenToggle.__proto__ || Object.getPrototypeOf(FullscreenToggle)).call(this, props, context));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    createClass(FullscreenToggle, [{
        key: 'handleClick',
        value: function handleClick() {
            var _props = this.props,
                player = _props.player,
                actions = _props.actions;

            actions.toggleFullscreen(player);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var player = this.props.player;

            return React__default.createElement(
                'button',
                {
                    className: classNames$1({
                        'ekiio-video-icon-fullscreen-exit': player.isFullscreen,
                        'ekiio-video-icon-fullscreen': !player.isFullscreen
                    }, 'video-fullscreen-control video-control ekiio-video-icon', 'tool-tip'),
                    ref: function ref(c) {
                        _this2.button = c;
                    },
                    tabIndex: '0',
                    onClick: this.handleClick },
                React__default.createElement(
                    'div',
                    {
                        className: 'tool-tip-text top-left' },
                    this.props.player.isFullscreen ? 'Tho??t ch??? ????? to??n m??n h??nh' : 'To??n m??n h??nh'
                )
            );
        }
    }]);
    return FullscreenToggle;
}(React.Component);


FullscreenToggle.propTypes = propTypes$b;
FullscreenToggle.displayName = 'FullscreenToggle';

var SettingToggle = function (_React$PureComponent) {
  inherits(SettingToggle, _React$PureComponent);

  function SettingToggle() {
    classCallCheck(this, SettingToggle);
    return possibleConstructorReturn(this, (SettingToggle.__proto__ || Object.getPrototypeOf(SettingToggle)).apply(this, arguments));
  }

  createClass(SettingToggle, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'button',
        {
          className: 'ekiio-video-icon ekiio-video-icon-setting video-control tool-tip',
          onClick: this.props.toggleSetting },
        React__default.createElement(
          'div',
          { className: 'tool-tip-text top-center' },
          'Tu\u1EF3 ch\u1EC9nh'
        )
      );
    }
  }]);
  return SettingToggle;
}(React__default.PureComponent);

var propTypes$c = {
  player: PropTypes.object
};

function CurrentTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration;

  var formattedTime = formatTime(currentTime, duration);
  return React__default.createElement(
    'span',
    {
      className: 'video-current-time' },
    formattedTime
  );
}

CurrentTimeDisplay.propTypes = propTypes$c;
CurrentTimeDisplay.displayName = 'CurrentTimeDisplay';

var propTypes$d = {
  player: PropTypes.object
};

function DurationDisplay(_ref) {
  var duration = _ref.player.duration;

  var formattedTime = formatTime(duration);
  return React__default.createElement(
    'span',
    {
      className: 'video-duration-display' },
    formattedTime
  );
}

DurationDisplay.propTypes = propTypes$d;
DurationDisplay.displayName = 'DurationDisplay';

var ControlBar = function ControlBar(props) {

  var children = [React__default.createElement(PlayToggle, _extends({ key: 'toggle-play' }, props)), React__default.createElement(ForwardControl, _extends({ key: 'forward-control' }, props)), React__default.createElement(VolumeMenuButton, _extends({ key: 'volume-menu-button' }, props)), React__default.createElement(CurrentTimeDisplay, { key: 'current-time-display', player: props.player }), React__default.createElement(ProgressControl, _extends({ key: 'progress-control' }, props)), React__default.createElement(DurationDisplay, { key: 'duration-display', player: props.player }), React__default.createElement(SettingToggle, _extends({ key: 'setting-popup-toggle' }, props)), React__default.createElement(FullscreenToggle, _extends({ key: 'full-screen-toggle' }, props))];
  return React__default.createElement(
    'div',
    { className: classNames$1('control-bar', 'control-bar-auto-hide') },
    children
  );
};

var USER_AGENT = typeof window !== 'undefined' && window.navigator ? window.navigator.userAgent : '';
// const webkitVersionMap = (/AppleWebKit\/([\d.]+)/i).exec(USER_AGENT);
// const appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;

/*
 * Device is an iPhone
 *
 * @type {Boolean}
 * @constant
 * @private
 */
var IS_IPAD = /iPad/i.test(USER_AGENT);

// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
var IS_IPOD = /iPod/i.test(USER_AGENT);
var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

var propTypes$e = {
  clickable: PropTypes.bool,
  dblclickable: PropTypes.bool,
  manager: PropTypes.object,
  actions: PropTypes.object,
  player: PropTypes.object,
  shortcuts: PropTypes.array
};

var defaultProps$2 = {
  clickable: true,
  dblclickable: true
};

var Shortcut = function (_Component) {
  inherits(Shortcut, _Component);

  function Shortcut(props, context) {
    classCallCheck(this, Shortcut);

    var _this = possibleConstructorReturn(this, (Shortcut.__proto__ || Object.getPrototypeOf(Shortcut)).call(this, props, context));

    _this.defaultShortcuts = [{
      keyCode: 32, // spacebar
      handle: _this.togglePlay
    }, {
      keyCode: 75, // k
      handle: _this.togglePlay
    }, {
      keyCode: 70, // f
      handle: _this.toggleFullscreen
    }, {
      keyCode: 37, // Left arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.replay(5, {
          action: 'replay-5',
          source: 'shortcut'
        }); // Go back 5 seconds
      }
    }, {
      keyCode: 74, // j
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.replay(10, {
          action: 'replay-10',
          source: 'shortcut'
        }); // Go back 10 seconds
      }
    }, {
      keyCode: 39, // Right arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.forward(5, {
          action: 'forward-5',
          source: 'shortcut'
        }); // Go forward 5 seconds
      }
    }, {
      keyCode: 76, // l
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.forward(10, {
          action: 'forward-10',
          source: 'shortcut'
        }); // Go forward 10 seconds
      }
    }, {
      keyCode: 36, // Home
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.seek(0); // Go to beginning of video
      }
    }, {
      keyCode: 35, // End
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        // Go to end of video
        actions.seek(player.duration);
      }
    }, {
      keyCode: 38, // Up arrow
      handle: function handle(player, actions) {
        // Increase volume 5%
        var v = player.volume + 0.05;
        if (v > 1) {
          v = 1;
        }
        actions.changeVolume(v, {
          action: 'volume-up',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 40, // Down arrow
      handle: function handle(player, actions) {
        // Decrease volume 5%
        var v = player.volume - 0.05;
        if (v < 0) {
          v = 0;
        }
        var action = v > 0 ? 'volume-down' : 'volume-off';
        actions.changeVolume(v, {
          action: action,
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 190, // Shift + >
      shift: true,
      handle: function handle(player, actions) {
        // Increase speed
        var playbackRate = player.playbackRate;
        if (playbackRate >= 1.5) {
          playbackRate = 2;
        } else if (playbackRate >= 1.25) {
          playbackRate = 1.5;
        } else if (playbackRate >= 1.0) {
          playbackRate = 1.25;
        } else if (playbackRate >= 0.5) {
          playbackRate = 1.0;
        } else if (playbackRate >= 0.25) {
          playbackRate = 0.5;
        } else if (playbackRate >= 0) {
          playbackRate = 0.25;
        }
        actions.changeRate(playbackRate, {
          action: 'fast-forward',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 188, // Shift + <
      shift: true,
      handle: function handle(player, actions) {
        // Decrease speed
        var playbackRate = player.playbackRate;
        if (playbackRate <= 0.5) {
          playbackRate = 0.25;
        } else if (playbackRate <= 1.0) {
          playbackRate = 0.5;
        } else if (playbackRate <= 1.25) {
          playbackRate = 1.0;
        } else if (playbackRate <= 1.5) {
          playbackRate = 1.25;
        } else if (playbackRate <= 2) {
          playbackRate = 1.5;
        }
        actions.changeRate(playbackRate, {
          action: 'fast-rewind',
          source: 'shortcut'
        });
      }
    }];

    _this.shortcuts = [].concat(toConsumableArray(_this.defaultShortcuts));

    _this.mergeShortcuts = _this.mergeShortcuts.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    return _this;
  }

  createClass(Shortcut, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mergeShortcuts();
      document.addEventListener('keydown', this.handleKeyPress);
      document.addEventListener('click', this.handleClick);
      document.addEventListener('dblclick', this.handleDoubleClick);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.shortcuts !== this.props.shortcuts) {
        this.mergeShortcuts();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('dblclick', this.handleDoubleClick);
    }

    // merge the shortcuts from props

  }, {
    key: 'mergeShortcuts',
    value: function mergeShortcuts() {
      var gradeShortcut = function gradeShortcut(s) {
        var score = 0;
        var ps = ['ctrl', 'shift', 'alt'];
        ps.forEach(function (key) {
          if (s[key]) {
            score++;
          }
        });
        return score;
      };

      var shortcuts = (this.props.shortcuts || []).filter(function (s) {
        return s.keyCode && s.handle && typeof s.handle === 'function';
      });

      this.shortcuts = [].concat(toConsumableArray(shortcuts), toConsumableArray(this.defaultShortcuts)).sort(function (a, b) {
        return gradeShortcut(b) - gradeShortcut(a);
      });
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay(player, actions) {
      if (player.paused) {
        actions.play({
          action: 'play',
          source: 'shortcut'
        });
      } else {
        actions.pause({
          action: 'pause',
          source: 'shortcut'
        });
      }
    }
  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen(player, actions) {
      actions.toggleFullscreen(player);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (!player.isActive) {
        return;
      }
      if (document.activeElement && (hasClass(document.activeElement, 'video-control') || hasClass(document.activeElement, 'video-menu-button-active')
      // || hasClass(document.activeElement, 'video-react-slider')
      || hasClass(document.activeElement, 'video-big-play-button'))) {
        return;
      }

      var keyCode = e.keyCode || e.which;
      var ctrl = e.ctrlKey || e.metaKey;
      var shift = e.shiftKey;
      var alt = e.altKey;

      var shortcut = this.shortcuts.filter(function (s) {
        if (!s.keyCode || s.keyCode - keyCode !== 0) {
          return false;
        }
        if (s.ctrl !== undefined && s.ctrl !== ctrl || s.shift !== undefined && s.shift !== shift || s.alt !== undefined && s.alt !== alt) {
          return false;
        }
        return true;
      })[0];

      if (shortcut) {
        shortcut.handle(player, actions);
        e.preventDefault();
      }
    }

    // only if player is active and player is ready

  }, {
    key: 'canBeClicked',
    value: function canBeClicked(player, e) {
      if (!player.isActive || e.target.nodeName !== 'VIDEO' || player.readyState !== 4) {
        return false;
      }
      return true;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props2 = this.props,
          player = _props2.player,
          actions = _props2.actions,
          clickable = _props2.clickable;

      if (!this.canBeClicked(player, e) || !clickable) {
        return;
      }
      this.togglePlay(player, actions);
      // e.preventDefault();
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(e) {
      var _props3 = this.props,
          player = _props3.player,
          actions = _props3.actions,
          dblclickable = _props3.dblclickable;

      if (!this.canBeClicked(player, e) || !dblclickable) {
        return;
      }
      this.toggleFullscreen(player, actions);
      // e.preventDefault();
    }

    // this component dose not render anything
    // it's just for the key down event

  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Shortcut;
}(React.Component);


Shortcut.propTypes = propTypes$e;
Shortcut.defaultProps = defaultProps$2;
Shortcut.displayName = 'Shortcut';

var propTypes$f = {
  player: PropTypes.object
};

var LoadingSpinner = function (_React$Component) {
  inherits(LoadingSpinner, _React$Component);

  function LoadingSpinner() {
    classCallCheck(this, LoadingSpinner);
    return possibleConstructorReturn(this, (LoadingSpinner.__proto__ || Object.getPrototypeOf(LoadingSpinner)).apply(this, arguments));
  }

  createClass(LoadingSpinner, [{
    key: 'render',
    value: function render() {
      var player = this.props.player;
      if (player.error) {
        return null;
      }
      return React__default.createElement(
        'div',
        {
          className: 'video-loading-spinner' },
        React__default.createElement('div', null),
        React__default.createElement('div', null)
      );
    }
  }]);
  return LoadingSpinner;
}(React__default.Component);


LoadingSpinner.propTypes = propTypes$f;
LoadingSpinner.displayName = ' LoadingSpinner';

var propTypes$g = {
  poster: PropTypes.string,
  player: PropTypes.object,
  actions: PropTypes.object
};

var BigPlayButton = function (_React$Component) {
  inherits(BigPlayButton, _React$Component);

  function BigPlayButton() {
    classCallCheck(this, BigPlayButton);
    return possibleConstructorReturn(this, (BigPlayButton.__proto__ || Object.getPrototypeOf(BigPlayButton)).apply(this, arguments));
  }

  createClass(BigPlayButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.player.hasStarted !== this.props.player.hasStarted;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (player.hasStarted) {
        return null;
      }
      return React__default.createElement('button', {
        className: 'video-big-play-button video-control',
        onClick: function onClick() {
          if (player.paused) {
            actions.play();
          }
        }
      });
    }
  }]);
  return BigPlayButton;
}(React__default.Component);

BigPlayButton.propTypes = propTypes$g;
BigPlayButton.displayName = 'BigPlayButton';

var propTypes$h = {
  manager: PropTypes.object
};

var Bezel = function (_Component) {
  inherits(Bezel, _Component);

  function Bezel(props, context) {
    classCallCheck(this, Bezel);

    var _this = possibleConstructorReturn(this, (Bezel.__proto__ || Object.getPrototypeOf(Bezel)).call(this, props, context));

    _this.timer = null;
    props.manager.subscribeToOperationStateChange(_this.handleStateChange.bind(_this));
    _this.state = {
      hidden: true,
      operation: {}
    };
    return _this;
  }

  createClass(Bezel, [{
    key: 'handleStateChange',
    value: function handleStateChange(state, prevState) {
      var _this2 = this;

      if (state.count !== prevState.count && state.operation.source === 'shortcut') {
        if (this.timer) {
          // previous animation is not finished
          clearTimeout(this.timer); // cancel it
          this.timer = null;
        }

        // show it
        // update operation
        this.setState({
          hidden: false,
          count: state.count,
          operation: state.operation
        });
        // hide it after 0.5s
        this.timer = setTimeout(function () {
          _this2.setState({
            hidden: true
          });
          _this2.timer = null;
        }, 500);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // only displays for shortcut so far
      if (this.state.operation.source !== 'shortcut') {
        return null;
      }
      var style = this.state.hidden ? {
        display: 'block'
      } : null;

      return React__default.createElement(
        'div',
        {
          className: classNames$1({
            'video-bezel': true,
            'video-bezel-animation': this.state.count % 2 === 0,
            'video-bezel-animation-alt': this.state.count % 2 === 1
          }),
          style: style,
          role: 'status',
          'aria-label': this.state.operation.action
        },
        React__default.createElement('div', {
          className: classNames$1('ekiio-video-bezel-icon', 'ekiio-video-bezel-icon-' + this.state.operation.action)
        })
      );
    }
  }]);
  return Bezel;
}(React.Component);

Bezel.propTypes = propTypes$h;
Bezel.displayName = 'Bezel';

var propTypes$i = {
    children: PropTypes.any,
    muted: PropTypes.bool,
    playsInline: PropTypes.bool,
    aspectRatio: PropTypes.string,
    className: PropTypes.string,
    videoId: PropTypes.string,
    startTime: PropTypes.number,
    loop: PropTypes.bool,
    autoPlay: PropTypes.bool,
    src: PropTypes.string,
    poster: PropTypes.string,
    preload: PropTypes.oneOf(['auto', 'metadata', 'none']),

    onLoadStart: PropTypes.func,
    onWaiting: PropTypes.func,
    onCanPlay: PropTypes.func,
    onCanPlayThrough: PropTypes.func,
    onPlaying: PropTypes.func,
    onEnded: PropTypes.func,
    onSeeking: PropTypes.func,
    onSeeked: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onProgress: PropTypes.func,
    onDurationChange: PropTypes.func,
    onError: PropTypes.func,
    onSuspend: PropTypes.func,
    onAbort: PropTypes.func,
    onEmptied: PropTypes.func,
    onStalled: PropTypes.func,
    onLoadedMetadata: PropTypes.func,
    onLoadedData: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onRateChange: PropTypes.func,
    onVolumeChange: PropTypes.func,

    store: PropTypes.object
};
var defaultProps$3 = {
    HLS: false
};

var Player = function (_Component) {
    inherits(Player, _Component);

    function Player(props) {
        classCallCheck(this, Player);

        var _this = possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

        _this.controlsHideTimer = null;
        _this.video = null; // the Video component
        _this.manager = new Manager(props.store);
        _this.actions = _this.manager.getActions();
        _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind(_this));

        _this.handleResize = _this.handleResize.bind(_this);
        _this.getChildren = _this.getChildren.bind(_this);
        _this.handleMouseMove = throttle(_this.handleMouseMove.bind(_this), 250);
        _this.handleMouseDown = _this.handleMouseDown.bind(_this);
        _this.startControlsTimer = _this.startControlsTimer.bind(_this);
        _this.handleFullScreenChange = _this.handleFullScreenChange.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }

    createClass(Player, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleResize();
            window.addEventListener('resize', this.handleResize);
            fullscreen.addEventListener(this.handleFullScreenChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Remove event listener
            window.removeEventListener('resize', this.handleResize);
            fullscreen.removeEventListener(this.handleFullScreenChange);
            if (this.controlsHideTimer) {
                window.clearTimeout(this.controlsHideTimer);
            }
        }
    }, {
        key: 'getChildren',
        value: function getChildren(props) {
            var _this2 = this;

            //necessary props
            var nps = { actions: props.actions, player: props.player
                // check hsl src based on
            };var video = props.HLS ? React__default.createElement(
                Video,
                _extends({
                    ref: function ref(c) {
                        _this2.video = c;
                        _this2.manager.video = _this2.video;
                    },
                    key: 'video'
                }, props),
                React__default.createElement(HLSSource, {
                    isVideoChild: true,
                    src: props.src
                })
            ) : React__default.createElement(Video, _extends({
                ref: function ref(c) {
                    _this2.video = c;
                    _this2.manager.video = _this2.video;
                },
                key: 'video'
            }, props));

            return [video, React__default.createElement(ControlBar, _extends({ key: 'control-bar'
            }, nps, { toggleSetting: props.toggleSetting, rootElement: this.manager.rootElement })), React__default.createElement(Shortcut, _extends({ key: 'short-cut'
            }, nps)), React__default.createElement(LoadingSpinner, { key: 'loading-spinner', player: props.player }), React__default.createElement(Bezel, { key: 'bezel', manager: props.manager })];
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this.manager.getState();
        }

        // get playback rate

    }, {
        key: 'play',


        // play the video
        value: function play() {
            this.video.play();
        }

        // pause the video

    }, {
        key: 'pause',
        value: function pause() {
            this.video.pause();
        }

        // Change the video source and re-load the video:

    }, {
        key: 'load',
        value: function load() {
            this.video.load();
        }

        // Add a new text track to the video

    }, {
        key: 'addTextTrack',
        value: function addTextTrack() {
            var _video;

            (_video = this.video).addTextTrack.apply(_video, arguments);
        }

        // Check if your browser can play different types of video:

    }, {
        key: 'canPlayType',
        value: function canPlayType() {
            var _video2;

            (_video2 = this.video).canPlayType.apply(_video2, arguments);
        }

        // seek video by time

    }, {
        key: 'seek',
        value: function seek(time) {
            this.video.seek(time);
        }

        // jump forward x seconds

    }, {
        key: 'forward',
        value: function forward(seconds) {
            this.video.forward(seconds);
        }

        // jump back x seconds

    }, {
        key: 'replay',
        value: function replay(seconds) {
            this.video.replay(seconds);
        }

        // enter or exist full screen

    }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen() {
            this.video.toggleFullscreen();
        }

        // subscribe to player state change

    }, {
        key: 'subscribeToStateChange',
        value: function subscribeToStateChange(listener) {
            return this.manager.subscribeToPlayerStateChange(listener);
        }

        // player resize

    }, {
        key: 'handleResize',
        value: function handleResize() {}
    }, {
        key: 'handleFullScreenChange',
        value: function handleFullScreenChange() {
            this.actions.handleFullscreenChange(fullscreen.isFullscreen);
        }
    }, {
        key: 'handleMouseDown',
        value: function handleMouseDown() {
            this.startControlsTimer();
        }
    }, {
        key: 'handleMouseMove',
        value: function handleMouseMove() {
            this.startControlsTimer();
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown() {
            this.startControlsTimer();
        }
    }, {
        key: 'startControlsTimer',
        value: function startControlsTimer() {
            var _this3 = this;

            this.actions.userActivate(true);
            clearTimeout(this.controlsHideTimer);
            this.controlsHideTimer = setTimeout(function () {
                _this3.actions.userActivate(false);
            }, 3000);
        }
    }, {
        key: 'handleStateChange',
        value: function handleStateChange(state, prevState) {
            if (state.isFullscreen !== prevState.isFullscreen) {
                this.handleResize();
            }
            this.forceUpdate(); // re-render
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.actions.activate(true);
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            this.actions.activate(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _manager$getState = this.manager.getState(),
                player = _manager$getState.player;

            var paused = player.paused,
                hasStarted = player.hasStarted,
                waiting = player.waiting,
                seeking = player.seeking,
                isFullscreen = player.isFullscreen,
                userActivity = player.userActivity,
                readyState = player.readyState;

            var props = _extends({}, this.props, {
                player: player,
                src: this.props.src,
                actions: this.actions,
                manager: this.manager,
                store: this.manager.store,
                video: this.video ? this.video.video : null
            });
            var children = this.getChildren(props);

            return React__default.createElement(
                'div',
                {
                    className: classNames$1({
                        'video-has-started': hasStarted,
                        'video-paused': paused,
                        'video-playing': !paused,
                        'video-waiting': waiting,
                        'video-seeking': seeking,
                        'video-fullscreen': isFullscreen,
                        'video-user-inactive': !userActivity,
                        'video-user-active': userActivity,
                        'video-workinghover': !IS_IOS,
                        'video-not-ready': readyState < 2
                    }, 'ekiio-video-player', this.props.className),
                    ref: function ref(c) {
                        _this4.manager.rootElement = c;
                    },
                    onTouchStart: this.handleMouseDown,
                    onMouseDown: this.handleMouseDown,
                    onMouseMove: this.handleMouseMove,
                    onKeyDown: this.handleKeyDown,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    tabIndex: '-1'
                },
                React__default.Children.map(this.props.children, function (child) {
                    return React__default.cloneElement(child, {
                        player: player,
                        actions: _this4.actions
                    });
                }),
                children
            );
        }
    }, {
        key: 'playbackRate',
        get: function get$$1() {
            return this.video.playbackRate;
        }

        // set playback rate
        // speed of video
        ,
        set: function set$$1(rate) {
            this.video.playbackRate = rate;
        }
    }, {
        key: 'muted',
        get: function get$$1() {
            return this.video.muted;
        },
        set: function set$$1(val) {
            this.video.muted = val;
        }
    }, {
        key: 'volume',
        get: function get$$1() {
            return this.video.volume;
        },
        set: function set$$1(val) {
            this.video.volume = val;
        }

        // video width

    }, {
        key: 'videoWidth',
        get: function get$$1() {
            return this.video.videoWidth;
        }

        // video height

    }, {
        key: 'videoHeight',
        get: function get$$1() {
            return this.video.videoHeight;
        }
    }]);
    return Player;
}(React.Component);


Player.contextTypes = { store: PropTypes.object };
Player.propTypes = propTypes$i;
Player.defaultProps = defaultProps$3;
Player.displayName = 'Player';

var propTypes$j = {
  actions: PropTypes.object,
  player: PropTypes.object
};

var ChangeSubVi = function (_React$Component) {
  inherits(ChangeSubVi, _React$Component);

  function ChangeSubVi(props, context) {
    classCallCheck(this, ChangeSubVi);
    return possibleConstructorReturn(this, (ChangeSubVi.__proto__ || Object.getPrototypeOf(ChangeSubVi)).call(this, props, context));
  }

  createClass(ChangeSubVi, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'button',
        { className: 'btn-switch-sub', type: 'button',
          onClick: this.props.toggleSubVi },
        'VI/EN'
      );
    }
  }]);
  return ChangeSubVi;
}(React__default.Component);


ChangeSubVi.propTypes = propTypes$j;

exports.Player = Player;
exports.Video = Video;
exports.TogglePlay = PlayToggle;
exports.CurrentTime = CurrentTimeDisplay;
exports.ChangeSubVi = ChangeSubVi;
//# sourceMappingURL=ekiio-video-react.cjs.js.map
