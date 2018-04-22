import { GetterTree } from 'vuex'
import { TrainState, RootState } from './types'
import { Train } from '../types'

export const getters: GetterTree<TrainState, RootState> = {
  trains (state: TrainState): Train[] {
    return state.trains.filter((train) => {
      if (!train.up) return false // Going to Chuuorinkan
      if (train.kind === 'Ｇ') return false // Going to Oomachi
      if (train.sectionId != null) return train.sectionId >= 72 && train.sectionId <= 80
      else if (train.stationId != null) return train.stationId >= 942 && train.stationId <= 950 || train.stationId === 26
    })
  },

  delay (state: TrainState): number {
    return state.trains.reduce((delay, train) => delay = Math.max(train.delayTime, delay), 0)
  }
}
