import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  padding: 10px 20px;
  background-color: darkred;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    list-style-type: none;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 26px;
  }
`;

function Navigation(props) {
  return <NavigationWrapper {...props} />;
}

export default Navigation;
