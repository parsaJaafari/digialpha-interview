import styled from 'styled-components';

const UserItemWrapper = styled.div`
  background-color: rgba(66, 69, 67, 0.95);
  display: flex;
  align-items: center;
  padding: 30px 17px;
  margin-bottom: 15px;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

function UserItem(props) {
  return (
    <UserItemWrapper>
      <Avatar src={props.avatar} />

      <div>{props.name}</div>
    </UserItemWrapper>
  );
}

export default UserItem;
