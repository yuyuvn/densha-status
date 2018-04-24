import Dexie from 'dexie'

interface Request {
  endpoint: string
  type: string
  body: string
  inject: boolean
}

class MockedRequestDatabase extends Dexie {
  requests: Dexie.Table<Request,number>

  constructor () {
    super('MockedRequestDatabase')
    this.version(1).stores({
      requests: '[endpoint+type]'
    })
  }
}

const serviceWorker = self as any as ServiceWorkerGlobalScope

serviceWorker.addEventListener('install', event => {
  // event.waitUntil(
  //   cacheAssets()
  // );
})

serviceWorker.addEventListener('message', event => {
  switch (event.data.action) {
    case 'skipWaiting':
      if (serviceWorker.skipWaiting) {
        serviceWorker.skipWaiting()
        serviceWorker.clients.claim()
      }
      break
    default:
      break
  }
})

// serviceWorker.addEventListener('activate', event => {
//   const db = new MockedRequestDatabase()
//   db.close()
// })

serviceWorker.addEventListener('fetch', event => {
  if (['https://tokyu-tid.s3.amazonaws.com/dento.json'].indexOf(event.request.url) >= 0) {
    event.respondWith(
      findMockRequest(event.request).then(result => {
        const responseInit = {
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json',
            'X-Mock-Response': 'yes'
          }
        }
        return new Response(result.body, responseInit)
      }).catch((e) => {
        return fetch(event.request).then((response) => {
          const cloneResponse = response.clone()
          response.json().then(data => {
            insertMockRequest(event.request, response, data)
          }).catch((e) => { console.error(e) })
          return cloneResponse
        })
      })
    )
  }
})

function findMockRequest (request) {
  const db = new MockedRequestDatabase()
  return db.requests.where({ endpoint: request.url, type: request.method })
    .first(data => data)
}

function insertMockRequest (request, response, data) {
  const db = new MockedRequestDatabase()
  db.requests.put({ endpoint: request.url, type: request.method, body: JSON.stringify(data), inject: false })
}
