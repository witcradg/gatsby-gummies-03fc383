import React from 'react';
import { HHC2PackCard } from '../product-cards/gummies/hhc-2pack-card';
import { HHCBearsCard } from '../product-cards/gummies/hhc-bears-card';
import { HHCRingsCard } from '../product-cards/gummies/hhc-rings-card';

export const HHCGummies = ({ title, children }) => {
	const sectionTitle = children || (
		<div className="my-8">
			<h1 className="block-title" style={{ margin: '1rem 0' }}>
				{title ? title : 'HHC Gummies'}
			</h1>
		</div>
	);

	return (
		<div className="popular-product text-center">
			{sectionTitle}
			<div className="container">
				<div className="row">
					<HHCRingsCard />
					<HHCBearsCard />
                    <HHC2PackCard />
				</div>
			</div>
		</div>
	);
};
