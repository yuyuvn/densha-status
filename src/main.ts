import registerApp from './util/register-app'

import './sass/main.scss'

import WeatherApp from './apps/weather/'
registerApp(WeatherApp)

import TrainApp from './apps/train/'
registerApp(TrainApp)

import CheatingApp from './apps/cheat/'
registerApp(CheatingApp)
