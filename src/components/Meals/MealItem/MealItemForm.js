import React from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = props => {
    return <form className={classes.form}>
        {/*Now we can add whichever props we want in our object being fed through input prop*/}
        <Input input={{
            id: 'amount' + props.id, //Appending same id from mealItem to make all inputs unique.
                                     //Otherwise, all of them would have the same id of 'amount'
            type: 'number',
            min: '1',
            max: '10',
            step: '1',
            defaultValue: '1',
        }} label="Amount"/>
        <button>+ Add</button>
    </form>
}

export default MealItemForm;