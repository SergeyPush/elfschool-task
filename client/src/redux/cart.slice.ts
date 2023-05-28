import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../interfaces/shop.interface';
import { User } from '../interfaces/user.interface';
import { Order } from '../interfaces/order.interface';

const initialState: Order = {
  user: {
    name: '',
    email: '',
    address: '',
    phone: '',
  },
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<Product>) => {
      const existingProduct = state.products.find(
        (product) => product.id === actions.payload.id,
      );
      if (!existingProduct) {
        state.products.push({
          ...actions.payload,
          quantity: 1,
        });
      }
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    removeFromCart: (state, actions: PayloadAction<Product>) => {
      const { id } = actions.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id,
      );

      if (existingProduct) {
        existingProduct.quantity -= 1;

        if (existingProduct.quantity === 0) {
          state.products = state.products.filter(
            (product) => product.id !== id,
          );
        }
      }
    },
    addUser: (state, actions: PayloadAction<User>) => {
      state.user = { ...actions.payload };
    },
  },
});

export const { addToCart, removeFromCart, addUser } = cartSlice.actions;
export default cartSlice.reducer;
