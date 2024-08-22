import React from 'react';
import styled from 'styled-components';
import huskyImg from '../../assets/images/husky.png'; // Adjust the path as necessary

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #a9c2e6cc;
  margin-bottom: -40px;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-family: 'Concert One', cursive;
  font-size: 4em;
  color: #ffffff;
  margin: 0;
`;

const HeaderImg = styled.div`
  margin-left: 20px; // Adjust spacing as needed

  img {
    width: 50%;
  }
`;

const AppHeader = () => (
  <Header>
    <HeaderTitle>Find a Pet</HeaderTitle>
    <HeaderImg>
      <img src={huskyImg} alt="husky-and-cat" />
    </HeaderImg>
  </Header>
);

export default AppHeader;
