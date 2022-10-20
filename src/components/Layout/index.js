import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

// Global font added via gatsby-plugin-google-fonts
const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif; 
    line-height: 1.2;
    margin: 0;
    padding: 0;
    
  }
  h1{
    font-size: 2em;
  }
`;

// This is not a page query. So cannot be exported. Instead, use the useStaticQuery on
// non page components to fetch data

export const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <section>{children}</section>
    </div>
  );
};
