import * as React from 'react';
import { Layout } from '../../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { WholesaleCbd } from '../../components/collections/wholesale-cbd';
import Seo from '../../components/new-seo';

const WholesaleCbdPage = ({ pageContext: { breadcrumb: { crumbs } }, location }) => {
	return (
		<Layout location={location}>
			<Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
			<WholesaleCbd />
		</Layout>
	);
};

export const Head = ({ location }) => {
    const title="Wholesale Cbd | Delta 8 Gummies"
    const description="Wholesale Cbd Products PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware"
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return (
        <Seo
            title={title}
            url={metaUrl}
            description={description}
        />
    );
};

export default WholesaleCbdPage;
