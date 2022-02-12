import styled from 'styled-components';

const MainWrapper = styled.section`
  padding: 10px 60px;
`;

function Main(props) {
  return <MainWrapper {...props} />;
}

export default Main;
