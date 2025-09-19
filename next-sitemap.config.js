/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kartick.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Custom transform for different page types
    const customConfig = {
      loc: path,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Higher priority for main pages
    if (path === '/') {
      customConfig.priority = 1.0;
      customConfig.changefreq = 'weekly';
    } else if (path.startsWith('/projects/')) {
      customConfig.priority = 0.8;
      customConfig.changefreq = 'monthly';
    } else if (['/about', '/contact', '/experience'].includes(path)) {
      customConfig.priority = 0.9;
      customConfig.changefreq = 'monthly';
    }

    return customConfig;
  },
};
