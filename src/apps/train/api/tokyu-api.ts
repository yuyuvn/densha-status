import axios, { AxiosResponse } from 'axios'
import { Train, ApiResponse } from '../types'

const line = 'dento'

export default {
  getData (): Promise<ApiResponse> {
    return axios.get(`https://tokyu-tid.s3.amazonaws.com/${line}.json`).then((response: AxiosResponse) => {
      const trains = response.data.trains.map((train) => {
        return {
          operationNumber: train.operation_number,
          operationSerialNumber: train.operation_number,
          kind: train.kind,
          trainKind: train.train_kind,
          delayTime: train.delay_time,
          lineId: train.line_id,
          trainLineId: train.train_line_id,
          stationId: train.station_id,
          sectionId: train.section_id,
          trackNumber: train.track_number,
          up: train.up
        }
      })

      const output: ApiResponse = { trains, raw: response }
      return Promise.resolve(output)
    })
  }
}
