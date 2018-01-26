<style lang="stylus">
  @import '../stylus/mixins/description-block'
  .fk-description-block
    description-block-mixin()

</style>

<template>
  <section class="fk-description-block">
    <Title size="md" color="primary" class="m-b-10">{{title}}</Title>
    <div class="fk-description-block__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DescriptionBlock',
    props: {
      title: String,
      default: ''
    }
  }
</script>