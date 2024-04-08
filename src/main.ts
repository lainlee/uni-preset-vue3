/*
 * @Author: lainlee
 * @Date: 2024-03-29 17:30:12
 * @Description:
 */
import { createSSRApp } from 'vue'
import App from './App.vue'
import * as Pinia from 'pinia'
import '@/styles/tailwind.scss'
// #ifdef MP
import 'intl'
import 'intl/locale-data/jsonp/zh-Hans-CN.js'
// #endif

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  return {
    app,
    Pinia
  }
}
