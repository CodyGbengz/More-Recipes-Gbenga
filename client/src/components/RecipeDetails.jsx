import React, { Component } from 'react';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import Recipe from '../containers/RecipeContainer';
import PostReviewForm from './PostReviewForm';

class RecipeDetails extends Component {
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
          <div className="card-content reviews-box wrapper">
            <p>{review.content}</p>
          </div>
          <div className="card-action">
            <div className="chip">
              <img
              src={ review.User.image_url }
              alt="Contact Person" />{review.User.username}
            </div>
            <div className="col s6 m6 l6 right">
              <p style={{ fontSize: '14px' }}>{moment(review.createdAt).fromNow()}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const { recipe } = this.props;
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
                <Recipe
                recipe={recipe}
                upvoteRecipe={this.props.upvoteRecipe}
                downvoteRecipe={this.props.downvoteRecipe}/>
              </div>
              <div className="col m12 l12">
                <Recipe
                horizontal="horizontal"
                hide="hide-on-med-and-down"
                recipe={recipe}
                upvoteRecipe={this.props.upvoteRecipe}
                downvoteRecipe={this.props.downvoteRecipe}
                />
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
            <div className="reviews row">
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
