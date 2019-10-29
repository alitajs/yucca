import plugins from './plugin.config';
import themeConfig from './theme.config';

export default {
  plugins,
  targets: {
    ie: 9
  },
  treeShaking: true,
  hash: true,
  theme: themeConfig,
  ignoreMomentLocale: true
};
