import React from "react";
import classNames from "classnames";

export default class ReplayControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={classNames(
          "ekiio-video-icon-replay-5",
          "ekiio-video-icon",
          "tool-tip"
        )}
        ref={(c) => {
          this.button = c;
        }}
        onClick={() => {
          const { actions } = this.props;
          actions.replay(5);
        }}
      >
        <div className="tool-tip-text top-left">Giảm 5s</div>
      </button>
    );
  }
}
