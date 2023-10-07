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

  const addToCart = (product) => {
    setCartItemAdded(true);
  
    setCart((prevCart) => {
      const productsToAdd = Array.isArray(product) ? product : [product];
  
      const updatedCart = prevCart.map((item) => {
        const productToUpdate = productsToAdd.find((productItem) => item.productId === productItem.productId);
  
        if (productToUpdate && productToUpdate.quantity <= 3) {
          return { ...item, quantity: productToUpdate.quantity };
        }
  
        return item;
      });
  
      productsToAdd.forEach((productItem) => {
        if (!updatedCart.some((item) => item.productId === productItem.productId) && productItem.quantity <= 3) {
          updatedCart.push({ ...productItem, quantity: 1 });
        }
      });
      return updatedCart;
    });
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  };
  
  const isProductInCart = (productId) => cart.some((item) => item.productId === productId);

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.productId !== productId);
      sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, cartItemAdded, addToCart, isProductInCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
