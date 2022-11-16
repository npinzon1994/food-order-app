import React, { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mainImg from "../../images/meals.jpg";
import Modal from "../UI/Modal";

const Header = (props) => {
  

  return (
    <Fragment>
      
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onClick={props.onShowCart}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImg} alt="food laid out on buffet table" />
      </div>
    </Fragment>
  );
};

export default Header;
