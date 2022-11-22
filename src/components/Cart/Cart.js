import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "../Cart/CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const addItemHandler = (item) => {
    //copying over rest of item but increasing amount by 1
    cartContext.addItem({...item, quantity: 1});
  }

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  }

  const cartItems = cartContext.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      onAdd={addItemHandler.bind(null, item)}
      onRemove={removeItemHandler.bind(null, item.id)}
    />
  ));

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
