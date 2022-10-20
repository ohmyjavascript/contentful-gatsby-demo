import React from 'react';
import { Layout } from 'components';
import { graphql } from 'gatsby';
// Pass in JSON to this
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// by default pageContent is injected into props
const ContentfulPage = (props) => {
  console.log(props);
  return (
    <Layout>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulPage.pageContent.raw)
      )}
    </Layout>
  );
};

// This is a page query. SO it an can be exported.

export const query = graphql`
  query PageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      slug
      title
      pageContent {
        raw
      }
    }
  }
`;

export default ContentfulPage;
