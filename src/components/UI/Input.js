import React from "react";
import classes from './Input.module.css';

/*
Here we need a way of capturing the value in the input.
Then we need a way of forwarding that input's value up to the
MealItemForm component.
*/

const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/> {/*inputs have a lot of props so it's best to be able to take as many as we may need*/}
    </div>
}

export default Input;