import React from "react";
import autobind from "autobind-decorator";

import Portal from "./portal";
import TransitionGroup from "./transition-group";

@autobind
export default class Dialog extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool.isRequired,
    modal: React.PropTypes.bool,
    title: React.PropTypes.string,
    onClose: React.PropTypes.func
  };
  static defaultProps = {
    modal: false
  };
  tryClosingDialog(event) {
    if(!this.props.modal) {
      if(event.target === this.refs.overlay) {
        if(this.props.onClose) {
          this.props.onClose();
        }
      }
    }
  }
  render() {
    return (
      <Portal>
        <TransitionGroup>
          {this.props.show ? (
            <div className="ui-overlay" ref="overlay" onClick={this.tryClosingDialog}>
              <article className="ui-dialog" key="dialog">
                {this.props.title ? (
                  <header className="ui-dialog__header">
                    <h1 className="ui-dialog__title">
                      {this.props.title}
                    </h1>
                  </header>
                ) : null}
                <div className="ui-dialog__content">
                  {this.props.children}
                </div>
              </article>
            </div>
          ) : null}
        </TransitionGroup>
      </Portal>
    );
  }
};
