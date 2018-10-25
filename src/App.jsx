import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/CustomerNavbar'

class App extends Component {
  render() {
    return (
      
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </div>
    </Router>
    );
  }
}

export default App;
