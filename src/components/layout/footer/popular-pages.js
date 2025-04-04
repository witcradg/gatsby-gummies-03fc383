import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { LayoutContext } from '../../../contexts/layout-context';

export const PopularPages = ({ classline }) => {
    const { layout } = useContext(LayoutContext);

    let classes = `links ${classline}`;

    let mapframe = '';

    if (layout && layout.map) {
        mapframe = (
            <iframe
                title={layout.title}
                src={layout.map}
                height="275"
                width="225"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
            />
        );
    } else if (layout && layout.city) {
        const city = layout.city.replace(/ /g, '+');
        const stateAbrev = layout.stateshort.replace(/ /g, '-');
        const title = `${city} ${stateAbrev}`;
        const srcString = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB5RdfeHtzrauwVL7QZF3ZJ1yyMM89jzZo&q=${city}+${stateAbrev}`;

        mapframe = (
            <iframe
                title={title}
                width="225"
                height="275"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                src={srcString}
            />
        );
    }

    return (
        <React.Fragment>
            <style>
                {`
                .links {
                    display: block;
                    color:#9999a0;
                    text-decoration: none;
                }
              `}
            </style>
            {mapframe ? (
                <div>
                    <h4 className="text-white text-base uppercase">
                        {layout.title} DELTA 8 STORE
                    </h4>
                    <div className="google-map-code">{mapframe}</div>
                </div>
            ) : (
                <div>
                    <div>
                        <Link
                            className={classes}
                            to="/products/d9-rope-150/"
                            alt="d9 nerds"
                        >
                            D9 Rope
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={classes}
                            to="/products/d9-cubes-300/"
                            alt="d9 cubes"
                        >
                            D9 Cubes
                        </Link>
                    </div>
                    {/* <div>
                        <Link
                            className={classes}
                            to="/products/buy-2-get-1-free/"
                            alt="buy two get one free"
                        >
                            Buy 2 Get 1 Free
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={classes}
                            to="/products/5000MG-sample-pack/"
                            alt="sample packs"
                        >
                            5,000MG Sample Packs
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={classes}
                            to="/products/10000MG-sample-pack/"
                            alt="sample packs"
                        >
                            10,000MG Sample Packs
                        </Link>
                    </div> */}
                    <div>
                        <Link
                            className={classes}
                            to="/lab-tests/"
                            alt="lab tests"
                        >
                            Lab Tests
                        </Link>
                    </div>
                    <div>
                        <Link className={classes} to="/faq/">
                            FAQ
                        </Link>
                    </div>
                    <div>
                        <Link className={classes} to="/order-tracking/">
                            Order Tracking
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={classes}
                            to="/locations/"
                            alt="locations"
                        >
                            Locations
                        </Link>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
