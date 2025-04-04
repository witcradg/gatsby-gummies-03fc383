import * as React from 'react';
import { Layout } from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Connect } from '../components/page-components/connect';
import Seo from '../components/new-seo';

const ConnectPage = ({ pageContext: { breadcrumb: { crumbs } }, location }) => {
	return (
		<Layout location={location}>
			<Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
			<Connect />
		</Layout>
	);
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Delta 8 Gummies Reviews: THC Gummies Reviews & Reports"
            url={location.href}
            description="Reviews of Delta 8 Gummies. See Honest Delta 8 Reviews from Real Consumers. Top Delta 8 Gummies based on Customer Delta-8 Reviews. Watch Delta 8 Review Videos or Read Delta 8 Review that were posted online."
    />
    );
};

export default ConnectPage;
