import { GetterTree } from 'vuex'
import { RequestState, RootState } from './types'
import { Request } from '../types'

export const getters: GetterTree<RequestState, RootState> = {
  requests (state: RequestState): Request[] {
    return state.requests
  },

  selectedRequest (state: RequestState): Request {
    return state.selectedRequest
  },

  showModal (state: RequestState): boolean {
    return state.showModal
  }
}
