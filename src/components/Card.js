import React from 'react'

const Card = (props) => {
    //handle click for "more info" buttons
    const handleClick = (event) => {
        event.preventDefault();
        props.openCard(props.index);
    }
    //conditional rending of cards & their extra information
    if (props.info.title === null) {
        return (
            <div></div>
        )
    } else {
        return (
            <div class="card">
                <img class="card-img" src={props.info.image} alt=""></img>
                <div class="card-basic-info">
                    <h3>{props.info.title}</h3>
                    <button onClick={handleClick}>Show Info</button>
                </div>
            </div>
        )
    }
}

export default Card
