import styled from 'styled-components';

const ContainerWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

function Container(props) {
  return <ContainerWrapper {...props} />;
}

export default Container;
