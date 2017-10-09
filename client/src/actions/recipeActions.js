import axios from 'axios';

export function createRecipe (recipe) {
    return dispatch => {
        axios.post('/api/recipes', recipe).then((res) => {
            
        })
    } 
}

