import React from "react";
import {Link} from "react-router";
import classNames from "classnames";

import Button from "./button";

export default class Pagination extends React.Component {
  static propTypes = {
    current: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired,
    length: React.PropTypes.number,
    generateURL: React.PropTypes.func.isRequired
  };
  static defaultProps = {
    length: 7
  };
  isValidPage(page) {
    return page >= 1 && page <= this.props.total;
  }
  generateURL(page) {
    return this.props.generateURL(page);
  }
  generateItem(page, content) {
    if(this.isValidPage(page)) {
      return (
        <Button component={Link} to={this.generateURL(page)}>
          {content}
        </Button>
      );
    } else {
      return (
        <Button component="a" disabled={true}>
          {content}
        </Button>
      );
    }
  }
  render() {
    const current = this.props.current;
    const total = this.props.total;
    const length = this.props.length;
    const offset = Math.floor((length - 1) / 2);
    const leftInitial = Math.max(1, current - offset);
    const right = Math.min(total, leftInitial + length - 1);
    const left = Math.max(1, right - length + 1);
    const items = [];
    items.push(
      <li key="previous" className="ui-pagination__previous">
        {this.generateItem(current - 1, (
          <span className="ui-icon">chevron_left</span>
        ))}
      </li>
    );
    for(let i = left; i <= current - 1; i++) {
      items.push(
        <li key={i}>
          {this.generateItem(i, i)}
        </li>
      );
    }
    items.push(
      <li key={current} className="ui--active">
        {this.generateItem(current, current)}
      </li>
    );
    for(let i = current + 1; i <= right; i++) {
      items.push(
        <li key={i}>
          {this.generateItem(i, i)}
        </li>
      );
    }
    items.push(
      <li key="next" className="ui-pagination__next">
        {this.generateItem(current + 1, (
          <span className="ui-icon">chevron_right</span>
        ))}
      </li>
    );
    return (
      <ul className="ui-pagination">
        {items}
      </ul>
    );
  }
};
