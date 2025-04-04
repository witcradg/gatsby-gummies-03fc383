import React from 'react';
import PropTypes from 'prop-types';
import { Script } from 'gatsby';
import statelist from '../content/limited-distribution-states.json';
import favicon from './images/favicon.ico';

const limitedStates = statelist.listOfStates;

/**
 * * If we have a path that inclues a statename, check it against 
  the list of states with limited distribution. If the state is on
  that list, use the second snipcart key

 * @returns boolean
 */

const isLimitedState = (propsPath) => {
    if (propsPath && propsPath.search('/locations/') >= 0) {
        const aState = propsPath.split('/')[2];
        if (aState && limitedStates.includes(aState)) {
            return true;
        }
    }
    return false;
};

/**
 * if a page component has been marked as keyword and
 * extended-disribution use the second snipcart key
 *
 * @returns boolean
 */

const isExtendedDistribution = (props) => {
    if (!props.headComponents) return false;

    return props.headComponents.some((component) => {
        return (
            component.type === 'meta' &&
            component.props.content === 'extended-distribution'
        );
    });
};

export default function HTML(props) {
    const propsPath = props.path;

    let apiKey = process.env.API_KEY1;

    if (isLimitedState(propsPath) || isExtendedDistribution(props)) {
        apiKey = process.env.API_KEY2;
    }

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                {/* <meta httpEquiv="x-ua-compatible" content="ie=edge" /> */}
                <meta httpEquiv="x-ua-compatible" content="SAMEORIGIN" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="icon" href={favicon} />
                <link
                    rel="stylesheet"
                    href="https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.css"
                />
                <script
                    async
                    src="https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.js"
                ></script>
                <div
                    id="snipcart"
                    data-config-modal-style="side"
                    data-api-key={apiKey}
                    hidden
                >
                    <billing section="top">
                        <fieldset className="snipcart-form__set">
                            <div className="snipcart-form__field">
                                <snipcart-label
                                    className="snipcart__font--tiny"
                                    for="placeholder"
                                >
                                    Notice: Shipping is for US Residents Only.
                                    Shipping Outside of the USA will not let you
                                    complete your order.
                                </snipcart-label>
                            </div>
                        </fieldset>
                    </billing>
                </div>
                <script
                    id="html-googletagmanager"
                    src="https://www.googletagmanager.com/gtag/js?id=UA-188435036-1"
                />
                <script
                    id="html-gtag"
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-188435036-1');
                    `
                    }}
                />
                <script
                    id="html-snipcart-ready"
                    dangerouslySetInnerHTML={{
                        __html: `
                        document.addEventListener('snipcart.ready', () => {
                            Snipcart.events.on('cart.confirmed', (cartConfirmResponse) => {
                                var goaffproOrder = {
                                        number:cartConfirmResponse.invoiceNumber,
                                        total:cartConfirmResponse.total
                                }
                                goaffproTrackConversion(goaffproOrder)
                            });
                        });`
                    }}
                />
                <Script
                    id="html-goaffpro"
                    src="https://api.goaffpro.com/loader.js?shop=dz407b9f7b"
                />
                <script
                    id="organization"
                    dangerouslySetInnerHTML={{
                        __html: `
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": "https://www.delta8gummies.com/",
                                "sameAs": [
                                    "https://www.facebook.com/delta8gummies/",
                                    "https://twitter.com/@delta8edible",
                                    "https://www.instagram.com/delta8gummiesnow/",
                                    "https://www.youtube.com/@delta8gummies/",
                                
                                ],
                                "url": "https://www.delta8gummies.com",
                                "name": "Delta 8 Gummies",
                                "telephone": "+1-833-358-2899",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+1-833-358-2899",
                                    "availableLanguage": "English",
                                    "contactType": "customer service",
                                    "email": "support@delta8gummies.com"
                                },
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://delta8gummies.com/static/7328b608af9bced3c896dd223f273884/fbf3b/Delta-8-Logo.webp"
                                },
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://delta8gummies.com/static/532029b28815ae0fc44712d646116479/006fb/15.webp"
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Los Angeles",
                                    "addressLocality": "1234",
                                    "addressRegion": "CA",
                                    "postalCode": "1234",
                                    "addressCountry": "USA"
                                }
                            },
                            {
                                "@type": "WebSite",
                                "@id": "https://www.delta8gummies.com/",
                                "name": "Delta 8 Gummies",
                                "url": "https://www.delta8gummies.com/"
                            
                            }
                        ]
                    }   
                    `
                    }}
                />
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array
};
