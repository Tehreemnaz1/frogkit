<style lang="stylus">
  @require '../stylus/mixins/input-tooltip'
  .input-tooltip
    input-tooltip-mixin()
</style>

<template>
  <section class="input-tooltip">
    <slot></slot>
    <div class="input-tooltip__info-bubble"> 
      <div class="input-tooltip__content">
        <div>{{title}}</div>
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'InputTooltip',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>