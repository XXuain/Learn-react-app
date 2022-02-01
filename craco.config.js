const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const { whenDev } = require('@craco/craco');
const CracoAntDesignPlugin = require('craco-antd');
const FastRefreshCracoPlugin = require('craco-fast-refresh');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/plugin/AntDesign/customTheme.less')
      }
    },
    { plugin: FastRefreshCracoPlugin }
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@VIEW': '@/view',
      '@COM': '@/components',
      '@HOOK': '@/hook'
    },
    plugins: [
      new WebpackBar({ profile: true }), // webpack 進度條
      ...whenDev(
        () => [
          new BundleAnalyzerPlugin({
            analyzerMode: 'static', // 輸出分析檔案 index.html
            openAnalyzer: false, // 不自動打開
            reportFilename: path.resolve(__dirname, `analyzer/index.html`) // 輸出位置
          })
        ],
        []
      )
    ]
  }
};
