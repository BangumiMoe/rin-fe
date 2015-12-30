import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

import {FormattedRelative} from "react-intl";

import Button from "./button";
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
              <Link to={router.build("torrent", {id: item._id})} className="waves-effect">
                <div className="ui-torrentList__main">
                  <h3 className="ui-torrentList__title">{item.title}</h3>
                  <div className="ui-torrentList__info">
                    <div className="ui-torrentList__info__time">
                      <FormattedRelative value={new Date(item.publish_time)} />
                    </div>
                    <div className="ui-torrentList__info__user">{item.uploader.username}</div>
                    {item.team ? (
                      <div className="ui-torrentList__info__team">{item.team.name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="ui-torrentList__category">{item.category_tag.locale[this.props.language]}</div>
                <div className="ui-torrentList__action">
                  <Button iconOnly={true}>
                    <span className="ui-icon">file_download</span>
                  </Button>
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
