const users = [
  {
    caption: 'User1',
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Electron React Boilerplate',
  tagline: 'A Foundation for Scalable Cross-Platform Apps',
  url: 'https://electron-react-boilerplate.js.com',
  // Ideally, this is what we want
  // baseUrl: '/',
  // Currently we have to use this until we move to custom domain name
  baseUrl: '/site/',
  projectName: 'site',
  organizationName: 'electron-react-boilerplate',

  headerLinks: [
    {doc: 'getting-started', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  users,

  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Electron React Boilerplate`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  algolia: {
    // "Search only api key". Safe to keep this public
    apiKey: "e64a0ebb2892108f64b0ea9042a9c10a",
    indexName: 'electron-react-boilerplate'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
};

module.exports = siteConfig;
