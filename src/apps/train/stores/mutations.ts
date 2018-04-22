import { MutationTree } from 'vuex'
import { TrainState } from './types'
import { Train } from '../types'

export const mutations: MutationTree<TrainState> = {
  setTrains (state, payload: {trains: Train[]}) {
    state.trains = payload.trains
  }
}
