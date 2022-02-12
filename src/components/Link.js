import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function LinkComponent(props) {
  return (
    <div>
      <LinkWrapper {...props} />
    </div>
  );
}

export default LinkComponent;
