import { GetterTree } from 'vuex'
import { WeatherState, RootState } from './types'

export const getters: GetterTree<WeatherState, RootState> = {
  weatherStatus (state: WeatherState): string {
    return state.weatherStatus
  },

  temparature (state: WeatherState): number {
    return state.temparature
  }
}
