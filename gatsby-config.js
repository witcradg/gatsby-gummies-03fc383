require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: `Delta 8 THC Gummies – delta8gummies`,
		description: `Delta 8 Gummie Bears 1000MG $39.99 $49.99 PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware`,
		author: `dean.witcraft@outlook.com`,
		siteUrl: `https://delta8gummies.com`
	},

	/* flags:
	Those flags no longer have any effect and you can remove them from config:
		- PRESERVE_WEBPACK_CACHE
		Is this hardcoded true?
	DETECT_NODE_MUTATIONS 
		https://www.gatsbyjs.com/docs/how-to/local-development/debugging-missing-data/ 
	*/
	flags: {
		DETECT_NODE_MUTATIONS: false,
		FAST_DEV: true,
		DEV_SSR: false,
		PARALLEL_SOURCING: false,
		PRESERVE_FILE_DOWNLOAD_CACHE: false
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-klaviyo',
			options: {
				klaviyoKey: process.env.KLAVIYO,
				enableDuringDevelop: true // Optional. Disables Klaviyo when running Gatsby dev server. Defaults to true.
			}
		},
		// https://gatsbytemplates.io/blog/fast-google-fonts/
		`gatsby-plugin-preload-fonts`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-fontawesome-css`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages/locations`,
				name: `state-pages-markdown`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: `component-markdown`
			}
		},
		{
			resolve: `gatsby-transformer-csv`,
			options: {
				extensions: [`csv`],
				delimiter: '\t'
			}
		},
		{
			resolve: `gatsby-plugin-lucky-orange`,
			options: {
				id: process.env.ORANGE,
			}
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-plugin-gatsby-cloud`,
			options: {
				headers: {},
				allPageHeaders: [],
				mergeSecurityHeaders: false,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`, // Needed for dynamic images
		`gatsby-plugin-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				policy: [
					{
						userAgent: 'Googlebot',
						disallow: '/nogooglebot/'
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-breadcrumb`,
			options: {
				useAutoGen: true,
				// autoGenHomeLabel: optional 'Home' is default
				// exclude: optional, include this array to exclude paths you don't want to
				// generate breadcrumbs for (see below for details).
				exclude: [
					`**/dev-404-page/**`,
					`**/404/**`,
					`**/404.html`,
					`**/offline-plugin-app-shell-fallback/**`
				],
				// isMatchOptions: optional, include this object to configure the wildcard-match library.
				excludeOptions: {
					separator: '.'
				}
				// crumbLabelUpdates: optional, update specific crumbLabels in the path
				// crumbLabelUpdates: [
				// 	{
				// 		pathname: '/products',
				// 		crumbLabel: 'Delta 8 Gummies'
				// 	}
				// ]
				// trailingSlashes: optional, will add trailing slashes to the end
				// of crumb pathnames. default is false
				// usePathPrefix: optional, if you are using pathPrefix above
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
