import React from "react";
import CartIcon from "../../images/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartQuantity = 0;
  
  return <button className={classes.button}>
    <div className={classes.icon}><CartIcon/></div>
    Your Cart
    <div className={classes.badge}>{cartQuantity}</div>
  </button>;
};

export default HeaderCartButton;
