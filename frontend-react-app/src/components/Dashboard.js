import React, { Component } from 'react';
import Header from './Header';
import LeftSideMenu from './LeftSideMenu';
import Footer from './Footer';
import withAuth from './withAuth';

class Dashboard extends Component {

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
            <div className="container-fluid">
              <div className="animated fadeIn">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-primary">
                      <div className="card-body pb-0">
                        <div className="btn-group float-right">
                          <button className="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="icon-settings"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                        <div className="text-value">9.823</div>
                        <div>Members online</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-info">
                      <div className="card-body pb-0">
                        <button className="btn btn-transparent p-0 float-right" type="button">
                          <i className="icon-location-pin"></i>
                        </button>
                        <div className="text-value">9.823</div>
                        <div>Members online</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-warning">
                      <div className="card-body pb-0">
                        <div className="btn-group float-right">
                          <button className="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="icon-settings"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                        <div className="text-value">9.823</div>
                        <div>Members online</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-danger">
                      <div className="card-body pb-0">
                        <div className="btn-group float-right">
                          <button className="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="icon-settings"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                        <div className="text-value">9.823</div>
                        <div>Members online</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-5">
                        <h4 className="card-title mb-0">Traffic</h4>
                        <div className="small text-muted">November 2017</div>
                      </div>
                      <div className="col-sm-7 d-none d-md-block">
                        <button className="btn btn-primary float-right" type="button">
                          <i className="icon-cloud-download"></i>
                        </button>
                        <div className="btn-group btn-group-toggle float-right mr-3" data-toggle="buttons">
                          <label className="btn btn-outline-secondary">
                            <input id="option1" type="radio" name="options" autoComplete="off"/> Day
                          </label>
                          <label className="btn btn-outline-secondary active">
                            <input id="option2" type="radio" name="options" autoComplete="off" checked=""/> Month
                          </label>
                          <label className="btn btn-outline-secondary">
                            <input id="option3" type="radio" name="options" autoComplete="off"/> Year
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="chart-wrapper" style={{height:"300px", marginTop:"40px"}}>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row text-center">
                      <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">Visits</div>
                        <strong>29.703 Users (40%)</strong>
                        <div className="progress progress-xs mt-2">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">Unique</div>
                        <strong>24.093 Users (20%)</strong>
                        <div className="progress progress-xs mt-2">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">Pageviews</div>
                        <strong>78.706 Views (60%)</strong>
                        <div className="progress progress-xs mt-2">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">New Users</div>
                        <strong>22.123 Users (80%)</strong>
                        <div className="progress progress-xs mt-2">
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">Bounce Rate</div>
                        <strong>40.15%</strong>
                        <div className="progress progress-xs mt-2">
                          <div className="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="brand-card">
                      <div className="brand-card-header bg-facebook">
                        <i className="fa fa-facebook"></i>
                        <div className="chart-wrapper">
                          <canvas id="social-box-chart-1" height="90"></canvas>
                        </div>
                      </div>
                      <div className="brand-card-body">
                        <div>
                          <div className="text-value">89k</div>
                          <div className="text-uppercase text-muted small">friends</div>
                        </div>
                        <div>
                          <div className="text-value">459</div>
                          <div className="text-uppercase text-muted small">feeds</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="brand-card">
                      <div className="brand-card-header bg-twitter">
                        <i className="fa fa-twitter"></i>
                        <div className="chart-wrapper">
                          <canvas id="social-box-chart-2" height="90"></canvas>
                        </div>
                      </div>
                      <div className="brand-card-body">
                        <div>
                          <div className="text-value">973k</div>
                          <div className="text-uppercase text-muted small">followers</div>
                        </div>
                        <div>
                          <div className="text-value">1.792</div>
                          <div className="text-uppercase text-muted small">tweets</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="brand-card">
                      <div className="brand-card-header bg-linkedin">
                        <i className="fa fa-linkedin"></i>
                        <div className="chart-wrapper">
                          <canvas id="social-box-chart-3" height="90"></canvas>
                        </div>
                      </div>
                      <div className="brand-card-body">
                        <div>
                          <div className="text-value">500+</div>
                          <div className="text-uppercase text-muted small">contacts</div>
                        </div>
                        <div>
                          <div className="text-value">292</div>
                          <div className="text-uppercase text-muted small">feeds</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="brand-card">
                      <div className="brand-card-header bg-google-plus">
                        <i className="fa fa-google-plus"></i>
                        <div className="chart-wrapper">
                          <canvas id="social-box-chart-4" height="90"></canvas>
                        </div>
                      </div>
                      <div className="brand-card-body">
                        <div>
                          <div className="text-value">894</div>
                          <div className="text-uppercase text-muted small">followers</div>
                        </div>
                        <div>
                          <div className="text-value">92</div>
                          <div className="text-uppercase text-muted small">circles</div>
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

export default withAuth(Dashboard);