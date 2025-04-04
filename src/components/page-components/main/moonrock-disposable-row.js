import React from 'react';
import { HHCMoonrockDisposableCard } from '../../product-cards/hhc-moonrock-disposable-card';
import { THCMoonrockDisposableCard } from '../../product-cards/thc-moonrock-disposable-card';
import { THCOMoonrockDisposableCard } from '../../product-cards/thco-moonrock-disposable-card';

export const MoonrockDisposableRow = () => {
	return (
		<React.Fragment>
            <HHCMoonrockDisposableCard />
            <THCMoonrockDisposableCard />
            <THCOMoonrockDisposableCard />
		</React.Fragment>
	);
};