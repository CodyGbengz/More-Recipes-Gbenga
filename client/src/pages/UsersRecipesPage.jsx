import React, { Component } from 'react';
import UsersRecipesGrid from '../containers/UsersRecipesGridContainer';
import Header from '../components/Header';

class UsersRecipes extends Component {
  render() {
    return (
      <div>
        <Header/>
        <UsersRecipesGrid />
      </div>
    );
  }
}

export default UsersRecipes;
