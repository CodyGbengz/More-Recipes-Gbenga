import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { fetchUserDetails } from '../actions/usersActions';
import UserProfile from '../components/UserProfile';

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { userDetails: this.props.userDetails };
  }

  componentDidMount() {
    this.props.fetchUserDetails();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userDetails !== nextProps) {
      this.setState({ userDetails: nextProps.userDetails });
    }
  }

  render() {
    const { userDetails } = this.state;

    if (isEmpty(userDetails)) {
      return <div>
        <span>here </span>
      </div>;
    }
    return (
      <div className='container'>
        <div className='row'>
          <h5> My Profile</h5>
          <UserProfile userDetails={ userDetails } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetails: state.userDetailsReducer
});

export default connect(mapStateToProps, { fetchUserDetails })(UserProfileContainer);
