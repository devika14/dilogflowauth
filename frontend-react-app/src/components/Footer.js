import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <div>
                    <a href="https://coreui.io">CoreUI</a>
                    <span>&copy; 2018 creativeLabs.</span>
                </div>
                <div className="ml-auto">
                    <span>Powered by</span>
                    <a href="https://coreui.io">CoreUI</a>
                </div>
            </footer>
        );
    }
}

export default Footer;