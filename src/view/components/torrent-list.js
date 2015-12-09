import React from "react";
import {Link} from "react-router";

import Loader from "./loader";

@Loader.wrap
export default class TorrentList extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <ul className="ui-torrentList">
        {data.data.map(item => (
          <li key={item._id}>
            <Link to="/">{item.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
};
