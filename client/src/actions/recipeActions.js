import axios from 'axios';

export function createRecipe (recipe) {
    return dispatch => {
        axios.post('/api/recipes', recipe).then((res) => {
        })
    } 
}
const getRecipesAction = recipes => (
    {
        type: 'FETCH_RECIPES',
        recipes
    }
);

export function getRecipes() {
    return dispatch => (
        axios.get('/api/recipes')
    )
    .then(({ data }) => {
        dispatch(getRecipesAction(data.data))
    }, ({ res }) => {

    });
}



