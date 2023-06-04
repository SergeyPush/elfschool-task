import { AxiosResponse } from 'axios';
import { Order, OrderResponse } from '../interfaces/order.interface';
import api from './api';
import { User } from '../interfaces/user.interface';

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
    const response = await api.post<AxiosResponse<OrderResponse>>(`/order`, {
      ...payload,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async (email: string) => {
  try {
    const response = await api.get<AxiosResponse<User[]>>(
      `/order?email=${email}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
