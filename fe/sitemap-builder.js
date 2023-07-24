import Generator from 'react-router-sitemap-generator';
import RouterComponent from "./src/router/RouterComponent";

const generator = new Generator(
    'https://your-host.com',
    RouterComponent(),
    {
        lastmod: new Date().toISOString().slice(0, 10),
        changefreq: 'monthly',
        priority: 0.8,
    }
);
generator.save('public/sitemap.xml');