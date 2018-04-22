import { AxiosResponse } from 'axios'

export interface Train {
  operationNumber: number
  operationSerialNumber: number
  kind: string
  trainKind: number
  delayTime: number
  lineId: number
  trainLineId: number
  stationId: number
  sectionId: number
  trackNumber: number
  up: boolean
}

export interface ApiResponse {
  trains: Train[],
  raw: AxiosResponse
}
