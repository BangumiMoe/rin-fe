import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Container extends React.Component {
  render() {
    return (
      <div className="ui-transitionGroup">
        {this.props.children}
      </div>
    );
  }
}

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
      }} component={Container} transitionEnterTimeout={300} transitionLeaveTimeout={300} {...this.props}>
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
};
