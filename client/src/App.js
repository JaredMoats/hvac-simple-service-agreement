import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  constructor() {
    super();

    this.state = {
      token: ""
    }
  }

  setToken(token) {
    this.setState({ token });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route 
            exact path="/" 
            render={ props =>  <Register setToken={ token => this.setToken(token) } />} 
          
          />
          <Switch>
            <Route 
              exact path="/login" 
              render={ props => <Login setToken={ token => this.setToken(token) } /> } 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
