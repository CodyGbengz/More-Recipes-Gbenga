import React, { Component } from 'react';
import CreateRecipeForm from './CreateRecipeForm';

class RecipeDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.recipe.recipe){
			this.setState({
				isLoading: false
			})
		}
	}

	componentDidMount() {
		this.props.getSingleRecipe(this.props.id);
	}

	renderReviews(reviews) {
		if(reviews.length === 0 ) {
			return (
				<div class="container">
					<div class="row">
						<h4 className="center-align"> No reviews posted yet!</h4>
					</div>
				</div>
				)};
		return reviews.map((review, i) => {
			return (
				<div className="col s12 m4">
					<div className="card darken-1">
						<div className="card-content">
							<p>{review.content}</p>
						</div>
						<div className="card-action">
							<div className="chip">
								<img src="./images/avi.jpg" alt="Contact Person"/>{review.User.username}
							</div>
						</div>
					</div>
				</div>
			)
		})
	}
	
	render() {
		const { recipe } =  this.props.recipe;
		if (this.state.isLoading) return (<div>LOADING!!</div>)
		return (
				<div>
				<main className="container">
							<div className="row">
								<div className="col s12 m12">
									<h4 className="header">Recipe Details</h4>
									<div className="col s12 hide-on-large-only">
										<div className="card">
											<div className="card-image">
												<img src="./images/bg2.jpg" alt="recipe owner"/>
												<span className="card-title black-text"><b>{recipe.title}</b></span>
												<a className="btn-floating halfway-fab waves-effect waves-light white"><i className="material-icons red-text">favorite_border</i></a>
											</div>
											<div className="card-content">
											<p>{recipe.description}</p>
											</div>
											<div className="card-action">
												<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons">thumb_up</i>{recipe.upvotes}</a>
												<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons">thumb_down</i>{recipe.downvotes}</a>
												<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons">visibility</i>{recipe.views}</a>
												<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons">chat</i>{recipe.reviews.length}</a>
												<div className="chip">
													<a href=""><i className="material-icons">person</i>Jane Doe</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card horizontal hide-on-med-and-down">
										<div className="card-image">
											<img src="./images/bg2.jpg" alt="recipe owner"/>
										</div>
										<div className="card-stacked">
											<div className="card-content">
												<div className="row">
													<div className="col s6 m6">
														<h4>{recipe.title}</h4>
													</div>
													<div className="col s3 m3 offset-m3 offset-s3">
														<a className="btn-floating top-fab waves-effect waves-light white tooltipped" data-position="bottom" data-delay="100" data-tooltip="Add to Favorites"><i className="material-icons red-text">favorite_border</i></a>
													</div>
												</div>
												<p>{recipe.description}</p>
											</div>
											<div className="card-action">
												<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons left">thumb_up</i>{recipe.upvotes}</a>
												<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons left">thumb_down</i>{recipe.downvotes}</a>
												<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons left">visibility</i>{recipe.views}</a>
												<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons left">visibility</i>{recipe.reviews.length}</a>
												<div className="chip">
													<a href=""><i className="material-icons">person</i>Jane Doe</a>
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
													recipe.ingredients.split(/\r?\n/).map((ingredient,i) => {
														return (
															<li key={i}>{ingredient}</li>
														)
													})
													}
												</ul>
											</div>
											<div className="card-action">
												<a href=""><i className="material-icons">access_time</i>30 minutes</a>
												<a href=""><i className="material-icons">local_dining</i>3 people</a>
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
												<ol>
												{
													recipe.directions.split(/\r?\n/).map((direction,i) => {
														return (
															<li key={i}>{direction}</li>
														)
													})
													}
												</ol>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col s12 m12">
										<h4 className="">Reviews</h4>
										<div className="row">
											<div className="col s12 m12">
												<ul className="collapsible" data-collapsible="accordion">
													<li>
														<div className="collapsible-header"><i className="material-icons">add</i>Post a Review</div>
														<div className="collapsible-body">
															<div className="row">
																<form className="col s12 white">
																	<div className="row">
																		<div className="input-field col s12 m12">
																			<textarea id="textarea1" className="materialize-textarea"></textarea>
																			<label htmlFor="textarea1">Review</label>
																		</div>
																	</div>
																	<div className="row">
																		<div className="col s6 m6 offset-m4 offset-s4">
																			<a className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
																			<a className="modal-action modal-close waves-effect waves-light yellow btn">Save</a>
																		</div>
																	</div>
																</form>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									{this.renderReviews(recipe.reviews)}
								</div>
								<a href="#navvy" id="backToTop" className="btn-floating waves-effect waves-light yellow tooltipped" data-position="top"data-delay="50" data-tooltip="back to top"><i className="material-icons">arrow_upward</i></a>
								</div>
						</main>
						<div id="create" className="modal">
				<div className="modal-content">
				<h4>Create Recipe</h4>
				<div className="row">
					<CreateRecipeForm />
				</div>
				</div>
			</div>
				</div>
		)
	}
}

export default RecipeDetails;