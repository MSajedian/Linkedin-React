import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fetchUser from './services/fetchUser';
import getUsers from './services/getUsers';
import Profile from './components/Profile';
import Feed from './components/Feed';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from './components/MainNavbar';
import { Component } from 'react';

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjAyMjczNzAsImV4cCI6MTYyMTQzNjk3MH0.p6GxtmtZE5QZ0rhZCB4Kxt1z3GlHOTEnByED_yMOiNU"

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
            <Route exact path="/" >
              <Feed user={this.state.user} token={token} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}