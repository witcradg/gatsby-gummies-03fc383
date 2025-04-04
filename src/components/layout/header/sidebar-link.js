import React from 'react';
import { Link } from 'gatsby';

export const SidebarLink = ({ to, label }) => {
    return (
        <Link
            className="white-anchor block py-2 pr-2"
            to={to}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span>{label}</span>
        </Link>
    );
};
