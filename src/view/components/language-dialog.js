import React from "react";
import {connect} from "react-redux";

import Button from "./button";
import Dialog from "./dialog";

import actions from "../../actions";
import i18n from "../../i18n";

@connect()
export default class LanguageDialog extends React.Component {
  render() {
    return (
      <Dialog title="Language" {...this.props}>
        {Object.entries(i18n).map(([language, data]) => (
          <Button key={language} onClick={() => this.props.dispatch(actions.language.set(language))}>
            {data.name}
          </Button>
        ))}
      </Dialog>
    );
  }
};
