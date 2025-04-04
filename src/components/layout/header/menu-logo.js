import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export const MenuLogo = () => {
    return (
        <Link className="white-anchor" to="/">
            <StaticImage
                alt="logo"
                placeholder="blurred"
                src="../../../images/Delta-8-Logo.png"
                height={50}
            />
        </Link>
    );
};
