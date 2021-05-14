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
        const API_URL = "https://api.spoonacular.com/recipes/";
        if (input === '') {
            alert("Search input required!");
            return null;
        } else {
            let output;
            let urlCall1;
            if (searchType === "byName") {
                urlCall1 = `${API_URL}complexSearch?query=${input}&addRecipeNutrition=true&apiKey=${API_KEY}`;
            } else {
                input.replace(' ', ',');
                urlCall1 = `${API_URL}findByIngredients?ingredients=${input}&ranking=1&apiKey=${API_KEY}`;
            }
            try {
                await fetch(urlCall1)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        output = data;});
                if (searchType === "byName") {
                    return output;
                } else {
                    let idList = [];
                    let counter = 0;
                    output.forEach(element => {
                        let id = element.id;
                        idList[counter] = id;
                        counter++;
                    });
                    let output2;
                    let idString = idList.toString();
                    console.log(idString);
                    let urlCall2 = `${API_URL}informationBulk?ids=${idString}&includeNutrition=true&apiKey=${API_KEY}`;
                    await fetch(urlCall2)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            output2 = data;});
                    return output2;
                }
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
            if (searchType === "byName") {
                data = data.results;
            }
            setState({recipeList: data});
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