import React from 'react'
import Card from './Card'
import SearchBar from './SearchBar'

const SearchModule = () => {
    // allow setState functionality
    const [state, setState] = React.useState({
        recipeList: [{title: null, img: null}]
    })
    // api call method, returns data
    const recipeSearchCall = async (input, searchType) => {
        const API_KEY = "6ade239ddd23484382438ee5d85822b3";
        let API_URL = "https://api.spoonacular.com/recipes/complexSearch?query=";
        if (input === '') {
            alert("Search input required!");
            return null;
        } else {
            let output;
            if (searchType === "byName") {
                API_URL = `${API_URL}${input}&addRecipeNutrition=true&apiKey=${API_KEY}`;
            } else {
                API_URL = `${API_URL}${input}&includeIngredients=${input}&addRecipeNutrition=true&apiKey=${API_KEY}`;
                input.replace(' ', ',');
            }
            try {
                await fetch(API_URL)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        output = data;});
                return output;
            } catch (error) {
                console.log(error);
                return null;
            }
        }
    }
    // updates the cards with recipe results
    const cardUpdate = (data, searchType) => {
        // store data for recipes in recipeList state
        try {
            // if (searchType === "byName") {
            //     data = data.results;
            // }
            setState({recipeList: data.results});
        } catch (error) {
            console.log(error);
        }
    }
    // implement component
    return (
        <div>
            <SearchBar recipeSearchCall={recipeSearchCall} cardUpdate={cardUpdate} />
            {state.recipeList.map((info, index) => (
                <Card key={index} info={info}></Card>
            ))}
        </div>
    )
}

export default SearchModule