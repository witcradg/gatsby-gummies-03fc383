import React from 'react';
import { SimpleAccordion } from './simple-accordion';
import { GummiesAddenda } from './gummies-addenda';
import * as styles from './product.module.css';

export const ThcaDescription = ({ children, totalContent, potency, count, totalCaseContent, caseCount }) => {
	const renderCaseTotal = () => {
		if (totalCaseContent)
			return (
				<li>
					<strong>Total THCA:</strong>
					<span>&nbsp;{totalCaseContent}</span>
				</li>
			);
	};

	const renderCaseCount = () => {
		if (caseCount)
			return (
				<li>
					<strong>Grams Per Bag:</strong>
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
						<h6 className={styles.description_title}>About THCA Flower</h6>
						<p>
							Our THCA Flower {potency} of THCA in each bag.
							They deliver a powerful head and body feel that will have you feeling amazing.
						</p>
						<p>
						This flavorful bud delivers comprehensive effects that enhance mental clarity while simultaneously inducing body relaxation. 
						Upon exhaling, an immediate surge of happiness envelops you, banishing any space for negative moods or racing thoughts in your 
						mind. In this state, you’ll discover heightened sociability and charisma, enjoying engaging conversations with those around you. Following this, a gentle physical tingle gradually permeates your body, providing a stimulating yet laid-back sensation.
						</p>
						{children}
						<br />
						<div>
							<h6 className={styles.description_title}>THCA Flower Product Description</h6>
							<ul style={{ color: '#777', listStyleType: 'disc' }}>
								<li>
									<strong>Total ∆9THC Content Per Jar:</strong>
									<span>&nbsp;{totalContent}</span>
								</li>
								<li>
									<strong>Grams per Jar:</strong>
									<span>&nbsp;{count}</span>
								</li>
								<li>
									<strong>
										Ingredients:<span>&nbsp;</span>
									</strong>
									<span>
										Hemp Flower
									</span>
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
								<strong>∆9THC Content Per Pack:</strong>
								<span>&nbsp;{potency}</span>
							</li>
							<li>
								<strong>Grams per Pack:</strong>
								<span>&nbsp;{count}</span>
							</li>
						
						</ul>
					</div>
				</SimpleAccordion>
			</div>
		</div>
	);
};

ThcaDescription.defaultProps = {
	totalContent: 'ounce'
};
