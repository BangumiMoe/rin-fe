import React from "react";
import autobind from "autobind-decorator";

import Search from "./search";

@autobind
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false
    };
  }
  showSearch() {
    this.setState({
      showSearch: !this.state.showSearch
    });
  }
  render() {
    return (
      <div className="ui-app">
        <header className="ui-navBar">
          <div className="ui-userBar">
            <div className="ui-userBar__avatar"></div>
          </div>
        </header>
        {this.props.children}
        <div className="ui-floatingButton">
          <button type="button" className="ui-button ui-button--floating ui-button--primary" onClick={this.showSearch}>
            <span className="ui-icon">search</span>
          </button>
        </div>
        <Search show={this.state.showSearch} />
      </div>
    );
  }
};
