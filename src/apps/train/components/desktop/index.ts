import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import { Train } from '../../types'
import TrainComponent from '../train'

@Component({
  template: require('./view.html'),
  components: {
    TrainComponent
  },
  computed: { ...mapGetters('Train', ['trains']) }
})
export default class DesktopComponent extends Vue {
  trains: Train[]

  constructor () {
    super()
  }
}
