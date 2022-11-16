import React, { useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}></ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartContext.totalQuantity}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
