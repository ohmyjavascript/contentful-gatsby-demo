import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MenuWrapper, MenuItem, SubMenuItemWrapper } from './style';

const Menu = () => {
  const result = useStaticQuery(graphql`
    fragment menuItemData on ContentfulMenuItem {
      id
      label
      page {
        ... on ContentfulPage {
          slug
        }
        ... on ContentfulBlog {
          slug
        }
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
    <MenuWrapper>
      {result.contentfulMenu.menuItems.map((item) => {
        return (
          <MenuItem key={item.id}>
            {!item.subMenuItems ? (
              <Link to={`/${item.page.slug}`}> {item.label} </Link>
            ) : (
              <SubMenuItemWrapper>
                <div>{item.label}</div>
                <div>
                  {item.subMenuItems?.map((subItem) => (
                    <div key={subItem.id}>
                      <Link to={`/${subItem.page.slug}`}>{subItem.label}</Link>
                    </div>
                  ))}
                </div>
              </SubMenuItemWrapper>
            )}
          </MenuItem>
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
