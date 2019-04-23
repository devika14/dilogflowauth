import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CreateProject from './components/CreateProject';
import Dashboard from './components/Dashboard';
import ProjectsList from './components/ProjectsList';

// Our Components
import Login from './components/Login';
import App from './App';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Dashboard} />    
            <Route exact path="/create-project" component={CreateProject} />    
            <Route exact path="/projects-list" component={ProjectsList} />    
            <Route exact path="/login" component={Login} />    
        </div>
    </Router>     
    , document.getElementById('root')
);

registerServiceWorker();
