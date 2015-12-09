import React from "react";
import {connect} from "react-redux";

import TorrentList from "./torrent-list";

import actions from "../../actions";

@connect(state => ({
  torrent: {
    list: state.torrent.list
  }
}))
export default class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.torrent.loadList(1));
  }
  render() {
    return (
      <main className="ui-main">
        <h1 className="ui-logo">Bangumi.moe</h1>
        <TorrentList data={this.props.torrent.list} />
      </main>
    );
  }
};
