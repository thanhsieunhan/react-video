"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  actions: _propTypes2.default.object,
  player: _propTypes2.default.object
};

var ForwardControl = function (_React$Component) {
  _inherits(ForwardControl, _React$Component);

  function ForwardControl(props) {
    _classCallCheck(this, ForwardControl);

    return _possibleConstructorReturn(this, (ForwardControl.__proto__ || Object.getPrototypeOf(ForwardControl)).call(this, props));
  }

  _createClass(ForwardControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var player = this.props.player;

      return _react2.default.createElement(
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
        _react2.default.createElement(
          "div",
          { className: "tool-tip-text top-left" },
          this.props.player.isFullscreen ? "Tho??t ch??? ????? to??n m??n h??nh" : "To??n m??n h??nh"
        )
      );
    }
  }]);

  return ForwardControl;
}(_react2.default.Component);

exports.default = ForwardControl;