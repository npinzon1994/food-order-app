import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //taking price of current item * its quantity and adding to totalPrice
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.quantity;

    //Now we need the logic for if an item already exists in our array

    const existingCartItemIndex = state.items.findIndex(
      //returns the index of the item (if it exists) in the array
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex]; //now we get the current item we need in the items[] array

    let updatedItems;

    if (existingCartItem) {
      //if existingCartItem is a thing...
      const updatedItem = {
        ...existingCartItem, //copy over data from cart item we found in items[] array
        quantity: existingCartItem.quantity + action.item.quantity, //update its quantity by adding the quantity of the new item to its existing quantity
      };
      updatedItems = [...state.items]; //copying over all previous items to new array (to keep it immutable)
      updatedItems[existingCartItemIndex] = updatedItem; //replacing the old item with our updated item (with updated quantity)
    } else {
      //concat() returns a new array with the argument appended to the end
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalPrice: updatedTotalPrice };
  }

  if (action.type === "REMOVE") {
    //get index of item we're looking for
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    //need current item to check its quantity
    const existingCartItem = state.items[existingCartItemIndex];

    //update total price
    const updatedTotalPrice = state.totalPrice - existingCartItem.price;

    //copy over items into temp array since items in array will change
    let updatedItems;

    if (existingCartItem.quantity === 1) {
      //filters out items that aren't equal to current item's id
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalPrice: updatedTotalPrice };
  }

  if(action.type === "CLEAR"){
    return defaultCartState;
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

  const clearItemsFromCartHandler = (emptyArray) => {
    dispatchCartAction({type: "CLEAR"})
  }

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearItemsFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
