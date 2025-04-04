import * as React from 'react';
import { Layout } from '../../components/layout';
import { Wholesale } from '../../components/collections/wholesale';
import Seo from '../../components/new-seo';

const WholesalePage = ({ pageContext: { breadcrumb: { crumbs } }, location }) => {
	return (
		<Layout location={location}>
			<Wholesale />
		</Layout>
	);
};

export const Head = ({ location }) => {
    const title='Wholesale Delta 8 THC Edibles | Bulk Delta 8 Gummies'
    const description='Buy Bulk Delta 8 THC Edibles at Wholesale Prices. 1000mg Gummies, Distillate, Edibles, Vape, Disposable Vapes Wholesale and White label.'
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return (
        <Seo
            title={title}
            url={metaUrl}
            description={description}
        />
    );
};

export default WholesalePage;
