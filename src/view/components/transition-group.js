import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class TransitionGroup extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName={{
        enter: "ui--enter",
        enterActive: "ui--enterActive",
        leave: "ui--leave",
        leaveActive: "ui--leaveActive",
        appear: "ui--appear",
        appearActive: "ui--appearActive"
      }} component="div" transitionEnterTimeout={300} transitionLeaveTimeout={300} {...this.props}>
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
};
