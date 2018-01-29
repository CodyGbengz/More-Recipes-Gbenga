import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.signInUser(this.state);
  }

  onBlur(event) {
    if (isEmpty(event.target.value)) {
      Materialize.toast(`${event.target.name} Field cannot be empty`, 2000);
    }
  }


  render() {
    return (
      <form onSubmit={ this.onSubmit } className="col s12">
        <div className="row modal-form-row">
          <div className="input-field col s12 ">
            <input
            id="logemail"
            value={ this.state.email }
            onBlur={ this.onBlur }
            onChange= { this.onChange }
            name="email"
            type="email"
            />
            <label htmlFor="logemail">Email Address</label>
          </div>
          <div className="input-field col s12 ">
            <input
            id="logpassword"
            value={ this.state.password }
            onBlur={ this.onBlur }
            onChange= { this.onChange }
            name="password"
            type="password"
            />
            <label htmlFor="logpassword">Password</label>
          </div>
          <div className="input-field col s12">
            <a href="" className="black-text">Forgot Password?</a>
            <button
            type="button"
            className="modal-action modal-close waves-effect waves-red btn red white-text right">
            Cancel</button>
            <button
            data-target="login"
            className="btn waves-effect modal-close modal-action waves-light right white red-text"
            type="submit"
            name="action">
            Log in</button>
          </div>
        </div>
      </form>
    );
  }
}

Login.PropTypes = {
  login: PropTypes.func.isRequired
};


export default Login;
