import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import TemperatureComponent from '../TemperatureComponent'
import WeatherComponent from '../WeatherComponent'

import './style.scss'

@Component({
  template: require('./view.html'),
  components: {
    TemperatureComponent,
    WeatherComponent
  }
})
export default class RootComponent extends Vue {
  private interval

  constructor () {
    super()
  }

  beforeMount () {
    this.$store.dispatch('Weather/loadData')
    this.interval = setInterval(() => {
      this.$store.dispatch('Weather/loadData')
    }, 3600000)
  }

  beforeDestroy () {
    if (!this.interval) return
    clearInterval(this.interval)
    this.interval = null
  }
}
