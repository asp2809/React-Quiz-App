import React, { Component } from "react";
import "./App.css";
import Mainpage from "./container/Mainpage/Mainpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartPage from "./container/StartPage/StartPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Mainpage} />
            <Route path="/quiz" component={StartPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
