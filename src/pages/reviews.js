import * as React from 'react';
import { Layout } from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Reviews } from '../components/page-components/reviews';
import Seo from '../components/new-seo';

const ReviewsPage = ({
    pageContext: {
        breadcrumb: { crumbs }
    },
    location
}) => {
    return (
        <Layout location={location}>
            <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
            <Reviews />
        </Layout>
    );
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Delta 8 Gummies Reviews: THC Gummies Reviews & Reports"
            description="Reviews of Delta 8 Gummies. See Honest Delta 8 Reviews from Real Consumers. Top Delta 8 Gummies based on Customer Delta-8 Reviews. Watch Delta 8 Review Videos or Read Delta 8 Review that were posted online."
            url={location.href}
        />
    );
};

export default ReviewsPage;
