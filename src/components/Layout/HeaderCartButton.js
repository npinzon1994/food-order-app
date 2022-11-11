import React from "react";
import CartIcon from "../../images/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  
  return <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>{props.totalQuantity}</span>
  </button>;
};

export default HeaderCartButton;
