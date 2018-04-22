import { ActionTree } from 'vuex'
import { TrainState, RootState } from './types'
import TokyuApi from '../api/tokyu-api'

export const actions: ActionTree<TrainState, RootState> = {
  loadData ({ commit, state }) {
    return TokyuApi.getData().then((response) => {
      commit('setTrains', { trains: response.trains })
      return Promise.resolve(response)
    })
  }
}
