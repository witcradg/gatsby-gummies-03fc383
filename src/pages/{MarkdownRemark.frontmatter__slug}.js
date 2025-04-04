import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { MainTemplate } from '../components/page-components/main/main-template';
import { MainLimitedStateTemplate } from '../components/page-components/main/main-limited-state-template';
import Seo from '../components/new-seo';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <Layout location={frontmatter}>
      {frontmatter.distribution === 'standard'
        ? <MainTemplate frontmatter={frontmatter} />
        : <MainLimitedStateTemplate usState={frontmatter.statename} />
      }
    </Layout>
  );
}

export const Head = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const metaTitle = `${frontmatter.statename} Delta 8 THC Gummies – Delta-8 ${frontmatter.statename} Delta 9 Gummies`;
  const description = `${metaTitle} Quality Hemp Derived D8 ${frontmatter.statename} thc gummies. Shop ${frontmatter.statename} Delta 8 THC Gummies are legal and strong! Eat Responsibly from D8 CBD Gummies.`;
  const metaUrl = `https://delta8gummies.com/${frontmatter.slug}`;

  return (
    <Seo
      type="page"
      title={metaTitle}
      description={description}
      image={frontmatter.image2.publicURL}
      url={metaUrl}
    />
  );
};

export const pageQuery = graphql`
	query($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				date
				slug
                hhc_slug
                legal_slug
				statename
                distribution
                legalvideo
                featuredImage {
                    childImageSharp {
                      gatsbyImageData
                    }
                    publicURL
                  }
                image2 {
                    childImageSharp {
                      gatsbyImageData
                    }
                    publicURL
                  }
				map
			}
		}
	}
`;
