import React from 'react';
import { All5PouchCard } from '../product-cards/gummies/all5-pouch-card';
import { Vegan2PackCard } from '../product-cards/gummies/vegan-2pack-card';
import { Buy2Get1Card } from '../product-cards/sample-packs/buy2get1-card';

export const BlogProductsRow = () => {
	return (
		<React.Fragment>
            <Buy2Get1Card />
            <Vegan2PackCard /> 
            <All5PouchCard />
		</React.Fragment>
	);
};
