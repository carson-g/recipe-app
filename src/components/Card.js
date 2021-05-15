import React from 'react'

const Card = (props) => {
    // allow setState functionality to show or hide more info
    const [state, setState] = React.useState({
        moreInfo: false
    });
    //handle click for "more info" buttons
    const handleClick = (event) => {
        event.preventDefault();
        if (state.moreInfo) {
            setState({moreInfo: false});
        } else {
            setState({moreInfo: true});
        }
    }
    //conditional rending of cards & their extra information
    if (props.info.title === null) {
        return (
            <div></div>
        )
    } else {
        return (
            <div class="card">
                <img src={props.info.image} alt=""></img>
                <div class="card-basic-info">
                    <h3>{props.info.title}</h3>
                    <button onClick={handleClick}>{state.moreInfo ? "Hide Info" : "Show Info"}</button>
                </div>
                {state.moreInfo ? 
                    // <ul>
                    //     <li>Servings: {props.info.servings}</li>
                    //     <li>Ready Time: {props.info.readyInMinutes} minutes</li>
                    //     {props.info.glutenFree ? <li>Gluten Free: Yes</li> : <li>Gluten Free: No</li>}
                    //     <li>Calories: {props.info.nutrition.nutrients[0].amount}</li>
                    //     <li>Summary: {props.info.summary.split(".")[0].replace("<b>","").replace("</b>","")}.</li>
                    // </ul>
                    <br></br>
                :   <br></br>}
            </div>
        )
    }
}

export default Card
