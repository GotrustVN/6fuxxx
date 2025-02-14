import React from 'react';
import Head from 'next/head';

import env from '@/env';

import { TSEOProps } from './SEO.types.d';

const SEO: React.FC<TSEOProps> = ({ title, description, image, keywords, url, favicon }) => {
  const data = {
    favicon: `${env.rootUrl}/static/images/favicon.svg`,
    image: `${env.rootUrl}/static/images/logo.svg`,
    title: '6Fuxxx',
    description: 'Where dreams come true!',
    keywords: 'escort girls',
    url: env.rootUrl,
  };

  return (
    <Head>
      <link rel="shortcut icon" href={data.favicon} />
      <link rel="icon" type="image/png" href={data.favicon} />
      <link rel="apple-touch-icon" type="image/png" href={data.favicon} />

      <title>{data.title}</title>
      <meta name="title" content={data.title} />
      <meta property="og:title" content={data.title} />
      <meta property="og:site_name" content={data.title} />

      <meta name="description" content={data.description} />
      <meta property="og:description" content={data.description} />

      <meta name="url" content={data.url} />
      <meta property="og:url" content={data.url} />

      <meta property="og:image" content={data.image} />

      <meta name="keywords" content={data.keywords} />
    </Head>
  );
};

export default SEO;
