import { Module } from 'vuex'
import { WeatherState, RootState } from './types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state: WeatherState = {
  weatherStatus: 'sunny',
  temparature: null
}

export const store: Module<WeatherState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
