import React, { Component } from 'react';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import Recipe from '../containers/RecipeContainer';
import PostReviewForm from './PostReviewForm';

class RecipeDetails extends Component {
  constructor() {
    super();
    this.state = {
      recipe: {}
    };
  }
  componentDidMount() {
    this.props.fetchSingleRecipe(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipe) {
      this.setState({
        recipe: nextProps.recipe,
      });
    }
  }

  renderReviews(reviews) {
    if (reviews.length === 0) {
      return (
        <div className="container">
          <div className="row">
            <h4 className="center-align"> 
            No reviews posted yet!</h4>
          </div>
        </div>
      );
    }
    return reviews.map((review, index) => (
      <div key={index} className="col s12 m4">
        <div className="card darken-1">
          <div className="card-content">
            <p>{review.content}</p>
          </div>
          <div className="card-action">
            <div className="chip">
              <img 
              src="https://api.adorable.io/avatars/285/abott@adorable.png" 
              alt="Contact Person" />{review.User.username}
            </div>
            <div className="col s6 m6 l6 right">
              <p>{moment(review.createdAt).fromNow()}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const { recipe } = this.state;
    /*
    	if (loading) { 
			return <div>LOADING!!</div>;
		} else if(error) {
			return <div>{error}</div>
		} else */
    if (isEmpty(recipe)) {
      return <div>
        <span>here </span>
      </div>;
    }

    return (
      <div>
        <main ref={recipe.id} className="container">
          <div className="row">
            <div className="col s12 m12">
              <h4 className="header">Recipe Details</h4>
              <div className="col s12 hide-on-large-only">
                <Recipe recipe={recipe} />
              </div>
              <div className="card horizontal hide-on-med-and-down">
                <div className="card-image">
                  <img src={recipe.image_url} alt="recipe owner" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s6 m6">
                        <h4>{recipe.title}</h4>
                      </div>
                      <div className="col s3 m3 offset-m3 offset-s3">
                        <a className="btn-floating top-fab waves-effect waves-light white tooltipped" 
                        data-position="bottom" data-delay="100" data-tooltip="Add to Favorites">
                        <i className="material-icons red-text">favorite_border</i>
                        </a>
                      </div>
                    </div>
                    <p>{recipe.description}</p>
                  </div>
                  <div className="card-action">
                    <a className="waves-effect grey-text btn-flat">
                      <i className="material-icons left">thumb_up</i>{recipe.upvotes}
                    </a>
                    <a className="waves-effect grey-text btn-flat">
                    <i className="material-icons left">thumb_down</i>{recipe.downvotes}</a>
                    <a className="waves-effect grey-text waves-light btn-flat">
                    <i className="material-icons left">visibility</i>{recipe.views}</a>
                    <a className="waves-effect grey-text waves-light btn-flat">
                    <i className="material-icons left">chat</i>{recipe.reviews.length}</a>
                    <div>
                      <div className="chip">
                        <img 
                        src="https://api.adorable.io/avatars/285/abott@adorable.png" 
                        alt="Contact Person" />{recipe.User.username}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12">
                <div className="card darken-1">
                  <div className="card-content">
                    <span className="card-title">Ingredients</span>
                    <hr></hr>
                    <ul>
                      {
                        recipe.ingredients.split(/\r?\n/).map((ingredient, i) => (
                          <li key={i}>{ingredient}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m12">
                <div className="card darken-1">
                  <div className="card-content">
                    <span className="card-title">Directions</span>
                    <hr></hr>
                    <ul>
                      {
                        recipe.directions.split(/\r?\n/).map((direction, i) => (
                          <li key={i}>{direction}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12">
                <h4 className="">Reviews</h4>
                <div className="row">
                  <div className="col s12 m12 ">
                    <h6>Post a Review</h6>
                    <PostReviewForm id={recipe.id} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {this.renderReviews(recipe.reviews)}
            </div>
            <a 
            href="#navvy" 
            id="backToTop" 
            className="btn-floating waves-effect waves-light yellow tooltipped" 
            data-position="top" 
            data-delay="50" 
            data-tooltip="back to top">
            <i className="material-icons">arrow_upward</i></a>
          </div>
        </main>
      </div>
    );
  }
}

export default RecipeDetails;
