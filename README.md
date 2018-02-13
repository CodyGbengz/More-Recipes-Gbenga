# More-Recipes
[![Build Status](https://travis-ci.org/WillyWunderdog/More-Recipes-Gbenga.svg?branch=develop)](https://travis-ci.org/WillyWunderdog/More-Recipes-Gbenga)
[![Code Climate](https://codeclimate.com/github/WillyWunderdog/More-Recipes-Gbenga/badges/gpa.svg)](https://codeclimate.com/github/WillyWunderdog/More-Recipes-Gbenga)
[![Coverage Status](https://coveralls.io/repos/github/WillyWunderdog/More-Recipes-Gbenga/badge.svg?branch=develop)](https://coveralls.io/github/WillyWunderdog/More-Recipes-Gbenga?branch=develop)

### Introduction
__More-Recipes__ provides a platform for users to share the awesome and exciting recipe ideas they have *cooked-up* or learnt. If a user comes up with an interesting food recipe, he/she can post it on **More-Recipes** and get feedback in form of reviews and votes from other users who explore that recipe. Users can also keep a list of their favorite recipes on the application.

### Project Stack
This project is built on
  * Client-Side: React/Redux
  * Server-Side: NodeJS/Express
  * Database: Postgresql/Sequelize ORM

### Installation and Setup
To setup this project locally you need to have **NodeJs** and **Postgresql** installed.
  * Clone this repo
  * Navigate into the project directory
  * Run ``` npm install``` to install required dependencies
  * Create database instance for the application
  * Use ```.env.sample``` to setup environment variables
  * Run ``` sequelize db:migrate```
  * Run ``` npm start``` to get started

### Application Features
* Users can create accounts on the application
* Users can login to the application to access the full features
* Users can post recipes
* Users can edit and delete recipes they have posted
* Users can view top recipes 
* Users can view a recipe's details i.e ingredient, direction e.t.c upvote, downvote, and post reviews
* Users can either upvote or downvote recipes
* Users can post reviews on recipes
* Users can add recipes to their list of favorite recipes

### Basic Endpoints
- **<code>POST:</code>/api/v1/user/signup**
  - Creates user account
- **<code>POST:</code>/api/v1/user/signin**
  - Creates user login session
- **<code>POST:</code>/api/v1/recipe**
  - Creates recipe record
- **<code>PUT:</code>/api/v1/recipe/{recipeId}**
  - Updates an existing recipe record
- **<code>DELETE:</code>/api/v1/recipe/{recipeId}**
  - Deletes an existing recipe record
- **<code>GET:</code>/api/v1/recipes**
  - Retrieves list of all existing recipes
- **<code>POST:</code>/api/v1/recipe/{recipeId}/review**
  - Adds a post review for an existing recipe
- **<code>POST:</code>/api/v1/recipe/{recipeId}/favorite**
  - Adds a recipe to user favorites
- **<code>GET:</code>/api/recipes?sort=upvotes&order=descending**
  - Retrieves list of all existing recipes by highest number of upvotes in descending order
  
### API Documentation
* View full document at [https://more-recipes-gbenga.herokuapp.com/api/docs]

### TESTING
This app uses the following for testing
* ```mocha/chai``` and ```chai-http``` for server-side testing
* ```Enzyme``` and ```Jest``` for client-side testing
```npm run test``` to run server-side test
```npm run test:client``` to run client-side test

### CONTRIBUTING
Follow the listed steps to contribute to this project:
* Fork this repository
* Clone your copy of the repository
* Create your feature branch on your local machine with git checkout -b your-feature-branch
* Push your changes to your remote branch with git push origin your-feature-branch
* Raise a pull request
* Visit Repo wiki for style guide and conventions

### LICENSE
This project is authored by Ode Gbenga and it is licensed for your use, modification and distribution under the MIT license.

  

