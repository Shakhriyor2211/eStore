import { createContext, useState } from "react";
export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <ProductContext.Provider value={{ cartItem, setCartItem }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
