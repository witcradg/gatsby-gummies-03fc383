import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { LayoutContext } from '../../../contexts/layout-context';

export const CategoriesLinks = ({ classline }) => {
    const { layout } = useContext(LayoutContext);

    let classes = `links ${classline}`;

    const limited = layout?.distribution === 'limited'

    const LimitedLinks = () => (
        <React.Fragment>
            <Link className={classes} to="/collections/delta-8-gummies/">
                <span>Delta 8 Gummies</span>
            </Link>
            <Link className={classes} to="/collections/delta-8-gummies/">
                <span>Locations</span>
            </Link>
            <Link className={classes} to="/collections/delta-8-gummies/">
                <span>Lab Tests</span>
            </Link>
            <Link className={classes} to="/collections/delta-8-gummies/">
                <span>contact</span>
            </Link>
        </React.Fragment>
    );

    const StandardLinks = () => (
        <React.Fragment>
            <Link className={classes} to="/collections/delta-9-gummies/">
                Delta 9 Gummies
            </Link>
            {/* <Link className={classes} to="/collections/delta-8-gummies/">
                Delta 8 Gummies
            </Link>  */}
            {/* <Link className={classes} to="/collections/vegan-gummies/">
                Vegan Gummies
            </Link> */}
            {/* <Link className={classes} to="/collections/wholesale/">
                Wholesale
            </Link> */}
            <Link className={classes} to="/reviews/">
                Reviews
            </Link>
            {/* <Link className={classes} to="/collections/free-delta-8/">
                Free Delta 8
            </Link> */}
        </React.Fragment>
    );

    return (
        <div>
            <style>
                {`
                .links {
                    display: block;
                    color:#9999a0;
                    text-decoration: none;
                }
              `}
            </style>
            {limited ? <LimitedLinks /> : <StandardLinks />}
        </div>
    );
};
