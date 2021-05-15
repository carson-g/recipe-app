import React from 'react'

const SearchBar = (props) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        // gather user input
        let input = event.target.input.value;
        let searchType = event.target.searchType.value;
        // use callback to call api and return data
        let data = await props.recipeSearchCall(input, searchType);
        // use data to update cards
        props.cardUpdate(data, searchType);
    }
    return (
        <div class="search-bar">
            <form onSubmit={handleSubmit}>
                <input type='text' name='input'/>
                <input type='submit' value='Search'/>
                <br></br>
                <input type="radio" name="searchType" value="byName" defaultChecked="true"/>Search by Name
                <input type="radio" name="searchType" value="byIngredients"/>Search by Ingredients
            </form>
        </div>
    )
}

export default SearchBar
