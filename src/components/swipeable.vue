<template>
  <div v-swipeable>
    <slot> </slot>
  </div>
</template>

<script>
  import swipeable from './swipeable.directive'

  export default {
    name: 'Swipeable',
    directives: {
      swipeable
    }
  }
</script>
