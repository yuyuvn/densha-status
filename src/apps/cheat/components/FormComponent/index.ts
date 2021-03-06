import Vue from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { Request } from '../../types'

import './style.scss'

@Component({
  template: require('./view.html'),
  computed: { ...mapState('Cheat', ['requests', 'selectedRequest']) }
})
export default class FormComponent extends Vue {
  selectedRequest: Request

  constructor () {
    super()
  }

  public get selected (): string {
    if (!this.selectedRequest) return ''
    else return `${this.selectedRequest.type.toUpperCase()} ${this.selectedRequest.endpoint}`
  }

  public set selected (value: string) {
    const text = value.split(' ')
    const type = text.splice(0, 1)[0]
    const endpoint = text.join(' ')
    this.$store.dispatch('Cheat/selectRequest', { type, endpoint })
  }
}
