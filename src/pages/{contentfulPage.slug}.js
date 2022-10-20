import React from 'react';
import { Layout, RichText, SEO } from 'components';
import { graphql } from 'gatsby';

const ContentfulPage = (props) => {
  const { raw, references } = props.data.contentfulPage.pageContent;
  return (
    <Layout>
      <SEO
        title={props.data.contentfulPage.title}
        description={props.data.contentfulPage.description}
      />
      {!!props.data.contentfulPage.pageContent && (
        <RichText references={references} raw={raw} />
      )}
    </Layout>
  );
};

// This is a page query. SO it an can be exported.

export const query = graphql`
  query PageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      description
      slug
      title
      pageContent {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          ... on ContentfulHero {
            __typename
            contentful_id
            heading
            subHeading
            backgroundImage {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
          ... on ContentfulPriceGroup {
            __typename
            contentful_id
            priceOptions {
              id
              title
              amountPerMonth
              description {
                raw
              }
              mostPopular
            }
          }
        }
      }
    }
  }
`;

export default ContentfulPage;
