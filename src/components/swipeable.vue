<template>
  <div v-swipeable="50">
    <slot> </slot>
  </div>
</template>

<script>
  import swipeable from '../directives/swipeable'

  export default {
    name: 'Swipeable',
    directives: {
      swipeable
    }
  }
</script>
