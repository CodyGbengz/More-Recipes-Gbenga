import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateRecipeForm from './CreateRecipeForm';
const RecipeDetails = (props) => {
    return (
			<div>
				<Header/>
        <main className="container">
					<div className="row">
						<div className="col s12 m12">
							<h4 className="header">Recipe Details</h4>
							<div className="col s12 hide-on-large-only">
								<div className="card">
									<div className="card-image">
										<img src="./images/bg2.jpg" alt="recipe owner"/>
										<span className="card-title">Recipe Title</span>
										<a className="btn-floating halfway-fab waves-effect waves-light yellow"><i className="material-icons">favorite</i></a>
									</div>
									<div className="card-content">
										<p>A short description of the recipe with information about the recipe in 140 characters or less.</p>
									</div>
									<div className="card-action">
										<a className=""><i className="material-icons">thumb_up</i>50</a>
										<a className=""><i className="material-icons">thumb_down</i>5</a>
										<a className=""><i className="material-icons">visibility</i>4</a>
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
												<h4>Recipe Title</h4>
											</div>
											<div className="col s3 m3 offset-m3 offset-s3">
												<a className="btn-floating top-fab waves-effect waves-light white tooltipped" data-position="bottom" data-delay="100" data-tooltip="Add to Favorites"><i className="material-icons red-text">favorite_border</i></a>
											</div>
										</div>
										<p>A short description of the recipe with information about the recipe in 140 characters or less.</p>
									</div>
									<div className="card-action">
										<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons left">thumb_up</i>50</a>
										<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons left">thumb_down</i>5</a>
										<a className="waves-effect grey-text waves-light btn-flat"><i className="material-icons left">visibility</i>4</a>
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
											<li> 1 cup of sugar</li>
											<li> 2 cups of flour</li>
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
											<li>Preheat oven for 15 minutes</li>
											<li>Mix sugar and flour thoroughly</li>
										</ol>
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
																	<label for="textarea1">Review</label>
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
							<div className="col s12 m4">
								<div className="card darken-1">
									<div className="card-content">
										<p>I really had fun trying out this recipe. Great taste and very easy to prepare. Nice one</p>
									</div>
									<div className="card-action">
										<div className="chip">
											<img src="./images/avi.jpg" alt="Contact Person"/> Jane Doe
										</div>
									</div>
								</div>
							</div>
			
							<div className="col s12 m4">
								<div className="card darken-1">
									<div className="card-content">
										<p>I had a lot of fun in the kitchen cooking, and my family enjoyed it. I'm definitely saving this recipe.</p>
									</div>
									<div className="card-action">
										<div className="chip">
											<img src="./images/avi.jpg" alt="Contact Person"/> Jane Doe
										</div>
									</div>
								</div>
							</div>
						</div>
						<a href="#navvy" id="backToTop" onclick="topFunction()" className="btn-floating waves-effect waves-light yellow tooltipped" data-position="top"data-delay="50" data-tooltip="back to top"><i className="material-icons">arrow_upward</i></a>
						</div>
				  </main>
					<Footer/>
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

export default RecipeDetails;