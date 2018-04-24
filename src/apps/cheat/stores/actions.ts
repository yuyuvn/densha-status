import { ActionTree } from 'vuex'
import { RequestState, RootState } from './types'
import DbApi from '../api/db-api'

export const actions: ActionTree<RequestState, RootState> = {
  loadData ({ commit, state }) {
    return DbApi.getData().then((requests) => {
      commit('setRequests', { requests })
    })
  },

  selectRequest ({ commit, state }, payload) {
    commit('selectRequest', payload)
  },

  updateBody ({ commit, state }, payload) {
    commit('updateBody', payload)
  },

  hideModal ({ commit, state }) {
    commit('hideModal')
  },

  nextState ({ commit, state }, payload) {
    commit('nextState', payload)
  },

  mockRequest ({ commit, state }) {
    DbApi.mockRequest(state.selectedRequest.endpoint, state.selectedRequest.type, state.selectedRequest.body).then(() => {
      commit('updateRequest', { inject: true })
    })
  },

  stopMockRequest ({ commit, state }) {
    DbApi.stopMockRequest(state.selectedRequest.endpoint, state.selectedRequest.type).then(() => {
      commit('updateRequest', { inject: false })
    })
  }
}
