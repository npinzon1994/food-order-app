import React from "react";

//this is just an outline for our context object where we define how it is set up
const CartContext = React.createContext({
  items: [],
  quantity: 0,
  addItem: (item) => {}, //function takes the item itself as an arg
  removeItem: (id) => {}, //function deleted item by its id
});

export default CartContext;
