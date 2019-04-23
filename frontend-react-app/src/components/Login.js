import React, { Component } from 'react';
import AuthService from './AuthService';

class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount(){
        if(this.Auth.loggedIn()) 
            this.props.history.replace('/');
        
    }
    render() {
        return (
            <div className="app flex-row align-items-center">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                <div className="card-group">
                    <div className="card p-4">
                    <div className="card-body">
                        <form onSubmit={this.handleFormSubmit}>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="icon-user"></i>
                            </span>
                        </div>
                        <input className="form-control" name="email" type="text" placeholder="User name" 
                            onChange={this.handleChange}/>
                        </div>
                        <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="icon-lock"></i>
                            </span>
                        </div>
                        <input className="form-control" name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                        </div>
                        <div className="row">
                        <div className="col-6">
                            <input className="btn btn-primary px-4" type="submit" value="Submit"/>
                        </div>
                        <div className="col-6 text-right">
                            <button className="btn btn-link px-0" type="button">Forgot password?</button>
                        </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                    <div className="card-body text-center">
                        <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="btn btn-primary active mt-3" type="button">Register Now!</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        );
    }

    handleFormSubmit(e){
        e.preventDefault();
      
        this.Auth.login(this.state.email,this.state.password)
            .then(res =>{
               this.props.history.replace('/');
            })
            .catch(err =>{
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
}

export default Login;