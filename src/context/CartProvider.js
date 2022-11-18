import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //concat() returns a new array with the argument appended to the end
    const updatedItems = state.items.concat(action.item);

    //taking price of current item * its quantity and adding to totalPrice
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.quantity;

    return { items: updatedItems, updatedTotalPrice: updatedTotalPrice };
  }

  if (action.type === "REMOVE") {
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  //this provides the concrete context object we'll be working with

  /*
    This is where useReducer goes. The action.type will check
    if the current item we're adding is aready in the cart or
    not. If no, we add the item to our items array. If yes, then
    we just update that item's quantity.
    */
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
