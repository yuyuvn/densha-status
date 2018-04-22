import Vue from 'vue'
import { IApplication } from './IApplication'
import store from '../store'

export default (app: IApplication) => {
  const element: HTMLElement = document.getElementById(app.elementId)
  if (!element) return

  app.stores.forEach((storeModule) => store.registerModule(storeModule.key, storeModule.module))
  return new Vue({
    el: `#${app.elementId}`,
    store: store,
    render: h => h(app.rootComponent)
  })
}
