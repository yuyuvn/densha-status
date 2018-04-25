import Vue from 'vue'
import * as AceEditor from 'brace'
import * as LanguageTools from 'brace/ext/language_tools'
import * as json from 'brace/mode/json'
import * as tomorrow_night from 'brace/theme/tomorrow_night'
import { Component, Prop, Watch } from 'vue-property-decorator'
import Randomstring from 'randomstring'

import './style.scss'

const mode = {
  json, tomorrow_night, LanguageTools
}

@Component({
  template: require('./view.html')
})
export default class AceEditorComponent extends Vue {
  @Prop()
  value: string

  readonly editorId: string
  private editor: AceEditor.Editor
  private beforeContent: string

  constructor () {
    super()
    this.editorId = Randomstring.generate()
  }

  mounted () {
    this.$nextTick(this.setupAceEditor)
  }

  @Watch('value')
  onValueChanged (value: string) {
    if (this.beforeContent === value) return

    this.beforeContent = value
    this.editor.getSession().setValue(value)
  }

  private setupAceEditor () {
    this.editor = AceEditor.edit(this.editorId)
    this.editor.$blockScrolling = Infinity
    this.setupAutocomplete()
    this.editor.setOptions({
      minLines: 100,
      maxLines: Infinity
    })
    this.editor.setValue(this.value, 1)
    this.editor.getSession().setMode('ace/mode/json')
    this.editor.getSession().setUseWrapMode(true)
    this.editor.setTheme('ace/theme/tomorrow_night')
    this.editor.on('change', () => {
      if (this.beforeContent === this.editor.getSession().getValue()) return

      this.beforeContent = this.editor.getSession().getValue()
      this.$emit('input', this.beforeContent)
    })
  }

  private setupAutocomplete () {
    const langTools = AceEditor.acequire('ace/ext/language_tools')
    this.editor.setOptions({
      enableBasicAutocompletion: true
    })
  }
}
