import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store.ts';

const cartState = (state: RootState) => state.cart;

export const orderSelector = createSelector(cartState, (state) => state);

export const productsSelector = createSelector(
  cartState,
  (state) => state.products,
);

export const productsLengthSelector = createSelector(
  productsSelector,
  (state) => state.reduce((acc, product) => acc + product.quantity, 0),
);

export const activeShopSelector = createSelector(
  cartState,
  (state) => state.shopName,
);

export const totalPriceSelector = createSelector(productsSelector, (products) =>
  products
    .reduce(
      (acc, product) => Number(acc) + Number(product.price) * product.quantity,
      0,
    )
    .toFixed(2),
);
