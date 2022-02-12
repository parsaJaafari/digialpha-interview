import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

function Header(props) {
  return <HeaderWrapper {...props} />;
}

export default Header;
