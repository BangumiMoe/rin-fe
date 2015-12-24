import React from "react";

import TransitionGroup from "./transition-group";

export default class Layer extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool.isRequired
  };
  render() {
    return (
      <TransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {this.props.show ? (
          React.cloneElement(React.Children.only(this.props.children), {
            key: "content"
          })
        ) : null}
      </TransitionGroup>
    );
  }
};
