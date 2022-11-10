import React from "react";
import classes from './Input.module.css';

const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.id}>Amount</label>
        <input id={props.id}/>
    </div>
}

export default Input;