import React from 'react';
import { PeachRingsCard } from '../product-cards/gummies/peach-rings-card';
import { AppleRingsCard } from '../product-cards/gummies/apple-rings-card';
import { WatermelonRingsCard } from '../product-cards/gummies/watermelon-rings-card';
import { RaspberryRingsCard } from '../product-cards/gummies/raspberry-rings-card';
import { BananasCard } from '../product-cards/gummies/bananas-card';
import { NerdClustersCard } from '../product-cards/gummies/nerd-clusters-card';

export const AllDelta8Gummies = ({ title }) => {
	return (
		<div className="popular-product text-center mb-3">
			<div className="my-8">
				<h1 className="block-title" style={{ margin: '1rem 0' }}>
                    {title ? title : 'EACH RING IS 100MG APIECE - 10 PER JAR!!'}
                </h1>
			</div>
			<div className="container">
				<div className="row">
					<PeachRingsCard />
					<RaspberryRingsCard />
					<AppleRingsCard />
				</div>
                <div className="row mt-4">
                    <BananasCard />
                    <NerdClustersCard />
					<WatermelonRingsCard />
				</div>
			</div>
		</div>
	);
};
