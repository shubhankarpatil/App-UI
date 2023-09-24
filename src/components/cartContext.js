import React, { createContext, useContext, useState, useEffect } from 'react';

const CART_STORAGE_KEY = 'cart';
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItemAdded, setCartItemAdded] = useState(sessionStorage.getItem('cartItemAdded') === 'true');

  useEffect(() => {
    const storedCart = sessionStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

//   useEffect(() => {
//     sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
//   }, []);

  const addToCart = (product) => {
    setCartItemAdded(true);

    setCart((prevCart) => {
      console.log('prevCart', prevCart, product.productId, product)
      const productsToAdd = Array.isArray(product) ? product : [product];
      // const existingProductIndex = prevCart.findIndex((item) => item.productId === product.productId);
      // const existingProductIndex = prevCart.findIndex((item) => {
      //   return productsToAdd.some((productItem) => item.productId === productItem.productId);
      // });
      const existingProductIndex = productsToAdd.map((productItem) => {
        return prevCart.findIndex((item) => item.productId === productItem.productId);
      });      
      console.log('existingProductIndex', existingProductIndex, prevCart[existingProductIndex])

      // if (existingProductIndex !== -1 && prevCart[existingProductIndex]?.quantity < 3) {
      if (!existingProductIndex.includes(-1) && prevCart[existingProductIndex]?.quantity < 3) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity++;
        return updatedCart;
      // if (!existingProductIndex.includes(-1) && existingProductIndex.every((index) => prevCart[index].quantity < 3)) {
        //   const updatedCart = [...prevCart];
        //   existingProductIndex.forEach((index) => { updatedCart[index].quantity++; });
        // return updatedCart;
      } else if (existingProductIndex.includes(-1)) {
        return [...prevCart, { ...product, quantity: 1 }];
      }
      return prevCart;
    });
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  };
  
  const isProductInCart = (productId) => cart.some((item) => item.productId === productId);

  return (
    <CartContext.Provider value={{ cart, cartItemAdded, addToCart, isProductInCart }}>
      {children}
    </CartContext.Provider>
  );
};
