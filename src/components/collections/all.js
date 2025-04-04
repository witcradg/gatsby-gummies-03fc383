import React from 'react';
import { Link } from 'gatsby';
import { OriginalGummies } from './original-gummies';
import { GummiePouches } from './gummie-pouches';
import { VeganGummies } from './vegan-gummies';
import { OriginalSamplePacks } from './original-sample-packs';
import { AllDelta8Gummies } from './all-delta-8-gummies';
import { Distilate } from './distilate';
import { Tincture } from './tincture';
import { Cream } from './cream';
import { Swag } from './swag';
import { WholesaleCbd } from './wholesale-cbd';
import { FollowUs } from '../follow-us';

export const AllCollections = ({ title }) => {
	return (
		<React.Fragment>
			<div className="popular-product text-center my-8">
				<Link to="/collections/delta-8-gummies/"><h1 className="block-title uppercase">DELTA 8 GUMMIES</h1></Link> 
			</div>
			<OriginalGummies />
			<AllDelta8Gummies />
			<VeganGummies title="VEGAN GELATIN-FREE GUMMIES" row2/>
			<OriginalSamplePacks />
			<Distilate />
			<Tincture />
			<Cream />
			<Swag />
			<WholesaleCbd />
			<GummiePouches title="200MG DELTA 8 POUCHES" bottom />
			<FollowUs />
		</React.Fragment>
	);
};
