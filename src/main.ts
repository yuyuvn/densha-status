import Vue from 'vue'
import { IApplication } from './util/IApplication';
import WeatherApp from './apps/weather/weather';
import './sass/main.scss'

registerApp(WeatherApp);

function registerApp(app: IApplication) {
  const element: HTMLElement = document.getElementById(app.elementId);
  if (!element) return;
  new Vue({
    el: `#${app.elementId}`,
    store: app.store,
    render: h => h(app.rootComponent)
  })
}
