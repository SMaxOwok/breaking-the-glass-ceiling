import React, { PureComponent } from "react"
import * as propTypes from "prop-types";
import classnames from "classnames";

import { FaBars, FaTimes } from "react-icons/fa";

export default class MobileMenu extends PureComponent {
  static propTypes = {
    children: propTypes.node.isRequired
  };

  state = {
    visible: false
  };

  showMenu = () => {
    this.setState({ visible: true }, () => document.body.style.overflow = "hidden");
  };

  hideMenu = () => {
    this.setState({ visible: false }, () => document.body.style.overflow = "auto");
  };

  get menuClasses() {
    return classnames("mobile-menu", {
      "mobile-menu--open": this.state.visible
    });
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  render() {
    return (
      <div className={this.menuClasses}>
        <i className="mobile-menu__icon" onClick={this.showMenu}>
          <FaBars />
        </i>

        <div className="mobile-menu__body">
          <i className="mobile-menu__icon" onClick={this.hideMenu}>
            <FaTimes />
          </i>

          {this.props.children}
        </div>
      </div>
    );
  }
}
