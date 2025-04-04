import React from 'react';
import { HHCBearsCard } from '../../product-cards/gummies/hhc-bears-card';
import { HHCRingsCard } from '../../product-cards/gummies/hhc-rings-card';
import { HHC2PackCard } from '../../product-cards/gummies/hhc-2pack-card';

export const HhcRow = () => {
	return (
		<React.Fragment>
            <HHCBearsCard />
            <HHCRingsCard />
            <HHC2PackCard />
		</React.Fragment>
	);
};
