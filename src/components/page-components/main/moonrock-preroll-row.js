import React from 'react';
import { HHCMoonrockPrerollCard } from '../../product-cards/hhc-moonrock-preroll-card';
import { THCMoonrockPrerollCard } from '../../product-cards/thc-moonrock-preroll-card';
import { THCOMoonrockPrerollCard } from '../../product-cards/thco-moonrock-preroll-card';

export const MoonrockPrerollRow = () => {
	return (
		<React.Fragment>
            <HHCMoonrockPrerollCard />
            <THCMoonrockPrerollCard />
            <THCOMoonrockPrerollCard />
		</React.Fragment>
	);
};