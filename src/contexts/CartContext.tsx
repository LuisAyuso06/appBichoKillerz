import React, { createContext, useReducer, useContext } from 'react';
import cartReducer from '../CartReducer';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', item });
  const removeItem = (id: number) => dispatch({ type: 'REMOVE_ITEM', id });

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
