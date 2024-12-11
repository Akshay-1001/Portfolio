import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Arial', sans-serif;
  }
`;

const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%);
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const LaunchPage = () => {
  return (
    <>
      <GlobalStyle />
      <FullScreenContainer>
        <Header>
          <h1>Welcome to My Portfolio</h1>
        </Header>
        <MainContent>
          <p>This is the main content area.</p>
        </MainContent>
        <Footer>
          <p>&copy; 2023 My Portfolio</p>
        </Footer>
      </FullScreenContainer>
    </>
  );
};

export default LaunchPage;