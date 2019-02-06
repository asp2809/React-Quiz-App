import React, { Component } from "react";

import globalStyles from "../../assets/bootstrap.min.module.css";
import cx from "classnames";
import styles from "./TopNav.module.css";
import { Link, Switch, Route } from "react-router-dom";
import StartPage from "../StartPage/StartPage";

class TopNav extends Component {
  render() {
    return (
      <div className={cx(globalStyles["container"])}>
        <div className={cx(styles.Nav)}>
          <Link to={{ pathname: "/" }}>Easy</Link>
          <Link to={{ pathname: "/quiz" }}>Medium</Link>
          <Link to={{ pathname: "/quiz" }}>Hard</Link>
        </div>
        <Switch>
          <Route path="/" component={StartPage} />
        </Switch>
      </div>
    );
  }
}

export default TopNav;
