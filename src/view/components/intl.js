import React from "react";
import {connect} from "react-redux";

import {IntlProvider} from "react-intl";

import i18n from "../../i18n";

@connect(state => ({
  language: state.language
}))
export default class Intl extends React.Component {
  render() {
    const language = this.props.language;
    const data = i18n[language];
    return (
      <IntlProvider locale={language} formats={data.formats} messages={data.messages}>
        {this.props.children}
      </IntlProvider>
    );
  }
};
