import React from 'react'
import Head from 'next/head'

export default function Metatags({
    title = 'Deadlyslob | Twitch.tv/Deadlyslob',
    description = 'Deadlyslob | Popular content creator and Twitch Streamer',
    image = '/deadlyLarge.jpg',
  }) {
    return (
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Deadlyslob" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
  
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
    );
  }