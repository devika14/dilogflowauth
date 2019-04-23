import React, { Component } from 'react';

import Header from './Header';
import LeftSideMenu from './LeftSideMenu';
import Footer from './Footer';
import AjaxService from './AjaxService';

class CreateProject extends Component {

    constructor() {
      super();
      this.AjaxService = new AjaxService();
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.state = {save: false};
    }

    handleFormSubmit(e){
        e.preventDefault();
      
        this.AjaxService.saveProject(this.state.projectname)
            .then(res => {
                this.setState({ save: true});
            })
            .catch(err => {
              alert(err);
            })
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
        return (
          <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
          <Header />
          <LeftSideMenu />
          <main className="main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item">
                <a href="#">Admin</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>              
            </ol>
            <div className="container-fluid" style={{height:"670px"}}>
            <div className="animated fadeIn">            
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <i className="nav-icon icon-plus"></i>Create Project</div>
                  <div className="card-body">
                    {this.state.save ? (
                      <div className="alert alert-success" role="alert">Successfully saved</div>
                    ) : (
                      ""
                    )}
                    <form className="form-horizontal" action="/create-project">                    
                      <div className="form-group">
                        <label className="col-form-label" for="prependedInput"></label>
                        <div className="controls">
                          <div className="input-prepend input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Enter Project Name Here</span>
                            </div>
                            <input className="form-control" id="project-name" name="projectname" size="16" type="text" onChange={this.handleChange}/>
                          </div>
                          <p className="help-block"></p>
                        </div>
                      </div>
                      <div className="form-actions">
                        <button className="btn btn-primary" onClick={this.handleFormSubmit}>Save changes</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
            </div>
            </main>
        <Footer />
      </div>
        );
    }
}

export default CreateProject;