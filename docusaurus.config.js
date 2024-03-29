module.exports = {
  title: 'mdzkm.',
  tagline: 'Blog, Tutorials, and Personal Archives',
  url: 'https://resources-mdzkm.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mdzkm', // Usually your GitHub org/user name.
  projectName: 'resources', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'ef445b82b269b0794ad475c21c8dd64e',
      indexName: 'mdzkm',
    },
    navbar: {
      title: 'mdzkm.',
      logo: {
        href: 'https://mdzkm.netlify.app/',
        target: '_self'
      },
      links: [
        {
          to: '/',
          label: 'Tutorials and Archives',
          position: 'right',
        },
        {
          href: 'https://blog-mdzkm.netlify.app/',
          label: 'Blog',
          position: 'right',
          target: '_self',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'About',
              href: 'https://mdzkm.netlify.app/',
              target: '_self',
            },
            {
              label: 'Projects',
              href: 'https://mdzkm.netlify.app/projects',
              target: '_self',
            },
            {
              label: 'Tutorials and Archives',
              to: '/',
            },
            {
              label: 'Blog',
              href: 'https://blog-mdzkm.netlify.app/',
              target: '_self',
            },
          ],
        },
        {
          title: 'Codebase',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mdzkm',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/mdzkm',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/mdzkm/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mdzkm',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/mdzkm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} mdzkm.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Set this value to '/'.
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'about-this-website',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/mdzkm/resources/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
