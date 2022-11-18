import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "../Cart/CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = cartContext.items.map((item) => (
    <CartItem
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
    />
  ));

  const totalPrice = `$${cartContext.totalPrice}`;
  const hasItems = cartContext.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
