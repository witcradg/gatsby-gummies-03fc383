import React from 'react';
import { ZkittlesCard } from '../product-cards/gummies/zkittles-card';


export const CbdGummies = ({children, title}) => {
    const sectionTitle = children || (
		<div className="my-8">
			<h1 className="block-title" style={{ margin: '1rem 0' }}>
				{title ? title : 'Buy CBD Gummies Online'}
			</h1>
			<h2 className="block-title" style={{ margin: '1rem 0' }}>
				{'CBD Gummies Made From Hemp Buy Online'}
			</h2>
		</div>
	);
	return (
		<div className="popular-product text-center mb-3">
			{sectionTitle}
			<div className="container">
				<div className="row">
					<ZkittlesCard />
				</div>
				
			</div>
		</div>
	);
};
