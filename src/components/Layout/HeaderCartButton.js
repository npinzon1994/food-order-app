import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "../../images/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
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

  //ig items is the alias name as well as the name of the prop in cartContext
  //we're PULLING items out of cartContext so we can use it as 'items'
  const { items } = cartContext;

  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.quantity;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setButtonIsHighlighted(true);
    
    //waits 300ms then removes highlighted class
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  const buttonClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  return (
    //add .bump class only when # cart items changes
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
