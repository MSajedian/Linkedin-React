import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from './components/MainNavbar';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <Switch>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
