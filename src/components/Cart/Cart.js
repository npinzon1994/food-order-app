import React, {Fragment} from "react";
import classes from "./Cart.module.css";

/*
This component will act as a list for all items in
the user's cart. This component will be laid on top
of a custom reusable MODAL component.
*/

/*
We will definitely need STATE to manage our list
*/

//ALL CART ITEM PROPS - name, price, quantity -- onRemove, onAdd

const Cart = (props) => {
  return (
    <Fragment>
      <ul className={classes["cart-items"]}>
        
      </ul>
      <div className={classes.actions}>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$0</span>
        </div>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Fragment>
  );
};

export default Cart;
