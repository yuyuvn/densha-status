import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  template: require('./view.html'),
  computed: { ...mapState('Weather', ['weatherStatus']) }
})
export default class WeatherComponent extends Vue {
  weatherStatus: string

  constructor () {
    super()
  }

  public get weatherStatusId (): string {
    return `#${this.weatherStatus}`
  }
}
