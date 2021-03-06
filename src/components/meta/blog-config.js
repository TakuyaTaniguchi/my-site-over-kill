import React from 'react'
import Helmet from 'react-helmet'

import {
  blogTitle,
  blogUrl,
  blogDescription,
  blogImageUrl,
  facebookAppId,
  blogAuthorTwitterUserName,
} from '../config/blog-config.js';

export default function Ogp({isRoot, title, description}) {
  const type = isRoot ? 'website' : 'article';
  return(
    <Helmet>
      <meta property="og:title" content={title || blogTitle} />
      <meta property="og:description" content={description || blogDescription} />
      <meta property="og:url" content={blogUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={blogTitle} />
      <meta property="og:image" content='https://www.over-kill.net/img/og-image.jpg' />
      <meta property="fb:app_id" content={facebookAppId} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${blogAuthorTwitterUserName}`} />
    </Helmet>
  )
}