import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/Home';
import Main from './components/Main';
import RecipeGrid from './components/RecipeGrid'
import RecipeDetails from './components/RecipeDetails';

import requireAuth from './utils/requireAuth';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
            <Route path="recipes" component={requireAuth(RecipeGrid)} />
            <Route path="recipesDetails" component={requireAuth(RecipeDetails)}/>
    </Route>
)