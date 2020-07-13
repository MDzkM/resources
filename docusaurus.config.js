module.exports = {
  title: 'mdzkm.',
  tagline: 'Blog, Tutorials, and Personal Archives',
  url: 'https://resources-mdzkm.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mdzkm', // Usually your GitHub org/user name.
  projectName: 'DDP-Docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'mdzkm.',
      // logo: {
      //   alt: 'mdzkm.',
      //   src: 'img/logo.svg',
      // },
      links: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Tutorials and Archives',
          position: 'left',
        },
        {
          href: 'https://blog.mdzkm.wtf',
          label: 'Blog',
          position: 'left',
          target: '_self',
        },
        {
          href: 'https://mdzkm.wtf',
          label: 'Return to Profile Web',
          position: 'right',
          target: '_self',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorial and Archives',
          items: [
            {
              label: 'About',
              to: '/',
            },
            {
              label: 'Tutorials',
              to: '/introduction/',
            },
            {
              label: 'Archives',
              to: '/introduction/',
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
              label: 'Instagram',
              href: 'https://instagram.com/mdzkm',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.mdzkm.wtf',
              target: '_self',
            },
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
          editUrl:
            'https://github.com/mdzkm/resources/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
