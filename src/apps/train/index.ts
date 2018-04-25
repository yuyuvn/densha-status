import RootComponent from './components/RootComponent'
import { makeHot, reload } from '../../util/hot-reload'
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { store } from './stores'
import { TrainState } from './stores/types'

export default {
  name: 'Train',
  elementId: 'densha_info',
  rootComponent: RootComponent,
  stores: [
    {
      key: ['Train'],
      module: store
    }
  ]
}
