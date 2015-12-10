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
            <Link to="/">
              <div className="ui-torrentList__main">
                <h3 className="ui-torrentList__title">{item.title}</h3>
                <div className="ui-torrentList__info">{item.publish_time}</div>
              </div>
              <div className="ui-torrentList__marker">{item.downloads}</div>
              <div className="ui-torrentList__action"></div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
};
