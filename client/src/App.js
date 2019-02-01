import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/Pages/Savedbooks"
import Searchresults from "./components/Pages/Searchresults"
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>

            <Route exact path="/" component={Searchresults} />
            <Route exact path="/books" component={Books} />


          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
