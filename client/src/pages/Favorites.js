import React, { Component } from 'react';
import FavoriteGrid from  '../containers/FavoritesContainer';
import Header from '../components/Header';

class Favorites extends Component {
    render() {
        return (
            <div>
                <Header/>
                <FavoriteGrid />
            </div>
        );
    }
}

export default Favorites;