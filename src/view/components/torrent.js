import React from "react";
import {connect} from "react-redux";

import TorrentInfo from "./torrent-info";

import actions from "../../actions";

@connect((state, props) => ({
  info: state.torrent.item.get(props.params.id)
}))
export default class Torrent extends React.Component {
  componentDidMount() {
    if(!(this.props.info || {}).data) {
      this.props.dispatch(actions.torrent.item.load({
        id: this.props.params.id
      }));
    }
  }
  render() {
    return (
      <main className="ui-main">
        <TorrentInfo data={this.props.info} />
      </main>
    );
  }
};
