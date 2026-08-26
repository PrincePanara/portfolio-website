import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://princepanara.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/playground', '/dashboard'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
