import { GET_USER, GET_USERS, USER_PROFILE, GET_PRODUCT, GET_PRODUCTS } from './types';
import { getUsers, getUser } from '../services/api/users';
import { getProducts, getProduct } from '../services/api/products';

export const userProfileAction = (userObject) => (dispatch) => {
  dispatch({
    type: USER_PROFILE,
    payload: userObject,
  });
};

export const getUsersAction = () => async (dispatch) => {
  const res = await getUsers();

  dispatch({
    type: GET_USERS,
    payload: res,
  });
};

export const getUserAction = (userId) => async (dispatch) => {
  const res = await getUser(userId);

  dispatch({
    type: GET_USER,
    payload: res,
  });
};

export const getProductsAction = () => async (dispatch) => {
  const res = await getProducts();

  dispatch({
    type: GET_PRODUCTS,
    payload: res,
  });
};

export const getProductAction = (productId) => async (dispatch) => {
  const res = await getProduct(productId);

  dispatch({
    type: GET_PRODUCT,
    payload: res,
  });
};

export const filterOldProductsAction = (filter) => (dispatch, state) => {
  if (filter) {
    const products = state().products.products;
    const filteredProducts = products.filter((product) => product.year >= 2004);

    dispatch({
      type: GET_PRODUCTS,
      payload: filteredProducts,
    });
  } else {
    dispatch(getProductsAction());
  }
};
