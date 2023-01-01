import React, { Fragment, useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "../Cart/CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderProcessed, setIsOrderProcessed] = useState(false);
  const [error, setError] = useState("");

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

  const fetchOrders = async (data) => {
    //so now what do we do with the data? DISPLAY IT OFC!
    /*Now we need to take that data and make it work
    with an ORDER SUMMARY PAGE (which we haven't yet implemented)*/
  };

  //userData is coming from the checkout form
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const orderData = { user: userData, orderedItems: cartContext.items }; //orderData is an OBJECT

    try {
      const response = await fetch(
        "https://food-order-app-be8a0-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(orderData),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (err) {
      setError(err.message);
    }

    setIsSubmitting(false);
    setIsOrderProcessed(true);
    cartContext.clearCart();
  };

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

  const cartModalContent = (
    <Fragment>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      {!isOrderProcessed && !error && (
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalPrice}</span>
        </div>
      )}
      {showCheckoutForm && (
        <CheckoutForm
          onClose={props.onClose}
          onSubmitOrder={submitOrderHandler}
        />
      )}
      {!showCheckoutForm && modalActions}
    </Fragment>
  );

  const closeButton = (
    <div className={classes.actions}>
      <button onClick={props.onClose} className={classes.button}>
        Close
      </button>
    </div>
  );

  const isSubmittingModalContent = <p>Submitting order...</p>;
  const didSubmitModalContent = (
    <Fragment>
      <p>Order successful!</p>
      {closeButton}
    </Fragment>
  );

  const submissionHasError = (
    <Fragment>
      <p>{error}</p>
      {closeButton}
    </Fragment>
  );

  //props.onClose, here, refers to the function defined in App.js that closes the cart
  return (
    <Modal onClose={props.onClose}>
      {error && submissionHasError}
      {isOrderProcessed && !isSubmitting && !error && didSubmitModalContent}
      {!isSubmitting && !isOrderProcessed && cartModalContent}
      {!isOrderProcessed && isSubmitting && !error && isSubmittingModalContent}
    </Modal>
  );
};

export default Cart;
