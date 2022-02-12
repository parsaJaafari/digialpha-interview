import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUsersAction, userProfileAction } from './actions';
import GlobalStyle from './globalStyles';
import HomePage from './pages/landing/HomePage';
import ProductListPage from './pages/products/ProductsListPage';
import ProductDetailPage from './pages/products/ProductDetailPage';
import UserDetailPage from './pages/users/UserDetailPage';
import UsersListPage from './pages/users/UsersListPage';

function App() {
  const dispatch = useDispatch();
  const { users = [] } = useSelector((state) => ({ users: state.users.users }));

  const [user, setUser] = useState({ id: null });

  useEffect(() => {
    const getUsers = () => {
      dispatch(getUsersAction());
    };

    getUsers();
  }, []);

  useEffect(() => {
    if (users.length && !user.id) {
      const foundUser = users.find((user) => user.email === 'emma.wong@reqres.in');
      setUser(foundUser);
    }
  }, [users]);

  useEffect(() => {
    if (user?.id) {
      dispatch(userProfileAction(user));
    }
  }, [user.id]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/users" element={<UsersListPage />} />
        <Route path="/users/:userId" element={<UserDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
