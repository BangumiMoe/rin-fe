import React from "react";
import {connect} from "react-redux";
import autobind from "autobind-decorator";

import TorrentList from "./torrent-list";

import * as router from "../../router";
import actions from "../../actions";

@connect(state => ({
  torrent: {
    list: state.torrent.list
  }
}))
@autobind
export default class Home extends React.Component {
  generatePageURL(page) {
    return router.build("home", null, {
      page: page
    });
  }
  getPage(props) {
    return Number((props || this.props).location.query.page) || 1;
  }
  getKey() {
    return `content-${this.getPage()}`;
  }
  componentDidMount() {
    this.props.dispatch(actions.torrent.list.load({
      page: this.getPage()
    }));
  }
  componentWillReceiveProps(nextProps) {
    if(this.getPage() != this.getPage(nextProps)) {
      this.props.dispatch(actions.torrent.list.clear());
      this.props.dispatch(actions.torrent.list.load({
        page: this.getPage(nextProps)
      }));
    }
  }
  render() {
    return (
      <main className="ui-main">
        <h1 className="ui-logo">Bangumi.moe</h1>
        <TorrentList list={this.props.torrent.list} generatePageURL={this.generatePageURL} getKey={this.getKey} />
      </main>
    );
  }
};
