import React from 'react';
import Helmet from 'react-helmet';
import { SITE_METADATA } from '@/config';

interface IProps {
  lang?: string;
  meta?: any[];
  title: string;
  description?: string;
}

const SEO: React.FC<IProps> = (props) => {
  const { description, lang, meta, title } = props;

  const metaDescription = description || SITE_METADATA.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s · ${SITE_METADATA.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: SITE_METADATA.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
