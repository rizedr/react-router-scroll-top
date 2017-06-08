import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Lorem from 'react-lorem-component';
import ScrollToTopRoute from './ScrollToTopRoute';
import './App.css';

const Home = () => (
  <div className="App-page">
    <h2>Home</h2>
    <Lorem count={12} seed={12} />
  </div>
);

const About = () => (
  <div className="App-page">
    <h2>About</h2>
    <Lorem count={30} seed={4} />
  </div>
);

const AnotherPage = () => (
  <div className="App-page">
    <h2>This is just Another Page</h2>
    <Lorem count={12} seed={45} />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <ul className="App-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/another-page">Another Page</Link></li>
            </ul>
          </div>
          <Route exact path="/" component={Home} />
          <ScrollToTopRoute path="/about" component={About} />
          <ScrollToTopRoute path="/another-page" component={AnotherPage} />
        </div>
      </Router>
    );
  }
}

export default App;
