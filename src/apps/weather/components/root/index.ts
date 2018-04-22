import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import temperatureComponent from '../temperature'
import weatherComponent from '../weather'

import './style.scss'

@Component({
  template: require('./view.html'),
  components: {
    temperatureComponent,
    weatherComponent
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
