import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={
                {
                  pathname: "/about",
                  state: {
                    from: "root"
                  }
                }
              }>About</Link>
            </li>
            <li>
              <Link to="/user/john/doe">User</Link>
            </li>
          </ul>
        <div>
          <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/about" component={About} ></Route>
            <Route exact path="/user/:firstname/:lastname" component={User} ></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
