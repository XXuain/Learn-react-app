const path = require('path');
const CracoAntDesignPlugin = require('craco-antd');

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
    }
  }
};
