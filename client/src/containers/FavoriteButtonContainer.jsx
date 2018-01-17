import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { 
    addFavoriteRecipe,
    removeFavoriteRecipe } from "../actions/favoritesAction";
import  FavoritesButton  from '../components/FavoriteButton';

class FavoriteButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.handlFavBtnClick = this.handleFavBtnClick.bind(this);
        this.state = {
            favorites: this.props.favorites,
            isFavorite: false
        };
    };

    componentDidMount = () => {
        this.isUserFavorite();
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.favorites !== nextProps.favorites) {
            this.setState({ favorites: nextProps.favorites });
        }
    };
    
    handleFavBtnClick = (event) => {
        event.preventDefault();
        this.toggleFavorite();
        if (!this.isUserFavorite()) {
            this.props.addFavoriteRecipe(this.props.recipe.id, this.props.index )
        }
        else {
            this.props.removeFavoriteRecipe(this.props.recipe.id, this.props.index )
        }
    };

    isUserFavorite = () => {
        const isFavorite = this.state.favorites.filter(favorite => favorite.recipeId === this.props.recipe.id);
        console.log(isFavorite);
        if (isFavorite.length > 0) {
            return true;
        }
        return false;
    };

    toggleFavorite =  () => {
        if (this.state.isFavorite) {
            this.setState({ isFavorite: false });
        }
        else {
            this.setState({ isFavorite: true }); 
        }
    };
    render() {
        const { recipe } = this.props;
        return (
            <FavoritesButton 
                handleFavBtnClick={ this.handleFavBtnClick }
            />
        )
    }
}

const mapStateToProps = state => ({
    favorites: state.favorites
});

export default connect(mapStateToProps, {
    addFavoriteRecipe,
    removeFavoriteRecipe
})(FavoriteButtonContainer);