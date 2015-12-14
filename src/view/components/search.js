import React from "react";

import TransitionGroup from "./transition-group";

export default class Search extends React.Component {
  render() {
    return (
      <TransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {this.props.show ? (
          <article key="layer" className="ui-layer ui-layer--fromFloatingButton">
          </article>
        ) : null}
      </TransitionGroup>
    );
  }
};
