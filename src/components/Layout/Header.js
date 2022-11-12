import React, { Fragment, useState } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mainImg from "../../images/meals.jpg";
import Modal from "../UI/Modal";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const totalQuantity = 4;

  /*
  I might also want to have a state for an error modal.
  
  I very well could use a useReducer because we want to 
  derive our state based on how many items are in our cart.

  Then the dispatch function could dispatch an action whose
  type field could forseeably be 'ITEMS_IN_CART' or 'NO_ITEMS_IN_CART'
  and whose isCartEmpty could be true or false and whose 
  itemQuantity field could be equal to the integer value of
  what is stored in our HeaderCartButton.

  ^^^^I have no idea if this will work but I can try.

  Then, in the reducer function, we might be able to check if
  action.numItems > 0 and if so, give our state object a 
  'isCartEmpty prop as well as a numItems prop and then render
  the appropriate modal depending on what we get in our state.
  */
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = () => {
    if (totalQuantity > 0) {
      setIsCartVisible(true);
    }
  };

  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <Fragment>
      {isCartVisible && (
        <Modal onClose={hideCartHandler}>
          <Cart onClose={hideCartHandler}></Cart>
        </Modal>
      )}
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onClick={showCartHandler}
          totalQuantity={totalQuantity}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImg} alt="food laid out on buffet table" />
      </div>
    </Fragment>
  );
};

export default Header;
