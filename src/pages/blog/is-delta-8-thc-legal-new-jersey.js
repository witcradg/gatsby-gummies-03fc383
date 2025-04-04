import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/legal-new-jersey-delta-8.png';
import { IsDelta8THCLegalState } from '../../components/blog/is-delta-8-thc-legal-state';
import Seo from '../../components/new-seo';

export const Head = ({ location, data }) => {
    const image = location.origin + featuredImage;
    const md = data.markdownRemark.frontmatter;
    const postTitle = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`;
    const title = `${postTitle} | Delta 8 Gummies`;
    const description = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`;

    return (
        <Seo
            type="page"
            title={title}
            description={description}
            image={image}
            url={location.href}
        />
    );
};

const IsDelta8THCLegalNewJerseyPage = ({ location, data }) => {
    const md = data.markdownRemark.frontmatter;
    const postTitle = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`;

    return (
        <Layout location={location}>
            <IsDelta8THCLegalState title={postTitle} data={data}>
                <h2>
                    <strong>Delta 8 Laws in {md.statename}!</strong>
                </h2>
                <p>
                    Following the federal enactment of the Farm Bill in 2018,
                    {md.statename} passed Senate Bill 1020, a piece of state
                    legislation removing all hemp derivatives, cannabinoids,
                    terpenes, flavonoids, and all other compounds from its
                    comprehensive Drug Abuse Prevention and Control Act.
                </p>
                <p>
                    This means hemp-derived delta-8 THC is legal under state
                    law, which coincides with federal law.
                </p>
                <h2>
                    <strong>
                        What To Look For When Buying Delta-8 Gummies from A
                        Recreational Cannabis Dispensary {md.statename}?
                    </strong>
                </h2>
            </IsDelta8THCLegalState>
        </Layout>
    );
};

export const query = graphql`
    query {
        markdownRemark(frontmatter: { statename: { eq: "New Jersey" } }) {
            frontmatter {
                slug
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
            }
        }
    }
`;

export default IsDelta8THCLegalNewJerseyPage;
