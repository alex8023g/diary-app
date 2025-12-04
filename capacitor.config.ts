import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'diary.app',
  appName: 'diary-app',
  webDir: 'dist',
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      // style: 'DARK',
      backgroundColor: '#ffffffff',
    },
  },
};

export default config;
