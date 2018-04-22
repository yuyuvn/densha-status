import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { Store } from 'vuex'

export interface IApplication {
  elementId: string
  rootComponent: VueConstructor<Vue>
  store: Store<any>
}
