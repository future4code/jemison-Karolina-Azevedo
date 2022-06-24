import React from 'react';
import './CardPequeno.css';

function CardPequeno (props) {
    return (
        <div className="smallcard">
            <img src={ props.imagem }/>
            <p>{props.dado}</p>
        </div>
    )
}

export default CardPequeno;