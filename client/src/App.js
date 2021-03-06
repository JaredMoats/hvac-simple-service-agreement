import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";
import CreateCustomer from "./components/Customer/CreateCustomer";
import AllCustomers from "./components/Customer/AllCustomers";
import Customer from "./components/Customer/Customer";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeUser: null,
      tokenStored: false
    }
  }

  storeToken(token) {
    localStorage.setItem("token", token);
    this.setState({ tokenStored: true });
    console.log("Token stored");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setActiveUser(userObject) {
    this.setState({ activeUser: userObject });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route 
            exact path="/" 
            render={ props =>  <Register storeToken={ token => this.storeToken(token) } setActiveUser={ userObject => this.setActiveUser(userObject) } getToken={ () => this.getToken() } />} 
          
          />
          <Switch>
            <Route 
              exact path="/login" 
              render={ props => <Login storeToken={ token => this.storeToken(token) } setActiveUser={ userObject => this.setActiveUser(userObject) } getToken={ () => this.getToken() } /> } 
            />
            <Route 
              exact path="/dashboard"
              render={ props => <Dashboard activeUser={ this.state.activeUser } ifActiveUser={ activeUser => this.ifActiveUser(activeUser) } /> }
            />
            <Route
              exact path="/create-customer"
              render={ props => <CreateCustomer activeUser={ this.state.activeUser } getToken={ () => this.getToken() } /> }
            />
            <Route
              exact path="/all-customers"
              render={ props => <AllCustomers activeUser={ this.state.activeUser } getToken={ () => this.getToken() } /> }
            />
            <Route 
              path="/customer/:id"
              render={ props => <Customer { ...props } activeUser={ this.state.activeUser } getToken={ () => this.getToken() } /> }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
