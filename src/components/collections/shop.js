import React from 'react';
import { Section } from '../page-components/main/section';
import { ChiRow } from '../page-components/main/chi-row';
import { HhcXdRow } from '../page-components/main/hhc-xd-row';
import { D9XdRow } from '../page-components/main/d9-xd-row';

export const Shop = () => {
    return (
        <Section sectionTitle="SHOP HEMP DERIVED GUMMIE EDIBLES">
            <D9XdRow />
            <HhcXdRow />
            <ChiRow />
        </Section>
    );
};
