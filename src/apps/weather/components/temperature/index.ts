import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

import './style.scss'

@Component({
  template: require('./view.html'),
  components: {
  },
  computed: { ...mapGetters('Weather', ['temparature']) }
})
export default class TemperatureComponent extends Vue {
  temparature: number

  constructor () {
    super()
  }

  public get temparatureValue (): string {
    return this.temparature != null ? this.temparature.toString() : '?'
  }
}
