import axios from 'axios';

const productsApi = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export const getProducts = async () => {
  const res = await productsApi.get('/products');
  return res.data.data;
};

export const getProduct = async (productId) => {
  const res = await productsApi.get(`/products/${productId}`);
  return res.data.data;
};
