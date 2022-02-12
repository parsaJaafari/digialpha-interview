import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../actions/index';
import Container from '../../components/Container';
import UserItem from '../../components/layout/UserItem';
import Topbar from '../../components/layout/Topbar';
import Main from '../../components/Main';
import WrappedLink from '../../components/Link';

function UsersListPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsers = () => {
      dispatch(getUsersAction());
    };

    getUsers();
  }, []);

  const { users } = useSelector((state) => ({ users: state.users.users }));

  const usersList = users?.map((user) => {
    return (
      <WrappedLink to={`/users/${user.id}`}>
        <UserItem avatar={user.avatar} name={`${user.first_name} ${user.last_name}`} />
      </WrappedLink>
    );
  });

  return (
    <Container>
      <Topbar />
      <Main>
        <h1>List Of Users</h1>
        {usersList}
      </Main>
    </Container>
  );
}

export default UsersListPage;
