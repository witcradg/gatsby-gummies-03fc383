import React from 'react';
import * as styles from './product.module.css';


export const Vendor = ({ name, link }) => {
    const vendor = name || 'Delta 8 Gummies'
    const href = link || '/'
	return (
		<div className="add-info divider-bottom-spacing text-left">
			<ul style={{ listStyleType: 'none', padding: '0px' }}>
				<li>
					<span style={{ fontWeight: '800', color: '#191919' }}>Vendor:</span>&nbsp;
					<a className={`${styles.light_text}`} href={href}>
						{vendor}
					</a>
				</li>
			</ul>
		</div>
	);
};
