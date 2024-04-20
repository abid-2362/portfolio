import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import { ActionType } from '../types/types.ts';
import { RestaurantCartItem } from '../types/Restaurant/RestaurantProduct.ts';

/* CONSTANTS */
const ADD_TO_CART = 'ADD_TO_CART';

/* /CONSTANTS */

type State = RestaurantCartItem[];
const initialState: State = [];
const cartReducer = (state: State, action: ActionType<any>) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItemIndex = state.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, update its quantity
        const updatedState = [...state];
        updatedState[existingItemIndex].qty += newItem.qty;
        return updatedState;
      } else {
        // Item doesn't exist in the cart, add it
        return [...state, newItem];
      }

    default:
      return state;
  }
};

const addToCart = (dispatch: React.Dispatch<ActionType<RestaurantCartItem>>) => async (item: RestaurantCartItem) => {
  try {
    // console.log('CartContext.ts', 'item', item.qty);
    // if required in the future, dispatch can be used like this.
    dispatch({ type: ADD_TO_CART, payload: item });
  } catch (err) {}
};

export interface IDiaryContext {
  state: State;
  addToCart: (cartItem: RestaurantCartItem) => void;
}

const _ = createDataContext(
  cartReducer,
  {
    addToCart,
  },
  initialState,
);

const { Context }: { Context: React.Context<IDiaryContext> } = _;
const { Provider } = _;

export { Context as CartContext, Provider as CartProvider };
