import Vue from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import FormComponent from '../form'

import './style.scss'

@Component({
  template: require('./view.html'),
  components: {
    FormComponent
  }
})
export default class ModalComponent extends Vue {
  @Provide()
  public width: number = 600

  @Provide()
  public height: number = 400

  @Provide()
  public x: number = 0

  @Provide()
  public y: number = 0

  constructor () {
    super()
  }

  public onResize (x, y, width, height) {
    this.$data.x = x
    this.$data.y = y
    if (width >= 300) this.$data.width = width
    if (height >= 200) this.$data.height = height
  }

  public onDrag (x, y) {
    this.$data.x = x
    this.$data.y = y
  }

  public hideModal () {
    this.$store.dispatch('Cheat/hideModal')
  }
}
