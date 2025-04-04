import * as React from 'react';
import { Script } from 'gatsby';
import { Layout } from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { OrderTracking } from '../components/page-components/order-tracking';
import Seo from '../components/new-seo';

const OrderTrackingPage = ({
    pageContext: {
        breadcrumb: { crumbs }
    },
    location
}) => {
    return (
        <Layout location={location}>
            <Script id="order-tracking-aftership">{`(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n))return;r=e.createElement(t);r.id=n;r.src="https://button.aftership.com/all.js?username=delta8gummies";i.parentNode.insertBefore(r,i)})(document,"script","aftership-jssdk")`}</Script>
            <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
            <OrderTracking />
        </Layout>
    );
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Track Your Orders Online | Delta 8 Gummies"
            description="Track your Online Order directly to your door from Delta 8 Gummies. No medial card required. "
            url={location.href}
        />
    );
};

export default OrderTrackingPage;
