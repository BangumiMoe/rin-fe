import React from "react";
import autobind from "autobind-decorator";

import TransitionGroup from "./transition-group";
import Button from "./button";
import LanguageDialog from "./language-dialog";
import Search from "./search";

@autobind
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLanguageDialog: false,
      showSearch: false
    };
  }
  openLanguageDialog() {
    this.setState({
      showLanguageDialog: true
    });
  }
  closeLanguageDialog() {
    this.setState({
      showLanguageDialog: false
    });
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
          <div className="ui-actionBar">
            <Button iconOnly={true} onClick={this.openLanguageDialog}>
              <div className="ui-icon">language</div>
            </Button>
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
        <LanguageDialog show={this.state.showLanguageDialog} onClose={this.closeLanguageDialog} />
        <Search show={this.state.showSearch} />
      </div>
    );
  }
};
