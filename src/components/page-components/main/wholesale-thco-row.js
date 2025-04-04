import React from 'react';
import { ThcoBearsCard } from '../../product-cards/gummies/thco-bears-card';
import { ThcoRingsCard } from '../../product-cards/gummies/thco-rings-card';

export const ThcoRow = () => {
	return (
		<React.Fragment>
            <ThcoRingsCard />
            <ThcoBearsCard />
		</React.Fragment>
	);
};
