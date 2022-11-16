import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);
  
  //this function is tied to the internal +Add button in MealItemForm.js
  const saveCartItemDataHandler = (event) => {
    event.preventDefault();
    
    
    
    /*
    we need to take all of the data here, package it
    in an object, and then pass that object up to Cart.js.

    how tf am I gonna get this object in Cart.js?
    MAYBE I CAN USE CONTEXT
    */

    
    // cartItemContext.cartItem.onSetCartItem({
    //   name: props.name,
    //   price: props.price,
    //   quantity: enteredQuantity,
    // });

    /*
    Now that we have our object saved in context, we
    can call this context in Cart.js. and create an array
    from which we map <CartItem /> objects. 
    */

  }
  
  return (
    <li className={classes.meal} key={props.id}>
      <div>      
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemForm id={props.id} type="submit" onSubmit={saveCartItemDataHandler}/>
      </div>
      
    </li>
  );
};

export default MealItem;
