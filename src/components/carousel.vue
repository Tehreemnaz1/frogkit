<style lang="stylus">
  @require '../stylus/mixins/carousel'

  // .fk-col
  //   col-mixin()


</style>

<template>
  <div class="carousel">

    <div v-swipeable @swiperight="onSwipeRight" class="carousel__track" :style="styles">
      <img v-for="src in slides" class="carousel__slide" :src="src" draggable="false"></img>
    </div>

    <div class="carousel__indicators">
      <label v-for="_,i in slides" :key="i" class="carousel__indicator" :class="{'carousel__indicator--active': i === selected}" @click="moveTo(i)"></label>
    </div>

  </div>
</template>

<script>
  import swipeable from './swipeable.directive'

  export default {
    name: 'Carousel',
    directives: {
      swipeable
    },
    props:{
      slides: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        selected: 0
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
        console.log('i', i)
        this.selected = i
      },
      onSwipeRight() {
        console.log('onSwipeRight')
        this.selected = this.selected + 1
      },
      onSwipeLeft() {
        this.selected = this.selected - 1
      }

    },
    on:{
      swiperight() {
        console.log('onSwipeRight2')
        
      }
    }
  }
</script>
