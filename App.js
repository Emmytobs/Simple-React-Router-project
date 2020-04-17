import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import "./style.css";

const Home = () => {
  return  (
    <h2>Home Page</h2>
  )
}

function App() {
  return (
    <>
      
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App;