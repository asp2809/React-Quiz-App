import React, { Component } from "react";

import globalStyles from "../../assets/bootstrap.min.module.css";
import cx from "classnames";
import styles from "./StartPage.module.css";
import application from "../../application.json";
import Renderquestions from "../Renderquestions/Renderquestions";

class StartPage extends Component {
  state = {
    levelSelect: true,
    easy: true,
    medium: false,
    hard: false
  };
  render() {
    if (!this.state.levelSelect) {
      if (this.state.easy) {
        return <Renderquestions questions={application.easy} />;
      } else if (this.state.medium) {
        return <Renderquestions questions={application.medium} />;
      } else if (this.state.hard) {
        return <Renderquestions questions={application.hard} />;
      }
    }
    return (
      <div className={cx(styles.StartPage)}>
        <div className={cx(globalStyles["container"])}>
          <div className={cx(globalStyles["row"], styles.options)}>
            <div className={cx(globalStyles["col-sm-12"], styles.heading)}>
              Select a Level:
            </div>
            <div className={cx(globalStyles["col-sm-12"])}>
              <button
                className={cx(globalStyles["btn"], styles.difficulty)}
                onClick={() =>
                  this.setState({
                    levelSelect: false,
                    easy: true,
                    medium: false,
                    hard: false
                  })
                }
              >
                Easy
              </button>
            </div>
            <div className={cx(globalStyles["col-sm-12"])}>
              <button
                className={cx(globalStyles["btn"], styles.difficulty)}
                onClick={() =>
                  this.setState({
                    levelSelect: false,
                    easy: false,
                    medium: true,
                    hard: false
                  })
                }
              >
                Medium
              </button>
            </div>
            <div className={cx(globalStyles["col-sm-12"])}>
              <button
                className={cx(globalStyles["btn"], styles.difficulty)}
                onClick={() =>
                  this.setState({
                    levelSelect: false,
                    easy: false,
                    medium: false,
                    hard: true
                  })
                }
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartPage;
