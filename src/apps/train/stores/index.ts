import { Module } from 'vuex'
import { TrainState, RootState } from './types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state: TrainState = {
  trains: []
}

export const store: Module<TrainState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
