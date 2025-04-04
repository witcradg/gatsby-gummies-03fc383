import React from 'react';
import { SimpleAccordion } from './simple-accordion';
import * as styles from './product.module.css';

export const VapeDescription = () => {
	return (
		<div>
			<div className="text-left">
				<SimpleAccordion>
					<h1 className={styles.accordion_header}>DESCRIPTION</h1>
					<div className="block">
						<h6 className={styles.description_title}>
                            About Delta 8 THC Vapes
						</h6>
                        <div className="text-gray-700 mb-2 font-bold">A clean and potent delta 8 cartridge with OG terpines!</div>
						<div>
							<ul style={{ color: '#777', listStyleType: 'disc' }}>
								<li>
									<strong>920MG Pure Delta 8 Extract</strong>
								</li>
								<li>
									<strong>US Grown &amp; Processed</strong>
								</li>
								<li>
									<strong>No fillers</strong>
								</li>
								<li>
									<strong>Uncut</strong>
								</li>
								<li>
									<strong>Premium Delta 8 THC 8 Oil Blend</strong>
								</li>
							</ul>
						</div>
						<hr />
						<div className="text-left">
							<h6 className={styles.description_title}>Shipping</h6>
							<p>
								Due to Delta 8 THC either being illegal or not explicitly legal according to state laws,
								this product does not ship to the following states: Alaska, Arkansas, Delaware, Idaho,
								Iowa, Mississippi, Montana, North Dakota, Rhode Island, Utah, and Vermont.
							</p>
						</div>
					</div>
				</SimpleAccordion>
			</div>
		</div>
	);
};
