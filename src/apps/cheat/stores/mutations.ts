import { MutationTree } from 'vuex'
import { RequestState } from './types'
import { Request } from '../types'

export const mutations: MutationTree<RequestState> = {
  setRequests (state, payload: {requests: Request[]}) {
    state.requests = payload.requests
    state.selectedRequest = null
  },

  hideModal (state) {
    state.showModal = false
  },

  selectRequest (state, payload: { type: string, endpoint: string }) {
    state.selectedRequest = state.requests.find((request) => request.type === payload.type && request.endpoint === payload.endpoint)
  },

  updateRequest (state, payload: { inject: boolean }) {
    state.selectedRequest.inject = payload.inject
  },

  nextState (state, payload: { key: string }) {
    if (state.showModal) return

    const key = payload.key
    switch (state.state) {
      case 0:
      case 1:
        if (key === 'up') state.state += 1
        else state.state = 0
        return
      case 2:
      case 3:
        if (key === 'down') state.state += 1
        else if (key !== 'up') state.state = 0
        return
      case 4:
      case 6:
        if (key === 'left') state.state += 1
        else state.state = 0
        return
      case 5:
      case 7:
        if (key === 'right') state.state += 1
        else state.state = 0
        return
      case 8:
        if (key === 'b') state.state += 1
        else state.state = 0
        return
      case 9:
        if (key === 'a') state.showModal = true
        state.state = 0
        return
    }
  }
}
