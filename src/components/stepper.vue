<style lang="stylus">
  @require '../stylus/mixins/stepper'

  .fk-step
    stepper-mixin()

</style>

<template functional>
  <div class="fk-stepper" :class="[data.staticClass, data.class]">
    <div v-for="i in props.count" :key="i" class="fk-step" :class="$options.classObject(props, i)">
      <span class="">{{i}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Stepper',
    props: {
      count: {
        type: Number,
        default: 1
      },
      active: {
        type: [ Number, Boolean ],
        default: false
      },
      big: {
        type: Boolean,
        default: false
      }
    },
    classObject(props, i) {
      return {
        'fk-step--active': i === props.active,
        'fk-step--done': props.active === false || i < props.active,
        'fk-step--big': props.big,
      }
    }
  }
</script>
