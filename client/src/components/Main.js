import React, { Component }from 'react';
import Footer from './Footer';
import CreateRecipeForm from './CreateRecipeForm';



class Main extends Component {
    render() {
      return (
        <div className="main">
          { this.props.children }
          <Footer/>
          <div id="create" className="modal">
            <div className="modal-content">
              <h4>Create Recipe</h4>
              <div className="row">
                <CreateRecipeForm id={this.props.id} />
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Main;

