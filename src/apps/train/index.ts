import rootComponent from './components/root'
import { makeHot, reload } from '../../util/hot-reload'
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { store } from './stores'
import { TrainState } from './stores/types'

export default {
  name: 'Train',
  elementId: 'densha_info',
  rootComponent: rootComponent,
  stores: [
    {
      key: ['Train'],
      module: store
    }
  ]
}
