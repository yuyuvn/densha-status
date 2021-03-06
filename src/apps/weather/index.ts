import RootComponent from './components/RootComponent'
import { makeHot, reload } from '../../util/hot-reload'
import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import { store } from './stores'
import { WeatherState } from './stores/types'

export default {
  name: 'Weather',
  elementId: 'weather_info',
  rootComponent: RootComponent,
  stores: [
    {
      key: ['Weather'],
      module: store
    }
  ]
}
