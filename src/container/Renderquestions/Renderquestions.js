import React, { Component } from "react";

import globalStyles from "../../assets/bootstrap.min.module.css";
import cx from "classnames";
import styles from "./Renderquestions.module.css";
import ReactCountdownClock from "react-countdown-clock";

class Renderquestions extends Component {
  state = {
    questions: this.props.questions,
    ans: [0, 0, 0, 0, 0],
    quizOver: false,
    score: 0,
    remarks: ""
  };
  onSubmit = () => {
    console.log("OnSubmit called");
    let i = 0;
    let s = 0;
    while (i < 5) {
      //   console.log(this.state.questions[i].answer);
      //   console.log(this.state.ans[i]);
      if (this.state.questions[i].answer == this.state.ans[i]) {
        s++;
      }
      i++;
    }
    if (s === 5) {
      this.setState({ remarks: "Very Strong" });
    }
    if (s === 4) {
      this.setState({ remarks: "Strong" });
    }
    if (s === 3) {
      this.setState({ remarks: "Good" });
    }
    if (s === 2) {
      this.setState({ remarks: "Bad" });
    }
    if (s === 1) {
      this.setState({ remarks: "Poor" });
    }
    if (s === 0) {
      this.setState({ remarks: "Hey! What Happened" });
    }
    this.setState({ quizOver: true, score: s });
  };
  componentDidMount() {
    setTimeout(() => {
      this.onSubmit();
    }, 60000);
  }
  render() {
    if (this.state.quizOver) {
      return (
        <div className={cx(styles.results)}>
          <div className={cx(globalStyles["container"])}>
            <div
              className={cx(globalStyles["row"], ["animated"], ["fadeIn"])}
              style={{ transform: "translateY(150%)" }}
            >
              <div className={cx(globalStyles["col-sm-12"], styles.remarks)}>
                {this.state.remarks}!
              </div>
              <div className={cx(globalStyles["col-sm-12"], styles.score)}>
                You have scored {this.state.score} out of 5
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={cx(styles.Renderquestions)}>
        <div className={cx(globalStyles["container"], styles.Questions)}>
          <div className={cx(globalStyles["row"], styles.heading)}>
            Questions
          </div>
          <div className={cx(globalStyles["row"])}>
            <div className={cx(globalStyles["col-sm-8"])}>
              <div className={cx(globalStyles["row"])}>
                {this.state.questions.map(question => (
                  <div className={cx(globalStyles["col-sm-12"])}>
                    <div className={cx(globalStyles["row"])}>
                      <div
                        className={cx(globalStyles["col-sm-12"])}
                        style={{ fontWeight: "500", padding: "10px" }}
                      >
                        Q. {question.question}
                      </div>
                      <form className={cx(globalStyles["col-sm-12"])}>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              onClick={() => (this.state.ans[question.id] = 1)}
                            />
                            &nbsp; {question.option1}
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              onClick={() => (this.state.ans[question.id] = 2)}
                            />
                            &nbsp; {question.option2}
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              onClick={() => (this.state.ans[question.id] = 3)}
                            />
                            &nbsp; {question.option3}
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              onClick={() => (this.state.ans[question.id] = 4)}
                            />
                            &nbsp; {question.option4}
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
              <div className={cx(globalStyles["row"])}>
                <div
                  className={cx(globalStyles["col-sm-2"])}
                  style={{ padding: "20px 10px" }}
                >
                  <button
                    className={cx(globalStyles["btn"], styles.submit)}
                    onClick={() => this.onSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className={cx(globalStyles["col-sm-4"])}>
              <div
                className={cx(
                  globalStyles["row"],
                  ["animated"],
                  ["pulse"],
                  ["infinite"]
                )}
              >
                <div
                  className={cx(globalStyles["col-sm-12"])}
                  style={{
                    padding: "20px",
                    fontSize: "30px",
                    fontWeight: "500",
                    fontFamily: "Pacifico"
                  }}
                >
                  &nbsp; &nbsp;Time Left:
                </div>
                <div className={cx(globalStyles["col-sm-12"])}>
                  <ReactCountdownClock
                    seconds={60}
                    color="#4d0099"
                    alpha={0.9}
                    size={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Renderquestions;
