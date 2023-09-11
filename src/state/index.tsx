import { createSlice } from "@reduxjs/toolkit";
type cartType = [id: string];
type itemType = { id: string };
export interface cartItemsType {
  isCartOpen: Boolean;
  cart: cartType;
  items: [];
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
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
