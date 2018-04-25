import RootComponent from './components/RootComponent'
import { makeHot, reload } from '../../util/hot-reload'
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { store } from './stores'
import { RequestState } from './stores/types'
import VueDraggableResizable from 'vue-draggable-resizable'

Vue.use(require('vue-shortkey'))
Vue.component('vue-draggable-resizable', VueDraggableResizable)

export default {
  name: 'Cheat',
  elementId: 'cheating_panel',
  rootComponent: RootComponent,
  stores: [
    {
      key: ['Cheat'],
      module: store
    }
  ]
}
