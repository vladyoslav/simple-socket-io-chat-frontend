import { defineConfig, mergeConfig } from 'vite'

import { viteSingleFile } from 'vite-plugin-singlefile'
import { minifyHtml } from 'vite-plugin-html'

import config from './vite.config'

export default mergeConfig(
  config,
  defineConfig({
    plugins: [viteSingleFile(), minifyHtml()],

    build: {
      target: 'esnext',
      assetsInlineLimit: 100000000,
      chunkSizeWarningLimit: 100000000,
      brotliSize: false,
      rollupOptions: {
        inlineDynamicImports: true,
        output: {
          manualChunks: () => 'everything.js'
        }
      },
      outDir: './dist'
    }
  })
)
