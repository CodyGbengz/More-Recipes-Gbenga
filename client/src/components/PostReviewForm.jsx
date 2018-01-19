import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postReviewAction } from '../actions/recipeActions';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
		this.setState({ [e.target.name] : e.target.value });
	}

	onClick() {
        this.props.postReviewAction(this.props.id,this.state.review);
        this.setState({ review: '' });
    }

    render() {
        const { review } = this.state;
        return (
            <div className="row">
                <form className="col s12 white">
                    <div className="row">
                        <div className="input-field col s12 m12">
                            <textarea name="review" value={ review } onChange={ this.onChange} id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Review</label>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col s6 m6 offset-m4 offset-s4">
                                <a className="modal-action modal-close waves-effect waves-red red white-text btn">Cancel</a>
                                <a onClick={ this.onClick } className="modal-action modal-close waves-effect waves-light white red-text btn">Post</a>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
	return { 
		reviews: state.recipe.reviews,
	 };
}

export default connect(mapStateToProps, { postReviewAction })(ReviewForm);