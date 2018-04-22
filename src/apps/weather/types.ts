import { AxiosResponse } from 'axios'

export interface ApiResponse {
  weather: string
  temperature: number
  raw: AxiosResponse
}
