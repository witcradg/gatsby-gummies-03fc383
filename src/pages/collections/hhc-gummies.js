import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { Hhc } from '../../components/collections/hhc';
import { Layout } from '../../components/layout';
import { HhcBlogRow } from '../../components/page-components/main/hhc-blog-row';
import { Section } from '../../components/page-components/main/section';
import Seo from '../../components/new-seo';

export const Head = ({ location }) => {
    const title = 'Buy HHC Gummies Online | 1000mg HHC Edibles';
    const description =
        'Buy HHC Edibles Online! 1000mg Gummies, Distillate, Edibles, Vape, Disposable Vapes Wholesale and White label.';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

const HHCPage = ({ location, data }) => {
    const body = data.allMarkdownRemark.nodes;

    return (
        <Layout location={location}>
            <Hhc />
            <Section>
                <HhcBlogRow />
            </Section>

            {body.length > 0 ? (
                <h4 className="text-center pt-8 pb-0">
                    Where to Buy Delta 8 in your state
                </h4>
            ) : null}
            <div className="cities-list-wrapper">
                <div className="cities-list">
                    <div className="city-list">
                        {body.map((item, index) => formatState(item, index))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

function formatState(node, idx) {
    return (
        <div key={idx} className="city-list-element">
            <Link className="text-black" to={node.frontmatter.hhc_slug}>
                <span className="whitespace-nowrap">
                    {node.frontmatter.statename}
                </span>
            </Link>
        </div>
    );
}

export const query = graphql`
    query allStates {
        allMarkdownRemark(
            filter: {
                frontmatter: { statename: { ne: null }, hhc_slug: { ne: null } }
            }
        ) {
            nodes {
                html
                frontmatter {
                    slug
                    statename
                    hhc_slug
                    legal_slug
                }
            }
        }
    }
`;

export default HHCPage;
