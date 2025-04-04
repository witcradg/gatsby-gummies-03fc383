import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Script, Slice } from 'gatsby';
// import { LiveChatWidget } from '@livechat/widget-react';
import { Analytics } from '@vercel/analytics/react';
import { LayoutContext } from '../../contexts/layout-context';

export const Layout = ({ children, location }) => {
    const [layout, setLayout] = useState(location);

    // Standard pages will have a location within the location object.
    // We need the hash to exclude the header when on shopping cart
    // pages provided by snipcart.

    let hash = '';
    if (location) {
        hash = location.hash;
        if (location.location && location.location.hash) {
            hash = location.location.hash;
        }
    }

    const conditionalHeader =
        hash &&
        (hash.includes('#/cart') || hash.includes('#/checkout')) ? null : (
            <Slice alias="header" />
        );

    return (
        <React.Fragment>
            <Analytics />
            <LayoutContext.Provider value={{ layout, setLayout }}>
                {/* <LiveChatWidget license="14536509" group="0" /> */}
                <Script id="layout-yotpo">
                    {`(function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/20iydOD6nZ5G40lZOdqjSY4qvwqqiArXsSFolIIJ/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();`}
                </Script>
                {conditionalHeader}
                {children}
                <Slice alias="footer" />
            </LayoutContext.Provider>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
