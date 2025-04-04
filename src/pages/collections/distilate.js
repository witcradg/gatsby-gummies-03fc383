import * as React from 'react';
import { Layout } from '../../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Distilate } from '../../components/collections/distilate';
import Seo from '../../components/new-seo';

const DistilatePage = ({
    pageContext: {
        breadcrumb: { crumbs }
    },
    location
}) => {
    return (
        <Layout location={location}>
            <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
            <Distilate />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = 'Delta 8 Distillate | Delta 8 Gummies';
    const description =
        'Buy Pure Delta 8 Distillate Online. Between 90-95% Delta 8 THC made from industrial help. PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default DistilatePage;
