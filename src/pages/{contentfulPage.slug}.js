import React from 'react';
import { Layout } from 'components';
import { graphql } from 'gatsby';

// by default pageContent is injected into props
const ContentfulPage = (props) => {
  console.log(props);
  return (
    <Layout>
      <h1> Contentful Page</h1>
    </Layout>
  );
};

// This is a page query. SO it an can be exported.

export const query = graphql`
  query PageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      slug
      title
    }
  }
`;

export default ContentfulPage;
