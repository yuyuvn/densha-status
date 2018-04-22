import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  template: require('./view.html'),
  computed: { ...mapGetters('Weather', ['weatherStatus']) }
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
