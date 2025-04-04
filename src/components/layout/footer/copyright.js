import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export const Copyright = () => {

    return <span className="m-8 lg:ml-0 inline-block color9999a0 text-center" style={{ fontSize: '12px' }}>
        <FontAwesomeIcon icon={faCopyright} />
        &nbsp;Delta 8 Gummies 2024. All Rights Reserved&nbsp;<a href="/sitemap-0.xml">
            sitemap
        </a>{', '}
        <Link to="/privacy-policy/">
            Privacy Policy
        </Link>{', '}
        <Link to="/terms-of-service/">
            Terms of Service
        </Link>{', '}
        <Link to="/refund-policy/">
            Refund Policy
        </Link>{' '}
    </span>;
}

