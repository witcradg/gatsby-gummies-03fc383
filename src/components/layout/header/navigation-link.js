import React from 'react';
import { Link } from 'gatsby';

export const NavigationLink = ({to, label} ) => {
    return (
        <div id="lg-menu-home" className="text-white text-lg anchor-transition mx-0">
            <Link
                className="white-anchor"
                to={to}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>{label}</span>
            </Link>
        </div>
    );
};
