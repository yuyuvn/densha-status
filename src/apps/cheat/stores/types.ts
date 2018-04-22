import { Request } from '../types'

export interface RequestState {
  requests: Request[],
  selectedRequest: Request,
  showModal: boolean,
  state: number
}

export interface RootState {

}
