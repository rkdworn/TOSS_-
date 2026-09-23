import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'milpay-calc-app',
  brand: {
    displayName: '군적금 계산기',
    primaryColor: '#3182F6',
    icon: 'https://static.toss.im/appsintoss/17827/64557b4b-70e8-4e06-a615-7f606a1fb7e0.png',
  },
  web: {
    host: '192.168.1.4',
    port: 5173,
    commands: {
      dev: 'vite --host',
      build: 'vite build',
    },
  },
  webViewProps: {
    type: 'partner',
  },
  permissions: [],
  outdir: 'dist',
  navigationBar: {
    withBackButton: true,
    withHomeButton: true,
  },
});