import React from 'react';
import { Thco2PackCard } from '../../product-cards/gummies/thco-2pack-card';
import { ThcoBearsCard } from '../../product-cards/gummies/thco-bears-card';
import { ThcoRingsCard } from '../../product-cards/gummies/thco-rings-card';

export const ThcoRow = () => {
	return (
		<React.Fragment>
            <ThcoBearsCard />
            <ThcoRingsCard />
            <Thco2PackCard />
		</React.Fragment>
	);
};
