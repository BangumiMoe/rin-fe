import React from "react";

import TransitionGroup from "./transition-group";

export default class Loader extends React.Component {
  render() {
    return (
      <div className="ui-loader">
        <div className="ui-loader__dot"></div>
        <div className="ui-loader__dot"></div>
        <div className="ui-loader__dot"></div>
      </div>
    );
  }
};

Loader.wrap = function(list) {
  return function(Component) {
    return class LoaderWrapper extends React.Component {
      render() {
        const loaded = list.map(name => (
          this.props[name].data
        )).reduce((left, right) => (
          left && right
        ));
        return (
          <div className="ui-transitionGroup">
            <TransitionGroup transitionEnterTimeout={300} transitionLeaveTimeout={300}>
              {loaded ? (
                <Component {...this.props} />
              ) : (
                <Loader key="loader" />
              )}
            </TransitionGroup>
          </div>
        );
      }
    };
  };
};
