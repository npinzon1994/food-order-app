import React from "react";
import classes from './Input.module.css';

const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/> {/*inputs have a lot of props so it's best to be able to take as many as we may need*/}
    </div>
}

export default Input;