import React from "react";

export default class Portal extends React.Component {
  update() {
    React.render(React.Children.only(this.props.children), this.target);
  }
  componentDidMount() {
    let container = document.querySelector("#portal");
    if(!container) {
      container = document.createElement("div");
      container.id = "portal";
      document.body.appendChild(container);
    }
    const target = document.createElement("div");
    container.appendChild(target);
    this.target = target;
    this.update();
  }
  componentDidUpdate() {
    this.update();
  }
  componentWillUnmount() {
    React.unmountComponentAtNode(this.target);
    const container = document.querySelector("#portal");
    container.removeChild(this.target);
  }
  render() {
    return null;
  }
};
