import React from "react";

import Layer from "./layer";

export default class Search extends React.Component {
  render() {
    return (
      <Layer show={this.props.show}>
        <article className="ui-layer ui-layer--fromFloatingButton">
        </article>
      </Layer>
    );
  }
};
