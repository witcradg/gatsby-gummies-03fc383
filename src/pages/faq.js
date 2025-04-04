import * as React from 'react';
import { Layout } from '../components/layout';
import Seo from '../components/new-seo';
import { Faq } from '../components/page-components/faq';


const FaqPage = (location) => {
    return (
        <Layout location={location}>
            <Faq />
        </Layout>
    );
};

export const Head = ({ location }) => {
    return (
        <Seo
            title={'FAQ | Delta 8 Gummies'}
            url={location.href}
            description={
                'Delta 8 Frequently Asked Questions. People Also Ask Questions and Answers reguarding Delta-8 Gummies'
            }
        />
    );
};

export default FaqPage;
