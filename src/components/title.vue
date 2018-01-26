<style lang="stylus">
  @require '../stylus/mixins/title'

  .fk-title
    title-mixin()

</style>

<template functional>
  <component v-bind="data.attrs" :is="$options.elementTag(props)" class="fk-title"
  :class="[data.staticClass, data.class, $options.getClasses(props)]"
  :style="$options.getStyles(props)">
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      size: {
        type: [String, Number],
        default: 'md'
      },
      color: {
        type: String,
        default: ''
      },
      weight: {
        type: String,
        default: ''
      }
    },
    getClasses(props) {
      return {
        'fk-title--xl': props.size == 'xl',
        'fk-title--lg': props.size == 'lg',
        'fk-title--md': props.size == 'md',
        'fk-title--sm': props.size == 'sm',
        'fk-title--xs': props.size == 'xs',
        'fk-title--bold': props.weight == 'bold',
        'fk-title--slim': props.weight == 'slim',
        'fk-title--primary': props.color == 'primary',
        'fk-title--secondary': props.color == 'secondary',
        'fk-title--light': props.color == 'light'
      }
    },
    getStyles(props) {
      return {
        fontSize: typeof(props.size) === 'number' ? `${props.size}rem`: props.size
      }
    },
    elementTag(props) {
      const elements = {
        xl: 'h1',
        lg: 'h2',
        md: 'h3',
        sm: 'h4',
        xs: 'h5',
        default: 'h6'
      }
      return elements[props.size] || elements.default
    }
  }
</script>
