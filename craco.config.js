const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const { whenDev } = require('@craco/craco');
const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/plugin/AntDesign/customTheme.less')
      }
    }
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@VIEW': '@/view',
      '@COM': '@/components',
      '@HOOK': '@/hook'
    },
    plugins: [
      new WebpackBar({ profile: true }),
      ...whenDev(() => [new BundleAnalyzerPlugin({ openAnalyzer: false })], [])
    ]
  }
};
