import Vue, { ComponentOptions } from 'vue'
import VueRouter from 'vue-router'
import { CombinedVueInstance } from 'vue/types/vue'
import router from '../../../src/router/router'

export function getStubVueContext (component: any): CombinedVueInstance<Vue, {}, {}, {}, {}> {
  Vue.config.devtools = false
  Vue.config.productionTip = false
  Vue.config.silent = true
  Vue.use(VueRouter)
  const Constructor = Vue.extend(component)

  let componentOptions: ComponentOptions<Vue> = {
    router: router
  }

  let appInstance = new Constructor(componentOptions)
  appInstance.$mount()

  return appInstance
}
