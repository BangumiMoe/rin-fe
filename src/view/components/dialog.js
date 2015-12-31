import React from "react";

import Portal from "./portal";
import TransitionGroup from "./transition-group";

export default class Dialog extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool
  };
  static defaultProps = {
    show: false
  };
  render() {
    return (
      <Portal>
        <TransitionGroup>
          {this.props.show ? (
            <article className="ui-dialog" key="dialog">
              {this.props.children}
            </article>
          ) : null}
        </TransitionGroup>
      </Portal>
    );
  }
};
