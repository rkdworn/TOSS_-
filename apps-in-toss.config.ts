import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'milpay-calc-app',

  brand: {
    primaryColor: '#3182F6'
  },

  webView: {},
  permissions: [],
  webBundleDir: 'dist',

  navigationBar: {
    withBackButton: true,
    withHomeButton: true,
  }
});