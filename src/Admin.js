import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';

const Admin = () => {
  return (
    <AdminPageWrapper>
      <Header />
      <AdminPageContainer>
        <Menu />
        <Content />
      </AdminPageContainer>
    </AdminPageWrapper>
  );
};

export default Admin;

const AdminPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  overflow: hidden;
`;

const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
