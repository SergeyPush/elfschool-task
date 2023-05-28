import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store.ts';

const rootState = (state: RootState) => state;

export const productsSelector = createSelector(
  rootState,
  (state) => state.cart.products,
);

export const productsLengthSelector = createSelector(
  productsSelector,
  (state) => state.reduce((acc, product) => acc + product.quantity, 0),
);

export const totalPriceSelector = createSelector(productsSelector, (products) =>
  products.reduce(
    (acc, product) => acc + Number(product.price) * product.quantity,
    0,
  ),
);
