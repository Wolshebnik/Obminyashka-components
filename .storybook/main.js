module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  features: { storyStoreV7: true },
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen',
    skipBabel: true,
    check: false,
  },
};
