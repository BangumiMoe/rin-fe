import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

import Loader from "./loader";
import Pagination from "./pagination";

import * as router from "../../router";

@Loader.wrap(["list"])
@connect(state => ({
  language: state.language
}))
export default class TorrentList extends React.Component {
  render() {
    const list = this.props.list;
    return (
      <div>
        <ul className="ui-torrentList">
          {list.data.list.map(item => (
            <li key={item._id}>
              <Link to={router.build("torrent", {id: item._id})}>
                <div className="ui-torrentList__main">
                  <h3 className="ui-torrentList__title">{item.title}</h3>
                  <div className="ui-torrentList__info">{item.publish_time}</div>
                </div>
                <div className="ui-torrentList__category">{item.category_tag.locale[this.props.language]}</div>
                <div className="ui-torrentList__action">
                  <button type="button" className="ui-button ui-button--iconOnly">
                    <span className="ui-icon">file_download</span>
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Pagination {...list.data.page} generateURL={this.props.generatePageURL} />
      </div>
    );
  }
};
