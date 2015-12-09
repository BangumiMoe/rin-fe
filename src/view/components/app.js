import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="ui-app">
        <header className="ui-navBar">
          <div className="ui-userBar">
            <div className="ui-userBar__avatar"></div>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
};
