import { createContext, useEffect, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};


export const removeCartItem = (cartItems, productToremove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToremove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem=>cartItem.id !== productToremove.id)
  }

    return cartItems.map((cartItem) =>
      cartItem.id === productToremove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [carCount, setCartCount] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const removeItemToCart = (productToRemove) =>
    setCartItems(removeCartItem(cartItems, productToRemove));  

    const clearItemFromCart = (cartItemToClear) => {
      setCartItems(clearCartItem(cartItems, cartItemToClear));
    };     

    useEffect(()=>{
        const newCartCount =cartItems.reduce((total,cartItem)=> total+cartItem.quantity,0);
        setCartCount(newCartCount)
    },[cartItems]);

    useEffect(()=>{
      const newCartTotal =cartItems.reduce((total,cartItem)=> total + (cartItem.quantity * cartItem.price),0);
      setCartTotal(newCartTotal)
  },[cartItems])

  const value = { 
                  isCartOpen, 
                  setIsCartOpen, 
                  cartItems, 
                  addItemToCart,
                  carCount,
                  removeItemToCart,
                  clearItemFromCart,
                  cartTotal};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};