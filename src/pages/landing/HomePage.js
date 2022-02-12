import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Topbar from '../../components/layout/Topbar';
import WrappedLink from '../../components/Link';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Home() {
  return (
    <Container>
      <Topbar />
      <Header>
        <h1>Welcome to the Digi Alpha App</h1>

        <ButtonContainer>
          <Button>
            <WrappedLink to="/products">list of products</WrappedLink>
          </Button>
          <Button>
            <WrappedLink to="/users">list of users</WrappedLink>
          </Button>
        </ButtonContainer>
      </Header>
    </Container>
  );
}

export default Home;
