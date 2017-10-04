import React, { Component } from 'react';


export class Recipe extends Component {
    render() {
        const { recipe, i, review } = this.props;
        return (
            <div className="col s12 l4">
              <div className="card">
                <div className="card-image">
              
                    <img src="./images/bg2.jpg" alt="recipe-img"/>
                    <span className="card-title">
                      <b><a href="recipe details.html"className="white-text">Recipe Title</a></b>
                    </span>
                    <a className="btn-floating halfway-fab waves-effect waves-light white "><i className="material-icons red-text">favorite</i></a>
                  
                </div>
                <div className="card-content">
                  <p>A short description of the recipe with information about the recipe in 140 characters or less.</p>
                </div>
                <div className="card-action">
                  <div className="row">
                    <div className="col s12 m12">
                      <div className="chip"><img src="./images/avi.jpg" alt="Contact Person"/>Jane Doe</div>
                    </div>
                    <div className="col s12 m12">
                      <a className=" waves-effect waves-light btn-flat tooltipped" data-position="bottom" data-delay="100" data-tooltip="upvote"><i className="material-icons left">thumb_up</i>50</a>
                      <a className="waves-effect waves-light btn-flat tooltipped" data-position="bottom" data-delay="100" data-tooltip="downvote"><i className="material-icons left">thumb_down</i>5</a>
                      <a href="recipe details.html" className="waves-effect waves-light btn-flat tooltipped" data-position="bottom" data-delay="100"
                        data-tooltip="views"><i className="material-icons left">visibility</i>4</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Recipe