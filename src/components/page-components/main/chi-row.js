import React from 'react';
import { ChiBlackRaspberryCard } from '../../product-cards/gummies/chi-black-raspberry-card';
import { ChiWatermelonCard } from '../../product-cards/gummies/chi-watermelon-card';

export const ChiRow = () => {
	return (
		<React.Fragment>
            <ChiBlackRaspberryCard />
            <ChiWatermelonCard />
		</React.Fragment>
	);
};
