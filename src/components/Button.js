import styled from 'styled-components';

function Button(props) {
  const Button = styled.button`
    padding: 20px 40px;
    border-radius: 50px;
    background-color: white;
    color: black;
    font-family: inherit;
    font-weight: 400;
    font-size: 17px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: inherit;
    }
  `;

  return <Button {...props}></Button>;
}

export default Button;
