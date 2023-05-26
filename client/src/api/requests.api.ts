import api from './api';

// class AxiosErrorMessage extends Error {
//   constructor(message: AxiosError) {
//     super('Error');
//     this.message = message.response?.data?.message;
//   }
// }

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
