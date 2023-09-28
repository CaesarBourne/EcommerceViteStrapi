import { createSlice } from "@reduxjs/toolkit";
export type cartType = [id: string];
export type itemType = { id: string; count: number };
export type itemslistType = Array<itemType>;
export interface cartItemsType {
  isCartOpen: Boolean;
  cart: cartType;
  items: [];
}
export interface cartStateType {
  isCartOpen: boolean;
  cart: Array<any>;
  items: itemslistType;
}
const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cartSliceState",
  initialState: initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cart = action.payload;
    },
    addItemToCart: (state: cartStateType, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeItemFromCart: (state: cartStateType, action) => {
      state.cart = state.cart.filter(
        (item: itemType) => item.id == action.payload.id
      );
    },
    increaseItemCount: (state: cartStateType, action) => {
      state.cart = state.cart.map((item: itemType) => {
        if (item.id == action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseItemCount: (state: cartStateType, action) => {
      state.cart = state.cart.map((item: itemType) => {
        if (item.id == action.payload.id) {
          item.count--;
        }
        return item;
      });
    },

    setIsItemCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setCartItems,
  addItemToCart,
  removeItemFromCart,
  increaseItemCount,
  decreaseItemCount,
  setIsItemCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
