import React, { Fragment, useState } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mainImg from "../../images/meals.jpg";
import Modal from '../UI/Modal'
import Cart from "../Cart/Cart";

const Header = (props) => {
  const totalQuantity = 4;
  
  const [isCartVisible, setIsCartVisible] = useState(false);
  
  const showCartHandler = () => {
    if(totalQuantity > 0) {
      setIsCartVisible(true);
    }
  }

  const hideCartHandler = () => {
    setIsCartVisible(false);
  }
  
  return (
    <Fragment>
      {isCartVisible && <Modal onClose={hideCartHandler}>
        <Cart onClose={hideCartHandler}></Cart>
        </Modal>}
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={showCartHandler} totalQuantity={totalQuantity}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImg} alt="food laid out on buffet table" />
      </div>
    </Fragment>
  );
};

export default Header;
