import React from 'react';
// import { SourWormsCard } from '../product-cards/gummies/sour-worms-card';
import { SourSquaresCard } from '../product-cards/gummies/sour-squares-card';
import { GummieBearsCard } from '../product-cards/gummies/gummie-bears-card';
import { Buy2Get1Card } from '../product-cards/sample-packs/buy2get1-card';

export const OriginalGummies = () => {
	return (
		<div className="popular-product text-center mb-3">
			<div className="container">
				<div className="row">
					{/* <SourWormsCard /> */}
					<SourSquaresCard />
					<GummieBearsCard />
					<Buy2Get1Card />
				</div>
			</div>
		</div>
	);
};
