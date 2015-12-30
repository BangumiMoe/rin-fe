import React from "react";

import Loader from "./loader";

@Loader.wrap(["data"])
export default class TorrentInfo extends React.Component {
  render() {
    const info = this.props.data;
    return (
      <div className="ui-torrentInfo"></div>
    );
  }
};
