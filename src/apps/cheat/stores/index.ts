import { Module } from 'vuex'
import { RequestState, RootState } from './types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state: RequestState = {
  requests: [],
  selectedRequest: null,
  showModal: false,
  state: 0
}

export const store: Module<RequestState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
