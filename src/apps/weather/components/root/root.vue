<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
@Component({
  components: {
  },
  computed: { ...mapGetters(['confirmSubmit']) }
})
export default class RootComponent extends Vue {
  confirmSubmit: boolean
  constructor () {
    super()
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div id="exam">

  </div>
</template>
