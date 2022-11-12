import React, {useContext} from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import CartItemContext from "../../../context/cart-item-context";

/*
We need a context. We need to be able to access the value
of the input in Input.js, MealItemForm.js (here), MealItem.js, CartItem.js
*/

const MealItemForm = props => {
    const inputContext = useContext(CartItemContext);
    
    
    const getInputValueHandler = (event) => {
        inputContext.onSetInputValue(event.target.value);
    }

    
    return <form className={classes.form} onSubmit={props.onSubmit}>
        {/*Now we can add whichever props we want in our object being fed through input prop*/}
        <Input input={{
            id: 'amount' + props.id, //Appending same id from mealItem to make all inputs unique.
                                     //Otherwise, all of them would have the same id of 'amount'
            type: 'number',
            min: '1',
            max: '10',
            step: '1',
            defaultValue: '1',
            onChange: getInputValueHandler
            
        }} label="Amount"
        />
        <button type={props.type}>+ Add</button>
    </form>
}

export default MealItemForm;