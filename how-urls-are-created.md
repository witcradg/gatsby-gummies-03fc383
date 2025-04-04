HOW URLS ARE CREATED

I. gatsby built in urls
    A. urls are built directly from the location of the page file.
        Example: src/pages/products/bananas.js


II. javascript pages functions - direct page generators urls from
    A. src/pages/{MarkdownRemark.frontmatter__slug}.js

        1. url source code is the state markdown "slug" value
        	const metaUrl = `https://delta8gummies.com/${frontmatter.slug}

        2. Example: delta8gummies.com/locations/alabama

    B. src/pages/{MarkdownRemark.frontmatter__hhc_slug}.js

        1. url source code is the state markdown "hhc_slug" value
            	const metaUrl = `https://delta8gummies.com/locations/hhc/${frontmatter.hhc_slug}`;

        2. Example: hhc_slug: delta8gummies.com/locations/hhc-gummies-legal-alabama


III. gatsby-node created using CSV and template files
    A. src/templates/cities.js

        1. path source code:
            let slug = `locations/${usState}/${usCity}/`.replace(/ /g, '-');
            createPage({
                path: slug,
                component: citiesTemplate,

        2. Example: delta8gummies.com/locations/idaho/boise

    B. src/templates/cities-hhc.js

        1. path source code:
            let slug = `locations/${usState}/${usCity}/`.replace(/ /g, '-');
            ...
            const tmp = slug.substring(0, slug.length - 1); //take the entire slug and append -hhc-gummies
            const hhcSlug = `${tmp}-hhc-gummies`;
            createPage({
                path: hhcSlug,
                component: citiesHHCTemplate,

        2. Example: delta8gummies.com/location/idaho/boise-hhc-gummies

NOTE: the legal_slug is only used in code to point at blog pages generated
by method I. Example: legal_slug: /blog/is-delta-8-thc-legal-alabama
