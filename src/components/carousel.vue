<style lang="stylus">
  @require '../stylus/mixins/carousel'

  .fk-carousel
    carousel-mixin()

</style>

<template>
  <section class="fk-carousel">

    <Swipeable @swipeLeft="moveTo(selected-1)"  @swipeRight="moveTo(selected+1)" @swiping="swiping" @swipeEnd="moveTo(selected)">
      <div class="fk-carousel__track" :style="styles">
        <img v-for="src,i in slides" :key="i" class="fk-carousel__slide" :src="src" draggable="false"></img>
      </div>
    </Swipeable>

    <div class="fk-carousel__indicators">
      <label v-for="_,i in slides" :key="i" class="fk-carousel__indicator" :class="{'fk-carousel__indicator--active': i === selected}" @click="moveTo(i)"></label>
    </div>

    <Flex class="fk-carousel__previews" justify="space-evenly">
      <img v-for="src,i in slides" :key="i" class="fk-carousel__preview" :class="{'fk-carousel__preview--active': i === selected}" :src="src" @click="moveTo(i)" draggable="false"></img>
    </Flex>

  </section>
</template>

<script>
  export default {
    name: 'Carousel',
    props: {
      slides: {
        type: Array,
        default: () => []
      },
      active: {
        type: Number,
        default: 0
      },
      loop: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selected: this.active,
        styles: {},
        max: this.slides.length - 1,
        lastPosition: null
      }
    },
    mounted() {
      this.translate(this.active)
    },
    methods: {
      moveTo(i) {
        if (Math.max(0, Math.min(this.max, i)) === i) {
          this.selected = i
        } else if (this.loop) {
          this.selected = (this.max + 1) - Math.abs(i)
        }
        this.translate()
      },
      swiping(amount) {
        const x = this.selected - amount
        // Making sure only swiping one step
        const min = Math.max(this.selected - 1, 0)
        const max = Math.min(this.selected + 1, this.max)
        if (x < min) {
          this.translate(min)
        } else if (x > max) {
          this.translate(max)
        } else {
          this.translate(x)
        }
      },
      translate(x = this.selected) {
        // NOTE: making sure that we are recalculating style for the same value
        if (this.lastPosition === x) return
        this.lastPosition = x

        const transition = x === this.selected ? 'transform 300ms ease 0s' : 'transform 0s linear 0s'
        const transform = `translateX(${x * -100}%)`

        this.styles = { transition, transform }
      }
    }
  }
</script>
