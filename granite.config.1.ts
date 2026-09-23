import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'milpay-calc-app-1',
  brand: {
    displayName: '군적금 계산기', // granite.config.ts와 동일하게
    primaryColor: '#3182F6',
    icon: 'https://static.toss.im/appsintoss/17827/64557b4b-70e8-4e06-a615-7f606a1fb7e0.png', // granite.config.ts와 동일하게
  },
  web: {
    host: '192.168.1.4',
    port: 5174,
    commands: {
      dev: 'vite --host --port 5174',
      build: 'vite build --outDir dist-1',
    },
  },
  webViewProps: {
    type: 'partner',
  },
  permissions: [{ name: 'clipboard', access: 'read' }],
  outdir: 'dist-1',
  navigationBar: {
    withBackButton: true,
    withHomeButton: true,
  },
});
