import React from 'react'

const ExpandedCard = (props) => {
    return (
        <div class="expanded">
            <button onClick={(event) => {
                event.preventDefault();
                props.openCard(0);
            }}>Back</button>
            <h1>{props.info.title}</h1>
            <img src={props.info.image} alt={props.info.title}/>
            <p>Time: {props.info.readyInMinutes} minutes</p>
            <p>Servings: {props.info.servings}</p>
            {props.info.glutenFree ? <p>Gluten Free: ✅</p> : <p>Gluten Free: ❌</p>}
            {props.info.dairyFree ? <p>Dairy Free: ✅</p> : <p>Dairy Free: ❌</p>}
            {props.info.vegetarian ? <p>Vegetarian: ✅</p> : <p>Vegetarian: ❌</p>}
            {props.info.vegan ? <p>Vegan: ✅</p> : <p>Vegan: ❌</p>}
            <p>
                Ingredients
                <ul>
                    {props.info.nutrition.ingredients.map((ing, index) => (
                        <li>{ing.amount} {ing.unit} {ing.name}</li>
                    ))}
                </ul>
            </p>
            <p>
                Instructions
                <ol>
                    {props.info.analyzedInstructions[0].steps.map((part, index) => (
                        <li>{part.step}</li>
                    ))}
                </ol>
            </p>
        </div>
    )
}

export default ExpandedCard
