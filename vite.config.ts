import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import postcssPlugins from './postcss.config.cjs'
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from 'weapp-tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const isH5 = process.env.UNI_PLATFORM === 'h5'
const isApp = process.env.UNI_PLATFORM === 'app'
const WeappTailwindcssDisabled = isH5 || isApp

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uvwt({
      disabled: WeappTailwindcssDisabled,
      rem2rpx: true
    }) as any,
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        '@vueuse/core',
        'uni-app'
      ],
      ignore: ['useFetch'],
    }),
    Components({
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
    })
  ],
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  }
})
