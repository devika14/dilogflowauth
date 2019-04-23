import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LeftSideMenu extends Component {
    render() {
        return (
            <div className="app-body">
                <div className="sidebar">
                  <nav className="sidebar-nav">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          <i className="nav-icon icon-speedometer"></i> Dashboard
                          <span className="badge badge-primary">CAMS</span>
                        </a>
                      </li>
                      <li className="nav-title">Project</li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/create-project">
                          <i className="nav-icon icon-plus"></i> Create project
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/projects-list">
                          <i className="nav-icon icon-list"></i> View projects list
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          <i className="nav-icon fa fa-search"></i> Search project</a>
                      </li>                
                      <li className="nav-title">Project Executions</li>                
                      <li className="nav-item"></li>
                        <li className="nav-item">
                          <a className="nav-link" href="">
                            <i className="nav-icon fa fa-play"></i> Execute project</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="">
                            <i className="nav-icon fa fa-expand"></i> View results</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="">
                            <i className="nav-icon fa fa-pause"></i> Execution status</a>
                        </li>
                      </ul>
                      </nav>
                    </div>
                </div>
        );
    }
}

export default LeftSideMenu;