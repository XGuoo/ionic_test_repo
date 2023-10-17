import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.uofgab.testapp',
  appName: 'hreader',
  webDir: 'dist/hreader',
  bundledWebRuntime:false,
  "server": {
    "url": "http://172.30.166.86:4800/",
    "cleartext": true
  }

};

export default config;
