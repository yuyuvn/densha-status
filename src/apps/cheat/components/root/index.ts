import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import ModalComponent from '../modal'

import './style.scss'

@Component({
  template: require('./view.html'),
  components: {
    ModalComponent
  },
  computed: { ...mapGetters('Cheat', ['showModal']) }
})
export default class RootComponent extends Vue {
  showModal: boolean

  constructor () {
    super()
  }

  mounted () {
    // this.$store.dispatch('Cheat/loadData')
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope)
        }, (err) => {
          console.log('ServiceWorker registration failed: ', err)
        })
      })
    }
  }

  public nextState (event) {
    this.$store.dispatch('Cheat/nextState', { key: event.srcKey })
  }
}
