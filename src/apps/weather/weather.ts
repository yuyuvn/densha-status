const rootComponent = () => import('./components/root').then(RootComponent => RootComponent)
import { makeHot, reload } from '../../util/hot-reload'

if (process.env.ENV === 'development' && module.hot) {
  const rootModuleId = './components/root'

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(rootModuleId, rootComponent,
    module.hot.accept('./components/root', () => reload(rootModuleId, (require('./components/root') as any).RootComponent)))
}

export default {
  elementId: 'weather_info',
  rootComponent: rootComponent,
  store: null
}
