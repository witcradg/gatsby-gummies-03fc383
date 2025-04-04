import * as React from 'react';
import { Layout } from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Contact } from '../components/page-components/contact';
import Seo from '../components/new-seo';

const ContactPage = ({ pageContext: { breadcrumb: { crumbs } }, location }) => {
	return (
		<Layout location={location}>
			<Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
			<Contact />
		</Layout>
	);
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Contact Requests | Delta 8 Gummies"
            description="Get in touch with Delta 8 Gummies for any requests you might need. PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware"
            url={location.href}
    />
    );
};

export default ContactPage;
