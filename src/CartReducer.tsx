interface CartItem {
    id: number;
    name: string;
    price: number;
  }
  
  type CartAction =
    | { type: 'ADD_ITEM'; item: CartItem }
    | { type: 'REMOVE_ITEM'; id: number };
  
  const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, action.item];
      case 'REMOVE_ITEM':
        return state.filter(item => item.id !== action.id);
      default:
        return state;
    }
  };
  
  export default cartReducer;
  