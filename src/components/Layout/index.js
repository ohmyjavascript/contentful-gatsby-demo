import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

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
  const result = useStaticQuery(graphql`
    fragment menuItemData on ContentfulMenuItem {
      id
      label
      page {
        slug
      }
    }

    query MenuQuery {
      contentfulMenu {
        menuItems {
          ...menuItemData
          subMenuItems {
            ...menuItemData
          }
        }
      }
    }
  `);

  return (
    <div>
      <GlobalStyle />
      <div>
        {result.contentfulMenu.menuItems.map((item) => {
          return (
            <div key={item.id}>
              <div> {item.label} </div>
              {item.subMenuItems?.map((subItem) => (
                <div key={subItem.id}>
                  <div> {subItem.label} </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <section>{children}</section>
    </div>
  );
};
