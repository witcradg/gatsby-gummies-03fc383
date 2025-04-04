import React from 'react';
import { HHCBearsXdCard } from '../../product-cards/gummies/limited-distribution/hhc-bears-card-xd';
import { HHCRingsXdCard } from '../../product-cards/gummies/limited-distribution/hhc-rings-card-xd';
import { HHC2PackXdCard } from '../../product-cards/gummies/limited-distribution/hhc-2pack-card-xd';

export const HhcXdRow = () => {
	return (
		<React.Fragment>
            <HHCBearsXdCard />
            <HHCRingsXdCard />
            <HHC2PackXdCard />
		</React.Fragment>
	);
};
