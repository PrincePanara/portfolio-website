import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://princepanara.vercel.app';

  const routes = [
    '',
    '/about',
    '/projects',
    '/skills',
    '/contact',
    '/resume',
    '/case-studies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : ['/projects', '/about'].includes(route) ? 0.9 : 0.8,
  }));

  return routes;
}
