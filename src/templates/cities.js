import React from 'react';
import { Layout } from '../components/layout';
import { MainTemplate } from '../components/page-components/main/main-template';
import { LimitedCitiesTemplate } from '../components/page-components/main/limited-cities-template';
import Seo from '../components/new-seo';

export default function CitiesTemplate({
    pageContext: { props, stateData },
    location
}) {
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    const cityCommaState = `${props.city_varchar_25}, ${props.stateshort_varchar_2}`;

    location.city = props.city_varchar_25;
    location.stateshort = props.stateshort_varchar_2;
    location.distribution = stateData.frontmatter.distribution;

    return (
        <Layout location={location}>
            {location.distribution === 'standard' ? (
                <React.Fragment>
                    <MainTemplate
                        isCity={true}
                        cityState={cityCommaState}
                        frontmatter={stateData.frontmatter}
                    />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <LimitedCitiesTemplate
                        usState={cityCommaState}
                        isCity={true}
                        url={metaUrl}
                    />
                </React.Fragment>
            )}
        </Layout>
    );
}

export const Head = ({ location, pageContext }) => {
    const { props } = pageContext;
    const cityState = `${props.city_varchar_25} ${props.stateshort_varchar_2}`;
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    let title = '';
    let description = '';

    if (pageContext.stateData.frontmatter.distribution === 'standard') {
        title = `${cityState} Delta 8 THC Gummies – ${props.city_varchar_25} THC Gummies + Delta 9 Gummies`;
        description = `${cityState} Delta 8 Gummies and Delta 9 Gummies. Delta 8 Shops in ${props.city_varchar_25} that ship direct. No Medical Card Required to buy our cbd plus delta-8 thc gummies and Delta 9 Gummies. ${cityState} thc gummies shipped to your door or picked up in store. `;
    } else {
        title = `${cityState} Delta 8 Gummies, Hemp, CBD Edibles - Delta8Gummies`;
        description = `Buy CBD Gummies in ${cityState}. Delta 8 Gummies, Delta 9 Gummies, CBD Gummies and Hemp Edibles from D8G ${props.city_varchar_25} shop that ship direct. No Medical Card Required for our Delta 9 Gummies and THC Gummies derived from Hemp.`;
    }

    return (
        <Seo
            type="page"
            title={title}
            description={description}
            url={metaUrl}
        />
    );
};
