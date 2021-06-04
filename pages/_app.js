import React from 'react';
import Head from 'next/head';

import 'material-icons/css/material-icons.min.css';
import 'assets/styles/index.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#03a9f4" />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                    crossOrigin="anonymous"
                />
                <link
                    rel="shortcut icon"
                    href={require('assets/img/favicon.ico')}
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href={require('assets/img/apple-icon.png')}
                />
                {/* Canonical SEO */}
                {/*  Social tags      */}
                <meta
                    name="keywords"
                    content="open source, tailwind, tailwindcss, tailwind css, components, library, components library, material design, material design components, tailwind components, tailwindcss components, tailwind css components, react, reactjs, react js, react components, reactjs components, react js components"
                />
                <meta
                    name="description"
                    content="Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It features multiple React components, all written with Tailwind CSS classes and Material Design guidelines. Coming soon components for VueJS, Angular and many more."
                />
                {/* Schema.org markup for Google+ */}
                <meta
                    itemProp="name"
                    content="Material Tailwind by Creative Tim | Material components for Tailwind CSS"
                />
                <meta
                    itemProp="description"
                    content="Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It features multiple React components, all written with Tailwind CSS classes and Material Design guidelines. Coming soon components for VueJS, Angular and many more."
                />
                <meta
                    itemProp="image"
                    content="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-tailwind/material-tailwind-share-image.png"
                />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="product" />
                <meta name="twitter:site" content="@creativetim" />
                <meta
                    name="twitter:title"
                    content="Material Tailwind by Creative Tim | Material components for Tailwind CSS"
                />
                <meta
                    name="twitter:description"
                    content="Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It features multiple React components, all written with Tailwind CSS classes and Material Design guidelines. Coming soon components for VueJS, Angular and many more."
                />
                <meta name="twitter:creator" content="@creativetim" />
                <meta
                    name="twitter:image"
                    content="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-tailwind/material-tailwind-share-image.png"
                />
                <meta
                    name="twitter:data1"
                    content="Material Tailwind by Creative Tim | Material components for Tailwind CSS"
                />
                <meta name="twitter:label1" content="Product Type" />
                <meta name="twitter:data2" content="Free" />
                <meta name="twitter:label2" content="Price" />
                {/* Open Graph data */}
                <meta property="fb:app_id" content="655968634437471" />
                <meta
                    property="og:title"
                    content="Material Tailwind by Creative Tim | Material components for Tailwind CSS"
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:image"
                    content="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-tailwind/material-tailwind-share-image.png"
                />
                <meta
                    property="og:description"
                    content="Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It features multiple React components, all written with Tailwind CSS classes and Material Design guidelines. Coming soon components for VueJS, Angular and many more."
                />
                <meta property="og:site_name" content="Creative Tim" />
                <title>Material Tailwind by Creative Tim</title>
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    );
}
