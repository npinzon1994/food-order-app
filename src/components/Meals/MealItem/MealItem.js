import React, { useContext } from "react";
import CartContext from "../../../context/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const addToCartHandler = (quantity) => {
    /*this is where we call our context object
    to create the cart item and add to our context's
    items prop.*/

    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity,
    });
  };

  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          type="submit"
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
