import React from "react";

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
        if(loaded) {
          return (
            <Component {...this.props} />
          );
        } else {
          return (
            <Loader />
          );
        }
      }
    };
  };
};
