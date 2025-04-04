import React from 'react';
import { SimpleAccordion } from './simple-accordion';
import { GummiesAddenda } from './gummies-addenda';
import * as styles from './product.module.css';

export const D9CbdDescription = ({ children, totalContent, potency, count, totalCaseContent, caseCount }) => {
	const renderCaseTotal = () => {
		if (totalCaseContent)
			return (
				<li>
					<strong>Total ∆9THC & CBD Content Per Jar:</strong>
					<span>&nbsp;{totalCaseContent}</span>
				</li>
			);
	};

	const renderCaseCount = () => {
		if (caseCount)
			return (
				<li>
					<strong>Gummies per Jar:</strong>
					<span>&nbsp;{caseCount}</span>
				</li>
			);
	};

	return (
		<div>
			<div className="text-left">
				<SimpleAccordion>
					<h1 className={styles.accordion_header}>DESCRIPTION</h1>
					<div className="block">
						<h6 className={styles.description_title}>About CBD + Delta 9 THC Gummies</h6>
						<p>
							Our CBD+Delta 9 THC gummies feature {potency} of CBD+Delta 9 THC in each gummy for maximum effects.
							They deliver a powerful head and body feel that will have you feeling amazing.
						</p>
						<p>
							Our CBD+Delta 9 THC gummies taste like normal gummies, with zero hemp taste. They are flat out
							delicious and deliver a bright pop of flavor with each bite.
						</p>
						<p>Serving Size: typically 1/2 a gummy or 1 gummy.</p>
						<p>
							Refrigeration is recommended after opening. Do not store above room temperature or in a
							humid environment.
						</p>
						{children}
						<br />
						<div>
							<h6 className={styles.description_title}>Delta 9 THC Gummies Product Description</h6>
							<ul style={{ color: '#777', listStyleType: 'disc' }}>
								<li>
									<strong>Total ∆9THC Content Per Jar:</strong>
									<span>&nbsp;{totalContent}</span>
								</li>
								<li>
									<strong>Total CBD Content Per Jar:</strong>
									<span>450mg</span>
								</li>
								<li>
									<strong>Gummies per Jar:</strong>
									<span>&nbsp;{count}</span>
								</li>
								{renderCaseTotal()}
								{renderCaseCount()}
								<li>
									<strong>∆9THC Content Per Gummy:</strong>
									<span>&nbsp;{potency}</span>
								</li>
								<li>
									<strong>CBD Content Per Gummy:</strong>
									<span>15mg</span>
								</li>
								<li>
									<strong>
										Container:<span>&nbsp;</span>
									</strong>
									<span>Sealed, Child Proof Jar</span>
								</li>
								<li>
									<strong>
										Ingredients:<span>&nbsp;</span>
									</strong>
									<span>
										Water, Granulated Sugar, Isomalt, Malic Acid, Flavoring, Fruit Pectin, Agar Agar.
									</span>
								</li>
								<li>
									<strong>Extraction Material:</strong>
									<span>&nbsp;Hemp</span>
								</li>
								<li>
									<strong>∆9THC Content:</strong>
									<span>&nbsp;10mg</span>
								</li>
							</ul>
						</div>
						<br />
						<GummiesAddenda />
					</div>
				</SimpleAccordion>
			</div>
			<hr />
			<div className="text-left">
				<SimpleAccordion>
					<h1 className={styles.accordion_header}>ADDITIONAL INFORMATION</h1>

					<div className="block">
						<ul style={{ color: '#777', listStyleType: 'disc' }}>
							<li>
								<strong>Total ∆9THC Content:</strong>
								<span>&nbsp;{totalContent}</span>
							</li>
							<li>
								<strong>Total CBD Content:</strong>
								<span>450mg</span>
							</li>
							<li>
								<strong>∆9THC Content Per Gummy:</strong>
								<span>&nbsp;{potency}</span>
							</li>
							<strong>CBD Content Per Gummy:</strong>
									<span>15mg</span>
							<li>
								<strong>Gummies per Pack:</strong>
								<span>&nbsp;{count}</span>
							</li>
							<li>
								<strong>Container:</strong>
								<span>&nbsp;Sealed, Child Proof Jar</span>
							</li>
						</ul>
					</div>
				</SimpleAccordion>
			</div>
		</div>
	);
};

D9CbdDescription.defaultProps = {
	totalContent: '300mg'
};
