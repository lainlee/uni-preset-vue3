import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import postcssPlugins from './postcss.config.cjs'
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from 'weapp-tailwindcss/vite'

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
    }) as any
  ],
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  }
})
