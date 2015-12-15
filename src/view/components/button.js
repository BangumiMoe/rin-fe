import React from "react";
import classNames from "classnames";

export default class Button extends React.Component {
  static propTypes = {
    component: React.PropTypes.any,
    type: React.PropTypes.string,
    href: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    floating: React.PropTypes.bool,
    iconOnly: React.PropTypes.bool
  };
  static defaultProps = {
    component: "button",
    type: "button",
    href: "javascript:void(0);",
    disabled: false,
    primary: false,
    floating: false,
    iconOnly: false
  };
  render() {
    const {
      component,
      type,
      href,
      disabled,
      primary,
      floating,
      iconOnly,
      className,
      children,
      ...restProps
    } = this.props;
    const props = {
      className: classNames("ui-button", {
        "ui-button--primary": primary,
        "ui-button--floating": floating,
        "ui-button--iconOnly": iconOnly
      }, {
        "ui--disabled": disabled
      }, {
        "waves-effect": !disabled,
        "waves-light": !disabled && primary
      }, className),
      ...restProps
    };
    if(component === "button") {
      props.type = type;
      props.disabled = disabled;
    } else if(component === "a") {
      props.href = href;
    }
    return (
      <this.props.component {...props}>
        {children}
      </this.props.component>
    );
  }
};
