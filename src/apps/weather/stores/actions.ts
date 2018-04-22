import { ActionTree } from 'vuex'
import { WeatherState, RootState } from './types'
import WeatherApi from '../api/weather-api'

export const actions: ActionTree<WeatherState, RootState> = {
  loadData ({ commit, state }) {
    return WeatherApi.getData().then((response) => {
      commit('setWeatherStatus', { weather: response.weather })
      commit('setTemparature', { temperature: response.temperature })
      return Promise.resolve(response)
    })
  }
}
