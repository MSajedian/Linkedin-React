import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fetchUser from './services/fetchUser';
import getUsers from './services/getUsers';
import Profile from './components/Profile';
import Feed from './components/Feed';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from './components/MainNavbar';
import { Component } from 'react';

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjE1ODE1MTMsImV4cCI6MTYyMjc5MTExM30.xX1bdh-kAI426pIAHwyGgERUwH-di9UXYWKK1-jFlvY"

export default class App extends Component {
  state = {
    user: {},
    listOfUsers: [],
  };
  componentDidMount = async () => {
    const getUser = await fetchUser(token);

    this.setState({ user: getUser });
    const getListOfUsers = await getUsers(token);
    this.setState({ listOfUsers: getListOfUsers });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <MainNavbar />
          <Switch>
            <Route exact path="/Linkedin-React/" >
              <Feed user={this.state.user} token={token} />
            </Route>
            <Route exact path="/Linkedin-React/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}