import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/Home';
import Main from './components/Main';
import RecipesIndex from './pages/RecipesIndex';
import RecipeDetailsShow from './pages/RecipeDetailsShow';
import Favorites from './pages/Favorites';
import UsersRecipesPage from './pages/UsersRecipesPage';

import requireAuth from './utils/requireAuth';

export default (

  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="recipes" component={RecipesIndex} />
    <Route path="recipes/:id" component={RecipeDetailsShow}/>
    <Route path="favorites" component={requireAuth(Favorites)} />
    <Route path="myrecipes" component={requireAuth(UsersRecipesPage)} />
  </Route>
);
