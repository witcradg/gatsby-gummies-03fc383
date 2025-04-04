import React from 'react';
import { Thco2PackCard } from '../product-cards/gummies/thco-2pack-card';
import { ThcoBearsCard } from '../product-cards/gummies/thco-bears-card';
import { ThcoRingsCard } from '../product-cards/gummies/thco-rings-card';

export const THCOGummies = ({ title, children }) => {
	const sectionTitle = children || (
		<div className="my-8">
			<h1 className="block-title" style={{ margin: '1rem 0' }}>
				{title ? title : 'THC-O Gummies'}
			</h1>
		</div>
	);

	return (
		<div className="popular-product text-center">
			{sectionTitle}
			<div className="container">
				<div className="row">
					<ThcoRingsCard />
					<ThcoBearsCard />
                    <Thco2PackCard />
				</div>
			</div>
		</div>
	);
};
