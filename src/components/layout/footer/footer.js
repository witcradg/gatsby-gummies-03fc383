import React from 'react';
import { DesktopFooter } from './desktop-footer.js';
import { MobileFooter } from './mobile-footer.js';

const Footer = () => {
	return (
		<footer className="footer-background pt-8 mt-8">
			<DesktopFooter />
			<MobileFooter />
		</footer>
	);
};

export default Footer;