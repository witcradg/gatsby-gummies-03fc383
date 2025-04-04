import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PopularPages } from './popular-pages.js';
import { CategoriesSocial } from './categories-social.js';
import { CategoriesLinks } from './categories-links.js';
import { CategoriesContacts } from './categories-contacts.js';
import { Copyright } from './copyright.js';
import { PickerDropdown } from '../header/picker-dropdown.js';

export const DesktopFooter = () => {
    return (
        <footer className="footer-background mt-8 desktop-toggle">
            <div className="display-n" style={{ fontSize: '13px' }}>
                <div
                    className="flex flex-wrap container"
                    style={{ width: '100%', fontSize: '13px' }}
                >
                    <div id="footer-column1" className="flex-1 m-2 mt-0 px-3">
                        <div>
                            <nav className="container navbar navbar-expand-lg navbar-dark">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapsibleNavbar"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>

                                <StaticImage
                                    alt="logo"
                                    src="../../../images/Delta-8-Logo.png"
                                    width={190}
                                />
                            </nav>
                        </div>

                        <CategoriesSocial />

                        <div className="ml-2">
                            <PickerDropdown header="false" />
                        </div>
                    </div>

                    <div className="flex-1 m-2">
                        <h4 className="text-white text-base">CATEGORIES</h4>
                        <CategoriesLinks classline="mt-2" />
                    </div>
                    <div className="flex-1 m-2 text-white">
                        <h4 className="footer-title">POPULAR PAGES</h4>
                        <PopularPages classline="mt-2" />
                    </div>
                    <div className="flex-1 m-2 text-white">
                        <h4 className="text-white text-base">CONTACTS</h4>
                        <CategoriesContacts />
                    </div>
                </div>
            </div>
            <div
                className="flex flex-wrap container"
                style={{ width: '100%', fontSize: '13px' }}
            >
                <div className="display-n" style={{ fontSize: '13px' }}>
                    <p className="mx-0 pr-12 color9999a0">
                        FDA DISCLOSURE: All products made and formulated in our
                        lab contain below 0.3% THC on a dry weight basis. The
                        statements made regarding these products have not been
                        evaluated by the Food and Drug Administration. The
                        efficacy of these products has not been confirmed by
                        FDA-approved research. These products are not intended
                        to diagnose, treat, cure or prevent any disease.
                    </p>
                    <div className="ml-0">
                        <Copyright />
                    </div>
                </div>
            </div>
        </footer>
    );
};
