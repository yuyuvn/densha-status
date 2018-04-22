import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import DesktopComponent from '../desktop'
import MobileComponent from '../mobile'

import './style.scss'

@Component({
  template: require('./view.html'),
  components: {
    DesktopComponent,
    MobileComponent
  }
})
export default class RootComponent extends Vue {
  private interval

  constructor () {
    super()
  }

  beforeMount () {
    this.$store.dispatch('Train/loadData')
    this.interval = setInterval(() => {
      this.$store.dispatch('Train/loadData')
    }, 5000)
  }

  beforeDestroy () {
    if (!this.interval) return
    clearInterval(this.interval)
    this.interval = null
  }
}
