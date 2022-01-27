const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@VIEW': '@/view',
      '@COM': '@/components',
      '@HOOK': '@/hook'
    }
  }
};
