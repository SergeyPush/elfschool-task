import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../interfaces/shop.interface';
import { User } from '../interfaces/user.interface';
import { Order } from '../interfaces/order.interface';

const initialState: Order & { shopName: string } = {
  user: {
    name: '',
    email: '',
    address: '',
    phone: '',
  },
  products: [],
  shopName: '',
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
          price: Number(actions.payload.price),
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
      console.log(state.products.length);
      if (!state.products.length) {
        state.shopName = '';
      }
    },
    addUser: (state, actions: PayloadAction<User>) => {
      state.user = { ...actions.payload };
    },
    clearCart: (state) => {
      state.products = [];
    },
    selectShop: (state, actions: PayloadAction<string>) => {
      state.shopName = actions.payload;
    },
    removeShop: (state) => {
      state.shopName = '';
    },
  },
});

export const { addToCart, removeFromCart, addUser, selectShop, removeShop } =
  cartSlice.actions;
export default cartSlice.reducer;
