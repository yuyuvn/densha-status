import { MutationTree } from 'vuex'
import { WeatherState } from './types'

export const mutations: MutationTree<WeatherState> = {
  setWeatherStatus (state, payload: {weather: string}) {
    state.weatherStatus = payload.weather
  },

  setTemparature (state, payload: {temperature: number}) {
    state.temparature = payload.temperature
  }
}
