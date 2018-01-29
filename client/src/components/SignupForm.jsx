import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      repassword: '',
      disable: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  onBlur = (event) =>  {
    if(isEmpty(event.target.value)) {
        Materialize.toast(`${event.target.name} Field cannot be empty`, 2000, 'red');
        this.setState({
          disable: true
        });
    }
    else {
      this.setState({
        disable: false
      });
    }
  }

  render() {
    return (
      <form onSubmit= { this.onSubmit } className="col s12 former">
        <div className="row modal-form-row">
          <div className="input-field col s12">
            <input
              id="username"value= { this.state.username }
              onChange= { this.onChange }
              onBlur={ this.onBlur }
              name="username" type="text"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s12 ">
            <input
              id="email"
              name="email"
              value= { this.state.email }
              onChange= { this.onChange }
              onBlur={ this.onBlur }
              type="email"
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="input-field col s12 ">
            <input
              id="password"
              name="password"
              value= { this.state.password }
              onChange= { this.onChange }
              onBlur={ this.onBlur }
              type="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field col s12 ">
            <input
              id="repassword"
              name="repassword"
              value= { this.state.repassword }
              onChange= { this.onChange }
              onBlur={ this.onBlur }
              type="password"
            />
            <label htmlFor="repassword">Confirm Password</label>
          </div>
          <div className="input-field col s12">
            <button
              type="button"
              className="modal-action modal-close waves-effect waves-green btn white-text red right">Cancel
            </button>
            <button
              className="btn waves-effect waves-light white red-text right" 
              type="submit"
              name="action"
              disabled={ this.state.disable }
              >Sign Up
            </button>
          </div>
        </div>
      </form>
    );
  }
}

Signup.PropTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default Signup;
