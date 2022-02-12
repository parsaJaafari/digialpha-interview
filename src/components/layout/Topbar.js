import React from 'react';
import Navigation from '../Navigation';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import WrappedLink from '../../components/Link';

const ProfileWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

function Topbar() {
  const { profile } = useSelector((state) => ({ profile: state.profile }));

  return (
    <Navigation>
      <ul>
        <li className="logo">
          <WrappedLink to="/">DigiAlpha</WrappedLink>
        </li>
        <ProfileWrapper>
          <ImageWrapper src={profile.avatar} />
          <div>
            {profile.first_name} {profile.last_name}
          </div>
        </ProfileWrapper>
      </ul>
    </Navigation>
  );
}

export default Topbar;
