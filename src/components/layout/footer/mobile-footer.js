import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { CategoriesSocial } from './categories-social';
import { FooterAccordion } from './footer-accordion';
import { CategoriesLinks } from './categories-links';
import { CategoriesContacts } from './categories-contacts';
import { PopularPages } from './popular-pages.js';
import { Copyright } from './copyright';

export const MobileFooter = () => {
	return (
		<div className="footer1 mobile-toggle">
			<div className="container">
				<div className="container m-auto">
					<CategoriesSocial />
					<div className="text-white mb-16">
						<FooterAccordion>
							<h4 className="footer-title">CATEGORIES</h4>
							<CategoriesLinks />
							<h4 className="footer-title">CONTACTS</h4>
							<CategoriesContacts />
							<h4 className="footer-title">POPULAR PAGES</h4>
							<PopularPages classline="mt-2"/>
						</FooterAccordion>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<Link className="text-center m-auto block" to="/">
					<StaticImage alt="logo" src="../../../images/Delta-8-Logo.png" height={50} />
				</Link>
			</div>
            <Copyright />
		</div>
	);
};
