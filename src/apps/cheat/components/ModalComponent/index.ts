import Vue from 'vue'
import { mapState } from 'vuex'
import { Component, Prop, Provide } from 'vue-property-decorator'
import FormComponent from '../FormComponent'
import AceEditorComponent from '../AceEditorComponent'
import beautify from 'json-beautify'

import './style.scss'

@Component({
  template: require('./view.html'),
  components: {
    FormComponent,
    AceEditorComponent
  },
  computed: { ...mapState('Cheat', ['selectedRequest']) }
})
export default class ModalComponent extends Vue {
  selectedRequest: Request

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
    if (height >= 400) this.$data.height = height
  }

  public onDrag (x, y) {
    this.$data.x = x
    this.$data.y = y
  }

  public hideModal () {
    this.$store.dispatch('Cheat/hideModal')
  }

  public inject () {
    this.$store.dispatch('Cheat/mockRequest')
  }

  public unmock () {
    this.$store.dispatch('Cheat/stopMockRequest')
  }

  public get body (): string {
    if (!this.selectedRequest) return ''
    return beautify(JSON.parse(this.selectedRequest.body), null, 2, 80)
  }

  public set body (body: string) {
    this.$store.dispatch('Cheat/updateBody', { body: JSON.stringify(JSON.parse(body)) })
  }
}
