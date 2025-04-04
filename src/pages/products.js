import * as React from 'react';
import { Layout } from '../components/layout';
import { AllCollections } from '../components/collections/all';
import Seo from '../components/new-seo';

const ProductsPage = ({ pageContext: { breadcrumb: { crumbs } }, location }) => {
	return (
		<Layout location={location}>
			<AllCollections />
		</Layout>
	);
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Collections | Delta 8 Gummies"
            description="Delta 8 Gummie Bears 1000MG $49.99 $59.99 PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware"
            url={location.href}
        />
    );
};

export default ProductsPage;
