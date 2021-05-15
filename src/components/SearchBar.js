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
        <div class="search-form">
            <form onSubmit={handleSubmit}>
                <label class="search-bar">
                    <input type='text' name='input' placeholder="Search..."/>
                    <label class="mag-glass">
                        <input type='submit' value='Search'/>
                        {/* <img width="30" height="30" src="https://integrityhr.com/wp-content/uploads/2015/11/IHR_search_icon-200x200.png" alt=""></img> */}
                    </label>
                </label>
                <label class="radio">
                    <input class="radio--input" type="radio" name="searchType" value="byName" defaultChecked="true"></input>
                    <div class="radio--radio"></div>
                    Search by Name
                </label>
                <label class="radio">
                    <input class="radio--input" type="radio" name="searchType" value="byIngredients"></input>
                    <div class="radio--radio"></div>
                    Search by Ingredients
                </label>
            </form>
        </div>
    )
}

export default SearchBar
