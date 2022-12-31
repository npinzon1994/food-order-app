import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "../Cart/CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const addItemHandler = (item) => {
    //copying over rest of item but increasing amount by 1
    cartContext.addItem({ ...item, quantity: 1 });
  };

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

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

  const showCheckoutFormHandler = () => {
    setShowCheckoutForm(true);
  };

  const fetchOrders = async(data) => {
    //so now what do we do with the data? DISPLAY IT OFC!
    
    /*Now we need to take that data and make it work
    with an ORDER SUMMARY PAGE (which we haven't yet implemented)*/
  }
  
  //userData is coming from the checkout form
  const submitOrderHandler = async (userData) => {

    const orderData = {user: userData, orderedItems: cartContext.items}; //orderData is an OBJECT

    const response = await fetch("https://food-order-app-be8a0-default-rtdb.firebaseio.com/orders.json", {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {'Content-Type': 'application/json'}
    });

    const data = await response.json();
  }

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={props.onClose} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={showCheckoutFormHandler}>
          Order
        </button>
      )}
    </div>
  );

  //props.onClose, here, refers to the function defined in App.js that closes the cart
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>

      {showCheckoutForm && <CheckoutForm onClose={props.onClose} onSubmitOrder={submitOrderHandler}/>}
      {!showCheckoutForm && modalActions}
    </Modal>
  );
};

export default Cart;
