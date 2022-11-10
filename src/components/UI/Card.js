import React from 'react';
import classes from './Card.module.css';

const Card = props => {
    //need to be able to apply additional styles
    return <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
}

export default Card;