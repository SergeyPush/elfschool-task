import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreateProduct, Product } from '../interfaces/shop.interface';

interface CartSliceInterface {
  user: never | null;
  products: CreateProduct[];
  total: number;
}

const initialState: CartSliceInterface = {
  user: null,
  products: [],
  total: 0,
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
        state.products.push({ ...actions.payload, quantity: 1 });
      }
      if (existingProduct) {
        existingProduct.quantity += 1;
      }

      state.total = state.products.reduce((acc, item) => acc + item.price, 0);
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
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
