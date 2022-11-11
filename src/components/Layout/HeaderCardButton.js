import React from "react";
import CartIcon from "../../images/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartQuantity = 0;
  
  return <button className={classes.button}>
    <span className={classes.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>{cartQuantity}</span>
  </button>;
};

export default HeaderCartButton;
