import * as React from 'react';
import { Layout } from '../../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Tincture } from '../../components/collections/tincture';
import Seo from '../../components/new-seo';

const TincturePage = ({ pageContext: { breadcrumb: { crumbs } }, location }) => {
	return (
		<Layout location={location}>
			<Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
			<Tincture />
		</Layout>
	);
};

export const Head = ({ location }) => {
    const title="Tincture | Delta 8 Gummies"
    const description="Delta 8 Tincture PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware"
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default TincturePage;
