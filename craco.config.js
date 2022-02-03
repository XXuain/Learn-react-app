const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const { whenProd } = require('@craco/craco');
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
    { plugin: FastRefreshCracoPlugin } // hot reload
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
      ...whenProd(
        () => [
          new BundleAnalyzerPlugin({
            analyzerMode: 'static', // 輸出分析檔案 index.html
            openAnalyzer: false, // 不自動打開
            reportFilename: path.resolve(__dirname, `analyzer/index.html`) // 輸出位置
          })
        ],
        []
      )
    ],
    configure: {
      optimization: {
        splitChunks: {
          cacheGroups: {
            reactLib: {
              test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|@reduxjs\/toolkit\/dist)[\\/]/,
              name: 'react-lib',
              chunks: 'all',
              enforce: true,
              priority: 40,
              reuseExistingChunk: true
            },
            antLib: {
              name: 'ant-lib',
              test: /[\\/]node_modules[\\/](@ant-design|antd\/lib)[\\/]/,
              chunks: 'all',
              enforce: true,
              priority: 30,
              reuseExistingChunk: true
            },
            apolloLib: {
              name: 'apollo-lib',
              test: /[\\/]node_modules[\\/](@apollo\/client|graphql|graphql-tag)[\\/]/,
              chunks: 'all',
              enforce: true,
              priority: 20,
              reuseExistingChunk: true
            },
            commons: {
              chunks: 'all',
              name: 'commons',
              minSize: 0, // 公用模塊的大小限制 bytes
              minChunks: 5, // 公用模塊最少復用次數
              maxInitialRequests: 2,
              priority: 10,
              reuseExistingChunk: true
            },
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name: 'vendors',
              priority: 10,
              enforce: true,
              reuseExistingChunk: true
            }
          }
        }
      }
    }
  }
};
