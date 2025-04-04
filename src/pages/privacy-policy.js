import * as React from 'react';
import { Layout } from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { PrivacyPolicy } from '../components/page-components/privacy-policy';
import Seo from '../components/new-seo';

const PrivacyPolicyPage = ({ pageContext: { breadcrumb: { crumbs } }, location }) => {
	return (
		<Layout location={location}>
			<Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
			<PrivacyPolicy />
		</Layout>
	);
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Privacy Policy | Delta 8 Gummies"
            description="Be sure to read our privacy policy."
            url={location.href}
        />
    );
};

export default PrivacyPolicyPage;
