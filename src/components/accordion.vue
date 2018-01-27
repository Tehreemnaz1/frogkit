<style lang="stylus">
  @require '../stylus/mixins/accordion'

  .fk-accordion
    accordion-mixin()
</style>

<template>
  <section class="fk-accordion">
    <Flex @click="toggle" class="fk-accordion__header" justify="space-between" align="center">
      <Title size="xs"> {{placeholder}} </Title>
      <Icon class="fk-accordion__icon" :class="{'fk-accordion__icon--open' : isOpen}" icon="plus"/>
    </Flex>

    <div v-if="isOpen" class="fk-accordion__content-frame">
      <div class="fk-accordion__content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Accordion',
    props:{
      placeholder: {
        type: String,
        required: true
      },
      open: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        isOpen: this.open
      }
    },
    methods:{
      toggle(){
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
