import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  users: usersReducer,
  profile: authReducer,
  products: productsReducer,
});
