import Vue from 'vue'
import { Component, Prop, Watch, Provide } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import { Train } from '../../types'
import { TweenLite } from 'gsap'

@Component({
  template: require('./view.html')
})
export default class TrainComponent extends Vue {
  @Prop({})
  train: Train

  @Prop({})
  orientation: string

  @Provide()
  public x: number = -999

  @Provide()
  public y: number = -999

  constructor () {
    super()
  }

  beforeMount () {
    this.$data.x = this.getXFromTrain(this.train)
    this.$data.y = this.getYFromTrain(this.train)
  }

  public get trainIcon (): string {
    if (this.orientation === 'horizontal') return '#DentoRightLocal'
    if (this.train.trainKind === 4) return '#DentoDownExpress'
    else if (this.train.trainKind === 3) return '#DentoDownSemiExpress'
    else return '#DentoDownLocal'
  }

  public get delay (): number {
    return this.train ? this.train.delayTime : 0
  }

  public get delayTextX (): number {
    return this.x + (this.isHorizontal ? 10 : 8)
  }

  public get delayTextY (): number {
    return this.y + (this.isHorizontal ? 30 : -5)
  }

  @Watch('train')
  onTrainChanged (train: Train, oldTrain: Train) {
    const newX = this.getXFromTrain(train)
    const newY = this.getYFromTrain(train)

    if (!oldTrain) {
      this.$data.x = newX
      this.$data.y = newY
      return
    }

    if (isNaN(newY)) debugger
    TweenLite.to(this.$data, 1, { x: newX })
    TweenLite.to(this.$data, 1, { y: newY })
  }

  private getXFromTrain (train: Train): number {
    if (this.isHorizontal) {
      const sectionId = train.stationId || train.sectionId
      if (sectionId >= 942) {
        return (950 - sectionId) * 100 + 25
      } else if (sectionId === 26) {
        return 925
      } else if (sectionId >= 72) {
        return (80 - sectionId) * 100 + 75
      }
    } else {
      if (!train.trackNumber) return 200
      if (train.trackNumber > 0) return train.trackNumber * 20 + 200
      if (train.trackNumber < 0) return train.trackNumber * -20 + 260
    }

    return -999
  }

  private getYFromTrain (train: Train): number {
    if (this.isHorizontal) {
      if (!train.trackNumber) return 60
      if (train.trackNumber > 0) return train.trackNumber * 20 + 60
      if (train.trackNumber < 0) return train.trackNumber * -20 + 120
    } else {
      const sectionId = train.stationId || train.sectionId
      if (sectionId >= 942) {
        return (950 - sectionId) * 100 + 30
      } else if (sectionId === 26) {
        return 930
      } else if (sectionId >= 72) {
        return (80 - sectionId) * 100 + 80
      }
    }
    return -999
  }

  private get isHorizontal (): boolean {
    return this.orientation === 'horizontal'
  }
}
