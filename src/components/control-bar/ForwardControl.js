import PropTypes from "prop-types";
import React from "react";
import classNames from 'classnames'

export default class ForwardControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={classNames(
          "ekiio-video-icon-forward-5",
          "ekiio-video-icon",
          "tool-tip"
        )}
        ref={(c) => {
          this.button = c;
        }}
        onClick={ () => {
          const {actions} = this.props
          actions.forward(5)
        }}
      >
        <div className="tool-tip-text top-left">
            Tua 5s
        </div>
      </button>
    );
  }
}