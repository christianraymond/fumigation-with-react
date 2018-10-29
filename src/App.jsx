import React, { Component } from 'react';
import './App.css';
import convert from './converter'
// import log from './logger'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/CustomerNavbar'
import FontAwesome from './components/Font-Awesome';
import './components/FontAwesome-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee);


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
