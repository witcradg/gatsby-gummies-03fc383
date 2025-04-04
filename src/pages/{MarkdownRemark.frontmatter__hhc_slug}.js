import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { MainHHCTemplate } from '../components/page-components/main/main-hhc-template';
import Seo from '../components/new-seo';

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;
    return (
        <Layout location={frontmatter}>
            <MainHHCTemplate usState={frontmatter.statename} />
        </Layout>
    );
}

export const Head = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;
    const metaTitle = `${frontmatter.statename} HHC Gummies 1000mg – HHC Edibles`;
    const description = `${metaTitle} 1000mg. $59.99 Now Shipping HHC Gummies Nation Wide! Buy HHC Edibles today safe and discrete`;
    const metaUrl = `https://delta8gummies.com/locations/hhc/${frontmatter.hhc_slug}`;

    return (
        <Seo
            type="page"
            title={metaTitle}
            description={description}
            url={metaUrl}
        />
    );
};

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date
                slug
                statename
                map
                hhc_slug
            }
        }
    }
`;
