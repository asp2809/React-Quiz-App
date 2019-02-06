import React, { Component } from "react";

import globalStyles from "../../assets/bootstrap.min.module.css";
import cx from "classnames";
import styles from "./Mainpage.module.css";
import { Link } from "react-router-dom";

class Mainpage extends Component {
  render() {
    return (
      <div className={cx(styles.Mainpage)}>
        <div className={cx(globalStyles["container"])}>
          <div className={cx(globalStyles["row"])}>
            <div className={cx(globalStyles["col-sm-12"])}>
              <h3 className={cx(styles.heading)}>Quiz Game</h3>
            </div>
            <div
              className={cx(
                globalStyles["col-sm-12"],
                styles.para,
                ["animated"],
                ["bounceIn"]
              )}
            >
              Want to test your General Knowledge?
            </div>
            <div className={cx(globalStyles["col-sm-12"])}>
              <Link
                to="/quiz"
                className={cx(
                  globalStyles["btn"],
                  styles.getStarted,
                  ["animated"],
                  ["bounceIn"]
                )}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mainpage;
