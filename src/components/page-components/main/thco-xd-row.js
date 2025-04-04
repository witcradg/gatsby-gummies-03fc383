import React from 'react';
import { Thco2PackXdCard } from '../../product-cards/gummies/limited-distribution/thco-2pack-card-xd';
import { ThcoBearsXdCard } from '../../product-cards/gummies/limited-distribution/thco-bears-card-xd';
import { ThcoRingsXdCard } from '../../product-cards/gummies/limited-distribution/thco-rings-card-xd';

export const ThcoXdRow = () => {
	return (
		<React.Fragment>
            <ThcoBearsXdCard />
            <ThcoRingsXdCard />            
            <Thco2PackXdCard />
		</React.Fragment>
	);
};
