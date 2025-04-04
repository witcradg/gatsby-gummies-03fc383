import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import Seo from '../components/new-seo';

const LocationsPage = ({ location, data }) => {
    return (
        <Layout location={location}>
            <div className="popular-product text-center my-8">
                <h2>Locations</h2>
            </div>
            <hr />
            <div className="text-black">
                {data.allMarkdownRemark.nodes.map((node) => renderNode(node))}
                <hr />
            </div>
        </Layout>
    );
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Delta 8 Gummie Stores Near Me | Are Delta 8 Gummies Legal?"
            description="Buy Delta 8 Gummies at your local smoke shops, gas stations, cbd stores. Delta 8 Gummie Stores Near Me. PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware"
            url={location.href}
        />
    );
};

function renderNode(node) {
    const fm = node.frontmatter;
    let msg1 =
        fm.distribution === 'limited'
            ? `Shop Quality Hemp Products in ${fm.statename}. We Ship HHC and Delta 9 to ${fm.statename}. ONLY PURCHASE ON YOUR STATE PAGE.`
            : `Shop Now from ${fm.statename}! Delta 8 is Legal in ${fm.statename}.`;

    let msg2 =
        fm.distribution === 'limited'
            ? `Delta 8 Laws in ${fm.statename}`
            : `Buy Delta 8 in ${fm.statename}`;

    const msg3 = `Are Delta-8 Gummies Legal in ${fm.statename}?`;

    return renderLocationState(fm.legal_slug, fm.statename, msg1, msg2, msg3);
}

function renderLocationState(
    blogLink,
    stateName,
    message,
    btnText,
    btnText1,
    labelText
) {
    const stateForUrl = stateName.toLowerCase().replace(' ', '-');
    const statePage = `/locations/${stateForUrl}/`;

    let label = labelText ? labelText : 'Related content:';

    return (
        <div key={stateForUrl} className="locationchild md:flex">
            <div className="w-full md:w-1/5 text-2xl text-black font-bold flex items-center">
                {stateName}
            </div>
            <div className="w-full md:w-3/5 flex items-center justify-center">
                {message}
            </div>
            <div className="w-full md:w-1/5">
                <Link className="btn btn-info text-white w-full" to={statePage}>
                    {btnText}
                </Link>
                <Link className="w-full underline" to={`${blogLink}`}>
                    <span className="text-black font-normal no-underline">
                        {label}
                    </span>
                    {btnText1}
                </Link>
            </div>
        </div>
    );
}
export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { statename: { ne: null } } }
            sort: { frontmatter: { statename: ASC } }
        ) {
            nodes {
                html
                frontmatter {
                    date
                    slug
                    legal_slug
                    statename
                    distribution
                }
            }
        }
    }
`;

export default LocationsPage;
