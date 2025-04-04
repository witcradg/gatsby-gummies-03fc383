import React from 'react';
import { FreeDelta8BearsCard } from '../product-cards/sample-packs/freedelta8bears';
import { FreeDelta8WormsCard } from '../product-cards/sample-packs/freedelta8worms';
import { FreeDelta8NerdsCard } from '../product-cards/sample-packs/freedelta8nerds';
import { FreeDelta8VeganAppleCard } from '../product-cards/sample-packs/freedelta8veganapple';
import { FreeDelta8PeachRingsCard } from '../product-cards/sample-packs/freedelta8peachrings';
import { FreeDelta8BlueRaspberryCard } from '../product-cards/sample-packs/freedelta8blueraspberry';


export const FreeDelta8 = ({children, title}) => {
    const sectionTitle = children || (
		<div className="my-8">
			<h1 className="block-title" style={{ margin: '1rem 0' }}>
				{title ? title : 'Free Delta 8 Gummies'}
			</h1>
			<h2 className="block-title" style={{ margin: '1rem 0' }}>
				{'Buy 2 Get 1 Free On ALL 1000mg Jars'}
			</h2>
		</div>
	);
	return (
		<div className="popular-product text-center mb-3">
			{sectionTitle}
			<div className="container">
				<div className="row">
                    <FreeDelta8BearsCard />
					<FreeDelta8WormsCard />
					<FreeDelta8NerdsCard />
				</div>
				<div className="row">
                    <FreeDelta8VeganAppleCard />
					<FreeDelta8BlueRaspberryCard />
					<FreeDelta8PeachRingsCard />
				</div>
			</div>
		</div>
	);
};
