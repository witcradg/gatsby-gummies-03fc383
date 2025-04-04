import React from 'react';
import { ChiRow } from '../page-components/main/chi-row';

export const ChiGummies = ({children, title}) => {
    const sectionTitle = children || (
		<div className="my-8">
			<h1 className="block-title" style={{ margin: '1rem 0' }}>
				{title ? title : '3Chi Gummies'}
			</h1>
			<h2 className="block-title" style={{ margin: '1rem 0' }}>
				{'3Chi Delta 8 THC Gummies Sale'}
			</h2>
		</div>
	);
	return (
		<div className="popular-product text-center mb-3">
			{sectionTitle}
			<div className="container">
				<div className="row">
                    <ChiRow />
				</div>
			</div>
		</div>
	);
};
