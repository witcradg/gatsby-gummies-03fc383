import React from 'react';
import { Layout } from '../components/layout';
import { MainHHCTemplate } from '../components/page-components/main/main-hhc-template';
import { LimitedCitiesTemplate } from '../components/page-components/main/limited-cities-template';
import Seo from '../components/new-seo';

export default function CitiesHHCTemplate({
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
                    <MainHHCTemplate
                        usState={cityCommaState}
                        isCity={true}
                        url={metaUrl}
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
        title = `${cityState} HHC Gummies 1000mg - Delta8Gummies`;
        description = `${cityState} 1000mg HHC Gummies Online. Find HHC Shops in ${props.city_varchar_25} that ship direct. No Medical Card Required. PLEASE NOTE: We can not ship HHC products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware`;
    } else {
        title = `${cityState} Hemp, CBD & delta 8 Gummies - Delta8Gummies`;
        description = `Buy CBD Gummies in ${cityState}. Delta 8 Gummies, Delta 9 Gummies, CBD Gummies and Hemp Edibles from D8G ${props.city_varchar_25} shop that ship direct. No Medical Card Required. PLEASE NOTE: We can not ship HHC products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware`;
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
