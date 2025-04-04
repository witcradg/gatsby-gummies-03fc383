import React from 'react';
import { HHCBearsCard } from '../../product-cards/gummies/hhc-bears-card';
import { HHCRingsCard } from '../../product-cards/gummies/hhc-rings-card';

export const HhcRow = () => {
	return (
		<React.Fragment>
            <HHCBearsCard />
            <HHCRingsCard />
		</React.Fragment>
	);
};
