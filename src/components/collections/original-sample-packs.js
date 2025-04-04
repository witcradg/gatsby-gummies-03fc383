import React from 'react';
import { Buy2Get1Card } from '../product-cards/sample-packs/buy2get1-card';
import { SamplePack5KCard } from '../product-cards/sample-packs/5000MG-sample-pack-card';
import { SamplePack10KCard } from '../product-cards/sample-packs/10000MG-sample-pack-card';

export const OriginalSamplePacks = ({ title }) => {
    const pageTitle = title ? title : 'SAMPLE PACKS'
	return (
		<div className="most-edibles text-center">
			<div className="my-8">
				<h1 className="block-title" style={{ margin: '1rem 0' }}>{pageTitle}</h1>
			</div>
			<div className="container">
				<div className="row">
					<Buy2Get1Card />
					<SamplePack5KCard />
					<SamplePack10KCard />
				</div>
			</div>
		</div>
	);
};
