import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Topbar from '../../components/layout/Topbar';
import Main from '../../components/Main';
import { getUserAction } from '../../actions/index';
import styled from 'styled-components';

const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

function UserDetailPage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { users: user } = useSelector((state) => ({ users: state.users.user }));

  useEffect(() => {
    dispatch(getUserAction(userId));
  }, [userId, dispatch]);

  const userDetail = (
    <>
      <Avatar src={user.avatar} />
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <p>email: {user.email}</p>
    </>
  );

  return (
    <Container>
      <Topbar />
      <Main>{userDetail}</Main>
    </Container>
  );
}

export default UserDetailPage;
