import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export const getUsers = async () => {
  const res = await usersApi.get('/users');
  return res.data.data;
};

export const getUser = async (userId) => {
  const res = await usersApi.get(`/users/${userId}`);
  return res.data.data;
};
