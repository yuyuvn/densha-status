import axios, { AxiosResponse } from 'axios'
import { ApiResponse } from '../types'

const apiKey = 'kF5D35l769dzsRC2W03JXKbPQJi8V8ZF'
const location = '1506994'

export default {
  getData (): Promise<ApiResponse> {
    return axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${location}?apikey=${apiKey}&metric=true`).then((response: AxiosResponse) => {
      const temperature: number = parseInt(response.data[0].Temperature.Value, null)
      let weather: string
      if (response.data[0].IconPhrase.match(/rain/)) {
        weather = 'rain'
      } else if (response.data[0].IconPhrase.match(/snow/)) {
        weather = 'snow'
      } else if (response.data[0].IconPhrase.match(/cloud/)) {
        weather = 'cloud'
      } else {
        weather = 'sunny'
      }

      const output: ApiResponse = { temperature, weather, raw: response }
      return Promise.resolve(output)
    })
  }
}
