import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { ActionTree, GetterTree, Module } from 'vuex'

export interface IApplication {
  name: string
  elementId: string
  rootComponent: VueConstructor<Vue>
  stores: Store[]
}

export interface Store {
  key: string[]
  module: Module<any, RootState>
}

export interface RootState {

}
