import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CreateProject from './components/CreateProject';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import LeftSideMenu from './components/LeftSideMenu';
import Footer from './components/Footer';
import withAuth from './components/withAuth';

class App extends Component {

  render() {
    return (  
      null
    );
  }
}

export default withAuth(App);
