import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [ e.target.name ]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.signInUser(this.state)
        }

    render() {
        return (
            <form onSubmit={ this.onSubmit } className="col s12">
                <div className="row modal-form-row">
                    <div className="input-field col s12 ">
                        <input id="logemail" value={ this.state.email } onChange= { this.onChange } name="email" type="email"/>
                        <label htmlFor="logemail">Email Address</label>
                    </div>
                    <div className="input-field col s12 ">
                        <input id="logpassword" value={ this.state.password } onChange= { this.onChange } name="password" type="password" />
                        <label htmlFor="logpassword">Password</label>
                    </div>
                    <div className="input-field col s12">
                        <a href="" className="black-text">Forgot Password?</a>
                        <button className="modal-action modal-close waves-effect waves-red btn red white-text right">Cancel</button>
                        <button data-target="login" className="btn waves-effect  modal-trigger modal-close modal-action waves-light right white red-text" onClick={this.onSubmit} type="submit" name="action">Log in</button>
                    </div>
                </div>
            </form>
        )
    }
}

Login.PropTypes = {
    login: PropTypes.func.isRequired
}



export default Login;