import React, { Component } from 'react';
import UserProfileContainer from '../containers/UserProfileContainer';
import Header from '../components/Header';
import UpdateProfileForm from '../components/UpdateProfileForm';

const UserProfilePage = (props) => (
  <div>
    <Header />
    <UserProfileContainer />
    <div id="editprofile" className="modal">
      <div className="modal-content">
        <h4>Update Profile</h4>
        <UpdateProfileForm />
      </div>
    </div>

  </div>
);

export default UserProfilePage;

