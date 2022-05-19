import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  antd: {
    dark: true,
    compact: true,
  },
  mfsu:{}
});