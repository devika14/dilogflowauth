import React, { Component } from 'react';

import AuthService from './AuthService';
const Auth = new AuthService();

class Header extends Component {

    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login');
    }

    render() {
        return(
            <header className="app-header navbar">
              <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img className="navbar-brand-full" src={process.env.PUBLIC_URL + 'img/brand/logo.svg'} width="89" height="25" alt="CoreUI Logo"/>
                <img className="navbar-brand-minimized" src={process.env.PUBLIC_URL + 'img/brand/sygnet.svg'} width="30" height="30" alt="CoreUI Logo"/>
              </a>
              <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item d-md-down-none">
                  <a className="nav-link" href="#">
                    <i className="icon-bell"></i>
                    <span className="badge badge-pill badge-danger">0</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <img className="img-avatar" src={process.env.PUBLIC_URL + 'img/avatars/6.jpg'} alt="admin@bootstrapmaster.com"/>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-header text-center">
                      <strong>Account</strong>
                    </div>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-shield"></i> Lock Account</a>
                    <a className="dropdown-item" href="#" onClick={this.handleLogout.bind(this)}>
                      <i className="fa fa-lock"></i> Logout</a>
                  </div>
                </li>
              </ul>
            </header>
        );
    }
}

export default Header;