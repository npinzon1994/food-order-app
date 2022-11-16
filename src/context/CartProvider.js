import CartContext from "./cart-context";

export const CartProvider = (props) => {
    //this provides the concrete context object we'll be working with
    const addItemToCartHandler = (item) => {

    }

    const removeItemFromCartHandler = (id) => {

    }
    
    const cartContext = {
        items: [],
        quantity: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
  
    return (
      <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
  };

  export default CartProvider;