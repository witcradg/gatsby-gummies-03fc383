import React from 'react';
import { Section } from '../page-components/main/section.js';
import { OrangeSlicesCard } from '../product-cards/gummies/orange-slices-card';
import { AppleDotsCard } from '../product-cards/gummies/apple-dots-card';
import { Vegan2PackCard } from '../product-cards/gummies/vegan-2pack-card';
import { CherryPiecesCard } from '../product-cards/gummies/cherry-pieces-card.js';

export const VeganGummies = ({ title, row2, children }) => {
	const sectionTitle = children || (
		<div className="my-8">
			<h1 className="block-title" style={{ margin: '1rem 0' }}>
				{title ? title : '100% VEGAN DELTA 8 GUMMIES'}
			</h1>
		</div>
	);

	const Row2 = row2 ? (
		<Section>
			<CherryPiecesCard />
			{/* <RaspberryDotsCard /> */}
		</Section>
	) : null;

	return (
		<div className="popular-product text-center">
			{sectionTitle}
			<Section>
				<AppleDotsCard />
				<OrangeSlicesCard />
				<Vegan2PackCard />
			</Section>

            {Row2}
		</div>
	);
};
