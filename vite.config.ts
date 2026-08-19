import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import VueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'
import { VueRouterAutoImports } from 'vue-router/unplugin'
import VueRouter from 'vue-router/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(import.meta.dirname, 'src')}/`,
    },
  },

  plugins: [
    VueRouter(),
    Vue(),
    VueDevTools(),
    svgLoader(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
        VueRouterAutoImports,
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),
    Components({
      dts: true,
    }),
    UnoCSS(),
    viteCompression(),
  ],
})
