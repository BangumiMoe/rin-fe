import React from "react";

export default class Loader extends React.Component {
  render() {
    return (
      <div className="ui-loader"></div>
    );
  }
}

Loader.wrap = function(Component) {
  return class LoaderWrapper extends React.Component {
    render() {
      const data = this.props.data;
      if(data.data) {
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
