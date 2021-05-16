import React from 'react'

const ExpandedCard = (props) => {
    return (
        <div class="expanded">
            <button onClick={(event) => {
                event.preventDefault();
                props.openCard(0);
            }}>Back</button>
            <div class="card-stats">
                <img class="exp-img" src={props.info.image} alt={props.info.title}/>
                <div>
                    <h1>{props.info.title}</h1>
                    <div class="quick-stats">
                        <p>Calories: {props.info.nutrition.nutrients[0].amount}</p>
                        <div class="v1"></div>
                        <p>Time(mins): {props.info.readyInMinutes}</p>
                        <div class="v1"></div>
                        <p>Servings: {props.info.servings}</p>
                    </div>
                    <i dangerouslySetInnerHTML={{__html: props.info.summary.split(".")[0] + "."}}/>
                </div>
            </div>
            <div class="quick-stats">
                {props.info.glutenFree ? <p>Gluten Free: ✅</p> : <p>Gluten Free: ❌</p>}
                <div class="v1"></div>
                {props.info.dairyFree ? <p>Dairy Free: ✅</p> : <p>Dairy Free: ❌</p>}
                <div class="v1"></div>
                {props.info.vegetarian ? <p>Vegetarian: ✅</p> : <p>Vegetarian: ❌</p>}
                <div class="v1"></div>
                {props.info.vegan ? <p>Vegan: ✅</p> : <p>Vegan: ❌</p>}
            </div>
            <p>
                Ingredients:
                <ul>
                    {props.info.nutrition.ingredients.map((ing, index) => (
                        <li>{ing.amount} {ing.unit} {ing.name}</li>
                    ))}
                </ul>
            </p>
            {props.info.analyzedInstructions.length === 0 ?
            <i>No Instructions</i>
            :
            <p>
                Instructions:
                <ol>
                    {props.info.analyzedInstructions[0].steps.map((part, index) => (
                        <li>{part.step}</li>
                    ))}
                </ol>
            </p>
            
            }
        </div>
    )
}

export default ExpandedCard
