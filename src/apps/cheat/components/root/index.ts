import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapState } from 'vuex'
import ModalComponent from '../modal'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

import './style.scss'

@Component({
  template: require('./view.html'),
  components: {
    ModalComponent
  },
  computed: { ...mapState('Cheat', ['showModal']) }
})
export default class RootComponent extends Vue {
  showModal: boolean

  constructor () {
    super()
  }

  mounted () {
    this.$store.dispatch('Cheat/loadData')
    if ('serviceWorker' in navigator) {
      runtime.register()
    }
  }

  public nextState (event) {
    this.$store.dispatch('Cheat/nextState', { key: event.srcKey })
  }
}
