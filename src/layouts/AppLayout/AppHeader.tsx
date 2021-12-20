import React from 'react';
import styled from 'styled-components';
import { AppGutter } from '@layouts/AppStyle/AppGutter';

const Header = styled.header`
  width: 100%;
  ${AppGutter} {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Title = styled.h1`
  font-size: 3.4rem;
  padding: 10px;
  margin: 0;
`;
interface Prop {}
const AppHeader = () => {
  return (
    <Header>
      <AppGutter>
        <Title>this is header</Title>
      </AppGutter>
    </Header>
  );
};
export default AppHeader;
