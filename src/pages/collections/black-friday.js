import * as React from 'react';
import { Layout } from '../../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { BlackFriday } from '../../components/collections/black-friday';
import Seo from '../../components/new-seo';

const BlackFridayPage = ({ pageContext: { breadcrumb: { crumbs } }, location }) => {
	return (
		<Layout location={location}>
			<Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
			<BlackFriday />
		</Layout>
	);
};

export const Head = ({ location }) => {
    const title="Black Friday Delta 8 Gummies Sale. 3000MG, 5000MG, 10,000MG Delta 8 Gummies"
    const description="Black Friday Delta 8 Gummies Sale. Buy a sample pack of 3,000MG, 5,000MG or 10,000MG, 20,000MG Delta 8 THC Gummies. Our flavors include Bears, Worms, Peach Rings, Apple Rings, Vegan Sour Squares, Vegan Orange Slices."
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default BlackFridayPage;
