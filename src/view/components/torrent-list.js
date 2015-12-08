import React from "react";

import Loader from "./loader";

@Loader.wrap
export default class TorrentList extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <ul>
        {data.data.map(item => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}
