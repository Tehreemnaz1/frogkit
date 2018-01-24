<style lang="stylus">
  @require '../stylus/mixins/carousel'

  // .fk-col
  //   col-mixin()


</style>

<template>
  <div class="carousel">

  <Swipeable @swipeleft="moveTo(selected-1)"  @swiperight="moveTo(selected+1)">
    <div class="carousel__track" :style="styles">
      <img v-for="src in slides" class="carousel__slide" :src="src" draggable="false"></img>
    </div>
  </Swipeable>
    <div class="carousel__indicators">
      <label v-for="_,i in slides" :key="i" class="carousel__indicator" :class="{'carousel__indicator--active': i === selected}" @click="moveTo(i)"></label>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'Carousel',
    props:{
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
        max: this.slides.length - 1
      }
    },
    computed: {
      styles(){
        return {
          transform: `translateX(-${this.selected}00%)`
        }
      }
    },
    methods:{
      moveTo(i) {
        if (Math.max(0, Math.min(this.max, i)) === i) {
          this.selected = i
        } else if (this.loop) {
          this.selected = (this.max + 1) - Math.abs(i)
        }
      }
    }
  }
</script>
