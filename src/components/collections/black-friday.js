import React from 'react';


import { SamplePack5KCard } from '../product-cards/sample-packs/5000MG-sample-pack-card';
import { SamplePack10KCard } from '../product-cards/sample-packs/10000MG-sample-pack-card';
import { SamplePack20KCard } from '../product-cards/sample-packs/20000MG-sample-pack-card';


export const BlackFriday = ({ title }) => {
	return (
		<div className="most-edibles text-center">
			<div className="my-8">
				<h1 style={{ margin: '1rem 0' }}>{title ? title : 'SAVE MORE BUY BUYING A BUNDLE'}</h1>
			</div>
			<div className="container">
                
				<div className="row">
					<SamplePack5KCard />
					<SamplePack10KCard />
					<SamplePack20KCard />
				</div>
			</div>
		</div>
	);
};
