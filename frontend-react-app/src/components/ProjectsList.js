import React, {Component} from 'react';

import Header from './Header';
import LeftSideMenu from './LeftSideMenu';
import Footer from './Footer';
import AjaxService from './AjaxService';

class ProjectsList extends Component {

    constructor() {
      super();
      this.AjaxService = new AjaxService();
      this.state = {
        items: []
      };
    }

    componentDidMount() {
      this.AjaxService.projectsList()
        .then(res => {
            this.setState({
              items: res.result
            });
        })
        .catch(err => {
          alert(err)
        })
    }

    render() {
      var { items } = this.state;
      var projectsList = items.map(function(item) {
                            return <a className="list-group-item list-group-item-action" href={item._id}>{item.name}</a>
                          })

        return(
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
                    <i className="fa fa-align-justify"></i> Projects List
                    <div className="card-header-actions">
                      <a className="card-header-action" href="#" target="_blank">
                        <small className="text-muted"></small>
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="list-group">
                      { projectsList }
                    </div>
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

export default ProjectsList;