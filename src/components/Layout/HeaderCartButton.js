import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "../../images/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  /*reduce method allows us to transform an array of data 
  into a single value (number in this case)
  
  currentNum is a value that carries across executions. This arg's
  value starts as the value we specify in the reduce function's
  second arg (in this case it's 0).

  since each item in our items array will have a quantity prop, we
  simply add that number to our currentNum, which is going to be
  the totalQuantity we use in the HeaderCartButton.
  */
  const numberOfCartItems = cartContext.items.reduce((currentNum, item) => {
    return currentNum + item.quantity;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
