import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import logo from './logo.svg';
import './App.css';

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
      <div className="container">
        <Register 
          setToken={ token => this.setToken(token) }
        />
      </div>
    );
  }
}

export default App;
