import React, { Component } from 'react';
import AuthService from './AuthService';


class AjaxService extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            data: '',
            domain: 'http://localhost:4000/api'
        };
        this.Auth = new AuthService();
    }

    saveProject(projectname) {
        return this.fetch(this.state.domain+'/create-project', {
            method: 'POST',
            body: JSON.stringify({
                projectname
            })
        }).then(res => {
            return Promise.resolve(res);
        })
    }

    projectsList() {
        return this.fetch(this.state.domain + '/projects-list', {
            method: 'GET',            
        }).then(res => {
            return Promise.resolve(res);
        })
    }

    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.Auth.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.Auth.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

}

export default AjaxService;