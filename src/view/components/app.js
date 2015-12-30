import React from "react";
import autobind from "autobind-decorator";

import Button from "./button";
import TransitionGroup from "./transition-group";
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
        <div className="ui-transitionGroup">
          <TransitionGroup>
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
          </TransitionGroup>
        </div>
        <div className="ui-floatingButton">
          <Button primary={true} floating={true} onClick={this.showSearch}>
            <span className="ui-icon">search</span>
          </Button>
        </div>
        <Search show={this.state.showSearch} />
      </div>
    );
  }
};
