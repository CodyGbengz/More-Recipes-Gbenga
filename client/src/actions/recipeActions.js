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

export const getSingleRecipeAction = recipe => (
    {
        type: 'FETCH_SINGLE_RECIPE',
        recipe
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

export function getSingleRecipe(id) {
    return dispatch => (
        axios.get(`/api/recipes/${id}`)
    )
    .then((res) => {
        dispatch(getSingleRecipeAction(res.data.data))
})
}




