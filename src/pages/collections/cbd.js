import * as React from 'react';
import { Layout } from '../../components/layout';
import { CbdGummies } from '../../components/collections/cbd-gummies';
import Seo from '../../components/new-seo';

const CbdGummiesPage = ({ pageContext: { breadcrumb: { crumbs } }, location }) => {
	return (
		<Layout location={location}>
			<CbdGummies />
		</Layout>
	);
};

export const Head = ({ location }) => {
    const title="CBD GUMMIES | CBD Gummie EDIBLES"
    const description="CBD GUMMIES FREE SHIPPING on all flavors of our CBD GUMMIES. Buy 2 Get 1 Free CBD Gummies and Free Shipping over $250 on all orders."
    
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default CbdGummiesPage;
