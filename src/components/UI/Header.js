import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";
import mainImg from "../../images/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img src={mainImg} alt="food laid out on buffet table" />
      </div>
    </Fragment>
  );
};

export default Header;
