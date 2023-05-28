import { Order } from '../interfaces/order.interface';
import api from './api';

export const getListOfShops = async () => {
  try {
    const response = await api.get('/shop');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getShopWithListOfProducts = async (shopId: number) => {
  try {
    const response = await api.get(`/shop/${shopId}?products=true`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const placeOrder = async (payload: Order) => {
  try {
    const response = await api.post(`/order`, { ...payload });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
