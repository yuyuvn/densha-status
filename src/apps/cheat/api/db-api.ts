import { Request } from '../types'
import Dexie from 'dexie'

class MockedRequestDatabase extends Dexie {
  requests: Dexie.Table<Request,number>

  constructor () {
    super('MockedRequestDatabase')
    this.version(1).stores({
      requests: '[endpoint+type]'
    })
  }
}

export default {
  getData (): Promise<Request[]> {
    const db = new MockedRequestDatabase()
    return db.requests.toArray()
  },

  mockRequest (endpoint: string, type: string, body: string) {
    const db = new MockedRequestDatabase()
    return db.requests.where({ endpoint, type }).modify({ body, inject: true })
  },

  stopMockRequest (endpoint: string, type: string) {
    const db = new MockedRequestDatabase()
    return db.requests.where({ endpoint, type }).modify({ inject: false })
  }
}
