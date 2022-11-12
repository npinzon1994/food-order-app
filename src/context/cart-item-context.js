import React, { useState } from "react";

const CartItemContext = React.createContext({
  inputValue: "1",
  cartItem: {
    name: "",
    price: "",
    quantity: "",
    onRemove: () => {},
    onAdd: () => {},
  },
  onSetInputValue: () => {},
});

export const CartItemContextProvider = (props) => {
  /*
    Right now, we have a state that holds the input value
    for the quantity of the MealItem. 
    
    In addition, it would be good to have another state that 
    holds the current MealItem from which we want to create a 
    CartItem which is accessible in Cart.js

    CartItem props -> name, price, quantity, onRemove, onAdd
    */

  const [inputValue, setInputValue] = useState("1");
  const [cartItem, setCartItem] = useState({});

  const addItemHandler = () => {};

  const removeItemHandler = () => {};

  return (
    <CartItemContext.Provider
      value={{
        inputValue: inputValue,
        onSetInputValue: setInputValue,
        cartItem: {
          name: cartItem.name,
          price: cartItem.price,
          quantity: cartItem.quantity,
          onRemove: removeItemHandler,
          onAdd: addItemHandler,
          onSetCartItem: setCartItem,
        },
      }}
    >
      {props.children}
    </CartItemContext.Provider>
  );
};

export default CartItemContext;
