import React from 'react';
import { HhcHero } from './hhc-hero';
import { FollowUs } from '../../follow-us';
import { HhcRow } from '../../page-components/main/hhc-row';
import { AgeGuard } from './age-guard';
import { HhcShopNow } from './hhc-shop-now';
import { Reassurances } from './reassurances';
import { HhcQandA } from './hhcqanda';
import { CitiesList } from './cities-list';
import { Content2x } from './content2x';
import { Section } from './section';
import { HhcBlogRow } from './hhc-blog-row';

export const MainHHCTemplate = ({ usState, isCity, url }) => {

	const mainPageTest = false; //TODO
	const conditionalQandA = () => {
		if (isCity || mainPageTest) {
			return <HhcQandA title={'Common HHC Questions'} usCityState={usState} />;
		}
	};

	let title = 'HEMP DERIVED HHC GUMMIES FOR PEACE AND RELAXATION';
	title = usState ? `${usState}'s ${title}` : title;
	return (
		<React.Fragment>
			<AgeGuard />
			<HhcHero usState={usState} />
			<div className="popular-product text-center my-8">
				<h1 className="block-title uppercase">{title}</h1>
			</div>
			<HhcShopNow url={url} />
			<Section sectionTitle="HHC Gummies 25mg Bears and 100mg Rings">
				<HhcRow />
			</Section>
			<Section sectionTitle="NEW TO HHC? START SMALL! 10-25MG FOR A FIRST TIMER.">
				<HhcBlogRow />
			</Section>
			<Reassurances usState={usState} />
			{conditionalQandA()}
			<Content2x />
			<FollowUs />
			{usState ? <CitiesList usState={usState} isHhc={true} /> : null}
		</React.Fragment>
	);
};
