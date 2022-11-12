import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { CartItemContextProvider } from "./context/cart-item-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartItemContextProvider>
    <App />
  </CartItemContextProvider>
);
