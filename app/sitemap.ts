import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://princepanara.com';

  const routes = [
    '',
    '/about',
    '/projects',
    '/skills',
    '/contact',
    '/resume',
    '/case-studies',
    '/playground'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
