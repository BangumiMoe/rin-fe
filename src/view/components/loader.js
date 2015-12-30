import React from "react";

import TransitionGroup from "./transition-group";

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}

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
      static displayName = `LoaderWrapper(${getDisplayName(Component)})`;
      getKey() {
        if(this.props.getKey) {
          return this.props.getKey();
        } else {
          return "content";
        }
      }
      isLoaded(props) {
        return list.map(name => (
          (props || this.props)[name].data
        )).reduce((left, right) => (
          left && right
        ));
      }
      render() {
        const loaded = this.isLoaded();
        return (
          <div className="ui-transitionGroup">
            <TransitionGroup>
              {loaded ? (
                <Component {...this.props} key={this.getKey()} />
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
