import { createSlice } from "@reduxjs/toolkit";
type cartType = [id: string];
type itemType = { id: string; count: number };
export interface cartItemsType {
  isCartOpen: Boolean;
  cart: cartType;
  items: [];
}
interface stateType {
  isCartOpen: boolean;
  cart: Array<any>;
  items: Array<itemType>;
}
const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cart = action.payload;
    },
    addItemToCart: (state: any, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item: itemType) => item.id == action.payload.id
      );
    },
    increaseItemCount: (state: stateType, action) => {
      state.cart = state.cart.map((item: itemType) => {
        if (item.id == action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
